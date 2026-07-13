import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { MapPin, Phone, Mail, Clock, ArrowLeft, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  
  return (
    <div className="pt-24 pb-12 min-h-screen bg-background">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />

      <section className="px-6 py-12 max-w-7xl mx-auto relative z-10">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-gray-400 hover:text-white transition-colors group mb-12 bg-surface/50 border border-surfaceBorder px-4 py-2 rounded-full w-fit backdrop-blur-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Go Back
        </button>

        <div className="mb-16 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Let's <span className="text-gradient">Connect.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Whether you have a complex enterprise project, need technical consultation, or want to explore partnership opportunities, our global team is ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <Card className="p-8 md:p-12 border-primary/20 bg-gradient-to-br from-surface to-surface/40 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                Send us a message <Send className="w-5 h-5 ml-3 text-primary" />
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-background/50 border border-surfaceBorder rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-background/50 border border-surfaceBorder rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="jane@enterprise.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Phone (Optional)</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-4 bg-surface border border-r-0 border-surfaceBorder rounded-l-xl text-gray-400 font-medium">
                        +251
                      </span>
                      <input 
                        type="tel" 
                        className="flex-1 bg-background/50 border border-surfaceBorder rounded-r-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        placeholder="911 234 567"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Company</label>
                    <input 
                      type="text" 
                      className="w-full bg-background/50 border border-surfaceBorder rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">How can we help?</label>
                  <textarea 
                    rows={5}
                    className="w-full bg-background/50 border border-surfaceBorder rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    placeholder="Describe your project requirements, challenges, or goals..."
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto px-10 mt-4 shadow-lg shadow-primary/20">
                  Submit Inquiry
                </Button>
              </form>
            </Card>
          </div>

          {/* Right Column: Info & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              
              <Card hoverEffect={true} className="p-6 flex items-start space-x-4 bg-surface/30">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0 text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Global Headquarters</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Meskel Square<br/>
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </Card>

              <Card hoverEffect={true} className="p-6 flex items-start space-x-4 bg-surface/30">
                <div className="p-3 bg-secondary/10 rounded-lg shrink-0 text-secondary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Direct Contact</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    +251 911 000 000<br/>
                    contact@simbatech.et
                  </p>
                </div>
              </Card>

            </div>

            {/* Integrated Map & Brief */}
            <Card className="p-6 bg-surface/30 border-surfaceBorder overflow-hidden flex flex-col">
              <div className="mb-4">
                <h3 className="text-white font-bold mb-2">Visit Our Tech Hub</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Located in the heart of Addis Ababa, our headquarters serves as the innovation center for East Africa. We welcome enterprise clients and partners to discuss digital transformation strategies in person.
                </p>
              </div>
              
              <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden relative border border-surfaceBorder/50 mt-auto">
                {/* CSS Invert trick to make OpenStreetMap dark mode */}
                <iframe 
                  title="SimbaTech Location"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(85%)' }}
                  src="https://www.openstreetmap.org/export/embed.html?bbox=38.745,-9.015,38.775,9.025&layer=mapnik&marker=9.0105,38.7613" 
                  allowFullScreen
                  loading="lazy"
                ></iframe>
                
                {/* Subtle gradient overlay to blend edges */}
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20px_rgba(10,10,11,1)]"></div>
              </div>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
