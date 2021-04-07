import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import connectToDatabase from './connect';

export default async (request, response) => {
  const { method } = request;

  try {
    const db = await connectToDatabase(process.env.MONGODB_URI);

    switch (method) {
      case 'POST': {
        const { email, password } = request.body;

        const collection = db.collection('user');

        const user = await collection.findOne({ email });

        if (user) {
          const match = await bcrypt.compare(password, user.password);

          if (match) {
            const { _id, name, subscribedAt } = user;
            const token = jwt.sign({ _id }, process.env.SECRET, {
              expiresIn: '30d',
            });

            response.status(200).json({
              id: _id,
              name,
              email,
              subscribedAt,
              token,
            });
          } else {
            response.status(400).json({
              code: 'password',
              message: 'Senha incorreta',
            });
          }
        } else {
          response.status(400).json({
            code: 'email',
            message: 'Email incorreto',
          });
        }

        break;
      }
      default: {
        response.status(405).end(`Method ${method} Not Allowed`);
      }
    }
  } catch (e) {
    return response.status(400).json({
      code: 'login',
      message: 'Erro ao fazer login',
    });
  }
};
