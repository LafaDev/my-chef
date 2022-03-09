import React from 'react';
import './EmailHeader.css';

export default function EmailHeader() {
  const catchEmail = () => {
    const callname = JSON.parse(localStorage.getItem('user'));
    console.log(callname);
    return (
      callname.email
    );
  };

  return (
    <section className="container containerEmailHeaders">
      <h1 data-testid="profile-email">
        {catchEmail()}
      </h1>
    </section>
  );
}
