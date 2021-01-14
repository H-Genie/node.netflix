const pool = require('../database');
const AES = require('mysql-aes');



// 사용자 추가 함수
var signup = function(id, password, callback) {

    pool.getConnection(function(err, conn) {

        if(err) {
            if(conn) {
                conn.release();
            }
            callback(err, null);
            return;
        }

        if(id && password) {

            var salt = Math.round((new Date() * Math.random()) / 10000);
            var data = {
                id : id.toLowerCase(),
                password : AES.encrypt(password, salt),
                salt : salt
            }

            var exec = conn.query('INSERT INTO netflix SET ?', data, function(err, result) {

                conn.release();

                if(err) {
                    callback(err,null);
                }

                callback(null,result);
            });
        } else {
            callback(err,null);
        }


    })
}



exports.get = function(req,res) {
    res.render('signup',{message:""});
}



exports.post = function(req,res) {

    var paramId = req.body.id || req.query.id;    
    var paramPassword = req.body.password || req.query.password;

    signup(paramId, paramPassword, function(err,result) {
        if(err) {
            return;
        }

        if(result) {
            console.log(`signup 성공 : 사용자추가 성공(${paramId})`);

            req.flash('signupMessage','회원가입에 성공하였습니다. 로그인해주세요'); 
            res.render('signup',{message : req.flash('signupMessage')});  
        } else {
            console.log('signup 실패');

            req.flash('signupMessage','회원가입 중 에러가 발생했습니다. 다시 시도해주세요'); 
            res.render('signup',{message : req.flash('signupMessage')});
        }
    });
}