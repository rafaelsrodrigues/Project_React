import React from "react";
import LogoCompass from "../../assets/img/LogoCompass.png"
import {
  BodyCointainer,
  FormContainer,
  LeftContainer,
  LoginTextContainer,
  LoginTextP,
  LoginTextTitle,
  LogoBody,
  RightContainer,
} from "./LoginBody-style";

export default function LoginBody() {
  return (
    <div>
      <BodyCointainer>
        <LeftContainer>
          <LoginTextContainer>
            <LoginTextTitle>Olá,</LoginTextTitle>
            <LoginTextP>Para continuar navegando de forma segura, efetue o login na rede.</LoginTextP>
          </LoginTextContainer>
          <FormContainer>
          </FormContainer>
        </LeftContainer>
        <RightContainer>
          <LogoBody src={LogoCompass}/>
        </RightContainer>
      </BodyCointainer>
    </div>
  );
}
