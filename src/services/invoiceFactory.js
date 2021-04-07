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
          font-family: Arial, Helvetica, sans-serif;
          background-color: #EBF4F9;
        }

        .container {
          padding: 32px;
          width: 100%;
          height: 842px;
        }

        h1 {
          margin-bottom: 16px;
          font-size: 36px;
          color: #424242;
        }

        h3 {
          margin-bottom: 32px;
          font-size: 18px;
          color: #229DE8;
        }

        .table {
          width: 100%;
          background-color: #ffffff;
          padding: 16px;
          border-radius: 4px;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
          margin-bottom: 128px;
        }

        .table .thead {
          width: 100%;
          display: flex;
          border-bottom: 2px solid rgb(204, 204, 204);
          padding: 8px;
          margin-bottom: 8px;
          background-color: #ffffff;
        }

        .table * {
          background-color: #ffffff;
        }

        .table .thead p {
          width: 100%;
          font-weight: bold;
        }

        .table .tbody {
          width: 100%;
          display: flex;
          padding: 8px;
          margin-bottom: 54px;
          background-color: #ffffff;
        }

        .table .tbody p {
          width: 100%;
        }

        .table .tbody p span {
          color: #229DE8;
          font-weight: bold;
        }

        footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        footer div {
          font-weight: bold;
          font-size: 20px;
        }

        footer div span {
          color: #229DE8;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Emerge link</h1>
        <h3>Fatura referente ao mês de abril de 2021</h3>

        <div class="table">
          <div class="thead">
            <p>Descrição</p>
            <p>Total da fatura</p>
          </div>
          <div class="tbody">
            <p>Pagamento mensal do plano <span>${planName}</span></p>
            <p>R$ <span>${total}</span></p>
          </div>
        </div>

        <footer>
          <div>${code}</div>
          <div>Data de vencimento: <span>${deadline}</span></div>
        </footer>
      </div>
    </body>
    </html>
  `;

  return htmlFile;
};

export default invoiceFactory;
