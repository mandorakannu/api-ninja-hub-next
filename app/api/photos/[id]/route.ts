import photos from "@jsons/photos.json";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } },
  response: NextResponse
) {
  const { id } = context.params;
  const _id = parseInt(id);
  const photo = photos.filter((photo) => photo.id === _id);
  if (photo.length === 0) {
    return NextResponse.json(
      {
        error: `Only 100 photos are available. Read Docs: ${process.env.VERCEL_URL}/docs`,
      },
      {
        status: 404,
        statusText: "Photos Not Found",
      }
    );
  } else {
    return NextResponse.json({ photo: photo[0] }, { status: 200 });
  }
}
