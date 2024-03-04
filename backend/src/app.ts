import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors({ origin: '*' }));

export default app;