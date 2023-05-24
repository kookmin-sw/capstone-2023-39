import torch

import torch.nn as nn
import torch.nn.functional as F
import numpy as np


class FClayer(nn.Module):
    def __init__(self, I, O, A='relu'):
        super().__init__()
        
        self.linear = nn.Linear(I, O, bias=True)
        
        if A:
            nn.init.kaiming_normal_(
                self.linear.weight, mode='fan_in', nonlinearity=A
            )
        
        if A == 'relu':
            self.activation = nn.ReLU()
        elif A == 'leaky':
            self.activation = nn.LeakyReLU(alpha=0.01)
        elif A == 'sigmoid':
            self.activation = nn.Sigmoid()
        elif A == 'tanh':
            self.activation = nn.Tanh()
        else:
            self.activation = nn.Identity()
        
    def forward(self, x):
        x = self.linear(x)
        x = self.activation(x)
        return x
     
class Reslayer(nn.Module):
    def __init__(self, I, O, A='relu'):
        super().__init__()
        
        self.linear = nn.Linear(I, O, bias=True)
#         self.norm = nn.BatchNorm1d(O)
        
        if A:
            nn.init.kaiming_normal_(
                self.linear.weight, mode='fan_in', nonlinearity=A
            )
        
        if A == 'relu':
            self.activation = nn.ReLU()
        elif A == 'leaky':
            self.activation = nn.LeakyReLU(alpha=0.01)
        elif A == 'sigmoid':
            self.activation = nn.Sigmoid()
        elif A == 'tanh':
            self.activation = nn.Tanh()
        else:
            self.activation = nn.Identity()
        
    def forward(self, x):
        res = x
        x = self.linear(x)
#         x = self.norm(x)
#         x  =self.d(x)
        x = self.activation(x + res)
        return x     
 
class Conv2d(nn.Module):
    def __init__(self, I, O, K=3, S=1, P=1, B=False, A="relu"):
        super().__init__()
        self.layer = nn.Conv2d(I, O,
            kernel_size = K,
            stride = S,
            padding = P,
            bias = True,
        )
        
        if B:
            self.bn = nn.BatchNorm2d(O)
        else:
            self.bn = nn.Identity()
    
        if A == 'relu':
            self.activation = nn.ReLU()
        elif A == 'leaky':
            self.activation = nn.LeakyReLU(alpha=0.01)
        elif A == 'sigmoid':
            self.activation = nn.Sigmoid()
        elif A == 'tanh':
            self.activation = nn.Tanh()
        else:
            self.activation = nn.Identity()
        
        if A:
            nn.init.kaiming_normal_(
                self.layer.weight, mode='fan_in', nonlinearity=A
            )

        
    def forward(self, x):
        x = self.layer(x)
        x = self.bn(x)
        x = self.activation(x)
        return x

