import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { 
  ArrowLeft, Globe, Smartphone, Database, Cloud, Cpu, Network, 
  Zap, ShieldCheck, BarChart3, Settings, Users 
} from 'lucide-react';

// Extended database for individual service detail pages
const serviceDetailsDatabase: Record<string, any> = {
  'web-development': {
    title: 'Enterprise Web Development',
    tagline: 'High-performance web applications built for scale and speed.',
    heroGradient: 'from-blue-900/40 via-background to-background',
    icon: <Globe className="w-12 h-12 text-blue-500" />,
    accent: 'text-blue-500',
    description: 'We do not just build websites; we engineer digital platforms. Leveraging the React and Next.js ecosystems, we create SPA (Single Page Applications) and headless architectures that are lightning-fast, highly secure, and optimized for search engines.',
    benefits: [
      { icon: <Zap />, title: 'Lightning Fast', desc: 'Sub-second load times utilizing edge computing and CDN distribution.' },
      { icon: <BarChart3 />, title: 'SEO Optimized', desc: 'Server-side rendering (SSR) ensures full visibility to search engines.' },
      { icon: <ShieldCheck />, title: 'Enterprise Security', desc: 'Built-in protection against DDoS, XSS, and injection attacks.' },
      { icon: <Settings />, title: 'Headless CMS', desc: 'Decoupled architecture allowing easy content management without breaking code.' }
    ]
  },
  'mobile-apps': {
    title: 'Next-Gen Mobile Applications',
    tagline: 'Native and Cross-Platform experiences that users love.',
    heroGradient: 'from-purple-900/40 via-background to-background',
    icon: <Smartphone className="w-12 h-12 text-purple-500" />,
    accent: 'text-purple-500',
    description: 'From intuitive consumer apps to robust internal business tools, our mobile development team builds applications that run flawlessly on both iOS and Android. We utilize React Native and Swift to deliver native-like performance with fluid animations.',
    benefits: [
      { icon: <Zap />, title: 'Fluid Performance', desc: 'Optimized rendering reaching 60 FPS for seamless user interactions.' },
      { icon: <ShieldCheck />, title: 'Biometric Security', desc: 'Integrate FaceID, TouchID, and enterprise-grade encryption natively.' },
      { icon: <Cloud />, title: 'Offline-First', desc: 'Robust local caching ensures the app works perfectly even without internet.' },
      { icon: <Users />, title: 'User-Centric UI', desc: 'Designed strictly following Apple Human Interface and Material Design guidelines.' }
    ]
  },
  'erp-solutions': {
    title: 'Unified ERP Solutions',
    tagline: 'Automate workflows and eliminate data silos permanently.',
    heroGradient: 'from-green-900/40 via-background to-background',
    icon: <Database className="w-12 h-12 text-green-500" />,
    accent: 'text-green-500',
    description: 'Transform your organization with a unified Enterprise Resource Planning system. We specialize in customizing and deploying Odoo ERP, tailored exactly to your unique workflows—spanning finance, HR, inventory, and CRM in one single pane of glass.',
    benefits: [
      { icon: <Settings />, title: 'Custom Modules', desc: 'We build tailored workflows that map exactly to your business logic.' },
      { icon: <BarChart3 />, title: 'Real-time Analytics', desc: 'Generate complex reports instantly from live, synchronized data.' },
      { icon: <Network />, title: 'Unified Ecosystem', desc: 'Say goodbye to fragmented tools. Everything happens in one system.' },
      { icon: <ShieldCheck />, title: 'Role-based Access', desc: 'Granular security controls ensuring staff only see what they need to see.' }
    ]
  },
  'cloud-infrastructure': {
    title: 'Cloud & DevOps Architecture',
    tagline: 'Scalable, secure, and resilient infrastructure for modern apps.',
    heroGradient: 'from-cyan-900/40 via-background to-background',
    icon: <Cloud className="w-12 h-12 text-cyan-400" />,
    accent: 'text-cyan-400',
    description: 'Modern businesses require infrastructure that scales automatically and never goes down. We design, deploy, and manage enterprise cloud environments across AWS, Azure, and Google Cloud, fully automated via modern DevOps pipelines.',
    benefits: [
      { icon: <Zap />, title: 'Auto-Scaling', desc: 'Infrastructure that grows instantly during traffic spikes and shrinks to save costs.' },
      { icon: <Settings />, title: 'CI/CD Pipelines', desc: 'Automated testing and deployment workflows for rapid feature releases.' },
      { icon: <ShieldCheck />, title: 'Disaster Recovery', desc: 'Automated multi-region backups ensuring 99.99% data durability.' },
      { icon: <Database />, title: 'Containerization', desc: 'Docker and Kubernetes implementation for ultimate environment consistency.' }
    ]
  },
  'api-integration': {
    title: 'System & API Integration',
    tagline: 'Connecting your digital ecosystem into a cohesive machine.',
    heroGradient: 'from-pink-900/40 via-background to-background',
    icon: <Cpu className="w-12 h-12 text-pink-500" />,
    accent: 'text-pink-500',
    description: 'Stop doing manual data entry between disconnected software. We build robust, secure middleware and API bridges that allow your legacy systems, third-party SaaS products, and custom applications to communicate in real-time.',
    benefits: [
      { icon: <Network />, title: 'Real-time Sync', desc: 'Bidirectional data synchronization across all your platforms instantly.' },
      { icon: <ShieldCheck />, title: 'Secure Tunnels', desc: 'Encrypted payloads and OAuth2 implementations for safe data transfer.' },
      { icon: <Settings />, title: 'GraphQL & REST', desc: 'Modern architecture utilizing the best protocols for data fetching.' },
      { icon: <BarChart3 />, title: 'Monitoring', desc: 'Deep logging and alerts if an API endpoint fails or drops packets.' }
    ]
  },
  'network-design': {
    title: 'Enterprise Network Infrastructure',
    tagline: 'The reliable physical backbone of your digital operations.',
    heroGradient: 'from-orange-900/40 via-background to-background',
    icon: <Network className="w-12 h-12 text-orange-500" />,
    accent: 'text-orange-500',
    description: 'A brilliant software strategy fails without a reliable physical network. We provide end-to-end network design, from structured fiber cabling to the configuration of robust enterprise firewalls and campus-wide high-speed wireless networks.',
    benefits: [
      { icon: <ShieldCheck />, title: 'Zero-Trust Architecture', desc: 'Implicit deny policies and micro-segmentation to isolate threats.' },
      { icon: <Zap />, title: 'High-Speed Core', desc: '10G/40G backbone deployments to eliminate network bottlenecks.' },
      { icon: <Network />, title: 'SD-WAN', desc: 'Software-defined networking across multiple physical branches for unified control.' },
      { icon: <Settings />, title: 'Proactive Support', desc: '24/7 monitoring of network health and automatic failover systems.' }
    ]
  }
};

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);
    if (id && serviceDetailsDatabase[id]) {
      setData(serviceDetailsDatabase[id]);
    } else {
      // Handle 404 or redirect
      navigate('/services');
    }
  }, [id, navigate]);

  if (!data) return null;

  return (
    <div className={`pt-24 pb-12 min-h-screen bg-gradient-to-b ${data.heroGradient}`}>
      
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-gray-400 hover:text-white transition-colors group bg-surface/50 border border-surfaceBorder px-4 py-2 rounded-full backdrop-blur-sm w-fit"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </button>
      </div>

      {/* Hero Section */}
      <section className="px-6 py-12 md:py-20 text-center max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="p-4 bg-surface/80 border border-surfaceBorder rounded-2xl shadow-2xl backdrop-blur-md">
            {data.icon}
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
        >
          {data.title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-xl font-medium mb-8 ${data.accent}`}
        >
          {data.tagline}
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-400 text-lg md:text-xl leading-relaxed"
        >
          {data.description}
        </motion.p>
      </section>

      {/* Interactive Architecture / Mockup */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden border border-surfaceBorder relative group"
        >
           {/* Abstract Tech Background */}
           <div className="absolute inset-0 bg-[#050505] overflow-hidden">
             {/* Animated Grid */}
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
             
             {/* Floating elements inside mockup */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                  className="w-96 h-96 border border-white/5 rounded-full flex items-center justify-center absolute"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                  className="w-64 h-64 border border-white/10 rounded-full border-dashed flex items-center justify-center absolute"
                />
                <div className="p-8 bg-surface/50 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl z-10 flex flex-col items-center">
                   {React.cloneElement(data.icon, { className: `w-20 h-20 mb-4 ${data.accent}` })}
                   <h3 className="text-white font-bold text-xl">System Architecture</h3>
                   <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent mt-4 rounded-full"></div>
                </div>
             </div>
           </div>
        </motion.div>
      </section>

      {/* Bento Grid Features */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Capabilities</h2>
          <p className="text-gray-400">Why leading enterprises choose SimbaTech for {data.title.toLowerCase()}.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.benefits.map((benefit: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hoverEffect={true} className="h-full bg-surface/30 border-surfaceBorder p-8 flex flex-col group">
                <div className={`w-12 h-12 rounded-xl bg-background border border-surfaceBorder flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${data.accent}`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-20 text-center">
        <Card className="bg-gradient-to-br from-surface to-background border-primary/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to implement {data.title}?</h2>
          <p className="text-gray-400 mb-8">Let's discuss your technical requirements and define a roadmap for success.</p>
          <Link to="/contact">
            <Button size="lg" className="w-full sm:w-auto px-12">
              Book a Consultation
            </Button>
          </Link>
        </Card>
      </section>

    </div>
  );
};

export default ServiceDetail;
