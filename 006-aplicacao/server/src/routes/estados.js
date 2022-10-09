import { Router } from 'express';
import { CreateEstadoController } from '../controllers/estados/CreateEstadoController.js';
import { GetAllEstadosController } from '../controllers/estados/GetAllEstadosController.js';
import { GetEstadoByIdController } from '../controllers/estados/GetEstadoByIdController.js'

const estadoRouter = Router();
const createEstadoController = new CreateEstadoController();
const getAllEstadosController = new GetAllEstadosController();
const getEstadoByIdController = new GetEstadoByIdController();

estadoRouter.get('/', (request, response) => {
    response.json({
        message: "Server is running."
    })
});

estadoRouter.post('/estados', createEstadoController.handle);

estadoRouter.get('/estados', getAllEstadosController.handle);

estadoRouter.get('/estados/:id', getEstadoByIdController.handle);

export { estadoRouter }