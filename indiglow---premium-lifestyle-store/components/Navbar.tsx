
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const { cartCount } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-indigo-600 p-2 rounded-xl">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-black text-slate-900 tracking-tighter uppercase">Indi<span className="text-indigo-600">Glow</span></span>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-slate-600 hover:text-indigo-600 font-semibold transition-colors">Shop</Link>
            <Link to="/login" className="text-slate-600 hover:text-indigo-600 font-semibold transition-colors">Trending</Link>
            <Link to="/login" className="text-slate-600 hover:text-indigo-600 font-semibold transition-colors">Deals</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/login" className="p-2.5 text-slate-600 hover:text-indigo-600 transition-all hover:bg-slate-100 rounded-full">
              <User className="h-6 w-6" />
            </Link>
            <Link to="/cart" className="p-2.5 text-slate-600 hover:text-indigo-600 transition-all hover:bg-slate-100 rounded-full relative group">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-indigo-600 text-white text-[10px] font-extrabold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm group-hover:scale-110 transition-transform">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
