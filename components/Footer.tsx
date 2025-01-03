import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-[#735751] text-white py-8 mt-10">
         
      <div className="container mx-auto px-4">
      
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
          <div>
            <h2 className="text-2xl font-bold">About Us</h2>
            <p className="text-sm mt-2">
              We are dedicated to sharing the beauty of flowers through curated tips, gardening guides, and floral inspirations.
            </p>
          </div>

         
          <div>
            <h2 className="text-xl font-semibold">Quick Links</h2>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="/faq" className="hover:text-gray-300">FAQs</a></li>
              <li><a href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-gray-300">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <p className="text-sm mt-2">Email: maimoonazehra47@gmail.com</p>
            <p className="text-sm">Phone: +1 234 567 890</p>
          </div>
        </div>

       
        <div className="border-t border-gray-400 my-6"></div>

    
        <div className="flex flex-col md:flex-row justify-between items-center">
    
          <div className="flex gap-4 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <AiFillFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <AiFillInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <AiFillTwitterSquare />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm mt-4 md:mt-0">
            © {new Date().getFullYear()} MZ Flourista . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
