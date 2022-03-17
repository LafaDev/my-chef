import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { FaLock, FaUser } from 'react-icons/fa';
import './Loginscreen.css';
import logo from '../../images/login4.png';

const MIN_CHAR = 6;

export default function Loginscreen() {
  const [passwordDisable, setPasswordDisable] = useState(true);
  const [emailDisable, setEmailDisable] = useState(true);
  const [buttonDisable, setButtonDisable] = useState(true);
  const [email, setEmail] = useState('');
  const [redirect, setRedirect] = useState(false);

  const isButtonActive = () => {
    if (passwordDisable === false && emailDisable === false) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  };

  const handleClick = () => {
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify({ email }));
    setRedirect(true);
  };

  const passwordValidation = ({ target }) => {
    if (target.value.length > MIN_CHAR) {
      setPasswordDisable(false);
    } else {
      setPasswordDisable(true);
    }
    isButtonActive();
  };

  const emailValidation = ({ target }) => {
    setEmail(target.value);
    if (target.value.match(/^[^\s@]+@[^\s@]+\.com$/)) {
      setEmailDisable(false);
    } else {
      setEmailDisable(true);
    }
    isButtonActive();
  };

  return (
    <section className="page-login">

      <img
        className="logo"
        src={ logo }
        alt="test"
      />

      <div className="container-login">
        <h2>Login</h2>
        <form action="" className="form-login">
          <label htmlFor="email-input" className="label-login">
            <FaUser />
            <input
              id="email-input"
              type="email"
              data-testid="email-input"
              className="input-login inputEmail"
              placeholder="exemplo@exemplo"
              value={ email }
              onKeyUp={ emailValidation }
              onChange={ emailValidation }
            />
          </label>
          <label htmlFor="password-input" className="label-login">
            <FaLock />
            <input
              id="password-input"
              type="password"
              data-testid="password-input"
              className="input-login inputPassWord"
              placeholder="Password"
              onChange={ passwordValidation }
              onKeyUp={ passwordValidation }
            />
          </label>
        </form>

        <div className="btn">
          <button
            type="button"
            data-testid="login-submit-btn"
            className="btn-login"
            disabled={ buttonDisable }
            onClick={ handleClick }
          >
            Enter
          </button>
        </div>
        {redirect && <Redirect to="/foods" />}

      </div>

    </section>

  );
}
