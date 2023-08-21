import css from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon';

const HeaderCardButton: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <button className={css.button}>
      <span className={css.icon}>
        <CartIcon />
      </span>
      <span>{props.children?? 'Your cart'}</span>
      <span className={css.badge}>3</span>
    </button>
  );
}

export default HeaderCardButton;