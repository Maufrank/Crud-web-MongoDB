const express = require("express");
const bodyParcer = require("body-parser");
const hbs = require("hbs");
// const async = require("hbs/lib/async");

main().catch((err) => console.log(err));

async function main(){
    const servidor = express();

    servidor.use(bodyParcer.urlencoded({extends: true}))

    hbs.registerPartials("./views/parciales");
    servidor.use('/', require('./routes/unicornio'));
    servidor.set("view engine", "hbs");

    servidor.listen(8080, () =>{
        console.log("Servidor corriendo");
    });
}