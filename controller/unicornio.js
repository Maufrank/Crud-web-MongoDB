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

    console.log(resultado.FechaNacimiento);
    hola = (resultado.FechaNacimiento).toLocaleDateString();
    hola = hola.split('/');
    fecha = hola[2]+"-0"+hola[0]+"-"+hola[1];
    console.log(fecha);

    gen = (resultado.Genero).toString();
    console.log(gen);
    if(gen == 'm'){
        genMas = 'checked';
        genFem = '';
    }else{
        genMas = '';
        genFem = 'checked';
    }

    comida = resultado.ComidaFavorita;
    console.log(comida[1]);
    comida1 = '';
    comida2 = '';
    comida3 = '';

    if(comida.indexOf('mole') != -1){
        console.log("se encontro");
        comida1 = 'checked';
    }
    if(comida.indexOf('chilaquiles') != -1){
        console.log("se encontro");
        comida2 = 'checked';
    }
    if(comida.indexOf('manzana') != -1){
        console.log("se encontro");
        comida3 = 'checked';
    }

    res.render("actualizar", {data: resultado, fechaN: fecha, Masculino: genMas, Femenino: genFem, comida1: comida1, comida2: comida2, comida3: comida3});
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