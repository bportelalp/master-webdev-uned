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

}

const MealItemForm: React.FC<MealItemFormProps> = (props) => {
  return (
    <form className={css.form}>
      <Input label='Amount' input={inputConfig} />
      <button>Add</button>
    </form>
  );
}

export default MealItemForm;