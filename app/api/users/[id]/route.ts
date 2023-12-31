import headers from "@/assets/functions/headers";
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
        error: `Only ${users.length} users are available. Read Docs: ${process.env.DOMAIN}/docs`,
      },
      {
        status: 404,
        statusText: "User Not Found",
        headers: { ...headers },
      }
    );
  } else {
    return NextResponse.json(
      { user: user[0] },
      { status: 200, headers: { ...headers } }
    );
  }
}
