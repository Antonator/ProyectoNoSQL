const mongoose = require('mongoose');

const bibliotecaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true
    },
    direccion: {
        type: String,
        required: [true, 'La direccion es obligatoria'],
        trim: true
    },
    telefono: {
        type: String,
        required: [true, 'El telefono es obligatorio'],
        trim: true
    },
    responsable: {
        type: String,
        required: [true, 'El nombre del responsable es obligatorio'],
        trim: true
    },
    descripcion: {
        type: String
    }
});

module.exports = mongoose.model('biblioteca', bibliotecaSchema);



