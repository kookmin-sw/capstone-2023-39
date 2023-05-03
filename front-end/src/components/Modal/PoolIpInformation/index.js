import React from "react";
import * as S from "./styles";
import { Card, List } from "antd";

function PoolIpInformation(props) {
  const { open, close, ip } = props;
  const column = ["connection time", "", "", "", ""];
  const data = [
    "",
    "2023-04-25 00:05:01",
    "2023-04-24 23:56:47",
    "2023-04-24 22:56:23",
    "2023-04-24 22:57:46",
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
      <S.ModalContent>
        <List
          bordered
          pagination
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item>
              <S.InfoItem> {column[index]}</S.InfoItem> {item}
            </List.Item>
          )}
        />
      </S.ModalContent>
    </S.CustomModal>
  );
}

export default PoolIpInformation;
