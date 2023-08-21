import css from './Card.module.css'

const Card: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <div className={css.card}>{
      props.children}
    </div>);
}

export default Card;