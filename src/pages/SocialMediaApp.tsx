import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Heart, Share2, Bell } from 'lucide-react';

const SocialMediaApp = () => {
  const features = [
    { icon: MessageCircle, title: 'Real-time Chat', description: 'Instant messaging with WebSockets' },
    { icon: Heart, title: 'Engagement', description: 'Likes, comments, and reactions' },
    { icon: Share2, title: 'Sharing', description: 'Cross-platform content sharing' },
    { icon: Bell, title: 'Notifications', description: 'Push notifications system' },
  ];

  const mockPosts = [
    { user: 'Alex', content: 'Just launched my new project! 🚀', likes: 234, time: '2h' },
    { user: 'Sarah', content: 'Working on something exciting...', likes: 156, time: '4h' },
    { user: 'Mike', content: 'Coffee and code ☕💻', likes: 89, time: '6h' },
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
          <span className="text-xl font-bold">Social Media App</span>
        </div>
      </motion.header>

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-background to-primary/20" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              className="inline-block px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-400 font-mono text-sm mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              Mobile-First
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Social Media <span className="text-gradient">App</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A mobile-first social platform featuring real-time messaging, 
              stories, and an engaging feed algorithm.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['React Native', 'Firebase', 'Redux', 'Socket.io', 'Expo'].map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground font-mono text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mock Feed */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto space-y-4">
            {mockPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent" />
                  <div>
                    <div className="font-bold">{post.user}</div>
                    <div className="text-sm text-muted-foreground">{post.time} ago</div>
                  </div>
                </div>
                <p className="mb-4">{post.content}</p>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <motion.button 
                    className="flex items-center gap-1 hover:text-red-400 transition-colors"
                    whileTap={{ scale: 1.2 }}
                  >
                    <Heart size={18} /> {post.likes}
                  </motion.button>
                  <button className="flex items-center gap-1 hover:text-primary transition-colors">
                    <MessageCircle size={18} /> Reply
                  </button>
                  <button className="flex items-center gap-1 hover:text-primary transition-colors">
                    <Share2 size={18} /> Share
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
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
                className="glass-card rounded-2xl p-6 text-center group hover:border-yellow-500/50 transition-colors"
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <feature.icon className="text-yellow-400" size={28} />
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

export default SocialMediaApp;
