"use client";

import { useState } from "react";
import { 
  Home, 
  Search, 
  Bell, 
  Mail, 
  User, 
  Bookmark, 
  Settings, 
  MoreHorizontal, 
  Image as ImageIcon, 
  Smile, 
  MapPin, 
  Heart, 
  MessageCircle, 
  Share2, 
  Send,
  Plus,
  Sparkles,
  TrendingUp,
  Hash
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const MOCK_USER = {
  name: "Biniyam Wegene",
  handle: "@benjamin_w_pixel",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Biniyam"
};

const MOCK_POSTS = [
  {
    id: 1,
    user: {
      name: "Abel Tesfaye",
      handle: "@theweeknd",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Abel"
    },
    content: "Just finished building a new hybrid AI engine for Zemen AI. The offline inference is blazing fast! 🚀🧠 #AI #Tech #AAU",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    likes: 1240,
    comments: 42,
    time: "2h ago"
  },
  {
    id: 2,
    user: {
      name: "Prodigy InfoTech",
      handle: "@prodigy_infotech",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Prodigy"
    },
    content: "We are impressed by the quality of work coming from our interns this year. Keep pushing the boundaries of Web Development! ✨",
    likes: 856,
    comments: 12,
    time: "5h ago"
  },
  {
    id: 3,
    user: {
      name: "Sara Solomon",
      handle: "@sara_dev",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara"
    },
    content: "Addis Ababa's tech scene is growing so fast. Excited to be part of this community! 🇪🇹💻",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000",
    likes: 312,
    comments: 8,
    time: "8h ago"
  }
];

const STORIES = [
  { id: 1, name: "Your Story", avatar: MOCK_USER.avatar, mine: true },
  { id: 2, name: "Alex", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" },
  { id: 3, name: "Hanna", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hanna" },
  { id: 4, name: "Yonas", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yonas" },
  { id: 5, name: "Maya", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maya" },
  { id: 6, name: "Brook", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Brook" },
];

export default function SocialPlatform() {
  const [activeTab, setActiveTab] = useState("home");
  const [postContent, setPostContent] = useState("");

  return (
    <div className="min-h-screen flex max-w-[1400px] mx-auto">
      {/* Sidebar Navigation */}
      <aside className="hidden md:flex flex-col w-72 p-6 sticky top-0 h-screen border-r border-border">
        <div className="flex items-center gap-2 mb-10 px-2 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-gradient-social flex items-center justify-center shadow-lg shadow-primary/20">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-black tracking-tighter">NEXUS<span className="text-primary">SOCIAL</span></h1>
        </div>

        <nav className="flex-1 space-y-2">
          {[
            { id: "home", icon: Home, label: "Feed" },
            { id: "search", icon: Search, label: "Explore" },
            { id: "notifications", icon: Bell, label: "Notifications", badge: 3 },
            { id: "messages", icon: Mail, label: "Messages" },
            { id: "bookmarks", icon: Bookmark, label: "Bookmarks" },
            { id: "profile", icon: User, label: "Profile" },
            { id: "settings", icon: Settings, label: "Settings" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 group",
                activeTab === item.id 
                  ? "bg-primary/10 text-primary" 
                  : "hover:bg-white/5 text-muted hover:text-white"
              )}
            >
              <div className="flex items-center gap-4">
                <item.icon className={cn("w-6 h-6", activeTab === item.id && "text-glow")} />
                <span className="font-bold text-lg">{item.label}</span>
              </div>
              {item.badge && (
                <span className="bg-secondary text-white text-[10px] font-black px-2 py-1 rounded-full shadow-lg shadow-secondary/30">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="mt-auto p-4 rounded-3xl glass-card flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={MOCK_USER.avatar} alt="User" className="w-10 h-10 rounded-full border border-white/10" />
            <div className="hidden lg:block overflow-hidden">
              <p className="text-sm font-bold truncate">{MOCK_USER.name}</p>
              <p className="text-xs text-muted truncate">{MOCK_USER.handle}</p>
            </div>
          </div>
          <button className="text-muted hover:text-white">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </aside>

      {/* Main Content (Feed) */}
      <main className="flex-1 min-w-0 border-r border-border bg-black/20">
        {/* Header */}
        <header className="sticky top-0 z-10 glass px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-black uppercase tracking-widest">{activeTab}</h2>
          <button className="md:hidden w-10 h-10 rounded-full bg-gradient-social flex items-center justify-center">
            <Plus className="w-6 h-6 text-white" />
          </button>
        </header>

        <AnimatePresence mode="wait">
          {activeTab === "home" ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Stories */}
              <div className="p-6 flex gap-4 overflow-x-auto scrollbar-hide">
                {STORIES.map((story) => (
                  <div key={story.id} className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer group">
                    <div className={cn(
                      "w-16 h-16 rounded-full p-1 transition-transform group-hover:scale-105",
                      story.mine ? "bg-white/10" : "bg-gradient-social"
                    )}>
                      <div className="w-full h-full rounded-full border-2 border-[#030014] overflow-hidden">
                        <img src={story.avatar} alt={story.name} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-muted truncate w-16 text-center">{story.name}</span>
                  </div>
                ))}
              </div>

              {/* Create Post */}
              <div className="p-6 border-b border-border">
                <div className="flex gap-4">
                  <img src={MOCK_USER.avatar} alt="User" className="w-12 h-12 rounded-full" />
                  <div className="flex-1 space-y-4">
                    <textarea 
                      placeholder="What's happening in your tech world?"
                      className="w-full bg-transparent border-none text-xl focus:outline-none resize-none min-h-[100px]"
                      value={postContent}
                      onChange={(e) => setPostContent(e.target.value)}
                    />
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex gap-4 text-primary">
                        <button className="hover:bg-primary/10 p-2 rounded-full transition-colors"><ImageIcon className="w-5 h-5" /></button>
                        <button className="hover:bg-primary/10 p-2 rounded-full transition-colors"><Smile className="w-5 h-5" /></button>
                        <button className="hover:bg-primary/10 p-2 rounded-full transition-colors"><MapPin className="w-5 h-5" /></button>
                      </div>
                      <button 
                        disabled={!postContent.trim()}
                        className="bg-primary hover:bg-primary/90 disabled:opacity-50 text-white font-black px-6 py-2 rounded-full transition-all flex items-center gap-2 shadow-lg shadow-primary/20"
                      >
                        <Send className="w-4 h-4" />
                        Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Posts Feed */}
              <div className="divide-y divide-border">
                {MOCK_POSTS.map((post) => (
                  <motion.article 
                    key={post.id} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-6 hover:bg-white/[0.02] transition-colors cursor-pointer"
                  >
                    <div className="flex gap-4">
                      <img src={post.user.avatar} alt={post.user.name} className="w-12 h-12 rounded-full" />
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-bold hover:underline">{post.user.name}</span>
                            <span className="text-sm text-muted">{post.user.handle}</span>
                            <span className="text-muted text-xs">•</span>
                            <span className="text-xs text-muted">{post.time}</span>
                          </div>
                          <button className="text-muted hover:text-white"><MoreHorizontal className="w-5 h-5" /></button>
                        </div>
                        
                        <p className="text-lg leading-relaxed">{post.content}</p>

                        {post.image && (
                          <div className="rounded-3xl overflow-hidden border border-border">
                            <img src={post.image} alt="Post" className="w-full object-cover max-h-[500px]" />
                          </div>
                        )}

                        <div className="flex items-center justify-between pt-4 text-muted">
                          <button className="flex items-center gap-2 group hover:text-primary transition-colors">
                            <div className="p-2 rounded-full group-hover:bg-primary/10"><MessageCircle className="w-5 h-5" /></div>
                            <span className="text-xs font-bold">{post.comments}</span>
                          </button>
                          <button className="flex items-center gap-2 group hover:text-pink-500 transition-colors">
                            <div className="p-2 rounded-full group-hover:bg-pink-500/10"><Heart className="w-5 h-5" /></div>
                            <span className="text-xs font-bold">{post.likes}</span>
                          </button>
                          <button className="flex items-center gap-2 group hover:text-indigo-400 transition-colors">
                            <div className="p-2 rounded-full group-hover:bg-indigo-400/10"><Share2 className="w-5 h-5" /></div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center h-[60vh] text-center p-10"
            >
              <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center mb-6">
                <Sparkles className="w-10 h-10 text-primary animate-pulse" />
              </div>
              <h3 className="text-2xl font-black mb-2">Section Under Construction</h3>
              <p className="text-muted max-w-xs">Nexus is evolving. This premium section will be available in the next release.</p>
              <button 
                onClick={() => setActiveTab("home")}
                className="mt-6 text-primary font-bold hover:underline"
              >
                Return to Feed
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Widgets (Right Sidebar) */}
      <aside className="hidden lg:flex flex-col w-96 p-6 space-y-8 sticky top-0 h-screen overflow-y-auto scrollbar-hide">
        {/* Search */}
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Search Nexus" 
            className="w-full bg-slate-900/50 border border-border rounded-full py-4 pl-12 pr-4 focus:outline-none focus:border-primary/50 transition-all"
          />
        </div>

        {/* Trends */}
        <div className="glass-card rounded-[2rem] p-6 space-y-6">
          <h3 className="text-xl font-black flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Trends for you
          </h3>
          <div className="space-y-4">
            {[
              { tag: "EthiopianTech", posts: "24.5K" },
              { tag: "ProdigyInternship", posts: "12.1K" },
              { tag: "ZemenAI", posts: "8.4K" },
              { tag: "NextJS15", posts: "42.8K" },
            ].map((trend) => (
              <div key={trend.tag} className="flex flex-col cursor-pointer group">
                <div className="flex items-center gap-1 text-xs text-muted">
                  <Hash className="w-3 h-3" />
                  Trending in Ethiopia
                </div>
                <span className="font-bold group-hover:underline">#{trend.tag}</span>
                <span className="text-xs text-muted">{trend.posts} Posts</span>
              </div>
            ))}
          </div>
          <button className="text-primary text-sm font-bold hover:underline">Show more</button>
        </div>

        {/* Who to follow */}
        <div className="glass-card rounded-[2rem] p-6 space-y-6">
          <h3 className="text-xl font-black">Who to follow</h3>
          <div className="space-y-4">
            {[
              { name: "Tech Addis", handle: "@tech_addis", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tech" },
              { name: "Dev Ethiopia", handle: "@dev_ethio", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dev" },
            ].map((user) => (
              <div key={user.handle} className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-3">
                  <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="text-sm font-bold hover:underline">{user.name}</p>
                    <p className="text-xs text-muted">{user.handle}</p>
                  </div>
                </div>
                <button className="bg-white text-black text-xs font-black px-4 py-2 rounded-full hover:bg-white/90 transition-colors">
                  Follow
                </button>
              </div>
            ))}
          </div>
          <button className="text-primary text-sm font-bold hover:underline">Show more</button>
        </div>

        {/* Footer */}
        <footer className="px-4 text-[10px] text-muted space-x-4">
          <span className="hover:underline cursor-pointer">Terms of Service</span>
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
          <span className="hover:underline cursor-pointer">Cookie Policy</span>
          <p className="mt-2">© 2026 Nexus Social Inc.</p>
        </footer>
      </aside>
    </div>
  );
}
