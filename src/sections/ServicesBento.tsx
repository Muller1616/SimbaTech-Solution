

import { Card } from '../components/ui/Card';
import { Globe, Smartphone, Cloud, Database, Cpu, Network } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    desc: 'Custom web applications built with modern technologies to scale effortlessly.',
    icon: <Globe className="w-6 h-6 text-primary" />,
    colSpan: 'md:col-span-2 lg:col-span-2',
    bg: 'bg-surface'
  },
  {
    title: 'Mobile Apps',
    desc: 'Native & cross-platform applications.',
    icon: <Smartphone className="w-6 h-6 text-secondary" />,
    colSpan: 'md:col-span-1 lg:col-span-1',
    bg: 'bg-surface'
  },
  {
    title: 'ERP Solutions',
    desc: 'Unified, scalable ERP to automate workflows.',
    icon: <Database className="w-6 h-6 text-green-400" />,
    colSpan: 'md:col-span-1 lg:col-span-1',
    bg: 'bg-surface'
  },
  {
    title: 'Cloud Infrastructure',
    desc: 'Secure and scalable cloud deployment and migration services.',
    icon: <Cloud className="w-6 h-6 text-blue-400" />,
    colSpan: 'md:col-span-2 lg:col-span-2',
    bg: 'bg-gradient-to-br from-primary/10 to-secondary/10'
  },
  {
    title: 'API Integration',
    desc: 'Seamless connections with third-party tools.',
    icon: <Cpu className="w-6 h-6 text-purple-400" />,
    colSpan: 'md:col-span-1 lg:col-span-1',
    bg: 'bg-surface'
  },
  {
    title: 'Network Design',
    desc: 'Robust enterprise network planning.',
    icon: <Network className="w-6 h-6 text-orange-400" />,
    colSpan: 'md:col-span-2 lg:col-span-2',
    bg: 'bg-surface'
  }
];

const ServicesBento = () => {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Complete Digital <span className="text-gradient">Ecosystem</span></h2>
          <p className="text-gray-400 text-lg">
            From bespoke software to enterprise network infrastructure, we provide end-to-end technological solutions tailored for growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <Card 
              key={i} 
              className={`border-surfaceBorder/60 flex flex-col justify-between ${svc.colSpan} ${svc.bg}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center mb-6">
                  {svc.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{svc.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesBento;
