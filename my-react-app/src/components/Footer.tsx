import React, { useState } from 'react';
import { Link } from 'react-router';
import chevronDown from "../assets/icons/chevron-down.svg";

import FBIcon from "../assets/icons/SVG-4.svg";
import InstagramIcon from "../assets/icons/SVG-1.svg";
import TwiteerIcon from "../assets/icons/SVG-3.svg";

import BkashIcon from "../assets/images/Frame 51.svg";
import NagadIcon from "../assets/images/Frame 52.svg";
import VisaIcon from "../assets/images/Frame 53.svg";
import DBBLIcon from "../assets/images/Frame 54.svg";
import RocketIcon from "../assets/images/Frame 55.svg";
import UpayIcon from "../assets/images/Frame 56.svg";
import SureCashIcon from "../assets/images/Frame 57.svg";
import MasterCardIcon from "../assets/images/Frame 58.svg";
import TapTapSendIcon from "../assets/images/Frame 59.svg";
import CelFinIcon from "../assets/images/Frame 60.svg";
import CityBandIcon from "../assets/images/Frame 61.svg";
import IslamiBankIcon from "../assets/images/Frame 62.svg";
import BracBankIcon from "../assets/images/Frame 63.svg";
import UCBBankIcon from "../assets/images/Frame 64.svg";
import EBLIcon from "../assets/images/Frame 65.svg";
import Button from './Button';

