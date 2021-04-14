import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { getInvoice } from 'api/invoices';

import showSnackbar from 'store/actions/snackbar/showSnackbar';

import Card from 'components/Card';
import { Button } from 'components/Buttons';
import { Column } from 'components/Grid';
import Loading from 'components/Loading';

import StyledInvoiceCard from './styles';

function InvoiceCard({ invoice }) {
  const dispatch = useDispatch();

  const data = new Date();
  const currentDate = `${data.getDate()}/${(data.getMonth()) + 1}/${data.getFullYear()}`;

  const [loading, setLoading] = useState(false);

  const downloadInvoice = (bar_code) => {
    setLoading(true);

    getInvoice(bar_code)
      .then(({ data }) => {
        window.open(data.invoice.url, '_blank');
      })
      .catch(() => {
        dispatch(showSnackbar('Erro ao fazer o download da fatura. Tente novamente mais tarde', 'danger'));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <StyledInvoiceCard>
      <Card>
        <Column desktop="3" tablet="3" mobile="3">
          <p>
            Valor:
            <span>{invoice.price}</span>
          </p>
        </Column>
        <Column desktop="3" tablet="3" mobile="3">
          <p>
            Código de barras:
            <span>{invoice.bar_code}</span>
          </p>
        </Column>
        <Column desktop="3" tablet="3" mobile="3">
          <p>
            Status:
            {!invoice.paid && invoice.due_date < currentDate && (<span className="txt-danger">Atrasada</span>)}
            {!invoice.paid && invoice.due_date >= currentDate && (<span className="txt-info">Pendente</span>)}
            {invoice.paid && (<span className="txt-success">Paga</span>)}
          </p>
        </Column>

        <Column desktop="3" tablet="3" mobile="3" className="plan-row-actions">
          <Button theme="primary" fluid onClick={() => downloadInvoice(invoice.bar_code)}>
            {!loading ? 'Ver fatura' : (
              <Loading type="bubbles" height={24} width={24} />
            )}
          </Button>
        </Column>
      </Card>
    </StyledInvoiceCard>
  );
}

export default InvoiceCard;
