import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Loginscreen.css';

const MIN_CHAR = 6;

export default function Loginscreen({ history }) {
  const [passwordDisable, setPasswordDisable] = useState(true);
  const [emailDisable, setEmailDisable] = useState(true);
  const [buttonDisable, setButtonDisable] = useState(true);
  const [email, setEmail] = useState('');

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
    history.push('/foods');
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
    <section className="container containerLogin">

      <h1>
        Hmmm
      </h1>

      <input
        type="text"
        data-testid="email-input"
        className="input inputEmail"
        placeholder="Login"
        value={ email }
        onChange={ emailValidation }
      />
      <input
        type="password"
        data-testid="password-input"
        className="input inputPassWord"
        placeholder="PassWord"
        onChange={ passwordValidation }
      />

      <button
        type="button"
        data-testid="login-submit-btn"
        className="btn btnSend"
        disabled={ buttonDisable }
        onClick={ handleClick }
      >
        Enter
      </button>

    </section>
  );
}

Loginscreen.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
