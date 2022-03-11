import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import whiteHeart from '../../images/whiteHeartIcon.svg';
import blackHeart from '../../images/blackHeartIcon.svg';
import useSetFav from '../../services/setFavorites';
import './DetailButtons.css';

export default function DetailButtons({ fav, meal, drink, id }) {
  const [linkCopy, setLinkCopy] = useState();
  const [favEr, setFavEr] = useState();

  function handleShare() {
    navigator.clipboard.writeText(window.location.href);
    setLinkCopy(true);
  }

  const HandleClick = () => {
    useSetFav(favEr, setFavEr, { meal, drink, id });
  };

  useEffect(() => { setLinkCopy(false); setFavEr(fav); }, []);

  return (
    <section className="container containerDetailButtons">
      <button
        className="btn btnFav"
        type="button"
        onClick={ HandleClick }
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
