import users from "@jsons/users.json";
import { NextRequest, NextResponse } from "next/server";
import headers from "@/assets/functions/headers";
export async function GET(request: NextRequest, response: NextResponse) {
  return NextResponse.json(
    { users },
    {
      headers: {
        ...headers,
      },
    }
  );
}
