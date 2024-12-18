import { Button } from '@mui/material';
import GamesList from '../components/games/GamesList';
import './GamesPage.css'
import { useNavigate } from 'react-router-dom';
const GamesPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="home">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <h2>Catálogo de juegos</h2>
                    <Button variant="outlined" onClick={() => navigate('/game/edit')}>
                        Añadir nuevo juego
                    </Button>
                </div>
                <GamesList />
            </div>
        </>
    );
}

export default GamesPage