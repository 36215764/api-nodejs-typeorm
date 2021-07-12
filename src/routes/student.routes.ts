import { validate } from 'class-validator';
import { Router } from 'express';
import { getRepository } from 'typeorm';
import Student from '../models/Student';

const studentRouter = Router();

studentRouter.post('/', async (req, res) => {
  try {
    const repo = getRepository(Student);
    const { key, name, email } = req.body;
    const student = repo.create({ name, key, email });

    const errors = await validate(student);

    if (errors.length === 0) {
      const result = await repo.save(student);
      return res.status(201).json(result);
    }

    return res.status(400).json(errors.map(v => v.constraints));
  } catch (error) {
    console.error('error.message :>> ', error);
    return res.status(500).json(error);
  }
});

studentRouter.get('/', async (req, res) => {
  const repo = getRepository(Student);
  const result = await repo.find();
  res.json(result);
});

export default studentRouter;
