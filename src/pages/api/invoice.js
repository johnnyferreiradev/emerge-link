import verifyJWT from '../../middlewares/authorize';

import connectToDatabase from './connect';

export default async (request, response) => {
  const { method } = request;
  const auth = verifyJWT(request);
  const collectionName = 'invoice';

  if (!auth) {
    return response.status(401).json({
      code: 'Unauthorized',
      message: 'O usuário não tem permissão para realizar esta ação',
    });
  }

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

    default: {
      response.status(405).end(`Method ${method} Not Allowed`);
    }
  }
};
