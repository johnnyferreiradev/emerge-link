import connectToDatabase from './connect';

export default async (request, response) => {
  const { method } = request;

  try {
    const db = await connectToDatabase(process.env.MONGODB_URI);

    switch (method) {
      case 'POST': {
        const { email, name, password } = request.body;

        const collection = db.collection('user');

        const emailAlreadyExists = await collection.findOne({ email });

        if (emailAlreadyExists) {
          return response.status(400).json({
            code: 'email',
            message: 'Este e-mail já está sendo usado',
          });
        }

        const insertResponse = await collection.insertOne({
          email,
          name,
          password,
          subscribedAt: new Date(),
        });

        if (insertResponse) {
          const { _id, subscribedAt } = insertResponse;

          return response.status(201).json({
            id: _id,
            email,
            name,
            subscribedAt,
          });
        }

        return response.status(400).json({
          error: {
            code: 'register',
            message: 'Erro ao cadastrar usuário',
          },
        });
        break;
      }
      default: {
        response.status(405).json({ code: 'method', message: `Method ${method} Not Allowed` });
      }
    }
  } catch (e) {
    return response.status(400).json({
      error: {
        code: 'register',
        message: 'Erro ao cadastrar usuário',
        error: e,
      },
    });
  }

  return response.status(400).json({
    error: {
      code: 'register',
      message: 'Erro ao cadastrar usuário',
    },
  });
};
