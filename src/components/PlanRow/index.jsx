import React from 'react';
import { useDispatch } from 'react-redux';

import { deletePlan } from 'api/plans';

import showGlobalModal from 'store/actions/modal/showGlobalModal';
import hideGlobalModal from 'store/actions/modal/hideGlobalModal';

import Card from 'components/Card';
import { Button } from 'components/Buttons';
import { Column } from 'components/Grid';

import StyledPlanRow from './styles';

function PlanRow({ plan }) {
  const dispatch = useDispatch();

  const removePlan = (planId) => {
    deletePlan(planId)
      .then(() => {
        window.location.reload();
      })
      .catch(() => {
        alert('Erro ao remover plano');
      });
  };

  const handleRemove = (id) => {
    dispatch(showGlobalModal((
      <div className="remove-plan-modal">
        <h1 className="mb-3">Tem certeza que deseja excluir este plano?</h1>
        <Button buttonTheme="danger" className="mr-2" onClick={() => removePlan(id)}>Excluir</Button>
        <Button buttonTheme="secondary" onClick={() => dispatch(hideGlobalModal())}>Cancelar</Button>
      </div>
    )));
  };

  return (
    <StyledPlanRow>
      <Card>
        <Column desktop="3" tablet="3" mobile="3">
          <p>{plan.name}</p>
        </Column>
        <Column desktop="3" tablet="3" mobile="3">
          <p>{plan.size}</p>
        </Column>
        <Column desktop="3" tablet="3" mobile="3">
          <p>{plan.price}</p>
        </Column>

        <Column desktop="3" tablet="3" mobile="3" className="actions">
          <Button buttonTheme="secondary">Editar</Button>
          <Button buttonTheme="danger" onClick={() => handleRemove(plan._id)}>Excluir</Button>
        </Column>
      </Card>
    </StyledPlanRow>
  );
}

export default PlanRow;
