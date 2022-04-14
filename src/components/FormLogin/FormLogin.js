import React, { useContext, useState } from "react";
import {
  LoginForm,
  ContinueButton,
  InputIcon,
  LoginInfoText,
  LoginInput,
  LoginErrorMessageContainer,
  ErrorMessageText,
} from "./FormLogin.styled";

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from "../Validations/UserValidations";

import iconUser from "../../assets/icons/iconUser.png";
import iconPassword from "../../assets/icons/iconPassword.png";
import { AuthContext } from "../Providers/auth";


export default function FormLogin() {
  const { login } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const {handleSubmit,register, formState: {errors}} = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  

  const onSubmit = (e) => {
    login(name, password);
  };

  return (
    <>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <LoginInfoText>Login</LoginInfoText>
        <LoginInput
          type="text"
          name="user"
          placeholder="Usuário"
          value={name}
          {...register('user')}
          onChange={(e) => setName(e.target.value)}
        ></LoginInput>
        <InputIcon src={iconUser} />
        <LoginInput
          type="password"
          name="password"
          placeholder="Senha"
          value={password}
          {...register('password')}
          onChange={(e) => setPassword(e.target.value)}
        ></LoginInput>
        <InputIcon src={iconPassword} />
        <LoginErrorMessageContainer>
           <ErrorMessageText>{errors.user?.message}</ErrorMessageText> 
           <ErrorMessageText>{errors.password?.message}</ErrorMessageText> 
        </LoginErrorMessageContainer>
        <ContinueButton>Continuar</ContinueButton>
      </LoginForm>
    </>
  );
}
