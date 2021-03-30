import React from 'react';

import Card from 'components/Card';
// import { Button } from 'components/Buttons';
import { Row, Column } from 'components/Grid';

import StyledPlanCard from './styles';

function PlanCard({ plan }) {
  return (
    <StyledPlanCard>
      <Card>
        <Row>
          <Column desktop="12" tablet="12" mobile="12">
            <p>{plan.name}</p>
          </Column>
        </Row>

        <Row>
          <Column desktop="12" tablet="12" mobile="12">
            <h1>{plan.size}</h1>
          </Column>
        </Row>

        <Row>
          <Column desktop="12" tablet="12" mobile="12">
            <h3>{plan.price}</h3>
          </Column>
        </Row>
      </Card>
    </StyledPlanCard>
  );
}

export default PlanCard;
