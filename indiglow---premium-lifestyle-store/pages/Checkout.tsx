
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Lock, Truck, CreditCard, ChevronRight, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import BackendBadge from '../components/BackendBadge';

const Checkout: React.FC = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isOrdered, setIsOrdered] = useState(false);
  const [loading, setLoading] = useState(false);

  const total = cartTotal + (cartTotal * 0.18);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsOrdered(true);
      clearCart();
    }, 1500);
  };

  if (isOrdered) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-slate-50">
        <div className="max-w-md w-full text-center bg-white p-16 rounded-[3rem] shadow-2xl shadow-indigo-100 border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-indigo-600"></div>
          <div className="flex justify-center mb-8 relative">
            <div className="bg-emerald-50 p-6 rounded-full">
              <CheckCircle2 className="h-16 w-16 text-emerald-500" />
            </div>
            <Sparkles className="absolute -top-2 -right-2 h-8 w-8 text-amber-400 animate-bounce" />
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Order Placed!</h2>
          <p className="text-slate-500 mb-10 text-lg font-medium leading-relaxed">Your IndiGlow goodies are being prepared for dispatch. We can't wait for you to see them!</p>
          <div className="bg-slate-50 p-8 rounded-[2rem] mb-12 text-left border border-slate-100">
             <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Order ID</div>
             <div className="text-xl font-mono font-black text-indigo-600">#GLOW-{Math.random().toString(36).substr(2, 9).toUpperCase()}</div>
          </div>
          <button 
            onClick={() => navigate('/')}
            className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24 bg-slate-50">
      <BackendBadge />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center space-x-4 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-12">
          <span className="hover:text-indigo-600 transition-colors cursor-pointer">Cart</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-indigo-600">Checkout</span>
          <ChevronRight className="h-3 w-3" />
          <span>Success</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Checkout Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handlePlaceOrder} className="space-y-10">
              <section className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
                <div className="flex items-center space-x-4 mb-10">
                  <div className="bg-indigo-50 p-3 rounded-2xl">
                    <Truck className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight">Shipping</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-black text-slate-900 uppercase tracking-widest ml-1">Full Name</label>
                    <input required type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 outline-none transition-all font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-900 uppercase tracking-widest ml-1">Phone</label>
                    <input required type="tel" placeholder="+91" className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 outline-none transition-all font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-900 uppercase tracking-widest ml-1">Email</label>
                    <input required type="email" placeholder="name@email.com" className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 outline-none transition-all font-medium" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-black text-slate-900 uppercase tracking-widest ml-1">Address</label>
                    <textarea required rows={3} placeholder="Full Address" className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 outline-none transition-all font-medium"></textarea>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-900 uppercase tracking-widest ml-1">City</label>
                    <input required type="text" placeholder="E.g. Delhi" className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 outline-none transition-all font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-900 uppercase tracking-widest ml-1">Pincode</label>
                    <input required type="text" placeholder="6 Digits" className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 outline-none transition-all font-medium" />
                  </div>
                </div>
              </section>

              <section className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
                <div className="flex items-center space-x-4 mb-10">
                  <div className="bg-indigo-50 p-3 rounded-2xl">
                    <CreditCard className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight">Payment</h3>
                </div>
                
                <div className="space-y-5">
                  <label className="flex items-center p-6 border-2 border-indigo-600 rounded-[1.5rem] bg-indigo-50 cursor-pointer transition-all">
                    <input type="radio" name="payment" defaultChecked className="h-5 w-5 accent-indigo-600" />
                    <div className="ml-5">
                      <div className="font-black text-slate-900 uppercase text-xs tracking-widest mb-1">Cash on Delivery</div>
                      <div className="text-sm text-slate-500 font-medium">Safe & trusted for low-cost orders</div>
                    </div>
                  </label>
                  <label className="flex items-center p-6 border border-slate-200 rounded-[1.5rem] cursor-not-allowed opacity-40">
                    <input type="radio" name="payment" disabled className="h-5 w-5" />
                    <div className="ml-5">
                      <div className="font-black text-slate-900 uppercase text-xs tracking-widest mb-1">UPI & Online</div>
                      <div className="text-sm text-slate-500 font-medium">Connecting soon with Backend Integration</div>
                    </div>
                  </label>
                </div>
              </section>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-slate-900 text-white py-6 rounded-[2rem] font-black text-xl flex items-center justify-center space-x-4 hover:bg-black transition-all shadow-2xl shadow-slate-200 disabled:opacity-50"
              >
                {loading ? (
                  <div className="animate-spin h-6 w-6 border-4 border-white border-t-transparent rounded-full"></div>
                ) : (
                  <>
                    <Lock className="h-6 w-6 text-indigo-500" />
                    <span>Confirm Order • ₹{total.toLocaleString('en-IN')}</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Cart Summary Side */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-[2.5rem] border border-slate-100 p-10 shadow-xl shadow-slate-100 sticky top-28">
              <h3 className="text-2xl font-black text-slate-900 mb-10 tracking-tight">Review Items</h3>
              <div className="max-h-[350px] overflow-y-auto pr-4 space-y-8 mb-10 scrollbar-thin scrollbar-thumb-slate-200">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center space-x-6">
                    <div className="h-20 w-20 bg-slate-50 rounded-2xl overflow-hidden flex-shrink-0 border border-slate-100 shadow-sm">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-black text-slate-900 text-sm line-clamp-1 uppercase tracking-tight">{item.name}</h4>
                      <p className="text-xs text-slate-400 font-bold mt-1">QTY: {item.quantity}</p>
                    </div>
                    <div className="text-right font-black text-slate-900 italic">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-5 pt-8 border-t border-slate-100">
                <div className="flex justify-between text-slate-500 font-bold">
                  <span className="text-[10px] uppercase tracking-widest">Subtotal</span>
                  <span className="text-slate-900">₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-500 font-bold">
                  <span className="text-[10px] uppercase tracking-widest text-indigo-600">Express Delivery</span>
                  <span className="text-indigo-600 font-black">FREE</span>
                </div>
                <div className="flex justify-between text-slate-500 font-bold">
                  <span className="text-[10px] uppercase tracking-widest">Tax (GST)</span>
                  <span className="text-slate-900">₹{(cartTotal * 0.18).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between pt-6 border-t border-slate-200 items-baseline">
                  <span className="text-lg font-black text-slate-900 tracking-tight">Total Amount</span>
                  <span className="text-3xl font-black text-indigo-600 italic tracking-tighter">₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Fix: Added missing default export for the Checkout component
export default Checkout;