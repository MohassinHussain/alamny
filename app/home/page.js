export default function Home() {
  const recentProjects = [
    {
      title: 'E-commerce Website',
      status: 'In Progress',
      progress: 75,
      type: 'Business',
    },
    {
      title: 'Student Portal',
      status: 'Completed',
      progress: 100,
      type: 'Student',
    },
    {
      title: 'Mobile App Development',
      status: 'Planning',
      progress: 25,
      type: 'Business',
    },
  ];

  const upcomingTasks = [
    {
      title: 'Review Project Requirements',
      dueDate: '2024-03-20',
      priority: 'High',
    },
    {
      title: 'Client Meeting',
      dueDate: '2024-03-22',
      priority: 'Medium',
    },
    {
      title: 'Code Review Session',
      dueDate: '2024-03-25',
      priority: 'High',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Welcome Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            Welcome back, <span className="text-emerald-400">User</span>
          </h1>
          <p className="text-gray-300">
            Here's an overview of your projects and upcoming tasks.
          </p>
        </div>
      </section>

      {/* Dashboard Grid */}
      <section className="py-12 bg-gradient-to-t from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Recent Projects */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6">
                Recent <span className="text-emerald-400">Projects</span>
              </h2>
              <div className="space-y-6">
                {recentProjects.map((project, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-white font-semibold">{project.title}</h3>
                      <span className={`text-sm px-2 py-1 rounded ${
                        project.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-400'
                          : project.status === 'In Progress'
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-300 mb-2">
                      <span>{project.type}</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div
                        className="bg-emerald-500 h-2 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Tasks */}
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6">
                Upcoming <span className="text-emerald-400">Tasks</span>
              </h2>
              <div className="space-y-4">
                {upcomingTasks.map((task, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-white font-semibold mb-1">{task.title}</h3>
                        <p className="text-sm text-gray-300">Due: {task.dueDate}</p>
                      </div>
                      <span className={`text-sm px-2 py-1 rounded ${
                        task.priority === 'High'
                          ? 'bg-red-500/20 text-red-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {task.priority}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-emerald-500 text-white rounded-lg p-4 hover:bg-emerald-600 transition-colors">
              Start New Project
            </button>
            <button className="bg-blue-500 text-white rounded-lg p-4 hover:bg-blue-600 transition-colors">
              Schedule Meeting
            </button>
            <button className="bg-purple-500 text-white rounded-lg p-4 hover:bg-purple-600 transition-colors">
              View Reports
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 