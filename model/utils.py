from sklearn.preprocessing import OneHotEncoder
from sklearn.preprocessing import MinMaxScaler
from sklearn.preprocessing import StandardScaler
from CdfEncoder import DF2CDF
import numpy as np
from sklearn.metrics import accuracy_score, precision_recall_curve
from sklearn.metrics import confusion_matrix, f1_score, precision_score, recall_score, accuracy_score
import seaborn as sns
import torch
sns.set(rc = {'figure.figsize':(24,10)})
import matplotlib.pyplot as plt 
import os
import joblib
import pandas as pd

def save_model(model, model_name, path):
    neural_models = ['AE', 'VAE', 'lwresnet', 'cbam']
    if model_name in neural_models:
        save_path = os.path.join(path, f'{model_name}.pt')
        torch.save(model.state_dict(), save_path)
    else:
        save_path = os.path.join(path, f'{model_name}.pkl')
        joblib.dump(model, save_path)
    
def load_model(model, model_name, path):
    neural_models = ['AE', 'VAE', 'lwresnet', 'cbam']
    if model_name in neural_models:
        load_path = os.path.join(path, f'{model_name}.pt')
        device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
        model.to(device)
        model_state_dict = torch.load(load_path, map_location=device)
        model.load_state_dict(model_state_dict)
    else:
        load_path = os.path.join(path, f'{model_name}.pkl')
        model = joblib.load(load_path)
    
    return model
    
def find_optim_theta(tmp_label, recon):
    precisions, recalls, thresholds = precision_recall_curve(tmp_label, recon)
    target_f1 = 0
    target_idx = 0
    for idx in range(len(thresholds)):
        if (recalls[idx] + precisions[idx]) == 0:
            f1 = 0
        else :
            f1 = 2 * (recalls[idx] * precisions[idx]) / (recalls[idx] + precisions[idx])
        if target_f1 < f1:
            target_f1 = f1
            target_idx = idx
    tmp_pred = [1 if i >= thresholds[target_idx] else 0 for i in recon]
    return thresholds[target_idx] 

def find_optim_f1(real_label, recon):
    precisions, recalls, thresholds = precision_recall_curve(real_label, recon)
    target_f1 = 0
    target_idx = 0
    
    for idx in range(len(thresholds)):
        if (recalls[idx] + precisions[idx]) == 0:
            f1 = 0
        else :
            f1 = 2 * (recalls[idx] * precisions[idx]) / (recalls[idx] + precisions[idx])
        if target_f1 < f1:
            target_f1 = f1
            target_idx = idx
    
    tmp_pred = [1 if i >= thresholds[target_idx] else 0 for i in recon]
    print("Accuracy:", round(accuracy_score(real_label, tmp_pred), 4))
    print("Recall:", round(recalls[target_idx], 4))
    print("Precision:", round(precisions[target_idx], 4))
    print("F1-Score:", round(target_f1, 4))
    print("Threshold:", round(thresholds[target_idx], 4))
    
    return tmp_pred

def print_cm(Y, predict):
    cm = confusion_matrix(Y, predict)
    classes = ["Benign", 'Malicious', 'Grey']
    sns.heatmap(cm, annot=True, cmap='Blues', cbar=False, square=True, fmt='g', xticklabels=classes, yticklabels=classes)
    plt.xlabel('Predicted labels')
    plt.ylabel('True labels')
    plt.show()

def print_result(y_true, predict, model=""):
    cm = confusion_matrix(y_true, predict)
    print("[{}]".format(model))
    print("accuracy : ", accuracy_score(y_true, predict))
    print("True Positive : ", cm[1][1])
    print("False Positive : ", cm[0][1])
    print("False Negative : ",  cm[1][0])
    print("True Negative : ",  cm[0][0])
    print("recall : ", recall_score(y_true, predict))
    print("precision: ", precision_score(y_true, predict))
    print("f1-score : ", f1_score(y_true, predict))    

