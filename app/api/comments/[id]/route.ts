import headers from "@/assets/functions/headers";
import comments from "@jsons/comments.json";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } },
  response: NextResponse
) {
  const { id } = context.params;
  const _id = parseInt(id);
  const comment = comments.filter((comment) => comment.id === _id);
  if (comment.length === 0) {
    return NextResponse.json(
      {
        error: `Only ${comments.length} comments are available. Read Docs: ${process.env.DOMAIN}/docs`,
      },
      {
        status: 404,
        statusText: "Comment Not Found",
        headers: { ...headers },
      }
    );
  } else {
    return NextResponse.json(
      { comment: comment[0] },
      { status: 200, headers: { ...headers } }
    );
  }
}
