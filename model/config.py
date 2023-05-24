import os
import torch 

OUTCOME_DIR = "./"

class Config:
    class __Path:
        def __init__(self, outcome_name: str):    
            self.outcome_dir = os.path.join(OUTCOME_DIR, outcome_name)
            #data path
            self.sl_train_path = os.path.join(self.outcome_dir, "")
            self.sl_test_path = os.path.join(self.outcome_dir, "")
            self.ul_train_path = os.path.join(self.outcome_dir, "")
            self.ul_test_path = os.path.join(self.outcome_dir, "")
            
            #model path
            self.sl_model_path = os.path.join(self.outcome_dir, 'model.pth')
            self.ul_model_path = os.path.join(self.outcome_dir, 'model.pth')
            self.model_threshold = os.path.join(self.outcome_dir, 'threshold.txt')
            self.pretrained_path = os.path.join(self.outcome_dir, 'pretrained')
            #result_path
            self.result_dir = os.path.join(self.outcome_dir, 'result')
            self.test_dir = os.path.join(self.outcome_dir, 'test_dir')
            
            
    def __init__(self,outcome_name):    
        #path
        self.path = self.__Path(outcome_name)
        
        #model
        self.device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
        
        #model supervised
        self.sl_model_name = "rf" # rf / lgbm / xgb / lwresnet / cbam 지원
        
        # model unsupervised
        self.ul_model_name = 'VAE' # ecod / AE / VAE
        self.epochs = 50
        self.batch_size = 256
        
        self.input_dims = 21
        self.max_dims = 64
        self.latent_dims = 8
        
        
#config= Config('')