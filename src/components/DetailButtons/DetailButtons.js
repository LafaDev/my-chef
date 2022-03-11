import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import whiteHeart from '../../images/whiteHeartIcon.svg';
import blackHeart from '../../images/blackHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';
import useSetFav from '../../services/setFavorites';
import './DetailButtons.css';

export default function DetailButtons({ fav, meal, drink, id, index }) {
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
          data-testid={ index !== undefined
            ? `${index}-horizontal-favorite-btn` : 'favorite-btn' }
          src={ favEr ? blackHeart : whiteHeart }
        />
      </button>
      <button
        className="btn btnShare"
        // data-testid={ index !== undefined
        //   ? `${index}-horizontal-share-btn` : 'share-btn' }
        type="button"
        onClick={ handleShare }
      >
        <img
          alt="share"
          data-testid={ index !== undefined
            ? `${index}-horizontal-share-btn` : 'share-btn' }
          src={ shareIcon }
        />
      </button>
      { linkCopy && (<p>Link copied!</p>)}
    </section>
  );
}

DetailButtons.propTypes = {
  fav: PropTypes.bool,
}.isRequired;
