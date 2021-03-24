import { ObjectId } from 'mongodb';
import verifyJWT from '../../../middlewares/authorize';

import connectToDatabase from '../connect';

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
    case 'DELETE': {
      const { id } = request.query;

      try {
        const plan = await db.collection(collectionName).findOne({ _id: ObjectId(id) });

        if (!plan) {
          return response
            .status(404)
            .json({ code: 'removeError', message: 'Plano não encontrado' });
        }
      } catch (e) {
        return response
          .status(404)
          .json({ code: 'removeError', message: 'Plano não encontrado' });
      }

      return db.collection(collectionName)
        .deleteOne({ _id: ObjectId(id) })
        .then(() => {
          response.status(200).json({ message: 'Plan removed successfully' });
        })
        .catch((error) => {
          response.status(500).json({ error });
        });
      break;
    }

    case 'PUT': {
      const { id } = request.query;
      const { name, price, size } = request.body;

      let planData = null;

      try {
        const plan = await db.collection(collectionName).findOne({ _id: ObjectId(id) });

        if (!plan) {
          return response
            .status(404)
            .json({ code: 'updateError', message: 'Plano não encontrado' });
        }

        planData = plan;
      } catch (e) {
        return response.status(404).json({ code: 'updateError', message: 'Plano não encontrado' });
      }

      return db.collection(collectionName)
        .updateOne({ _id: ObjectId(id) }, {
          $set: {
            name: name || planData.name,
            price: price || planData.price,
            size: size || planData.size,
          },
        })
        .then(() => {
          response.status(200).json({ message: 'Plan updated successfully' });
        })
        .catch((error) => {
          response.status(500).json({ code: 'updateError', message: error.toString() });
        });
      break;
    }

    default: {
      response.status(405).end(`Method ${method} Not Allowed`);
    }
  }
};
