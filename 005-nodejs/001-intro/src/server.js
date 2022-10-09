import app from './routes.js';
import { connect } from './database.js';

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor iniciado - porta ${port}.`);
});

connect();