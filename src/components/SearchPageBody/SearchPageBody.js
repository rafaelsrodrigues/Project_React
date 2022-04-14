import React, { useState } from "react";
import {
  SearchContainer,
  LogoContainer,
  InputContainer,
  ButtonContainer,
  ButtonSearchStyle,
  ButtonExitStyle,
  LogoImg,
  SearchInputContainer,
  SearchInput,
  SearchInputIcon,
  ResultContainer,
} from "./SearchPageBody.style";

import LogoCompass from "../../assets/img/LogoCompass.png";
import iconUser from "../../assets/icons/iconUser.png";
import { useNavigate } from "react-router-dom";

export default function SearchPage() {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
    console.log(search)
  }

  const Exit = useNavigate();

  return (
    <SearchContainer>
      <LogoContainer>
        <LogoImg src={LogoCompass}></LogoImg>
      </LogoContainer>
      <ResultContainer>O usuário buscado não existe, por favor tente novamente!</ResultContainer>
      <InputContainer>
        <SearchInputContainer>
          <SearchInput
            type="text"
            placeholder="Buscar Usuário"
            onChange={handleChange}
          ></SearchInput>
          <SearchInputIcon src={iconUser} />
        </SearchInputContainer>
      </InputContainer>
      <ButtonContainer>
          <ButtonSearchStyle>Buscar</ButtonSearchStyle>
        </ButtonContainer>
        <ButtonContainer>
          <ButtonExitStyle onClick={()=>{Exit('/');}}>Sair</ButtonExitStyle>
        </ButtonContainer>
    </SearchContainer>
  );
}
