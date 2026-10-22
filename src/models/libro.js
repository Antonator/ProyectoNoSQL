const mongoose = require('mongoose');

const libroSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true
    },
    autor: {
        type: String,
        required: [true, 'El autor es obligatorio'],
        trim: true
    },
    editorial: {
        type: String,
        required: [true, 'La editorial es obligatoria'],
        trim: true
    },
    genero: {
        type: String,
        required: [true, 'El genero es obligatorio'],
        trim: true
    },
    categoria: {
        type: String,
        required: [true, 'La categoria es obligatoria'],
        trim: true
    },
    precio: {
        type: Number,
        required: [true, 'El precio es obligatorio'],
        trim: true
    },
    isbn: {
        type: String,
        required: [true, 'El ISBN es obligatorio'],
        unique: true,
        trim: true,
    },
    stock: {
        type: Number,
        required: [true, 'El stock es obligatorio']
    }    
});

module.exports = mongoose.model('libro', libroSchema);