import YearlyInvestment from "../../interfaces/YearlyInvestment";
import './ResultsTable.css'

interface ResultsTableProps {
  data: YearlyInvestment[]
}

const formatter = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

const ResultsTable: React.FC<ResultsTableProps> = (props) => {

  let body: JSX.Element =
    (
      <tr>
        <td colSpan={5}>
          No data available
        </td>
      </tr>
    )

  if (props.data.length > 0) {
    body =
      (
        <>
          {props.data.map(inv =>
          (
            <tr key={inv.year}>
              <td>{inv.year}</td>
              <td>{formatter.format(inv.savingsEndOfYear)}</td>
              <td>{formatter.format(inv.yearlyInterest)}</td>
              <td>{formatter.format(inv.savingsEndOfYear - inv.initialInvestment - inv.yearlyContribution * inv.year)}</td>
              <td>{formatter.format(inv.initialInvestment + inv.yearlyContribution * inv.year)}</td>
            </tr>
          ))}
        </>
      )
  }

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {body}
      </tbody>
    </table>
  );
}

export default ResultsTable;