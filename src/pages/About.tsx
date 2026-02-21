import { motion } from 'motion/react';
import { Globe, Users, Lightbulb, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center bg-black overflow-hidden">
        <img 
          src="https://picsum.photos/seed/about-hero/1920/1080?blur=5" 
          alt="About Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
          >
            Our Vision. Your Future.
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are dedicated to creating a better world through innovative technology and design that puts people first.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-8">Inspire the World, Create the Future.</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Galaxy Hub, we believe that technology should be a force for good. Our mission is to inspire the world with innovative technologies, products, and designs that enrich people's lives and contribute to social prosperity by creating a new future.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From our humble beginnings to becoming a global leader in electronics, our core values remain the same: people, excellence, change, integrity, and co-prosperity.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 bg-blue-50 rounded-[32px] text-center">
                <Globe size={32} className="mx-auto mb-4 text-blue-600" />
                <h4 className="font-bold text-2xl mb-1">80+</h4>
                <p className="text-gray-500 text-sm">Countries</p>
              </div>
              <div className="p-8 bg-purple-50 rounded-[32px] text-center">
                <Users size={32} className="mx-auto mb-4 text-purple-600" />
                <h4 className="font-bold text-2xl mb-1">250k+</h4>
                <p className="text-gray-500 text-sm">Employees</p>
              </div>
              <div className="p-8 bg-orange-50 rounded-[32px] text-center">
                <Lightbulb size={32} className="mx-auto mb-4 text-orange-600" />
                <h4 className="font-bold text-2xl mb-1">15k+</h4>
                <p className="text-gray-500 text-sm">Patents Yearly</p>
              </div>
              <div className="p-8 bg-green-50 rounded-[32px] text-center">
                <Heart size={32} className="mx-auto mb-4 text-green-600" />
                <h4 className="font-bold text-2xl mb-1">100%</h4>
                <p className="text-gray-500 text-sm">Commitment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Our Journey</h2>
          <div className="space-y-12">
            {[
              { year: '1969', title: 'The Beginning', desc: 'Galaxy Hub Electronics was founded with a vision to lead the digital age.' },
              { year: '1988', title: 'Mobile Revolution', desc: 'Launched our first mobile phone, setting the stage for global leadership.' },
              { year: '2010', title: 'Galaxy Series', desc: 'Introduced the first Galaxy smartphone, redefining the mobile experience.' },
              { year: '2024', title: 'AI Integration', desc: 'Leading the era of mobile AI with Galaxy AI integration across all devices.' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="text-4xl font-black text-blue-600 w-32 shrink-0">{item.year}</div>
                <div className="pt-2">
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
