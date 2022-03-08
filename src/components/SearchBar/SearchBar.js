import React from 'react';
import './SearchBar.css';

export default function SearchBar() {
  return (
    <section className="container containerLogin">

      <h1>
        Hmmm
      </h1>

      <input
        type="text"
        data-testid="email-input"
        className="input inputEmail"
        placeholder="Login"
      />
      <input
        type="password"
        data-testid="password-input"
        className="input inputPassWord"
        placeholder="PassWord"
      />

      <button
        type="button"
        data-testid="login-submit-btn"
        className="btn btnSend"
      >
        Enter
      </button>

    </section>
  );
}
