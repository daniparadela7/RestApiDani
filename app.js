var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var middleware = require('./middleware');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());


//Models Padel
UserPadel = require('./models/padel/user');
ReservaPadel = require('./models/padel/reserva');
NotificacionPadel = require('./models/padel/notificacion');
ParejaPadel = require('./models/padel/pareja');
NoticiaPadel = require('./models/padel/noticia');

//Models Clubhyd
UserClubhyd = require('./models/clubhyd/user');
HomeClubhyd = require('./models/clubhyd/home');
CumpleClubhyd = require('./models/clubhyd/cumple');
TallerClubhyd = require('./models/clubhyd/taller');
ParqueClubhyd = require('./models/clubhyd/parque');
ComunionClubhyd = require('./models/clubhyd/comunion');
NoticiaClubhyd = require('./models/clubhyd/noticia');
NosotrosClubhyd = require('./models/clubhyd/nosotros');
CafeteriaClubhyd = require('./models/clubhyd/cafeteria');
AlbumClubhyd = require('./models/clubhyd/album');
ImagenClubhyd = require('./models/clubhyd/imagen');
NewsletterClubhyd = require('./models/clubhyd/newsletter');


//Routes Padel
var usersPadelRouter = (require('./routes/padel/users'));
var loginPadelRouter = (require('./routes/padel/login'));
var reservasPadelRouter = (require('./routes/padel/reservas'));
var notificacionesPadelRouter = (require('./routes/padel/notificaciones'));
var parejasPadelRouter = (require('./routes/padel/parejas'));
var noticiasPadelRouter = (require('./routes/padel/noticias'));

//Routes Clubhyd
var usersClubhydRouter = (require('./routes/clubhyd/users'));
var loginClubhydRouter = (require('./routes/clubhyd/login'));
var homeClubhydRouter = (require('./routes/clubhyd/home'));
var cumpleClubhydRouter = (require('./routes/clubhyd/cumple'));
var tallerClubhydRouter = (require('./routes/clubhyd/taller'));
var parqueClubhydRouter = (require('./routes/clubhyd/parque'));
var comunionClubhydRouter = (require('./routes/clubhyd/comunion'));
var noticiasClubhydRouter = (require('./routes/clubhyd/noticias'));
var nosotrosClubhydRouter = (require('./routes/clubhyd/nosotros'));
var cafeteriaClubhydRouter = (require('./routes/clubhyd/cafeteria'));
var albumClubhydRouter = (require('./routes/clubhyd/album'));
var imagenClubhydRouter = (require('./routes/clubhyd/imagen'));
var newsletterClubhydRouter = (require('./routes/clubhyd/newsletter'));


// Ruta solo accesible si estás autenticado
//router.get('/private',middleware.ensureAuthenticated, function(req, res) {

//});


//Cargar rutas Padel
app.use('/api/padel', usersPadelRouter);
app.use('/api/padel', loginPadelRouter);
app.use('/api/padel', reservasPadelRouter);
app.use('/api/padel', notificacionesPadelRouter);
app.use('/api/padel', parejasPadelRouter);
app.use('/api/padel', noticiasPadelRouter);

//Cargar rutas Clubhyd
app.use('/api/clubhyd', usersClubhydRouter);
app.use('/api/clubhyd', loginClubhydRouter);
app.use('/api/clubhyd', homeClubhydRouter);
app.use('/api/clubhyd', cumpleClubhydRouter);
app.use('/api/clubhyd', tallerClubhydRouter);
app.use('/api/clubhyd', parqueClubhydRouter);
app.use('/api/clubhyd', comunionClubhydRouter);
app.use('/api/clubhyd', noticiasClubhydRouter);
app.use('/api/clubhyd', nosotrosClubhydRouter);
app.use('/api/clubhyd', cafeteriaClubhydRouter);
app.use('/api/clubhyd', albumClubhydRouter);
app.use('/api/clubhyd', imagenClubhydRouter);
app.use('/api/clubhyd', newsletterClubhydRouter);


app.listen(8000);
console.log('Servidor Express escuchando en el puerto 8000');