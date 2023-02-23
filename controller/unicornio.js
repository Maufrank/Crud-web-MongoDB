const {request, response} = require("express");
const {FindUnicornio, addUnicornio, ELiminarUnicornio, FindUpdateUnicornio, FindUnicornioOne, ActualizarUnicornio} = require("../bd/unicornio");
const modelo = require("../bd/unicornioModel");

const unicornioGet = async(req = request, res = response)=>{
    const resultado = await FindUnicornio(modelo);
    res.render("index", {data: resultado});
};

const unicornioAddGet = async(req = request, res = response) =>{
    res.render("agregarUnicornio");
}

const unicornioAddPost = async(req = request, res = response) => {
    await addUnicornio(modelo, req.body);
    console.log("agregado")
    res.redirect("/");
}

const unicornioEliminarGet = async(req = request, res = response) => {
    await ELiminarUnicornio(modelo, req.params.id);
    res.redirect("/");
}

const unicornioEditarGet = async(req = request, res = response) => {
    const resultado = await FindUnicornioOne(modelo, req.params.id);
    console.log(resultado);
    res.render("actualizar", {data: resultado});
}

const unicornioActualizar = async(req = request, res = response) => {
    await ActualizarUnicornio(modelo, req.body);
    console.log(req.body);
    res.redirect("/");
}


module.exports = {
    unicornioGet,
    unicornioAddGet,
    unicornioAddPost,
    unicornioEliminarGet,
    unicornioEditarGet,
    unicornioActualizar,
};