class OHE:
    def __init__(self, label_columns="Label"):
        self.encoder = OneHotEncoder(sparse = False)
        self.label_col = label_columns
        
    def fit(self, df):
        classes = df[self.label_col].unique().tolist()
        classes.sort()
        self.class_vector = np.array([classes]).T
        self.encoder.fit(self.class_vector)
        
    def transform(self, df):
        Y = df[self.label_col].values
        Y = np.expand_dims(Y,1)
        Y = self.encoder.transform(Y)
        return Y
    
    def fit_transform(self, df):
        self.fit(df)
        return self.transform(df)

class Preprocessor:
    drop_columns = [
        "target_ip",
        "start_time",
        "end_time",
    ]
    
    def __init__(self, scaler="minmax", cdf_encoder=False, drop_columns=None, label_columns="Label"):
        self.drop_columns = drop_columns if drop_columns is not None else Preprocessor.drop_columns
        self.label_columns = label_columns
        if scaler == "standard":
            self.scaler = StandardScaler()
        else:
            self.scaler = MinMaxScaler()
        self.cdf_encoder = DF2CDF() if cdf_encoder else None 
    
    def _transform(self, df, fit=False):
        X = df.drop(columns=self.drop_columns).values
        if fit:
            X = self.scaler.fit_transform(X)   
            if self.cdf_encoder:
                X = np.concatenate([
                    self.cdf_encoder.fit_transform(df),
                    X
                ], axis=1)
                
        else:
            X = self.scaler.transform(X)
            if self.cdf_encoder:
                X = np.concatenate([
                    self.cdf_encoder.transform(df),
                    X
                ], axis=1)            
            
        return X
        
    def fit(self, df):
        self.scaler.fit(df.drop(columns=self.drop_columns).values)
        if self.cdf_encoder:
            self.cdf_encoder.fit(df)
        
    def transform(self, df, label=True):
        X = self._transform(df)
        
        if label:
            Y = df[self.label_columns]
            return X, Y
        else:
            return X
    
    def fit_transform(self, df, label=True):
        X = self._transform(df, fit=True)
        
        if label:
            Y = df[self.label_columns]
            return X, Y
        else:
            return X
        
    def save_scaler(self, path):
        if self.scaler is None:
            raise ValueError("Scaler has not been fitted. Call fit() first.")
        joblib.dump(self.scaler, path)

    def load_scaler(self, path):
        self.scaler = joblib.load(path)
        
    def save_cdf(self, path):
        if self.cdf_encoder is None:
            raise ValueError("Scaler has not been fitted. Call fit() first.")
        joblib.dump(self.cdf_encoder, path)

    def load_cdf(self, path):
        self.cdf_encoder = joblib.load(path)

class SL_Preprocessor(Preprocessor):
    def __init__(self, scaler="minmax", cdf_encoder=False, drop_columns=None, label_columns="Label"):
        super().__init__(scaler=scaler, cdf_encoder=cdf_encoder, drop_columns=drop_columns, label_columns=label_columns)
        self.label_encoder = OHE(label_columns)
        
    def fit(self, df):
        super().fit(df)
        self.label_encoder.fit(df)
        
    def transform(self, df, label=True):
        X = self._transform(df)
        
        if label:
            Y = self.label_encoder.transform(df)
            return X, Y
        else:
            return X
    
    def fit_transform(self, df, label=True):
        X = self._transform(df, fit=True)
        
        if label:
            Y = self.label_encoder.fit_transform(df)
            return X, Y
        else:
            return X
    
    def save_label_enc(self, path):
        if self.label_encoder is None:
            raise ValueError("Scaler has not been fitted. Call fit() first.")
        joblib.dump(self.label_encoder, path)

    def load_label_enc(self, path):
        self.label_encoder = joblib.load(path)
    

class UL_Preprocessor(Preprocessor):
    def __init__(self, scaler="minmax", cdf_encoder=False, drop_columns=None, label_columns="Label"):
        super().__init__(scaler=scaler, cdf_encoder=cdf_encoder, drop_columns=drop_columns, label_columns=label_columns)
    
    def transform(self, df, label=None):
        X = self._transform(df)
        
        if label:
            Y = df[self.label_columns]
            return X, Y
        else:
            return X
    
    def fit_transform(self, df, label=True):
        X = self._transform(df, fit=True)
        
        if label:
            Y = df[self.label_columns]
            return X, Y
        else:
            return X
    
        
