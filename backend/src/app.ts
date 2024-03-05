import express from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import 'dotenv/config';
import cors from 'cors';
import userRoutes from './routes/UserRoutes';
import errorHandler from './utils/errorHandler';
console.log(`Database URL: ${process.env.POSTGRES_URL}`);

const app = express();

app.use(express.json());

app.use(cors({ origin: '*' }));

app.get('/', (req, res) => res.json({ ok: true }));
app.use(userRoutes);
app.use(errorHandler);

export default app;
