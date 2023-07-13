import headers from "@/assets/functions/headers";
import todos from "@jsons/todos.json";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  return new Response(JSON.stringify(todos), { headers: headers, status: 200 });
}
