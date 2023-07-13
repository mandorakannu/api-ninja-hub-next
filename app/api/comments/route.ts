import headers from "@/assets/functions/headers";
import comments from "@jsons/comments.json";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  return new Response(JSON.stringify(comments), {
    headers: headers,
    status: 200,
  });
}
