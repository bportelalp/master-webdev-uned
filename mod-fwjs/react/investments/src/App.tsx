/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import './App.css';
import UserInput from './componentes/UserInput/UserInput';
import Header from './componentes/Header/Header';
import ResultsTable from './componentes/ResultsTable/ResultsTable';
import InvestmentProposal from './interfaces/InvestmentProposal';
import YearlyInvestment from './interfaces/YearlyInvestment';

function App() {
  const [yearlyData, setYearlyData] = useState<YearlyInvestment[]>([])

  const calculateHandler = (userInput: InvestmentProposal) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData: YearlyInvestment[] = []; // per-year results

    let currentSavings = userInput.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = userInput.yearlySavings; // as mentioned: feel free to change the shape...
    const expectedReturn = userInput.expectedInterest / 100;
    const duration = userInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        initialInvestment: userInput.currentSavings
      });
    }

    setYearlyData(yearlyData);
  };

  return (
    <div>
      <Header />
      <UserInput onCalculate={calculateHandler} onReset={() => setYearlyData([])} />

      <ResultsTable data={yearlyData} />
    </div>
  );
}

export default App;
