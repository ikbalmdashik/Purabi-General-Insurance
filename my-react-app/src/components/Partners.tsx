// components/Partners.tsx
import { useEffect, useRef } from 'react';

import WaltonLogo from "../assets/images/walton.jpg";
import InceptaLogo from "../assets/images/incepta.jpg";
import AcmeLogo from "../assets/images/acme.jpg";
import DoreenLogo from "../assets/images/dp.jpg";
import HcareLogo from "../assets/images/hpl.jpg";
import GeneralLogo from "../assets/images/general.jpg";
import PalamalLogo from "../assets/images/palmal.jpg";


interface Partner {
    id: number;
    name: string;
    logo: string;
}

const partners: Partner[] = [
    { id: 1, name: 'WALTON', logo: WaltonLogo },
    { id: 2, name: 'Incepta', logo: InceptaLogo },
    { id: 3, name: 'ACME', logo: AcmeLogo },
    { id: 4, name: 'DOREEN', logo: DoreenLogo },
    { id: 5, name: 'Healthcare Pharmaceuticals', logo: HcareLogo },
    { id: 6, name: 'General Pharmaceuticals', logo: GeneralLogo },
    { id: 7, name: 'Palmal Group', logo: PalamalLogo },
];

const Partners = () => {
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        if (!marquee) return;

        let animationId: number;
        let position = 0;
        const speed = 1.5;

        const animate = () => {
            position -= speed;

            const firstChild = marquee.firstChild as HTMLElement;
            if (firstChild) {
                const scrollWidth = marquee.scrollWidth / 2;
                if (Math.abs(position) >= scrollWidth) {
                    position = 0;
                }
            }

            marquee.style.transform = `translateX(${position}px)`;
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationId);
        };
    }, []);

    const duplicatedPartners = [...partners, ...partners];

    return (
        <section className="w-full py-20 overflow-hidden">
            <div className="container mx-auto px-4 md:px-32">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 tracking-wide">
                    OUR GENUINE TRUSTED PARTNERS &amp; CLIENTS
                </h2>

                <div className="relative overflow-hidden border border-gray-500">
                    <div
                        ref={marqueeRef}
                        className="flex"
                        style={{ width: 'max-content' }}
                    >
                        {duplicatedPartners.map((partner, index) => (
                            <div
                                key={`${partner.id}-${index}`}
                                className="flex-shrink-0 w-28 h-24 md:w-36 md:h-28 lg:w-40 lg:h-32 border-r border-gray-500 flex items-center justify-center bg-white hover:border-gray-400 transition-colors duration-300"
                            >
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="w-full h-full object-contain p-3 md:p-4"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        const parent = target.parentElement;
                                        if (parent) {
                                            const fallback = document.createElement('span');
                                            fallback.textContent = partner.name;
                                            fallback.className = 'text-xs font-medium text-gray-500 text-center px-2';
                                            parent.appendChild(fallback);
                                        }
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;