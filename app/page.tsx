import Codebase from "@/components/Codebase";
import Endpoints from "@/components/Endpoints";
import useLimitPosts from "@/hooks/useLimitPosts";
export default function Home() {
  const user = useLimitPosts({ jsonFile: "users", lastIndex: 1 });
  return (
    <>
      <main className="flex justify-evenly items-center h-[90dvh] gap-9 mx-10">
        <div className="sm:w-1/2 text-center">
          <h1 className="font-medium text-3xl">API NINJA HUB</h1>
          <p className="text-xl">
            Get dummy/fake JSON data to use as placeholder in development or in
            prototype testing.
          </p>
        </div>
        <code className="hidden md:block sm:w-1/2 bg-slate-800 text-white p-5 scale-95 -z-40 rounded">
          <pre>{JSON.stringify(user, undefined, 2)}</pre>
        </code>
      </main>
      <div className="bg-slate-800 text-white flex flex-col justify-center items-center gap-6 p-10  text-center">
        <h1 className="text-3xl px-3 sm:text-5xl">
          Got tired of Lorem ipsum data? 😢
        </h1>
        <p className="text-xl">
          With API NINJA HUB, what you get is different types of REST Endpoints
          filled with JSON data which you can use in developing the frontend
          with your favorite framework and library without worrying about
          writing a backend.
        </p>
        <Codebase />
      </div>
      <Endpoints />
    </>
  );
}
