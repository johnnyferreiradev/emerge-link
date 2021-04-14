import React, { useState } from 'react';
// import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { getInvoices } from 'api/invoices';

import showSnackbar from 'store/actions/snackbar/showSnackbar';

// import { validadeEmail } from 'utils/validate';

import PublicAdminLayout from 'layouts/PublicAdminLayout';

import Card from 'components/Card';
import { Button } from 'components/Buttons';
import Loading from 'components/Loading';
import InvoiceCard from 'components/InvoiceCard';

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
  const [invoices, setInvoices] = useState(null);
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

  const loadInvoices = () => {
    const { cpf } = cpfState;

    if (!cpf) {
      dispatch(showSnackbar('Você precisa preencher todos os campos', 'danger'));
      return;
    }

    setLoading(true);

    getInvoices(cpf)
      .then(({ data }) => {
        setInvoices(data.invoices);

        if (data.invoices.length === 0) {
          dispatch(showSnackbar('Não há faturas', 'danger'));
        }
      })
      .catch(({ response }) => {
        if (response.data.code === 'findCpfError') {
          dispatch(showSnackbar('Este CPF não está cadastrado ou é inválido', 'danger'));
          return;
        }

        dispatch(showSnackbar('Erro ao bucar faturas. Tente novamente mais tarde', 'danger'));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <PublicAdminLayout>
      <StyledLogin>
        <h1>Minhas faturas</h1>

        {(!invoices || invoices.length === 0) && (
          <>
            <p>Informe seu CPF para buscar suas faturas</p>
            <Card width="344px" className="mb-3">
              <div className="form">
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

                {/* {invoice && (
                  <div className="form-group mb-3">
                    <p className="txt-secondary text-center">Código</p>
                    <h3 className="text-center">{invoice.code}</h3>
                  </div>
                )} */}

                <div className="form-group mb-2">
                  <Button theme="primary" fluid onClick={() => loadInvoices()}>
                    {!loading ? 'Gerar' : (
                      <Loading type="bubbles" height={32} width={32} />
                    )}
                  </Button>

                  {/* {!invoice ? (

                  ) : (
                    <Button theme="success" fluid onClick={() => showInvoice()}>
                      Ver fatura
                    </Button>
                  )} */}
                </div>
              </div>
            </Card>
          </>
        )}

        <div className="invoice-list">
          {invoices && invoices.sort((a, b) => {
            if (a.due_date > b.due_date) {
              return -1;
            }

            if (a.due_date < b.due_date) {
              return 1;
            }

            return 0;
          }).map((invoice) => (
            <InvoiceCard invoice={invoice} />
          ))}
        </div>
      </StyledLogin>
    </PublicAdminLayout>
  );
}

export default Login;
