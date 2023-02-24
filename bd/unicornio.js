const mongoose = require("mongoose");

const FindUnicornio = async(modelo) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/pr5c");
    let resultado = await modelo.find({});
    return resultado;
}

const FindUpdateUnicornio = async(modelo, id) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/pr5c");
    let resultado = await modelo.find({_id: id});
    return resultado;
}

const addUnicornio = async(modelo, unicornio) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/pr5c");
    const nube = new modelo(unicornio);
    await nube.save();
}

const ELiminarUnicornio = async(modelo, id) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/pr5c");
    const res = await modelo.findById(id);
    await res.delete();
}

const ActualizarUnicornio = async(modelo, object) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/pr5c");
    const res = await modelo.findById(object._id);
    console.log(object.ComidaFavorita);
    res.Name = object.Name ? object.Name : res.Name;
    res.fechaNaciemiento = object.fechaNaciemiento
        ? object.fechaNaciemiento : res.fechaNaciemiento;
    res.ComidaFavorita = object.ComidaFavorita
        ? object.ComidaFavorita : res.ComidaFavorita;
    res.Genero = object.Genero ? object.Genero : res.Genero;
    res.Peso = object.Peso ? object.Peso : res.Peso;

    res.Vampiros = object.Vampiros ? object.Vampiros : res.Vampiros;
    // const res = new modelo(object);

    res.save();
}

const FindUnicornioOne = async(modelo, id) => {
    await mongoose.connect("mongodb://127.0.0.1:27017/pr5c");
    let resultado = await modelo.findById(id);
    return resultado;
}


module.exports = {FindUnicornio, addUnicornio, ELiminarUnicornio, ActualizarUnicornio, FindUpdateUnicornio, FindUnicornioOne};