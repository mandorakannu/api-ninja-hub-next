import Codebase from "@/components/Codebase";
import Endpoints from "@/components/Endpoints";
import Footer from "@/components/Footer";

export default function Home() {
  const usersData = {
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
      <main className="flex justify-evenly items-center h-[90dvh] gap-9 mx-10">
        <div className="sm:w-1/2 text-center">
          <h1 className="font-medium text-3xl">API NINJA HUB</h1>
          <p className="text-xl">
            Get dummy/fake JSON data to use as placeholder in development or in
            prototype testing.
          </p>
        </div>
        <textarea
          className="hidden md:block sm:w-1/2 bg-slate-800 text-white px-5 py-10"
          rows={12}
          value={JSON.stringify(usersData, undefined, 2)}
          disabled
        ></textarea>
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
