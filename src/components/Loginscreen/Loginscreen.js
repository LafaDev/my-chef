import React, { useState } from 'react';
import './Loginscreen.css';
import { Redirect } from 'react-router-dom';
import { FaLock, FaUser } from 'react-icons/fa';

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

      <h1>
        Hmmm
      </h1>

      <div className="container-login">
        <form action="" className="form-login">
          <label htmlFor="email-input" className="label-login">
            <FaUser />
            <input
              type="text"
              data-testid="email-input"
              className="input inputEmail"
              placeholder="Login"
              value={ email }
              onKeyUp={ emailValidation }
              onChange={ emailValidation }
            />
          </label>
          <label htmlFor="password-input" className="label-login">
            <FaLock />
            <input
              type="password"
              data-testid="password-input"
              className="input inputPassWord"
              placeholder="PassWord"
              onChange={ passwordValidation }
              onKeyUp={ passwordValidation }
            />
          </label>
        </form>
        <div className="btn">
          <button
            type="button"
            data-testid="login-submit-btn"
            className="btn btnSend"
            disabled={ buttonDisable }
            onClick={ handleClick }
          >
            Enter
          </button>
          {redirect && <Redirect to="/foods" />}
        </div>
      </div>
    </section>
  );
}
