import React, { useState, useEffect } from 'react';
import './DetailButtons.css';

export default function DetailButtons() {
  const [linkCopy, setLinkCopy] = useState();

  function handleShare() {
    navigator.clipboard.writeText(window.location.href);
    setLinkCopy(true);
  }

  useEffect(() => { setLinkCopy(false); }, []);

  return (
    <section className="container containerDetailButtons">
      <button
        className="btn btnFav"
        data-testid="favorite-btn"
        type="button"
      >
        Favorite
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
