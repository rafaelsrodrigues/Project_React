import styled from "styled-components";

export const LoginInput = styled.input`
  width:100%;
  margin: 5px auto;
  height:60px;
  background: transparent;
  border-radius: 50px;
  box-sizing: border-box;
  border: 1px #FFFFFF solid;
  padding:20px;
  font-size: 16px;
  line-height: 20px;
  color: white;
  font-family: Mark Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  outline:none;
  &::placeholder{
    color:white;
  }
  &:focus{
    border: 1px solid #E9B425;
  }

  @media screen and (max-width: 1024px){
    width:100%;
    margin: 15px 15px 15px 0;
  }
`

export const InputIcon = styled.img`
  width:20px;
  height: 20px;
  position: relative;
  left: 295px;
  bottom: 46px;
  @media screen and (max-width: 1024px){
    left: 755px;
    bottom: 53px;
  }
`

export const LoginInfoText = styled.p`
  font-family: 'Mark Pro';
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 38px;
  margin-top: 0px;
  margin-bottom: 15px;
  margin-right: 380px;
`

export const ContinueButton = styled.button`
  width: 96%;
  height: 70px;
  outline: none;
  border: none;
  background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
  border: linear-gradient(132.34deg, #FF2D04 22.57%, #C13216 72.04%);
  border-radius: 50px;
  color: white;
  font-family: 'Mark Pro';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  cursor: pointer;
  margin:45px 0;

  @media screen and (max-width:1024px) {
    margin: 60px 0;  
  }

`

export const LoginErrorMessageContainer = styled.div`
  width:100%;
  height:55px;
  background: transparent;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 1024px){
    background-color: transparent;
  }
`
