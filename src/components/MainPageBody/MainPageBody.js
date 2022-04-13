import React from "react";
import UolLogo from "../../assets/img/UolLogo.png";
import {
  BodyCointainer,
  LeftContainer,
  RightContainer,
  TextContainer,
  TextContainerP,
  TextContainerSmallTitle,
  TextContainerTitle,
  UolLogoContainer,
} from "./MainPageBody.style";

export default function MainPageBody() {
  return (
    <div>
      <BodyCointainer>
        <LeftContainer>
          <UolLogoContainer src={UolLogo}></UolLogoContainer>
        </LeftContainer>
        <RightContainer>
          <TextContainer>
            <TextContainerSmallTitle>Our mission is</TextContainerSmallTitle>
            <TextContainerP>Nossa missão é</TextContainerP>
            <TextContainerTitle>to transform the world</TextContainerTitle>
            <TextContainerP>transformar o mundo</TextContainerP>
            <TextContainerTitle>building digital experiences</TextContainerTitle>
            <TextContainerP>construindo experiências digitais</TextContainerP>
            <TextContainerTitle>that enable our client's growth</TextContainerTitle>
            <TextContainerP>que permitam o crescimento dos nossos clientes</TextContainerP>
          </TextContainer>
        </RightContainer>
      </BodyCointainer>
    </div>
  );
}
