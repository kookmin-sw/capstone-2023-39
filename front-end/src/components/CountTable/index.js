import { useState } from "react";
import * as S from "./styles";

function CountTable() {
  const [count, setCount] = useState(356123);

  return (
    <S.Wrap>
      <S.TitleWrap>Count of target ip</S.TitleWrap>
      <S.TextWrap>{count.toLocaleString()}</S.TextWrap>
    </S.Wrap>
  );
}

export default CountTable;
