import React from 'react';
import Logo from '../../public/logo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <a href="/" >
              <img src={Logo} alt="Logo" className="h-12 w-auto" />
            </a>
          </div>
          
          {/* Footer Links */}
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-4">دسترسی سریع</h4>
            <ul className="space-y-2">
              <li><a href="/reserves" className="hover:underline">رزروهای من</a></li>
              <li><a href="/account" className="hover:underline">پروفایل کاربری</a></li>
              <li><a href="/policy" className="hover:underline">قوانین و مقررات</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-4">درباره ما</h4>
            <p className="text-sm">
              تهران، بلوار اشرفی اصفهانی، خیابان شهید قموشی، خیابان بهار، دانشگاه علم و فرهنگ، پارک ملی علوم و فناوری های نرم و صنایع دستی (طبقه ششم واحد 1031)
            </p>
            <p className="text-sm">تلفن : 02126144153</p>
            <p className="text-sm">پشتیبانی : 09361003903</p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          {/* Add any footer text or links here, if needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

