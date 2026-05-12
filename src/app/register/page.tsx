"use client";

import { useState } from "react";
import { Sparkles, Mail, Lock, User, ArrowRight, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md glass-card rounded-[2.5rem] p-10 relative overflow-hidden"
      >
        <div className="flex flex-col items-center text-center space-y-4 mb-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-social flex items-center justify-center shadow-2xl shadow-secondary/40">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-black tracking-tighter text-white uppercase">Join the <span className="text-secondary text-glow">Nexus</span></h1>
          <p className="text-muted text-sm">Start your journey from 0 to infinity.</p>
        </div>

        <div className="space-y-4">
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted group-focus-within:text-secondary transition-colors" />
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-secondary/50 text-white transition-all"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted group-focus-within:text-secondary transition-colors" />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-secondary/50 text-white transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted group-focus-within:text-secondary transition-colors" />
            <input 
              type="password" 
              placeholder="Create Password" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-secondary/50 text-white transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button className="w-full bg-gradient-social text-white font-black py-4 rounded-2xl transition-all shadow-lg shadow-secondary/30 flex items-center justify-center gap-2 group mt-6">
            Register Account
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 space-y-4 text-center">
          <p className="text-sm text-muted">
            Already a member? <a href="/login" className="text-secondary hover:underline font-bold">Login Here</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
