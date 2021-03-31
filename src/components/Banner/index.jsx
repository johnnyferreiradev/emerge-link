import React, { useContext } from 'react';

import { RefsContext } from 'contexters/RefsContext';

import { Container } from 'components/Grid';
import { Button } from 'components/Buttons';

import StyledBanner from './styles';

function Banner({ backgroundImage }) {
  const refs = useContext(RefsContext);

  const scrollToRef = (currentRef) => {
    if (!currentRef) return;

    const offsetTop = currentRef.current.getBoundingClientRect().y;
    window.scrollTo(0, offsetTop > 100 ? offsetTop - 32 : 0);
  };

  return (
    <StyledBanner backgroundImage={backgroundImage}>
      <Container>
        <div className="banner-text">
          <h1 className="title">Emerge Link</h1>
          <h2 className="subtitle">Conectando você ao mundo</h2>
          <h3 className="description txt-dark">Não perca tempo, conheça nossos planos e conecte-se com o mundo</h3>
          <Button buttonTheme="secondary" onClick={() => scrollToRef(refs.plans)}>
            Ver planos
          </Button>
        </div>
      </Container>
    </StyledBanner>
  );
}

export default Banner;
