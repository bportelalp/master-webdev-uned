
import { MealOrder } from '../../interfaces/MealOrder';
import css from './CartItem.module.css';

interface CartItemProps extends React.PropsWithChildren {
  mealOrder: MealOrder,
  onAdd?(): void,
  onRemove?(): void
}

const CartItem: React.FC<CartItemProps> = (props) => {
  const price = `$${props.mealOrder.price.toFixed(2)}`;

  return (
    <li className={css['cart-item']}>
      <div>
        <h2>{props.mealOrder.name}</h2>
        <div className={css.summary}>
          <span className={css.price}>{price}</span>
          <span className={css.amount}>x {props.mealOrder.amount}</span>
        </div>
      </div>
      <div className={css.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;