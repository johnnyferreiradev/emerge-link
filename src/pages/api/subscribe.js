import connectToDatabase from './connect';

export default async (request, response) => {
  const { method } = request;

  const db = await connectToDatabase(process.env.MONGODB_URI);

  switch (method) {
    case 'POST': {
      const { email, name, password } = request.body;

      const collection = db.collection('users');

      await collection.insertOne({
        email,
        name,
        password,
        subscribedAt: new Date(),
      });

      response.status(201).json({ ok: true });
      break;
    }

    default: {
      response.setHeader('Allow', ['POST']);
      response.status(405).end(`Method ${method} Not Allowed`);
    }
  }
};
