import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  position: absolute;
  bottom:0;
  margin: 0;
  padding: 0px;
  width:100%;
  height: auto;
  box-sizing: border-box;
  background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
  color:#FFFFFF;
  @media screen and (max-width:1024px){
    justify-content: flex-end;
  }
`
export const FooterText = styled.div`
  display:flex;
  align-items: center;
  width:614px;
  @media screen and (max-width:1024px){
    display: none ;
  }
`

export const StaticText = styled.p`
  font-family: 'Mark Pro';
  font-size: 12px;
  line-height: 15.21px;
  text-align: right;
  margin-right:3.125vw;
  display: flex ;
  align-items: center;
  height: 100% ;
`
export const Line = styled.div`
  height: 61px;
  border: 1px solid #FFFFFF;
  margin-top: 17px;
  margin-bottom: 22px;
  @media screen and (max-width:1024px){
    display: none ;
  }
`
export const FooterSearchContainer = styled.div`
  display:flex;
  align-items: center;
  width:37.6vw;
  padding: 0.52vw;
  margin: 0px;
  flex-grow: 2;
`

export const FooterSearch = styled.input`
  margin:0 15%;
  padding:20px;
  width: 24vw;
  height: 45px;
  background: transparent;
  border-radius: 50px;
  box-sizing: border-box;
  border: 1px #FFFFFF solid;
  font-size: 16px;
  line-height: 20px;
  color: white;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  outline:none;
  &::placeholder{
    color:white;
  }
  &:focus{
    border: 1px solid #E9B425;
  }
  @media screen and (max-width: 1024px) {
    margin: 0 ;
    width:100% ;
    padding: 0;
    padding-left: 20px ;
    margin-left: 20px ;
  }
`
export const FooterSearchIcon = styled.img`
  position: relative;
  right: 77%;
  width:20px;
  height: 20px;
  @media screen  and (max-width: 1552px){
    right: 74%;
  }
  @media screen and (max-width: 1280px){
    right: 80%;
  }
  @media screen and (max-width: 1150px){
    right: 85%;
  }
  @media screen and (max-width: 1024px){
    right:77%;
  }
  @media screen and (max-width: 680px){
    right: 73%;
  }
  
`
export const FooterResetContainer = styled.div`
  display:flex;
  align-items: center;
  
`

export const ResetWarning  = styled.p`
  font-family: 'Mark Pro';
  margin-top: 25px;
  font-size: 12px;
  line-height: 15,21px;
  text-align: right;
  width:109px;
  height: 49px;
  @media screen and (max-width:1024px){
    display: none ;
  }
  
`

export const FooterLogoutButtonContainer = styled.div`
  background-color: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);;
  width: 128px;
  height: auto;
  justify-content: center;
  display:flex;
  align-items: center;
  margin:0;
  padding:0;
  @media screen and (max-width: 1024px) {
    width: 6.8vw ;
    min-width: 80px ;
  }
`
export const FooterLogoutButton = styled.button`
  text-decoration: none;
  padding:40px;
  font-family: 'Mark Pro';
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15,21px;
  text-align: center;
  width: 100%;
  color: #FFFFFF;
  cursor: pointer;
  background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);;
  @media screen and (max-width: 1024px) {
    padding: 40px 0 ;
  }
`