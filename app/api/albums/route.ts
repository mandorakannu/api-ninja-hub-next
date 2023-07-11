import albums from "@jsons/albums.json";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  return NextResponse.json({ albums });
}
