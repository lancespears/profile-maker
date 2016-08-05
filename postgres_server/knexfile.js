module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'profile_Mkr',
      charset: 'utf8',
      debug: true,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations/',
      tableName: 'knex_migrations'
    }
  },
  production: {
    client: 'postgresql',
    connection: {
      host: process.env.RDS_DBHOST,
      database: process.env.RDS_DBNAME,
      user: process.env.RDS_USERNAME,
      password: process.env.RDS_PASSWORD
    },
    migrations: {
      directory: './migrations/',
      tableName: 'knex_migrations'
    }
  }

};
