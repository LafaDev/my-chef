import React from 'react';
import './EmailHeader.css';

export default function EmailHeader() {
  const catchEmail = () => {
    const callname = JSON.parse(localStorage.getItem('user'));
    return (
      callname.email
    );
  };

  return (
    <section className="container-EmailHeader">
      <h1
        data-testid="profile-email"
        className="email-text"
      >
        { localStorage.getItem('user') ? catchEmail() : 'Email não encontrado' }
      </h1>
    </section>
  );
}
