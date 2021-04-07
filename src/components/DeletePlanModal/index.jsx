import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { deletePlan } from 'api/plans';

import showSnackbar from 'store/actions/snackbar/showSnackbar';
import hideGlobalModal from 'store/actions/modal/hideGlobalModal';

import { Button } from 'components/Buttons';
import Loading from 'components/Loading';

function DeletePlanModal({ id }) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const removePlan = (planId) => {
    setLoading(true);

    deletePlan(planId)
      .then(() => {
        window.location.reload();
      })
      .catch(() => {
        dispatch(showSnackbar('Ocorreu um erro ao deletar o plano. Tente novamente', 'danger'));
        setLoading(false);
      });
  };

  return (
    <div className="remove-plan-modal">
      <h1 className="mb-3">Tem certeza que deseja excluir este plano?</h1>

      {!loading && (
        <>
          <Button buttonTheme="danger" className="mr-2" onClick={() => removePlan(id)}>Excluir</Button>
          <Button buttonTheme="secondary" onClick={() => dispatch(hideGlobalModal())}>Cancelar</Button>
        </>
      )}

      {loading && (
        <Loading type="bubbles" height={64} width={64} fluid color="#F38C8C" />
      )}
    </div>
  );
}

export default DeletePlanModal;
