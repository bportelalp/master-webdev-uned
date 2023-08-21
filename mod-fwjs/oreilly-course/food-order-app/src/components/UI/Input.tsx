import css from './Input.module.css'

interface InputProps extends React.PropsWithChildren {
  label: string,
  input:  {id: string} | any
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className={css.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input}/>
    </div>
  )
}

export default Input;