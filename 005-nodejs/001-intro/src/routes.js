import express, { response } from 'express'

const app = express();

app.use(express.json());

// Rotas
app.get('/', (request, response) => {
    response.send('Página principal');
})

app.post('/data', (request, response) => {

    const { id, name } = request.body;

    response.json({
        id,
        name
    });
});

app.get('/data/:id', (request, response) => {

    const { id } = request.params;

    response.send({
        id,
        name: "get:data/:id"
    });
});

const data = {
    id: 123,
    name: 'Israel'
}

export default app;