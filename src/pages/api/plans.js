import verifyJWT from '../../middlewares/authorize';

import connectToDatabase from './connect';

export default async (request, response) => {
  const { method } = request;
  const auth = verifyJWT(request);
  const collectionName = 'plans';

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
        const { name, price, size } = request.body;

        if(isNaN(price)){
          throw 'O preço do produto precisa ser um número.';
        }

        if(isNaN(size)){
          throw 'A largura de banda do produto precisa ser um número.';
        }

        const result = await db.collection(collectionName).insertOne({
          name,
          price,
          size,
          createdAt: new Date(),
        });

        const { _id, createdAt } = result;

        response.status(200).json({
          id: _id,
          name,
          price,
          size,
          createdAt,
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
        db.collection(collectionName).find()
          .toArray()
          .then((items) => response.status(200).json({ plans: items }))
          .catch(() => response.status(200).json({ plans: [] }));
      } catch (e) {
        return response
          .status(404)
          .json({ code: 'findPlanError', message: 'Plano não encontrado' });
      }
      break;

      // try {
      //   await db.collection(collectionName).find().toArray((err, result) => {
      //     if (err) {
      //       return response.status(500).json({
      //         error: {
      //           code: 'plansList',
      //           message: err,
      //         },
      //       });
      //     }

      //     response.status(200).json({ plans: result });
      //   });
      // } catch {
      //   response.status(500).json({
      //     error: {
      //       code: 'plansList',
      //       message: 'Erro ao listar planos',
      //     },
      //   });
      // }
      // break;
    }

    default: {
      response.status(405).end(`Method ${method} Not Allowed`);
    }
  }
};
