import css from './Header.module.css'
import mealImg from '../../assets/meals.jpg'
import HeaderCardButton from './HeaderCartButton';

interface HeaderProps{
  onShowCart?(): void
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <header className={css.header}>
        <h1>React Meals</h1>
        <HeaderCardButton onClick={props.onShowCart}>Cart</HeaderCardButton>
      </header>
      <div className={css['main-image']}>
        <img src={mealImg} alt="Meals images"/>
      </div>
    </>
  );
}

export default Header;
