import { useState } from "react";

import Button from "../components/Button";
import heroImage from "../assets/images/happywoman.jpg";
import heroOverlay from "../assets/images/hero-overlay.png";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <section
        id="home"
        className="relative mx-auto flex h-[800px] w-full max-w-[1920px] items-center overflow-hidden px-6 sm:px-10 lg:px-20"
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Main image */}
          <img
            src={heroImage}
            alt=""
            className="h-full w-full object-cover"
          />

          {/* Dark left → light right */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/55 to-black/10" />

          {/* Fine repeated pixel/noise overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen"
            style={{
              backgroundImage: `url(${heroOverlay})`,
              backgroundRepeat: "repeat",
              backgroundSize: "380px 380px",
            }}
          />
        </div>

        <div className="w-full max-w-[1000px]">
          <div className="flex flex-col items-start gap-12">
            <div className="flex w-full flex-col items-start gap-3">
              <div className="flex w-full flex-col items-start gap-3">
                <div className="flex items-center gap-5">
                  <span className="h-[1.29px] w-12 bg-white" />
                  <span className="font-['Poppins'] text-xl font-semibold leading-5 text-white">
                    Protecting Value Through Innovation
                  </span>
                </div>

                <h1 className="w-full font-['Poppins'] text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
                  Leading Insurance Solutions for Your Peace of Mind
                </h1>
              </div>

              <p className="max-w-[879px] font-['Poppins'] text-lg font-normal leading-relaxed text-white lg:text-xl">
                Purabi General Insurance Company Limited (PGICL), established
                in 1988, is a leading insurer in Bangladesh, providing
                comprehensive asset protection for corporate organizations.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-8 lg:gap-11">
              <Button
                onClick={scrollToAbout}
                className="px-10 py-3.5 text-xl"
              >
                Discover More
              </Button>

              <button
                type="button"
                onClick={() => setShowVideo(true)}
                className="group flex w-52 items-center gap-3"
                aria-label="Watch video"
              >
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[2.58px] border-white transition-transform duration-300 group-hover:scale-105">
                  <span className="ml-1 h-0 w-0 border-y-[9px] border-l-[13px] border-y-transparent border-l-white" />
                </span>

                <span className="whitespace-nowrap font-['Poppins'] text-xl font-bold leading-5 text-white">
                  WATCH VIDEO
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {showVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-6"
          onClick={() => setShowVideo(false)}
          role="presentation"
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-lg bg-black"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Purabi General Insurance video"
          >
            <button
              type="button"
              onClick={() => setShowVideo(false)}
              aria-label="Close video"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-2xl text-white transition-colors hover:bg-white/30"
            >
              ×
            </button>

            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="Purabi General Insurance video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}