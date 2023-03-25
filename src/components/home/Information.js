import { useState } from "react";

function HomeInfo({ title, description }) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-64 h-48 hover:scale-105 transform transition-all duration-300 ease-in-out cursor-pointer"
    onClick={handleClick}>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      {show && <p className="text-gray-600">{description}</p>}
    </div>
  );
}

export default HomeInfo;