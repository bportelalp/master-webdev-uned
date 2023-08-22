import { Meal } from '../../interfaces/Meal';
import Modal from '../UI/Modal';
import css from './Cart.module.css'

interface CartProps {
  onClose?(): void
}

/**
 * Carro de la compra que contiene los items añadidos.
 * @param props 
 * @returns 
 */
const Cart: React.FC<CartProps> = (props) => {
  const cartItems: Meal[] = [{ id: '1', description: '1', name: '2', price: 25 }];

  return (
    <Modal onClickBackdrop={props.onClose}>
      <ul className={css['cart-items']}>
        {cartItems.map(meal => <li key={meal.id}>{meal.name}</li>)}
      </ul>
      <div className={css.total}>
        <span>TotalAmount</span>
        <span></span>
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