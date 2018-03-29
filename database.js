const mysql = require('mysql');
const config = require('./config');

/* 链接数据库 */
const databse =mysql.createConnection({
    host:config.host,
    user:config.user,
    port:config.port,
    password:config.password,
    database:config.database
});

databse.connect();

module.exports=databse;