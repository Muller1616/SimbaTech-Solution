import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building2, Users, ShoppingCart, GraduationCap, 
  Stethoscope, Briefcase, ArrowRight, CheckCircle2 
} from 'lucide-react';

const products = [
  {
    name: 'Simba ERP',
    tagline: 'The Ultimate Enterprise Backbone',
    desc: 'A comprehensive Enterprise Resource Planning suite that unifies finance, inventory, procurement, and operations into a single pane of glass.',
    features: ['Automated Accounting', 'Supply Chain Management', 'Multi-currency Support'],
    icon: <Building2 className="w-10 h-10 text-primary" />,
    gradient: 'from-blue-600/20 to-blue-900/10',
    accent: 'border-primary/30 group-hover:border-primary',
  },
  {
    name: 'Simba HRMS',
    tagline: 'Modern Workforce Management',
    desc: 'Empower your HR department with automated payroll, attendance tracking, performance reviews, and employee self-service portals.',
    features: ['Biometric Attendance Sync', 'Tax-compliant Payroll', 'Leave Management'],
    icon: <Users className="w-10 h-10 text-secondary" />,
    gradient: 'from-purple-600/20 to-purple-900/10',
    accent: 'border-secondary/30 group-hover:border-secondary',
  },
  {
    name: 'Simba POS',
    tagline: 'Seamless Retail Operations',
    desc: 'A fast, cloud-based Point of Sale system built for retail chains and restaurants. Works offline and syncs automatically.',
    features: ['Real-time Inventory', 'Barcode & Receipt Printing', 'Multi-store Management'],
    icon: <ShoppingCart className="w-10 h-10 text-green-500" />,
    gradient: 'from-green-600/20 to-green-900/10',
    accent: 'border-green-500/30 group-hover:border-green-500',
  },
  {
    name: 'Simba Edu',
    tagline: 'Next-Gen Campus Management',
    desc: 'Digitize your entire educational institution. From student enrollment to grading, online classes, and fee collection.',
    features: ['Student Portal', 'Automated Grading', 'Financial Dashboard'],
    icon: <GraduationCap className="w-10 h-10 text-orange-500" />,
    gradient: 'from-orange-600/20 to-orange-900/10',
    accent: 'border-orange-500/30 group-hover:border-orange-500',
  },
  {
    name: 'Simba Health',
    tagline: 'Hospital Management System',
    desc: 'Secure, compliant healthcare management. Manage patient records, pharmacy inventory, lab results, and billing effortlessly.',
    features: ['Electronic Health Records', 'Pharmacy POS', 'Lab Integration'],
    icon: <Stethoscope className="w-10 h-10 text-pink-500" />,
    gradient: 'from-pink-600/20 to-pink-900/10',
    accent: 'border-pink-500/30 group-hover:border-pink-500',
  },
  {
    name: 'Simba CRM',
    tagline: 'Accelerate Sales & Support',
    desc: 'Track leads, automate follow-ups, manage support tickets, and close deals faster with our AI-powered CRM suite.',
    features: ['Lead Pipeline', 'Email Automation', 'Support Ticketing'],
    icon: <Briefcase className="w-10 h-10 text-cyan-400" />,
    gradient: 'from-cyan-600/20 to-cyan-900/10',
    accent: 'border-cyan-400/30 group-hover:border-cyan-400',
  }
];

const Product = () => {
  return (
    <div className="pt-24 pb-12 bg-background min-h-screen">
      <section className="px-6 py-20 text-center max-w-4xl mx-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-secondary/10 blur-[100px] rounded-full -z-10" />
        
        <div className="inline-flex items-center space-x-2 bg-surface border border-surfaceBorder rounded-full px-4 py-2 mb-6">
          <span className="text-sm font-medium text-secondary">Our Ecosystem</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
          Enterprise <span className="text-gradient">Products</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed">
          Discover our suite of powerful, ready-to-deploy software solutions designed specifically to automate and scale African enterprises.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((prod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <Card 
                hoverEffect={true} 
                className={`relative flex flex-col h-full bg-gradient-to-b ${prod.gradient} overflow-hidden group transition-all duration-300 ${prod.accent}`}
              >
                {/* Decorative glowing orb behind icon */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-colors pointer-events-none" />
                
                <div className="w-16 h-16 rounded-2xl bg-background border border-surfaceBorder flex items-center justify-center mb-6 shadow-xl relative z-10">
                  {prod.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-1 relative z-10">{prod.name}</h3>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 relative z-10">{prod.tagline}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1 relative z-10">
                  {prod.desc}
                </p>
                
                <ul className="space-y-3 mb-8 relative z-10">
                  {prod.features.map((feat, j) => (
                    <li key={j} className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feat}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-surfaceBorder/50 relative z-10 mt-auto">
                  <Link to={`/request-demo?product=${encodeURIComponent(prod.name)}`}>
                    <Button variant="ghost" className="w-full justify-between hover:bg-background/50 border border-transparent group-hover:border-surfaceBorder transition-all">
                      Request Demo
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Custom Solution CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <Card className="p-8 md:p-12 text-center bg-gradient-to-r from-surface to-surface border-primary/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
          <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Product?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            If our off-the-shelf products don't fit your exact requirements, our engineering team can build a custom software solution tailored perfectly to your business logic.
          </p>
          <Link to="/contact">
            <Button size="lg" className="px-10">
              Talk to an Engineer
            </Button>
          </Link>
        </Card>
      </section>
    </div>
  );
};

export default Product;
