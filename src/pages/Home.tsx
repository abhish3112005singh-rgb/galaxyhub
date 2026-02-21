import { motion } from 'motion/react';
import { ArrowRight, Smartphone, Laptop, Tv, Watch } from 'lucide-react';

export default function Home() {
  const products = [
    { name: 'Galaxy S24 Ultra', category: 'Mobile', price: 'From ₹1,29,999', icon: <Smartphone />, img: 'https://picsum.photos/seed/s24/800/600' },
    { name: 'Galaxy Book4 Pro', category: 'Computing', price: 'From ₹1,44,990', icon: <Laptop />, img: 'https://picsum.photos/seed/book4/800/600' },
    { name: 'Neo QLED 8K', category: 'TV & AV', price: 'From ₹2,99,900', icon: <Tv />, img: 'https://picsum.photos/seed/tv/800/600' },
    { name: 'Galaxy Watch6', category: 'Wearables', price: 'From ₹29,999', icon: <Watch />, img: 'https://picsum.photos/seed/watch/800/600' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/galaxy-hero/1920/1080?grayscale" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              New Arrival
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter leading-tight">
              Galaxy S24 Ultra <br />
              <span className="text-blue-500">AI is Here.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Experience the next level of mobile intelligence. Zoom into the future with ProVisual Engine and Circle to Search.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                Buy Now <ArrowRight size={18} />
              </button>
              <button className="px-8 py-4 border border-white text-white font-bold rounded-full hover:bg-white/10 transition-all">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Products</h2>
              <p className="text-gray-500">Explore our latest innovations across all categories.</p>
            </div>
            <button className="text-blue-600 font-semibold flex items-center gap-1 hover:underline">
              View All <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group bg-gray-50 rounded-3xl p-6 transition-all border border-transparent hover:border-gray-200 hover:shadow-xl"
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-white">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  {product.icon}
                  <span className="text-xs font-bold uppercase tracking-wider">{product.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-500 font-medium mb-6">{product.price}</p>
                <button className="w-full py-3 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-colors">
                  Add to Cart
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://picsum.photos/seed/innovation/800/800" 
                alt="Innovation" 
                className="rounded-[40px] shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-tight">
                Designed for the <br />
                <span className="text-blue-600">Modern World.</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our commitment to excellence goes beyond technology. We create experiences that empower you to do more, be more, and live better. From sustainable materials to intuitive AI, every detail is crafted with purpose.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Seamless Connectivity</h4>
                    <p className="text-gray-500">Connect all your devices effortlessly with SmartThings.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 shrink-0">
                    <Watch size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Eco-Conscious Design</h4>
                    <p className="text-gray-500">Using recycled materials to reduce our environmental footprint.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
