import { Button } from '@mui/material';
import GamesList from '../components/games/GamesList';
import './GamesPage.css'
const GamesPage = () => {


    return (
        <>
            <div className="home">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <h2>Catálogo de juegos</h2>
                    <Button variant="outlined">
                        Añadir nuevo juego
                    </Button>
                </div>
                <GamesList />
            </div>
        </>
    );
}

export default GamesPage