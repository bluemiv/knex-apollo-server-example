import type { Knex } from 'knex';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });
const { NODE_ENV, POSTGRES_HOST, POSTGRES_DB, POSTGRES_PORT, POSTGRES_USER, POSTGRES_PASSWORD } = process.env;

const knexConfig: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: POSTGRES_HOST,
      port: parseInt(POSTGRES_PORT),
      user: POSTGRES_USER,
      password: POSTGRES_PASSWORD,
      database: POSTGRES_DB,
    },
    migrations: {
      directory: './migrations',
    },
  },
};

export default knexConfig[NODE_ENV?.toLowerCase() || 'development'];
