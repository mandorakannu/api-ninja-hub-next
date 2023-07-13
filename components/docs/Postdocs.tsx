import Link from "next/link";
import React from "react";

export default function Postdocs() {
  const post = {
    userId: 1,
    id: 1,
    title: "Post 1",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  };
  return (
    <>
      <h3 className="text-center text-xl font-bold my-2">
        Now, let's see how to use the /api/posts endpoint.
      </h3>
      <p id="#api/posts" className="font-medium my-2">
        The <code>/api/posts</code> endpoint provides a list of posts with
        randomly generated data. The data includes the user's id, id, title and
        body. The data is generated randomly and is not based on any real user
        data. The data is generated using the
        <Link
          href="https://www.api.mandorakannu.tech/posts/"
          className="underline underline-offset-4"
        >
          {" "}
          API Ninja Hub Posts{" "}
        </Link>
        package.
      </p>
      <h3 className="text-center text-xl font-bold my-5">Post Object</h3>
      <p>
        The post object is a JSON object that contains the following properties:
      </p>
      <ul className="list-disc list-inside text-green-600">
        <li>
          <code>userId</code> - The user's id.
        </li>
        <li>
          <code>id</code> - The post's id.
        </li>
        <li>
          <code>title</code> - The post's title.
        </li>
        <li>
          <code>body</code> - The post's body.
        </li>
      </ul>

      <pre className="bg-slate-800 text-white overflow-x-scroll lg:overflow-x-hidden p-5 my-4 check scroller">
        <h4 className="flex flex-col justify-start items-start sm:text-center whitespace-pre">
          <span>Result of an API</span>
          <span className="underline underline-offset-4">{`${process.env.DOMAIN}/api/posts/1`}</span>
        </h4>
        <br />
        {JSON.stringify(post, null, 2)}
      </pre>
    </>
  );
}
