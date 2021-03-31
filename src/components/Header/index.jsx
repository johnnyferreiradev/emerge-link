/* eslint-disable import/no-unresolved */
import React, { useContext } from 'react';
import { useRouter } from 'next/router';

import { RefsContext } from 'contexters/RefsContext';

import { logoff } from '../../services/auth';

import { Container, Row, Column } from '../Grid';
import { Button } from '../Buttons';

import StyledHeader from './styles';

function Header({ isPrivate, hideLinks }) {
  const router = useRouter();
  const refs = useContext(RefsContext);

  const logout = () => {
    logoff();
    router.push('/login');
  };

  const goToPlans = () => {
    router.push('/plans');
  };

  const goToNewPlan = () => {
    router.push('/plan-form');
  };

  const scrollToRef = (currentRef) => {
    if (!currentRef) return;

    const offsetTop = currentRef.current.getBoundingClientRect().y;
    window.scrollTo(0, offsetTop > 100 ? offsetTop - 32 : 0);
  };

  return (
    <StyledHeader className="header">
      <Container className="main-content">
        <Row alignItems="center">
          <Column desktop="3" tablet="3" mobile="6" className="logo-column">
            <Button buttonTheme="link" onClick={() => goToPlans()}>
              <h2 className="app-name txt-dark">Emerge Link</h2>
            </Button>
          </Column>
          <Column desktop="9" tablet="9" mobile="6">
            <Row alignItems="center" justifyContent="flex-end">
              <Column desktop="12" tablet="12" mobile="12" className="flex j-c-end">
                {isPrivate && !hideLinks && (
                  <>
                    <Button buttonTheme="link" onClick={() => logout()}>
                      Sair
                    </Button>

                    <Button buttonTheme="primary" onClick={() => goToNewPlan()}>
                      Novo
                    </Button>
                  </>
                )}

                {!isPrivate && !hideLinks && (
                  <>
                    <Button buttonTheme="link" className="home-button" onClick={() => scrollToRef(refs.contact)}>
                      Contato
                    </Button>

                    <Button buttonTheme="primary" className="home-button" onClick={() => {}}>
                      Gerar fatura
                    </Button>
                  </>
                )}
              </Column>
            </Row>
          </Column>
        </Row>
      </Container>
    </StyledHeader>
  );
}

export default Header;