class ECAttention(nn.Module):
    def __init__(self, K=3):
        super(ECAttention, self).__init__()
        
        self.pool = nn.AdaptiveAvgPool2d((1,1))
        self.conv = nn.Conv1d(1, 1, kernel_size=K, padding=(K - 1) // 2) 
        self.sigmoid = nn.Sigmoid()

    def forward(self, x):
        a = self.pool(x)    # C,W,H -> C,1,1
        a = a.squeeze(-1).transpose(-1,-2) # C,1,1 -> C,1 -> 1,C
        a = self.conv(a)
        a = a.transpose(-1,-2).unsqueeze(-1) # 1,C -> C,1 -> C,1,1
        a = self.sigmoid(a)
        x = x * a.expand_as(x) # C,1,1 -> C,W,H
        return x

class SpatialAttention(nn.Module):
    def __init__(self, K=7):
        super(SpatialAttention, self).__init__()

        self.layer = nn.Sequential(
            nn.Conv2d(2, 1, K, padding = K // 2, bias=False),
            nn.Sigmoid(),
        )

    def forward(self, x):
        avg_out = torch.mean(x, dim=1, keepdim=True)
        max_out, _ = torch.max(x, dim=1, keepdim=True)
        x = torch.cat([avg_out, max_out], dim=1)
        return self.layer(x)

class ChannelAttention(nn.Module):
    def __init__(self, I):
        super().__init__()
        
        self.avg_pool = nn.AdaptiveAvgPool2d(1)
        self.max_pool = nn.AdaptiveMaxPool2d(1)
           
        self.fc = nn.Sequential(
            nn.Conv2d(I, I//8, 1, bias=False),
            nn.ReLU(),
            nn.Conv2d(I//8, I, 1, bias=False),
        )
        self.sigmoid = nn.Sigmoid()

    def forward(self, x):
        avg_out = self.fc(self.avg_pool(x))
        max_out = self.fc(self.max_pool(x))
        out = avg_out + max_out
        return self.sigmoid(out)
class CBAM2(nn.Module):
    def __init__(self, I, O, S=1, A=True):
        super().__init__()
                
        self.layer = nn.Sequential(
            Conv2d(I, O, S=S, A=""),
        )
        
        self.ca = ChannelAttention(O)
        self.sa = SpatialAttention()
        
        if A:
              self.activation = nn.ReLU()
        else:
            self.activation = nn.Identity()

        
        if S != 1 or I != O:
            self.downsample = Conv2d(I, O, K=1, P=0,S=S, A="")
        else:
            self.downsample = nn.Identity()
        
    def forward(self, x):
        res = self.downsample(x)
        
        x = self.layer(x)
        x = self.ca(x) * x
        x = self.sa(x) * x
        
        ret = x + res
        return self.activation(ret)


class CBAM(nn.Module):
    def __init__(self, I, O, S=1, A=True):
        super().__init__()
                
        self.layer = nn.Sequential(
            Conv2d(I, O, S=S),
            Conv2d(O, O, A="")
        )
        
        self.ca = ChannelAttention(O)
        self.sa = SpatialAttention()
        
        if A:
              self.activation = nn.ReLU()
        else:
            self.activation = nn.Identity()

        
        if S != 1 or I != O:
            self.downsample = Conv2d(I, O, K=1, P=0,S=S, A="")
        else:
            self.downsample = nn.Identity()
        
    def forward(self, x):
        res = self.downsample(x)
        
        x = self.layer(x)
        x = self.ca(x) * x
        x = self.sa(x) * x
        
        ret = x + res
        return self.activation(ret)

class CBECAM(nn.Module):
    def __init__(self, I, O, S=1, A=True):
        super().__init__()
                
        self.layer = nn.Sequential(
            Conv2d(I, O, S=S),
            Conv2d(O, O, A="")
        )
        
        self.ca = ECAttention()
        self.sa = SpatialAttention()
        if A:
            self.activation = nn.ReLU()
        else:
            self.activation = nn.Identity()
        
        if S != 1 or I != O:
            self.downsample = Conv2d(I, O, K=1, P=0,S=S, A="")
        else:
            self.downsample = nn.Identity()
        
    def forward(self, x):
        res = self.downsample(x)
        
        x = self.layer(x)
        x = self.ca(x) 
        x = self.sa(x) * x
        
        ret = x + res
        return self.activation(ret)

class Res1d(nn.Module):
    def __init__(self, I, O):
        super().__init__()
        
        self.layer = nn.Sequential(
            nn.Conv1d(I, O,kernel_size=3, padding=1),
            nn.ReLU(),
            nn.Conv1d(O, O,kernel_size=3, padding=1),
        )
        self.downsample = nn.Conv1d(I, O,kernel_size=1)
        self.activation = nn.ReLU()
        
    def forward(self, x):
        res = self.downsample(x)
        x = self.layer(x)
        
        ret = res + x 
        
        return self.activation(ret)
    
class ConvAtt2d(nn.Module):
    def __init__(self, I, O, K=3, S=1, P=1, B=False, A="relu"):
        super().__init__()
        self.layer = nn.Sequential(
            Conv2d(I,O,K,S,P,B,A),
            ECAttention(),
        )
        
    def forward(self, x):
        x = self.layer(x)
        return x

class ResAtt2d(nn.Module):
    def __init__(self, I, O, K=3, S=1, P=1, B=False, A="relu"):
        super().__init__()
        self.layer = nn.Sequential(
            Conv2d(I,O,K,S,P,B,A),
            ECAttention(),
        )
        
    def forward(self, x):
        res = x 
        x = self.layer(x)
        return F.relu(x + res)