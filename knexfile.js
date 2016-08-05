require('dotenv').config();

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'profile_Maker',
      charset: 'utf8',
      debug: true,
    }
  },
  production: {
    client: 'postgresql',
    connection: {
      url: process.env.DATABASE_URL + '?ssl=true',
      host: process.env.RDS_DBHOST,
      database: process.env.RDS_DBNAME,
      user: process.env.RDS_USERNAME,
      password: process.env.RDS_PASSWORD
    },
  }
};
