import * as S from "./styles";

function Title(props) {
  const { title } = props;

  return (
    <S.Wrap>
      <S.TitleWrap>{title}</S.TitleWrap>
    </S.Wrap>
  );
}

export default Title;
