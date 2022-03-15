import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileButtons.css';

export default function ProfileButtons() {
  const clearLocal = () => {
    localStorage.clear();
  };

  return (
    <section className="container containerProfileButtons buttons-container">
      <Link to="/done-recipes">
        <button type="button" data-testid="profile-done-btn"> Done Recipes </button>
      </Link>

      <Link to="/favorite-recipes">
        <button type="button" data-testid="profile-favorite-btn">
          Favorite Recipes
        </button>
      </Link>

      <Link to="/">
        <button
          onClick={ clearLocal }
          type="button"
          data-testid="profile-logout-btn"
        >
          Logout
        </button>
      </Link>
    </section>
  );
}
