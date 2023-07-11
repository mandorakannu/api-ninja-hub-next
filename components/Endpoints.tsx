import endpoints from "@jsons/endpoints.json";
import Link from "next/link";
export default function Endpoints() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 py-10 text-center">
        <h3 className="text-3xl sm:text-5xl">Endpoints</h3>
        <p className="text-xl">
          API Ninja Hub comes with different sets of common Endpoints:
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-10">
        {endpoints.map((points) => {
          return (
            <div
              className="flex justify-center items-center gap-5"
              key={points._id}
            >
              <Link
                className="underline underline-offset-2 text-blue-500"
                href={points.path}
                target="_blank"
              >
                {points.endpoint}
              </Link>
              <span>{points.amount} ( Fake data )</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
