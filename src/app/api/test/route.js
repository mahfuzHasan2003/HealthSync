import { getCollection } from '@/lib/db';

export async function POST(req) {
  try {
    const { name } = await req.json();
    console.log(name);
    const collection = await getCollection('test');

    const result = await collection.insertOne({ name });
    return new Response(
      JSON.stringify({ data: result, message: 'Data inserted successfully' }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to insert data into database' }),
      {
        status: 500,
      }
    );
  }
}
