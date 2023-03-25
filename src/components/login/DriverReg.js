import { useState } from "react";

const DriverRegistration = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  //login
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //address
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
//Verification and security
  const [social, setSocial] = useState("");
  const [licence, setLicence] = useState("");
  const [plate, setPlate] = useState("");
  const [vehicle, setVehicle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", { name, phone, address, email });
    console.log("UserInput", { username, password });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg">
      {/* Address Info */}
      <div className="flex mt-8">
        <div className="w-1/2 pr-4">
          <h2 className="text-xl font-bold mb-4">Address Information</h2>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="street"
            type="text"
            placeholder="Street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="city"
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="zip"
            type="text"
            placeholder="Zip"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* Payment */}
        <div className="w-1/2 pl-9">
          <h2 className="text-xl font-bold mb-4">Payment Information</h2>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cardName"
            type="text"
            placeholder="Name as it appears on card"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="card"
            type="password"
            placeholder="Card Number"
            value={card}
            onChange={(e) => setCard(e.target.value)}
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cvv"
            type="password"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="experation"
            type="text"
            placeholder="Experation"
            value={experation}
            onChange={(e) => setExperation(e.target.value)}
          />
        </div>
      </div>

      {/* Sign up button */}
      <div className="flex items-center justify-between mt-8">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default DriverRegistration;
