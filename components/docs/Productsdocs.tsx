import Link from "next/link";
import React from "react";
import products from "@jsons/products.json";
import useLimitPosts from "@/hooks/useLimitPosts";
export default function Userdocs() {
  const url = `${process.env.DOMAIN}/api/products/`;
  const product = useLimitPosts({ jsonFile: "products", lastIndex: 1 });
  const manyProducts = useLimitPosts({ jsonFile: "products", lastIndex: 3 });

  return (
    <>
      <h3 className="text-center text-xl font-bold my-2">
        Let&apos;s Start With Products
      </h3>
      <p id="apiusers" className="font-medium my-2">
        The <code>/api/products</code> endpoint provides a list of products with
        randomly generated data. The data includes the user&apos;s id, title,
        price, description, category, image, rating, rate and count. The data is
        generated randomly and is not based on any real product data. The data
        is generated using the
        <Link href={url} className="underline underline-offset-4">
          {" "}
          API Ninja Hub Products{" "}
        </Link>
        package.
      </p>
      <h3 className="text-center text-xl font-bold my-5">Product Object</h3>
      <p>
        The product object is a JSON object that contains the following
        properties:
      </p>
      <ul className="list-disc list-inside text-green-600">
        <li>
          <code>id</code> - The unique identifier for the product.
        </li>
        <li>
          <code>title</code> - The title of the product.
        </li>
        <li>
          <code>price</code> - The price of the product.
        </li>
        <li>
          <code>description</code> - The description of the product.
        </li>
        <li>
          <code>category</code> - The category of the product.
        </li>
        <li>
          <code>image</code> - The image of the product.
        </li>
        <ul className="text-red-600 list-disc list-inside">
          <li>
            <code>rating</code> - The rating of the product.
          </li>
          <li>
            <code>rate</code> - The rate of the product.
          </li>
          <li>
            <code>count</code> - The count of the product.
          </li>
        </ul>
      </ul>

      <pre className="bg-slate-800 text-white overflow-x-scroll lg:overflow-x-hidden p-5 my-4 check scroller">
        <h4 className="flex flex-col justify-start items-start sm:text-center whitespace-pre">
          <span>Result of an API</span>
          <span className="underline underline-offset-4">{`${process.env.DOMAIN}/api/users/1`}</span>
        </h4>
        <br />
        {JSON.stringify(product, null, 2)}
      </pre>
      <pre className="bg-slate-800 text-white overflow-x-scroll lg:overflow-x-hidden p-5 my-4 check scroller">
        <h4 className="flex flex-col justify-start items-start sm:text-center whitespace-pre">
          <span>Result of an API</span>
          <span className="underline underline-offset-4">{url}</span>
        </h4>
        <br />
        {JSON.stringify(manyProducts, null, 2)}
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p className="text-green-600 text-2xl">Upto {products.length} Posts.</p>
      </pre>
    </>
  );
}
