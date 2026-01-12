import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, Film, Sparkles, TrendingUp } from 'lucide-react';

const InstaReelPlatform = () => {
  const features = [
    { icon: Play, title: 'Infinite Scroll', description: 'Seamless vertical video feed' },
    { icon: Film, title: 'Video Editor', description: 'Built-in editing tools & filters' },
    { icon: Sparkles, title: 'AR Effects', description: 'Augmented reality face filters' },
    { icon: TrendingUp, title: 'Trending', description: 'Discover viral content' },
  ];

  const mockReels = [
    { gradient: 'from-pink-500 to-rose-500', views: '2.5M' },
    { gradient: 'from-purple-500 to-indigo-500', views: '1.8M' },
    { gradient: 'from-cyan-500 to-blue-500', views: '3.2M' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft size={20} />
            <span className="font-mono">Back to Portfolio</span>
          </Link>
          <span className="text-xl font-bold">Insta Reel Platform</span>
        </div>
      </motion.header>

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-background to-purple-500/20" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              className="inline-block px-4 py-2 rounded-full bg-pink-500/20 text-pink-400 font-mono text-sm mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              Short-Form Video
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Insta Reel <span className="text-gradient">Platform</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A TikTok-style short video platform with AR filters, music integration, 
              and viral content discovery algorithms.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['React Native', 'FFmpeg', 'WebRTC', 'AWS', 'TensorFlow'].map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground font-mono text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mock Reels */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex justify-center gap-4 flex-wrap">
            {mockReels.map((reel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div 
                  className={`w-48 h-80 rounded-3xl bg-gradient-to-br ${reel.gradient} flex items-center justify-center cursor-pointer`}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play className="text-white ml-1" size={32} fill="white" />
                  </motion.div>
                </div>
                <div className="absolute bottom-4 left-4 text-white font-bold">
                  {reel.views} views
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Phone Mockup */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Phone frame */}
              <div className="w-72 h-[600px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800">
                <div className="w-full h-full bg-gradient-to-br from-pink-500/30 via-purple-500/30 to-blue-500/30 rounded-[2.5rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl" />
                  
                  {/* Content */}
                  <div className="h-full flex flex-col items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-6xl mb-4"
                    >
                      🎬
                    </motion.div>
                    <p className="text-white font-bold">Swipe Up</p>
                  </div>

                  {/* Bottom bar */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-white rounded-full" />
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -right-8 top-20 text-4xl"
                animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ❤️
              </motion.div>
              <motion.div
                className="absolute -left-8 top-40 text-4xl"
                animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                💬
              </motion.div>
              <motion.div
                className="absolute -right-12 bottom-40 text-4xl"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🔥
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Platform <span className="text-gradient">Features</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6 text-center group hover:border-pink-500/50 transition-colors"
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-pink-500/20 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <feature.icon className="text-pink-400" size={28} />
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <Link to="/" className="text-primary hover:text-primary/80 transition-colors font-mono">
            ← Back to Portfolio
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default InstaReelPlatform;
