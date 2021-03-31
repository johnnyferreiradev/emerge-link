import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { updatePlan, getPlan } from 'api/plans';

import { getToken } from 'services/auth';

import showSnackbar from 'store/actions/snackbar/showSnackbar';

import MainLayout from 'layouts/MainLayout';

import Card from 'components/Card';
import { Button } from 'components/Buttons';
import Loading from 'components/Loading';

import StyledPlans from 'styles/pages/Plans';

function Plans() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [planState, setPlanState] = useState({
    name: '',
    size: '',
    price: '',
  });
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);

  const handlePlanField = ({ target }) => {
    switch (target.name) {
      case 'name':
        setPlanState((prevState) => ({ ...prevState, name: target.value }));
        break;
      case 'size':
        setPlanState((prevState) => ({ ...prevState, size: target.value }));
        break;
      case 'price':
        setPlanState((prevState) => ({ ...prevState, price: target.value }));
        break;
      default:
        throw new Error('invalid option');
    }
  };

  const handleUpdatePlan = () => {
    const { name, price, size } = planState;

    const {
      query: { id },
    } = router;

    if (!size) {
      dispatch(showSnackbar('O campo tamanho é obrigatório', 'danger'));
      return;
    }

    if (!price) {
      dispatch(showSnackbar('O campo preço é obrigatório', 'danger'));
      return;
    }

    setLoading(true);

    updatePlan(id, {
      name,
      price,
      size,
    })
      .then(() => {
        router.push('/plans');
      }).catch(() => {
        dispatch(showSnackbar('Ocorreu um erro ao atualizar o plano', 'danger'));
        router.push('/plans');
      }).finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const {
      query: { id },
    } = router;

    setLoadingData(true);

    if (!getToken()) {
      router.push('/login');
      return;
    }

    getPlan(id)
      .then((response) => {
        const { name, price, size } = response.data.plan;

        setPlanState({
          name,
          price,
          size,
        });
      })
      .catch(() => {
        dispatch(showSnackbar('Plano não encontrado', 'danger'));
        router.push('/plans');
      }).finally(() => {
        setLoadingData(false);
      });
  }, []);

  return (
    <MainLayout isPrivate>
      <StyledPlans>
        <h1 className="mb-3">Editar plano</h1>

        {!loadingData && (
          <Card width="344px" className="mb-3">
            <div className="form">
              <div className="form-group mb-2">
                <label htmlFor="plan-name">
                  <p>Nome</p>
                  <input
                    type="text"
                    name="name"
                    value={planState.name}
                    placeholder="Digite o nome do plano (Opcional)"
                    id="plan-name"
                    onChange={handlePlanField}
                  />
                </label>
              </div>

              <div className="form-group mb-2">
                <label htmlFor="plan-size">
                  <p>Tamanho (Mb)</p>
                  <input
                    name="size"
                    value={planState.size}
                    placeholder="Digite a quantidade de Mb do plano"
                    id="plan-size"
                    type="number"
                    onChange={handlePlanField}
                  />
                </label>
              </div>

              <div className="form-group mb-2">
                <label htmlFor="plan-price">
                  <p>Preço</p>
                  <input
                    name="price"
                    value={planState.price}
                    placeholder="Digite o preço do plano"
                    id="plan-price"
                    type="number"
                    onChange={handlePlanField}
                  />
                </label>
              </div>

              <div className="form-group mb-2">
                <Button theme="primary" fluid onClick={handleUpdatePlan}>
                  {!loading ? 'Salvar' : (
                    <Loading type="bubbles" height={32} width={32} fluid />
                  )}
                </Button>
              </div>
            </div>
          </Card>
        )}

        {loadingData && (
          <Loading type="bubbles" height={96} width={96} fluid color="#229DE8" />
        )}

      </StyledPlans>
    </MainLayout>
  );
}

export default Plans;
