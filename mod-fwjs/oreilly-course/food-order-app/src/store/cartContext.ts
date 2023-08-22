import React from "react";
import { MealsCart} from "../interfaces/MealsCart";

const CartContext = React.createContext<MealsCart>({
  items: [],
  totalAmount: 0,
  addItem: (item, amount) => {},
  removeItem: (id) => {}
})


export default CartContext;