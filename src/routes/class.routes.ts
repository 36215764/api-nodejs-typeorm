import { Router } from 'express';
import { getConnection, getCustomRepository } from 'typeorm';
import DisciplineRepository from '../repositories/DisciplineRepository';

const classRouter = Router();

classRouter.post('/', async (request, response) => {
  try {
    const repo = getCustomRepository(DisciplineRepository);
    const res = await repo.save(request.body);
    await getConnection().queryResultCache?.remove(['listDiscipline']);
    return response.status(201).json(res);
  } catch (error) {
    console.error('error.message :>> ', error);
    return response.status(500).json(error);
  }
});

classRouter.get('/', async (request, response) => {
  try {
    const repo = getCustomRepository(DisciplineRepository);
    const res = await repo.find({
      cache: { id: 'listDiscipline', milliseconds: 10000 },
    });

    return response.status(200).json(res);
  } catch (error) {
    console.error('error.message :>> ', error);
    return response.status(500).json(error);
  }
});

classRouter.get('/:name', async (request, response) => {
  try {
    const { name } = request.params;
    const repo = getCustomRepository(DisciplineRepository);
    const res = await repo.findByName(name);

    return response.status(200).json(res);
  } catch (error) {
    console.error('error.message :>> ', error);
    return response.status(500).json(error);
  }
});

export default classRouter;
