import {
  useState,
  type ChangeEvent,
  type SyntheticEvent,
} from "react";

import HeartPulse from "../assets/icons/health-care-svgrepo-com1.svg";
import CarFront from "../assets/icons/car-travel-plus-add-svgrepo-com1.svg";
import Travel from "../assets/icons/luggage-insurance-svgrepo-com1.svg";
import UsersRound from "../assets/icons/family-insurance-symbol-svgrepo-com1.svg";
import Ship from "../assets/icons/ship-naval-svgrepo-com1.svg";
import HardHat from "../assets/icons/engineering-helmet-cog-svgrepo-com1.svg";
import Ellipsis from "../assets/icons/Ellipse 22.svg";

import Button from "../components/Button";

type InsuranceType =
  | "health"
  | "car"
  | "travel"
  | "life"
  | "marine"
  | "engineering"
  | "more";

type InsuranceOption = {
  id: InsuranceType;
  label: string;
  icon: string;
};

type QuoteFormData = {
  name: string;
  mobile: string;
};

const insuranceTypes: InsuranceOption[] = [
  { id: "health", label: "Health", icon: HeartPulse },
  { id: "car", label: "Car", icon: CarFront },
  { id: "travel", label: "Travel", icon: Travel },
  { id: "life", label: "Life", icon: UsersRound },
  { id: "marine", label: "Marine", icon: Ship },
  { id: "engineering", label: "Engineering", icon: HardHat },
  { id: "more", label: "More", icon: Ellipsis },
];

export default function QuickQuote() {
  const [selectedType, setSelectedType] =
    useState<InsuranceType>("health");

  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    mobile: "",
  });

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log({
      insuranceType: selectedType,
      ...formData,
    });
  };

  const updateField =
    (field: keyof QuoteFormData) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setFormData((current) => ({
        ...current,
        [field]: event.target.value,
      }));
    };

  return (
    <section className="w-full overflow-hidden bg-[#fff3f1] px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-16">
        {/* Insurance type selector */}
        <div className="overflow-x-auto pb-2">
          <div className="flex min-w-max justify-center gap-6 lg:gap-10">
            {insuranceTypes.map(({ id, label, icon }) => {
              const isActive = selectedType === id;

              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setSelectedType(id)}
                  aria-pressed={isActive}
                  className="group flex w-24 flex-col items-center gap-[5px]"
                >
                  <span
                    className={`flex h-24 w-24 items-center justify-center rounded-full
                      transition-colors duration-[800ms] ease-in-out
                      ${
                        isActive
                          ? "bg-orange-800"
                          : "bg-orange-800/10 group-hover:bg-orange-800/20"
                      }`}
                  >
                    {id === "more" ? (
                      <span
                        className={`flex items-center gap-1.5 transition-colors duration-[800ms] ease-in-out ${
                          isActive ? "text-white" : "text-orange-800"
                        }`}
                      >
                        {Array.from({ length: 3 }).map((_, index) => (
                          <span
                            key={index}
                            className="h-3 w-3 rounded-full bg-current"
                          />
                        ))}
                      </span>
                    ) : (
                      <img
                        src={icon}
                        alt=""
                        aria-hidden="true"
                        className={`h-12 w-12 object-contain
                          transition-[filter] duration-[800ms] ease-in-out
                          ${
                            isActive
                              ? "brightness-0 invert"
                              : "brightness-100 invert-0"
                          }`}
                      />
                    )}
                  </span>

                  <span
                    className={`font-['Poppins'] text-lg font-medium capitalize
                      transition-colors duration-[800ms] ease-in-out
                      ${
                        isActive
                          ? "text-orange-800"
                          : "text-neutral-700/50"
                      }`}
                  >
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Quote form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-[1fr_1fr_290px] xl:items-end"
        >
          <label className="flex flex-col gap-4">
            <span className="font-['Poppins'] text-xl font-bold text-black">
              Name
            </span>

            <input
              type="text"
              value={formData.name}
              onChange={updateField("name")}
              placeholder="Enter Your Full Name"
              className="h-16 w-full rounded-[5px] border border-orange-800/20 bg-white px-7 font-['Poppins'] text-lg text-neutral-800 outline-none placeholder:text-neutral-700/50 focus:border-orange-800"
            />
          </label>

          <label className="flex flex-col gap-4">
            <span className="font-['Poppins'] text-xl font-bold text-black">
              Mobile Number
            </span>

            <input
              type="tel"
              value={formData.mobile}
              onChange={updateField("mobile")}
              placeholder="Enter Your Valid Phone Number"
              className="h-16 w-full rounded-[5px] border border-orange-800/20 bg-white px-7 font-['Poppins'] text-lg text-neutral-800 outline-none placeholder:text-neutral-700/50 focus:border-orange-800"
            />
          </label>

          <Button
            type="submit"
            isShowIcon
            className="h-16 w-full justify-between px-7 text-lg xl:w-[290px]"
          >
            Get Price
          </Button>
        </form>
      </div>
    </section>
  );
}