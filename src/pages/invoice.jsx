import React, { useState } from 'react';
// import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { getInvoice } from 'api/invoices';

import showSnackbar from 'store/actions/snackbar/showSnackbar';

// import { validadeEmail } from 'utils/validate';

import PublicAdminLayout from 'layouts/PublicAdminLayout';

import Card from 'components/Card';
import { Button, AnchorButton } from 'components/Buttons';
import Loading from 'components/Loading';

import StyledLogin from 'styles/pages/Login';

function Login() {
  const dispatch = useDispatch();
  // const router = useRouter();

  // const userIsAuth = !!getToken();

  // if (userIsAuth) {
  //   router.push('/plans');
  // }

  const [cpfState, setCpfState] = useState({
    cpf: '',
  });
  const [invoice, setInvoice] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCpfField = ({ target }) => {
    switch (target.name) {
      case 'cpf':
        setCpfState((prevState) => ({ ...prevState, cpf: target.value }));
        break;
      default:
        throw new Error('invalid option');
    }
  };

  const downloadInvoice = () => {
    const { cpf } = cpfState;

    if (!cpf) {
      dispatch(showSnackbar('Você precisa preencher todos os campos', 'danger'));
      return;
    }

    setLoading(true);

    getInvoice(cpf)
      .then(({ data }) => {
        dispatch(showSnackbar('Fatura gerada com sucesso!', 'success'));
        setInvoice(data.invoice);
      })
      .catch(({ response }) => {
        if (response.data.code === 'findCpfError') {
          dispatch(showSnackbar('Este CPF não está cadastrado ou é inválido', 'danger'));
          return;
        }

        dispatch(showSnackbar('Erro ao fazer o download da fatura. Tente novamente mais tarde', 'danger'));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const showInvoice = () => {
    window.open(invoice.url, '_blank');
  };

  return (
    <PublicAdminLayout>
      <StyledLogin>
        <h1>Gerar fatura</h1>
        <p>Informe seu CPF para buscar a fatura deste mês</p>
        <Card width="344px" className="mb-3">
          <div className="form">
            {!invoice && (
              <div className="form-group mb-2">
                <label htmlFor="cpf-field">
                  <p>CPF</p>
                  <input
                    type="number"
                    name="cpf"
                    value={cpfState.cpf}
                    placeholder="Digite seu CPF (Somente números)"
                    id="cpf-field"
                    onChange={handleCpfField}
                  />
                </label>
              </div>
            )}

            {invoice && (
              <div className="form-group mb-3">
                <p className="txt-secondary text-center">Código</p>
                <h3 className="text-center">{invoice.code}</h3>
              </div>
            )}

            <div className="form-group mb-2">
              {!invoice ? (
                <Button theme="primary" fluid onClick={() => downloadInvoice()}>
                  {!loading ? 'Gerar' : (
                    <Loading type="bubbles" height={32} width={32} />
                  )}
                </Button>
              ) : (
                <Button theme="success" fluid onClick={() => showInvoice()}>
                  Ver fatura
                </Button>
              )}
            </div>
          </div>
        </Card>
      </StyledLogin>
    </PublicAdminLayout>
  );
}

export default Login;
