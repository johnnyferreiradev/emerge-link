import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { registerPlan } from 'api/plans';

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

  const handleCreatePlan = () => {
    const { name, price, size } = planState;

    if (!size) {
      dispatch(showSnackbar('O campo tamanho é obrigatório', 'danger'));
      return;
    }

    if (!price) {
      dispatch(showSnackbar('O campo preço é obrigatório', 'danger'));
      return;
    }

    setLoading(true);

    registerPlan(name, size, price)
      .then(() => {
        router.push('/plans');
      }).catch(() => {
        dispatch(showSnackbar('Ocorreu um erro ao cadastrar o plano. Tente novamente', 'danger'));
      }).finally(() => {
        setLoading(false);
      });
  };

  return (
    <MainLayout isPrivate>
      <StyledPlans>
        <h1 className="mb-3">Planos</h1>

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
                  type="number"
                  id="plan-size"
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
                  type="number"
                  id="plan-price"
                  onChange={handlePlanField}
                />
              </label>
            </div>

            <div className="form-group mb-2">
              <Button theme="primary" fluid onClick={handleCreatePlan}>
                {!loading ? 'Salvar' : (
                  <Loading type="bubbles" height={32} width={32} fluid />
                )}
              </Button>
            </div>
          </div>
        </Card>

      </StyledPlans>
    </MainLayout>
  );
}

export default Plans;
