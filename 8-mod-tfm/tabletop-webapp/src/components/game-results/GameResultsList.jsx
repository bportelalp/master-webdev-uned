import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid} from "@mui/material";

import GameResultsTable from "./GameResultsTable";
import api from '../../services/tabletop-client.js';

const today = new Date();
const thirtyDaysAgo = new Date(today);
thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

const GameResultsList = ({ gameId }) => {
  const [rounds, setRounds] = useState([]);


  useEffect(() => {
    const fetchGameResults = async () => {
      try {
        const response = await api.getGameResults(gameId, thirtyDaysAgo, today);
        const sorted = response.sort((a, b) => new Date(b.playedOn) - new Date(a.playedOn))
        setRounds(sorted);
      } catch (error) {
        console.error("Error fetching game results:", error);
      }
    };
    fetchGameResults();
  }, [gameId]);


  return (
    <>

      <div style={{ paddingLeft: "1.5rem" }}>
        <h2>Partidas jugadas últimos 30 días</h2>
      </div>
      <Grid container spacing={2}>
        {rounds.map((round) => (
          <Grid item xs={12} sm={6} key={round._id} style={{ display: "flex", justifyContent: "center" }} >
            <Card variant="outlined" style={{ border: "2px solid #ccc", borderRadius: "10px", width: "100%" }}>
              <CardContent>
                <Typography variant="h6" align="center" gutterBottom>
                  Fecha de partida: {new Date(round.playedOn).toLocaleString()}
                </Typography>
                <GameResultsTable results={round.results} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GameResultsList;
