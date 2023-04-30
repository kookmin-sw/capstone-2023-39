import styled from "styled-components";
import Modal from "antd/es/modal/Modal";

export const CustomModal = styled(Modal)`
  .ant-modal-header {
  }
  .ant-modal-title {
    color: #000000;
    font-size: 28px;
  }
`;

export const ModalContent = styled.div`
  margin-top: 20px;
`;
