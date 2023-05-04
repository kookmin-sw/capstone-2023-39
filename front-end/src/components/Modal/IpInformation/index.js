import React, { useEffect, useState } from "react";
import * as S from "./styles";
import axios from "axios";
import { Card, List } from "antd";

const parseTableData = (data) => {
  let columns = Object.keys(data);
  let result = new Array();
  columns.map((col) => {
    if (data[col] !== null) result.push(data[col]);
    else result.push("null");
  });
  return [columns, result];
};

function IpInformation(props) {
  const { open, close, ip } = props;
  const [tableData, setTableData] = useState("");
  const [tableColumn, setTableColumn] = useState("");
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    setComplete(false);
    const response = axios
      /*.get(`/search/ip?ip=${ip}`)*/
      .get(`/search/ip?ip=91.236.51.44`)
      .then(function (response) {
        const [columns, result] = parseTableData(response.data?.shodan);
        setTableColumn(columns);
        setTableData(result);
        setComplete(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [ip]);

  return (
    <S.CustomModal
      title={"Information"}
      visible={open}
      onCancel={close}
      closable={true}
      centered
      footer={null}
      width={950}
      bodyStyle={{ height: 590 }}
    >
      <S.ModalContent>
        {complete ? (
          <List
            bordered
            pagination
            dataSource={tableData}
            renderItem={(item, index) => (
              <List.Item>
                <S.InfoItem> {tableColumn[index]}</S.InfoItem> {item}
              </List.Item>
            )}
          />
        ) : (
          <Card loading style={{ height: 400 }} />
        )}
      </S.ModalContent>
    </S.CustomModal>
  );
}

export default IpInformation;
