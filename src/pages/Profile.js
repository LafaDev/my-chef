import React from 'react';
import EmailHeader from '../components/EmailHeader/EmailHeader';
import Header from '../components/Header/Header';
import LowerMenu from '../components/LowerMenu/LowerMenu';
import ProfileButtons from '../components/ProfileButtons/ProfileButtons';
import '../styles/Main.css';

// Create new semi-header element
export default function Profile() {
  // Create new semi-header element *

  return (
    <main className="section-profile">
      <div className="header">
        <Header title="Profile" />
      </div>
      <section className="main-container container">
        <section className="container-profile">
          <EmailHeader />
          <ProfileButtons />
        </section>
        <LowerMenu />
      </section>
    </main>
  );
}
