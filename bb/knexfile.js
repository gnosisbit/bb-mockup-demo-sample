// Update with your config settings.
//Omly for migrations use
module.exports = {

  development: {
     client: 'mysql',
 connection: {
      host: '127.0.0.1',
      database: 'widget_cms',
      user:     'root',
      password: 'test',
      charset: 'utf8',
      debug:"true"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'mysql',
  connection: {
      host: '127.0.0.1',
      database: 'widget_cms',
      user:     'root',
      password: 'test',
      charset: 'utf8'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
   client: 'mysql',
    connection: {
      host: '127.0.0.1',
      database: 'widget_cms',
      user:     'root',
      password: 'test',
      charset: 'utf8'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
