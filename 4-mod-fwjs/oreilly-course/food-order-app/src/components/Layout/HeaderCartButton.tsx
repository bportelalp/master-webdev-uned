import css from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon';
import { useContext } from 'react';
import CartContext from '../../store/cartContext';
import { MealsCart } from '../../interfaces/MealsCart';

interface HeaderCardButtonProps extends React.PropsWithChildren {
  onClick?(): void
}

const HeaderCardButton: React.FC<HeaderCardButtonProps> = (props) => {
  const cartCtx = useContext<MealsCart>(CartContext);

  return (
    <button className={css.button} onClick={props.onClick}>
      <span className={css.icon}>
        <CartIcon />
      </span>
      <span>{props.children?? 'Your cart'}</span>
      <span className={css.badge}>{cartCtx.totalAmount}</span>
    </button>
  );
}

export default HeaderCardButton;