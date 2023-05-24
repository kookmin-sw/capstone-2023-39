from xgboost import XGBClassifier
from lightgbm import LGBMClassifier
from sklearn.ensemble import RandomForestClassifier
from supervised.models import *
from torch.utils.data import DataLoader, Dataset
import torch
import numpy as np
import torch.nn as nn
import torch.nn.functional as F
from tqdm.notebook import tqdm
from torch.optim import Adam, SGD, AdamW
from torch.optim.lr_scheduler import StepLR


class FlowDataset(Dataset):
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    
    def __init__(self, data, label=None):
        self.data = torch.tensor(data).float()
        self.label = label
        if self.label is not None:
            self.label = torch.tensor(self.label).float()

    def __len__(self):
        return len(self.data)

    def __getitem__(self, idx):
        if self.label is not None:
            return self.data[idx], self.label[idx]
        else:
            return self.data[idx]

class SLTrainer:
    def __init__(self, model, preprocessor):
        if model == "xgb":
            self.model = XGBClassifier()
        if model == "lgbm":
            self.model = LGBMClassifier()
        if model == "rf":
            self.model = RandomForestClassifier(
                n_estimators=512,
                max_depth=40,
                min_samples_leaf=1,
                min_samples_split=8,
                n_jobs=-1,
            )
            # self.model = RandomForestClassifier()

        self.preprocessor = preprocessor

    def fit(self, df):
        X, Y = self.preprocessor.fit_transform(df)
        self.model.fit(X, Y.argmax(1))

class SLTrainerNN(SLTrainer):
    batch_size = 256
    epoch = 50
    model_path = "./model.pt"
    
    def __init__(self, model, preprocessor):
        if model == "cbam":
            self.modelClass = CBAMClassfier
        if model == "cbecam":
            self.modelClass = CBECAMClassfier
        if model == "lwresnet":
            self.modelClass = LwResNetClassfier
        if model == "rcbecam":
            self.modelClass = RCBECAMClassfier
        if model == "rcbam":
            self.modelClass = RCBAMClassfier
        if model == "cbam2":
            self.modelClass = CBAM2
        self.preprocessor = preprocessor

    def fit(self, df):
        device = FlowDataset.device
        X, Y = self.preprocessor.fit_transform(df)
        trainLoader = DataLoader(
            FlowDataset(X, Y), 
            batch_size = SLTrainerNN.batch_size,
            shuffle = True
        )
        
        self.model = self.modelClass(X.shape[1]).to(device)
        
        loss_fn = nn.CrossEntropyLoss()
        optim = Adam(self.model.parameters(), lr = 1e-3)
        best_loss = 1.

        sched = StepLR(optim, 33, 0.1)

        with tqdm(range(SLTrainerNN.epoch)) as pbar:
            for _ in pbar:
                epoch_loss = 0
                data_count = 0

                for X, Y in trainLoader:
                    X = X.to(device)
                    Y = Y.to(device)

                    # 오토 인코더 학습 
                    O = self.model(X)
                    loss = loss_fn(O, Y)
                    optim.zero_grad()
                    loss.backward()
                    optim.step()                

                    # loss 출력하기 

                    epoch_loss += loss.item()
                    data_count += len(X)

                    pbar.set_postfix( 
                         loss="{:e}".format(epoch_loss / data_count),
                    )

                now_loss = epoch_loss / data_count
                if best_loss > now_loss:
                    best_loss = now_loss
                    torch.save(self.model.state_dict(), SLTrainerNN.model_path)

                sched.step()
                print("epoch : {}, best loss : {:e}".format(_, best_loss))

        print(best_loss)
        model_state_dict = torch.load(SLTrainerNN.model_path, map_location=device)
        self.model.load_state_dict(model_state_dict)
        self.model.eval()
                

class FlowClassifier:
    def __init__(self, model, preprocessor):
        self.model = model
        self.preprocessor = preprocessor
    
    def predict_proba(self, X):
        return self.model.predict_proba(X)
    
    def predict(self, X, theta):
        proba = self.predict_proba(X)
        predict = np.where(np.max(proba, axis=1) >= theta, np.argmax(proba, axis=1), 2)
        return predict        
    
    def transform(self, df, label=False):
        # trasnform해서 testX로 생성
        X = self.preprocessor.transform(df, label)
        return X 
    
    def classify(self, df, theta=0):
        X = self.transform(df)
        predicts = self.predict(X, theta)
        
        grey_idx = predicts==2
        df_grey = df[grey_idx].copy()
        
        labeled_idx = predicts!=2
        df_labeled = df[labeled_idx].copy()
        
        df_labeled['predict'] = predicts[labeled_idx]
        
        return df_grey, df_labeled

class FlowClassifierNN(FlowClassifier):
    def predict_proba(self, X):
        device = FlowDataset.device
        testLoader = DataLoader(
            FlowDataset(X), 
            batch_size = 256,
        )
        ret = None
        for X in testLoader:
            X = X.to(device)
            
            O = self.model(X)
            O = F.softmax(O, dim=1)
            if ret is not None:
                ret = np.concatenate([
                    ret,
                    O.cpu().detach().numpy()
                ])
            else:
                ret = O.cpu().detach().numpy()
        
        return ret
            