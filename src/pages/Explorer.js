import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import LowerMenu from '../components/LowerMenu/LowerMenu';
import { FilterContext } from '../contexts/FilterContext';
import '../styles/Explorer.css';

export default function Explorer() {
  const { setCurrentPage } = useContext(FilterContext);
  return (
    <section className="section-exp">
      <Header title="Explorer" className="header" />
      <section className="explore-container">
        <section className="explore-btn">
          <Link to="/explore/foods">
            <button
              className="btn-exp"
              onClick={
                setCurrentPage('foods')
              }
              type="button"
              data-testid="explore-foods"
            >
              Explore Foods
            </button>
          </Link>

          <Link to="/explore/drinks">
            <button
              className="btn-exp"
              onClick={
                setCurrentPage('drinks')
              }
              type="button"
              data-testid="explore-drinks"
            >
              Explore Drinks
            </button>
          </Link>
        </section>
        <LowerMenu />
      </section>
    </section>
  );
}
