import * as yup from 'yup';


export const schema = yup.object().shape({
  user: yup.string().required("O campo usuário é obrigatório").matches(/^[a-z]+[.]+[a-z]+$/, 'O usuario deve seguir o padrão "nome.sobrenome" '),

  password: yup.string().required("A senha é obrigatória.").matches(/^[0-9]+$/, 'A senha deve conter apenas números').min(6, 'A senha deve conter ao menos 6 dígitos')
})