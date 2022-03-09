import React, { useState } from 'react';
import Proptypes from 'prop-types';
import './Header.css';
import { Link } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import SearchBar from '../SearchBar/SearchBar';

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
    <section className=" container header">
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
        title !== 'Explorer' && title !== 'Profile' && (
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
    </section>
  );
}

Header.propTypes = {
  title: Proptypes.string.isRequired,
};
