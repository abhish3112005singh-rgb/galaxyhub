import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-6 tracking-tighter">GALAXY HUB</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Leading the future of technology with innovation and design. Experience the next generation of mobile, home appliances, and digital solutions.
            </p>
            <div className="flex space-x-4">
              <Facebook size={18} className="text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
              <Twitter size={18} className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram size={18} className="text-gray-400 hover:text-pink-600 cursor-pointer transition-colors" />
              <Youtube size={18} className="text-gray-400 hover:text-red-600 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">Products</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="#" className="hover:text-blue-600 transition-colors">Smartphones</Link></li>
              <li><Link to="#" className="hover:text-blue-600 transition-colors">Tablets</Link></li>
              <li><Link to="#" className="hover:text-blue-600 transition-colors">Audio & Watches</Link></li>
              <li><Link to="#" className="hover:text-blue-600 transition-colors">Laptops</Link></li>
              <li><Link to="#" className="hover:text-blue-600 transition-colors">TV & AV</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/service" className="hover:text-blue-600 transition-colors">Product Support</Link></li>
              <li><Link to="/service" className="hover:text-blue-600 transition-colors">Repair Services</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact Us</Link></li>
              <li><Link to="#" className="hover:text-blue-600 transition-colors">Community</Link></li>
              <li><Link to="#" className="hover:text-blue-600 transition-colors">Warranty Info</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-blue-600 transition-colors">Newsroom</Link></li>
              <li><Link to="#" className="hover:text-blue-600 transition-colors">Careers</Link></li>
              <li><Link to="#" className="hover:text-blue-600 transition-colors">Sustainability</Link></li>
              <li><Link to="#" className="hover:text-blue-600 transition-colors">Investors</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2026 Galaxy Hub Electronics. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-gray-600">Privacy Policy</Link>
            <Link to="#" className="hover:text-gray-600">Terms of Service</Link>
            <Link to="#" className="hover:text-gray-600">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
