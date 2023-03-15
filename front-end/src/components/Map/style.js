import styled from "styled-components";

export const MapContainer = styled.div`
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 600px;
  width: 100%;
  overflow: hidden;
`;
export const ModalOverlay = styled.div`
  /* background-color: rgba(0, 0, 0, 0.5); */
  position: fixed;
  top: 22rem;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  align-items: center;
  padding: 4rem;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  width: 300px;
  height: 300px;
  overflow: auto;
`;
