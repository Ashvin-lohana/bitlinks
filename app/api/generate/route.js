import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI is not defined in environment variables");
}

// prevent multiple connections in dev
let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

// Named export for POST method
export async function POST(request) {
  try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    // Check if short URL exists
    const existing = await collection.findOne({ shorturl: body.shorturl });
    if (existing) {
      return new Response(
        JSON.stringify({ success: false, error: true, message: "URL already exists!" }),
        { status: 409, headers: { "Content-Type": "application/json" } }
      );
    }

    // Insert new short URL
    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
    });

    return new Response(
      JSON.stringify({ success: true, error: false, message: "URL Generated Successfully" }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("API Error:", error);
    return new Response(
      JSON.stringify({ success: false, error: true, message: "Something went wrong!" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
