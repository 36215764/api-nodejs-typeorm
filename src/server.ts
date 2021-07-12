import env from 'dotenv';
import app from './app';
import 'reflect-metadata';
import './database';

env.config();

app.listen(process.env.PORT || 3000, () => {
  console.log('🏃 Running Server');
});
