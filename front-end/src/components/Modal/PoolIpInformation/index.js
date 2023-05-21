import axios from "axios";
import React, { useEffect, useState } from "react";
import * as S from "./styles";

const column = [
  {
    title: "Inner Ip",
    dataIndex: "ip",
    align: "center",
  },
  {
    title: "Connection Time",
    dataIndex: "time",
    align: "center",
  },
];

const parseNModalData = (data) => {
  let result = new Array([]);
  data.inner_ips?.forEach((element, index) => {
    data.dates[index]?.map((time) => result.push({ ip: element, time: time }));
  });
  return result.slice(1);
};

function PoolIpInformation(props) {
  const { open, close, info } = props;
  const { ip, name } = info;
  const [data, setData] = useState("");

  useEffect(() => {
    const response = axios
      .get(`/coin/get_pool_accessed_ip?pool_ip=${ip}`)
      .then(function (response) {
        setData(parseNModalData(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [ip]);

  return (
    <S.CustomModal
      title={name}
      visible={open}
      onCancel={close}
      closable={true}
      centered
      footer={null}
      width={900}
      bodyStyle={{ height: "fit-content" }}
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
