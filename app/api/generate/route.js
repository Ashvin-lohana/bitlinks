import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const { url, shorturl } = await request.json();

    if (!url || !shorturl) {
      return Response.json(
        { success: false, message: "Missing fields" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    const exists = await collection.findOne({ shorturl });

    if (exists) {
      return Response.json({
        success: false,
        message: "Short URL already exists",
      });
    }

    await collection.insertOne({ url, shorturl });

    return Response.json({ success: true });

  } catch (err) {
    console.error("❌ API ERROR:", err);
    return Response.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
