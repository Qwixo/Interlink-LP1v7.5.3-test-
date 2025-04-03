import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="text-center mb-4">
            <h3 className="text-lg font-bold text-[#064088]">INTERLINK International Institutes</h3>
          </div>
          
          <div className="text-gray-700 text-sm text-center mb-4">
            <p className="font-semibold mb-2">Contact:</p>
            <p className="mb-1">Email: <a href="mailto:admissions@interlink.edu" className="text-[#064088] hover:underline">admissions@interlink.edu</a></p>
            <p className="mb-1">WhatsApp: +1 (720) 391-2030</p>
          </div>
          
          <div className="text-gray-700 text-sm text-center mb-4">
            <p className="mb-1">
              Website: <a href="https://interlink.edu/" target="_blank" rel="noopener noreferrer" className="text-[#064088] hover:underline">https://interlink.edu/</a>
            </p>
          </div>
          
          <div className="mt-4 text-xs text-gray-500 text-center">
            <p>© {new Date().getFullYear()} INTERLINK International Institutes. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
