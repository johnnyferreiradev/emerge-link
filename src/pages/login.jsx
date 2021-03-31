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

  const [loginState, setLoginState] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleLoginField = ({ target }) => {
    switch (target.name) {
      case 'email':
        setLoginState((prevState) => ({ ...prevState, email: target.value }));
        break;
      case 'password':
        setLoginState((prevState) => ({ ...prevState, password: target.value }));
        break;
      default:
        throw new Error('invalid option');
    }
  };

  const handleLogin = () => {
    const { email, password } = loginState;

    if (!email || !password) {
      dispatch(showSnackbar('Você precisa preencher todos os campos', 'danger'));
      return;
    }

    if (!validadeEmail(email)) {
      dispatch(showSnackbar('Email inválido', 'danger'));
      return;
    }

    setLoading(true);

    login(email, password)
      .then(({ data }) => {
        authenticate(data);
        router.push('/plans');
      })
      .catch(() => {
        dispatch(showSnackbar('Email ou senha incorretos', 'danger'));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <PublicAdminLayout>
      <StyledLogin>
        <h1>Login</h1>
        <p>Faça login para gerenciar a plataforma</p>
        <Card width="344px" className="mb-3">
          <div className="form">
            <div className="form-group mb-2">
              <label htmlFor="login-email">
                <p>E-mail</p>
                <input
                  type="email"
                  name="email"
                  value={loginState.email}
                  placeholder="Digite seu e-mail"
                  id="login-email"
                  onChange={handleLoginField}
                />
              </label>
            </div>

            <div className="form-group mb-2">
              <label htmlFor="login-password">
                <p>Senha</p>
                <input
                  type="password"
                  name="password"
                  value={loginState.password}
                  placeholder="Digite sua senha"
                  id="login-password"
                  onChange={handleLoginField}
                />
              </label>
            </div>

            <div className="form-group mb-2">
              <Button theme="primary" fluid onClick={handleLogin}>
                {!loading ? 'Login' : (
                  <Loading type="bubbles" height={32} width={32} fluid />
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
