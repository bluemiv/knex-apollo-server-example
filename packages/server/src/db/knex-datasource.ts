import { SQLDataSource } from 'datasource-sql';

export class KnexDatasource extends SQLDataSource {
  getUsers() {
    return this.knex.select('*').from('user');
  }
}
