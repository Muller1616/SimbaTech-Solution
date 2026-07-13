


const TrustSection = () => {
  return (
    <section className="border-y border-surfaceBorder bg-surface/30 overflow-hidden py-10">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest">
          Trusted by Innovative Enterprises
        </p>
      </div>
      
      {/* Infinite Marquee */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 md:gap-24 px-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="text-gray-400 font-bold text-xl md:text-3xl opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
              LOGO IP{i}
            </div>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 md:gap-24 px-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="text-gray-400 font-bold text-xl md:text-3xl opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
              LOGO IP{i}
            </div>
          ))}
        </div>
        
        {/* Gradient fades for the edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent"></div>
      </div>
    </section>
  );
};

export default TrustSection;
