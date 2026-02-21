import { motion } from 'motion/react';
import { Settings, Wrench, ShieldCheck, MessageSquare, Phone, MapPin, Search } from 'lucide-react';

export default function Service() {
  const services = [
    { title: 'Repair Status', icon: <Search />, desc: 'Track your repair progress in real-time.' },
    { title: 'Book a Repair', icon: <Wrench />, desc: 'Schedule an appointment at a service center.' },
    { title: 'Warranty Info', icon: <ShieldCheck />, desc: 'Check your product warranty coverage.' },
    { title: 'Software Updates', icon: <Settings />, desc: 'Get the latest features for your devices.' },
  ];

  return (
    <div className="pt-24 pb-24">
      {/* Hero */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-6"
          >
            How can we help you?
          </motion.h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Get expert support for all your Galaxy products. From repairs to software tips, we're here for you.
          </p>
          <div className="max-w-xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Search for help (e.g. 'Screen repair')" 
              className="w-full px-6 py-4 rounded-full text-black focus:outline-none shadow-lg"
            />
            <button className="absolute right-2 top-2 bottom-2 px-6 bg-black text-white rounded-full font-bold">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-all text-center"
              >
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Contact Support</h2>
            <p className="text-gray-500">Choose the way that works best for you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[32px] shadow-sm text-center">
              <MessageSquare size={40} className="mx-auto mb-6 text-blue-600" />
              <h4 className="text-xl font-bold mb-4">Live Chat</h4>
              <p className="text-gray-500 mb-8 text-sm">Chat with our experts online for immediate assistance.</p>
              <button className="w-full py-3 border-2 border-black rounded-xl font-bold hover:bg-black hover:text-white transition-all">
                Start Chat
              </button>
            </div>
            <div className="bg-white p-10 rounded-[32px] shadow-sm text-center">
              <Phone size={40} className="mx-auto mb-6 text-blue-600" />
              <h4 className="text-xl font-bold mb-4">Call Us</h4>
              <p className="text-gray-500 mb-8 text-sm">Speak directly with a support representative.</p>
              <button className="w-full py-3 border-2 border-black rounded-xl font-bold hover:bg-black hover:text-white transition-all">
                6394480819
              </button>
            </div>
            <div className="bg-white p-10 rounded-[32px] shadow-sm text-center">
              <MapPin size={40} className="mx-auto mb-6 text-blue-600" />
              <h4 className="text-xl font-bold mb-4">Find a Store</h4>
              <p className="text-gray-500 mb-8 text-sm">Locate the nearest authorized service center.</p>
              <button className="w-full py-3 border-2 border-black rounded-xl font-bold hover:bg-black hover:text-white transition-all">
                Store Locator
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
