import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import DriverLogin from "./components/login/Driver";
import CustomerLogin from "./components/login/Customer";
import Navbar from "./components/Nav";
import CustomerSign from "./components/registration/Customer";
import DriverSign from "./components/registration/Driver";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/driver" element={<DriverLogin />} />
        <Route path="/driver/register" element={<DriverSign/>} />
        <Route path="/customer" element={<CustomerLogin />} />
        <Route path="/customer/register" element={<CustomerSign />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
