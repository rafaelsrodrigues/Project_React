import React, { useState } from "react";
import iconUser from "../../assets/icons/iconUser.png"
import {
  FooterContainer,
  FooterText,
  StaticText,
  FooterSearchContainer,
  FooterSearch,
  FooterSearchIcon,
  FooterResetContainer,
  ResetWarning,
  Line,
  FooterLogoutButtonContainer,
  FooterLogoutButton,
} from "./MainPageFooter.style"

import Timer from "../Timer/Timer"
import { useNavigate } from "react-router-dom";

export const MainPageFooter = () => {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  const returnPage = useNavigate();

  function onKeyEnter(e) {
    if (e.keyCode === 13) {
      returnPage("/");
    }
  }

  return (
    <>
      <FooterContainer>
        <FooterText>
          <StaticText>
            Essa janela do navegador é usada para manter sua sessão de
            autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova
            janela para continuar a navegar.
          </StaticText>
        </FooterText>
        <Line></Line>
        <FooterSearchContainer>
          <FooterSearch
            type="text"
            placeholder="Buscar Usuário"
            defaultValue={name}
            onChange={handleChange}
            onKeyDown={onKeyEnter}
          ></FooterSearch>
          <FooterSearchIcon src={iconUser}/>
        </FooterSearchContainer>
        <Line></Line>
        <FooterResetContainer>
          <ResetWarning>Application refresh in</ResetWarning>
          <Timer />
        </FooterResetContainer>
        <FooterLogoutButtonContainer>
          <FooterLogoutButton onClick={()=>{returnPage('/');}}>Logout
          </FooterLogoutButton>
        </FooterLogoutButtonContainer>
      </FooterContainer>
    </>
  );
};
