import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-surfaceBorder">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white tracking-tighter">
          Simba<span className="text-primary">Tech</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="hover:text-white transition-colors">About</Link>
          <Link to="/services" className="hover:text-white transition-colors">Services</Link>
          <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
          <Link to="/product" className="hover:text-white transition-colors">Products</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
        <div className="hidden md:block">
          <Link to="/request-demo">
            <button className="bg-primary hover:bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              Request Demo
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-surfaceBorder pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-2xl font-bold text-white tracking-tighter mb-4 block">
            Simba<span className="text-primary">Tech</span>
          </Link>
          <p className="text-gray-400 max-w-sm mb-6">
            Transforming businesses through innovative technology solutions. We build, secure, and scale your digital future.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
            <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/training" className="hover:text-primary transition-colors">Training</Link></li>
            <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            <li><Link to="/events" className="hover:text-primary transition-colors">Events</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-surfaceBorder text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} SimbaTech. All rights reserved.
      </div>
    </footer>
  );
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
