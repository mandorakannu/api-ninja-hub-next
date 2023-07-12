import headers from "@/assets/functions/headers";
import photos from "@jsons/photos.json";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  return NextResponse.json(
    { photos },
    { status: 200, headers: { ...headers } }
  );
}
