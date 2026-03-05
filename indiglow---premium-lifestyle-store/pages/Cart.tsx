
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ShoppingBag, Plus, Minus, ArrowRight, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import BackendBadge from '../components/BackendBadge';

const Cart: React.FC = () => {
  const { cart, cartTotal, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50">
        <BackendBadge />
        <div className="max-w-7xl mx-auto px-4 py-32 flex flex-col items-center justify-center text-center">
          <div className="bg-indigo-50 p-12 rounded-[3rem] mb-10 relative">
            <ShoppingBag className="h-24 w-24 text-indigo-600 opacity-40" />
            <Sparkles className="absolute top-8 right-8 h-8 w-8 text-indigo-400 animate-pulse" />
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Your bag is glowing... <br/>with emptiness.</h2>
          <p className="text-slate-500 max-w-md mb-12 text-lg">Don't miss out on our best-selling deals. Grab something amazing today!</p>
          <Link 
            to="/" 
            className="bg-indigo-600 text-white px-12 py-5 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 flex items-center space-x-3"
          >
            <span>Start Exploring</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24 bg-slate-50">
      <BackendBadge />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-black text-slate-900 mb-12 tracking-tight flex items-baseline">
          My Shopping Bag <span className="ml-6 text-slate-300 font-bold text-2xl tracking-normal">{cart.length} item{cart.length > 1 ? 's' : ''}</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Cart Items List */}
          <div className="lg:col-span-8 space-y-8">
            {cart.map(item => (
              <div key={item.id} className="bg-white rounded-[2rem] p-8 border border-slate-100 flex flex-col sm:flex-row items-center gap-8 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-32 h-32 bg-slate-50 rounded-2xl overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-grow text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start space-x-2 mb-2">
                    <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">{item.category}</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2 leading-tight">{item.name}</h3>
                  <div className="text-2xl font-black text-slate-900 sm:hidden mb-6">₹{item.price.toLocaleString('en-IN')}</div>
                </div>

                <div className="flex items-center space-x-8">
                  <div className="flex items-center bg-slate-50 rounded-2xl p-1.5 border border-slate-200">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-2 hover:bg-white rounded-xl transition-all text-slate-500"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-10 text-center font-black text-lg">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-2 hover:bg-white rounded-xl transition-all text-slate-500"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="hidden sm:block text-right min-w-[120px]">
                    <div className="text-2xl font-black text-slate-900 italic tracking-tighter">₹{(item.price * item.quantity).toLocaleString('en-IN')}</div>
                    <div className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">₹{item.price.toLocaleString('en-IN')} ea.</div>
                  </div>

                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-4 text-slate-200 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4">
            <div className="bg-indigo-900 text-white rounded-[2.5rem] p-10 shadow-2xl shadow-indigo-900/20 sticky top-28">
              <h3 className="text-3xl font-black mb-8 tracking-tight">Summary</h3>
              
              <div className="space-y-6 mb-10">
                <div className="flex justify-between text-indigo-200 font-bold">
                  <span>Bag Subtotal</span>
                  <span className="text-white">₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-indigo-200 font-bold">
                  <span>Standard Shipping</span>
                  <span className="text-emerald-400 font-black tracking-widest uppercase">Free</span>
                </div>
                <div className="flex justify-between text-indigo-200 font-bold">
                  <span>GST (18%)</span>
                  <span className="text-white">₹{(cartTotal * 0.18).toLocaleString('en-IN')}</span>
                </div>
                <div className="pt-6 border-t border-indigo-800 flex justify-between items-baseline">
                  <span className="text-xl font-bold">Grand Total</span>
                  <span className="text-4xl font-black text-white italic tracking-tighter">₹{(cartTotal + (cartTotal * 0.18)).toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button 
                onClick={() => navigate('/checkout')}
                className="w-full bg-white text-indigo-900 py-5 rounded-2xl font-black text-lg flex items-center justify-center space-x-3 hover:bg-indigo-50 transition-all shadow-xl group"
              >
                <span>Checkout Now</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </button>
              
              <div className="mt-8 text-center">
                <span className="text-[10px] font-black tracking-widest text-indigo-300/50 uppercase">Verified Secure Payment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
