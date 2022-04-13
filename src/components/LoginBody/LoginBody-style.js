import styled from "styled-components";
import ImgLoginPage from "../../assets/img/ImgLoginPage.jpg";

export const BodyCointainer = styled.div`
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    position: static;
  }
`;

export const LeftContainer = styled.div`
  width: 50%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);

  @media screen and (max-width: 1024px) {
    width: 100%;
    position: absolute;
  }
`;

export const RightContainer = styled.div`
  width: 50%;
  min-height: 100%;
  background-image: url(${ImgLoginPage});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const LogoBody = styled.img`
  width: 300px;
  height: 70px;
  margin: 35px auto 0 auto;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const LoginTextContainer = styled.div`
width: 44%;
display:flex;
flex-wrap: wrap;
@media screen and (max-height:820px){
  padding:45px 0;
}
@media screen and (max-width: 1024px){
  width:80%;
}
`;

export const LoginTextTitle = styled.h1`
  font-family: "Mark Pro";
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 76px;
  margin-bottom: 15px;
`;

export const LoginTextP = styled.p`
  font-family: "Mark Pro";
  font-size: 16px;
  line-height: 20px;
`;

export const FormContainer = styled.div`
width: 44%;
display:flex;
flex-wrap: wrap;
@media screen and (max-height:820px){
  padding:45px 0;
}
@media screen and (max-width: 1024px){
  width:80%;
}
`