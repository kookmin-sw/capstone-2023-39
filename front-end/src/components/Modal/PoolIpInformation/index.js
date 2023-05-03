import React from "react";
import * as S from "./styles";
import { Card, List } from "antd";

function PoolIpInformation(props) {
  const { open, close, ip } = props;
  const column = [
    {
      title: "Connection Time",
      dataIndex: "time",
      align: "center",
    },
    {
      title: "Inner Ip",
      dataIndex: "ip",
      align: "center",
    },
  ];
  const data = [
    { time: "2023-04-25 00:05:01", ip: "55.246.143.122_" },
    { time: "2023-04-24 23:56:47", ip: "55.246.143.122_" },
    { time: "2023-04-24 22:56:23", ip: "55.246.143.122_" },
    { time: "2023-04-24 22:57:46", ip: "55.246.143.122_" },
  ];

  return (
    <S.CustomModal
      title={"vegas-backup.xmrpool.net"}
      visible={open}
      onCancel={close}
      closable={true}
      centered
      footer={null}
      width={900}
      bodyStyle={{ height: 400 }}
    >
      <S.TableContainer
        columns={column}
        dataSource={data}
        size={"middle"}
        pagination={{ position: ["bottomCenter"] }}
        style={{
          cursor: "pointer",
          position: "relative",
          background: "#ffffff",
        }}
      />
    </S.CustomModal>
  );
}

export default PoolIpInformation;
