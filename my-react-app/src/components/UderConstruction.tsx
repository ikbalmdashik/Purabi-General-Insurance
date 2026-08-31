import { useNavigate } from 'react-router';
import Button from '../components/Button';
import { Routes } from '../routes/Routes';

interface UnderConstructionProps {
  pageTitle: string;
  pageDescription?: string;
  progress?: number;
  contactEmail?: string;
  contactPhone?: string;
  showHomeButton?: boolean;
  customMessage?: string;
}

export default function UnderConstruction({ 
  pageTitle,
  pageDescription = `We're currently building our ${pageTitle} page to share our story, mission, and the amazing team behind`,
  progress = 65,
  contactEmail = "info@360dsoul.com",
  contactPhone = "+880 1234 567890",
  showHomeButton = true,
  customMessage = "We'll be ready soon!"
}: UnderConstructionProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-137px)] bg-gradient-to-br from-orange-50 via-white to-orange-100/30 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center border border-orange-200/50">
        {/* Construction Icon */}
        <div className="text-6xl mb-4">🚧</div>
        
        {/* Badge */}
        <div className="inline-block bg-orange-50 px-4 py-1.5 rounded-full border border-orange-200 text-orange-600 text-sm font-medium mb-4">
          Under Construction
        </div>
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 font-['Poppins']">
          {pageTitle}
        </h1>
        
        <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full mx-auto mb-6" />
        
        {/* Message */}
        <p className="text-gray-600 text-lg mb-8 font-['Poppins']">
          {pageDescription} <span className="font-semibold text-orange-600">360D Soul Limited</span>.
        </p>
        
        {/* Progress Bar */}
        <div className="bg-gray-200 rounded-full h-2.5 mb-8 max-w-xs mx-auto overflow-hidden">
          <div 
            className="bg-gradient-to-r from-orange-400 to-orange-600 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-gray-500 mb-8 font-['Poppins']">{progress}% complete • Coming soon!</p>
        
        {/* Back to Home Button - Centered */}
        {showHomeButton && (
          <div className="flex justify-center mb-8">
            <Button 
              onClick={() => navigate(Routes.home)}
              isShowIcon
              className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-['Poppins'] rounded-lg transition-colors"
            >
              Back to Home
            </Button>
          </div>
        )}
        
        {/* Divider */}
        <div className="border-t border-gray-200 pt-6 space-y-3">
          <p className="text-gray-600 font-['Poppins']">Have questions? Reach out to us:</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 font-['Poppins']">
            <a 
              href={`mailto:${contactEmail}`} 
              className="text-orange-600 hover:text-orange-700 transition-colors"
            >
              📧 {contactEmail}
            </a>
            <a 
              href={`tel:${contactPhone}`} 
              className="text-orange-600 hover:text-orange-700 transition-colors"
            >
              📞 {contactPhone}
            </a>
          </div>
        </div>
        
        {/* Status Message */}
        <div className="mt-6 flex justify-center gap-4 text-2xl">
          <span>👷</span>
          <span>🏗️</span>
          <span>🔨</span>
        </div>
        
        <p className="text-sm text-gray-400 mt-4 font-['Poppins']">
          ⏳ {customMessage}
        </p>
      </div>
    </div>
  );
}