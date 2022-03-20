import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import LowerMenu from '../components/LowerMenu/LowerMenu';
import { FilterContext } from '../contexts/FilterContext';
import '../styles/Explorer.css';

export default function Explorer() {
  const { setCurrentPage } = useContext(FilterContext);
  return (
    <main className="section-explorer">
      <div className="header">
        <Header title="Explorer" className="header" />
      </div>
      <div className="main-container container">
        <section className="explore">
          <Link to="/explore/foods">
            <button
              onClick={
                setCurrentPage('foods')
              }
              type="button"
              className="btn-profile"
              data-testid="explore-foods"
            >
              Explore Foods
            </button>
          </Link>

          <Link to="/explore/drinks">
            <button
              onClick={
                setCurrentPage('drinks')
              }
              type="button"
              data-testid="explore-drinks"
              className="btn-profile"
            >
              Explore Drinks
            </button>
          </Link>
        </section>
        <LowerMenu />
      </div>
    </main>
  );
}
