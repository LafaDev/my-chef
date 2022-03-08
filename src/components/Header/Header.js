import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import SearchBar from '../SearchBar/SearchBar';

export default function Header() {
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
        Foods
      </h1>

      <button type="button" data-testid="search-top-btn" onClick={ handleClick }>
        <img
          src={ searchIcon }
          className="icon headerIcon"
          alt="search-icon"
        />
      </button>
      {searchBar && <SearchBar />}
    </section>
  );
}
