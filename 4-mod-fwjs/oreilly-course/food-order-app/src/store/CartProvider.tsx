import { useReducer } from "react";
import CartContext from "./cartContext";
import { MealsCart } from "../interfaces/MealsCart";
import { Meal } from "../interfaces/Meal";
import { MealOrder } from "../interfaces/MealOrder";

const defaultCartState: MealsCart = {
  mealOrders: [],
  totalAmount: 0,
  addItem: (item: any) => { },
  removeItem: (id: any) => { }
};

interface MealEditionAction {
  type: string,
  item?: MealOrder,
  id?: string
}

const cartReducer = (state: MealsCart, action: MealEditionAction): MealsCart => {
  if (action.type === 'ADD') {
    const updatedItems = [...state.mealOrders]
    let equivalent = state.mealOrders.find(i => i.id === action.item!.id);
    if (equivalent) {
      const indexEquivalent = state.mealOrders.indexOf(equivalent);
      equivalent = { ...equivalent! };
      equivalent.amount += action.item!.amount;
      updatedItems[indexEquivalent] = equivalent;
    }
    else
      updatedItems.push(action.item!)

    return {
      mealOrders: updatedItems,
      totalAmount: updatedItems.reduce((sum, item) => sum + (item.amount * item.price), 0),

      addItem: () => { },
      removeItem: () => { }
    };
  }
  else if (action.type === 'REMOVE') {
    const updatedItems = [...state.mealOrders]
    let equivalent = state.mealOrders.find(i => i.id === action.item!.id);
    if (equivalent) {
      const indexEquivalent = state.mealOrders.indexOf(equivalent);
      equivalent = { ...equivalent! };
      equivalent.amount -= action.item!.amount;
      if (equivalent.amount <= 0)
        delete updatedItems[indexEquivalent]
      else
        updatedItems[indexEquivalent] = equivalent;
    }
    return {
      mealOrders: updatedItems,
      totalAmount: updatedItems.reduce((sum, item) => sum + (item.amount * item.price), 0),
      addItem: () => { },
      removeItem: () => { }
    };
  }
  return defaultCartState
}

const CartProvider: React.FC<React.PropsWithChildren> = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item: Meal, amount: number) => {
    const itemOrder = (item as MealOrder);
    itemOrder.amount = amount
    dispatchCartAction({ type: 'ADD', item: {...itemOrder} });
  };

  const removeItemFromCartHandler = (item: Meal, amount: number) => {
    const itemOrder = (item as MealOrder);
    itemOrder.amount = amount
    dispatchCartAction({ type: 'REMOVE', item: itemOrder });
  };

  const cartContext: MealsCart = {
    mealOrders: cartState.mealOrders,
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