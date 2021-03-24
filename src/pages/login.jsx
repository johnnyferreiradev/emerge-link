import React from 'react';
import Head from 'next/head';

import MainLayout from '../layouts/MainLayout';

import profileImage from '../assets/images/default-profile.png';
import Container from '../styles/pages/Home';

function Home() {
  return (
    <MainLayout>
      <Container>
        <img src={profileImage} alt="Profile" />
        <h1>Emerge link</h1>
      </Container>
    </MainLayout>
  );
}

export default Home;
