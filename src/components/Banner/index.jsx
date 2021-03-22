import React from 'react';

import { Container } from '../Grid';

import StyledBanner from './styles';

function Banner({ backgroundImage }) {
  return (
    <StyledBanner backgroundImage={backgroundImage}>
      <Container>
        <div className="banner-text">
          <p className="txt-secondary">Bem-vindo ao</p>
          <h1 className="title">Emerge Link</h1>
          <h3 className="subtitle txt-dark">Conectando você ao mundo!</h3>
        </div>
      </Container>
    </StyledBanner>
  );
}

export default Banner;
