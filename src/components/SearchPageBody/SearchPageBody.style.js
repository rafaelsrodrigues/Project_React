import styled from "styled-components";

export const SearchContainer = styled.main`
  position: absolute;
  min-height: 100%;
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1024px) {
    justify-content: center;
    width: 100vw;
  }
`;

export const LogoContainer = styled.div`
  max-width: 310px;
  max-height: auto;
  align-self: center;
  margin-top: 5%;
  @media screen and (max-width: 1024px) {
    margin:0;
  }
`;

export const LogoImg = styled.img`
  width: 306px;
  height: 70px;
  margin: 0;
  @media screen and (max-width: 1024px) {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 40px;
  }
  @media screen and (max-width: 325px){}
    margin: 35px auto 0 auto;
    width: 100%;
    padding: 0;
}
`;

export const ResultContainer = styled.div`
  color: #ffffff;
  width: 695px;
  height: 112px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 10%;
  @media screen and (max-width: 1024px) {
    max-width: 100%;
    margin-bottom: 5%;
    padding:0;
  }
  @media screen and (max-width: 500px) {
    max-width: 100%;
    margin-bottom: 15%;
  }
  @media screen and (max-width: 380px){
    max-width: 100%;
    margin-bottom: 15%;
    width: 481px;
    height: 84px;
    font-size: 28px;
    line-height: 42px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30%;
  width: 100vw;
  margin-top: 2%;
  margin-bottom: 1%;
  @media screen and (max-width: 1024px) {
    max-width: 80%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 30%;
  width: 100vw;
  margin: 0 auto;
`;

export const ButtonSearchStyle = styled.button`
  min-width: 100%;
  height: 70px;
  outline: none;
  border: none;
  background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
  border: linear-gradient(132.34deg, #ff2d04 22.57%, #c13216 72.04%);
  border-radius: 50px;
  color: white;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 2.25em;
  line-height: 23px;
  cursor: pointer;
  margin: 20px 0;
  @media screen and (max-width: 1024px) {
    height: 50px;
    width: 379px;
    font-size: 1.5em;
  }
  @media screen and (max-width: 400px){
    height: 40px;
    width: 200px;
    font-size: 1.5em;
}
`;

export const ButtonExitStyle = styled.button`
  min-width: 100%;
  height: 70px;
  outline: none;
  border: none;
  background: #fff;
  border: linear-gradient(132.34deg, #ff2d04 22.57%, #c13216 72.04%);
  border-radius: 50px;
  color: #000;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 2.25em;
  line-height: 23px;
  cursor: pointer;
  margin-bottom: 20px;
  @media screen and (max-width: 1024px) {
    height: 50px;
    width: 379px;
    font-size: 1.5em;
  }
  @media screen and (max-width: 400px){
    height: 40px;
    width: 200px;
    font-size: 1.5em;
}
`;

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  margin: 0px;
`;

export const SearchInput = styled.input`
  margin: 0 15%;
  padding: 20px;
  min-width: 24vw;
  height: 45px;
  background: transparent;
  border-radius: 50px;
  box-sizing: border-box;
  border: 1px #ffffff solid;
  font-size: 16px;
  line-height: 20px;
  color: white;
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  outline: none;
  &::placeholder {
    color: white;
  }
  &:focus {
    border: 1px solid #e9b425;
  }
  @media screen and (max-width: 1024px) {
    margin: 0;
    width: 100%;
    padding: 0;
    padding-left: 20px;
    margin-left: 20px;
  }
`;

export const SearchInputIcon = styled.img`
  position: relative;
  right: 91%;
  width: 20px;
  height: 20px;
  @media screen and (max-width: 1552px) {
    right: 90%;
  }
  @media screen and (max-width: 1280px) {
    right: 88%;
  }
  @media screen and (max-width: 1150px) {
    right: 85%;
  }
  @media screen and (max-width: 1024px) {
    right: 90%;
  }
  @media screen and (max-width: 680px) {
    right: 87%;
  }
  @media screen and (max-width: 400px){
    right: 80%;
}
`;
