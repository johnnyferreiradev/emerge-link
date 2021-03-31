import React from 'react';

import { Row, Column } from 'components/Grid';

import StyledSection from './styles';

function Section({ children, background, className }) {
  return (
    <StyledSection background={background} className={className}>
      <Row className="flex j-c-center">
        <Column desktop="12" tablet="12" mobile="12">
          {children}
        </Column>
      </Row>
    </StyledSection>
  );
}

export default Section;
