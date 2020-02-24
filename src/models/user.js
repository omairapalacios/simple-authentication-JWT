const {Schema, model} = require('mongoose');

const userSchema = new Schema({
  user: String,
  password: String,
}, {
  timestamps:true, // agrega fecha de creacion y actualizacion
});

module.exports= model('user', userSchema); // nombre del esquema y el esquema