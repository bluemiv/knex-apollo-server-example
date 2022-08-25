import type { Knex } from 'knex';

export const up = async (knex: Knex): Promise<void> => {
  return knex.schema.createTable('user', (t) => {
    t.increments('id');
    t.string('email').notNullable().unique();
    t.string('name').nullable();
    t.timestamps(false, true);
  });
};

export const down = async (knex: Knex): Promise<void> => {
  return knex.schema.dropTable('user');
};
