import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { authenticate } from 'services/auth';

import { login } from 'api/auth';

import showSnackbar from 'store/actions/snackbar/showSnackbar';

import { validadeEmail } from 'utils/validate';

import PublicAdminLayout from 'layouts/PublicAdminLayout';

import Card from 'components/Card';
import { Button } from 'components/Buttons';
import Loading from 'components/Loading';

import StyledLogin from 'styles/pages/Login';

function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

  // const userIsAuth = !!getToken();

  // if (userIsAuth) {
  //   router.push('/plans');
  // }

  const [cpfState, setCpfState] = useState({
    cpf: '',
  });
  const [loading, setLoading] = useState(false);

  const handleCpfField = ({ target }) => {
    switch (target.name) {
      case 'email':
        setCpfState((prevState) => ({ ...prevState, email: target.value }));
        break;
      case 'password':
        setCpfState((prevState) => ({ ...prevState, password: target.value }));
        break;
      default:
        throw new Error('invalid option');
    }
  };

  // const handleLogin = () => {
  //   const { email, password } = cpfState;

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

  return (
    <PublicAdminLayout>
      <StyledLogin>
        <h1>Gerar fatura</h1>
        <p>Informe seu CPF para buscar a fatura deste mês</p>
        <Card width="344px" className="mb-3">
          <div className="form">
            <div className="form-group mb-2">
              <label htmlFor="cpf-field">
                <p>CPF</p>
                <input
                  type="number"
                  name="cpf"
                  value={cpfState.cpf}
                  placeholder="Digite seu CPF"
                  id="cpf-field"
                  onChange={handleCpfField}
                />
              </label>
            </div>

            <div className="form-group mb-2">
              <Button theme="primary" fluid onClick={() => {}}>
                {!loading ? 'Gerar' : (
                  <Loading type="bubbles" height={32} width={32} />
                )}
              </Button>
            </div>
          </div>
        </Card>
      </StyledLogin>
    </PublicAdminLayout>
  );
}

export default Login;
