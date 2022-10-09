import { Router } from 'express';
import { CreateCidadeController } from '../controllers/cidades/CreateCidadeController.js';

const cidadeRouter = Router();

const createCidadeController = new CreateCidadeController();

cidadeRouter.post('/cidades', createCidadeController.handle);

export { cidadeRouter }