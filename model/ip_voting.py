import pandas as pd
import numpy as np
from collections import Counter
      
def IP_voting(df):
    theta = 0.6
    target_ip = df['target_ip']
    predict = df['predict'].values
    
    total_dict = Counter(target_ip.values)

    predict_mal_dict = {}
    
    for idx, data in enumerate(target_ip.values):
        if data in predict_mal_dict:
            if predict[idx] == 1:
                predict_mal_dict[data] += 1
        else:
            if predict[idx] ==1:
                predict_mal_dict[data] = 1
            else:
                predict_mal_dict[data] = 0  
        
    
    pred_IP_dict = dict()
    
    for k in total_dict.keys():
        
        tmp = ( 1 if predict_mal_dict[k] / total_dict[k] >= theta else 0)
        pred_IP_dict[k]=tmp

    ip_predicts = target_ip.apply(lambda x : pred_IP_dict[x])
    
    ip_predicts = ip_predicts.values
    return ip_predicts
