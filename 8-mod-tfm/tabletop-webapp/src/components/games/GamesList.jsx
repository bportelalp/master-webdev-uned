import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, Pagination, Box } from '@mui/material';
import api from '../../services/tabletop-client.js';
const GamesList = () => {
    // Número de elementos por página
    const itemsPerPage = 2;
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
        <Box sx={{ padding: 2 }}>
            <Grid container spacing={2}>
                {paginatedData.map((item, index) => {
                    return (<Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{item.title}</Typography>
                                {/* <Typography variant="body2" color="text.secondary">
                                    {item.authors[0]}
                                </Typography> */}
                            </CardContent>
                        </Card>
                    </Grid>)
                })}
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
