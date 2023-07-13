import Link from "next/link";
import React from "react";
import users from "@jsons/users.json";
import useLimitPosts from "@/hooks/useLimitPosts";
export default function Userdocs() {
  const url = `${process.env.DOMAIN}/api/users/`;
  const user = useLimitPosts({ jsonFile: "users", lastIndex: 1 });
  const manyUsers = useLimitPosts({ jsonFile: "users", lastIndex: 3 });

  return (
    <>
      <h3 className="text-center text-xl font-bold my-2">
        Let&apos;s Start With Users
      </h3>
      <p id="apiusers" className="font-medium my-2">
        The <code>/api/users</code> endpoint provides a list of users with
        randomly generated data. The data includes the user&apos;s name, email,
        address, phone number, and website. The data is generated randomly and
        is not based on any real user data. The data is generated using the
        <Link
          href="https://www.api.mandorakannu.tech/users/"
          className="underline underline-offset-4"
        >
          {" "}
          API Ninja Hub Users{" "}
        </Link>
        package.
      </p>
      <h3 className="text-center text-xl font-bold my-5">User Object</h3>
      <p>
        The user object is a JSON object that contains the following properties:
      </p>
      <ul className="list-disc list-inside text-green-600">
        <li>
          <code>id</code> - The unique identifier for the user.
        </li>
        <li>
          <code>name</code> - The name of the user.
        </li>
        <li>
          <code>username</code> - The username of the user.
        </li>
        <li>
          <code>email</code> - The email address of the user.
        </li>
        <li className="text-red-600">
          <code>address</code> - The address of the user.
          <ul className="list-disc list-inside text-red-600">
            <li>
              <code>street</code> - The street address of the user.
              <ul className="list-disc list-inside">
                <li>
                  <code>suite</code> - The suite number of the user.
                </li>
                <li>
                  <code>city</code> - The city of the user.
                </li>
                <li>
                  <code>zipcode</code> - The zip code of the user.
                </li>
                <li className="text-violet-600">
                  <code>geo</code> - The geo location of the user.
                  <ul className="list-disc list-inside text-violet-600">
                    <li>
                      <code>lat</code> - The latitude of the user.
                    </li>
                    <li>
                      <code>lng</code> - The longitude of the user.
                    </li>
                  </ul>
                </li>
                <li className="text-green-600">
                  <code>phone</code>- The phone number of the user.
                </li>
                <li className="text-green-600">
                  <code>website</code>- The website of the user.
                </li>
                <li className="text-green-600">
                  <code>company</code>- The company of the user.
                </li>
                <li className="text-green-600">
                  <code>catchPhrase</code>- The catch phrase of the user.
                </li>
                <li className="text-green-600">
                  <code>bs</code>- The bs of the user.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <pre className="bg-slate-800 text-white overflow-x-scroll lg:overflow-x-hidden p-5 my-4 check scroller">
        <h4 className="flex flex-col justify-start items-start sm:text-center whitespace-pre">
          <span>Result of an API</span>
          <span className="underline underline-offset-4">{`${process.env.DOMAIN}/api/users/1`}</span>
        </h4>
        <br />
        {JSON.stringify(user, null, 2)}
      </pre>
      <pre className="bg-slate-800 text-white overflow-x-scroll lg:overflow-x-hidden p-5 my-4 check scroller">
        <h4 className="flex flex-col justify-start items-start sm:text-center whitespace-pre">
          <span>Result of an API</span>
          <span className="underline underline-offset-4">{url}</span>
        </h4>
        <br />
        {JSON.stringify(manyUsers, null, 2)}
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p className="text-green-600 text-2xl">Upto {users.length} Posts.</p>
      </pre>
    </>
  );
}
