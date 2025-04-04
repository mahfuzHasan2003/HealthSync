import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
      return (
        <footer className="bg-[#F8FAFC] text-gray-700 pt-16 pb-8 px-8 mt-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Info */}
            <div>
              <h2 className="text-xl font-semibold flex items-center space-x-2">
                <span className="text-blue-600 text-3xl">🩺</span>
                <span>HelthSync</span>
              </h2>
              <p className="mt-4 text-sm">
                Mattis inelit neque quis donec eleifend amet. Amet sed et cursus eu euismod.
              </p>
              <div className="flex space-x-4 mt-4 text-blue-600 text-2xl">
                <a href="#" className="hover:text-blue-400"><FaFacebook /></a>
                <a href="#" className="hover:text-blue-400"><BsTwitterX /></a>
                <a href="#" className="hover:text-blue-400"><FaLinkedin /></a>
                <a href="#" className="hover:text-blue-400"><FaInstagram /></a>
              </div>
            </div>
    
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                {["Home", "About Us", "Services", "Latest News", "Team"].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-blue-500">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
    
            {/* Useful Links */}
            <div>
              <h3 className="font-semibold text-lg">Useful Links</h3>
              <ul className="mt-4 space-y-2">
                {["Projects", "Shop", "Cart", "Contact Us", "Faq"].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-blue-500">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
    
            {/* Contact */}
            <div>
              <h3 className="font-semibold text-lg">Contact Us</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center space-x-2">
                  <span>📧</span>
                  <a href="mailto:HelthSync@gmail.com" className="hover:text-blue-500">
                    helthsync@gmail.com
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <span>📞</span>
                  <span>+91 0000000000</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>📞</span>
                  <span>+91 0000000000</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>📍</span>
                  <span>4517 Washington Ave, Manchter, Kentucky 495</span>
                </li>
              </ul>
            </div>
          </div>
    
          {/* Bottom Footer */}
          <div className="mt-8 border-t pt-4 text-center text-sm">
            <p>
              Copyright © 2025 HelthSync 
              <a href="#" className="text-blue-500 hover:underline"> All Rights Reserved.</a>
            </p>
            <div className="mt-2 space-x-4">
              <a href="#" className="text-blue-500 hover:underline">Privacy & Policy</a>
              <a href="#" className="text-blue-500 hover:underline">Terms</a>
              <a href="#" className="text-blue-500 hover:underline">About Us</a>
              <a href="#" className="text-blue-500 hover:underline">FAQ</a>
            </div>
          </div>
        </footer>
      );
    };
    
    export default Footer;
    