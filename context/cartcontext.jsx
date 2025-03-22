import reducer from "../reducer/cartreducer.jsx";
const { createContext, useReducer, useContext, useEffect } = require("react");

const CartContext = createContext();

const getLocalData = () => {
  if (typeof localStorage !== "undefined") {
    let localCartData = localStorage.getItem("allproducts");
    if (localCartData === null) {
      return [];
    } else {
      return JSON.parse(localCartData);
    }
  } else {
    // Handle the case where localStorage is not available
    return [];
  }
};

const initialState = {
  // cart: [],
  cart: getLocalData(),
  total_item: "",
  total_amount: "",
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: { product } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  useEffect(() => {
    localStorage.setItem("allproducts", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
