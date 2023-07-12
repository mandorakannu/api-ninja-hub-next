import headers from "@/assets/functions/headers";
import todos from "@jsons/comments.json";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } },
  response: NextResponse
) {
  const { id } = context.params;
  const _id = parseInt(id);
  const todo = todos.filter((todo) => todo.id === _id);
  if (todo.length === 0) {
    return NextResponse.json(
      {
        error: `Only ${todos.length} todos are available. Read Docs: ${process.env.VERCEL_URL}/docs`,
      },
      {
        status: 404,
        statusText: "Todo Not Found",
        headers: { ...headers },
      }
    );
  } else {
    return NextResponse.json(
      { todo: todo[0] },
      { status: 200, headers: { ...headers } }
    );
  }
}
