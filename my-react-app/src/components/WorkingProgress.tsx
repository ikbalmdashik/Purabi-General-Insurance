import React from 'react';

// Import icons
import Process1 from "../assets/images/process-1.svg";
import Process2 from "../assets/images/process-2.svg";
import Process3 from "../assets/images/process-3.svg";
import ProgessBG from "../assets/images/ProgressBG.jpeg"

interface ProgressStep {
    id: string;
    number: string;
    title: string;
    description: string;
    image: string;
}

const WorkingProgress: React.FC = () => {
    const progressData: ProgressStep[] = [
        {
            id: "step-1",
            number: "01",
            title: "Get A Quotetation",
            description: "Answer a couple of questions, we'll provide accurate live quotes.",
            image: Process1
        },
        {
            id: "step-2",
            number: "02",
            title: "Complete The Application",
            description: "Answer a couple of questions, we'll provide accurate live quotes.",
            image: Process2
        },
        {
            id: "step-3",
            number: "03",
            title: "Get your Insurance",
            description: "Answer a couple of questions, we'll provide accurate live quotes.",
            image: Process3
        }
    ];

    return (
        <div
            className={`w-full px-4 py-10 md:p-12 lg:p-20 flex flex-col justify-start items-center bg-cover bg-center bg-no-repeat`}
            style={{ backgroundImage: `url(${ProgessBG})` }}
        >
            <div className="w-full max-w-8xl p-6 md:p-12 lg:p-16 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-white/50 backdrop-blur flex flex-col justify-start items-center gap-12">
                {/* Header Section */}
                <div className="w-full max-w-3xl flex flex-col justify-start items-center gap-4 text-center">
                    <div className="inline-flex justify-center items-center gap-2">
                        <div className="w-10 h-px bg-white" />
                        <span className="text-white text-xs sm:text-sm md:text-base font-semibold font-['Poppins'] tracking-wider uppercase">
                            INSURANCE SIMPLIFIED
                        </span>
                        <div className="w-10 h-px bg-white" />
                    </div>

                    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold font-['Poppins'] uppercase">
                        Our Working Process
                    </h2>

                    <p className="text-white/90 text-sm md:text-base font-normal font-['Poppins'] leading-relaxed">
                        Our process makes insurance simple and stress-free, from personalized consultations and tailored solutions to swift activation and ongoing support. We ensure reliable protection and hassle-free claims every step of the way.
                    </p>
                </div>

                {/* Cards Section */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 lg:gap-12 justify-items-center">
                    {progressData.map((step) => (
                        <div key={step.id} className="w-full max-w-xs flex flex-col items-center gap-6">
                            {/* Graphic Container with Overlay Arrow */}
                            <div className="relative flex flex-col items-center">
                                {/* Outer White Ring Circle */}
                                <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full border-2 border-white p-3 flex items-center justify-center">
                                    {/* Inner Image */}
                                    <img
                                        className="w-full h-full rounded-full object-cover"
                                        src={step.image}
                                        alt={`Process step ${step.number}`}
                                    />

                                    {/* CSS Down Arrow */}
                                    <div
                                        className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 
                                            border-l-[10px] border-l-transparent 
                                            border-r-[10px] border-r-transparent 
                                            border-t-[12px] border-t-white z-10"
                                    />
                                </div>

                                {/* Step Number Badge - Increase mt-6 to mt-8 or mt-10 to push it lower */}
                                <div className="mt-6 w-16 h-16 bg-[#C13A1C] rounded-full shadow-md flex items-center justify-center z-20">
                                    <span className="text-white text-xl font-bold font-['Poppins']">
                                        {step.number}
                                    </span>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col justify-start items-center gap-2 text-center">
                                <h3 className="text-white text-xl font-semibold font-['Poppins']">
                                    {step.title}
                                </h3>
                                <p className="text-white/80 text-sm md:text-base font-normal font-['Poppins'] leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WorkingProgress;