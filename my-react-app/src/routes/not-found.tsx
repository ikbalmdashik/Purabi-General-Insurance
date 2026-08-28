import Button from "../components/Button";
import { Routes } from "../routes/Routes";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-6 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600/10 blur-[120px]" />

      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* 404 */}
        <div className="relative inline-block">
          <h1 className="text-[140px] font-black leading-none tracking-[-0.08em] text-white sm:text-[200px]">
            404
          </h1>

          {/* Orange line */}
          <div className="absolute left-1/2 top-1/2 h-2 w-28 -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] rounded-full bg-orange-600 sm:w-40" />
        </div>

        {/* Text */}
        <h2 className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl">
          Page Not Found
        </h2>

        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-zinc-400 sm:text-lg">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        {/* Button */}
        <Button text="Back to Home" href={Routes.home} isShowIcon className="mx-auto w-1/2 p-2 mt-8" />
      </div>
    </main>
  );
}