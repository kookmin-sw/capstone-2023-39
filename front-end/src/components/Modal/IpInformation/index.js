import React, { useEffect, useState } from "react";
import * as S from "./styles";
import axios from "axios";
import { Card, List, Typography } from "antd";

const column = [
  "ip",
  "country_code",
  "country_name",
  "region_code",
  "city",
  "longitude",
  "latitude",
  "hostname",
  "domains",
  "os",
  "isp",
];

const parseTableData = (data) => {
  let temp = new Array();
  column.map((col) => {
    temp.push(data[col]);
  });
  return temp;
};

function IpInformation(props) {
  const { open, close, ip } = props;
  const [info, setInfo] = useState("");
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    setComplete(false);
    const response = axios
      /*.get(`/search/ip?ip=${ip}`)*/
      .get(`/search/ip?ip=91.236.51.44`)
      .then(function (response) {
        setInfo(response.data?.shodan);
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
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item>
                <S.InfoItem> {column[index]}</S.InfoItem> {item}
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
