const mysql = require("mysql");

// SQL 연결
module.exports = mysql.createPool({
    connectionLimit: 10,
    host: "us-cdbr-east-02.cleardb.com",
    user: "b0bfe1f0e5ca95",
    password: "18256dda",
    database: "heroku_35ac0793c3cf4c1",
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
