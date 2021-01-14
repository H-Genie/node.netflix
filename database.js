const mysql = require('mysql');

// SQL 연결
module.exports = mysql.createPool({
    connectionLimit : 10,
    host : 'nodejs-007.cafe24.com',
    user : 'h0genie',
    password : 'st227213314!@',
    database : 'h0genie',
    debug : false
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
