import React from 'react'
import { ContinueButton, InputIcon, LoginInfoText, LoginInput } from './FormLogin.styled'
import iconUser from "../../assets/icons/iconUser.png"
import iconPassword from "../../assets/icons/iconPassword.png"

export default function FormLogin() {
  return (
    <>
    <LoginInfoText>Login</LoginInfoText>
    <LoginInput type='text' name='user' placeholder='Usuário'></LoginInput>
    <InputIcon src={iconUser}/>
    <LoginInput type='password' name='password' placeholder='Senha'></LoginInput>
    <InputIcon src={iconPassword}/>
    <ContinueButton>Continuar</ContinueButton>
    </>
  )
}
