import Link from "next/link";
export default function Codebase() {
  const api = "fetch('https://api.mandorakannu.tech/api/users/')";

  const result = ".then(res => res.json()).then(json => console.log(json))";
  return (
    <>
      <div className="flex flex-col justify-center items-start rounded gap-6 bg-white text-black p-4">
        <section className="flex flex-col justify-center items-start">
          <code>{api}</code>
          <code>{result}</code>
        </section>
        <Link
          href="https://api.mandorakannu.tech/api/users/"
          target="_blank"
          className="bg-green-300 text-black px-3 py-2 w-full hover:bg-slate-800 hover:text-white transition-colors delay-75"
        >
          Run Script
        </Link>
      </div>
    </>
  );
}
