import React from 'react';
import Button from './Button';

import FireInsuranceIcon from "../assets/icons/flame.png";
import HealthInsuranceIcon from "../assets/icons/healthcare.png";
import MotorInsuranceIcon from "../assets/icons/protection.png";
import MarineInsuranceIcon from "../assets/icons/logistics-delivery.png";
import TravelInsuranceIcon from "../assets/icons/travel-insurance.png";
import EngineeringInsuranceIcon from "../assets/icons/engineering.png";
import AviationInsuranceIcon from "../assets/icons/aviation-insurance.png";
import MiscellaneousInsuranceIcon from "../assets/icons/belongings.png";
import NibeditaInsuranceIcon from "../assets/icons/NibeditaInsuranceIcon.png"

interface Category {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
  href?: string;
}

const categoriesData: Category[] = [
  {
    id: 'fire',
    title: 'FIRE INSURANCE',
    description: 'With our Fire insurance policies, you can choose from various coverage options that protect your property, equipment,',
    iconSrc: FireInsuranceIcon,
  },
  {
    id: 'health',
    title: 'HEALTH INSURANCE',
    description: 'With our Health insurance policies, you can choose from various coverage options that protect your property, equipment,',
    iconSrc: HealthInsuranceIcon,
  },
  {
    id: 'motor',
    title: 'MOTOR INSURANCE',
    description: 'Motor Car insurance provides comprehensive protection for your vehicles, covering accidents, theft.',
    iconSrc: MotorInsuranceIcon,
  },
  {
    id: 'marine',
    title: 'MARINE INSURANCE',
    description: 'We offer comprehensive and flexible coverage for your vessels, protecting against physical damage,',
    iconSrc: MarineInsuranceIcon,
  },
  {
    id: 'travel',
    title: 'TRAVEL INSURANCE',
    description: 'Our Travel Insurance (Overseas Mediclaim Insurance) ensures comprehensive coverage for medical emergencies.',
    iconSrc: TravelInsuranceIcon,
  },
  {
    id: 'engineering',
    title: 'ENGINEERING INSURANCE',
    description: 'Engineering insurance refers to the insurance that provides coverage for plant and machinery.',
    iconSrc: EngineeringInsuranceIcon,
  },
  {
    id: 'aviation',
    title: 'AVIATION INSURANCE',
    description: 'Aviation insurance is insurance coverage geared specifically to the operation of aircraft.',
    iconSrc: AviationInsuranceIcon,
  },
  {
    id: 'miscellaneous',
    title: 'MISCELLANEOUS INSURANCE',
    description: 'Accidents shatter people emotionally, physically and financially, protecting against risks.',
    iconSrc: MiscellaneousInsuranceIcon,
  },
  {
    id: 'nibedita',
    title: 'NIBEDITA INSURANCE',
    description: 'A comprehensive insurance scheme for women is a one stop service.',
    iconSrc: NibeditaInsuranceIcon,
  },
];

export const Categories: React.FC = () => {
  return (
    <section className="w-full py-16 flex flex-col items-center gap-12 font-['Poppins']">
      {/* Header Section */}
      <div className="w-full max-w-5xl text-center space-y-4">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black uppercase">
          Categories of Insurance
        </h2>
        <p className="text-sm md:text-base text-black/70 max-w-4xl mx-8 leading-relaxed">
          At SIPLC, we exceed customer expectations by being available both physically and virtually on their preferred channels. As a leading general insurer in Bangladesh, we are committed to continuous development and improvement, ensuring every citizen can access insurance benefits without hindrance
        </p>
      </div>

      {/* Horizontal Scrollable Slider */}
      <div className="w-full overflow-x-auto [scrollbar-width:none] py-8 pr-0 flex gap-6 scroll-smooth">
        <div className="flex-shrink-0 w-10" aria-hidden="true" />
        {categoriesData.map((category) => (
          <div
            key={category.id}
            className="group relative flex-shrink-0 w-72 sm:w-80 bg-[#F9ECE8] rounded-3xl p-6 pb-14 flex flex-col items-center text-center justify-between shadow-sm snap-start"
          >
            <div className="flex flex-col items-center gap-4">
              <img
                src={category.iconSrc}
                alt={category.title}
                className="w-24 h-24 object-contain"
              />
              <h3 className="text-lg font-bold text-black uppercase tracking-wide">
                {category.title}
              </h3>
              <p className="text-xs text-black/70 leading-relaxed">
                {category.description}
              </p>
            </div>

            {/* Floating Overlapping Circular Action Button */}
            <div
              className="absolute bg-white -bottom-7 w-20 h-20 bg-[#B43A1E] rounded-full flex items-center justify-center text-white"
            >
              <a
                href={category.href || '#'}
                className='bg-red-900 w-16 h-16 rounded-full flex items-center justify-center'
                aria-label={`Learn more about ${category.title}`}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5 -rotate-45 scale-125 transition-transform duration-300 group-hover:rotate-0"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </a>
            </div>

          </div>
        ))}
        {/* End Spacer: Allows the last card to scroll */}
        <div className="flex-shrink-0 w-10" aria-hidden="true" />
      </div>

      {/* Main CTA using custom Button component */}
      <div className="mt-4">
        <Button isShowIcon className="px-8 py-3 font-medium text-lg">
          <span>See More</span>
        </Button>
      </div>
    </section>
  );
};

export default Categories;