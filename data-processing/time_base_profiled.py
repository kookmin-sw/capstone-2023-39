from scripts import file_handler
from scripts import utils as util
from datetime import datetime
from scripts import analysis as ay
import os
import pickle
import pandas as pd
import sys
import tqdm
current_dir = os.getcwd()
sys.path.append(os.path.join(current_dir, 'scripts'))


# with open('./ip_score_date_dict_new.pkl', 'rb') as f:
#     abusedIP = pickle.load(f)

# with open('./greynoise_new.pkl', 'rb') as f:
#     grey = pickle.load(f)


def time_Profiling(flow_df, time_window, outer_ip_list):

    vector_keys = []
    vectors = []
    time_base = {}

    for ip in tqdm.tqdm(outer_ip_list):
        time_base[ip] = []

    for row in tqdm.tqdm(flow_df.values):

        if (row[3][-1] != '_' and row[4][-1] != '_') or (row[3][-1] == '_' and row[4][-1] == '_'):
            continue

        ip = row[3] if row[4][-1] == '_' else row[4]

        time_base[ip].append(row)

    for ip in tqdm.tqdm(time_base.keys()):
        tmp = []
        delflows = []
        while(len(time_base[ip]) > 0):
            if len(time_base[ip]):
                ip_time = time_base[ip][0][0]
                for ip_flow in time_base[ip]:
                    if ip_flow[0] < ip_time + time_window:
                        tmp.append(ip_flow)
            if(len(tmp)):
                vector, labels = ay.vectorize(tmp, ip)
                vector_keys.append('{}_{}_{}'.format(
                    tmp[0][0], tmp[-1][0], ip))
                vectors.append([vector, labels])
                time_base[ip] = time_base[ip][len(tmp):]
            tmp = []
            delflows = []
    return vectors, vector_keys


def profiling(flows):
    flow_df = util.csvProcessing(flows[0])
    for i in range(1, len(flows)):
        tmp = util.csvProcessing(flows[i])
        flow_df = pd.concat([flow_df, tmp])

    flow_df = flow_df[['first', 'last', 'urg_cnt', 'source', 'destination', 'src_port',
                       'dst_port', 'prot', 'in_pkts', 'in_bytes', 'out_pkts', 'out_bytes']]

    outer_ip = [x for x in flow_df['source'] if x[-1] != '_'] + \
        [x for x in flow_df['destination'] if x[-1] != '_']
    outer_ip = set(outer_ip)

    # collected_ip = [x for x in outer_ip if x in grey.keys()
    #                 and x in abusedIP.keys()]

    # # malicious_ip = []
    # benign_ip = []
    # unknown_ip = []
    # for ip in collected_ip:
    #     if (abusedIP[ip][-1][0] >= 90) and (grey[ip][0]['noise'] == True and len(grey[ip][1]) >= 1):
    #         malicious_ip.append(ip)
    #     elif (abusedIP[ip][-1][0] == 0 and (grey[ip][0]['noise'] == False and grey[ip][1] == 0)):
    #         benign_ip.append(ip)
    #     else:
    #         unknown_ip.append(ip)
    flow_df = flow_df.sort_values('first')
    tmp_first = flow_df['first'].to_list()
    tmp_last = flow_df['last'].to_list()
    for i in range(len(tmp_first)):
        tmp_first[i] = tmp_first[i]//1000000
        tmp_last[i] = tmp_last[i]//1000000
    flow_df['first'] = tmp_first
    flow_df['last'] = tmp_last

    # total_ip_set = malicious_ip+benign_ip+unknown_ip
    # total_ip_set = set(total_ip_set)
    # drop_idx = []
    collected_df = flow_df
    total_ip_set = set(flow_df['source'].tolist() +
                       flow_df['destination'].tolist())
    time_base_vector, time_base_key = time_Profiling(
        collected_df, 1800, total_ip_set)

    features = ['target_ip', 'card_inner_ip', 'card_inner_port',
                'freq_well_known_inner_port', 'freq_register_inner_port', 'freq_dynamic_inner_port',
                'sum_inner_pkts', 'avg_inner_pkts', 'std_inner_pkts', 'sum_outer_pkts', 'avg_outer_pkts',
                'std_outer_pkts', 'sum_inner_byts', 'avg_inner_byts', 'std_inner_byts',
                'sum_outer_byts', 'avg_outer_byts', 'std_outer_byts', 'sum_dur', 'avg_dur', 'std_dur']
    tmp = []
    for vector in time_base_vector:
        tmp.append(vector[0])

    tmp1 = []
    for key in time_base_key:
        tmp1.append(key)
    tmp2 = []
    for vector in time_base_vector:
        tmp2.append(len(vector[1]))

    profiled_df = pd.DataFrame(tmp, columns=features)
    profiled_df['time_stamp'] = tmp1
    profiled_df['num_flows'] = tmp2

    time_list = profiled_df['time_stamp']
    start_times = []
    end_times = []
    for time in time_list:
        start_time = time.split('_')[0]
        end_time = time.split('_')[1]
        start_times.append(start_time)
        end_times.append(end_time)

    for i in range(len(start_times)):
        timestamp = int(start_times[i])
        date = datetime.fromtimestamp(timestamp)
        start_times[i] = str(date)
        timestamp1 = int(end_times[i])
        date1 = datetime.fromtimestamp(timestamp1)
        end_times[i] = str(date1)

    profiled_df['start_time'] = start_times
    profiled_df['end_time'] = end_times

    profiled_df = profiled_df[['start_time', 'end_time', 'target_ip', 'num_flows', 'card_inner_ip', 'card_inner_port',
                               'freq_well_known_inner_port', 'freq_register_inner_port', 'freq_dynamic_inner_port',
                               'sum_inner_pkts', 'avg_inner_pkts', 'std_inner_pkts', 'sum_outer_pkts', 'avg_outer_pkts',
                               'std_outer_pkts', 'sum_inner_byts', 'avg_inner_byts', 'std_inner_byts',
                               'sum_outer_byts', 'avg_outer_byts', 'std_outer_byts', 'sum_dur', 'avg_dur', 'std_dur']]

    result_df = profiled_df
    output_csv_paths = []
    for flow in flows:
        output_csv_filename = os.path.splitext(
            os.path.basename(flow))[0] + '.csv'
        output_csv_path = os.path.join(
            'C:\\model\\dataset', output_csv_filename)
        result_df.to_csv(output_csv_path, index=False)
        output_csv_paths.append(output_csv_path)
    return output_csv_paths

################################################################


new_csv_files = file_handler.update_tmp_txt_and_return_new_csv_files()

for f in new_csv_files:
    print(profiling([f]))
