import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Finova Mobile Banking',
    client: 'Finova Finance',
    category: 'Mobile Application',
    desc: 'A highly secure, cross-platform mobile banking application built with React Native. Features biometric authentication, real-time transaction processing, and an intuitive UI/UX.',
    tags: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
    image: 'bg-gradient-to-tr from-blue-900 to-primary/40' // Placeholder for actual image
  },
  {
    title: 'Retailer Inc. E-Commerce',
    client: 'Retailer Inc.',
    category: 'Web Development',
    desc: 'A scalable e-commerce platform handling 10k+ daily transactions. Integrated with multiple payment gateways and a custom inventory management dashboard.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'TailwindCSS'],
    image: 'bg-gradient-to-tr from-purple-900 to-secondary/40'
  },
  {
    title: 'SalesPro CRM Automation',
    client: 'SalesPro Africa',
    category: 'Custom Software',
    desc: 'Bespoke CRM solution tailored for a regional sales team, automating lead nurturing workflows and providing deep real-time analytics visualization.',
    tags: ['React', 'Express', 'MongoDB', 'Chart.js'],
    image: 'bg-gradient-to-tr from-emerald-900 to-green-500/40'
  },
  {
    title: 'Enterprise Network Upgrade',
    client: 'BizCorp Ltd.',
    category: 'Infrastructure',
    desc: 'Complete overhaul of corporate network infrastructure, implementing zero-trust security protocols, redundant firewalls, and SD-WAN.',
    tags: ['Cisco', 'Fortinet', 'SD-WAN', 'Zero-Trust'],
    image: 'bg-gradient-to-tr from-orange-900 to-red-500/40'
  }
];

const Projects = () => {
  return (
    <div className="pt-24 pb-12">
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-surface border border-surfaceBorder rounded-full px-4 py-2 mb-6">
          <span className="text-sm font-medium text-primary">Case Studies</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
          Our Portfolio of <span className="text-gradient">Excellence</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Explore how we've helped leading businesses across Africa transform their operations through innovative digital solutions.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex flex-col space-y-16">
          {projects.map((project, i) => (
            <div key={i} className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Image/Mockup container */}
              <div className="w-full lg:w-1/2">
                <Card className={`w-full aspect-[4/3] p-0 overflow-hidden ${project.image} border-0`} hoverEffect={false}>
                  {/* Decorative UI elements to simulate an app screenshot */}
                  <div className="w-full h-full flex flex-col p-8 opacity-80 mix-blend-overlay">
                     <div className="w-1/3 h-6 bg-white/20 rounded-md mb-8"></div>
                     <div className="flex-1 w-full bg-white/10 rounded-xl backdrop-blur-sm border border-white/20"></div>
                  </div>
                </Card>
              </div>
              
              {/* Content */}
              <div className="w-full lg:w-1/2">
                <div className="text-sm font-bold text-secondary uppercase tracking-wider mb-2">{project.category}</div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h2>
                <div className="text-gray-300 font-medium mb-6">Client: <span className="text-white">{project.client}</span></div>
                
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-surface border border-surfaceBorder rounded-md text-xs font-medium text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button variant="outline" className="group">
                  Read Case Study
                  <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
