import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import ClassRepository from '../repositories/ClassRepository';

const classRouter = Router();

classRouter.post('/', async (request, response) => {
  try {
    const repo = getCustomRepository(ClassRepository);
    const res = await repo.save(request.body);

    return response.status(201).json(res);
  } catch (error) {
    console.error('error.message :>> ', error);
    return response.status(500).json(error);
  }
});

classRouter.get('/', async (request, response) => {
  try {
    const repo = getCustomRepository(ClassRepository);
    const res = await repo.find();

    return response.status(200).json(res);
  } catch (error) {
    console.error('error.message :>> ', error);
    return response.status(500).json(error);
  }
});

classRouter.get('/:name', async (request, response) => {
  try {
    const { name } = request.params;
    const repo = getCustomRepository(ClassRepository);
    const res = await repo.findByName(name);

    return response.status(200).json(res);
  } catch (error) {
    console.error('error.message :>> ', error);
    return response.status(500).json(error);
  }
});

export default classRouter;
