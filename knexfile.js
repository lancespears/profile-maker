// require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'profile_Maker',
      charset: 'utf8',
      debug: true,
    }
  },
  production: {
    client: 'pg',
    connection: "dbname=ddnthf6v45n7q9 host=ec2-54-243-203-98.compute-1.amazonaws.com port=5432 user=qlwtzhzjjsaaey password=zZhyoTGHi-dGPqDcXypIN5LzSF sslmode=require"

  }
};
