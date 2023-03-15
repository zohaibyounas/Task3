import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TiArrowLeftThick } from "react-icons/ti";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div>
      <div className="bg-emerald-50 w-full px-16 md:px-0 h-screen flex items-center justify-center fixed">
        <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
          <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-black">
            <HiOutlineShoppingBag />
          </p>
          <p className="text-2xl md:text-2xl lg:text-5xl font-bold tracking-wider   text-black mt-4 text-center">
            Your cart is empty
          </p>
          <p className="text-gray-500 mt-4 border-b-2 border-green-600  pb-4 text-center">
            You have not added any product to cart
          </p>
          <Link
            to="/"
            className="flex items-center space-x-2 bg-green-400 hover:scale-110 text-gray-100 px-4 py-2 mt-6 rounded-2xl transition duration-150"
            title="Return Home"
          >
            <TiArrowLeftThick className="text-xl" />

            <span className="text-xs sm:text-xl font-semibold ">
              RETURN TO SHOP
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
