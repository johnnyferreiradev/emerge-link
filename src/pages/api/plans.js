import verifyJWT from '../../middlewares/authorize';

import connectToDatabase from './connect';

export default async (request, response) => {
  const { method } = request;
  const auth = verifyJWT(request);
  const collectionName = 'plans';

  console.log('Auth value = ', auth);

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

        const result = await db.collection(collectionName).insertOne({
          name,
          price,
          size,
          subscribedAt: new Date(),
        });

        const { _id, subscribedAt } = result;

        response.status(200).json({
          id: _id,
          name,
          price,
          size,
          subscribedAt,
        });
      } catch (e) {
        response.status(400).json({
          error: {
            code: 'plansStore',
            message: 'Erro ao cadastrar um planos',
          },
        });
      }
      break;
    }

    case 'GET': {
      try {
        await db.collection(collectionName).find().toArray((err, result) => {
          if (err) {
            return response.status(500).json({
              error: {
                code: 'plansList',
                message: 'Erro ao listar planos',
              },
            });
          }

          response.status(200).json({ plans: result });
        });
      } catch {
        response.status(400).json({
          error: {
            code: 'plansList',
            message: 'Erro ao listar planos',
          },
        });
      }
      break;
    }

    case 'DESTROY': {
      response.status(200).json({ ok: true });
      // try {
      //   if (auth === true) {
      //     const db = await connectToDatabase(process.env.MONGODB_URI);
      //     db.plans.deleteOne({ id: request.id });
      //     response.status(200).json({ ok: true });
      //   } else {
      //     response = auth;
      //   }
      // } catch {
      //   response.status(400).json({ ok: false })
      // }
      break;
    }

    case 'UPDATE': {
      response.status(200).json({ ok: true });
      // try {
      //   if (auth === true) {
      //     const { name = " ", price, size } = request.body;
      //     const db = await connectToDatabase(process.env.MONGODB_URI);
      //     db.plans.updateOne(({
      //       name,
      //       price,
      //       size,
      //     }));
      //     response.status(200).json({ ok: true });
      //   } else {
      //     response = auth;
      //   }
      // } catch {
      //   response.status(400).json({ ok: false });
      // }
      break;
    }

    default: {
      response.status(405).end(`Method ${method} Not Allowed`);
    }
  }
};
