/* eslint-disable import/no-unresolved */
import React from 'react';
import { useRouter } from 'next/router';
import { FaPlus } from 'react-icons/fa';

import { logoff } from '../../services/auth';

import { Container, Row, Column } from '../Grid';
import { Button } from '../Buttons';
import ProfileIcon from '../ProfileIcon';

import StyledHeader from './styles';

function Header() {
  const router = useRouter();

  const logout = () => {
    logoff();
    router.push('/login');
  };

  const goToHome = () => {
    router.push('/');
  };

  return (
    <StyledHeader className="header">
      <Container className="main-content">
        <Row alignItems="center">
          <Column desktop="3" tablet="3" mobile="6" className="logo-column">
            <Button buttonTheme="link" onClick={() => goToHome()}>
              <h2 className="app-name txt-primary">Emerge Link</h2>
            </Button>
          </Column>
          <Column desktop="9" tablet="9" mobile="6">
            <Row alignItems="center" justifyContent="flex-end">
              <Column desktop="2" tablet="2" mobile="12" className="flex j-c-end">
                <Button buttonTheme="link" onClick={() => logout()}>
                  <p className="txt-secondary">Sair</p>
                </Button>

                <Button buttonTheme="link" onClick={() => {}}>
                  <FaPlus />
                </Button>

                <Button buttonTheme="link" onClick={() => {}}>
                  <ProfileIcon />
                </Button>
              </Column>
            </Row>
          </Column>
        </Row>
      </Container>
    </StyledHeader>
  );
}

export default Header;
