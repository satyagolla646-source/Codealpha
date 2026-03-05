
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ChevronLeft, Minus, Plus, ShoppingCart, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import BackendBadge from '../components/BackendBadge';

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <button onClick={() => navigate('/')} className="text-indigo-600 font-bold hover:underline">Return Home</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  return (
    <div className="min-h-screen pb-24 bg-slate-50">
      <BackendBadge />
      
      <div className="max-w-7xl mx-auto px-4 mt-12">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-slate-400 hover:text-indigo-600 mb-10 transition-colors font-bold group"
        >
          <div className="bg-white p-2 rounded-full mr-3 shadow-sm group-hover:shadow-md transition-all">
            <ChevronLeft className="h-4 w-4" />
          </div>
          <span>Back to products</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Section */}
          <div className="space-y-6">
            <div className="aspect-[4/5] bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
               {[1,2,3,4].map(i => (
                 <div key={i} className="aspect-square bg-white rounded-2xl overflow-hidden cursor-pointer hover:ring-2 ring-indigo-500 transition-all shadow-sm">
                    <img src={`${product.image}?v=${i}`} className="w-full h-full object-cover opacity-80 hover:opacity-100" alt="view" />
                 </div>
               ))}
            </div>
          </div>

          {/* Info Section */}
          <div className="flex flex-col pt-4">
            <div className="mb-4">
               <span className="bg-indigo-50 text-indigo-700 text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-[0.2em]">
                 {product.category}
               </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter leading-tight">{product.name}</h1>
            
            <div className="flex items-center space-x-6 mb-8 pb-8 border-b border-slate-200">
              <div className="flex items-center px-4 py-2 bg-amber-50 rounded-2xl border border-amber-100">
                <Star className="h-4 w-4 text-amber-500 fill-current mr-2" />
                <span className="text-amber-700 font-bold">{product.rating}</span>
              </div>
              <span className="text-slate-300">|</span>
              <div className="flex items-center space-x-1 text-slate-400 font-semibold text-sm">
                <Sparkles className="h-4 w-4 text-indigo-400" />
                <span>Best in {product.category}</span>
              </div>
            </div>

            <div className="mb-10">
               <div className="flex items-baseline space-x-3">
                 <div className="text-5xl font-black text-slate-900">₹{product.price.toLocaleString('en-IN')}</div>
                 <div className="text-xl text-slate-400 line-through">₹{(product.price * 1.5).toFixed(0)}</div>
               </div>
               <div className="text-sm text-green-600 font-bold mt-2 bg-green-50 inline-block px-3 py-1 rounded-lg">33% OFF • Mega Deal</div>
            </div>

            <p className="text-slate-500 leading-relaxed mb-12 text-lg">
              {product.description} Join the IndiGlow community with this high-value {product.name.toLowerCase()}. Designed for modern life, this item offers uncompromised quality without breaking the bank.
            </p>

            {/* Quantity & Actions */}
            <div className="flex flex-col space-y-6">
              <div className="flex items-center space-x-8">
                <span className="text-slate-900 font-black uppercase text-xs tracking-widest">Select Quantity</span>
                <div className="flex items-center bg-white border border-slate-200 rounded-2xl p-2 shadow-sm">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-slate-50 rounded-xl transition-colors"
                  >
                    <Minus className="h-4 w-4 text-slate-600" />
                  </button>
                  <span className="w-10 text-center font-black text-xl">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-slate-50 rounded-xl transition-colors"
                  >
                    <Plus className="h-4 w-4 text-slate-600" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-indigo-600 text-white px-8 py-5 rounded-[1.5rem] font-bold flex items-center justify-center space-x-3 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 hover:scale-[1.02] active:scale-95"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Shopping Bag</span>
                </button>
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-slate-900 text-white px-8 py-5 rounded-[1.5rem] font-bold flex items-center justify-center hover:bg-black transition-all shadow-xl shadow-slate-100"
                >
                  <span>Buy Immediately</span>
                </button>
              </div>
            </div>

            {/* Perks */}
            <div className="grid grid-cols-2 gap-8 mt-12 pt-10 border-t border-slate-200">
               <div className="flex items-start space-x-4">
                  <div className="bg-indigo-50 p-2 rounded-xl text-indigo-600">
                    <Truck className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Swift Delivery</h4>
                    <p className="text-sm text-slate-500">Free Pan-India Shipping</p>
                  </div>
               </div>
               <div className="flex items-start space-x-4">
                  <div className="bg-indigo-50 p-2 rounded-xl text-indigo-600">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Safe Checkout</h4>
                    <p className="text-sm text-slate-500">Secure Payments via UPI</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
