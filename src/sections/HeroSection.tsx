
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { ArrowRight, Code2 } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <div className="inline-flex items-center space-x-2 bg-surface border border-surfaceBorder rounded-full px-4 py-2 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            {/* <span className="text-sm font-medium text-gray-300">SimbaTech SaaS Platform 2.0</span> */}
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Welcome to <br />
            <span className="text-gradient">Simba Tech</span> Innovation & Excellence
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
            We architect and build enterprise-grade software, unified ERP solutions, and scalable network infrastructure to power your digital future.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" size="lg">
              Explore Services
            </Button>
          </div>

          <div className="mt-12 flex items-center space-x-8 text-sm text-gray-500 font-medium">
            <div className="flex items-center">
              <Code2 className="w-5 h-5 mr-2 text-primary" />
              Custom Solutions
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 mr-2 flex items-center justify-center text-secondary font-bold">ERP</div>
              Unified Systems
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Abstract 3D/Dashboard Mockup placeholder */}
          <div className="relative w-full aspect-square max-h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-3xl border border-surfaceBorder glass flex items-center justify-center overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-12 border-b border-surfaceBorder/50 flex items-center px-4 space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="p-8 w-full h-full pt-20 flex flex-col gap-4">
                <div className="flex gap-4 h-1/3">
                  <div className="w-1/3 rounded-xl bg-surface/50 border border-surfaceBorder/50 animate-pulse"></div>
                  <div className="w-2/3 rounded-xl bg-surface/50 border border-surfaceBorder/50"></div>
                </div>
                <div className="w-full h-1/2 rounded-xl bg-surface/50 border border-surfaceBorder/50 relative overflow-hidden flex items-end">
                  <div className="w-full h-[70%] bg-gradient-to-t from-primary/20 to-transparent"></div>
                  {/* Decorative bar chart */}
                  <div className="absolute bottom-0 left-0 w-full h-full flex items-end px-8 gap-4 pb-8">
                    {[40, 70, 45, 90, 65, 100].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                        className="flex-1 bg-gradient-to-t from-primary to-secondary rounded-t-sm opacity-80"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating element */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 glass-card p-4 border-l-4 border-l-secondary"
            >
              <div className="text-sm text-gray-400 mb-1">System Efficiency</div>
              <div className="text-2xl font-bold text-white">99.9%</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
