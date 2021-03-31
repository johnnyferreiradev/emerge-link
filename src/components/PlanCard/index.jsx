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
            <p className="plan-name">{plan.name}</p>
          </Column>
        </Row>

        <Row>
          <Column desktop="12" tablet="12" mobile="12">
            <h1>{plan.size}</h1>
            <p className="plan-size">Mega</p>
          </Column>
        </Row>

        <Row>
          <Column desktop="12" tablet="12" mobile="12">
            <h3>
              <span>R$</span>
              {plan.price}
              <span>/mês</span>
            </h3>
          </Column>
        </Row>
      </Card>
    </StyledPlanCard>
  );
}

export default PlanCard;
