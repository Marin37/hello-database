//Importar mongoose y modelo User
const mongoose = require('mongoose');
const User = require('./models/User');

//la URI de la db
//const db = 'mongodb+srv://hellodb:M4r1n0HDB@cluster0-hiuue.mongodb.net/hellodb?retryWrites=true&w=majority';
const db = 'mongodb://localhost/hellodb';

//Crear Array de Usuarios para subir a la db
const users = [
  {
    id: 1,
    name: 'Marino Juan',
    mail: 'Marijmotta@gmail.com',
    birthday: '2003-11-17',
    dni: 45238286
  },
  {
    id: 2,
    name: 'Maria',
    mail: 'maria@mail.com',
    birthday: '2000-02-13',
    dni: 37826941
  },
  {
    id: 3,
    name: 'Pedro',
    mail: 'pedro@mail.com',
    birthday: '2000-05-19',
    dni: 45928174
  },
  {
    id: 4,
    name: 'Julia',
    mail: 'julia@mail.com',
    birthday: '1998-03-01',
    dni: 14195204
  }
];

// Conectarse a db
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    // si nos conectamos con exito mostrar mensajes
    console.log(`DB connected @ ${db}`);
    console.log('Populating DB...');
    // Insertar los usuarios en el array
    User.insertMany(users, (err, users) => {
      if (err) throw err;
      // un mensaje con la cantidad de documentos insertados
      console.log(`${users.length} documents inserted!`);
      // cerramos la conexion cuando terminamos
      mongoose.connection.close();
    });
  })
.catch(err => console.error(`Connection error ${err}`));
