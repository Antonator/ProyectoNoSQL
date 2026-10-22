const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true
    },
    descripcion:{
        type: String
    }
});

module.exports = mongoose.model('categoria', categoriaSchema);