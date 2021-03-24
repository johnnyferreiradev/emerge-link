import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { getPlans } from 'api/plans';

import { getToken } from 'services/auth';

import MainLayout from 'layouts/MainLayout';

import PlanRow from 'components/PlanRow';
import { Row, Column } from 'components/Grid';
import Loading from 'components/Loading';

import StyledPlans from 'styles/pages/Plans';

function Plans() {
  const router = useRouter();

  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    if (!getToken()) {
      router.push('/login');
      return;
    }

    getPlans()
      .then((response) => {
        setPlans(() => response.data.plans);
      }).finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <MainLayout isPrivate>
      <StyledPlans>
        <h1>Planos</h1>

        {loading && (
          <Loading type="bubbles" height={96} width={96} fluid color="#229DE8" />
        )}

        {!loading && plans.length !== 0 && (
          <>
            <Row>
              <Column desktop="3" tablet="3" mobile="3">
                <p>Nome</p>
              </Column>
              <Column desktop="3" tablet="3" mobile="3">
                <p>Tamanho</p>
              </Column>
              <Column desktop="3" tablet="3" mobile="3">
                <p>Preço</p>
              </Column>

              <Column desktop="3" tablet="3" mobile="3">
                <p>Ações</p>
              </Column>
            </Row>

            <div className="content">
              {plans.map((plan) => (
                <PlanRow key={plan._id} plan={plan} />
              ))}
            </div>
          </>
        )}

        {!loading && plans.length === 0 && (
          <h3 className="txt-primary mt-3">Não há planos</h3>
        )}

      </StyledPlans>
    </MainLayout>
  );
}

export default Plans;
