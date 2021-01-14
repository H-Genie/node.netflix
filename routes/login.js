const pool = require("../database");
const AES = require("mysql-aes");

// 사용자 인증 함수
var login = function (id, password, callback) {
    pool.getConnection(function (err, conn) {
        if (err) {
            if (conn) {
                conn.release();
            }
            callback(err, null);
            return;
        }

        const columns = ["id", "password", "salt"];
        const tablename = "netflix";

        var exec = conn.query(
            "select ?? from ?? where id = ?",
            [columns, tablename, id],
            function (err, rows) {
                //차례대로 물음표 대체함
                conn.release();

                if (err) {
                    callback(err);
                    return;
                }

                if (rows.length > 0) {
                    var decrypt = AES.decrypt(rows[0].password, rows[0].salt);

                    if (decrypt === password) {
                        callback(null, rows);
                    } else {
                        callback(null, null);
                    }
                } else {
                    callback(null, err);
                }
            }
        );
    });
};

exports.get = function (req, res) {
    res.render("login", { message: "" });
};

exports.post = function (req, res) {
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;

    login(paramId, paramPassword, function (err, rows) {
        if (err) {
            return;
        }

        if (rows) {
            console.log("login 성공 : " + paramId);

            res.cookie("login", {
                id: paramId,
                authorized: true,
            });

            req.session.login = {
                id: paramId,
                authorized: true,
            };

            res.render("react");
        } else {
            console.log("login 실패 : 일치하는 사용자 찾지 못함");

            req.flash("loginMessage", "일치하는 사용자를 찾지 못했습니다");
            res.render("login", { message: req.flash("loginMessage") });
        }
    });
};
