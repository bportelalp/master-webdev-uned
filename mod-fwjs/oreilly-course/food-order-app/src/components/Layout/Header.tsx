import css from './Header.module.css'
import mealImg from '../../assets/meals.jpg'
import HeaderCardButton from './HeaderCartButton';

const Header: React.FC = () => {
  return (
    <>
      <header className={css.header}>
        <h1>React Meals</h1>
        <HeaderCardButton>Cart</HeaderCardButton>
      </header>
      <div className={css['main-image']}>
        <img src={mealImg} alt="Meals images"/>
      </div>
    </>
  );
}

export default Header;
