import React from 'react';
import './Loginscreen.css';
import { FaLock, FaUser } from 'react-icons/fa';

export default function Loginscreen() {
  return (
    <section className="page-login">

      <h1>
        Hmmm
      </h1>

      <div className="container-login">
        <h2>Login</h2>
        <form action="" className="form-login">
          <label htmlFor="email-input" className="label-login">
            <FaUser />
            <input
              id="email-input"
              type="text"
              data-testid="email-input"
              className="input-login inputEmail"
              placeholder="Login"
            />
          </label>
          <label htmlFor="password-input" className="label-login">
            <FaLock />
            <input
              id="password-input"
              type="password"
              data-testid="password-input"
              className="input-login inputPassWord"
              placeholder="exemplo@exemplo"
            />
          </label>
        </form>

        <div className="btn">
          <button
            type="button"
            data-testid="login-submit-btn"
            className="btn-login"
          >
            Enter
          </button>
        </div>

      </div>

    </section>
  );
}
