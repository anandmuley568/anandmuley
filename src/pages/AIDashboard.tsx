import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, BarChart3, Zap, Database } from 'lucide-react';

const AIDashboard = () => {
  const features = [
    { icon: Brain, title: 'ML Models', description: 'Custom trained neural networks' },
    { icon: BarChart3, title: 'Analytics', description: 'Real-time data visualization' },
    { icon: Zap, title: 'Predictions', description: 'Accurate forecasting algorithms' },
    { icon: Database, title: 'Big Data', description: 'Handle millions of data points' },
  ];

  const stats = [
    { value: '99.2%', label: 'Accuracy' },
    { value: '50ms', label: 'Response Time' },
    { value: '10M+', label: 'Data Points' },
    { value: '24/7', label: 'Monitoring' },
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
          <span className="text-xl font-bold">AI Dashboard</span>
        </div>
      </motion.header>

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-primary/20" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-mono text-sm mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              Machine Learning
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              AI <span className="text-gradient">Dashboard</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Real-time analytics dashboard powered by machine learning for 
              intelligent insights and predictive analysis.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Python', 'TensorFlow', 'React', 'D3.js', 'FastAPI'].map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground font-mono text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-mono text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
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
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center relative overflow-hidden">
              {/* Animated graph lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
                <motion.path
                  d="M0,150 Q50,100 100,120 T200,80 T300,100 T400,60"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.path
                  d="M0,180 Q50,150 100,160 T200,120 T300,140 T400,100"
                  stroke="hsl(var(--accent))"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
              </svg>
              <motion.div
                className="text-8xl relative z-10"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                🧠
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
            Core <span className="text-gradient">Capabilities</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6 text-center group hover:border-accent/50 transition-colors"
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <feature.icon className="text-accent" size={28} />
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

export default AIDashboard;
