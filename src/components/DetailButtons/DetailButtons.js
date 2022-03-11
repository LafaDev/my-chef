import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import whiteHeart from '../../images/whiteHeartIcon.svg';
import blackHeart from '../../images/blackHeartIcon.svg';
import './DetailButtons.css';

export default function DetailButtons({ fav }) {
  const [linkCopy, setLinkCopy] = useState();
  const [favEr, setFavEr] = useState();

  function handleShare() {
    navigator.clipboard.writeText(window.location.href);
    setLinkCopy(true);
  }

  function handleFav() {
    setFavEr(!favEr);
  }

  useEffect(() => { setLinkCopy(false); setFavEr(fav); }, []);

  return (
    <section className="container containerDetailButtons">
      <button
        className="btn btnFav"
        type="button"
        onClick={ handleFav }
      >
        <img
          alt="Favorite"
          data-testid="favorite-btn"
          src={ favEr ? blackHeart : whiteHeart }
        />
      </button>
      <button
        className="btn btnShare"
        data-testid="share-btn"
        type="button"
        onClick={ handleShare }
      >
        share
      </button>
      { linkCopy && (<p>Link copied!</p>)}
    </section>
  );
}

DetailButtons.propTypes = {
  fav: PropTypes.bool,
}.isRequired;
