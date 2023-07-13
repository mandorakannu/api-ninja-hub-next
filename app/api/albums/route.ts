import headers from "@/assets/functions/headers";
import albums from "@jsons/albums.json";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  return new Response(JSON.stringify(albums), {
    headers: headers,
    status: 200,
  });
}
