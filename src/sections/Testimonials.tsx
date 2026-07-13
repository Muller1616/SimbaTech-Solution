import React from 'react';
import { Card } from '../components/ui/Card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'P. Gallagher',
    role: 'Manager, Modern Tech',
    text: 'SimbaTech exceeded our expectations. Their ERP implementation unified our operations and saved us countless hours of manual work. A truly professional team.',
    rating: 5,
  },
  {
    name: 'A. Bekele',
    role: 'CTO, Finova Finance',
    text: 'The mobile banking app they built for us is secure, fast, and our users love the biometric login. They understand enterprise security requirements perfectly.',
    rating: 5,
  },
  {
    name: 'M. Johnson',
    role: 'Director, Retailer Inc.',
    text: 'Scaling our e-commerce platform seemed daunting, but SimbaTech provided a robust cloud architecture that handles our peak traffic effortlessly.',
    rating: 5,
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#050505] border-t border-surfaceBorder">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What Our Clients <span className="text-gradient">Say</span></h2>
          <p className="text-gray-400 text-lg">
            Don't just take our word for it. Here is what leading businesses have to say about partnering with SimbaTech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="relative overflow-hidden group">
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-surfaceBorder/30 group-hover:text-primary/10 transition-colors pointer-events-none" />
              
              <div className="flex space-x-1 mb-6 relative z-10">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-8 italic relative z-10">"{t.text}"</p>
              
              <div className="mt-auto relative z-10 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
