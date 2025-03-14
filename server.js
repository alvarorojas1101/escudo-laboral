const express = require("express");
const path = require("path");
const compression = require("compression");

const app = express();
const PORT = process.env.PORT || 8000;

// Middlewares
app.use(compression());
app.use(express.static(path.join(__dirname, "public"), { maxAge: "1d" }));
app.use("/components", express.static(path.join(__dirname, "components")));

// Rutas
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/servicios", (req, res) => {
  res.sendFile(path.join(__dirname, "views/servicios.html"));
});

app.get("/faq", (req, res) => {
  res.sendFile(path.join(__dirname, "views/faq.html"));
});

// Manejo de 404
app.use((req, res) => {
  res.status(404).send("Página no encontrada");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
