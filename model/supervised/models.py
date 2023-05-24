import torch

import torch.nn as nn
import torch.nn.functional as F

from supervised.layers import *

class CBAM2(nn.Module):
    def __init__(self, num_features):
        super().__init__()
        
        self.conv1 = nn.Sequential(
            ConvAtt2d(num_features, 64,K=3, P=1,S=2),
        )
        self.cbam = CBAM(64,64, S=2)
        self.flatten = nn.Sequential(
            nn.MaxPool2d((4,2)),
            nn.Flatten(),
        )
        self.fc = nn.Sequential(
            FClayer(64, 32),
            FClayer(32,3, A=""),
        )
        
    def forward(self, x):
        x = x.unsqueeze(-1).unsqueeze(-1).expand(-1,-1,13,6)
        x = self.conv1(x)
        x = self.cbam(x)
        x = self.flatten(x)
        x = self.fc(x)
        
        return x


class CBAMClassfier(nn.Module):
    def __init__(self, num_features):
        super().__init__()
        
        self.conv1 = nn.Sequential(
            Conv2d(num_features, 64,K=3, P=1,S=2),
        )
        self.cbam = CBAM(64,64, S=2)
        self.flatten = nn.Sequential(
            nn.MaxPool2d((4,2)),
            nn.Flatten(),
        )
        self.fc = nn.Sequential(
            FClayer(64, 32),
            FClayer(32,3, A=""),
        )
        
    def forward(self, x):
        x = x.unsqueeze(-1).unsqueeze(-1).expand(-1,-1,13,6)
        x = self.conv1(x)
        x = self.cbam(x)
        x = self.flatten(x)
        x = self.fc(x)
        
        return x
        
class LwResNetClassfier(nn.Module):
    def __init__(self, num_features):
        super().__init__()
        
        self.admp = nn.AdaptiveMaxPool1d(1)
        self.pool = nn.MaxPool1d(kernel_size=2, stride=2)
        self.pool2 = nn.MaxPool1d(kernel_size=3, stride=1, padding=1)
        
        self.res1 = nn.Sequential(
            Res1d(1, 4),
        )
        self.res2 = nn.Sequential(
            Res1d(4, 8),
        )
        self.res3 = nn.Sequential(
            Res1d(8, 16),
        )
        self.res4 = nn.Sequential(
            Res1d(16, 32),
        )
        self.fc = nn.Sequential(
            nn.Linear(60, 3),
        )

    def forward(self, x):
        agg = torch.zeros(x.shape[0],0,1).cuda()
        x = x.view(x.shape[0], 1, x.shape[1])
        
        # Unit 1
        x = self.res1(x)
        agg = torch.concat([
            agg, 
            self.admp(x)
        ], axis=1)
        x = self.pool(x)
        
        # Unit 2 
        x = self.res2(x)
        agg = torch.concat([
            agg, 
            self.admp(x)
        ], axis=1)
        x = self.pool(x)

        # Unit 3 
        x = self.res3(x)
        agg = torch.concat([
            agg, 
            self.admp(x)
        ], axis=1)
        x= self.pool2(x)

        # Unit 4
        x = self.res4(x)
        agg = torch.concat([
            agg, 
            self.admp(x)
        ], axis=1)
        
        # Linear
        agg = agg.squeeze()
        ret = self.fc(agg)
        
        return ret


class CBECAMClassfier(nn.Module):
    def __init__(self, num_features):
        super().__init__()
        
        self.conv1 = nn.Sequential(
            Conv2d(num_features, 64,K=3, P=1,S=2),
        )
        self.cbam = CBECAM(64,64, S=2)
        self.flatten = nn.Sequential(
            nn.MaxPool2d((4,2)),
            nn.Flatten(),
        )
        self.fc = nn.Sequential(
            FClayer(64, 32),
            FClayer(32,3, A=""),
        )
        
        
    def forward(self, x):
        x = x.unsqueeze(-1).unsqueeze(-1).expand(-1,-1,13,6)
        x = self.conv1(x)
        x = self.cbam(x)
        x = self.flatten(x)
        x = self.fc(x)
        
        return x

class RCBECAMClassfier(nn.Module):
    def __init__(self, num_features):
        super().__init__()
        
        self.conv1 = nn.Sequential(
            Conv2d(num_features, 64,K=3, P=1,S=2),
        )
        self.cbam = CBECAM(64,64, S=2, A=False)
        self.flatten = nn.Sequential(
            nn.MaxPool2d((4,2)),
            nn.Flatten(),
        )
        self.res = FClayer(num_features, 64, A="")
        
        self.fc = nn.Sequential(
            FClayer(64, 32),
            FClayer(32,3, A=""),
        )
        
    def forward(self, x):
        res = self.res(x)
        x = x.unsqueeze(-1).unsqueeze(-1).expand(-1,-1,13,6)
        x = self.conv1(x)
        x = self.cbam(x)
        x = self.flatten(x)
        x = F.relu(x + res)
        x = self.fc(x)
        
        return x

class RCBAMClassfier(nn.Module):
    def __init__(self, num_features):
        super().__init__()
        
        self.conv1 = nn.Sequential(
            Conv2d(num_features, 64,K=3, P=1,S=2),
        )
        self.cbam = CBAM(64,64, S=2, A=False)
        self.flatten = nn.Sequential(
            nn.MaxPool2d((4,2)),
            nn.Flatten(),
        )
        self.res = FClayer(num_features, 64, A="")
        
        self.fc = nn.Sequential(
            FClayer(64, 32),
            FClayer(32,3, A=""),
        )
        
        
    def forward(self, x):
        res = self.res(x)
        x = x.unsqueeze(-1).unsqueeze(-1).expand(-1,-1,13,6)
        x = self.conv1(x)
        x = self.cbam(x)
        x = self.flatten(x)
        x = F.relu(x + res)
        x = self.fc(x)
        
        return x


class ConvAttrClassfier(nn.Module):
    def __init__(self, num_features):
        super().__init__()
        
        self.conv1 = nn.Sequential(
            ConvAtt2d(num_features, 64,K=3, P=1,S=2),
        )
        self.cbam = CBAM(64,64, S=2)
        self.flatten = nn.Sequential(
            nn.MaxPool2d((4,2)),
            nn.Flatten(),
        )
        self.fc = nn.Sequential(
            FClayer(64, 32),
            FClayer(32,3, A=""),
        )
        
        
    def forward(self, x):
        x = x.unsqueeze(-1).unsqueeze(-1).expand(-1,-1,13,6)
        x = self.conv1(x)
        x = self.cbam(x)
        x = self.flatten(x)
        x = self.fc(x)
        
        return x

class FCNNClassfier(nn.Module):
    def __init__(self, num_features):
        super().__init__()

        self.fc = nn.Sequential(
            FClayer(num_features, 128),
            FClayer(128,64),
            FClayer(64, 32),
            FClayer(32,3, A=""),
        )
        
        
    def forward(self, x):
        x = self.fc(x)
        
        return x
