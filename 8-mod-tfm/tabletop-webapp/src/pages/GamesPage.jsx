import GamesList from '../components/games/GamesList';
import './GamesPage.css'
const GamesPage = () => {


    return (
        <>
            <div className="home">
                <h2>Catálogo de juegos</h2>
                <GamesList />
            </div>
        </>
    );
}

export default GamesPage