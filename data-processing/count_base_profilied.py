from scripts import file_handler_batch
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


def count_Profiling(flow_df, timeout, theta1, theta2):

    count_base = {}
    vectors = []
    vector_keys = []
    for row in tqdm.tqdm(flow_df.values):
        now_time = row[0]

        if row[3][-1] != '_' and row[4][-1] != '_':
            continue

        ip = row[3] if row[4][-1] == '_' else row[4]
        if ip in count_base.keys():
            timeout_list = []
            i = 0
            for flow in count_base[ip][::]:
                if now_time - flow[0] >= timeout:
                    if(len(count_base[ip]) >= theta2):
                        vector, labels = ay.vectorize(count_base[ip], ip)
                        vectors.append([vector, labels])
                        vector_keys.append('{}_{}_{}'.format(
                            count_base[ip][0][0], count_base[ip][-1][0], ip))
                        count_base[ip].clear()
                        break
                    else:
                        del count_base[ip][i]
                        i -= 1
                i += 1

        if ip not in count_base.keys():
            count_base[ip] = [row]
        else:
            count_base[ip].append(row)

        if len(count_base[ip]) >= theta1:
            vector, labels = ay.vectorize(count_base[ip], ip)
            vectors.append([vector, labels])
            vector_keys.append('{}_{}_{}'.format(
                count_base[ip][0][0], count_base[ip][-1][0], ip))
            count_base[ip].clear()

    for key_ip in tqdm.tqdm(count_base.keys()):
        if len(count_base[key_ip]) >= theta2:
            vector, labels = ay.vectorize(count_base[key_ip], key_ip)
            vectors.append([vector, labels])
            vector_keys.append('{}_{}_{}'.format(
                count_base[key_ip][0][0], count_base[key_ip][-1][0], key_ip))
            count_base[key_ip].clear()

    return vectors, vector_keys


def profiling(flows):
    output_csv_paths = []
    for i in range(len(flows)):
        batch = flows[i:i+6]  # adjust this value as per your requirements

        flow_df = util.csvProcessing(batch[0])
        for j in range(1, len(batch)):
            tmp = util.csvProcessing(batch[j])
            flow_df = pd.concat([flow_df, tmp])

    flow_df = flow_df[['first', 'last', 'urg_cnt', 'source', 'destination', 'src_port',
                       'dst_port', 'prot', 'in_pkts', 'in_bytes', 'out_pkts', 'out_bytes']]

    outer_ip = [x for x in flow_df['source'] if x[-1] != '_'] + \
        [x for x in flow_df['destination'] if x[-1] != '_']
    outer_ip = set(outer_ip)

    flow_df = flow_df.sort_values('first')
    tmp_first = flow_df['first'].to_list()
    tmp_last = flow_df['last'].to_list()
    for i in range(len(tmp_first)):
        tmp_first[i] = tmp_first[i]//1000000
        tmp_last[i] = tmp_last[i]//1000000
    flow_df['first'] = tmp_first
    flow_df['last'] = tmp_last

    total_ip_set = set(flow_df['source'].tolist() +
                       flow_df['destination'].tolist())
    # total_ip_set = malicious_ip+benign_ip+unknown_ip
    total_ip_set = set(total_ip_set)
    # drop_idx = []
    collected_df = flow_df

    count_base_vector, count_base_key = count_Profiling(
        collected_df, 3600, 10, 5)

    features = ['target_ip', 'card_inner_ip', 'card_inner_port',
                'freq_well_known_inner_port', 'freq_register_inner_port', 'freq_dynamic_inner_port',
                'sum_inner_pkts', 'avg_inner_pkts', 'std_inner_pkts', 'sum_outer_pkts', 'avg_outer_pkts',
                'std_outer_pkts', 'sum_inner_byts', 'avg_inner_byts', 'std_inner_byts',
                'sum_outer_byts', 'avg_outer_byts', 'std_outer_byts', 'sum_dur', 'avg_dur', 'std_dur']
    tmp = []
    for vector in count_base_vector:
        tmp.append(vector[0])

    tmp1 = []
    for key in count_base_key:
        tmp1.append(key)
    tmp2 = []
    for vector in count_base_vector:
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
        output_csv_path = os.path.join('C:\\cti\\dataset', output_csv_filename)
        result_df.to_csv(output_csv_path, index=False)
        output_csv_paths.append(output_csv_path)

    return output_csv_paths

################################################################


def profiling_batches(file_batches):
    output_csv_paths = []

    for batch in file_batches:
        output_csv_paths.extend(profiling(batch))

    return output_csv_paths


################################################################ main() #################################################################
new_csv_files = file_handler_batch.update_tmp_txt_and_return_new_csv_files()

print(profiling_batches(new_csv_files))
