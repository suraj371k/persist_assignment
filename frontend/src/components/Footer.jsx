import React from 'react';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={logo} alt="Logo" className="w-32 h-32 mb-4" />
          <p className="text-gray-400 mb-4 max-w-sm">
            Empowering startups and investors through innovative solutions and growth-driven strategies.
          </p>
          {/* Social Media Icons */}
          <div className="flex gap-5 text-2xl">
            <a href="#" className="text-gray-400 hover:text-white transition"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><FaLinkedin /></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><FaYoutube /></a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">Investor Application</a></li>
              <li><a href="#" className="hover:text-white transition">Job Application</a></li>
              <li><a href="#" className="hover:text-white transition">Apply To Startup Accelerator</a></li>
              <li><a href="#" className="hover:text-white transition">Career Accelerator Program</a></li>
              <li><a href="#" className="hover:text-white transition">Our Team</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Legal</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Decentralized Intelligence Agency</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-8">
        &copy; 2025 Your Company. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
