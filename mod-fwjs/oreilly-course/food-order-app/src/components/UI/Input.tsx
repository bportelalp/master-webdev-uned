import React from 'react';
import css from './Input.module.css'

interface InputProps extends React.PropsWithChildren {
  label: string,
  input:  {id: string} | any
}

const Input=  React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <div className={css.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input}/>
    </div>
  )
})

export default Input;