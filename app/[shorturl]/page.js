export const dynamic = "force-dynamic";
export const revalidate = 0;

import clientPromise from "@/lib/mongodb";
import { redirect } from "next/navigation";

export default async function Page({ params }) {

  const { shorturl } = await params;

  if (!shorturl) {
    redirect("/");
  }

  const client = await clientPromise;

  const db = client.db("bitlinks");

  const collection = db.collection("url");

  const doc = await collection.findOne({
    shorturl: shorturl
  });

  if (doc && doc.url) {


    return redirect(doc.url);

  } else {

    return redirect("/");
  }
}
