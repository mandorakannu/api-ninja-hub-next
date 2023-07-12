import headers from "@/assets/functions/headers";
import albums from "@jsons/albums.json";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } },
  response: NextResponse
) {
  const { id } = context.params;
  const _id = parseInt(id);
  const album = albums.filter((album) => album.id === _id);
  if (album.length === 0) {
    return NextResponse.json(
      {
        error: `Only ${albums.length} Albums are available. Read Docs: ${process.env.DOMAIN}/docs`,
      },
      {
        status: 404,
        statusText: "Albums Not Found",
        headers: { ...headers },
      }
    );
  } else {
    return NextResponse.json(
      { album: album[0] },
      { status: 200, headers: { ...headers } }
    );
  }
}
