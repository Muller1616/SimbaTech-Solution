import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Target, Lightbulb, Shield, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import TrustSection from '../sections/TrustSection';

const About = () => {
  return (
    <div className="pt-24 pb-12">
      {/* Hero & Who We Are */}
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full w-[80%] h-[80%] left-[10%] top-[10%] -z-10" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-surface border border-surfaceBorder rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium text-primary">Who We Are</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Pioneering <span className="text-gradient">Digital Excellence</span> in Africa & Beyond.
            </h1>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              SimbaTech is not just a software agency; we are your strategic technology partner. We bridge the gap between complex business challenges and elegant, scalable digital solutions. With a relentless focus on innovation, we empower enterprises to thrive in an ever-evolving digital landscape.
            </p>
            
            <div className="space-y-4 mb-8">
              {['Enterprise-grade Software Architecture', 'Unified Cloud & ERP Implementations', 'Agile & Transparent Delivery Model'].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center text-gray-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mr-3" />
                  {item}
                </motion.div>
              ))}
            </div>
            
            <button className="text-white font-medium flex items-center group">
              Learn about our history 
              <ArrowRight className="w-5 h-5 ml-2 text-primary group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 h-full">
              <Card hoverEffect={true} className="bg-gradient-to-br from-surface to-surface/40 flex flex-col justify-center items-center p-8 border-primary/20 text-center aspect-square">
                <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2">10+</div>
                <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">Years Exp</div>
              </Card>
              <Card hoverEffect={true} className="bg-gradient-to-br from-surface to-surface/40 flex flex-col justify-center items-center p-8 border-secondary/20 text-center aspect-square">
                <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2">50+</div>
                <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">Experts</div>
              </Card>
              <Card hoverEffect={true} className="bg-gradient-to-br from-surface to-surface/40 flex flex-col justify-center items-center p-8 border-green-500/20 text-center aspect-square">
                <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2">200+</div>
                <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">Projects</div>
              </Card>
              <Card hoverEffect={true} className="bg-gradient-to-br from-surface to-surface/40 flex flex-col justify-center items-center p-8 border-orange-500/20 text-center aspect-square">
                <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2">100%</div>
                <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">Satisfaction</div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission Statement */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <Card className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-surface to-secondary/10 border-surfaceBorder/50 p-10 md:p-16 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-secondary rounded-b-full"></div>
            <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-6">Our Mission</h2>
            <p className="text-2xl md:text-4xl font-medium text-white leading-relaxed">
              "To empower enterprises with cutting-edge, scalable technology solutions that create lasting impact and drive sustainable business growth across Africa."
            </p>
          </Card>
        </div>
      </section>

      {/* Partners Section (Infinite Marquee) */}
      <div className="mt-12 mb-20">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white">Our Partners & Ecosystem</h2>
        </div>
        <TrustSection />
      </div>

      {/* Values */}
      <section className="py-20 bg-[#050505] border-y border-surfaceBorder">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-gray-400">The principles that guide our innovation and partnerships.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Target className="w-8 h-8 text-primary" />, title: 'Mission-Driven', desc: 'Focusing on impactful outcomes for our clients.' },
              { icon: <Lightbulb className="w-8 h-8 text-yellow-500" />, title: 'Innovation', desc: 'Constantly exploring the boundaries of technology.' },
              { icon: <Shield className="w-8 h-8 text-green-500" />, title: 'Integrity', desc: 'Building trust through transparency and security.' },
              { icon: <Users className="w-8 h-8 text-purple-500" />, title: 'Collaboration', desc: 'Working together as an extension of your team.' }
            ].map((v, i) => (
              <Card key={i} className="text-center items-center">
                <div className="mb-6 bg-surface p-4 rounded-2xl border border-surfaceBorder inline-flex">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
                <p className="text-gray-400 text-sm">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Meet Our Leadership</h2>
            <p className="text-gray-400">The visionaries behind SimbaTech.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: 'Lily Mengistu', role: 'Chief Executive Officer', bg: 'bg-primary/20' },
              { name: 'Mike Johnson', role: 'Lead Developer', bg: 'bg-secondary/20' },
              { name: 'Sarah Wilson', role: 'UX Director', bg: 'bg-pink-500/20' },
              { name: 'David Brown', role: 'Project Manager', bg: 'bg-blue-400/20' }
            ].map((team, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className={`w-full aspect-square rounded-2xl mb-6 ${team.bg} border border-surfaceBorder flex items-center justify-center overflow-hidden`}>
                  {/* Placeholder for real portrait */}
                  <div className="w-32 h-32 opacity-20 group-hover:scale-110 transition-transform duration-500 mix-blend-overlay">
                    <Users className="w-full h-full text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">{team.name}</h3>
                <p className="text-primary text-sm font-medium">{team.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
