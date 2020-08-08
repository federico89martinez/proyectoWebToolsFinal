const mongoose = require('mongoose');
const { Schema } = mongoose;

const AutoSchema = new Schema({
    marca: { type: String, required: true },
    modelo: { type: Number, required: true },
    km: { type: String, required: true },
    precio: { type: String, required: true },
    duenio: { type: String, required: true },
    contacto: { type: Number, required: true }
});


module.exports = mongoose.model('auto', AutoSchema);