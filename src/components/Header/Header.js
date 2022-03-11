import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

export default function Header({ title }) {
  const [searchBar, setSearchBar] = useState(false);

  const titleChecker = (tit) => tit !== 'Explorer'
    && tit !== 'Explore Foods'
    && tit !== 'Profile'
    && tit !== 'Favorite Recipes'
    && tit !== 'Done Recipes'
    && tit !== 'Explore Ingredients'
    && tit !== 'Explore Drinks';

  const handleClick = () => {
    if (searchBar === false) {
      setSearchBar(true);
    } else {
      setSearchBar(false);
    }
  };

  return (
    <header className="header">
      <Link to="/profile">
        <img
          src={ profileIcon }
          className="icon headerIcon"
          data-testid="profile-top-btn"
          alt="profile-icon"
        />
      </Link>

      <h1 data-testid="page-title">
        { title }
      </h1>

      {
        titleChecker(title) && (
          <button type="button" onClick={ handleClick }>
            <img
              src={ searchIcon }
              className="icon headerIcon"
              alt="search-icon"
              data-testid="search-top-btn"
            />
          </button>
        )
      }
      {searchBar && <SearchBar />}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
