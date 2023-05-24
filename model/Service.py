import pandas as pd
from unsupervised.train import *
from unsupervised.test import *
from supervised.FlowClassifier import SLTrainerNN, FlowClassifier, SLTrainer, FlowClassifierNN
from utils import *
import file_handler
from config import Config

def detecting(fc, ul_pp, ul_tester, in_path, thr=0.14, out_path=r'C:\elk_input\data'):
    input = pd.read_csv(in_path)
    
    df_grey, df_labeled = fc.classify(input, theta=0)
    grey_X = ul_pp.transform(df_grey, label=False)
    
    recon = ul_tester.predict_proba(grey_X)
    
    predict = [0 if rce < thr else 1 for rce in recon ]
    df_grey['predict'] = predict
    
    total = pd.concat([df_labeled, df_grey])
    total.to_csv(os.path.join(out_path, in_path.split("\\")[-1]), index=False)
    
    return

if __name__ == '__main__':
    config_ = Config('')
    use_cdf = True
    
    # 지도 데이터 전처리기 불러오기
    sl_pp = SL_Preprocessor(cdf_encoder=use_cdf)
    sl_pp.load_scaler(os.path.join(config_.path.pretrained_path,"sl_scaler.pkl"))
    sl_pp.load_label_enc(os.path.join(config_.path.pretrained_path,"label_enc.pkl"))
    if use_cdf:
        sl_pp.load_cdf(os.path.join(config_.path.pretrained_path,"sl_cdf.pkl"))
    
    # 비지도 데이터 전처리기 불러오기
    ul_pp = UL_Preprocessor(cdf_encoder=use_cdf)
    ul_pp.load_scaler(os.path.join(config_.path.pretrained_path,"ul_scaler.pkl"))
    if use_cdf:
        ul_pp.load_cdf(os.path.join(config_.path.pretrained_path,"ul_cdf.pkl"))
   
    sl_trainer = SLTrainer(config_.sl_model_name, sl_pp)
    sl_trainer.model = load_model(sl_trainer.model, config_.sl_model_name, config_.path.pretrained_path)
    
    ul_trainer = ULTrainer('ecod')
    ul_trainer.model = load_model(ul_trainer.model, config_.ul_model_name, config_.path.pretrained_path)
        
    # 분류 모델들
    fc = FlowClassifier(sl_trainer.model, sl_pp)
    ul_tester = Tester(ul_trainer.model)
    
    input_csv_files = file_handler.update_tmp_txt_and_return_new_csv_files(r'C:\Users\seclab\Desktop\autocapstone\data')

    for in_path in input_csv_files:
        detecting(fc, ul_pp, ul_tester, in_path, out_path=r'C:\Users\seclab\Desktop\autocapstone\result')