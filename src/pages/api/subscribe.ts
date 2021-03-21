import { VercelRequest, VercelResponse } from "@vercel/node";
import { MongoClient, Db } from "mongodb";
import url from "url";

let cachedDb: Db = null;

async function connectToDatabase(uri: string) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const dbName = url.parse(uri).pathname.substr(1);

  const db = client.db(dbName);

  cachedDb = db;

  return db;
}

export default async (request: VercelRequest, response: VercelResponse) => {
  const { method } = request;

  switch (method) {
    case "POST":
      const { email, name, password } = request.body;

      const db = await connectToDatabase(process.env.MONGODB_URI);

      const collection = db.collection("subscribers");

      await collection.insertOne({
        email,
        name,
        password,
        subscribedAt: new Date()
      });

      response.status(201).json({ ok: true });
      break;
      default:

      response.setHeader('Allow', ['POST']);
      response.status(405).end(`Method ${method} Not Allowed`);
  }
};
