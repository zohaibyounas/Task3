// src/components/Navbar.js
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CartContext } from "../context/Context";

const Navbar = () => {
  const Globalstate = useContext(CartContext);
  const state = Globalstate.state;
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-[70px] bg-emerald-100 z-10 ">
      <div className="flex justify-between px-10">
        <div className="py-5 text-xl font-semibold md:text-3xl">
          <Link to="/">Studoyo App</Link>
        </div>

        <div className="py-6">
          <Link to="/cart">
            <span className="flex absolute -mt-3 ml-5">
              <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 text-xs text-white justify-center ">
                {state.length}
              </span>
            </span>
            <HiOutlineShoppingBag className="text-3xl  " />
          </Link>
        </div>

        <div className="py-6">
          <button
            onClick={() => navigate("/add-product")}
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
