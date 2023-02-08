export const initialState = {
    cart: null,
    total: null,
  };
  
  export const actionType = {
    setCart: "setCart",
    setTotal: "setTotal",
  };
  
  const reducer = (state, action) => {
    console.log(action);
  
    switch (action.type) {
      case actionType.setCart:
        return {
          ...state,
          cart: action.cart,
        };
  
      case actionType.setTotal:
        return {
          ...state,
          total: action.total,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;