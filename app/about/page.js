export default function About() {
  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      bio: 'Passionate about technology and education.',
      image: '👨‍💼',
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'Expert in software architecture and development.',
      image: '👩‍💻',
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      bio: 'Specializes in full-stack development and mentoring.',
      image: '👨‍💻',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-emerald-400">Alamny</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a team of passionate technologists dedicated to empowering businesses
              and students with innovative solutions and educational support.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Our <span className="text-emerald-400">Mission</span>
              </h2>
              <p className="text-gray-300 mb-4">
                At Alamny, we believe in the power of technology to transform businesses
                and education. Our mission is to provide cutting-edge solutions that
                drive growth and innovation while supporting the next generation of
                developers and technologists.
              </p>
              <p className="text-gray-300">
                We combine industry expertise with educational excellence to create
                a platform where businesses can thrive and students can learn and grow.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span className="text-gray-300">Innovation and Excellence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span className="text-gray-300">Client Success</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span className="text-gray-300">Educational Empowerment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span className="text-gray-300">Continuous Learning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Meet Our <span className="text-emerald-400">Team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition-transform duration-300"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-emerald-400 mb-4">{member.role}</p>
                <p className="text-gray-300">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 