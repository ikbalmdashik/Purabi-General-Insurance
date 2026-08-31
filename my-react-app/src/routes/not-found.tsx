// import Button from "../components/Button";
// import { Routes } from "../routes/Routes";

// export default function NotFound() {
//   return (
//     <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-6 text-white">
//       {/* Background glow */}
//       <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600/10 blur-[120px]" />

//       {/* Grid background */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.06]"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
//           backgroundSize: "50px 50px",
//         }}
//       />

//       {/* Content */}
//       <div className="relative z-10 text-center">
//         {/* 404 */}
//         <div className="relative inline-block">
//           <h1 className="text-[140px] font-black leading-none tracking-[-0.08em] text-white sm:text-[200px]">
//             404
//           </h1>

//           {/* Orange line */}
//           <div className="absolute left-1/2 top-1/2 h-2 w-28 -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] rounded-full bg-orange-600 sm:w-40" />
//         </div>

//         {/* Text */}
//         <h2 className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl">
//           Page Not Found
//         </h2>

//         <p className="mx-auto mt-4 max-w-md text-base leading-7 text-zinc-400 sm:text-lg">
//           The page you're looking for doesn't exist or may have been moved.
//         </p>

//         {/* Button */}
//         <Button goto={Routes.home} isShowIcon className="mx-auto w-1/2 p-2 mt-8">Back to Home</Button>
//       </div>
//     </main>
//   );
// }



import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import Button from '../components/Button';
import { Routes } from '../routes/Routes';

export default function NotFound() {
  const navigate = useNavigate();
  const [emojiIndex, setEmojiIndex] = useState(0);
  const emojis = ['🔍', '😅', '🔄', '🏠'];

  // Simple rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setEmojiIndex((prev) => (prev + 1) % emojis.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100/30 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center border border-orange-200/50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-100/20 rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-orange-100/20 rounded-full" />
        
        {/* 404 Icon - Rotating */}
        <div className="text-7xl mb-4 transition-all duration-500 inline-block">
          {emojis[emojiIndex]}
        </div>
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3 font-['Poppins'] relative">
          Page Not Found
        </h1>
        
        <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full mx-auto mb-6" />
        
        {/* Message */}
        <p className="text-gray-600 text-lg mb-8 font-['Poppins']">
          Oops! The page you're looking for doesn't exist or has been moved.
          <br />
          <span className="text-sm text-gray-500">
            Let's get you back on track!
          </span>
        </p>
        
        {/* 404 Number Display */}
        <div className="flex justify-center gap-2 mb-8">
          <span className="text-6xl font-bold text-orange-100">4</span>
          <span className="text-6xl font-bold text-orange-300">0</span>
          <span className="text-6xl font-bold text-orange-100">4</span>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Button 
            onClick={() => navigate(Routes.home)}
            isShowIcon
            className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-['Poppins'] rounded-lg transition-colors"
          >
            Back to Home
          </Button>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-200 pt-6 space-y-3 relative">
          <p className="text-gray-600 font-['Poppins']">Need help? Reach out to us:</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 font-['Poppins']">
            <a 
              href="mailto:info@360dsoul.com" 
              className="text-orange-600 hover:text-orange-700 transition-colors"
            >
              📧 info@360dsoul.com
            </a>
            <a 
              href="tel:+8801234567890" 
              className="text-orange-600 hover:text-orange-700 transition-colors"
            >
              📞 +880 1234 567890
            </a>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
          <span className="text-gray-400">Quick links:</span>
          <a 
            href={Routes.home} 
            className="text-orange-600 hover:text-orange-700 transition-colors underline-offset-2 hover:underline"
          >
            Home
          </a>
          <span className="text-gray-300">•</span>
          <a 
            href="/services" 
            className="text-orange-600 hover:text-orange-700 transition-colors underline-offset-2 hover:underline"
          >
            Services
          </a>
          <span className="text-gray-300">•</span>
          <a 
            href="/about" 
            className="text-orange-600 hover:text-orange-700 transition-colors underline-offset-2 hover:underline"
          >
            About
          </a>
          <span className="text-gray-300">•</span>
          <a 
            href="/contact" 
            className="text-orange-600 hover:text-orange-700 transition-colors underline-offset-2 hover:underline"
          >
            Contact
          </a>
        </div>
        
        {/* Footer Text */}
        <p className="text-xs text-gray-400 mt-6 font-['Poppins']">
          ⚡ The page might have been moved or deleted
        </p>
      </div>
    </div>
  );
}