import styled from "styled-components";

export const Wrap = styled.div`
  width: 80vw;
  height: 60vh;
  margin-left: 20%;
  position: absolute;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 110%;
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: flex-end;
  > img {
    width: 20px;
    height: 20px;
    margin: 20px;
    cursor: pointer;
  }
`;
