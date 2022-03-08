import React from 'react';
import './Header.css';
import profileIcon from '../../images/profileIcon.svg';

export default function Header() {
  return (
    <section className=" container header">
      <img
        src={ profileIcon }
        className="icon headerIcon"
        alt="profile-icon"
        data-testid="profile-top-btn"
      />

      <h1
        data-testid="page-title"
      >
        Hmmm
      </h1>

      <img
        src="../../images/searchIcon.svg"
        className="icon headerIcon"
        alt="search-icon"
        data-testid="search-top-btn"
      />

    </section>
  );
}
