import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import DriverLogin from "./components/login/Driver";
import CustomerLogin from "./components/login/Customer";
import Navbar from "./components/Nav";
import HomePage from "./components/home/HomePage";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/driver" element={<DriverLogin />} />
        <Route path="/customer" element={<CustomerLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
