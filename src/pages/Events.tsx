
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { MapPin, Calendar, Users } from 'lucide-react';

const events = [
  {
    title: 'Tech Innovation Summit 2026',
    date: 'March 15-16, 2026',
    location: 'Skylight Hotel, Addis Ababa',
    desc: 'Join us for the annual Tech Innovation Summit where industry leaders discuss the future of technology, AI, and digital transformation in Africa.',
    attendees: '500+',
    status: 'Upcoming'
  },
  {
    title: 'Digital Marketing Workshop',
    date: 'April 5, 2026',
    location: 'SimbaTech HQ',
    desc: 'Learn the latest digital marketing and SEO strategies from experts in the field. Hands-on workshop for growing businesses.',
    attendees: '50',
    status: 'Registration Open'
  }
];

const Events = () => {
  return (
    <div className="pt-24 pb-12">
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
          Upcoming <span className="text-gradient">Events</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          Discover our latest events, workshops, and conferences designed to connect and educate the tech community.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="space-y-8">
          {events.map((evt, i) => (
            <Card key={i} className="flex flex-col md:flex-row gap-8 items-center p-6 md:p-8">
              <div className="flex-1 w-full text-center md:text-left">
                <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold text-primary mb-4 uppercase tracking-wider">
                  {evt.status}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{evt.title}</h3>
                <p className="text-gray-400 mb-6">{evt.desc}</p>
                
                <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-300">
                  <div className="flex items-center justify-center md:justify-start">
                    <Calendar className="w-4 h-4 mr-2 text-secondary" /> {evt.date}
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <MapPin className="w-4 h-4 mr-2 text-secondary" /> {evt.location}
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <Users className="w-4 h-4 mr-2 text-secondary" /> {evt.attendees} Attendees
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-auto shrink-0 md:pl-8 md:border-l border-surfaceBorder flex flex-col gap-3">
                <Button variant="primary" className="w-full md:w-40">Register Now</Button>
                <Button variant="outline" className="w-full md:w-40">View Details</Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
