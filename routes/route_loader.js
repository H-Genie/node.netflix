const express = require('express');
const router = express.Router();

// 모듈 분리
const login = require('./login');
const signup = require('./signup');
const logout = require('./logout');

// 루트 패스
router.route('/').get(function(req,res) {    
    res.render('index');    
});

// login 라우팅
router.route('/login').get(login.get);
router.route('/login').post(login.post);

// signup 라우팅
router.route('/signup').get(signup.get);
router.route('/signup').post(signup.post);

// logout 라우팅
router.route('/logout').get(logout);



module.exports = router;