import pandas as pd
from unsupervised.train import *
from unsupervised.test import *
from supervised.FlowClassifier import *
from utils import *
from config import Config
import pickle
import joblib
from ip_voting import IP_voting
from datetime import datetime



if __name__ == '__main__':
  config_ = Config('')

  isCDF=True
  
  Preprocessor.drop_columns=[
      "target_ip", "Label",'Unnamed: 0', 'start_time', 'end_time']
  
  sl_train = pd.read_csv(config_.path.sl_train_path)
  sl_test = pd.read_csv(config_.path.sl_test_path)
  sl_test = sl_test[sl_test["Label"]!=2]
  
  sl_pp = SL_Preprocessor(cdf_encoder=isCDF)
  ul_train = sl_train[sl_train['Label'] == 0]
  ul_pp = UL_Preprocessor(cdf_encoder=isCDF)
  train_X = ul_pp.fit_transform(ul_train,False)
  
  # 지도모델 학습
  
  sl_trainer = SLTrainer(config_.sl_model_name, sl_pp)
  sl_trainer.fit(sl_train)
  save_model(sl_trainer.model, config_.sl_model_name, config_.path.pretrained_path)
  
  
      
  # 비지도 모델 학습
  config_.input_dims = train_X.shape[1]
  ul_trainer = ULTrainerNN(config_)
  ul_trainer.fit(train_X)
  save_model(ul_trainer.model, config_.ul_model_name, config_.path.pretrained_path)
  ul_trainer.model = load_model(ul_trainer.model, config_.ul_model_name, config_.path.pretrained_path)
  
  # 결과저장하기
  # 지도
  fc = FlowClassifier(sl_trainer.model, sl_pp)
  df_grey, df_labeled = fc.classify(sl_test,theta=0)

  # 비지도
  ul_tester = TesterNN(ul_trainer.model, config_)
  grey_X, grey_y = ul_pp.transform(df_grey, label=True)
  recon = ul_tester.predict_proba(grey_X, df_grey['target_ip'])
  ul_predict = find_optim_f1(grey_y, recon)
  df_grey['predict'] = ul_predict
  
  # total
  

  total = pd.concat([df_labeled, df_grey])
  
  
  # 비지도 모델 threshold 값 구하기
  theta =  find_optim_theta(grey_y, recon)
    
  #ip voting  
  total_predict = IP_voting(total[['target_ip','predict']])
  
  total['predict'] = total_predict
  total.to_csv('output.csv', index=False)
    
  '''
    
  # scaler 저장
  with open('./scaler/threshold.txt', 'wb') as f:
    f.write(theta)
  with open('./scaler/sl_scaler.pkl', 'w') as f:
    pickle.dump(sl_pp.scaler, f)
  with open('./scaler/sl_cdf_encoder.pkl', 'wb') as f:
      pickle.dump(sl_pp.cdf_encoder, f)
  with open('./scaler/sl_preprocessor.pkl', 'wb') as f:
      pickle.dump(sl_pp, f)
  with open('./scaler/ul_scaler.pkl', 'wb') as f:
    pickle.dump(ul_pp.scaler, f)
  with open('./scaler/ul_cdf_encoder.pkl', 'wb') as f:
      pickle.dump(ul_pp.cdf_encoder, f)
  with open('./scaler/ul_preprocessor.pkl', 'wb') as f:
      pickle.dump(ul_pp, f)

'''