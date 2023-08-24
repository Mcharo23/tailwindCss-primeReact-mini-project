import { FC } from "react";
import Login from "./scheens/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./scheens/home";
import ResetPassword from "./scheens/reset-password";
import ProductInfo from "./components/product-info";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/home/product-info/:productID" element={<ProductInfo />} />
        <Route path="/home" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
