import styled from "styled-components";
import Modal from "antd/es/modal/Modal";
import { Table } from "antd";

export const CustomModal = styled(Modal)`
  background-color: #243043;
  .ant-modal-header {
  }
  .ant-modal-title {
    color: #000000;
    font-size: 28px;
  }
`;

export const TableContainer = styled(Table)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  margin-top: 20px;
  .ant-table-thead .ant-table-cell {
    font-size: 18px;
    //background: #ffffff;
    //background-color: #5584ac;
    //background: linear-gradient(to top, #7895b2, #aebdca);
  }
`;
