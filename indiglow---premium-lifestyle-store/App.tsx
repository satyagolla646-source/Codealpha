
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Auth from './pages/Auth';
import { CartProvider } from './context/CartContext';
import { Sparkles } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="bg-slate-900 text-white pt-24 pb-12">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-16 border-b border-slate-800 pb-16 mb-12">
      <div className="space-y-8">
        <div className="flex items-center space-x-2">
          <Sparkles className="h-8 w-8 text-indigo-500" />
          <span className="text-3xl font-black tracking-tighter uppercase">INDI<span className="text-indigo-500">GLOW</span></span>
        </div>
        <p className="text-slate-400 leading-relaxed font-medium">Modern Indian lifestyle essentials at prices that let you glow without overspending. Join the 500k+ happy shoppers today.</p>
        <div className="flex space-x-4">
          <div className="h-12 w-12 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-indigo-600 transition-all cursor-pointer">IG</div>
          <div className="h-12 w-12 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-indigo-600 transition-all cursor-pointer">TW</div>
          <div className="h-12 w-12 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-indigo-600 transition-all cursor-pointer">YT</div>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-black uppercase tracking-widest text-indigo-400 mb-8">Navigation</h4>
        <ul className="space-y-5 text-slate-400 font-bold">
          <li><a href="#" className="hover:text-white transition-colors">Daily Deals</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Clearance Sale</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-black uppercase tracking-widest text-indigo-400 mb-8">Help Center</h4>
        <ul className="space-y-5 text-slate-400 font-bold">
          <li><a href="#" className="hover:text-white transition-colors">Order Status</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Returns & Refunds</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Support Email</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-black uppercase tracking-widest text-indigo-400 mb-8">Join the Glow</h4>
        <p className="text-slate-400 mb-6 font-medium">Get secret price drops directly in your inbox.</p>
        <div className="flex bg-slate-800 p-2 rounded-2xl border border-slate-700">
          <input type="email" placeholder="email@glow.in" className="bg-transparent border-none px-4 py-2 w-full outline-none text-white placeholder-slate-500 font-medium" />
          <button className="bg-indigo-600 px-6 py-2 rounded-xl font-bold hover:bg-indigo-700 transition-all">Join</button>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-bold tracking-widest uppercase">
      <p>© 2024 INDIGLOW. ALL RIGHTS RESERVED.</p>
      <div className="mt-8 md:mt-0 flex space-x-10">
        <span className="hover:text-indigo-400 cursor-pointer transition-colors">Privacy</span>
        <span className="hover:text-indigo-400 cursor-pointer transition-colors">Terms</span>
        <span className="text-indigo-500 underline decoration-2 underline-offset-8">Backend API Ready</span>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Auth mode="login" />} />
              <Route path="/register" element={<Auth mode="register" />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;
