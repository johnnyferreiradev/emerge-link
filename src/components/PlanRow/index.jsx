import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { deletePlan } from 'api/plans';

import showGlobalModal from 'store/actions/modal/showGlobalModal';
import hideGlobalModal from 'store/actions/modal/hideGlobalModal';
import showSnackbar from 'store/actions/snackbar/showSnackbar';

import Card from 'components/Card';
import { Button } from 'components/Buttons';
import { Column } from 'components/Grid';
import Loading from 'components/Loading';
import DeletePlanModal from 'components/DeletePlanModal';

import StyledPlanRow from './styles';

function PlanRow({ plan }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const removePlan = (planId) => {
    setLoading(true);

    deletePlan(planId)
      .then(() => {
        window.location.reload();
      })
      .catch(() => {
        dispatch(showSnackbar('Ocorreu um erro ao deletar o plano. Tente novamente', 'danger'));
      }).finally(() => {
        setLoading(false);
      });
  };

  const handleRemove = (id) => {
    dispatch(showGlobalModal((
      <DeletePlanModal id={id} />
    )));
  };

  const handleEdit = (id) => {
    router.push(`/plan-form/${id}`);
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

        <Column desktop="3" tablet="3" mobile="3" className="plan-row-actions">
          <Button buttonTheme="secondary" onClick={() => handleEdit(plan._id)}>Editar</Button>
          <Button buttonTheme="danger" onClick={() => handleRemove(plan._id)}>Excluir</Button>
        </Column>
      </Card>
    </StyledPlanRow>
  );
}

export default PlanRow;
