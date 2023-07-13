import Link from "next/link";
import React from "react";

export default function Userdocs() {
  const user = {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    email: "johndoe@example.com",
    address: {
      street: "123 Main Street",
      suite: "Apt 4",
      city: "New York",
      zipcode: "10001",
      geo: {
        lat: "40.7128",
        lng: "-74.0060",
      },
    },
    phone: "555-123-4567",
    website: "johndoe.com",
    company: {
      name: "ABC Company",
      catchPhrase: "Providing innovative solutions",
      bs: "Technology",
    },
  };
  return (
    <>
      <h3 className="text-center text-xl font-bold my-2">Let's Start With Users</h3>
      <p id="#api/users" className="font-medium my-2">
        The <code>/api/users</code> endpoint provides a list of users with
        randomly generated data. The data includes the user's name, email,
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
    </>
  );
}
