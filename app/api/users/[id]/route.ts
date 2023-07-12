import users from "@jsons/users.json";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } },
  response: NextResponse
) {
  const { id } = context.params;
  const _id = parseInt(id);
  const user = users.filter((user) => user.id === _id);
  if (user.length === 0) {
    return NextResponse.json(
      {
        error: `Only 10 users are available. Read Docs: ${process.env.VERCEL_URL}/docs`,
      },
      {
        status: 404,
        statusText: "User Not Found",
      }
    );
  } else {
    return NextResponse.json({ user }, { status: 200 });
  }
}
