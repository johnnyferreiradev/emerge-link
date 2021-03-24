import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { getToken, authenticate } from 'services/auth';

import { getPlans } from 'api/plans';

import showSnackbar from 'store/actions/snackbar/showSnackbar';

import { validadeEmail } from 'utils/validate';

import MainLayout from 'layouts/MainLayout';

import Card from 'components/Card';
import { Button } from 'components/Buttons';
import Loading from 'components/Loading';
import PlanRow from 'components/PlanRow';
import { Row, Column } from 'components/Grid';

import profileImage from 'assets/images/default-profile.png';

import StyledPlans from 'styles/pages/Plans';

function Plans() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [plans, setPlans] = useState([]);

  // const userIsAuth = !!getToken();

  // if (userIsAuth) {
  //   router.push('/plans');
  // }

  // const [loginState, setLoginState] = useState({
  //   email: '',
  //   password: '',
  // });
  // const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    logoff();
    router.push('/login');
  };

  // const handleLoginField = ({ target }) => {
  //   switch (target.name) {
  //     case 'email':
  //       setLoginState((prevState) => ({ ...prevState, email: target.value }));
  //       break;
  //     case 'password':
  //       setLoginState((prevState) => ({ ...prevState, password: target.value }));
  //       break;
  //     default:
  //       throw new Error('invalid option');
  //   }
  // };

  // const handleLogin = () => {
  //   const { email, password } = loginState;

  //   if (!email || !password) {
  //     dispatch(showSnackbar('Você precisa preencher todos os campos', 'danger'));
  //     return;
  //   }

  //   if (!validadeEmail(email)) {
  //     dispatch(showSnackbar('Email inválido', 'danger'));
  //     return;
  //   }

  //   setLoading(true);

  //   login(email, password)
  //     .then(({ data }) => {
  //       authenticate(data);
  //       router.push('/plans');
  //     })
  //     .catch(() => {
  //       dispatch(showSnackbar('Email ou senha incorretos', 'danger'));
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // };

  useEffect(() => {
    getPlans()
      .then((response) => {
        console.log(response.data);
        setPlans(() => response.data.plans);
      })
      .catch(() => {
        console.log('Error');
      });
  }, []);

  return (
    <MainLayout isPrivate>
      <StyledPlans>
        <h1>Planos</h1>

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

      </StyledPlans>
    </MainLayout>
  );
}

export default Plans;
