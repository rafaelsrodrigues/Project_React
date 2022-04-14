import styled from "styled-components";

export const BodyCointainer = styled.div`
  position: absolute;
  min-width: 100%;
  min-height: auto;
  display: flex;
  margin: 0;
  padding: 0;
  padding-top: 5%;
  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    position: static;
  }
`;
export const LeftContainer = styled.div`
  width: 35%;
  min-height: 100%;
  display: flex;
  @media screen and (max-width: 1024px) {
    widht: 100%;
  }
`;
export const UolLogoContainer = styled.img`
  position: fixed;
  width: auto;
  bottom: 0;
  height: 75%;
  margin-top: auto;

  @media screen and (max-width: 1650px) {
    height: 60%;
  }
  @media screen and (max-width: 1200px) {
    height: 50%;
  }
  @media screen and (max-width: 1024px) {
    height: 75%;
  }
`;

export const RightContainer = styled.div`
  width: 65%;
  min-height: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
      display: none;
  }
`;

export const TextContainer = styled.div`
  min-width: 100%;
  min-height: auto;
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-right: 109px;
  top: 50%;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const TextContainerSmallTitle = styled.h2`
  width: 305px;
  height: 38px;
  color: #c12d18;
  font-family: "Mark Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 46px;
  text-align: right;
`;

export const TextContainerP = styled.p`
  width: auto;
  height: 30px;
  color: #222222;
  font-family: "Mark Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  text-align: right;
`;

export const TextContainerTitle = styled.h1`
  width: auto;
  height: 67px;
  color: #c12d18;
  font-family: "Mark Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 81px;
  text-align: right;
  @media screen and (max-width: 1280px) {
    height: auto;
`;
