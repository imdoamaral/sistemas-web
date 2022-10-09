const express = require('express');

const app = express();

const port = 3000;

// Rotas
app.get('/', (request, response) => {
    response.send('Página principal');
});

app.get('/data', (request, response) => {
    response.json({
        id: 1234,
        firstName: 'Israel',
        lastName: 'Amaral'
    });
})

app.listen(port, () => {
    console.log(`Servidor iniciado - porta ${port}.`);
});