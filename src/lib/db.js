import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.DATABASE_URL;

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export async function connectDb() {
  const client = await clientPromise;
  const db = client.db('HealthSync');
  return { db, client };
}

export async function getCollection(collectionName) {
  const { db } = await connectDb();
  return db.collection(collectionName);
}
