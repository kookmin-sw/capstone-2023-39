import React from "react";
import * as S from "./styles";

function SearchButton(props) {
  return (
    <S.searchButton
      onClick={props.onClick}
      src={process.env.PUBLIC_URL + "/images/search.png"}
    ></S.searchButton>
  );
}

export default SearchButton;
