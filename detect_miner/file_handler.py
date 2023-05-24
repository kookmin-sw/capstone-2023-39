import os
import glob
from datetime import datetime


def get_timestamp_from_filename(filename):
    timestamp_str = os.path.splitext(os.path.basename(filename))[0].split(
        '_')[1] + '_' + os.path.splitext(os.path.basename(filename))[0].split('_')[2]
    return datetime.strptime(timestamp_str, '%Y-%m-%d_%H-%M-%S')


def load_last_loaded_timestamp(filepath):
    with open(filepath, 'r') as f:
        timestamp_str = f.read().strip()
        return datetime.strptime(timestamp_str, '%Y%m%d_%H%M%S')


def save_last_loaded_timestamp(filepath, timestamp):
    with open(filepath, 'w') as f:
        timestamp_str = timestamp.strftime('%Y%m%d_%H%M%S')
        f.write(timestamp_str)


def get_new_csv_files(directory, last_loaded_timestamp):
    csv_files = glob.glob(os.path.join(directory, '*.csv'))
    new_csv_files = [file for file in csv_files if get_timestamp_from_filename(
        file) > last_loaded_timestamp]

    if new_csv_files:
        new_csv_files.sort(key=get_timestamp_from_filename)
        return new_csv_files
    else:
        print("No new CSV files found.")
        return []


def update_tmp_txt_and_return_new_csv_files():
    current_dir = os.path.dirname(os.path.realpath(__file__))
    timestamp_filepath = os.path.join(current_dir, 'tmp.txt')

    if os.path.exists(timestamp_filepath):
        last_loaded_timestamp = load_last_loaded_timestamp(timestamp_filepath)
    else:
        last_loaded_timestamp = datetime.min

    csv_directory = r'C:\netflow'
    new_csv_files = get_new_csv_files(csv_directory, last_loaded_timestamp)

    if new_csv_files:
        latest_loaded_timestamp = get_timestamp_from_filename(new_csv_files[-1])
        save_last_loaded_timestamp(timestamp_filepath, latest_loaded_timestamp)

    return new_csv_files
