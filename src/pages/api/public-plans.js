import connectToDatabase from './connect';

export default async (request, response) => {
  const { method } = request;
  const collectionName = 'plans';

  const db = await connectToDatabase(process.env.MONGODB_URI);

  switch (method) {
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
    }

    default: {
      response.status(405).end(`Method ${method} Not Allowed`);
    }
  }
};
