import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import './Header.css';

export default function Header() {
  return (
    <section className=" container header">
      <Link to="/profile">
        <img
          src={ profileIcon }
          className="icon headerIcon"
          alt="profile-icon"
          data-testid="profile-top-btn"
        />
      </Link>

      <h1
        data-testid="page-title"
      >
        Hmmm
      </h1>

      <img
        src={ searchIcon }
        className="icon headerIcon"
        alt="search-icon"
        data-testid="search-top-btn"
      />
    </section>
  );
}
