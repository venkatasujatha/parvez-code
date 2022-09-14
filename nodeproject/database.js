const { DataSource} = require('typeorm');
const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'nodeoperations',
  entities: ['api/entities/*.js'],
  migrations: ['migrations/*.js'],
  migrationsTableName:'nodeoperations_migrations',
  cli: {
    entitiesDir: ['api/entities/*.js'],
  },
  synchronize: true,
});

module.exports = { dataSource };
