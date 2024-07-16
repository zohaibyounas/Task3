import { useContext } from "react";
import { CartContext } from "../context/Context";

const Checkout = () => {
  const Globalstate = useContext(CartContext);
  const state = Globalstate.state;

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="flex justify-center font-light">
      <div className="flex flex-col w-full px-6 sm:px-52 absolute bg-white">
        <div className="py-6">
          <h2 className="text-2xl font-medium text-gray-900">
            Checkout Summary
          </h2>
        </div>
        <div className="flow-root">
          <ul className="-my-6 divide-y divide-green-600">
            {state.map((item, index) => (
              <li key={index} className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={item.image}
                    alt=""
                    className="h-32 w-32 object-cover object-center"
                  />
                </div>
                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900 leading-4">
                      <h3 className="text-sm sm:text-xl">{item.title}</h3>
                      <p className="ml-4">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-lg font-serif">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between text-base font-medium text-gray-900 bottom-0 mt-10 ml-8 bg-slate-500 px-12">
          <p>Total</p>
          <p className="pr-10">${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
