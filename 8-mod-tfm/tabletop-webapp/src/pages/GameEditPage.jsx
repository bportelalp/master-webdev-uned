import { useParams } from "react-router-dom";
import GameForm from "../components/games/GameForm";


const GameEditPage = () => {
    const { gameId } = useParams();

    return <GameForm gameId={gameId} />
}

export default GameEditPage;