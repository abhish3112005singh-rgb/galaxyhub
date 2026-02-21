import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: 'The Future of Mobile AI: What to Expect in 2026',
      excerpt: 'Artificial intelligence is no longer just a buzzword. It is transforming how we interact with our devices every single day.',
      category: 'Innovation',
      author: 'Sarah Jenkins',
      date: 'Feb 15, 2026',
      img: 'https://picsum.photos/seed/ai-blog/800/500'
    },
    {
      title: 'Sustainability in Tech: Our Path to Net Zero',
      excerpt: 'How we are redesigning our supply chain and products to be more eco-friendly without compromising on performance.',
      category: 'Sustainability',
      author: 'Michael Chen',
      date: 'Feb 10, 2026',
      img: 'https://picsum.photos/seed/eco-blog/800/500'
    },
    {
      title: 'Mastering the Galaxy S24 Ultra Camera',
      excerpt: 'Pro tips and tricks to take stunning photos and videos using the latest ProVisual Engine technology.',
      category: 'Tutorial',
      author: 'David Miller',
      date: 'Feb 05, 2026',
      img: 'https://picsum.photos/seed/camera-blog/800/500'
    },
    {
      title: 'Smart Home: Connecting Your Life with SmartThings',
      excerpt: 'Discover how to automate your home and create a seamless ecosystem of connected devices.',
      category: 'Lifestyle',
      author: 'Emma Wilson',
      date: 'Jan 28, 2026',
      img: 'https://picsum.photos/seed/home-blog/800/500'
    }
  ];

  return (
    <div className="pt-24 pb-24">
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Galaxy Newsroom</h1>
            <p className="text-gray-500 text-lg">The latest stories, news, and updates from the world of Galaxy Hub.</p>
          </div>

          {/* Featured Post */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative rounded-[40px] overflow-hidden mb-16 group cursor-pointer"
          >
            <div className="aspect-[21/9] w-full">
              <img 
                src="https://picsum.photos/seed/featured-blog/1600/700" 
                alt="Featured" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
              <div className="p-8 md:p-16 text-white max-w-3xl">
                <span className="px-3 py-1 bg-blue-600 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Featured</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Unveiling the Next Generation of Foldable Technology</h2>
                <p className="text-gray-300 text-lg mb-8 hidden md:block">
                  A deep dive into the engineering marvels behind our latest foldable displays and the software that makes them truly unique.
                </p>
                <button className="flex items-center gap-2 font-bold hover:gap-4 transition-all">
                  Read Full Story <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {posts.map((post, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="flex flex-col group cursor-pointer"
              >
                <div className="aspect-video rounded-3xl overflow-hidden mb-6">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 uppercase tracking-widest font-bold">
                  <span className="text-blue-600">{post.category}</span>
                  <div className="flex items-center gap-1"><Calendar size={14} /> {post.date}</div>
                  <div className="flex items-center gap-1"><User size={14} /> {post.author}</div>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors leading-tight">{post.title}</h3>
                <p className="text-gray-500 mb-6 line-clamp-2">{post.excerpt}</p>
                <button className="text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
