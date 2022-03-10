import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import LowerMenu from '../components/LowerMenu/LowerMenu';
import '../styles/Explorer.css';

export default function Explorer() {
  return (
    <section>
      <Header title="Explorer" />
      <section className="explore">
        <Link to="/explore/foods">
          <button
            type="button"
            data-testid="explore-foods"
          >
            Explore Foods
          </button>
        </Link>

        <Link to="/explore/drinks">
          <button
            type="button"
            data-testid="explore-drinks"
          >
            Explore Drinks
          </button>
        </Link>
      </section>
      <LowerMenu />
    </section>
  );
}
