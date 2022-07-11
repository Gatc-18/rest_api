const { response, request } = require('express'); 


const usuariosGet = (req = request, res = response) => {
   
    // Me permite recibir los argumentos enviados en el query
    const params = req.query; 


    res.json({
        msg: 'Get-api / controller'
    })
}

const usuariosPost = (req, res) => {
    const body = req.body;
    res.json({
        msg: 'Post - api / controller',
        body
    })
}


const usuariosPut = (req, res = response) => {
    const id = req.params.id; 

    res.json({
        msg: 'Put-api / controller',
        id
    })
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'Patch - api / controller'
    })
}


const usuariosDelete = (req, res) => {
    res.json({
        msg: 'Delete - api / controller'
    })
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosDelete,
    usuariosPost,
    usuariosPatch
}