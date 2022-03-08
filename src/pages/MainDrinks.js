import React from 'react';
import Header from '../components/Header/Header';
import LowerMenu from '../components/LowerMenu/LowerMenu';
import SearchBar from '../components/SearchBar/SearchBar';

export default function Main() {
  return (
    <section>
      <Header />
      <SearchBar />
      <h1>drinks</h1>
      <LowerMenu />
    </section>
  );
}

// Redirecione a pessoa usuária para a tela de perfil ao clicar no botão de perfil
