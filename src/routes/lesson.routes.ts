import { Router } from 'express';
import { getRepository } from 'typeorm';
import Lesson from '../models/Lesson';

const lessonRouter = Router();

lessonRouter.post('/', async (req, res) => {
  try {
    const repo = getRepository(Lesson);
    const result = await repo.save(req.body);

    return res.status(201).json(result);
  } catch (error) {
    console.error('error.message :>> ', error);
    return res.status(500).json(error);
  }
});

lessonRouter.get('/', async (req, res) => {
  const repo = getRepository(Lesson);
  const result = await repo.find();
  res.json(result);
});

export default lessonRouter;
