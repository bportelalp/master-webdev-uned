import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Movie from '@mui/icons-material/Movie';

const NavigationBar = () => {

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                            <Movie />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Aplicación películas
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}


export default NavigationBar;