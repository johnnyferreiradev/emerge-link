import verifyJWT from '../../middlewares/authorize';

import connectToDatabase from './connect';

export default async (request, response) => {
  const { method } = request;
  const auth = verifyJWT(request);

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
      response.status(200).json({ ok: true });
      // if (auth === true) {
      //   const { name = '', price, size } = request.body;
      //   const db = await connectToDatabase(process.env.MONGODB_URI);
      //   const collection = db.collection('');
      //   await collection.insertOne({
      //     name,
      //     price,
      //     size,
      //     subscribedAt: new Date(),
      //   });
      //   response.status(200).json({ ok: true });
      // } else {
      //   response = auth;
      // }
      break;
    }

    case 'GET': {
      response.status(200).json({ ok: true });
      // try {
      //   const plans = db.plans.find({});
      //   response.status(200).json(plans);

      // } catch {
      //   response.status(400).json({ ok: false });
      // }
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
