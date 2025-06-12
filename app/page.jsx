import Image from "next/image";
import ServiceCard from './components/ServiceCard';
import {Oxanium} from 'next/font/google';
import localFont from 'next/font/local';
const myFont = localFont({
  src: '../public/fonts/Lora-VariableFont_wght.ttf',
  display: 'swap',
  variable: '--font-myFont',
});
const oxanium = Oxanium({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
  weight: ['400', '500', '600', '700'],
});

export default function LandingPage() {
  const businessServices = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
      icon: '🌐',
      gradient: 'bg-gradient-to-tr from-emerald-600 to-emerald-900',
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: '📱',
      gradient: 'bg-gradient-to-tr from-blue-600 to-blue-900',
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment services.',
      icon: '☁️',
      gradient: 'bg-gradient-to-br from-purple-600 to-purple-900',
    },
  ];

  const studentServices = [
    {
      title: 'Project Development',
      description: 'Get help with your academic projects and learn while building.',
      icon: '🎓',
      gradient: 'bg-gradient-to-br from-amber-600 to-amber-900',
    },
    {
      title: 'Code Review',
      description: 'Expert review of your code with detailed feedback and improvements.',
      icon: '📝',
      gradient: 'bg-gradient-to-br from-rose-600 to-rose-900',
    },
    {
      title: 'Learning Support',
      description: 'One-on-one mentoring and guidance for technical concepts.',
      icon: '📚',
      gradient: 'bg-gradient-to-br from-cyan-600 to-cyan-900',
    },
  ];

  const testimonials = [
    {
      name: 'John Doe',
      role: 'Business Owner',
      content: 'Alamny helped us transform our business with their innovative solutions.',
      image: '👨‍💼',
    },
    {
      name: 'Jane Smith',
      role: 'Computer Science Student',
      content: 'The project support I received was invaluable for my academic success.',
      image: '👩‍🎓',
    },
    {
      name: 'Mike Johnson',
      role: 'Startup Founder',
      content: 'Their expertise in web development helped us launch our product quickly.',
      image: '👨‍💻',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6`}>
              Transforming Ideas into
              <span className="text-emerald-400"> Digital Reality</span>
            </h1>
            <p className={`text-xl text-gray-300 mb-8`}>
              Empowering businesses and students with innovative technology solutions
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="/business"
                className="px-8 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
              >
                Business Services
              </a>
              <a
                href="/student"
                className="px-8 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                Student Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Business Services Section */}
      <section className="py-20  bg-gradient-to-t from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Business <span className="text-emerald-400">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Student Services Section */}
      <section className="py-20  bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Student <span className="text-emerald-400">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-t from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            What Our <span className="text-emerald-400">Clients Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-4">{testimonial.image}</div>
                <p className="text-gray-300 mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-emerald-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
