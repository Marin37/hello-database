//Importar Express y Mongoose
const express = require('express');
const mongoose = require('mongoose');

//Importar el router que creamos para la api
const router = require('./routes/api/user');


//Insertar Puerto y Database
const port = process.env.port || 3000;
const db = process.env.MONGODB_URI || 'mongodb://localhost/hellodb';

const app = express();

//Conexión a la base de datos
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log(`DB connected @ ${db}`);
  })
  .catch(err => console.error(`Connection error ${err}`));

//Usar el Router
app.use('/api', router);

//Para que el server escuche
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
