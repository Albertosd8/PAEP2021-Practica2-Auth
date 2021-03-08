const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function (user, done){
    done(null,user);
});

passport.deserializeUser( function(user, done){
    done(null, user);
    /*const user = users.find(id)
    .then(user=> done(null,user));*/
})

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: 'http://localhost:3000/auth/google/callback',
        },
        function (accessToken, refreshToken, profile, done){
            console.log('Credentials profile:');
            console.log(profile);
            //Antes de guardar asegúrate que no exista el usuario (no crees 2 usuarios)
            //1. Buscar profile.id entre los usuarios
            //2. Si existe solamente regresar done(null, findUser) //null porque no hay errores
            //3. Si no existe guardar nuevo usuario en el archivo y done(null, newUser)
            done(null, profile);  
        }
    )
)
