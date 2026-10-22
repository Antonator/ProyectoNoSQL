const express = require('express');
const router = express.Router();
const biblioteca = require('../models/biblioteca.js');
const libro = require('../models/libro.js');
const categoria = require('../models/categoria.js');
const usuario = require('../models/usuario.js');

//1. Crear nuevos documentos para cada coleccion
//------POST-------
router.post('/biblioteca', async(req, res)=>{
    try{
        const nuevoBiblioteca = new biblioteca(req.body);
        const bibliotecaGuardado = await nuevoBiblioteca.save();
        res.status(201).json({
            mensaje: 'biblioteca creado exitosamente',
            datos: bibliotecaGuardado
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

router.post('/libro', async(req, res)=>{
    try{
        const nuevoLibro = new libro(req.body);
        const libroGuardado = await nuevoLibro.save();
        res.status(201).json({
            mensaje: 'libro creado exitosamente',
            datos: libroGuardado
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

router.post('/categoria', async(req, res)=>{
    try{
        const nuevaCategoria = new categoria(req.body);
        const categoriaGuardada = await nuevaCategoria.save();
        res.status(201).json({
            mensaje: 'categoria creada exitosamente',
            datos: categoriaGuardada
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

router.post('/usuario', async(req, res)=>{
    try{
        const nuevoUsuario = new usuario(req.body);
        const usuarioGuardado = await nuevoUsuario.save();
        res.status(201).json({
            mensaje: 'usuario creado exitosamente',
            datos: usuarioGuardado
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

//2. Obtener cada uno de los documentos de la coleccion 
//-----GET-------
router.get('/biblioteca', async(req, res)=>{
    try{
        const bibliotecas = await biblioteca.find();
        res.status(200).json(bibliotecas);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

router.get('/libro', async (req, res) => {
    try {
        const libros = await libro.find();
        res.status(200).json(libros);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

router.get('/categoria', async (req, res) => {
    try {
        const categorias = await categoria.find();
        res.status(200).json(categorias);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

router.get('/usuario', async (req, res) => {
    try {
        const usuarios = await usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

//3. Obtener un biblioteca por ID
router.get('/biblioteca/:id', async(req, res)=>{
    try{
        const biblioteca = await biblioteca.findById(req.params.id);
        if(!biblioteca){
            return res.status(404).json({
                message: 'biblioteca no encontrado'
            })
        }
        res.status(200).json(biblioteca);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})


//-----PUT------
//4. Actualizar un biblioteca por ID
router.put('/:id', async(req, res)=>{
    try{
        const bibliotecaActualizada = await biblioteca.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!biblioteca){
            return res.status(404).json({
                message: 'biblioteca no encontrado'
            })
        }
        res.status(200).json({biblioteca})
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

//Actualiza libros
router.put('/libro/:id', async(req, res)=>{
    try{
        const libroActualizado = await libro.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!libro){
            return res.status(404).json({
                message: 'libro no encontrado'
            })
        }
        res.status(200).json({libro})
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

//Actualiza categoria
router.put('/categoria/:id', async(req, res)=>{
    try{
        const categoriaActualizada = await categoria.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!categoria){
            return res.status(404).json({
                message: 'categoria no encontrado'
            })
        }
        res.status(200).json({categoria})
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

//Actualiza usuario
router.put('/usuario/:id', async(req, res)=>{
    try{
        const usuarioActualizado = await usuario.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!usuario){
            return res.status(404).json({
                message: 'usuario no encontrado'
            })
        }
        res.status(200).json({usuario})
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

//----DELETE-------
//5. Eliminar un cada documento
router.delete('/biblioteca/:id', async(req, res)=>{
    try{
        const bibliotecaEliminado = await biblioteca.findByIdAndDelete(req.params.id);
        if(!bibliotecaEliminado){
            return res.status(404).json({
                message: 'biblioteca no encontrado'
            })
        }
        res.status(200).json({
            message: 'biblioteca eliminado exitosamente'
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
});

router.delete('/libro/:id', async(req, res)=>{
    try{
        const libroEliminado = await libro.findByIdAndDelete(req.params.id);
        if(!libroEliminado){
            return res.status(404).json({
                message: 'libro no encontrado'
            })
        }
        res.status(200).json({
            message: 'libro eliminado exitosamente'
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

router.delete('/categoria/:id', async(req, res)=>{
    try{
        const categoriaEliminada = await categoria.findByIdAndDelete(req.params.id);
        if(!categoriaEliminada){
            return res.status(404).json({
                message: 'categoria no encontrado'
            })
        }
        res.status(200).json({
            message: 'categoria eliminado exitosamente'
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})


router.delete('/usuario/:id', async(req, res)=>{
    try{
        const usuarioEliminado = await usuario.findByIdAndDelete(req.params.id);
        if(!usuarioEliminado){
            return res.status(404).json({
                message: 'usuario no encontrado'
            })
        }
        res.status(200).json({
            message: 'usuario eliminado exitosamente'
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})


module.exports = router;