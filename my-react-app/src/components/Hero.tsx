import { useState } from "react";

import heroImage from "../assets/images/happywoman.jpg";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section
        id="home"
        className="relative flex h-[800px] w-full max-w-[1920px] items-center overflow-hidden"
      >
        {/* ============================= */}
        {/* Hero Background */}
        {/* ============================= */}

        <div className="absolute inset-0 -z-10">
          <img
            src={heroImage}
            alt=""
            className="h-full w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* ============================= */}
        {/* Hero Content */}
        {/* ============================= */}

        <div className="mx-auto w-full px-6 lg:px-20">
          <div className="flex w-full max-w-[1000px] flex-col items-start gap-12">

            {/* ============================= */}
            {/* Text Content */}
            {/* ============================= */}

            <div className="flex w-full flex-col items-start gap-3">

              {/* Small Heading */}
              <div className="flex items-center gap-5">
                <div className="h-[1.29px] w-12 bg-white" />

                <span className="font-['Poppins'] text-xl font-semibold leading-5 text-white">
                  Protecting Value Through Innovation
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="w-full font-['Poppins'] text-4xl font-medium leading-[1.15] text-white sm:text-5xl lg:text-6xl">
                Leading Insurance Solutions for Your Peace of Mind
              </h1>

              {/* Description */}
              <p className="max-w-[879px] font-['Poppins'] text-base font-normal leading-7 text-white sm:text-lg lg:text-xl">
                Purabi General Insurance Company Limited (PGICL), established
                in 1988, is a leading insurer in Bangladesh, providing
                comprehensive asset protection for corporate organizations.
              </p>
            </div>

            {/* ============================= */}
            {/* Action Buttons */}
            {/* ============================= */}

            <div className="flex items-center gap-8 lg:gap-11">

              {/* Discover More */}
              <a
                href="#about"
                className="flex w-60 shrink-0 items-center justify-center rounded-[5px] bg-orange-800 px-10 py-3.5 font-['Poppins'] text-xl font-normal uppercase text-white transition-colors duration-200 hover:bg-orange-900"
              >
                Discover More
              </a>

              {/* ============================= */}
              {/* Watch Video */}
              {/* ============================= */}

              <button
                type="button"
                onClick={() => setShowVideo(true)}
                className="group flex w-52 shrink-0 items-center gap-3"
              >
                {/* Play Circle */}
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[2.58px] border-white transition-transform duration-300 group-hover:scale-105">
                  {/* Play Icon */}
                  <span className="ml-1 h-0 w-0 border-y-[9px] border-l-[13px] border-y-transparent border-l-white" />
                </span>

                {/* Watch Video Text */}
                <span className="whitespace-nowrap font-['Poppins'] text-xl font-bold leading-5 text-white">
                  WATCH VIDEO
                </span>
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* ============================= */}
      {/* Video Modal */}
      {/* ============================= */}

      {showVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-6"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-lg bg-black"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowVideo(false)}
              aria-label="Close video"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-2xl text-white transition-colors hover:bg-white/30"
            >
              ×
            </button>

            {/* Video */}
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