const express = require("express");
const router = express.Router();

// Importar y usar otras rutas
const studentRoutes = require("./studentRouter");

// Categorias de las rutas
router.use("/student", studentRoutes);

module.exports = router;