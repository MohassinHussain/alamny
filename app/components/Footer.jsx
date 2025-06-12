const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-emerald-400">Alamny</h3>
            <p className="text-sm">
              Empowering businesses and students with innovative technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-emerald-400 transition-colors">Services</a></li>
              <li><a href="/contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="/business" className="hover:text-emerald-400 transition-colors">Business Solutions</a></li>
              <li><a href="/student" className="hover:text-emerald-400 transition-colors">Student Services</a></li>
              <li><a href="/consulting" className="hover:text-emerald-400 transition-colors">Consulting</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>Email: contact@alamny.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: Your Location</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Alamny. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 