const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    id: Schema.Types.ObjectId,
    nombre: {type: String, required: false},
    apellido: {type: String, required: false},
    email: {type: String, required: false},
    password: {type: String, required: false},
});


module.exports = mongoose.model('User', UserSchema);