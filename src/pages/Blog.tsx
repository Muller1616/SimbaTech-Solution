
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';

const blogPosts = [
  {
    title: 'Digital Transformation for Enterprises in 2026',
    excerpt: 'Exploring how digital transformation is reshaping enterprise operations, strategies, and workforce management.',
    author: 'Lily Mengistu',
    date: 'February 5, 2026',
    readTime: '8 min read',
    category: 'Strategy'
  },
  {
    title: 'SaaS for Finance and Accounting: The New Standard',
    excerpt: 'Discover how SaaS solutions are revolutionizing finance processes, automating reporting, and enhancing compliance.',
    author: 'Mike Johnson',
    date: 'February 10, 2026',
    readTime: '6 min read',
    category: 'Technology'
  },
  {
    title: 'Workplace Safety in the Digital Age',
    excerpt: 'Most employees support measures to prevent workplace incidents. How technology is bridging the gap in physical security.',
    author: 'Sarah Wilson',
    date: 'February 7, 2026',
    readTime: '5 min read',
    category: 'Culture'
  }
];

const Blog = () => {
  return (
    <div className="pt-24 pb-12">
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
          Insights & <span className="text-gradient">News</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          The latest thoughts, industry trends, and technical tutorials from the SimbaTech team.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <Card key={i} className="flex flex-col group p-0 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-surfaceBorder to-background relative">
                 <div className="absolute top-4 left-4 px-3 py-1 bg-background/80 backdrop-blur-md rounded-full text-xs font-bold text-primary">
                    {post.category}
                 </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-1 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center text-xs text-gray-500 mb-6 space-x-4">
                  <div className="flex items-center"><User className="w-3 h-3 mr-1" /> {post.author}</div>
                  <div className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</div>
                </div>

                <div className="flex items-center justify-between border-t border-surfaceBorder pt-4">
                  <span className="text-xs text-gray-400 flex items-center">
                    <Clock className="w-3 h-3 mr-1" /> {post.readTime}
                  </span>
                  <Button variant="ghost" className="h-auto p-0 text-primary hover:text-white hover:bg-transparent">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
