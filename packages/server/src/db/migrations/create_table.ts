import type { Knex } from 'knex';

export const up = async (knex: Knex): Promise<void> => {
  return knex.schema.createTable('user', (t) => {
    t.increments('id').primary();
    t.string('email').notNullable();
    t.string('name').notNullable();
    t.string('address').nullable();
    t.timestamps(false, true);
  });
};

export const down = async (knex: Knex): Promise<void> => {
  return knex.schema.dropTableIfExists('user');
};
