const express = require('express')

const validarContraseña = (req, res = express.response, next) => {
    if(req.body.password != req.body.passwordconfirm){
        return res.status(400).json({
            ok: false,
            message: 'Las contraseñas no coinciden'
        })
    }
    next()
}

module.exports = { validarContraseña }