const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'El email es obligatorio'],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    rol: {
        type: String,
        enum: {
            values: ['cliente', 'admin', 'vendedor'],
            message: '{VALUE} no es un rol válido'
        },
        default: 'cliente'
    },
    activo: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('usuario', usuarioSchema);