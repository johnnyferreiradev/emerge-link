import fs from 'fs';
import invoiceFactory from 'services/invoiceFactory';
import html_to_pdf from 'html-pdf-node';
import { BASE_URL } from 'settings';
import connectToDatabase from './connect';

export default async (request, response) => {
  const { method } = request;
  const collectionName = 'invoice';

  const db = await connectToDatabase(process.env.MONGODB_URI);

  switch (method) {
    case 'POST': {
      const { bar_code } = request.body;

      try {
        db.collection(collectionName)
          .find({ bar_code })
          .toArray()
          .then((invoices) => {
            if (invoices.length === 0) {
              return response
                .status(404)
                .json({ code: 'findCpfError', message: 'Esta fatura não existe' });
            }

            const { name, price, bar_code, due_date } = invoices[0];

            const fileContent = invoiceFactory(name, price, bar_code, due_date);

            const filepath = './public/uploads/invoice.pdf';

            const options = { format: 'A4' };

            const file = { content: fileContent };

            html_to_pdf.generatePdf(file, options).then((pdfBuffer) => {
              fs.writeFile(filepath, pdfBuffer, (err) => {
                if (err) throw err;

                response.status(200).json({
                  invoice: {
                    code: bar_code,
                    url: `${BASE_URL.replace('api', '')}uploads/invoice.pdf`,
                  },
                });
              });
            });
          })
          .catch(() => response
            .status(404)
            .json({ code: 'findInvoiceError', message: 'Não há faturas pendentes' }));
      } catch (e) {
        return response
          .status(404)
          .json({ code: 'findPlanError', message: 'Plano não encontrado' });
      }
      break;
    }

    default: {
      response.status(405).end(`Method ${method} Not Allowed`);
    }
  }
};
