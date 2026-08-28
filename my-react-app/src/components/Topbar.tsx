import locationPin from "../assets/icons/location-pin_svgrepo.com.svg";
import emailIcon from "../assets/icons/email-14_svgrepo.com.svg";
import phoneIcon from "../assets/icons/phone-call_svgrepo.com.svg";

import svg1 from "../assets/icons/SVG-1.svg";
import svg2 from "../assets/icons/SVG-2.svg";
import svg3 from "../assets/icons/SVG-3.svg";
import svg4 from "../assets/icons/SVG-4.svg";

export default function TopBar() {
  return (
    <div className="w-full bg-orange-800">
      <div className="mx-auto flex min-h-10 max-w-[1600px] items-center justify-center px-2 py-2 sm:px-6 lg:justify-between lg:px-10 xl:px-6">
        {/* Left Section */}
        <div className="flex min-w-0 flex-1 flex-wrap items-center justify-center gap-x-3 gap-y-2 lg:justify-start">
          {/* Location */}
          <div className="flex min-w-0 items-center gap-2.5">
            <img
              src={locationPin}
              alt="Location"
              className="h-3.5 w-3.5 shrink-0"
            />

            <span className="text-center text-xs font-medium capitalize leading-4 text-white lg:text-left">
              Sandhani Life Tower (2nd Floor), 34 Bangla Motor, Dhaka - 1000.
            </span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2.5">
            <img
              src={emailIcon}
              alt="Email"
              className="h-3.5 w-3.5 shrink-0"
            />

            <span className="text-xs font-medium lowercase text-white">
              purabiinsurance@gmail.com
            </span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2.5">
            <img
              src={phoneIcon}
              alt="Phone"
              className="h-3.5 w-3.5 shrink-0"
            />

            <span className="whitespace-nowrap text-xs font-medium uppercase text-white">
              +880 1714-044146
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden shrink-0 items-center gap-5 lg:flex">
          {/* Portals */}
          <div className="flex items-center">
            <a
              href="#"
              className="px-3.5 py-[5px] text-base font-normal uppercase text-white transition-opacity hover:opacity-80"
            >
              Client Portal
            </a>

            <a
              href="#"
              className="px-3.5 py-[5px] text-base font-normal uppercase text-white transition-opacity hover:opacity-80"
            >
              Agent Portal
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5">
            <SocialIcon src={svg1} alt="Facebook" />
            <SocialIcon src={svg2} alt="Instagram" />
            <SocialIcon src={svg3} alt="LinkedIn" />
            <SocialIcon src={svg4} alt="Social media" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialIcon({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <a
      href="#"
      aria-label={alt}
      className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-colors hover:bg-white/30"
    >
      <img src={src} alt={alt} className="h-3.5 w-3.5" />
    </a>
  );
}