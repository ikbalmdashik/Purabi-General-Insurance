// import Button from "./Button";

// import Image3 from "../assets/images/image3.png"

// export default function Tracking() {
//     return (
//         <section className="w-full min-h-[500px] flex justify-center items-center p-8 md:p-16">
//             <div className="max-w-8xl w-full flex flex-col md:flex-row items-center justify-center gap-5">
//                 {/* Left Side: Image with Decorative Arch Background */}
//                 <div className="relative flex-shrink-0 flex justify-center items-center w-full md:w-[25%] aspect-square">

//                     {/* Decorative Circles */}
//                     <div className="absolute top-0 left-6 w-[65%] aspect-square">

//                         {/* Outer Circle */}
//                         <div className="absolute inset-0 rounded-full bg-orange-800/5" />

//                         {/* Middle Circle */}
//                         <div className="absolute top-1/2 left-1/2 w-[76.92%] aspect-square rounded-full bg-orange-800/10 -translate-x-1/2 -translate-y-1/2" />

//                         {/* Inner Circle */}
//                         <div className="absolute top-1/2 left-1/2 w-[53.85%] aspect-square rounded-full bg-orange-800/20 -translate-x-1/2 -translate-y-1/2" />

//                     </div>

//                     {/* Family Image */}
//                     <img
//                         src={Image3}
//                         alt="Happy family tracking insurance"
//                         className="relative z-10 w-full h-auto object-contain drop-shadow-sm"
//                     />

//                 </div>

//                 {/* Right Side: Card Container */}
//                 <div className="flex-1 min-w-0 bg-[#FAF1ED] border border-[#EFE3DD] rounded-[24px] p-8 md:p-12 flex flex-col justify-between space-y-8">
//                     {/* Content Heading */}
//                     <div className="flex flex-col space-y-3">
//                         <span className="text-neutral-700 font-bold text-xs md:text-sm tracking-wider uppercase">
//                             BE HAPPY TO GET INSURANCE
//                         </span>

//                         <h2 className="text-[#383230] text-3xl md:text-5xl font-extrabold leading-tight">
//                             Start Tracking Your Claims
//                         </h2>

//                         <p className="text-neutral-600 text-sm md:text-base font-normal leading-relaxed pt-1">
//                             Enjoy peace of mind with hassle-free insurance. Track your claims
//                             effortlessly and stay informed every step of the way.
//                         </p>
//                     </div>

//                     {/* Action Row */}
//                     <div className="flex flex-warp items-center gap-4 md:gap-6 pt-2">
//                         <Button
//                             isShowIcon
//                             className="px-6 py-3.5"
//                         >
//                             Claim Coverage
//                         </Button>

//                         <div className="flex items-center gap-3">
//                             <span className="w-8 h-[1px] bg-[#C89B8C]" />

//                             <span className="text-[#383230] text-xs font-semibold tracking-wider">
//                                 OR
//                             </span>

//                             <span className="w-8 h-[1px] bg-[#C89B8C]" />
//                         </div>

//                         <div className="text-xs md:text-sm">
//                             <span className="text-neutral-400 font-normal">
//                                 Mail Us Anytime:{" "}
//                             </span>

//                             <a
//                                 href="mailto:purabiinsurance@gmail.com"
//                                 className="text-neutral-800 font-bold hover:underline"
//                             >
//                                 purabiinsurance@gmail.com
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }





import Button from "./Button";

import Image3 from "../assets/images/image3.png";

export default function Tracking() {
    return (
        <section className="w-full min-h-[500px] flex justify-center items-center p-8 md:p-16">
            <div className="max-w-8xl w-full flex flex-col md:flex-row items-center justify-center gap-5">

                {/* Left Side: Image with Decorative Arch Background */}
                <div className="relative flex-shrink-0 flex justify-center items-center w-full sm:w-[70%] md:w-[25%] aspect-square">

                    {/* Decorative Circles */}
                    <div className="absolute top-0 left-6 w-[65%] aspect-square">

                        {/* Outer Circle */}
                        <div className="absolute inset-0 rounded-full bg-orange-800/5" />

                        {/* Middle Circle */}
                        <div className="absolute top-1/2 left-1/2 w-[76.92%] aspect-square rounded-full bg-orange-800/10 -translate-x-1/2 -translate-y-1/2" />

                        {/* Inner Circle */}
                        <div className="absolute top-1/2 left-1/2 w-[53.85%] aspect-square rounded-full bg-orange-800/20 -translate-x-1/2 -translate-y-1/2" />

                    </div>

                    {/* Family Image */}
                    <img
                        src={Image3}
                        alt="Happy family tracking insurance"
                        className="relative z-10 w-full h-auto object-contain drop-shadow-sm"
                    />

                </div>

                {/* Right Side: Card Container */}
                <div className="w-full md:flex-1 md:min-w-0 bg-[#FAF1ED] border border-[#EFE3DD] rounded-[24px] p-8 md:p-12 flex flex-col justify-between space-y-8">

                    {/* Content Heading */}
                    <div className="flex flex-col space-y-3 text-center md:text-left">

                        <span className="text-neutral-700 font-bold text-xs md:text-sm tracking-wider uppercase">
                            BE HAPPY TO GET INSURANCE
                        </span>

                        <h2 className="text-[#383230] text-3xl md:text-5xl font-extrabold leading-tight">
                            Start Tracking Your Claims
                        </h2>

                        <p className="text-neutral-600 text-sm md:text-base font-normal leading-relaxed pt-1 max-w-2xl mx-auto md:mx-0">
                            Enjoy peace of mind with hassle-free insurance. Track your claims
                            effortlessly and stay informed every step of the way.
                        </p>

                    </div>

                    {/* Action Row */}
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 pt-2">

                        <Button
                            isShowIcon
                            className="px-6 py-3.5"
                        >
                            Claim Coverage
                        </Button>

                        <div className="flex items-center gap-3">

                            <span className="w-8 h-[1px] bg-[#C89B8C]" />

                            <span className="text-[#383230] text-xs font-semibold tracking-wider">
                                OR
                            </span>

                            <span className="w-8 h-[1px] bg-[#C89B8C]" />

                        </div>

                        <div className="text-xs md:text-sm text-center md:text-left">
                            <span className="text-neutral-400 font-normal">
                                Mail Us Anytime:{" "}
                            </span>

                            <a
                                href="mailto:purabiinsurance@gmail.com"
                                className="text-neutral-800 font-bold hover:underline break-all"
                            >
                                purabiinsurance@gmail.com
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}