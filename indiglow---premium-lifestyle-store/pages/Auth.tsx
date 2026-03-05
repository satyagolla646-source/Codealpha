
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff, Github, Chrome, Sparkles } from 'lucide-react';
import BackendBadge from '../components/BackendBadge';

const Auth: React.FC<{ mode: 'login' | 'register' }> = ({ mode }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4 bg-slate-50">
      <div className="w-full max-w-md">
        <BackendBadge />

        <div className="bg-white mt-10 p-12 rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8">
            <Sparkles className="h-10 w-10 text-indigo-50" />
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-3">
              {mode === 'login' ? 'Glow Again!' : 'Join the Glow'}
            </h1>
            <p className="text-slate-400 font-medium">
              {mode === 'login' ? 'Login to your Fit Into YourStyle account' : 'Start your affordable shopping journey'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {mode === 'register' && (
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-900 uppercase tracking-widest ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    required
                    type="text"
                    placeholder="Enter your name"
                    className="w-full pl-14 pr-5 py-4 rounded-2xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 outline-none transition-all font-medium"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-black text-slate-900 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  required
                  type="email"
                  placeholder="hello@indiglow.in"
                  className="w-full pl-14 pr-5 py-4 rounded-2xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 outline-none transition-all font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-black text-slate-900 uppercase tracking-widest ml-1">Password</label>
                {mode === 'login' && (
                  <Link to="/login" className="text-xs font-bold text-indigo-600 hover:text-indigo-700">Forgot?</Link>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  required
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full pl-14 pr-14 py-4 rounded-2xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 outline-none transition-all font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 hover:text-indigo-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-5 rounded-[1.5rem] font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 hover:scale-[1.02] active:scale-95"
            >
              {mode === 'login' ? 'Log Me In' : 'Create My Account'}
            </button>
          </form>

          <div className="my-12 flex items-center">
            <div className="flex-grow border-t border-slate-100"></div>
            <span className="px-5 text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">Social Connect</span>
            <div className="flex-grow border-t border-slate-100"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center space-x-3 border border-slate-200 py-4 rounded-2xl hover:bg-slate-50 transition-all font-bold text-slate-700">
              <Chrome className="h-5 w-5 text-red-500" />
              <span>Google</span>
            </button>
            <button className="flex items-center justify-center space-x-3 border border-slate-200 py-4 rounded-2xl hover:bg-slate-50 transition-all font-bold text-slate-700">
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </button>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-400 font-medium">
              {mode === 'login' ? "New around here?" : "Part of the glow?"}{' '}
              <Link
                to={mode === 'login' ? '/register' : '/login'}
                className="text-indigo-600 font-black hover:underline underline-offset-4"
              >
                {mode === 'login' ? 'Sign Up' : 'Log In'}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
