import React from 'react';
import Head from 'next/head';

import profileImage from '../assets/images/default-profile.png';
import Container from '../styles/pages/Home';

function Home() {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <img src={profileImage} alt="Profile" />
      <h1>Emerge link</h1>
    </Container>
  );
}

export default Home;
