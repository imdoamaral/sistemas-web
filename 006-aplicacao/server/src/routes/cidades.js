import { Router } from 'express';
import { CreateCidadeController } from '../controllers/cidades/CreateCidadeController.js';
import { GetAllCidadesController } from '../controllers/cidades/GetAllCidadesController.js';
import { GetCidadeByIdController } from '../controllers/cidades/GetCidadeByIdController.js';

const cidadeRouter = Router();

const createCidadeController = new CreateCidadeController();
const getAllCidadesController = new GetAllCidadesController();
const getCidadeByIdController = new GetCidadeByIdController();

cidadeRouter.post('/cidades', createCidadeController.handle);
cidadeRouter.get('/cidades', getAllCidadesController.handle);
cidadeRouter.get('/cidades/:id', getCidadeByIdController.handle);

export { cidadeRouter }