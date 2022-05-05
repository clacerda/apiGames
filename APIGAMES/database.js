const Sequileze = require("sequelize");

const connection = new Sequileze('guiagames', 'root', '---',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"
});


module.exports = connection;