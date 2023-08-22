import { useReducer } from "react";
import { MealsCart } from "../interfaces/MealsCart";
import CartContext from "./cartContext";
import { MealOrder } from "../interfaces/MealOrder";

const defaultCartState: MealsCart = {
  items: [],
  totalAmount: 0,
  addItem: (item) => { },
  removeItem: (id) => { }
};

const cartReducer = (state: MealsCart, action: any): MealsCart => {
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item)
    const newTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
      addItem: (item) => { },
      removeItem: (id) => { }
    };
  }
  else if (action.type === 'REMOVE') {
    const updatedItems = state.items.concat(action.item)
    const newTotalAmount = state.totalAmount - action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
      addItem: (item) => { },
      removeItem: (id) => { }
    };
  }
  return defaultCartState
}

const CartProvider: React.FC<React.PropsWithChildren> = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item: MealOrder) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (id: string) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const cartContext: MealsCart = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;