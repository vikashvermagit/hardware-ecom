const cartreducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { product } = action.payload;

    let cartProduct;

    cartProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
    };

    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curElem) => curElem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }
  return state;
};

export default cartreducer;
