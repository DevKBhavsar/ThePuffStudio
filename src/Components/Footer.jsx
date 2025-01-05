import React from "react";
import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-100 h-14">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex justify-between items-center h-full">
          <div className="text-sm text-gray-600">
            <p className="font-medium">The Puff Studio</p>
            <p className="text-xs">Near Shivaji Chowk, Krishnanagar, Nava Naroda, Ahmedabad</p>
          </div>

          <div className="flex gap-3 items-center">
            <a
              href="https://web.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-500 transition-colors"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="https://www.instagram.com/the_puff_studio/?igshid=NjIwNzIyMDk2Mg%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