const Footer: React.FC = () => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Claims', href: '/claims' },
        { name: 'Blogs', href: '/blogs' },
        { name: 'Pay Premium', href: '/pay-premium' },
    ];

    // Payment channels array with imported icons
    const paymentChannels = [
        { id: 1, icon: BkashIcon, alt: 'bKash' },
        { id: 2, icon: NagadIcon, alt: 'Nagad' },
        { id: 3, icon: VisaIcon, alt: 'VISA' },
        { id: 4, icon: DBBLIcon, alt: 'DBBL' },
        { id: 5, icon: RocketIcon, alt: 'Rocket' },
        { id: 6, icon: UpayIcon, alt: 'Upay' },
        { id: 7, icon: SureCashIcon, alt: 'SureCash' },
        { id: 8, icon: MasterCardIcon, alt: 'MasterCard' },
        { id: 9, icon: TapTapSendIcon, alt: 'TapTapSend' },
        { id: 10, icon: CelFinIcon, alt: 'CelFin' },
        { id: 11, icon: CityBandIcon, alt: 'City Bank' },
        { id: 12, icon: IslamiBankIcon, alt: 'Islami Bank' },
        { id: 13, icon: BracBankIcon, alt: 'BRAC Bank' },
        { id: 14, icon: UCBBankIcon, alt: 'UCB Bank' },
        { id: 15, icon: EBLIcon, alt: 'EBL' },
    ];

    // Social media icons array
    const socialIcons = [
        { id: 1, icon: FBIcon, alt: 'Facebook', href: '#' },
        { id: 2, icon: InstagramIcon, alt: 'Instagram', href: '#' },
        { id: 3, icon: TwiteerIcon, alt: 'Twitter', href: '#' },
    ];

    return (
        <footer className="w-full px-4 sm:px-6 md:px-10 lg:px-20 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-6 sm:pb-8 md:pb-10 lg:pb-12 bg-gradient-to-b from-orange-800/0 to-orange-800/10 flex flex-col justify-between items-center min-h-[600px] sm:min-h-[650px] md:min-h-[700px] lg:h-[723px]">
            {/* Top Section */}
            <div className="w-full flex flex-col justify-start items-center gap-4 sm:gap-5">
                <div className="w-full flex flex-col justify-start items-center gap-3 sm:gap-4 md:gap-5">
                    <div className="w-full flex flex-col justify-start items-center">
                        <div className="w-full text-center text-black text-sm sm:text-base font-normal font-['Poppins'] opacity-50">
                            Are you ready?
                        </div>
                        <div className="w-full text-center text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-['Poppins'] leading-tight">
                            Get Your Insurance Now!
                        </div>
                    </div>

                    {/* Buy Now Button */}
                    <Button isShowIcon className='py-3 px-8 sm:py-4 sm:px-10 md:px-12 lg:px-14 text-sm sm:text-base mt-1 md:m-0 lg:m-0'>
                        Buy Now
                    </Button>
                </div>

                {/* Navigation Links - Same for Desktop and Mobile */}
                <div className="w-full flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-5 xl:gap-6 2xl:gap-8">
                    {navItems.map((item) => {
                        const isHovered = hoveredItem === item.name;
                        const showOrange = isHovered;

                        return (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => setHoveredItem(item.name)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <Link
                                    to={item.href}
                                    className={`
                                        relative flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 xl:px-5 xl:py-3.5
                                        font-['Poppins'] text-sm sm:text-base xl:text-lg font-normal capitalize
                                        transition-colors duration-200
                                        ${showOrange ? "text-orange-800" : "text-black"}
                                        after:absolute after:bottom-0 after:left-0 after:right-0
                                        after:h-px after:bg-orange-800 after:transition-all
                                        after:duration-200
                                        ${showOrange
                                            ? "after:scale-x-100 after:opacity-100"
                                            : "after:scale-x-0 after:opacity-0"
                                        }
                                    `}
                                >
                                    <span>{item.name}</span>

                                    {/* Chevron icon for Services and Claims */}
                                    {(item.name === "Services" || item.name === "Claims") && (
                                        <img
                                            src={chevronDown}
                                            alt=""
                                            className={`
                                                h-4 w-4 sm:h-5 sm:w-5 xl:h-6 xl:w-6 object-contain transition-transform duration-200
                                                ${isHovered ? "rotate-180" : "rotate-0"}
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
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Middle Section - Working Hours */}
            <div className="flex flex-col justify-start items-center gap-4 sm:gap-5 md:gap-6 lg:gap-7 mt-6 sm:mt-8 lg:mt-0">
                <div className="flex justify-center items-center">
                    <div className="text-center text-black text-sm sm:text-base md:text-lg lg:text-xl font-normal font-['Poppins'] leading-6 px-2">
                        Sunday to Thursday : 10 AM to 6 PM
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center items-center gap-3 sm:gap-4">
                    {socialIcons.map((social) => (
                        <a
                            key={social.id}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center hover:opacity-70 transition-opacity"
                        >
                            <img
                                src={social.icon}
                                alt={social.alt}
                                className="w-5 h-5 sm:w-6 sm:h-6 object-contain brightness-0 saturate-100"
                            />
                        </a>
                    ))}
                </div>
            </div>

            {/* Payment Channels */}
            <div className="w-full flex flex-col justify-start items-start gap-2 mt-6 sm:mt-8 lg:mt-0">
                <div className="text-neutral-700 text-xs sm:text-sm font-normal font-['Poppins']">
                    Payment Channels
                </div>
                <div className="w-full flex justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 flex-wrap">
                    {paymentChannels.map((channel) => (
                        <img
                            key={channel.id}
                            src={channel.icon}
                            alt={channel.alt}
                            className="h-8 sm:h-10 md:h-12 max-w-16 sm:max-w-20 md:max-w-24 min-w-12 sm:min-w-16 md:min-w-20 lg:min-w-24 object-contain rounded-[5px]"
                        />
                    ))}
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="w-full flex flex-col sm:flex-row justify-start items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 mt-6 sm:mt-8 lg:mt-0">
                <div className="text-center sm:text-left">
                    <span className="text-neutral-700 text-xs sm:text-sm md:text-base font-normal font-['Poppins']">
                        Copyright ©
                    </span>
                    <span className="text-orange-800 text-xs sm:text-sm md:text-base font-bold font-['Poppins']">
                        {" "}360D Soul Limited
                    </span>
                    <span className="text-neutral-700 text-xs sm:text-sm md:text-base font-normal font-['Poppins']">
                        {" "}2025. All rights reserved.
                    </span>
                </div>
                <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                    <div className="relative">
                        <Link
                            to="/terms"
                            className={`
                                relative flex items-center justify-center
                                font-['Poppins'] text-xs sm:text-sm md:text-base font-normal capitalize
                                text-neutral-700 transition-colors duration-200
                                hover:text-orange-800
                                after:absolute after:bottom-0 after:left-0 after:right-0
                                after:h-px after:bg-orange-800 after:transition-all
                                after:duration-200
                                after:scale-x-0 after:opacity-0
                                hover:after:scale-x-100 hover:after:opacity-100
                            `}
                        >
                            Teams &amp; Condition
                        </Link>
                    </div>
                    <div className="relative">
                        <Link
                            to="/privacy"
                            className={`
                                relative flex items-center justify-center
                                font-['Poppins'] text-xs sm:text-sm md:text-base font-normal capitalize
                                text-neutral-700 transition-colors duration-200
                                hover:text-orange-800
                                after:absolute after:bottom-0 after:left-0 after:right-0
                                after:h-px after:bg-orange-800 after:transition-all
                                after:duration-200
                                after:scale-x-0 after:opacity-0
                                hover:after:scale-x-100 hover:after:opacity-100
                            `}
                        >
                            Privacy &amp; Policy
                        </Link>
                    </div>
                    <div className="relative">
                        <Link
                            to="/refund"
                            className={`
                                relative flex items-center justify-center
                                font-['Poppins'] text-xs sm:text-sm md:text-base font-normal capitalize
                                text-neutral-700 transition-colors duration-200
                                hover:text-orange-800
                                after:absolute after:bottom-0 after:left-0 after:right-0
                                after:h-px after:bg-orange-800 after:transition-all
                                after:duration-200
                                after:scale-x-0 after:opacity-0
                                hover:after:scale-x-100 hover:after:opacity-100
                            `}
                        >
                            Refund Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;