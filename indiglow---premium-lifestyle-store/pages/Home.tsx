
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus, Zap } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Category } from '../types';
import { useCart } from '../context/CartContext';
import BackendBadge from '../components/BackendBadge';

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const { addToCart } = useCart();

  const categories: (Category | 'All')[] = ['All', 'Electronics', 'Clothing', 'Shoes', 'Accessories'];

  const filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen pb-24">
      <BackendBadge />
      
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-slate-900 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-indigo-600/20 backdrop-blur-xl border border-indigo-500/30 px-4 py-2 rounded-full mb-8">
            <Zap className="h-4 w-4 text-indigo-400 fill-current" />
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-200">Budget Friendly Prices</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">Your Everyday <span className="text-indigo-500">Essential</span> Hub</h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-xl mb-12">Premium quality lifestyle products at prices that make sense. Experience the Fit Into Your Style difference.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/20">Shop All Deals</button>
            <button className="bg-white/5 backdrop-blur border border-white/10 text-white px-10 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all">New Arrivals</button>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 mt-12">
        <div className="flex flex-wrap items-center justify-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-8 py-3 rounded-2xl text-sm font-bold transition-all whitespace-nowrap border-2 ${
                selectedCategory === cat 
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-100' 
                : 'bg-white text-slate-500 border-slate-200 hover:border-indigo-400 hover:text-indigo-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white group rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-slate-50">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest text-indigo-600 border border-indigo-100">
                  {product.category}
                </div>
              </Link>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-1">
                    <Star className="h-3.5 w-3.5 text-amber-400 fill-current" />
                    <span className="text-xs font-bold text-slate-400">{product.rating}</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-300 tracking-tighter">FREE SHIPPING</span>
                </div>
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors truncate mb-4">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-black text-slate-900 italic tracking-tighter">₹{product.price.toLocaleString('en-IN')}</div>
                  <button 
                    onClick={() => addToCart(product)}
                    className="p-3 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition-all shadow-md active:scale-95"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
