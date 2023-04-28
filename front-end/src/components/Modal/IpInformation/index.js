import React from "react";
import * as S from "./styles";

function IpInformation(props) {
  const { open, close, ip } = props;
  return (
    <S.CustomModal
      title={""}
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
