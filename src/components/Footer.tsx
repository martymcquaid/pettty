import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white/90">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-xl font-semibold mb-3">Pet Stuff</h4>
          <p className="text-sm text-gray-300 max-w-prose">
            Premium pet supplies designed to keep tails wagging and whiskers twitching with joy.
          </p>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Customer Service</h5>
          <ul className="text-sm text-gray-300 space-y-1">
            <li><Link to="/shipping" className="hover:underline">Shipping</Link></li>
            <li><Link to="/returns" className="hover:underline">Returns</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Company</h5>
          <ul className="text-sm text-gray-300 space-y-1">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/terms" className="hover:underline">Terms & Policies</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700/50 py-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Pet Stuff. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;