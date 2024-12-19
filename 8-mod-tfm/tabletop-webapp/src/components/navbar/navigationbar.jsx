import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Movie from '@mui/icons-material/Movie';
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const NavigationBar = () => {
    const navigate = useNavigate();

    const gotoHome = () => navigate("/home");

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Movie />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={gotoHome}>
                            Catálogo juegos de mesa
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}


export default NavigationBar;