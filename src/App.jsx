import { QueryClient, QueryClientProvider } from "react-query";
import Home from './pages/Home'
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";

const App = () => {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      
      <Router>

        <Navbar/>

        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />

        </Routes>

      </Router>

    </QueryClientProvider>
  );
};

export default App;
