"use client";

import { useState } from "react";
import { 
  Cloud, 
  CloudRain, 
  Sun, 
  Wind, 
  Droplets, 
  Navigation, 
  Search, 
  MapPin, 
  Calendar, 
  Thermometer, 
  Sunrise, 
  Sunset,
  CloudLightning,
  CloudSnow,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const MOCK_WEATHER = {
  city: "Addis Ababa",
  temp: 24,
  condition: "Partly Cloudy",
  humidity: 45,
  wind: 12,
  visibility: 10,
  pressure: 1012,
  feelsLike: 26,
  uv: 8,
  sunrise: "06:12 AM",
  sunset: "06:45 PM",
  forecast: [
    { day: "Mon", temp: 24, icon: Sun },
    { day: "Tue", temp: 22, icon: Cloud },
    { day: "Wed", temp: 19, icon: CloudRain },
    { day: "Thu", temp: 21, icon: CloudLightning },
    { day: "Fri", temp: 23, icon: Sun },
    { day: "Sat", temp: 25, icon: Sun },
    { day: "Sun", temp: 26, icon: Sparkles },
  ]
};

export default function WeatherApp() {
  const [search, setSearch] = useState("");
  const weather = MOCK_WEATHER;

  return (
    <div className="min-h-screen p-6 md:p-12 max-w-7xl mx-auto space-y-10">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-2xl bg-gradient-sky flex items-center justify-center shadow-lg shadow-primary/20">
            <Cloud className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-black tracking-tighter">WEATHER<span className="text-primary">SPHERE</span></h1>
            <p className="text-xs text-muted font-bold uppercase tracking-widest">Precision Atmospheric Data</p>
          </div>
        </div>

        <div className="relative w-full md:w-96 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Search for city..." 
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary/50 transition-all text-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button className="hidden md:flex items-center gap-2 px-6 py-4 rounded-2xl glass hover:bg-white/5 transition-all text-sm font-bold">
          <MapPin className="w-4 h-4 text-primary" />
          Use My Location
        </button>
      </header>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Current Weather Widget */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2 glass rounded-[3rem] p-10 flex flex-col justify-between relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulse-slow" />
          
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary font-bold">
                <Navigation className="w-4 h-4 rotate-45" />
                {weather.city}
              </div>
              <h2 className="text-8xl font-black tracking-tighter text-glow">{weather.temp}°</h2>
              <p className="text-2xl text-muted font-medium">{weather.condition}</p>
            </div>
            <div className="text-right">
               <Sun className="w-32 h-32 text-amber-400 drop-shadow-[0_0_30px_rgba(251,191,36,0.4)]" />
               <p className="text-sm font-bold uppercase tracking-widest text-muted mt-4">H: 28° L: 14°</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/5">
             {[
               { icon: Droplets, label: "Humidity", value: `${weather.humidity}%` },
               { icon: Wind, label: "Wind", value: `${weather.wind} km/h` },
               { icon: Thermometer, label: "Feels Like", value: `${weather.feelsLike}°` },
               { icon: Sparkles, label: "UV Index", value: weather.uv }
             ].map((stat, i) => (
               <div key={i} className="space-y-1">
                 <div className="flex items-center gap-2 text-xs font-bold text-muted uppercase tracking-widest">
                   <stat.icon className="w-4 h-4" />
                   {stat.label}
                 </div>
                 <div className="text-xl font-bold">{stat.value}</div>
               </div>
             ))}
          </div>
        </motion.div>

        {/* Sidebar Widgets */}
        <div className="space-y-8">
           {/* Forecast Widget */}
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             className="glass rounded-[3rem] p-8 space-y-6"
           >
              <div className="flex items-center justify-between">
                <h3 className="flex items-center gap-2 font-bold text-lg">
                  <Calendar className="w-5 h-5 text-primary" />
                  7-Day Forecast
                </h3>
              </div>
              <div className="space-y-4">
                {weather.forecast.map((f, i) => (
                  <div key={i} className="flex items-center justify-between group cursor-default">
                    <span className="w-10 text-sm font-bold text-muted group-hover:text-white transition-colors">{f.day}</span>
                    <f.icon className={cn(
                      "w-6 h-6",
                      f.day === "Wed" ? "text-primary" : "text-amber-400"
                    )} />
                    <div className="flex gap-4">
                      <span className="text-sm font-black">{f.temp}°</span>
                      <div className="w-24 h-1.5 bg-white/5 rounded-full overflow-hidden mt-2">
                        <div 
                          className="h-full bg-gradient-sky" 
                          style={{ width: `${(f.temp / 30) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
           </motion.div>

           {/* Sunrise/Sunset Widget */}
           <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-[2rem] p-6 space-y-3">
                 <Sunrise className="w-6 h-6 text-amber-400" />
                 <p className="text-xs font-bold text-muted uppercase tracking-widest">Sunrise</p>
                 <div className="text-xl font-black">{weather.sunrise}</div>
              </div>
              <div className="glass rounded-[2rem] p-6 space-y-3">
                 <Sunset className="w-6 h-6 text-pink-400" />
                 <p className="text-xs font-bold text-muted uppercase tracking-widest">Sunset</p>
                 <div className="text-xl font-black">{weather.sunset}</div>
              </div>
           </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid md:grid-cols-4 gap-8">
         <div className="glass rounded-[2rem] p-8 md:col-span-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <Wind className="w-5 h-5 text-primary" />
              Air Quality
            </h4>
            <div className="text-3xl font-black">24 - Excellent</div>
            <p className="text-sm text-muted mt-2">The air is fresh and healthy for outdoor activities.</p>
         </div>

         <div className="glass rounded-[2rem] p-8 relative overflow-hidden group">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <Navigation className="w-5 h-5 text-primary" />
              Visibility
            </h4>
            <div className="text-3xl font-black">{weather.visibility} km</div>
            <p className="text-sm text-muted mt-2">Clear and sharp views today.</p>
         </div>

         <div className="glass rounded-[2rem] p-8 relative overflow-hidden group">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <Thermometer className="w-5 h-5 text-primary" />
              Pressure
            </h4>
            <div className="text-3xl font-black">{weather.pressure} hPa</div>
            <p className="text-sm text-muted mt-2">Steady atmospheric pressure.</p>
         </div>
      </div>
    </div>
  );
}
