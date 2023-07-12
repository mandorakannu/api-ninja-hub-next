import headers from "@/assets/functions/headers";
import posts from "@jsons/posts.json";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } },
  response: NextResponse
) {
  const { id } = context.params;
  const _id = parseInt(id);
  const post = posts.filter((post) => post.id === _id);
  if (post.length === 0) {
    return NextResponse.json(
      {
        error: `Only ${posts.length} posts are available. Read Docs: ${process.env.VERCEL_URL}/docs`,
      },
      {
        status: 404,
        statusText: "post Not Found",
        headers: { ...headers },
      }
    );
  } else {
    return NextResponse.json(
      { post: post[0] },
      { status: 200, headers: { ...headers } }
    );
  }
}
