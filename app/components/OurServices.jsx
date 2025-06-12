'use client'

import { useRouter } from 'next/navigation';
// import { useSession } from 'next-auth/react';

const OurServices = ({ category }) => {
  const router = useRouter();
//   const { data: session } = useSession();

  const services = {
    business: [
      {
        id: 1,
        name: 'Web Development',
        description: 'Custom websites and web applications built with modern technologies',
        duration: '2-4 weeks',
        price: 'Starting from $1,500',
      },
      {
        id: 2,
        name: 'Other store specific add more',
        description: 'Booking Id dynamic',
        duration: '2-4 weeks',
        price: 'Starting from $1,500',
      },
      
    ],
    student: [
      {
        id: 1,
        name: 'Project Development',
        description: 'Get help with your academic projects and learn while building',
        duration: '2-4 weeks',
        price: 'Starting from $300',
      },
      {
        id: 2,
        name: 'Code Review',
        description: 'Expert review of your code with detailed feedback',
        duration: '1-2 days',
        price: 'Starting from $50',
      },
      {
        id: 3,
        name: 'Learning Support',
        description: 'One-on-one mentoring and guidance for technical concepts',
        duration: '1-2 hours',
        price: 'Starting from $30',
      },
      {
        id: 4,
        name: 'Portfolio Development',
        description: 'Build a professional portfolio to showcase your work',
        duration: '1-2 weeks',
        price: 'Starting from $200',
      },
      {
        id: 5,
        name: 'Interview Preparation',
        description: 'Technical interview preparation and mock interviews',
        duration: '1-2 hours',
        price: 'Starting from $40',
      },
      {
        id: 6,
        name: 'Resume Review',
        description: 'Professional review and enhancement of your technical resume',
        duration: '1-2 days',
        price: 'Starting from $25',
      },
    ],
  };

  const handleBookService = (serviceId) => {
    if (!session) {
      router.push('/auth/signin');
      return;
    }
    // Handle booking logic here
    router.push(`/booking/${category}/${serviceId}`);
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="px-6 py-4 text-left">Service</th>
            <th className="px-6 py-4 text-left">Description</th>
            <th className="px-6 py-4 text-left">Duration</th>
            <th className="px-6 py-4 text-left">Price</th>
            <th className="px-6 py-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {services[category]?.map((service) => (
            <tr
              key={service.id}
              className="border-b border-gray-700 hover:bg-gray-800/50 transition-colors"
            >
              <td className="px-6 py-4 text-white font-medium">{service.name}</td>
              <td className="px-6 py-4 text-gray-300">{service.description}</td>
              <td className="px-6 py-4 text-gray-300">{service.duration}</td>
              <td className="px-6 py-4 text-emerald-400">{service.price}</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => handleBookService(service.id)}
                  className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  Book Now
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OurServices;
