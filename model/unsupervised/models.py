'''
비지도 모델을 생성하는 코드입니다.
'''

from pyod.models.ecod import ECOD
from typing import TypeVar, List
import torch 
import torch.nn as nn
from torch.nn import functional as F
import numpy as np

class AutoEncoder(nn.Module):
    
    def __init__(self, input_dims, max_dims, latent_dims, device='cpu'):
        super(AutoEncoder, self).__init__()
        self.device = device
        encoder_layers = []
        last_idx = len(list(range(int(np.log2(max_dims)), int(np.log2(latent_dims))-1, -1))) -1
        for i, log_dim in enumerate(range(int(np.log2(max_dims)), int(np.log2(latent_dims))-1, -1)):
            if i == 0:
                encoder_layers.append(nn.Linear(input_dims, 2**log_dim))
                encoder_layers.append(nn.LeakyReLU())
            elif i == last_idx:
                encoder_layers.append(nn.Linear(2**(log_dim+1), 2**log_dim))
            else:
                encoder_layers.append(nn.Linear(2**(log_dim+1), 2**log_dim))
                encoder_layers.append(nn.LeakyReLU())

        decoder_layers = []
        for i, log_dim in enumerate(range(int(np.log2(latent_dims)), int(np.log2(max_dims))+1)):
            if i == 0:
                decoder_layers.append(nn.Linear(2 ** log_dim, 2 ** (log_dim + 1)))
                decoder_layers.append(nn.LeakyReLU())
            elif i == last_idx:
                decoder_layers.append(nn.Linear(2 ** log_dim, input_dims))
                decoder_layers.append(nn.Sigmoid())
            else:
                decoder_layers.append(nn.Linear(2 ** log_dim, 2 ** (log_dim + 1)))
                decoder_layers.append(nn.LeakyReLU())

        self.encoder = nn.Sequential(*encoder_layers)
        self.decoder = nn.Sequential(*decoder_layers)

        self.to(self.device)

    def forward(self, x):
        x = x.to(self.device)
        z = self.encoder(x)
        recons = self.decoder(z)
        return recons

    def mse(self, x, recons, reduction='mean'):
        x = x.to(self.device)
        mse = F.mse_loss(x, recons, reduction=reduction)
        if reduction == 'none':
            mse = torch.mean(mse, dim=1)
        mse = mse
        return mse

Tensor = TypeVar('torch.tensor')

class VariationalAutoEncoder(nn.Module):
    
    def __init__(self, input_dims, max_dims ,latent_dims,device='cpu'):
        super(VariationalAutoEncoder, self).__init__()
        self.device = device
        self.encoder = nn.Sequential(
            nn.Linear(input_dims, 32),
            nn.LeakyReLU(),
            nn.Linear(32, 16),
            nn.LeakyReLU(),
            nn.Linear(16, 8),
            nn.LeakyReLU()
        )
        self.mu = nn.Linear(8, latent_dims)
        self.var = nn.Linear(8, latent_dims)

        self.decoder = nn.Sequential(
            nn.Linear(latent_dims, 8),
            nn.LeakyReLU(),
            nn.Linear(8, 16),
            nn.LeakyReLU(),
            nn.Linear(16, 32),
            nn.LeakyReLU(),
            nn.Linear(32, input_dims)
        )    
    
    def encode(self, input_tensor: Tensor) -> List[Tensor]:
        result = self.encoder(input_tensor)
        mu = self.mu(result)
        log_var = self.var(result)

        return [mu, log_var]

    def decode(self, z: Tensor) -> Tensor:
        result = self.decoder(z)
        return result

    def reparameterize(self, mu: Tensor, log_var: Tensor) -> Tensor:
        """
        Reparameterization trick to sample from N(mu, var) from
        N(0,1).
        :param mu: (Tensor) Mean of the latent Gaussian [B x D]
        :param logvar: (Tensor) Standard deviation of the latent Gaussian [B x D]
        :return: (Tensor) [B x D]
        """
        std = torch.exp(0.5 * log_var)
        eps = torch.randn_like(std)
        return eps * std + mu

    def forward(self, input_tensor: Tensor, **kwargs) -> List[Tensor]:
        mu, log_var = self.encode(input_tensor)
        z = self.reparameterize(mu, log_var)
        return [self.decode(z), input_tensor, z, mu, log_var]
    
    def mse(self, x, recons, reduction='mean'):
        x = x.to(self.device)
        recon = recons[0].to(self.device)
        mse = F.mse_loss(x, recon, reduction=reduction)
        if reduction == 'none':
            mse = torch.mean(mse, dim=1)
        mse = mse
        return mse