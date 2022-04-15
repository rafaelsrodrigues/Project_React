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
import ListDevelopers from "../Api.request.js/api.request";
import SearchPageResponse from "../Api.response/Api.response";

export default function SearchPage() {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
    ListDevelopers(search)
  }

  const Exit = useNavigate();

  return (
    <SearchContainer>
      <LogoContainer>
        <LogoImg src={LogoCompass}></LogoImg>
      </LogoContainer>
      <ResultContainer><SearchPageResponse /></ResultContainer>
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
          <ButtonExitStyle onClick={()=>{Exit('/main');}}>Sair</ButtonExitStyle>
        </ButtonContainer>
    </SearchContainer>
  );
}
