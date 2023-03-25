import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-lg">
          Delivery Service
        </Link>
        <div>
          <Link to="/driver" className="text-white px-4">
            Driver Login
          </Link>
          <Link to="/customer" className="text-white px-4">
            Customer Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;