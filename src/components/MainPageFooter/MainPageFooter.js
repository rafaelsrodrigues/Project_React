import React, { useContext, useState } from "react";
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
import { AuthContext } from "../Providers/auth";
import ListDevelopers from "../Api.request.js/api.request";

export const MainPageFooter = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
    ListDevelopers(name)
  }

  const returnPage = () =>{
    logout();
  } 

  function onKeyEnter(e) {
    if (e.keyCode === 13) {
      navigate("/search");
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
