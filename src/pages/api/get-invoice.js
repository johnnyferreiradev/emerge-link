import verifyJWT from '../../middlewares/authorize';

import connectToDatabase from './connect';

export default async (request, response) => {
  const { method } = request;
  // const auth = verifyJWT(request);
  const collectionName = 'invoice';

  // if (!auth) {
  //   return response.status(401).json({
  //     code: 'Unauthorized',
  //     message: 'O usuário não tem permissão para realizar esta ação',
  //   });
  // }

  const db = await connectToDatabase(process.env.MONGODB_URI);

  switch (method) {
    case 'POST': {

        const { holder_cpf } = request.body;

        try {
        db.collection(collectionName)
            .find({ holder_cpf })
            .toArray()
            .then((items) => response.status(200).json({ invoice: items }))
            .catch(() => response.status(200).json({ invoice: [] }));
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
