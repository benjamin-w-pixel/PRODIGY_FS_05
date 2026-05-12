"use client";

import { useState } from "react";
import { Sparkles, Mail, Lock, ArrowRight, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md glass-card rounded-[2.5rem] p-10 relative overflow-hidden"
      >
        <div className="flex flex-col items-center text-center space-y-4 mb-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-social flex items-center justify-center shadow-2xl shadow-primary/40">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-black tracking-tighter text-white uppercase">Welcome to <span className="text-primary text-glow">Nexus</span></h1>
          <p className="text-muted text-sm">Experience the next generation of social tech.</p>
        </div>

        <div className="space-y-4">
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted group-focus-within:text-primary transition-colors" />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary/50 text-white transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted group-focus-within:text-primary transition-colors" />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary/50 text-white transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button className="w-full bg-primary hover:bg-primary/90 text-white font-black py-4 rounded-2xl transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 group">
            Login
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
          <button className="w-full bg-white/5 hover:bg-white/10 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-3">
            <Github className="w-5 h-5" />
            Continue with GitHub
          </button>
          
          <p className="text-center text-sm text-muted">
            Don't have an account? <a href="/register" className="text-primary hover:underline font-bold">Register Now</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
