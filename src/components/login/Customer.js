import { Link } from "react-router-dom";

function CustomerLogin() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Customer Login</h1>
        <p>Don't have an account? <Link to="/customer/register">Register</Link></p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input className="mt-1 w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300" type="text" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input className="mt-1 w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300" type="password" />
          </div>
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Login</button>
        </form>
      </div>
    </div>
  );
}

export default CustomerLogin;