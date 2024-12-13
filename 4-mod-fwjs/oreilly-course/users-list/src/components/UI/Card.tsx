/**
 * Ejemplo usando modulos css
 */
import css from './Card.module.css'

/**
 * Hereda de React.PropsWithChildren para tener la propiedad children
 * y además se añade className para que el componente card incorpore
 * a parte de su propio css, el que provenga de aguas arriba
 */
interface CardProps extends React.PropsWithChildren {
  className?: string
}

const Card : React.FC<CardProps> = (props) => {
  return (
    <div className={`${css.card} ${props.className}`}>
      {props.children}
    </div>
  )
}

export default Card;