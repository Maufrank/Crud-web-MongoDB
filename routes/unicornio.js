const {Router} = require("express");
const {unicornioGet, unicornioAddGet, unicornioAddPost, unicornioEliminarGet, unicornioEditarGet, unicornioActualizar} = require("../controller/unicornio");

const router = Router();

router.get("/" , unicornioGet);
router.get("/addUnicornio", unicornioAddGet);
router.post("/agregarUnicornio", unicornioAddPost);
router.get("/eliminarUnicornio/:id", unicornioEliminarGet);
router.get("/actualizarUnicornio/:id", unicornioEditarGet);
router.post("/updateUnicornio", unicornioActualizar);

module.exports = router;