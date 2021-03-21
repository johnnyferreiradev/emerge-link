import { VercelRequest, VercelResponse } from "@vercel/node";
import { MongoClient, Db } from "mongodb";
import url from "url";
import jwt from "jsonwebtoken";

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
    case "GET":
      const { email, name, password } = request.body;

      const db = await connectToDatabase(process.env.MONGODB_URI);

      const auth = db.emergelink.find({ name, password });

      if (auth) {
        const id = auth.id;
        const token = jwt.sign({ id }, process.env.SECRET, {
          expiresIn: 300
        });
        return response.json({ auth: true, token: token });
      }

      return response.status(500).json({ message: "Login inválido!" });

      break;
      response.setHeader("Allow", ["GET"]);
      response.status(405).end(`Method ${method} Not Allowed`);
  }
};
