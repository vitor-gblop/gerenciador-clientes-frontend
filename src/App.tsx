import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/user/_Home";
import Login from "./pages/auth/_Login";
import Signin from "./pages/auth/_Signin";
import Clients from "./pages/user/_Clients";
import CustomerData from "./pages/user/_ClientsData";
import Products from "./pages/user/_Products";
import ProductsData from "./pages/user/_ProductsData";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/home" element={<Home />} />
                <Route path="/user/clients" element={<Clients />} />
                <Route path="/user/clients/:id" element={<CustomerData />} />

                <Route path="/user/products" element={<Products />} />
                <Route path="/user/products/:id" element={<ProductsData />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
