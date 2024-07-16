import { QueryClient, QueryClientProvider } from "react-query";
import Home from './pages/Home'
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import AddProduct from "./components/AddProduct";
import Checkout from "./components/Checkout";

const App = () => {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      
      <Router>

        <Navbar/>

        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/checkout" element={<Checkout />} />



        </Routes>

      </Router>

    </QueryClientProvider>
  );
};

export default App;
