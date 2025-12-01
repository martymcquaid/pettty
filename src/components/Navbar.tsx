import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';
import { categories } from '../data/products';
import logo from '../../public/logo.png';

const Navbar: React.FC = () => {
  const { items } = useCart();
  const [q, setQ] = useState('');

  return (
    <header className="bg-white/90 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo ?? 'https://images.unsplash.com/photo-1515548116097-3d33ea6a9a7f?w=48&h=48&fit=crop'} alt="Pet Stuff Logo" className="h-9 w-9 rounded-full" />
          <Link to="/" className="text-2xl font-extrabold tracking-tight text-teal-700">Pet Stuff</Link>
        </div>
        <div className="hidden md:flex items-center gap-4">
          {categories.map((c) => (
            <NavLink key={c.slug} to={`/category/${c.slug}`} className={({ isActive }) => `px-3 py-2 rounded-lg ${isActive ? 'bg-teal-50 text-teal-700' : 'text-gray-700 hover:bg-gray-100'}`}>
              {c.name}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <form
            role="search"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.assign(`/search?q=${encodeURIComponent(q)}`);
            }}
          >
            <div className="relative">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                aria-label="Search products"
                placeholder="Search pets..."
                className="w-48 md:w-72 bg-white border border-gray-200 rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-teal-300"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">🔎</span>
            </div>
          </form>
          <Link to="/cart" className="relative p-2 rounded-full hover:bg-gray-100">
            <ShoppingCartIcon className="h-6 w-6 text-slate-700" />
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1 text-xs bg-teal-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-center">
                {items.reduce((a, c) => a + c.quantity, 0)}
              </span>
            )}
          </Link>
        </div>
      </nav>
      <div className="bg-gradient-to-r from-teal-50 via-teal-100 to-teal-200 h-1" aria-hidden="true" />
    </header>
  );
};

export default Navbar;