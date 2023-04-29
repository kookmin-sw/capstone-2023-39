import React, { useEffect, useState } from "react";
import * as S from "./styles";
import axios from "axios";
import { Card } from "antd";

function IpInformation(props) {
  const { open, close, ip } = props;
  const [info, setInfo] = useState("");
  const [comlete, setComplete] = useState(false);

  useEffect(() => {
    setComplete(false);
    const response = axios
      /* .get(`/search/ip?ip=${ip}`) */
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
      width={900}
      bodyStyle={{ height: 430 }}
    >
      <S.ModalContent>
        {comlete ? { ip } : <Card loading style={{ height: 400 }} />}
      </S.ModalContent>
    </S.CustomModal>
  );
}

export default IpInformation;
