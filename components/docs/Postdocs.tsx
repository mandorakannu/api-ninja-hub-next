import Link from "next/link";
import React from "react";
import posts from "@jsons/posts.json";
import useLimitPosts from "@/hooks/useLimitPosts";

export default function Postdocs() {
  const url = `${process.env.DOMAIN}/api/posts/`;
  const post = useLimitPosts({ jsonFile: "posts", lastIndex: 1 });
  const manyPosts = useLimitPosts({ jsonFile: "posts", lastIndex: 3 });

  return (
    <>
      <h3 className="text-center text-xl font-bold my-2">
        Now, let&apos;s see how to use the /api/posts endpoint.
      </h3>
      <p id="#apiposts" className="font-medium my-2">
        The <code>/api/posts</code> endpoint provides a list of posts with
        randomly generated data. The data includes the user&apos;s id, id, title
        and body. The data is generated randomly and is not based on any real
        user data. The data is generated using the
        <Link href={url} className="underline underline-offset-4">
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
          <code>userId</code> - The user&apos;s id.
        </li>
        <li>
          <code>id</code> - The post&apos;s id.
        </li>
        <li>
          <code>title</code> - The post&apos;s title.
        </li>
        <li>
          <code>body</code> - The post&apos;s body.
        </li>
      </ul>

      <pre className="bg-slate-800 text-white overflow-x-scroll lg:overflow-x-hidden p-5 my-4 check scroller">
        <h4 className="flex flex-col justify-start items-start sm:text-center whitespace-pre">
          <span>Result of an API</span>
          <span className="underline underline-offset-4">{url + "1"}</span>
        </h4>
        <br />
        {JSON.stringify(post, null, 2)}
      </pre>
      <pre className="bg-slate-800 text-white overflow-x-scroll lg:overflow-x-hidden p-5 my-4 check scroller">
        <h4 className="flex flex-col justify-start items-start sm:text-center whitespace-pre">
          <span>Result of an API</span>
          <span className="underline underline-offset-4">{url}</span>
        </h4>
        <br />
        {JSON.stringify(manyPosts, null, 2)}
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p className="text-green-600 text-2xl">Upto {posts.length} Posts.</p>
      </pre>
    </>
  );
}
