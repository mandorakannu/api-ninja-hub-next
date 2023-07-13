import Userdocs from "@/components/docs/Userdocs";
import { Montserrat } from "next/font/google";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function Docs() {
  return (
    <>
      <div className={`${font.className} mx-auto py-10 px-3`}>
        <h1 className="text-4xl text-center">Docs</h1>
        <section className="my-5">
          <h2 className="text-xl font-semibold underline-offset-4 underline">
            Introduction
          </h2>
          <p className="text-lg my-3 font-medium">
            {/* create a paragraph and explain the importance of fake data as REST API */}
            API Ninja Hub is a REST API that provides fake data for testing and
            prototyping. It is a free to use service that provides a REST API to
            generate random and mock data without any restrictions. It provides
            endpoints for generating random user data, random data for posts,
            todos, comments, and much more.
          </p>
          <Userdocs />
        </section>
      </div>
    </>
  );
}
