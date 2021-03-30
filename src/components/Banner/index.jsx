import React from 'react';

import { Container } from 'components/Grid';
import { Button } from 'components/Buttons';

import StyledBanner from './styles';

function Banner({ backgroundImage }) {
  return (
    <StyledBanner backgroundImage={backgroundImage}>
      <Container>
        <div className="banner-text">
          <h1 className="title">Emerge Link</h1>
          <h2 className="subtitle">Conectando você ao mundo</h2>
          <h3 className="description txt-dark">Não perca tempo, conheça nossos planos e conecte-se com o mundo</h3>
          <Button buttonTheme="secondary">
            Ver planos
          </Button>
        </div>
      </Container>
    </StyledBanner>
  );
}

export default Banner;
