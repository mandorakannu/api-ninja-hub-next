import comments from "@jsons/comments.json";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  return NextResponse.json({ comments });
}
