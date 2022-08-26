import { SQLDataSource } from 'datasource-sql';

export class KnexDatasource extends SQLDataSource {
  insertUser = async (email, name, address = null) => {
    const createdUsers = await this.knex()
      .insert({ email, name, address })
      .into('user')
      .returning(['id', 'email', 'name', 'address']);
    return createdUsers[0];
  };

  findAllUser = () => {
    return this.knex.select('*').from('user');
  };

  findUserById = async (id: string) => {
    const users = await this.knex.select('*').from('user').where({ id });
    return users[0];
  };
}
