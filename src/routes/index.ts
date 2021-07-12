import { Router } from 'express';
import classRouter from './class.routes';

const routes = Router();

/**
 * Registrando as rotas...
 */
routes.use('/class', classRouter);

export default routes;
