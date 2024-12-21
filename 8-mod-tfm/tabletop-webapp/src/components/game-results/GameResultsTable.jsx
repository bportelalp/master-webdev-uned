import GameResultsItems from './GameResultsItems';
import { Table, TableBody, TableCell, TableRow, TableHead, } from "@mui/material";

const GameResultsTable = ({ results }) => {

  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell align="center">Jugador</TableCell>
          <TableCell align="center">Detalles</TableCell>
          <TableCell align="center">Puntaje Global</TableCell>
          <TableCell align="center">Ganador</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {results.map((result, idx) => (
          <TableRow
            key={idx}
            style={{
              backgroundColor: result.win
                ? "rgba(0, 255, 0, 0.2)"
                : "inherit",
            }}
          >
            <TableCell align="center">{result.player}</TableCell>
            <TableCell align="center">
              <GameResultsItems items={result.resultItems} />
            </TableCell>
            <TableCell align="center">
              {result.globalResult}
            </TableCell>
            <TableCell align="center">
              {result.win ? "Sí" : "No"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )

}

export default GameResultsTable;