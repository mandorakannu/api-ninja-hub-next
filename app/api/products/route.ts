import headers from "@/assets/functions/headers";
import products from "@jsons/products.json";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  return new Response(JSON.stringify(products), { headers: headers, status: 200 });
}
