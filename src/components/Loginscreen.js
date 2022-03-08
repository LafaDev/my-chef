import React from 'react';

export default function Loginscreen() {
  return (
    <section className="container containerLogin">
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
