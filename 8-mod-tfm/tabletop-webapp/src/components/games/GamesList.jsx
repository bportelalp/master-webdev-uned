import React, { useState, useEffect } from 'react';
import {Grid, Pagination, Box } from '@mui/material';
import api from '../../services/tabletop-client.js';
import GameCard from './GameCard.jsx';
const GamesList = () => {
    // Número de elementos por página
    const itemsPerPage = 20;
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);

    useEffect(() => {
        api.getGames()
            .then(games => {
                setCurrentData(games)
            });
    }, [])

    let paginatedData = [];
    let totalPages = 0;

    const handlePageChange = (_, page) => setCurrentPage(page);

    if (currentData) {
        // Calcular la paginación
        totalPages = Math.ceil(currentData.length / itemsPerPage);
        paginatedData = currentData
            .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
            );
    }

    return (
        <Box sx={{ padding: 2, width: '100%'}}>
            <Grid container spacing={2}>
                {paginatedData.map((item, index) => (<GameCard game={item} key={index} />))}
            </Grid>

            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                />
            </Box>
        </Box>
    );
};

export default GamesList;
