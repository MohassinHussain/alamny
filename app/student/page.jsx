export default function Student() {
    const projectTemplates = [
      {
        title: 'E-commerce Website',
        difficulty: 'Intermediate',
        tech: ['React', 'Node.js', 'MongoDB'],
        description: 'Build a full-stack e-commerce platform with user authentication and payment integration.',
        icon: '🛍️',
      },
      {
        title: 'Task Management App',
        difficulty: 'Beginner',
        tech: ['React', 'Firebase'],
        description: 'Create a task management application with real-time updates and user collaboration.',
        icon: '✅',
      },
      {
        title: 'Social Media Dashboard',
        difficulty: 'Advanced',
        tech: ['React', 'GraphQL', 'PostgreSQL'],
        description: 'Develop a social media analytics dashboard with data visualization and reporting.',
        icon: '📊',
      },
    ];
  
    const learningResources = [
      {
        title: 'Web Development Fundamentals',
        type: 'Course',
        duration: '8 weeks',
        topics: ['HTML', 'CSS', 'JavaScript'],
        icon: '📚',
      },
      {
        title: 'React Masterclass',
        type: 'Workshop',
        duration: '4 weeks',
        topics: ['React Hooks', 'State Management', 'Performance'],
        icon: '⚛️',
      },
      {
        title: 'Backend Development',
        type: 'Course',
        duration: '10 weeks',
        topics: ['Node.js', 'Express', 'Databases'],
        icon: '🔧',
      },
    ];
  
    return (
      <div className="m-h-screen py-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-white mb-4">
              Student <span className="text-emerald-400">Resources</span>
            </h1>
            <p className="text-gray-300">
              Access project templates, learning resources, and get expert guidance for your academic journey.
            </p>
          </div>
        </section>
  
        {/* Project Templates */}
        <section className="py-12 bg-gradient-to-t from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">
              Project <span className="text-emerald-400">Templates</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projectTemplates.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl p-6 hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-4xl mb-4">{project.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded">
                      {project.difficulty}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-sm px-2 py-1 bg-gray-700 text-gray-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="mt-4 w-full bg-emerald-500 text-white rounded-lg py-2 hover:bg-emerald-600 transition-colors">
                    Start Project
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Learning Resources */}
        <section className="py-12 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">
              Learning <span className="text-emerald-400">Resources</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {learningResources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-xl p-6 hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-4xl mb-4">{resource.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{resource.title}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm px-2 py-1 bg-blue-500/20 text-blue-400 rounded">
                      {resource.type}
                    </span>
                    <span className="text-sm text-gray-300">{resource.duration}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="text-sm px-2 py-1 bg-gray-800 text-gray-300 rounded"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600 transition-colors">
                    Enroll Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Call to Action */}
        <section className="py-12 bg-gradient-to-t from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Need Help with Your Project?
              </h2>
              <p className="text-gray-100 mb-6">
                Our team of experts is here to guide you through your project development journey.
              </p>
              <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  } 