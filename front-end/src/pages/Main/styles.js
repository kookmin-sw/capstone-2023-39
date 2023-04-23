import styled from "styled-components";

export const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 30px;
`;

export const MapButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  gap: 10px;
  margin: 0 30px 0 0;
`;

export const MapNormalButton = styled.button`
  width: 70px;
  height: 40px;
  background: rgba(11, 190, 143);
  margin: 0 0 0 20px;
  border-radius: 10px;
  position: absolute;
  bottom: 430px;
  right: 180px;
  z-index: 999;
  cursor: pointer;
`;

export const MapAbnormalButton = styled.button`
  width: 70px;
  height: 40px;
  background: rgba(11, 190, 143);
  margin: 0 0 0 20px;
  border-radius: 10px;
  position: absolute;
  bottom: 430px;
  right: 90px;
  z-index: 999;
  cursor: pointer;
`;

export const MapBothButton = styled.button`
  width: 70px;
  height: 40px;
  background: rgba(11, 190, 143);
  margin: 0 0 0 20px;
  border-radius: 10px;
  position: absolute;
  bottom: 430px;
  right: 0;
  z-index: 999;
  cursor: pointer;
`;

export const TableContainer = styled.div`
  display: flex;
  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: center;
  margin-bottom: 35px;
  background: #f8fafd;
`;
