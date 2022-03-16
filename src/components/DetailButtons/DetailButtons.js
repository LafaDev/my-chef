import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import whiteHeart from '../../images/whiteHeartIcon.svg';
import blackHeart from '../../images/blackHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';
import useSetFav from '../../services/setFavorites';
import { getId } from '../../contexts/DetailsAPIContext';
import './DetailButtons.css';

export default function DetailButtons({
  fav, meal, drink, id, index, recepie, handleFavorites }) {
  const [linkCopy, setLinkCopy] = useState(false);
  const [favEr, setFavEr] = useState();

  function handleShare() {
    // const url = useLocation()
    if (window.location.href.includes('favorite')) {
      navigator.clipboard.writeText(
        `http://localhost:3000/${recepie.type === 'food' ? 'foods' : 'drinks'}/${recepie.id}`,
      );
      setLinkCopy(true);
    } else if (window.location.href.includes('in-progress')) {
      let curr = window.location.href;
      const finn = getId(curr);
      curr = curr.replace(`/${finn}`, '');
      navigator.clipboard.writeText(curr);
      setLinkCopy(true);
    } else {
      navigator.clipboard.writeText(window.location.href);
      setLinkCopy(true);
    }
  }

  const HandleClick = () => {
    useSetFav(favEr, setFavEr, { meal, drink, id });
  };

  const removeFav = () => {
    const favRecepies = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const newFavs = JSON.stringify(favRecepies
      .filter((receita) => receita.id !== recepie.id));
    localStorage.setItem('favoriteRecipes', newFavs);
    handleFavorites();
  };

  useEffect(() => { setLinkCopy(false); setFavEr(fav); }, []);

  return (
    <section className="containerDetailButtons">
      <button
        className="btn-details btnFav"
        type="button"
        onClick={ window.location.href.includes('favorite') ? removeFav : HandleClick }
      >
        <img
          alt="Favorite"
          data-testid={ index !== undefined
            ? `${index}-horizontal-favorite-btn` : 'favorite-btn' }
          src={ favEr ? blackHeart : whiteHeart }
          className="img-detail"
          title="Favorite"
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
          className="img-detail"
          title="Share"
        />
      </button>
      { linkCopy && (<p>Link copied!</p>)}
    </section>
  );
}

DetailButtons.propTypes = {
  fav: PropTypes.bool,
}.isRequired;
