var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/* MÓDULO dotenv */
const dotenv = require('dotenv');

/* CARGA DE DATOS DE CONFIGURACION EN MEMORIA */
dotenv.config();

var cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

/* CARGA DEL MIDDLEWARE authenticateJWT */
var authenticateJWT = require('./middleware/auth');

var app = express();

//referencia al manejador de rutas
var carroRouter = require('./routes/rest_carro');
var personaRouter = require('./routes/rest_persona');
var repuestoRouter = require('./routes/rest_repuesto');
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/rest/carro', carroRouter);
app.use('/rest/persona', personaRouter);
app.use('/rest/repuesto',authenticateJWT, repuestoRouter);
/* USE LA FUNCIÓN authenticateJWT */
//app.use('/rest/libro', authenticateJWT, carroRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/* RELACIÓN ENTRE LA RUTA DEL URL CON LA REFERENCIA CON EL MANEJADOR DE RUTAS */

module.exports = app;
