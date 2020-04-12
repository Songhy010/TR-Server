const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('kLOdBTBaDk', 'kLOdBTBaDk', 'Vqs1i6gqOK', {
  host: 'remotemysql.com',
  dialect:'mysql',/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  //logging: false
});

module.exports  = sequelize;