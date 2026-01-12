import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, CreditCard, Package, Users } from 'lucide-react';

const EcommercePlatform = () => {
  const features = [
    { icon: ShoppingCart, title: 'Smart Cart', description: 'AI-powered cart recommendations' },
    { icon: CreditCard, title: 'Secure Payments', description: 'Multiple payment gateway integration' },
    { icon: Package, title: 'Order Tracking', description: 'Real-time shipment tracking' },
    { icon: Users, title: 'User Management', description: 'Advanced customer analytics' },
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
          <span className="text-xl font-bold">E-Commerce Platform</span>
        </div>
      </motion.header>

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary font-mono text-sm mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              Full-Stack Solution
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              E-Commerce <span className="text-gradient">Platform</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A complete e-commerce solution with payment integration, inventory management, 
              and real-time analytics dashboard.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'].map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground font-mono text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 max-w-5xl mx-auto"
          >
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
              <motion.div
                className="text-8xl"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🛒
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
            Key <span className="text-gradient">Features</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6 text-center group hover:border-primary/50 transition-colors"
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <feature.icon className="text-primary" size={28} />
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

export default EcommercePlatform;
