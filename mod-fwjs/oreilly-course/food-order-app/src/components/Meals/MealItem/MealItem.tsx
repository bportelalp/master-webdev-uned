import { useContext } from "react";
import { Meal } from "../../../interfaces/Meal";

import css from './MealItem.module.css'
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cartContext";

interface MealItemProps extends React.PropsWithChildren {
  meal: Meal
}

const MealItem: React.FC<MealItemProps> = (props) => {
  const ctx = useContext(CartContext)

  const price = `$${props.meal.price.toFixed(2)}`
  return (
    <li className={css.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={css.description}>{props.meal.description}</div>
        <div className={css.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAdd={(amount) => ctx.addItem(props.meal, amount)}/>
      </div>
    </li>
  )
}

export default MealItem;