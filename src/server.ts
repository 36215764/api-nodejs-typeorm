import env from 'dotenv';
import app from './app';
import 'reflect-metadata';
import './database';

env.config();

app.listen(3000, () => {
  console.log('🏃 Running Server');
});
