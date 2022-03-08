import React from 'react';
import Loginscreen from '../components/Loginscreen/Loginscreen';

export default function Login() {
  return (
    <Loginscreen />

  // O botão deve estar desativado se o email for inválido
  // O botão deve estar desativado se a senha deve tiver 6 caracteres ou menos
  // O botão deve estar ativado se o email e a senha forem válidos
  // -> A rota muda para a tela principal de receitas de comidas
  );
}
