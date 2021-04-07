const invoiceFactory = (planName, total, code, deadline) => {
  const htmlFile = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Fatura - Emerge link</title>
      <style>
        * {
          margin: 0px;
          padding: 0px;
          box-sizing: border-box;
        }

        .container {
          margin: 32px;
          padding: 32px;
          border: 1px solid black;
          width: 100%;
          max-width: 595px;
          height: 842px;
        }

        h1 {
          margin-bottom: 16px;
          font-size: 36px;
        }

        h3 {
          margin-bottom: 32px;
          font-size: 24px;
        }

        .table {
          width: 100%;
        }

        .table .thead {
          width: 100%;
          display: flex;
          border-bottom: 1px solid black;
          padding: 8px;
          margin-bottom: 8px;
        }

        .table .thead p {
          width: 100%;
        }

        .table .tbody {
          width: 100%;
          display: flex;
          padding: 8px;
          margin-bottom: 54px;
        }

        .table .tbody p {
          width: 100%;
        }

        footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Fatura do mês de Abril de 2021</h1>
        <h3>Emerge link</h3>

        <div class="table">
          <div class="thead">
            <p>Descrição</p>
            <p>Total da fatura</p>
          </div>
          <div class="tbody">
            <p>Pagamento mensal do plano ${planName}</p>
            <p>R$ ${total}</p>
          </div>
        </div>

        <footer>
          <div>${code}</div>
          <div>Data de vencimento: ${deadline}</div>
        </footer>
      </div>
    </body>
    </html>
  `;

  return htmlFile;
};

export default invoiceFactory;
