import { useState } from "react";
import { Link, Route } from "react-router";

import chevronDown from "../assets/icons/chevron-down.svg";
import logo from "../assets/images/logo.png";
import { Routes } from "../routes/Routes";
import Button from "./Button";

type DropdownItem = {
  name: string;
  href: string;
};

type NavItem = {
  name: string;
  href: string;
  dropdown?: boolean;
  dropdownItems?: DropdownItem[];
};

const navItems: NavItem[] = [
  { name: "Home", href: Routes.home },
  { name: "About Us", href: Routes.about },
  {
    name: "Services",
    href: Routes.services,
    dropdown: true,
    dropdownItems: [
      {
        name: "Health Insurance",
        href: `${Routes.services}/health-insurance`,
      },
      {
        name: "Travel Insurance",
        href: `${Routes.services}/travel-insurance`,
      },
      {
        name: "Accident Insurance",
        href: `${Routes.services}/accident-insurance`,
      },
      {
        name: "Car Insurance",
        href: `${Routes.services}/car-insurance`,
      },
      {
        name: "Motorcycle Insurance",
        href: `${Routes.services}/motorcycle-insurance`,
      },
      {
        name: "Life Insurance",
        href: `${Routes.services}/life-insurance`,
      },
      {
        name: "Fire Insurance",
        href: `${Routes.services}/fire-insurance`,
      },
      {
        name: "Marine Insurance",
        href: `${Routes.services}/marine-insurance`,
      },
      {
        name: "Group Insurance for Employees",
        href: `${Routes.services}/group-insurance`,
      },
    ],
  },
  {
    name: "Claims",
    href: Routes.claims,
    dropdown: true,
    dropdownItems: [
      {
        name: "Claim Process",
        href: `${Routes.claims}/process`,
      },
      {
        name: "Submit a Claim",
        href: `${Routes.claims}/submit`,
      },
      {
        name: "Track Claim",
        href: `${Routes.claims}/track`,
      },
      {
        name: "Claim FAQs",
        href: `${Routes.claims}/faqs`,
      },
    ],
  },
  { name: "Blogs", href: Routes.blogs },
  { name: "Contact Us", href: Routes.contact },
];

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (itemName: string, hasDropdown?: boolean) => {
    if (hasDropdown) {
      setOpenDropdown((current) =>
        current === itemName ? null : itemName,
      );
      return;
    }

    setActiveItem(itemName);
    setOpenDropdown(null);
  };

  return (
    <header className="relative z-50 w-full border-b border-orange-800/50 bg-white">
      <div className="mx-auto flex h-[85px] max-w-[1920px] items-center justify-between px-6 py-3.5 xl:px-20">
        <Link
          to={Routes.home}
          onClick={() => {
            setActiveItem("Home");
            setOpenDropdown(null);
            setHoveredItem(null);
          }}
          className="flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="Purabi General Insurance Co. Ltd."
            className="block h-12 w-12 scale-[1.4] object-contain"
          />

          <div className="flex h-12 w-[189px] flex-col text-orange-800">
            <div className="flex h-1/2 items-end">
              <span className="w-full text-left font-['Poppins'] text-[15px] font-bold leading-none uppercase tracking-[0.1em]">
                PURABI GENERAL
              </span>
            </div>

            <div className="flex h-1/2 items-start">
              <span className="w-full text-left font-['Poppins'] text-[15px] font-bold leading-none uppercase">
                INSURANCE CO. LTD.
              </span>
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          <nav className="flex items-center gap-[5px]">
            {navItems.map((item) => {
              const isDropdownOpen = openDropdown === item.name;
              const isActive = item.dropdown
                ? isDropdownOpen
                : activeItem === item.name;
              const isHovered = hoveredItem === item.name;
              const showOrange = isActive || isHovered;
              const isStyledDropdown =
                item.name === "Services" || item.name === "Claims";

              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link
                    to={item.href}
                    onClick={(event) => {
                      if (item.dropdown) {
                        event.preventDefault();
                      }

                      handleNavClick(item.name, item.dropdown);
                    }}
                    className={`
                      relative flex items-center justify-center gap-2.5 px-5 py-3.5
                      font-['Poppins'] text-lg font-normal capitalize
                      transition-colors duration-200
                      ${showOrange ? "text-orange-800" : "text-black"}
                      after:absolute after:bottom-0 after:left-0 after:right-0
                      after:h-px after:bg-orange-800 after:transition-all
                      after:duration-200
                      ${
                        showOrange
                          ? "after:scale-x-100 after:opacity-100"
                          : "after:scale-x-0 after:opacity-0"
                      }
                    `}
                  >
                    <span>{item.name}</span>

                    {item.dropdown && (
                      <img
                        src={chevronDown}
                        alt=""
                        className={`
                          h-6 w-6 object-contain transition-transform duration-200
                          ${
                            isDropdownOpen || isHovered
                              ? "rotate-180"
                              : "rotate-0"
                          }
                        `}
                        style={
                          showOrange
                            ? {
                                filter:
                                  "invert(35%) sepia(95%) saturate(1700%) hue-rotate(5deg) brightness(85%) contrast(95%)",
                              }
                            : undefined
                        }
                      />
                    )}
                  </Link>

                  {item.dropdown && (
                    <div
                      className={`
                        absolute left-0 top-full z-50 mt-6
                        transition-all duration-200
                        ${
                          isStyledDropdown
                            ? "w-90 overflow-hidden border border-orange-800/10 bg-orange-200/20 shadow-lg backdrop-blur"
                            : "w-56 overflow-hidden border border-orange-800/20 bg-white py-2 shadow-lg"
                        }
                        ${
                          isDropdownOpen
                            ? "visible translate-y-0 opacity-100"
                            : "invisible translate-y-2 opacity-0"
                        }
                      `}
                    >
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          onClick={() => {
                            setOpenDropdown(null);
                            setHoveredItem(null);
                          }}
                          className={
                            isStyledDropdown
                              ? `
                                group flex w-full items-center justify-between gap-4 p-2.5
                                font-['Poppins'] text-base font-normal capitalize
                                text-white transition-colors duration-200
                                hover:bg-orange-100 hover:text-orange-800
                              `
                              : `
                                block px-5 py-3 font-['Poppins'] text-sm text-black
                                transition-colors duration-200 hover:bg-orange-50
                                hover:text-orange-800
                              `
                          }
                        >
                          <span>{dropdownItem.name}</span>

                          {isStyledDropdown && (
                            <ArrowIcon className="h-5 w-5 shrink-0 -rotate-45 transition-transform duration-200 group-hover:rotate-0" />
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <Button
            isShowIcon
            goto={Routes.contact}
            onClick={() => {
              setActiveItem("Contact Us");
              setOpenDropdown(null);
              setHoveredItem(null);
            }}
            className="px-9 py-3 text-lg"
          >
            Get A Quote
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((previous) => !previous)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md border border-black/20 lg:hidden"
        >
          <span
            className={`
              h-0.5 w-5 bg-black transition-transform duration-300
              ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}
            `}
          />
          <span
            className={`
              h-0.5 w-5 bg-black transition-opacity duration-300
              ${mobileMenuOpen ? "opacity-0" : "opacity-100"}
            `}
          />
          <span
            className={`
              h-0.5 w-5 bg-black transition-transform duration-300
              ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}
            `}
          />
        </button>
      </div>

      <div
        className={`
          overflow-hidden border-t border-orange-800/20 bg-white
          transition-all duration-300 lg:hidden
          ${mobileMenuOpen ? "max-h-[1000px]" : "max-h-0"}
        `}
      >
        <nav className="flex flex-col px-6 py-4">
          {navItems.map((item) => {
            const isDropdownOpen = openDropdown === item.name;
            const isActive = item.dropdown
              ? isDropdownOpen
              : activeItem === item.name;
            const isStyledDropdown =
              item.name === "Services" || item.name === "Claims";

            return (
              <div key={item.name}>
                <Link
                  to={item.href}
                  onClick={(event) => {
                    if (item.dropdown) {
                      event.preventDefault();

                      setOpenDropdown((current) =>
                        current === item.name ? null : item.name,
                      );
                      return;
                    }

                    setActiveItem(item.name);
                    setOpenDropdown(null);
                    setMobileMenuOpen(false);
                  }}
                  className={`
                    relative flex items-center justify-between border-b px-2 py-4
                    font-['Poppins'] text-base font-normal transition-colors duration-200
                    ${isActive ? "text-orange-800" : "text-black"}
                    hover:text-orange-800
                    after:absolute after:bottom-0 after:left-0 after:right-0
                    after:h-px after:bg-orange-800 after:transition-opacity
                    after:duration-200
                    ${isActive ? "after:opacity-100" : "after:opacity-0"}
                    hover:after:opacity-100
                  `}
                >
                  <span>{item.name}</span>

                  {item.dropdown && (
                    <img
                      src={chevronDown}
                      alt=""
                      className={`
                        h-5 w-5 object-contain transition-transform duration-200
                        ${isDropdownOpen ? "rotate-180" : "rotate-0"}
                      `}
                      style={
                        isDropdownOpen
                          ? {
                              filter:
                                "invert(35%) sepia(95%) saturate(1700%) hue-rotate(5deg) brightness(85%) contrast(95%)",
                            }
                          : undefined
                      }
                    />
                  )}
                </Link>

                {item.dropdown && (
                  <div
                    className={`
                      overflow-hidden transition-all duration-300
                      ${
                        isDropdownOpen
                          ? "max-h-[600px] opacity-100"
                          : "max-h-0 opacity-0"
                      }
                    `}
                  >
                    <div
                      className={
                        isStyledDropdown
                          ? "overflow-hidden bg-orange-800 py-2"
                          : "border-b border-orange-800/20 py-2 pl-4"
                      }
                    >
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          onClick={() => {
                            setOpenDropdown(null);
                            setMobileMenuOpen(false);
                          }}
                          className={
                            isStyledDropdown
                              ? `
                                group flex items-center justify-between gap-4 px-6 py-3
                                font-['Poppins'] text-sm text-white
                                transition-colors duration-200
                                hover:bg-orange-100 hover:text-orange-800
                              `
                              : `
                                block border-l-2 border-transparent px-4 py-3
                                font-['Poppins'] text-sm text-black
                                transition-colors duration-200 hover:border-orange-800
                                hover:bg-orange-50 hover:text-orange-800
                              `
                          }
                        >
                          <span>{dropdownItem.name}</span>

                          {isStyledDropdown && (
                            <ArrowIcon className="h-5 w-5 shrink-0 -rotate-45 transition-transform duration-200 group-hover:rotate-0" />
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          <Button
            isShowIcon
            goto={Routes.contact}
            onClick={() => {
              setMobileMenuOpen(false);
              setOpenDropdown(null);
              setActiveItem("Contact Us");
            }}
            className="mt-5 px-8 py-3.5 text-base"
          >
            Get A Quote
          </ Button>
        </nav>
      </div>
    </header>
  );
}