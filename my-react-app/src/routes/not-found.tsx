import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-['Poppins'] text-lg font-medium text-orange-800">
        404 Error
      </p>

      <h1 className="mt-2 font-['Poppins'] text-4xl font-bold text-black">
        Page not found
      </h1>

      <p className="mt-4 max-w-md text-gray-600">
        The page you are looking for does not exist or may have moved.
      </p>

      <Link
        to="/"
        className="mt-6 rounded-md bg-orange-800 px-6 py-3 font-medium text-white transition-colors hover:bg-orange-700"
      >
        Back to Home
      </Link>
    </section>
  );
}