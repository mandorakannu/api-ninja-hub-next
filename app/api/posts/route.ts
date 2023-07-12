import headers from "@/assets/functions/headers";
import posts from "@jsons/posts.json";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  return NextResponse.json({ posts }, { status: 200, headers: { ...headers } });
}
