import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI is not defined in environment variables");
}

// Global client for development hot reload
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

// Named export for POST
export async function POST(request) {
  try {
    const body = await request.json();

    // Validate body
    if (!body.url || !body.shorturl) {
      return new Response(
        JSON.stringify({ success: false, message: "URL and shorturl are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    // Check if short URL exists
    const existing = await collection.findOne({ shorturl: body.shorturl });
    if (existing) {
      return new Response(
        JSON.stringify({ success: false, message: "Short URL already exists" }),
        { status: 409, headers: { "Content-Type": "application/json" } }
      );
    }

    // Insert new short URL
    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
      createdAt: new Date(),
    });

    return new Response(
      JSON.stringify({ success: true, message: "URL Generated Successfully" }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("API Error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
