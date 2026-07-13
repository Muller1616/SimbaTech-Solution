


const steps = [
  { num: '01', title: 'Discovery & Strategy', desc: 'Understanding your goals, defining requirements, and plotting the digital roadmap.' },
  { num: '02', title: 'UX/UI Design', desc: 'Creating intuitive, engaging, and scalable interface designs using modern standards.' },
  { num: '03', title: 'Development', desc: 'Agile implementation by our expert engineers leveraging cutting-edge technology.' },
  { num: '04', title: 'Testing & QA', desc: 'Rigorous automated and manual testing to ensure flawless performance.' },
  { num: '05', title: 'Deployment', desc: 'Smooth, secure launch to robust cloud infrastructure or enterprise servers.' },
  { num: '06', title: 'Support & Scaling', desc: 'Continuous optimization, feature updates, and round-the-clock technical support.' },
];

const ProcessTimeline = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Development <span className="text-gradient">Process</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A battle-tested methodology to turn your vision into a robust, market-ready reality.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} md:mb-12`}>
                
                <div className="flex-1 w-full md:px-12 text-center md:text-left">
                  <div className={`md:max-w-md ${i % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} glass-card p-6 md:p-8 hover:border-primary/50 transition-colors`}>
                    <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-surfaceBorder to-gray-500/30 absolute -top-4 -right-4 select-none pointer-events-none">
                      {step.num}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>
                </div>
                
                {/* Center Node */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border border-primary items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
