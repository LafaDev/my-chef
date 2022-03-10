import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import LowerMenu from '../components/LowerMenu/LowerMenu';
import '../styles/ExplorerType.css';

export default function ExplorerType({ match }) {
  // const ifLink = (firstURL, secondURL, condition) => {
  //   condition ? <Link to={firstURL}>{children}</Link>
  //   : <Link to={secondURL}>{children}</Link>
  // }

  return (
    <section className="container">
      {match.url.includes('drinks') ? (
        <Header
          title="Explore Drinks"
        />
      ) : <Header title="Explore Foods" /> }

      <Link
        to="/explore/drinks/ingredients"
      >
        <button
          className="btn"
          type="button"
          data-testid="explore-by-ingredient"
          enable
        >
          By Ingredient
        </button>

      </Link>
      {match.url.includes('drinks') ? null
        : (
          <button
            className="btn"
            type="button"
            data-testid="explore-by-nationality"
          >
            By Nationality
          </button>) }
      <button
        type="button"
        className="btn"
        data-testid="explore-surprise"
      >
        Surprise me!
        {' '}

      </button>
      <LowerMenu />
    </section>
  );
}

ExplorerType.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
