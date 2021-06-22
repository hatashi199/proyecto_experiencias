require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const app = express();

const { PORT } = process.env;

const authUser = require('./middlewares/authUser');
const canDoAnything = require('./middlewares/canDoAnything');
const userExists = require('./middlewares/userExists');
const experienceExists = require('./middlewares/experienceExists');

// ###############################################
// ## MIDDLEWARES RELACIONADAS CON DEPENDENCIAS ##
// ###############################################

const {
    deleteUser,
    editUser,
    editUserPassword,
    getUser,
    loginUser,
    newUser,
    recoverUserPassword,
    resetUserPassword,
    validateUser,
} = require('./controllers/users');

const {
    addPhotoExperience,
    deleteExperience,
    deletePhotoExperience,
    editExperience,
    getAllExperiences,
    getExperience,
    newExperience,
} = require('./controllers/experiences');

const {
    deleteBooking,
    getAllBookings,
    getBooking,
    newBooking,
    newComment,
    newRating,
} = require('./controllers/bookings');
// Logger.
app.use(morgan('dev'));

// Traduce el body y lo transforma en un objeto JS.
app.use(express.json());

// Nos permite leer bodys en formato "form-data".
app.use(fileUpload());

// #################################
// ## MIDDLEWARES DE EXPERIENCIAS ##
// #################################
app.get('/experiences', getAllExperiences); //getAllExperiences
app.get('/experiences/:idExp', experienceExists, getExperience); //getExperience
app.post('/experiences', authUser, newExperience); // newExperience
app.post('/experiences/:idExp/photo', authUser, addPhotoExperience); //addPhotoExperience
app.delete('/experiences/:idExp', authUser, experienceExists, deleteExperience); //deleteExperience
app.delete(
    '/experiences/:idExp/photo',
    authUser,
    experienceExists,
    deletePhotoExperience
); //deletePhoto
app.put('/experiences/:idExp', authUser, experienceExists, editExperience); //editExperience
// #############################
// ## MIDDLEWARES DE USUARIOS ##
// #############################

app.get('/users/:idUser', authUser, userExists, getUser); // getUser
app.get('/users/validate/:registrationCode', validateUser); // validateUser
app.post('/users', newUser); // newUser
app.post('/users/login', loginUser); // loginUser
app.put('/users/:idUser', authUser, userExists, editUser); // editUser
app.put('/users/:idUser/password', authUser, userExists, editUserPassword); // editUserPassword
app.put('/users/password/recover', recoverUserPassword); // recoverUserPassword
app.put('/users/password/reset', resetUserPassword); // resetUserPassword
app.delete('/users/:idUser', authUser, userExists, deleteUser); // deleteUser

// #############################
// ## MIDDLEWARES DE RESERVAS ##
// #############################
app.get('bookings/', authUser, getAllBookings); //getAllBookings
app.get('bookings/:idBooking', authUser, getBooking); //getBooking
app.post('bookings/', authUser, newBooking); //newBooking
app.put('bookings/:idBooking/coments', authUser, newComment); //newComment
app.put('bookings/:idBooking/rating', authUser, newRating); //newRating

// ##########################
// ## MIDDLEWARES DE ERROR ##
// ##########################

// Middleware de error que captura los errores generados.
app.use((error, req, res, next) => {
    console.log(error);
    res.status(error.httpStatus || 500).send({
        status: 'error',
        message: error.message,
    });
});

// Middleware de error genérico.
app.use((req, res) => {
    res.status(404).send({
        status: 'error',
        message: 'Not Found',
    });
});

app.listen(PORT, () =>
    console.log(`Server listening at http://localhost:${PORT}`)
);
