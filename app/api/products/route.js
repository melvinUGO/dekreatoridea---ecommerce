import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(request) {
  await mongooseConnect();
  const products = await Product.find({});
  return NextResponse.json(products);
}
