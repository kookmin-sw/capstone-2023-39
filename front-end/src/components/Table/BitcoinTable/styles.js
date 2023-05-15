import { Table } from "antd";
import styled from "styled-components";

export const TableContainer = styled(Table)`
  width: 98%;
  height: 100%;
  z-index: 1;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  .ant-table-thead .ant-table-cell {
    background-color: #7895b2;
    font-size: 16px;
  }
`;
