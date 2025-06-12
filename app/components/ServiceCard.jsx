const ServiceCard = ({ title, description, icon, gradient }) => {
  return (
    <div className={`p-6 rounded-xl ${gradient} hover:scale-105 transition-transform duration-300`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-200">{description}</p>
    </div>
  );
};

export default ServiceCard; 