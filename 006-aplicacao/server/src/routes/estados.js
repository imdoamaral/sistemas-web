import { Router } from 'express';
import { CreateEstadoController } from '../controllers/estados/CreateEstadoController.js';
import { GetAllEstadosController } from '../controllers/estados/GetAllEstadosController.js';
import { GetEstadoByIdController } from '../controllers/estados/GetEstadoByIdController.js';
import { UpdateEstadoController } from '../controllers/estados/UpdateEstadoController.js';

const estadoRouter = Router();
const createEstadoController = new CreateEstadoController();
const getAllEstadosController = new GetAllEstadosController();
const getEstadoByIdController = new GetEstadoByIdController();
const updateEstadoController = new UpdateEstadoController();

estadoRouter.get('/', (request, response) => {
    response.json({
        message: "Server is ruuuuunning :)"
    })
});

estadoRouter.post('/estados', createEstadoController.handle);
estadoRouter.get('/estados', getAllEstadosController.handle);
estadoRouter.get('/estados/:id', getEstadoByIdController.handle);
estadoRouter.put('/estados', updateEstadoController.handle);

export { estadoRouter }