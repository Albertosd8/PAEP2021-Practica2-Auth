const express = require('express');
const passport = require('passport');
const router = express.Router();

//GET /auth/login
router.get('/login',(req, res)=>{
    res.render('login');
});

//GET /auth/google/login            regresa un texto
router.get('/google', passport.authenticate('google', {scope: ['profile','email']}));

//GET /auth/google/redirect            regresa un texto
router.get('/google/callback',
    passport.authenticate('google',{failureRedirect: '/login'}),
    function(req,res){
        console.log(req.user);
        res.redirect('/profile');
    }
);
    
//GET /auth/logout          regresa un texto 
router.get('/logout',(req, res)=>{
    req.logout();
    res.session=null;
    res.redirect('../');
});

module.exports = router;