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

export const TestButton = styled.button`
  width: 100px;
  color: #fff;
  font-size: 12px;
  background-color: #000;
  border: none;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    transform: scale(1.1);
    border: none;
  }
`;
