import React from "react";
import { MealsCart } from "../interfaces/MealsCart";

const CartContext = React.createContext<MealsCart>({
  mealOrders: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {}
})


export default CartContext;