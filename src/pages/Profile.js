import React from 'react';
import EmailHeader from '../components/EmailHeader/EmailHeader';
import Header from '../components/Header/Header';
import LowerMenu from '../components/LowerMenu/LowerMenu';
import ProfileButtons from '../components/ProfileButtons/ProfileButtons';
// Create new semi-header element
export default function Profile() {
  // Create new semi-header element *

  return (
    <section className="container">
      <Header title="Profile" />
      <EmailHeader />
      <ProfileButtons />
      <LowerMenu />
    </section>
  );
}
