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
        <div className="self-stretch h-[723px] px-20 pt-24 pb-12 bg-gradient-to-b from-orange-800/0 to-orange-800/10 inline-flex flex-col justify-between items-center">
            {/* Top Section */}
            <div className="self-stretch flex flex-col justify-start items-start gap-5">
                <div className="self-stretch flex flex-col justify-start items-center gap-5">
                    <div className="self-stretch flex flex-col justify-start items-start">
                        <div className="self-stretch opacity-50 text-center justify-start text-black text-base font-normal font-['Poppins']">
                            Are you ready?
                        </div>
                        <div className="self-stretch text-center justify-start text-black text-5xl font-bold font-['Poppins']">
                            Get Your Insurance Now!
                        </div>
                    </div>

                    {/* Buy Now Button */}
                    <Button isShowIcon className='py-4 px-14'>
                        Buy Now
                    </Button>
                </div>

                {/* Navigation Links - Exact Navbar Style */}
                <div className="self-stretch inline-flex justify-center items-center gap-5">
                    <div className="flex justify-start items-center gap-[5px]">
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
                                            relative flex items-center justify-center gap-2.5 px-5 py-3.5
                                            font-['Poppins'] text-lg font-normal capitalize
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
                                                    h-6 w-6 object-contain transition-transform duration-200
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
            </div>

            {/* Middle Section - Working Hours */}
            <div className="flex flex-col justify-start items-center gap-7">
                <div className="inline-flex justify-start items-center gap-2">
                    <div className="justify-center text-black text-xl font-normal font-['Poppins'] leading-6">
                        Sunday to Thursday : 10 AM to 6 PM
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center items-center gap-4">
                    {socialIcons.map((social) => (
                        <a
                            key={social.id}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity"
                        >
                            <img
                                src={social.icon}
                                alt={social.alt}
                                className="w-6 h-6 object-contain brightness-0 saturate-100"
                            />
                        </a>
                    ))}
                </div>
            </div>

            {/* Payment Channels */}
            <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                <div className="justify-start text-neutral-700 text-xs font-normal font-['Poppins']">
                    Payment Channels
                </div>
                <div className="self-stretch inline-flex justify-center items-start gap-5 flex-wrap content-start">
                    {paymentChannels.map((channel) => (
                        <img
                            key={channel.id}
                            src={channel.icon}
                            alt={channel.alt}
                            className="flex-1 h-12 max-w-24 min-w-24 relative rounded-[5px]"
                        />
                    ))}
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="self-stretch inline-flex justify-start items-start gap-12">
                <div className="justify-start">
                    <span className="text-neutral-700 text-base font-normal font-['Poppins']">
                        Copyright ©
                    </span>
                    <span className="text-orange-800 text-base font-bold font-['Poppins']">
                        {" "}360D Soul Limited
                    </span>
                    <span className="text-neutral-700 text-base font-normal font-['Poppins']">
                        {" "}2025. All rights reserved.
                    </span>
                </div>
                <div className="flex-1 flex justify-end items-center gap-12">
                    <div className="relative">
                        <Link
                            to="/terms"
                            className={`
                                relative flex items-center justify-center
                                font-['Poppins'] text-base font-normal capitalize
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
                                font-['Poppins'] text-base font-normal capitalize
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
                                font-['Poppins'] text-base font-normal capitalize
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
        </div>
    );
};

export default Footer;