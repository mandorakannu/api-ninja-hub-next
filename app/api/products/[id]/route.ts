import headers from "@/assets/functions/headers";
import products from "@jsons/products.json";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } },
  response: NextResponse
) {
  const { id } = context.params;
  const _id = parseInt(id);
  const product = products.filter((product) => product.id === _id);
  if (product.length === 0) {
    return NextResponse.json(
      {
        error: `Only ${products.length} products are available. Read Docs: ${process.env.DOMAIN}/docs`,
      },
      {
        status: 404,
        statusText: "product Not Found",
        headers: { ...headers },
      }
    );
  } else {
    return NextResponse.json(
      { product: product[0] },
      { status: 200, headers: { ...headers } }
    );
  }
}
