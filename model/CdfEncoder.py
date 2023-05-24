import numpy as np

class CdfEncoder:
    # 범주형 데이터의 CDF 인코딩 객체
    def __init__(self):
        pass

    def fit(self, x): # x = df['asdf']
        tmp = x.value_counts(ascending=True)
        idx, val = tmp.keys(), tmp.values
        cdf_key = np.unique(val)
        cdf_val = cdf_key.cumsum() / cdf_key.sum()

        self.default_value = cdf_val.cumsum()[0]
        
        self.cdf_val_table = dict(zip(
            cdf_key,
            cdf_val, 
        ))
        
        self.cdf_table = dict(zip(
            idx,
            val
        ))

    def transform(self, x): # x = df['asdf']
        ret = []
        for i in x:
            if i in self.cdf_table:
                ret.append(
                    self.cdf_val_table[
                        self.cdf_table[i]
                    ]
                )
            else:
                ret.append(self.default_value)
        return np.array([ret], dtype=np.float32).T

    def fit_transform(self, x):
        self.fit(x)
        return self.transform(x)

class DF2CDF:
    cdf_columns = [
        "target_ip",
    ]

    def __init__(self):
        self.encoders = {}
        
        for column in DF2CDF.cdf_columns:
            self.encoders[column] = CdfEncoder()
    
    def fit(self, df):
        for column in DF2CDF.cdf_columns:
            self.encoders[column].fit(df[column])
    
    def transform(self, df):
        ret = np.zeros((df.shape[0],0))
        
        for column in DF2CDF.cdf_columns:
            ret = np.concatenate([
                ret,
                self.encoders[column].transform(df[column])
            ],axis=1)
        
        return ret

    def fit_transform(self, df):
        self.fit(df)
        return self.transform(df)
