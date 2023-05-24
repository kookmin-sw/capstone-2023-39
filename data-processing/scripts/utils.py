
from datetime import datetime
from ipaddress import IPv4Address
import pandas as pd


def inflate_subnet_ip(inside_ip_list):
    total_ip_set = set()
    for inside_ip in inside_ip_list:
        if '/' in inside_ip:
            inside_ip, cidr = inside_ip.split('/')
            start_address = int(IPv4Address(inside_ip))
            end_address = int(IPv4Address(inside_ip)) + 2**(32-int(cidr))-1
            for subnet_address in range(start_address, end_address+1):
                total_ip_set.add(str(IPv4Address(subnet_address)))
        else:
            total_ip_set.add(inside_ip)
    return total_ip_set


def csvProcessing(flow_path):
    netflow = pd.read_csv(flow_path)
    return netflow


def time_to_int(flow_df):
    time_start = []
    time_end = []
    for time in flow_df['first']:
        date_str = time
        date_obj = datetime.strptime(date_str, '%Y-%m-%d %H:%M:%S.%f')
        time_start.append(int(date_obj.timestamp()))
    for time in flow_df['last']:
        date_str = time
        date_obj = datetime.strptime(date_str, '%Y-%m-%d %H:%M:%S.%f')
        time_end.append(int(date_obj.timestamp()))
    flow_df['first'] = time_start
    flow_df['last'] = time_end
    return flow_df
