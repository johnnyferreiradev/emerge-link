import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Button } from 'components/Buttons';

import { logoff } from 'services/auth';

import profileImage from '../assets/images/default-profile.png';
import Container from '../styles/pages/Home';

function Home() {
  const router = useRouter();

  const handleLogout = () => {
    logoff();
    router.push('/login');
  };

  return (
    <Container>
      <Head>
        <title>Emerge Link</title>
      </Head>

      <img src={profileImage} alt="Profile" />
      <h1>Plans</h1>

      <Button onClick={() => handleLogout()}>Sair</Button>
    </Container>
  );
}

export default Home;
