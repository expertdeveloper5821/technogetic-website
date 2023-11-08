import * as dotenv from 'dotenv';
dotenv.config();

export interface EnvironmentConfig {
  DB_URL: string;
  EMAIL_HOST: string;
  EMAIL_USER: string;
  EMAIL_PASSWORD: string;
  EMAIL_PORT: number;
  EMAIL_FROM: string;
  SECRET_KEY: string;
}

export const environmentConfig: EnvironmentConfig = {
  DB_URL: process.env.DbUrl || 'mongodb://localhost:27017/mydatabase',
  EMAIL_HOST: process.env.emailHost || 'email@example.com',
  EMAIL_USER: process.env.emailUser || 'email@example.com',
  EMAIL_PASSWORD: process.env.emailPassword || 'emailPassword',
  EMAIL_PORT: process.env.emailPort ? parseInt(process.env.emailPort, 10) : 587,
  EMAIL_FROM: process.env.emailFrom || 'noreply@example.com',
  SECRET_KEY : process.env.APP_SECRET || 'example'
};
