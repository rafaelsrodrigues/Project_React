import styled from "styled-components";

export const LoginForm = styled.form`
  width:100%;
`

export const LoginInput = styled.input`
  width: 100%;
  margin: 5px auto;
  height: 60px;
  background: transparent;
  border-radius: 50px;
  box-sizing: border-box;
  border: 1px #ffffff solid;
  padding: 20px;
  font-size: 16px;
  line-height: 20px;
  color: white;
  font-family: Mark Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  outline: none;
  &::placeholder {
    color: white;
  }
  &:focus {
    border: 1px solid #e9b425;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin: 15px 15px 15px 0;
  }
  @media screen and (max-width: 450px) {
    margin: 0;
  }
`;

export const InputIcon = styled.img`
  width: 20px;
  height: 20px;
  position: relative;
  left: 368px;
  bottom: 46px;
  @media screen and (max-width: 1900px) {
    left: 340px;
  }
  @media screen and (max-width: 1775px) {
    left: 330px;
  }
  @media screen and (max-width: 1700px) {
    left: 310px;
  }
  @media screen and (max-width: 1620px) {
    left: 280px;
  }
  @media screen and (max-width: 1481px) {
    left: 250px;
  }
  @media screen and (max-width: 1340px) {
    left: 230px;
  }
  @media screen and (max-width: 1225px) {
    left: 215px;
  }
  @media screen and (max-width: 1145px) {
    left: 200px;
  }
  @media screen and (max-width: 1024px) {
    left: 730px;
    bottom: 53px;
  }
  @media screen and (max-width: 1000px) {
    left: 590px;
  }
  @media screen and (max-width: 800px) {
    left: 490px;
  }
  @media screen and (max-width: 690px) {
    left: 450px;
  }
  @media screen and (max-width: 450px) {
    left: 207px;
    bottom: 40px;
  }
`;

export const LoginInfoText = styled.p`
  font-family: "Mark Pro";
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 38px;
  margin-top: 0px;
  margin-bottom: 15px;
  margin-right: 380px;

  @media screen and (max-width: 450px) {
    font-size: 28px;
    margin-bottom: 5px;
  }
`;

export const ContinueButton = styled.button`
  width: 96%;
  height: 70px;
  outline: none;
  border: none;
  background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
  border: linear-gradient(132.34deg, #ff2d04 22.57%, #c13216 72.04%);
  border-radius: 50px;
  color: white;
  font-family: "Mark Pro";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  cursor: pointer;
  margin: 45px 0;

  @media screen and (max-width: 1024px) {
    margin: 60px 0;
  }
  @media screen and (max-width: 450px) {
    margin: 32px 0;
    width: 378px;
    height: 45px;
  }
`;

export const LoginErrorMessageContainer = styled.div`
  width: 100%;
  height: 55px;
  background: transparent;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const ErrorMessageText = styled.p`
  font-family: Mark Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #E9B425;
`
