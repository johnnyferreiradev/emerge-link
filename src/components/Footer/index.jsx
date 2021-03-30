import React from 'react';

import { Container, Row, Column } from 'components/Grid';
// import { AnchorButton } from 'components/Buttons';

import StyledFooter from './styles';

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Row>
          <Container>
            <Row>
              <Column desktop="12" tablet="12" mobile="12" className="flex j-c-between a-i-center">
                <p>Rua São Sebastião, N 623, Planalto, Fortaleza-CE</p>
                <p>CNPJ: 04.601.397/0002-29</p>
                <p>elprovedora@emergelink.com.br</p>
                <p className="txt-primary">
                  ©
                  {new Date().getFullYear()}
                  Emerge Link - Todos os direitos reservados
                </p>
              </Column>
            </Row>
          </Container>
        </Row>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
