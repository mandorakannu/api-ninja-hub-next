import headers from "@/assets/functions/headers";
import todos from "@jsons/todos.json";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  return NextResponse.json({ todos }, { status: 200, headers: { ...headers } });
}
