import Link from "next/link";
import { Fira_Code } from "next/font/google";
const fira_code = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
export default function Codebase() {
  return (
    <>
      <div className="flex flex-col justify-center items-start rounded gap-6 bg-white text-black p-4">
        <section className="flex flex-col flex-wrap justify-start items-start">
          <code className={`${fira_code.className} text-xs lg:text-base`}>
            fetch&#40;&#39;https://api.mandorakannu.rocks/api/users/&#39;&#41;
          </code>
          <code className={`${fira_code.className} text-xs lg:text-base`}>
            .then&#40;res ={">"} res.json&#40;&#41;&#41;.then&#40;json ={">"}{" "}
            console.log&#40;json&#41;
          </code>
        </section>
        <Link
          href="https://api.mandorakannu.rocks/api/users/"
          target="_blank"
          className="bg-green-300 text-black px-3 py-2 w-full hover:bg-slate-800 hover:text-white transition-colors delay-75"
        >
          Run Script
        </Link>
      </div>
    </>
  );
}
