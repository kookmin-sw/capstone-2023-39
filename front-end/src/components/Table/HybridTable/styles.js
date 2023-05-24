import { Table } from "antd";
import styled from "styled-components";

export const TableContainer = styled(Table)`
  width: 98%;
  height: 100%;
  min-height: 570px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  .ant-table-thead .ant-table-cell {
    background-color: #5584ac;
    font-size: 16px;
  }
  .ant-table-tbody > tr > td {
    border-bottom: none !important;
  }
  .ant-table-empty {
    height: 565px;
    border-radius: 10px;
  }
`;
