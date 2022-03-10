import React from 'react';
import './DetailButtons.css';

export default function DetailButtons() {
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
      >
        share

      </button>

    </section>
  );
}
