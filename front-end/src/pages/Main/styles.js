import styled from "styled-components";
import "./reset.css";

export const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const MapButtonContainer = styled.div`
  display: fle
  justify-content: flex-end;
  position: relative;
  margin: 0 0 0 0;
`;

export const MapNormalButton = styled.button`
  width: 70px;
  height: 40px;
  background: #fff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  font-family: "AppleSDGothicNeoM";
  font-weight: 500;
  border: none;
  margin: 0 0 0 20px;
  border-radius: 8px;
  position: absolute;
  bottom: 60px;
  right: 320px;
  z-index: 999;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    transform: translateY(-3px);
  }
`;

export const MapAbnormalButton = styled.button`
  width: 70px;
  height: 40px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  background: #fff;
  font-size: 14px;
  font-family: "AppleSDGothicNeoM";
  font-weight: 500;
  border: none;
  margin: 0 0 0 20px;
  border-radius: 8px;
  position: absolute;
  bottom: 60px;
  right: 230px;
  z-index: 999;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    transform: translateY(-3px);
  }
`;

export const MapAllButton = styled.button`
  width: 70px;
  height: 40px;
  background: #fff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  font-family: "AppleSDGothicNeoM";
  font-weight: 500;
  border: none;
  margin: 0 0 0 20px;
  border-radius: 10px;
  position: absolute;
  bottom: 60px;
  right: 10px;
  z-index: 999;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    transform: translateY(-3px);
  }
`;

export const MapCtiButton = styled.button`
  width: 110px;
  height: 40px;
  background: #fff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  border: none;
  margin: 0 0 0 20px;
  border-radius: 8px;
  font-size: 14px;
  font-family: "AppleSDGothicNeoM";
  font-weight: 500;
  position: absolute;
  bottom: 60px;
  right: 100px;
  z-index: 999;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    transform: translateY(-3px);
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
`;

export const ColorModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  width: 120px;
  height: 90px;
  padding-top: 20px;
  background: #fff;
  color: #000;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 10px;
  z-index: 999;
`;
