// 모듈 불러오기

    // 내장 모듈
    const http = require('http');
    const path = require('path');

    // express 미들웨어
    const express = require('express');
    const static = require('serve-static');
    const bodyParser = require('body-parser');
    const cookieParser = require('cookie-parser');

    // 세션 미들웨어
    const expressSession = require('express-session');    
    
    // flash
    const flash = require('connect-flash');



// Express 객체 생성
const app = express();

// 서버 변수 설정
app.set('port',process.env.PORT || 8001);

// public 폴더 설정
app.use(static(path.join(__dirname,'public')));

// post 방식의 body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

// 쿠키 parser
app.use(cookieParser());

// 세션 설정
app.use(expressSession({
    secret : 'my key',
    resave : false,
    saveUninitialized : true
}));

// view 엔진 설정
app.set('views', __dirname + '/views');
app.set('view engine','ejs');

// flash 메세지 설정
app.use(flash());



// 라우팅 함수 설정
var router = require('./routes/route_loader');
app.use(router);




// Express 서버 시작
var server = http.createServer(app).listen(app.get('port'), function() {
    console.log('익스프레스로 웹 서버를 실행함 : ' + app.get('port'));    
});