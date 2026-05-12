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

const INITIAL_POSTS = [
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
    isLiked: false,
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
    isLiked: true,
    comments: 12,
    time: "5h ago"
  }
];

const STORIES = [
  { id: 1, name: "Your Story", avatar: MOCK_USER.avatar, mine: true },
  { id: 2, name: "Alex", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" },
  { id: 3, name: "Hanna", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hanna" },
  { id: 4, name: "Yonas", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yonas" },
  { id: 5, name: "Maya", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maya" },
];

export default function SocialPlatform() {
  const [activeTab, setActiveTab] = useState("home");
  const [postContent, setPostContent] = useState("");
  const [posts, setPosts] = useState(INITIAL_POSTS);

  const handlePost = () => {
    if (!postContent.trim()) return;
    const newPost = {
      id: Date.now(),
      user: MOCK_USER,
      content: postContent,
      likes: 0,
      isLiked: false,
      comments: 0,
      time: "Just now"
    };
    setPosts([newPost, ...posts]);
    setPostContent("");
  };

  const toggleLike = (postId: number) => {
    setPosts(posts.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          likes: p.isLiked ? p.likes - 1 : p.likes + 1,
          isLiked: !p.isLiked
        };
      }
      return p;
    }));
  };

  const navItems = [
    { id: "home", icon: Home, label: "Feed" },
    { id: "search", icon: Search, label: "Explore" },
    { id: "notifications", icon: Bell, label: "Notifications", badge: 3 },
    { id: "messages", icon: Mail, label: "Messages" },
    { id: "profile", icon: User, label: "Profile" },
  ];

  return (
    <div className="min-h-screen flex max-w-[1400px] mx-auto bg-black">
      {/* Sidebar Navigation (Desktop) */}
      <aside className="hidden md:flex flex-col w-72 p-6 sticky top-0 h-screen border-r border-border">
        <div className="flex items-center gap-2 mb-10 px-2 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-gradient-social flex items-center justify-center shadow-lg shadow-primary/20">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-black tracking-tighter text-white">NEXUS<span className="text-primary">SOCIAL</span></h1>
        </div>

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
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
              <p className="text-sm font-bold truncate text-white">{MOCK_USER.name}</p>
              <p className="text-xs text-muted truncate">{MOCK_USER.handle}</p>
            </div>
          </div>
          <button className="text-muted hover:text-white">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 border-r border-border bg-slate-950/20 pb-20 md:pb-0">
        <header className="sticky top-0 z-10 glass px-6 py-4 flex items-center justify-between border-b border-white/5">
          <h2 className="text-xl font-black uppercase tracking-widest text-white">{activeTab}</h2>
          <div className="flex items-center gap-4">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
          </div>
        </header>

        <AnimatePresence mode="wait">
          {activeTab === "home" ? (
            <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {/* Stories */}
              <div className="p-6 flex gap-4 overflow-x-auto scrollbar-hide border-b border-white/5">
                {STORIES.map((story) => (
                  <div key={story.id} className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer group">
                    <div className={cn(
                      "w-16 h-16 rounded-full p-1 transition-all group-hover:scale-110",
                      story.mine ? "bg-white/10" : "bg-gradient-social p-[2px]"
                    )}>
                      <div className="w-full h-full rounded-full border-2 border-black overflow-hidden">
                        <img src={story.avatar} alt={story.name} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-muted truncate w-16 text-center">{story.name}</span>
                  </div>
                ))}
              </div>

              {/* Create Post */}
              <div className="p-6 border-b border-border bg-white/[0.01]">
                <div className="flex gap-4">
                  <img src={MOCK_USER.avatar} alt="User" className="w-12 h-12 rounded-full border border-white/10 shadow-xl" />
                  <div className="flex-1 space-y-4">
                    <textarea 
                      placeholder="What's happening in your tech world?"
                      className="w-full bg-transparent border-none text-xl focus:outline-none resize-none min-h-[100px] text-white placeholder:text-muted/50"
                      value={postContent}
                      onChange={(e) => setPostContent(e.target.value)}
                    />
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex gap-2">
                        {[ImageIcon, Smile, MapPin].map((Icon, i) => (
                          <button key={i} className="hover:bg-primary/10 p-2 rounded-xl transition-colors text-primary">
                            <Icon className="w-5 h-5" />
                          </button>
                        ))}
                      </div>
                      <button 
                        onClick={handlePost}
                        disabled={!postContent.trim()}
                        className="bg-primary hover:bg-primary/90 disabled:opacity-50 text-white font-black px-8 py-2.5 rounded-full transition-all flex items-center gap-2 shadow-lg shadow-primary/20 active:scale-95"
                      >
                        <Send className="w-4 h-4" />
                        Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feed */}
              <div className="divide-y divide-white/5">
                {posts.map((post) => (
                  <motion.article 
                    key={post.id} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="flex gap-4">
                      <img src={post.user.avatar} alt={post.user.name} className="w-12 h-12 rounded-full" />
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white hover:underline cursor-pointer">{post.user.name}</span>
                            <span className="text-sm text-muted">{post.user.handle}</span>
                            <span className="text-muted text-xs">• {post.time}</span>
                          </div>
                          <button className="text-muted hover:text-white"><MoreHorizontal className="w-5 h-5" /></button>
                        </div>
                        <p className="text-lg leading-relaxed text-slate-200">{post.content}</p>
                        {post.image && (
                          <div className="rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
                            <img src={post.image} alt="Post" className="w-full object-cover max-h-[500px]" />
                          </div>
                        )}
                        <div className="flex items-center justify-between pt-4 max-w-sm">
                          <button className="flex items-center gap-2 group text-muted hover:text-primary transition-colors">
                            <div className="p-2 rounded-full group-hover:bg-primary/10"><MessageCircle className="w-5 h-5" /></div>
                            <span className="text-xs font-bold">{post.comments}</span>
                          </button>
                          <button 
                            onClick={() => toggleLike(post.id)}
                            className={cn(
                              "flex items-center gap-2 group transition-colors",
                              post.isLiked ? "text-pink-500" : "text-muted hover:text-pink-500"
                            )}
                          >
                            <div className={cn("p-2 rounded-full", post.isLiked ? "bg-pink-500/10" : "group-hover:bg-pink-500/10")}>
                              <Heart className={cn("w-5 h-5", post.isLiked && "fill-current")} />
                            </div>
                            <span className="text-xs font-bold">{post.likes}</span>
                          </button>
                          <button className="p-2 rounded-full text-muted hover:bg-indigo-500/10 hover:text-indigo-400 transition-all">
                            <Share2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="empty" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center h-[70vh] text-center p-10">
              <div className="w-24 h-24 rounded-full bg-primary/5 flex items-center justify-center mb-6 relative">
                <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping" />
                <Sparkles className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-black mb-2 text-white">Section Under Construction</h3>
              <p className="text-muted max-w-xs text-sm">We are refining the {activeTab} experience to meet Nexus standards.</p>
              <button onClick={() => setActiveTab("home")} className="mt-8 bg-white/5 hover:bg-white/10 text-white font-bold px-8 py-3 rounded-2xl transition-all">
                Go Back to Feed
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Right Sidebar (Desktop) */}
      <aside className="hidden lg:flex flex-col w-96 p-6 space-y-8 sticky top-0 h-screen overflow-y-auto scrollbar-hide border-l border-border">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted group-focus-within:text-primary" />
          <input type="text" placeholder="Search Nexus" className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary/50 text-white" />
        </div>

        <div className="glass-card rounded-[2rem] p-6 border border-white/5 bg-white/[0.01]">
          <h3 className="text-xl font-black mb-6 flex items-center gap-2 text-white"><TrendingUp className="w-5 h-5 text-primary" />Trends</h3>
          <div className="space-y-6">
            {["EthiopianTech", "ZemenAI", "NextJS15", "ProdigyIntern"].map(tag => (
              <div key={tag} className="cursor-pointer group">
                <p className="text-[10px] text-muted">Trending in Ethiopia</p>
                <p className="font-bold text-white group-hover:text-primary transition-colors">#{tag}</p>
                <p className="text-[10px] text-muted">12.5K Posts</p>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Mobile Navigation (Bottom) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 glass border-t border-white/10 px-6 py-3 flex items-center justify-between z-50">
        {navItems.map((item) => (
          <button 
            key={item.id} 
            onClick={() => setActiveTab(item.id)}
            className={cn("p-2 transition-all", activeTab === item.id ? "text-primary scale-125" : "text-muted")}
          >
            <item.icon className="w-6 h-6" />
          </button>
        ))}
      </nav>
    </div>
  );
}
