import { Router } from 'express';
import { CreateEstadoController } from '../controllers/estados/CreateEstadoController.js';

const estadoRouter = Router();
const createEstadoController = new CreateEstadoController();

estadoRouter.get('/', (request, response) => {
    response.json({
        message: "Server is running."
    })
});

estadoRouter.post('/estados', createEstadoController.handle);

export { estadoRouter }