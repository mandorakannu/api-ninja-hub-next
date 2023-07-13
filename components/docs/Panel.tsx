import Link from "next/link";

export default function Panel() {
  return (
    <>
      <section className="hidden sm:grid grid-cols-1 sm:grid-cols-3 place-content-evenly place-items-center p-3 gap-5 bg-slate-800 text-white">
        <Link href="#api/users" className="underline underline-offset-3">
          api/users
        </Link>
        <Link href="#api/posts" className="underline underline-offset-3">
          api/posts
        </Link>
        <Link href="#api/comments" className="underline underline-offset-3">
          api/comments
        </Link>
        <Link href="#api/todos" className="underline underline-offset-3">
          api/todos
        </Link>
        <Link href="#api/albums" className="underline underline-offset-3">
          api/albums
        </Link>
        <Link href="#api/photos" className="underline underline-offset-3">
          api/photos
        </Link>
      </section>
    </>
  );
}
