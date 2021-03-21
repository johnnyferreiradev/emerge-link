import { VercelRequest, VercelResponse } from '@vercel/node';
import { MongoClient, Db } from 'mongodb';
import url from 'url';
import verifyJWT from './authorize';

let cachedDb: Db = null;

async function connectToDatabase(uri: string) {
    if (cachedDb) {
        return cachedDb;
    }

    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const dbName = url.parse(uri).pathname.substr(1);

    const db = client.db(dbName);

    cachedDb = db;

    return db;
}

export default async (request: VercelRequest, response: VercelResponse) => {
    const { method } = request;
    const auth = verifyJWT(request, response);

    switch (method) {
        case 'POST':
            if (auth === true) {
                const { name = " ", price, size } = request.body;
                const db = await connectToDatabase(process.env.MONGODB_URI);
                const collection = db.collection('');
                await collection.insertOne({
                    name,
                    price,
                    size,
                    subscribedAt: new Date(),
                })
                response.status(200).json({ ok: true });
            } else {
                response = auth;
            }
            break;


        case 'GET':
            try {
                const db = await connectToDatabase(process.env.MONGODB_URI);
                const plans = db.plans.find({});
                response.status(200).json(plans);

            } catch {
                response.status(400).json({ ok: false });
            }
            break;


        case 'DESTROY':
            try {
                if (auth === true) {
                    const db = await connectToDatabase(process.env.MONGODB_URI);
                    db.plans.deleteOne({ id: request.id });
                    response.status(200).json({ ok: true });
                } else {
                    response = auth;
                }
            } catch {
                response.status(400).json({ ok: false })
            }
            break;


        case 'UPDATE':
            try {
                if (auth === true) {
                    const { name = " ", price, size } = request.body;
                    const db = await connectToDatabase(process.env.MONGODB_URI);
                    db.plans.updateOne(({
                        name,
                        price,
                        size,
                    }));
                    response.status(200).json({ ok: true });
                } else {
                    response = auth;
                }
            } catch {
                response.status(400).json({ ok: false })
            }
            break;


        default:
            response.setHeader('Allow', ['GET', 'POST', 'DESTROY', 'UPDATE']);
            response.status(405).end(`Method ${method} Not Allowed`);
    }
}
