import { createContext, useReducer } from "react";
export const CartContext = createContext();

export function Context(props) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const filterItem = state.filter(
          (item) => action.payload.id === item.id
        );
        if (filterItem.length > 0) {
          return state;
        } else return [...state, action.payload];

      case "REMOVE":
        const removeItem = state.filter(
          (item) => item.id !== action.payload.id
        );

        return removeItem;

      case "INCREASE":
        const increementItem = state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
        return increementItem;

      case "DECREASE":
        const decreementItem = state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
        return decreementItem;

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, []);
  const info = { state, dispatch };
  return (
    <div>
      <CartContext.Provider value={info}>{props.children}</CartContext.Provider>
    </div>
  );
}
