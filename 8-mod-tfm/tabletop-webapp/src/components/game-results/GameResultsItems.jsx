
import { Table, TableBody, TableCell, TableRow } from "@mui/material";

const GameResultsItems = ({ items }) => {

  if(!items)
    return (<div>No hay datos</div>)

  return (
    <Table size="small" padding="none">
      <TableBody>
        {items.map((item, index) => (
          <TableRow key={index}>
            <TableCell
              align="left"
              style={{ border: "none" }}
            >
              {item.name}
            </TableCell>
            <TableCell
              align="right"
              style={{ border: "none" }}
            >
              {item.score}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default GameResultsItems;