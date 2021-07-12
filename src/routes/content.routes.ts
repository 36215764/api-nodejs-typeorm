import { Router } from 'express';
import { getRepository } from 'typeorm';
import Content from '../models/Content';

const contentRouter = Router();

contentRouter.post('/', async (req, res) => {
  try {
    const repo = getRepository(Content);
    const result = await repo.save(req.body);

    return res.status(201).json(result);
  } catch (error) {
    console.error('error.message :>> ', error);
    return res.status(500).json(error);
  }
});

contentRouter.get('/', async (req, res) => {
  const repo = getRepository(Content);
  const result = await repo.find();
  res.json(result);
});

export default contentRouter;
