const mysql = require("mysql");

module.exports = mysql.createPool({
    connectionLimit: 10,
    host: "us-cdbr-east-04.cleardb.com",
    user: "bace9f6ecebfee",
    password: "f862a6c1",
    database: "heroku_6a433ca724d630e",
    debug: false,
});

/*
CREATE TABLE `tablename` (
    `id` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
    `password` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
    `salt` INT(10) NOT NULL,
    `가입일자` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE INDEX `id` (`id`) USING BTREE
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
;
*/
