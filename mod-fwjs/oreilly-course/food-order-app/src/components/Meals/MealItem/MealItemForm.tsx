import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import css from './MealItemForm.module.css'

const inputConfig = {
  id: 'amount',
  type: 'number',
  min: '1',
  max: `5`,
  step: '1',
  defaultValue: '1'
}

interface MealItemFormProps extends React.PropsWithChildren {
  onAdd?(amount: number): void
}

const MealItemForm: React.FC<MealItemFormProps> = (props) => {
  const [amountIsValid, setAmountIsValid] = useState<boolean>(true);
 const amountInputRef =  useRef<any>()
 
 
 const submitHandler = (event: any) => {
  event.preventDefault();

  const enteredAmount = amountInputRef.current.value;
  const enteredAmountNumber = +enteredAmount;

  if (
    enteredAmount.trim().length === 0 ||
    enteredAmountNumber < 1 ||
    enteredAmountNumber > 5
  ) {
    setAmountIsValid(false);
    return;
  }
  props.onAdd?.(enteredAmountNumber)
};
 return (
    <form className={css.form} onSubmit={submitHandler}>
      <Input ref={amountInputRef} label='Amount' input={inputConfig} />
      <button>Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
}

export default MealItemForm;