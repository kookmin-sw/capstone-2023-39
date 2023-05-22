import styled from "styled-components";
import Modal from "antd/es/modal/Modal";
import { Table } from "antd";

export const CustomModal = styled(Modal)`
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
  margin-top: 22px;

  .ant-table-thead .ant-table-cell {
    font-size: 18px;
    font-weight: 500;
    background: #2c3e4f;
    color: #fff;
    opacity: 0.9;
  }
  .ant-table-cell {
  }
`;
