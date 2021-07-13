import env from 'dotenv';
import { EncryptionTransformer } from 'typeorm-encrypted';

env.config();

// eslint-disable-next-line import/prefer-default-export
export const MyCripto = new EncryptionTransformer({
  key: process.env.DB_KEY || '',
  algorithm: 'aes-256-cbc',
  ivLength: 16,
  iv: process.env.DB_IV,
});
