

function HomeInfo({ title, description }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-64 h-48 hover:scale-105 transform transition-all duration-300 ease-in-out">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default HomeInfo;