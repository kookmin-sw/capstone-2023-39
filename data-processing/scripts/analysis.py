from ipaddress import IPv4Address
import csv
import pandas as pd
from tqdm.auto import tqdm
import numpy as np
import os


def outerPort(flow_list, ip):
    dic = {}
    for flow in flow_list:
        if flow[3] == ip:
            if flow[5] not in dic.keys():
                dic[flow[5]] = 1
            else:
                dic[flow[5]] += 1
        else:
            if flow[6] not in dic.keys():
                dic[flow[6]] = 1
            else:
                dic[flow[6]] += 1
    port_list = sorted(dic.items(), key=lambda x: x[1], reverse=True)
    port = port_list[0][0]
    freq = dic[port]/len(flow_list)
    numOfPort = len(dic)
    return port, freq, numOfPort


def innerPort(flow_list, ip):
    dic = {}
    inner_ports = []
    for flow in flow_list:
        if flow[3] == ip:
            if flow[6] not in dic.keys():
                dic[flow[6]] = 1
            else:
                dic[flow[6]] += 1
            inner_ports.append(flow[6])
        else:
            if flow[5] not in dic.keys():
                dic[flow[5]] = 1
            else:
                dic[flow[5]] += 1
            inner_ports.append(flow[5])
    port_list = sorted(dic.items(), key=lambda x: x[1], reverse=True)
    port = port_list[0][0]
    freq = dic[port]/len(flow_list)
    inner_ports = set(inner_ports)
    numOfPort = len(inner_ports)
    return port, freq, numOfPort


def pstflows(flow_list):
    dic = {}
    for flow in flow_list:
        tmp = ""
        for i in range(9, 12):
            tmp += str(flow[i])
            tmp += ' '
        if tmp not in dic.keys():
            dic[tmp] = 1
        else:
            dic[tmp] += 1
    pst_per_flows = max(dic.values())
    return pst_per_flows


def inner_port_range(flow_list, ip):
    well_known = []
    register = []
    dynamic = []
    for flow in flow_list:
        if ip == flow[3]:
            if flow[6] >= 0 and flow[6] <= 1023:
                well_known.append(flow[6])
            elif flow[6] >= 1024 and flow[6] <= 49151:
                register.append(flow[6])
            elif flow[6] >= 49152 and flow[6] <= 65535:
                dynamic.append(flow[6])
        else:
            if flow[5] >= 0 and flow[5] <= 1023:
                well_known.append(flow[5])
            elif flow[5] >= 1024 and flow[5] <= 49151:
                register.append(flow[5])
            elif flow[5] >= 49152 and flow[5] <= 65535:
                dynamic.append(flow[5])
    return len(well_known), len(register), len(dynamic)

# 12


def card_inner(flow_list, ip):
    inner_ip_list = []
    for flow in flow_list:
        if flow[3] == ip:
            inner_ip_list.append(flow[4])
        else:
            inner_ip_list.append(flow[3])
    inner_ip_list = set(inner_ip_list)
    return len(inner_ip_list)
    # Pkt   byt
    # inner 8    9
    # outer 10   11


def inner_pkts(flow_list, ip):
    pkts = []
    bytes = []
    time_durations = []
    for flow in flow_list:
        if flow[3] != ip:
            pkts.append(flow[8])
            bytes.append(flow[9])
        else:
            pkts.append(flow[10])
            bytes.append(flow[11])
        time_durations.append(flow[1]-flow[0])

    sum_pkts = sum(pkts)
    mean_pkts = np.mean(pkts)
    std_pkts = np.std(pkts)
    sum_bytes = sum(bytes)
    mean_bytes = np.mean(bytes)
    std_bytes = np.std(bytes)
    sum_time = sum(time_durations)
    mean_time = np.mean(time_durations)
    std_time = np.std(time_durations)

    return sum_pkts, mean_pkts, std_pkts, sum_bytes, mean_bytes, std_bytes, sum_time, mean_time, std_time


def outer_pkts(flow_list, ip):
    pkts = []
    bytes = []

    for flow in flow_list:
        if flow[3] == ip:
            pkts.append(flow[8])
            bytes.append(flow[9])
        else:
            pkts.append(flow[10])
            bytes.append(flow[11])

    sum_pkts = sum(pkts)
    mean_pkts = np.mean(pkts)
    std_pkts = np.std(pkts)
    sum_bytes = sum(bytes)
    mean_bytes = np.mean(bytes)
    std_bytes = np.std(bytes)

    return sum_pkts, mean_pkts, std_pkts, sum_bytes, mean_bytes, std_bytes


def vectorize(flow_list, ip):
    inner_port, inner_port_freq, card_inner_port = innerPort(flow_list, ip)
    card_inner_ip = card_inner(flow_list, ip)
    labels = []
    card_well_known_inner_port, card_register_inner_port, card_dynamic_inner_port = inner_port_range(
        flow_list, ip)
    sum_inner_pkts, avg_inner_pkts, std_inner_pkts, sum_inner_bytes, avg_inner_bytes, std_inner_bytes, sum_dur, avg_dur, std_dur = inner_pkts(
        flow_list, ip)
    sum_outer_pkts, avg_outer_pkts, std_outer_pkts, sum_outer_bytes, avg_outer_bytes, std_outer_bytes = outer_pkts(
        flow_list, ip)

    for flow in flow_list:
        labels.append(flow[-1])

    vector = [ip, card_inner_ip, card_inner_port,
              card_well_known_inner_port, card_register_inner_port, card_dynamic_inner_port,
              sum_inner_pkts, avg_inner_pkts, std_inner_pkts, sum_outer_pkts, avg_outer_pkts,
              std_outer_pkts, sum_inner_bytes, avg_inner_bytes, std_inner_bytes,
              sum_outer_bytes, avg_outer_bytes, std_outer_bytes, sum_dur, avg_dur, std_dur

              ]

    return vector, labels
