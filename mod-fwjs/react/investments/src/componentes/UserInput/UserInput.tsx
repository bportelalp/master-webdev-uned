import { useState } from "react";
import InvestmentProposal from "../../interfaces/InvestmentProposal";
import './UserInput.css'

interface UserInputProps {
  onCalculate?(investment: InvestmentProposal): void,
  onReset?(): void
}

const UserInput: React.FC<UserInputProps> = (props) => {

  const [investment, setInvestment] = useState<InvestmentProposal>({
    currentSavings: 10000,
    yearlySavings: 1200,
    expectedInterest: 7,
    duration: 10
  });


  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onCalculate?.(investment);
  }

  const resetHandler = () => {
    console.log('Reset');
  }

  /**
   * Fija un campo general del parámetro de estado. Básicamente copia todo el objeto anterior pero solo cambia
   * el campo que corresponde por nombre
   * @param fieldName Nombre del campo
   * @param value Valor que se actualiza
   */
  const setField = (fieldName: string, value: number) => {
    setInvestment((previous) => {
      return {
        ...previous,
        [fieldName]: value
      }
    })
  }

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings (€)</label>
          <input onChange={(e) => setField('currentSavings', +e.target.value)} value={investment.currentSavings} type="number" id="current-savings" />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings (€)</label>
          <input onChange={(e) => setField('yearlySavings', +e.target.value)} value={investment.yearlySavings} type="number" id="yearly-contribution" />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input onChange={(e) => setField('expectedInterest', +e.target.value)} value={investment.expectedInterest} type="number" id="expected-return" />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input onChange={(e) => setField('duration', +e.target.value)} value={investment.duration} type="number" id="duration" />
        </p>
      </div>
      <p className="actions">
        <button type="reset" onClick={resetHandler} className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}

export default UserInput;