import Link from "next/link";
import React from "react";
import photos from "@jsons/photos.json";
import useLimitPosts from "@/hooks/useLimitPosts";
export default function Userdocs() {
  const url = `${process.env.DOMAIN}/api/photos/`;
  const photo = useLimitPosts({ jsonFile: "photos", lastIndex: 1 });
  const manyPhotos = useLimitPosts({ jsonFile: "photos", lastIndex: 3 });

  return (
    <>
      <h3 className="text-center text-xl font-bold my-2">
        Now, let&apos;s see how to use the <code>/api/photos</code> endpoint.
      </h3>
      <p id="apiphotos" className="font-medium my-2">
        The <code>/api/photos</code> endpoint provides a list of photos with
        randomly generated data. The data includes the photo&apos;s albumId, id,
        title, url, thumbnailUrl. The data is generated randomly and is not
        based on any real todo data. The data is generated using the
        <Link href={url} className="underline underline-offset-4">
          {" "}
          API Ninja Hub Photos{" "}
        </Link>
        package.
      </p>
      <h3 className="text-center text-xl font-bold my-5">Photo Object</h3>
      <p>
        The todo object is a JSON object that contains the following properties:
      </p>
      <ul className="list-disc list-inside text-green-600">
        <li>
          <code>albumId</code> - The id of the album the photo belongs to.
        </li>
        <li>
          <code>id</code> - The id of the photo.
        </li>
        <li>
          <code>title</code> - The title of the photo.
        </li>
        <li>
          <code>url</code> - The url of the photo.
        </li>
        <li>
          <code>thumbnailUrl</code> - The thumbnail url of the photo.
        </li>
      </ul>

      <pre className="bg-slate-800 text-white overflow-x-scroll lg:overflow-x-hidden p-5 my-4 check scroller">
        <h4 className="flex flex-col justify-start items-start sm:text-center whitespace-pre">
          <span>Result of an API</span>
          <span className="underline underline-offset-4">{url + "1"}</span>
        </h4>
        <br />
        {JSON.stringify(photo, null, 2)}
      </pre>
      <pre className="bg-slate-800 text-white overflow-x-scroll lg:overflow-x-hidden p-5 my-4 check scroller">
        <h4 className="flex flex-col justify-start items-start sm:text-center whitespace-pre">
          <span>Result of an API</span>
          <span className="underline underline-offset-4">{url}</span>
        </h4>
        <br />
        {JSON.stringify(manyPhotos, null, 2)}
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p className="text-green-600 text-2xl">Upto {photos.length} Photos.</p>
      </pre>
    </>
  );
}
