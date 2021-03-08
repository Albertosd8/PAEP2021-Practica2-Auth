const express = require('express');
const router = express.Router();
const db = require('../DB/pg');
const axios = require('axios');

/*router.get('/',(req,res)=>{
    console.log(db.getUsers());
    res.send('Users');
})*/

//router.get('/',db.getUsers);

router.get('/',async function(req,res){
    let users = await db.getUsers();
    console.log(users);
    res.render('profile',users);
});

router.get('/:id', db.getUserbyId);

module.exports = router;