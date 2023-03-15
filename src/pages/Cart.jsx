import EmptyCart from "../components/EmptyCart";
import { BsArrowLeft } from "react-icons/bs";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { HiTrash } from "react-icons/hi";
import { CartContext } from "../context/Context";

const Cart = () => {
  const Globalstate = useContext(CartContext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div>
      {state.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="flex justify-center font-light ">
          <div class="flex  flex-col w-full px-6 sm:px-52  absolute bg-white">
            <div class="flex-1 py-1 px-6 sm:px-6 p-2">
              <Link to="/">
                <div className="flex justify-start w-40 bg-green-400 rounded-xl mt-2 px-1 hover:scale-105 duration-500">
                  <span className="text-sm py-1">
                    <BsArrowLeft />
                  </span>
                  <h2 className="text-sm font-normal text-gray-900 pl-2 ">
                    Continue Shopping
                  </h2>
                </div>
              </Link>

              <div className="flex justify-around">
                <h2 className="text-2xl font-medium text-gray-900 ">
                  Shopping Cart
                </h2>
              </div>

              {/* cart items */}
              <div className=" mt-3 h-96  pr-5 scrollbar-thin scrollbar-thumb-[#4ADE80] scrollbar-track-whitex  overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                <div className="flow-root">
                  <ul className="-my-6 divide-y divide-green-600">
                    {state.map((cartItem, index) => {
                      return (
                        <li key={index} className="flex py-6">
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                              src={cartItem.image}
                              alt=""
                              className="h-32 w-32 object-cover object-center"
                            />
                          </div>

                          <div className="ml-4 flex flex-1 flex-col ">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900 leading-4">
                                <h3
                                  className="text-sm sm:text-xl
                                "
                                >
                                  {cartItem.title}
                                </h3>
                                <p className="ml-4 ">
                                  {(cartItem.price * cartItem.quantity).toFixed(
                                    2
                                  )}
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                              <div class="flex m-2">
                                <button
                                  className="text-lg w-5 h-5 font-semibold "
                                  onClick={() =>
                                    dispatch({
                                      type: "INCREASE",
                                      payload: cartItem,
                                    })
                                  }
                                >
                                  +
                                </button>
                                <p className="text-lg font-serif">
                                  {cartItem.quantity}
                                </p>
                                <button
                                  className="text-lg w-5 h-5 font-semibold"
                                  onClick={() => {
                                    if (cartItem.quantity > 1) {
                                      dispatch({
                                        type: "DECREASE",
                                        payload: cartItem,
                                      });
                                    } else {
                                      dispatch({
                                        type: "REMOVE",
                                        payload: cartItem,
                                      });
                                    }
                                  }}
                                >
                                  -
                                </button>
                              </div>
                              <div className="flex">
                                <button
                                  type="button"
                                  className="font-medium text-[#4ADE80] hover:scale-125 duration-500 "
                                  onClick={() =>
                                    dispatch({
                                      type: "REMOVE",
                                      payload: cartItem,
                                    })
                                  }
                                >
                                  <HiTrash className="text-2xl" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            {/* cart footer */}

            <div class="flex justify-between text-base font-medium text-gray-900 bottom-0">
              <p>Subtotal</p>
              <p className="pr-10">${total.toFixed(2)}</p>
            </div>
            <div class="mt-3">
              <Link
                href="#"
                class="flex items-center justify-center rounded-md border border-transparent bg-[#4ADE80] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-400"
              >
                Checkout
              </Link>
            </div>
            <div class="mt-3 flex justify-center text-center text-sm text-gray-500">
              <p>
                or
                <Link to="/">
                  <button
                    type="button"
                    class="font-medium text-green-600 hover:text-green-400"
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
