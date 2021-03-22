import jwt from 'jsonwebtoken';

import connectToDatabase from './connect';

export default async (request, response) => {
  const { method } = request;

  const db = await connectToDatabase(process.env.MONGODB_URI);

  switch (method) {
    case 'GET': {
      const { email, password } = request.body;

      const user = db.emergelink.find({ email, password });

      if (user) {
        const { id } = user;
        const token = jwt.sign({ id }, process.env.SECRET, {
          expiresIn: 300,
        });

        return response.status(200).json({ user, token });
      }

      response.status(400).json({ message: 'Login inválido!' });
      break;
    }
    default: {
      response.setHeader('Allow', ['GET']);
      response.status(405).end(`Method ${method} Not Allowed`);
    }
  }

  return null;
};
