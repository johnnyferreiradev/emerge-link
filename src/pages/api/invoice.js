import connectToDatabase from './connect';

export default async (request, response) => {
  const { method } = request;
  const collectionName = 'invoice';

  const db = await connectToDatabase(process.env.MONGODB_URI);

  switch (method) {
    case 'POST': {
      try {
        const {
          holder,
          holder_cpf,
          price,
          due_date,
        } = request.body;

        const paid = false;

        const bar_code = parseInt(Math.random() * 100000000000);

        const plan = await db.collection("plans").find()
          .toArray();

        const { name } = plan[0];

        const result = await db.collection(collectionName).insertOne({
          holder,
          holder_cpf,
          price,
          due_date,
          bar_code,
          name,
          paid
        });

        const { _id } = result;

        response.status(200).json({
          id: _id,
          holder,
          holder_cpf,
          price,
          due_date,
          bar_code,
          name,
          paid
        });
      } catch (err) {
        response.status(500).json({
          error: {
            code: 'plansStore',
            message: err,
          },
        });
      }
      break;
    }

    case 'GET': {
      try {
        const { cpf } = request.query;

        db.collection(collectionName).find({ holder_cpf: cpf })
          .toArray()
          .then((items) => response.status(200).json({ invoices: items }))
          .catch(() => response.status(200).json({ invoices: [] }));
      } catch (e) {
        return response
          .status(404)
          .json({ code: 'findInvoiceError', message: 'Não existem faturas' });
      }
      break;
    }

    default: {
      response.status(405).end(`Method ${method} Not Allowed`);
    }
  }
};
