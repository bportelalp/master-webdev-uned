
import debugLib from 'debug'
debugLib.enable("*");
const debug = debugLib("api:app")

import express, { json, urlencoded, static as staticFiles } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import dotenv from "dotenv"
dotenv.config();

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import gamesRouter from './routes/games.js';
import errorHandler from './middlewares/error-handler.js';

const __filename = fileURLToPath(import.meta.url);
const publicDir = path.join(path.dirname(__filename), 'public');
debug("Sirviendo archivos desde", publicDir);


var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/public', express.static(publicDir));

app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/games', gamesRouter);
debug("Rutas configuradas");

app.use(errorHandler)
export default app;
