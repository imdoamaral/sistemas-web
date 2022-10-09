import express from 'express';
import { estadoRouter } from './routes/routes.js';

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(estadoRouter);

app.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}.`);
});