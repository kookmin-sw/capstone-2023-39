import React from "react";
import * as S from "./styles";

function SearchButton(props) {
  const { onClick } = props;
  return (
    <S.searchButton
      onClick={onClick}
      src={process.env.PUBLIC_URL + "/images/search.png"}
    ></S.searchButton>
  );
}

export default SearchButton;
