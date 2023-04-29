import React, { useEffect, useState } from "react";
import * as S from "./styles";
import axios from "axios";

function IpInformation(props) {
  const { open, close, ip } = props;
  const [info, setInfo] = useState("");

  useEffect(() => {
    const response = axios
      /* .get(`/search/ip?ip=${ip}`) */
      .get(`/search/ip?ip=91.236.51.44`)
      .then(function (response) {
        console.log("data", response.data);
        setInfo(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

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
      <S.ModalContent>{ip}</S.ModalContent>
    </S.CustomModal>
  );
}

export default IpInformation;
