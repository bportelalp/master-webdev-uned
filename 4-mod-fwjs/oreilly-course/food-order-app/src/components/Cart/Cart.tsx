import { useContext } from 'react';
import Modal from '../UI/Modal';
import css from './Cart.module.css'
import CartContext from '../../store/cartContext';
import CartItem from './CartItem';
import { MealOrder } from '../../interfaces/MealOrder';

interface CartProps {
  onClose?(): void
}

/**
 * Carro de la compra que contiene los items añadidos.
 * @param props 
 * @returns 
 */
const Cart: React.FC<CartProps> = (props) => {
  const ctx = useContext(CartContext);



  const cartItems: MealOrder[] = ctx.mealOrders
  return (
    <Modal onClickBackdrop={props.onClose}>
      <ul className={css['cart-items']}>
        {cartItems.map(meal =>
          <CartItem mealOrder={meal}
            onAdd={() => ctx.addItem({...meal}, 1)}
            onRemove={() => ctx.removeItem({...meal}, 1)}
          ></CartItem>)}
      </ul>
      <div className={css.total}>
        <span>TotalAmount</span>
        <span>{ctx.totalAmount}</span>
      </div>
      <div className={css.actions}>
        <button className={css['button-_alt']} onClick={props.onClose}>Close</button>
        {cartItems.length > 0 ?
          <button className={css.button}>Order</button>
          :
          <></>
        }
      </div>
    </Modal>
  );
}

export default Cart;