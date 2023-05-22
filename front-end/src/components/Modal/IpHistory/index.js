import * as S from "./styles";
import axios from "axios";
import React, { useEffect, useState } from "react";

const parseTableData = (data) => {
  let result = new Array([]);
  return result;
};

function IpHistory(props) {
  const { open, close, ip } = props;
  const [tableData, setTableData] = useState("");

  useEffect(() => {
    const response = axios
      .get(`/search/ip?ip=${ip}`)
      .then(function (response) {
        setTableData(parseTableData(response.data?.results));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [ip]);

  return (
    <S.CustomModal
      title={`${ip} History`}
      visible={open}
      onCancel={close}
      closable={true}
      centered
      footer={null}
      width={950}
      bodyStyle={{ height: 650 }}
    ></S.CustomModal>
  );
}

export default IpHistory;
