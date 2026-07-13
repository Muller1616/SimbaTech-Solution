import { useEffect, useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ArrowLeft, Calendar, Clock, MonitorPlay, CheckCircle2 } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const RequestDemo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedProduct, setSelectedProduct] = useState('General Demo');

  useEffect(() => {
    window.scrollTo(0, 0);
    // Extract product name from query params if available
    const searchParams = new URLSearchParams(location.search);
    const product = searchParams.get('product');
    if (product) {
      setSelectedProduct(decodeURIComponent(product));
    }
  }, [location]);

  return (
    <div className="pt-24 pb-12 min-h-screen bg-background">
      {/* Decorative Background */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      
      <section className="px-6 py-12 max-w-7xl mx-auto relative z-10">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-gray-400 hover:text-white transition-colors group mb-8 bg-surface/50 border border-surfaceBorder px-4 py-2 rounded-full w-fit backdrop-blur-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Products
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center space-x-2 bg-surface border border-surfaceBorder rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium text-primary flex items-center">
                  <MonitorPlay className="w-4 h-4 mr-2" /> Live Demonstration
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                See <span className="text-gradient">{selectedProduct}</span> in Action.
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                Discover how our enterprise solutions can transform your operations. Book a personalized, 1-on-1 walkthrough with one of our product engineers.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { title: 'Personalized Walkthrough', desc: 'A live tour tailored specifically to your business workflows.' },
                { title: 'Technical Deep Dive', desc: 'Ask complex technical questions directly to our engineers.' },
                { title: 'Pricing & Roadmap', desc: 'Get clear, transparent pricing and onboarding timelines.' }
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className="mt-1 mr-4 bg-primary/20 p-2 rounded-full text-primary">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{item.title}</h4>
                    <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-6 bg-surface/30 border border-surfaceBorder rounded-2xl flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold">Standard Demo Duration</h4>
                <p className="text-gray-400 text-sm">45 Minutes + Q&A Session</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Demo Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8 md:p-10 border-primary/20 bg-gradient-to-br from-surface to-surface/40 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6">Book Your Session</h3>
              
              <form className="space-y-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Product of Interest</label>
                  <select 
                    className="w-full bg-background/50 border border-surfaceBorder rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none"
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                  >
                    <option value="General Demo">General Overview</option>
                    <option value="Simba ERP">Simba ERP</option>
                    <option value="Simba HRMS">Simba HRMS</option>
                    <option value="Simba POS">Simba POS</option>
                    <option value="Simba Edu">Simba Edu</option>
                    <option value="Simba Health">Simba Health</option>
                    <option value="Simba CRM">Simba CRM</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">First Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-background/50 border border-surfaceBorder rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-background/50 border border-surfaceBorder rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Work Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-background/50 border border-surfaceBorder rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="jane@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Preferred Date</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      className="w-full bg-background/50 border border-surfaceBorder rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full mt-4">
                  Schedule Demo
                </Button>
                
                <p className="text-xs text-center text-gray-500 mt-4">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </Card>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default RequestDemo;
