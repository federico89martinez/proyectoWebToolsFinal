const mongoose = require('mongoose');
const { Schema } = mongoose;

const AutoSchema = new Schema({
    marca: { type: String, required: true },
    modelo: { type: Number, required: true },
    km: { type: Number, required: true },
    precio: { type: Number, required: true },
    contacto: { type: Number, required: true }
});


module.exports = mongoose.model('auto', AutoSchema);