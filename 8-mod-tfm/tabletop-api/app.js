import express, { json, urlencoded, static as staticFiles } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

const __filename = fileURLToPath(import.meta.url);

var app = express();

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(staticFiles(path.join(path.dirname(__filename), 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

export default app;
