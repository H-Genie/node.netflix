module.exports = function(req,res) {

    if(req.session.login) {
        req.session.destroy(function(err) {
            if(err) {
                return;
            }
            res.clearCookie('login');
            res.redirect('/');
        })
    } else {
        req.flash('logoutMessage','로그인되어있지 않습니다'); 
        res.render('login',{message : req.flash('logoutMessage')});
    }
};