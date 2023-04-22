import styled from "styled-components";
import { Typography } from "antd";
const { Text } = Typography;

export const Wrap = styled.div`
  width: 80%;
  height: 100%;
  z-index: 1;
  background: #ffffff;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

export const TitleWrap = styled(Text)`
  font-size: 25px;
`;

export const TextWrap = styled(Text)`
  font-size: 60px;
  font-weight: 700;
`;
