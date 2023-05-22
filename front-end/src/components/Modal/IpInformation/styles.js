import styled from "styled-components";
import Modal from "antd/es/modal/Modal";

export const CustomModal = styled(Modal)`
  background-color: #243043;
  .ant-modal-header {
  }
  .ant-modal-title {
    color: #000000;
    font-size: 28px;
  }
`;

export const ModalContent = styled.div`
  margin-top: 25px;
`;

export const InfoItem = styled.span`
  background: linear-gradient(to top, #aebdca 50%, transparent 50%);
  font-size: 18px;
  margin-right: 25px;
`;

export const HistoryButton = styled.button`
  width: 135px;
  height: 38px;
  color: #fff;
  font-size: 16px;
  font-family: "AppleSDGothicNeoM";
  font-weight: 500;
  background-color: #2c3e4f;
  opacity: 0.9;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    border: none;
    opacity: 0.7;
  }
  margin-top: 1%;
`;
