import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Button } from 'components/Buttons';

import Container from '../styles/pages/Home';

function Home() {
  const router = useRouter();

  return (
    <Container>
      <Head>
        <title>Emerge Link</title>
      </Head>

      <h1 className="mt-3">Emerge link</h1>

      <Button buttonTheme="primary" className="mt-3" onClick={() => router.push('/login')}>
        Ir para login do Admin
      </Button>
    </Container>
  );
}

export default Home;
