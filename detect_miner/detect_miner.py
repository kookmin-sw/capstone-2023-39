from datetime import datetime
from tqdm import tqdm
import pandas as pd
import file_handler
import os


def detect_miner(target_flow_csv, blacklist="coin_blacklist.csv"):
    target_flow = pd.read_csv(target_flow_csv)
    blacklist = pd.read_csv(blacklist)
    blacklist_ip = blacklist['miner_ip'].tolist()
    blacklist_domain = blacklist['domain'].tolist()
    blakclist_dns = dict(zip(blacklist_ip, blacklist_domain))

    ret = []
    for idx in tqdm(target_flow.index):
        tmp = {}

        src_ip = target_flow.at[idx, "source"]
        dst_ip = target_flow.at[idx, "destination"]

        if src_ip in blacklist_ip:
            tmp['inner_ip'] = dst_ip
            tmp['pool_ip'] = src_ip

        if dst_ip in blacklist_ip:
            tmp['inner_ip'] = src_ip
            tmp['pool_ip'] = dst_ip

        if 'pool_ip' in tmp:
            tmp['pool_name'] = blakclist_dns[tmp['pool_ip']]
            tmp['timestamp'] = target_flow.at[idx, 'first'] // 1_000_000
            tmp['date'] = str(datetime.fromtimestamp(tmp['timestamp']))
            ret.append(tmp)
    result_df = pd.DataFrame(ret)
    output_csv_filename = os.path.splitext(os.path.basename(target_flow_csv))[
        0] + '_result.csv'
    output_csv_path = os.path.join('C:\\elk_input\\coin', output_csv_filename)
    result_df.to_csv(output_csv_path, index=False)
    return output_csv_path


new_csv_files = file_handler.update_tmp_txt_and_return_new_csv_files()

for file in new_csv_files:
    print(detect_miner(file))
