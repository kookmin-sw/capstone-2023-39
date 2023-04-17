import styled from "styled-components";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
  background: rgba(247, 248, 252);
  /* text-align:center;
  justify-content:center; */
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 28%;
`;

export const CircleButton = styled.button`
  width: 50px;
  height: 50px;
  cursor: pointer;
  border: none;
  background: rgba(49, 173, 49, 0.5);
  position: absolute;
  border-radius: 30px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1); ;
`;

export const MapButtonContainer = styled.div`
  margin: 0 auto;
`

export const MapButton = styled.button`
  width: 70px;
  height: 40px;
  border: none;
  background: rgba(11,190,143,0.5);
  margin: 0 0 0 10px;
  border-radius: 10px;
  cursor: pointer;
`;
