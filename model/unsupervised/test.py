from sklearn.metrics import accuracy_score, precision_recall_curve
from torch.utils.data import DataLoader
import os 
import torch
from tqdm import tqdm 
import sys

sys.path.append('../')
from config import Config

class Tester:
    def __init__(self, model):
        self.model = model
    
    def predict_proba(self, X):
        return self.model.decision_function(X)
        
class TesterNN(Tester):
    def __init__(self,model,config:Config):
        self.model = model
        self.config = config
           
    def predict_proba(self, X, key):
        X = torch.FloatTensor(X)
        
        dataloader_test = DataLoader(X, batch_size=self.config.batch_size, shuffle=False)


        recon_error_list = []
        for idx, batch in enumerate(tqdm(dataloader_test)):
            datas = batch
            datas = datas.to(self.config.device)
            output = self.model(datas)
            r = output[0] - datas
            sp_error_map = torch.sum(r**2, dim=1)**0.5
            s = sp_error_map.size()
            sp_error_vec = sp_error_map.view(s[0], -1)
            recon_error = torch.mean(sp_error_vec, dim=-1)
            recon_error_list += recon_error.cpu().tolist()
        

        return recon_error_list