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
  Hash,
  CheckCircle2,
  Calendar,
  Link as LinkIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const MOCK_USER = {
  name: "Biniyam Wegene",
  handle: "@benjamin_w_pixel",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Biniyam",
  bio: "4th Year Information Science student @ AAU | Full Stack Developer | Building Zemen AI 🧠 | Certified Software Engineer",
  location: "Addis Ababa, Ethiopia",
  joined: "May 2024",
  following: 142,
  followers: "1.2K"
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

const EXPLORE_ITEMS = [
  { id: 1, title: "Tech Addis 2026", category: "Technology", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600" },
  { id: 2, title: "Next.js 16 Launch", category: "Development", image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?auto=format&fit=crop&q=80&w=600" },
  { id: 3, title: "AI Revolution", category: "Artificial Intelligence", image: "https://images.unsplash.com/photo-1620712943543-bcc4628c9757?auto=format&fit=crop&q=80&w=600" },
  { id: 4, title: "AAU Campus Life", category: "University", image: "https://images.unsplash.com/photo-1541339907198-e08756eaa539?auto=format&fit=crop&q=80&w=600" },
];

const NOTIFICATIONS = [
  { id: 1, user: "Abel Tesfaye", type: "like", content: "liked your post about Zemen AI", time: "10m ago" },
  { id: 2, user: "Sara Solomon", type: "follow", content: "started following you", time: "1h ago" },
  { id: 3, user: "Dev Ethiopia", type: "mention", content: "mentioned you in a post", time: "3h ago" },
  { id: 4, user: "Prodigy InfoTech", type: "like", content: "liked your repository", time: "5h ago" },
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
    <div className="min-h-screen flex max-w-[1400px] mx-auto bg-black text-white">
      {/* Sidebar Navigation */}
      <aside className="hidden md:flex flex-col w-72 p-6 sticky top-0 h-screen border-r border-border">
        <div className="flex items-center gap-2 mb-10 px-2 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-gradient-social flex items-center justify-center shadow-lg shadow-primary/20">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-black tracking-tighter">NEXUS<span className="text-primary text-glow">SOCIAL</span></h1>
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

        <div className="mt-auto p-4 rounded-3xl glass-card flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors">
          <div className="flex items-center gap-3">
            <img src={MOCK_USER.avatar} alt="User" className="w-10 h-10 rounded-full border border-white/10" />
            <div className="hidden lg:block overflow-hidden">
              <p className="text-sm font-bold truncate">{MOCK_USER.name}</p>
              <p className="text-xs text-muted truncate">{MOCK_USER.handle}</p>
            </div>
          </div>
          <MoreHorizontal className="w-5 h-5 text-muted" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 border-r border-border bg-slate-950/20 pb-20 md:pb-0">
        <header className="sticky top-0 z-10 glass px-6 py-4 flex items-center justify-between border-b border-white/5">
          <h2 className="text-xl font-black uppercase tracking-widest">{activeTab}</h2>
          <Sparkles className="w-5 h-5 text-primary animate-pulse" />
        </header>

        <AnimatePresence mode="wait">
          {activeTab === "home" && (
            <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="p-6 border-b border-border bg-white/[0.01]">
                <div className="flex gap-4">
                  <img src={MOCK_USER.avatar} alt="User" className="w-12 h-12 rounded-full border border-white/10" />
                  <div className="flex-1 space-y-4">
                    <textarea 
                      placeholder="What's happening?"
                      className="w-full bg-transparent border-none text-xl focus:outline-none resize-none min-h-[100px] text-white"
                      value={postContent}
                      onChange={(e) => setPostContent(e.target.value)}
                    />
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex gap-2">
                        <button className="hover:bg-primary/10 p-2 rounded-xl transition-colors text-primary"><ImageIcon className="w-5 h-5" /></button>
                        <button className="hover:bg-primary/10 p-2 rounded-xl transition-colors text-primary"><Smile className="w-5 h-5" /></button>
                      </div>
                      <button 
                        onClick={handlePost}
                        disabled={!postContent.trim()}
                        className="bg-primary hover:bg-primary/90 disabled:opacity-50 text-white font-black px-8 py-2.5 rounded-full shadow-lg shadow-primary/20 transition-all active:scale-95"
                      >
                        Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-white/5">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} onLike={() => toggleLike(post.id)} />
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "search" && (
            <motion.div key="search" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-6 space-y-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                <input type="text" placeholder="Explore Tech" className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary/50" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {EXPLORE_ITEMS.map(item => (
                  <div key={item.id} className="relative aspect-[4/5] rounded-3xl overflow-hidden group cursor-pointer">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end">
                      <p className="text-[10px] font-bold text-primary">{item.category}</p>
                      <h4 className="font-black text-lg">{item.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "notifications" && (
            <motion.div key="notifications" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="divide-y divide-white/5">
              {NOTIFICATIONS.map(notif => (
                <div key={notif.id} className="p-6 flex gap-4 hover:bg-white/[0.02] transition-colors cursor-pointer">
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center",
                    notif.type === "like" ? "bg-pink-500/10 text-pink-500" : 
                    notif.type === "follow" ? "bg-primary/10 text-primary" : "bg-indigo-500/10 text-indigo-400"
                  )}>
                    {notif.type === "like" ? <Heart className="w-6 h-6 fill-current" /> : 
                     notif.type === "follow" ? <User className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
                  </div>
                  <div>
                    <p className="text-slate-200">
                      <span className="font-bold text-white">{notif.user}</span> {notif.content}
                    </p>
                    <p className="text-xs text-muted mt-1">{notif.time}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "messages" && (
            <motion.div key="messages" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-[calc(100vh-140px)] flex flex-col">
              <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
                {[
                  { id: 1, sender: "Abel Tesfaye", text: "Hey Biniyam! How is Zemen AI coming along?", time: "10:24 AM", mine: false },
                  { id: 2, sender: "You", text: "It's going great! Just integrated the local neural engine. 🚀", time: "10:25 AM", mine: true },
                  { id: 3, sender: "Abel Tesfaye", text: "That's huge. Let me know when the beta is out!", time: "10:26 AM", mine: false },
                ].map(msg => (
                  <div key={msg.id} className={cn("flex flex-col", msg.mine ? "items-end" : "items-start")}>
                    <div className={cn(
                      "max-w-[80%] p-4 rounded-2xl text-sm",
                      msg.mine ? "bg-primary text-white rounded-tr-none" : "bg-white/10 text-slate-200 rounded-tl-none"
                    )}>
                      {msg.text}
                    </div>
                    <span className="text-[10px] text-muted mt-1">{msg.time}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 glass m-4 rounded-3xl flex items-center gap-4">
                <input type="text" placeholder="Start a new message" className="flex-1 bg-transparent border-none focus:outline-none text-white px-2" />
                <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === "profile" && (
            <motion.div key="profile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="h-48 bg-gradient-social relative">
                <div className="absolute -bottom-16 left-6 p-1 bg-black rounded-full">
                  <img src={MOCK_USER.avatar} alt="Profile" className="w-32 h-32 rounded-full border-4 border-black shadow-2xl" />
                </div>
              </div>
              <div className="mt-20 px-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-black flex items-center gap-2">
                      {MOCK_USER.name} <CheckCircle2 className="w-5 h-5 text-primary fill-current" />
                    </h3>
                    <p className="text-muted">{MOCK_USER.handle}</p>
                  </div>
                  <button className="px-6 py-2 rounded-full border border-white/20 font-bold hover:bg-white/5 transition-all">Edit Profile</button>
                </div>
                <p className="text-slate-300 leading-relaxed">{MOCK_USER.bio}</p>
                <div className="flex gap-4 text-muted text-sm">
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {MOCK_USER.location}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Joined {MOCK_USER.joined}</span>
                </div>
                <div className="flex gap-6 pb-6 border-b border-white/5">
                  <p className="text-slate-300"><span className="font-black text-white">{MOCK_USER.following}</span> <span className="text-muted">Following</span></p>
                  <p className="text-slate-300"><span className="font-black text-white">{MOCK_USER.followers}</span> <span className="text-muted">Followers</span></p>
                </div>
                <div className="divide-y divide-white/5">
                  {posts.filter(p => p.user.handle === MOCK_USER.handle).map(post => (
                    <PostCard key={post.id} post={post} onLike={() => toggleLike(post.id)} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Right Sidebar (Desktop) */}
      <aside className="hidden lg:flex flex-col w-96 p-6 space-y-8 sticky top-0 h-screen overflow-y-auto scrollbar-hide border-l border-border">
        {/* Share Platform */}
        <div className="glass-card rounded-[2rem] p-8 border border-white/5 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden group">
          <div className="relative z-10 space-y-4">
            <h3 className="text-xl font-black text-white">Invite Friends</h3>
            <p className="text-xs text-slate-300 leading-relaxed">Share Nexus Social with your fellow developers.</p>
            <button 
              onClick={() => {
                navigator.clipboard.writeText("https://nexus-social.app/invite");
                alert("Invite link copied to clipboard!");
              }}
              className="w-full bg-white text-black font-black py-3 rounded-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              Copy Invite Link
            </button>
          </div>
          <Sparkles className="absolute -right-4 -bottom-4 w-24 h-24 text-white/5 group-hover:text-white/10 transition-colors rotate-12" />
        </div>

        <div className="glass-card rounded-[2rem] p-6 space-y-6 bg-white/[0.01]">
          <h3 className="text-xl font-black flex items-center gap-2"><TrendingUp className="w-5 h-5 text-primary" /> Trends</h3>
          {["EthiopianTech", "AAU_CS", "NextJS16", "WebDev"].map(tag => (
            <div key={tag} className="cursor-pointer group">
              <p className="font-bold group-hover:text-primary">#{tag}</p>
              <p className="text-xs text-muted">1.2K Posts</p>
            </div>
          ))}
        </div>

        <footer className="px-4 text-[10px] text-muted space-x-4">
          <span className="hover:underline cursor-pointer">Terms</span>
          <span className="hover:underline cursor-pointer">Privacy</span>
          <p className="mt-2">© 2026 Nexus Social Inc.</p>
        </footer>
      </aside>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 glass border-t border-white/10 px-6 py-3 flex items-center justify-between z-50">
        {navItems.map((item) => (
          <button key={item.id} onClick={() => setActiveTab(item.id)} className={cn("p-2 transition-all", activeTab === item.id ? "text-primary scale-125" : "text-muted")}>
            <item.icon className="w-6 h-6" />
          </button>
        ))}
      </nav>
    </div>
  );
}

function PostCard({ post, onLike }: { post: any, onLike: () => void }) {
  return (
    <article className="p-6 hover:bg-white/[0.02] transition-colors">
      <div className="flex gap-4">
        <img src={post.user.avatar} alt={post.user.name} className="w-12 h-12 rounded-full" />
        <div className="flex-1 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-bold hover:underline">{post.user.name}</span>
              <span className="text-muted text-xs">• {post.time}</span>
            </div>
            <MoreHorizontal className="w-5 h-5 text-muted" />
          </div>
          <p className="text-slate-200">{post.content}</p>
          {post.image && <img src={post.image} className="rounded-3xl border border-white/5 w-full object-cover max-h-96" />}
          <div className="flex gap-8 pt-4">
            <button onClick={onLike} className={cn("flex items-center gap-2 group transition-colors", post.isLiked ? "text-pink-500" : "text-muted hover:text-pink-500")}>
              <Heart className={cn("w-5 h-5", post.isLiked && "fill-current")} />
              <span className="text-xs">{post.likes}</span>
            </button>
            <button className="flex items-center gap-2 text-muted hover:text-primary"><MessageCircle className="w-5 h-5" /><span className="text-xs">{post.comments}</span></button>
            <button className="text-muted hover:text-indigo-400"><Share2 className="w-5 h-5" /></button>
          </div>
        </div>
      </div>
    </article>
  );
}
