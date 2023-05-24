from unsupervised.models import *
from pyod.models.ecod import ECOD
from tqdm import tqdm
from torch.utils.data import DataLoader
import torch
import sys
from config import Config

class ULTrainer:
    def __init__(self, model):
        if model == "ecod":
            self.model = ECOD()

    def fit(self, X):
        self.model.fit(X)

class ULTrainerNN(ULTrainer):
    # train parameter
    def __init__(self, config:Config):
        self.config = config
        
        if config.ul_model_name == 'AE':
            self.model = AutoEncoder(config.input_dims,config.max_dims,config.latent_dims,config.device)
        else:
            self.model = VariationalAutoEncoder(config.input_dims,config.max_dims,config.latent_dims,config.device)

    def fit(self, X):
        X = torch.FloatTensor(X)
        optimizer = torch.optim.AdamW(self.model.parameters())

        pbar = tqdm(range(self.config.epochs), ascii=True, file=sys.stdout, desc="training")
        
        loss_history = []
        
        dataloader = DataLoader(X, batch_size=self.config.batch_size, shuffle=True)
        for e in pbar:
            
            loss_per_batch = []
            for batch in dataloader:
                recons = self.model(batch)
                rce = self.model.mse(batch, recons)
                optimizer.zero_grad()
                rce.backward()
                optimizer.step()
                loss_per_batch.append(rce.item())
        
            loss_history.append(np.mean(loss_per_batch))
        
            
