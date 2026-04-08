import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-lg px-4 py-24 text-center">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
        Page not found
      </h1>
      <p className="mt-4 text-slate-600 dark:text-slate-400">
        That route does not exist in this curriculum site.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block font-medium text-sky-600 hover:underline dark:text-sky-400"
      >
        ← Back to overview
      </Link>
    </main>
  );
}
