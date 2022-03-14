import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

export default function Header({ title }) {
  const [searchBar, setSearchBar] = useState(false);

  const handleClick = () => {
    if (searchBar === false) {
      setSearchBar(true);
    } else {
      setSearchBar(false);
    }
  };

  return (
    <header className="header">
      <Link
        to="/profile"
        className="header-link"
        title="Ir para Perfil"
      >
        <img
          src={ profileIcon }
          className="icon header-icon"
          data-testid="profile-top-btn"
          alt="profile-icon"
        />
      </Link>

      <h1 data-testid="page-title" className="header-title">
        { title }
      </h1>

      {
        title !== 'Explorer' && title !== 'Profile' && (
          <button
            type="button"
            onClick={ handleClick }
            className="button header-link"
            title="Pesquisar recitas"
          >
            <img
              src={ searchIcon }
              className="icon header-icon"
              alt="search-icon"
              data-testid="search-top-btn"
            />
          </button>
        )
      }
      { searchBar && <SearchBar /> }
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
