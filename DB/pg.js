const {Pool} = require('node-postgres');
const pool = new Pool(
    {
        user: 'alberto',
        host: 'localhost',
        database: 'postgres',
        schema: 'backend',
        password: '123',
        port: 5432
    }); 

/*pool.query('SELECT * FROM backend.users').then(function(res){
    console.log(res.rows); 
    ArrayUsers = res.rows;
    console.log(ArrayUsers[0]);
}).catch(error=>{
    console.log(error);
});*/

/*function getUsers(){
    pool.query('SELECT * FROM backend.users').then(function(res){
        console.log(res.rows); 
        ArrayUsers = res.rows;
        //console.log(ArrayUsers);
        return(ArrayUsers[0]);
    }).catch(error=>{
        console.log(error);
    });
}*/

const getUsers = (req,res)=>{ //Getusers no lleva req, res, no llos necesita, faltan 2 return
    pool.query('SELECT * FROM backend.users ORDER BY userid ASC')
    .then(function(results){
        return(results.rows);
    })
    .catch(error => {
        console.log(error);
    });
};

/*const getUserbyId = (req,res)=>{ 
    const id = parseInt(req.params.id);
    pool.query(`SELECT * FROM backend.users WHERE userid = `+id)
    .then(function(results){
        //console.log(results.rows); //the result i'm getting
        //let name = results.rows[0].name; 
        let user = {userid: results.rows[0].userid, 
            name: results.rows[0].name,
            age: results.rows[0].age
        };
        //console.log(name); 
        console.log(user);
        //res.render('profile',{name: results.rows[0].name});})
        res.render('profile',user);})
        //res.status(200).json(results.rows);})
    .catch(error => {
        console.log(error);
    });
};*/

const getUserbyId = (req,res)=>{ 
    const id = parseInt(req.params.id);
    pool.query(`SELECT * FROM backend.users WHERE userid = `+id)
    .then(function(results){
        //console.log(results.rows); //the result i'm getting
        //let name = results.rows[0].name; 
        let user = {userid: results.rows[0].userid, 
            name: results.rows[0].name,
            age: results.rows[0].age
        };
        //console.log(name); 
        console.log(user);
        //res.render('profile',{name: results.rows[0].name});})
        //res.render('profile',user);})
        return(user);})
        //res.status(200).json(results.rows);})
    .catch(error => {
        console.log(error);
    });
};
//findOrCreate

module.exports = { getUsers, getUserbyId };