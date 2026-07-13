import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Globe, Smartphone, Database, Cloud, Cpu, Network, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceData = [
  { 
    id: 'web-development', 
    title: 'Web Development', 
    desc: 'We craft modern, responsive web experiences that connect users, elevate brands, and drive digital growth. Built on high-performance SPA architectures for maximum speed and SEO visibility.', 
    features: ['React & Next.js Ecosystems', 'Headless CMS Integration', 'Edge Network Deployment'],
    icon: <Globe className="w-6 h-6 text-primary" />,
    imageGradient: 'from-blue-600/20 to-blue-900/40',
    imageIcon: <Globe className="w-32 h-32 text-primary opacity-50" />
  },
  { 
    id: 'mobile-apps', 
    title: 'Mobile Applications', 
    desc: 'Native and cross-platform apps for iOS and Android. We build fluid, fast, and highly secure mobile experiences designed for maximum user engagement and retention.', 
    features: ['React Native & Swift', 'Offline-first Architecture', 'Biometric Security Integration'],
    icon: <Smartphone className="w-6 h-6 text-secondary" />,
    imageGradient: 'from-purple-600/20 to-purple-900/40',
    imageIcon: <Smartphone className="w-32 h-32 text-secondary opacity-50" />
  },
  { 
    id: 'erp-solutions', 
    title: 'Enterprise Resource Planning (ERP)', 
    desc: 'Unified, scalable ERP implementations designed to automate core business workflows across finance, HR, inventory management, and customer relations.', 
    features: ['Odoo Implementation', 'Custom Module Development', 'Legacy Data Migration'],
    icon: <Database className="w-6 h-6 text-green-500" />,
    imageGradient: 'from-green-600/20 to-emerald-900/40',
    imageIcon: <Database className="w-32 h-32 text-green-500 opacity-50" />
  },
  { 
    id: 'cloud-infrastructure', 
    title: 'Cloud & DevOps', 
    desc: 'Secure and scalable cloud deployment, AWS/Azure migration, and ongoing DevOps consulting for 99.9% uptime guarantees and optimized operational costs.', 
    features: ['AWS / Azure / GCP', 'Kubernetes & Docker', 'CI/CD Pipeline Automation'],
    icon: <Cloud className="w-6 h-6 text-cyan-400" />,
    imageGradient: 'from-cyan-600/20 to-blue-900/40',
    imageIcon: <Cloud className="w-32 h-32 text-cyan-400 opacity-50" />
  },
  { 
    id: 'api-integration', 
    title: 'System & API Integration', 
    desc: 'Seamlessly connect disparate third-party tools, legacy systems, and modern SaaS products into a unified, secure, and highly efficient data ecosystem.', 
    features: ['REST & GraphQL APIs', 'Microservices Architecture', 'Real-time Data Sync'],
    icon: <Cpu className="w-6 h-6 text-pink-500" />,
    imageGradient: 'from-pink-600/20 to-purple-900/40',
    imageIcon: <Cpu className="w-32 h-32 text-pink-500 opacity-50" />
  },
  { 
    id: 'network-design', 
    title: 'Network Infrastructure', 
    desc: 'Enterprise-grade structured cabling, robust firewalls, and optimized wireless network setups for businesses of all sizes requiring zero-trust security.', 
    features: ['Zero-Trust Security', 'SD-WAN Implementation', '24/7 Network Monitoring'],
    icon: <Network className="w-6 h-6 text-orange-500" />,
    imageGradient: 'from-orange-600/20 to-red-900/40',
    imageIcon: <Network className="w-32 h-32 text-orange-500 opacity-50" />
  }
];

const Services = () => {
  return (
    <div className="pt-24 pb-12 bg-background">
      {/* Hero Header */}
      <section className="px-6 py-20 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-primary/5 blur-[120px] rounded-full -z-10" />
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
          Enterprise <span className="text-gradient">Capabilities</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-12">
          End-to-end technology solutions engineered to solve complex business challenges and accelerate your digital transformation at global scale.
        </p>
      </section>

      {/* Services List - Alternating Layout */}
      <section className="max-w-7xl mx-auto px-6 pb-24 space-y-24 md:space-y-32">
        {serviceData.map((svc, i) => (
          <div key={svc.id} className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 space-y-6"
            >
              <div className="w-12 h-12 rounded-xl bg-surface border border-surfaceBorder flex items-center justify-center shadow-lg">
                {svc.icon}
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white">{svc.title}</h2>
              <p className="text-gray-400 text-lg leading-relaxed">{svc.desc}</p>
              
              <div className="pt-4 space-y-3">
                {svc.features.map((feat, j) => (
                  <div key={j} className="flex items-center text-gray-300 font-medium">
                    <CheckCircle2 className="w-5 h-5 mr-3 text-primary" />
                    {feat}
                  </div>
                ))}
              </div>
              
              <div className="pt-6">
                <Link to={`/services/${svc.id}`}>
                  <Button variant="outline" className="group">
                    Explore Capability
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Image Placeholder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className={`relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-surfaceBorder/50 bg-gradient-to-br ${svc.imageGradient} group cursor-pointer`}>
                {/* Glass UI Overlay to make it look like software */}
                <div className="absolute inset-4 md:inset-8 rounded-2xl bg-surface/30 backdrop-blur-md border border-white/10 flex flex-col overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  {/* Fake Mac Window Header */}
                  <div className="h-10 border-b border-white/10 bg-black/20 flex items-center px-4 space-x-2 w-full">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  {/* Central Icon / Visual */}
                  <div className="flex-1 flex items-center justify-center relative overflow-hidden">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 4 + i, ease: "easeInOut" }}
                    >
                      {svc.imageIcon}
                    </motion.div>
                    
                    {/* Decorative abstract elements */}
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background/80 to-transparent"></div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        ))}
      </section>
      
      {/* Bottom CTA */}
      <section className="py-20 border-t border-surfaceBorder bg-surface/20 text-center px-6">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to upgrade your infrastructure?</h2>
        <Link to="/contact">
          <Button size="lg" className="shadow-[0_0_30px_rgba(59,130,246,0.3)]">
            Schedule a Technical Consultation
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default Services;
