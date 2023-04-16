import React from "react";
import * as S from "./styles";

function SearchModal(props) {
  const { close } = props;
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
      </S.ModalContainer>
    </S.Wrap>
  );
}

export default SearchModal;
