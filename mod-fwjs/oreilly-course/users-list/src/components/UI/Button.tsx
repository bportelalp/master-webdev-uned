import css from "./Button.module.css"


interface ButtonProps extends React.PropsWithChildren {
  /**
   * Sólo puede adquirir los valores siguientes
   */
  type?: 'submit' | 'reset' | 'button' | undefined
  onClick?(): void
}

const Button: React.FC<ButtonProps> = (props) => {

  return (
    <button onClick={() => props.onClick?.()} className={`${css.button}`} type={props.type || 'button'}>
      {props.children}
    </button>
  );
}

export default Button;