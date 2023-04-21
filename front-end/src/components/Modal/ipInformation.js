import React from "react";
import * as S from "./styles";

function IpInformation(props) {
  const { close, ip } = props;
  return (
    <S.Wrap>
      <S.ModalContainer>
        <S.ButtonContainer>
          <img
            onClick={close}
            src={process.env.PUBLIC_URL + "/images/close.png"}
            alt="close"
          />
        </S.ButtonContainer>
        {ip}
      </S.ModalContainer>
    </S.Wrap>
  );
}

export default IpInformation;
