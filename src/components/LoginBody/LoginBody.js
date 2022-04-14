import React from "react";
import LogoCompass from "../../assets/img/LogoCompass.png";
import FormLogin from "../FormLogin/FormLogin";
import {
  BodyCointainer,
  FormContainer,
  LeftContainer,
  LoginTextContainer,
  LoginTextP,
  LoginTextTitle,
  LogoBody,
  LogoBodyMobile,
  RightContainer,
} from "./LoginBody-style";

export default function LoginBody() {
  return (
    <div>
      <BodyCointainer>
        <LeftContainer>
          <LogoBodyMobile src={LogoCompass} />
          <LoginTextContainer>
            <LoginTextTitle>Olá,</LoginTextTitle>
            <LoginTextP>
              Para continuar navegando de forma segura, efetue o login na rede.
            </LoginTextP>
          </LoginTextContainer>
          <FormContainer>
            <FormLogin />
          </FormContainer>
        </LeftContainer>
        <RightContainer>
          <LogoBody src={LogoCompass} />
        </RightContainer>
      </BodyCointainer>
    </div>
  );
}
