import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import PaymentGateway from "./pages/PaymentGateway";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/products/:productId" element={<ProductDetails />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/payment" element={<PaymentGateway />} />
					<Route path="/payment/:productId" element={<PaymentGateway />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
