const mongoose = require("mongoose");

const unicornioVEsquema = () => {
    return new mongoose.Schema({
        Name: String,
        FechaNacimiento: Date,
        ComidaFavorita: Array,
        Peso: Number,
        Genero: String,
        Vampiros: Number,

    });
};

let unicornioEsquema = unicornioVEsquema();
module.exports = mongoose.model("mongoches", unicornioEsquema);