import { useParams } from "react-router-dom";
import GameDetails from "../components/games/GameDetails";


const GameDetailPage = () => {
    const { gameId } = useParams();

    return <GameDetails gameId={gameId} />
}

export default GameDetailPage;