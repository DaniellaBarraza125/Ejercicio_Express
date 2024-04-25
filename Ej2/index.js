const express = require("express");
const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
    res.send("Welcome!!");
});

app.get("/productos", (req, res) => {
    res.send("Listado de productos");
});
app.post("/productos", (req, res) => {
    res.send("Crear un producto");
});
app.put("/productos", (req, res) => {
    res.send("Actualizar un producto");
});
app.delete("/productos", (req, res) => {
    res.send("Eliminar producto");
});
app.get("/usuarios", (req, res) => {
    res.send("Listado de usuarios");
});
app.post("/usuarios", (req, res) => {
    res.send("Crear  usuario");
});
app.put("/usuarios", (req, res) => {
    res.send("Actualizar  usuario");
});
app.delete("/usuarios", (req, res) => {
    res.send("Eliminar usuario");
});
app.listen(PORT, () => {
    `Servidor levantado en el puerto ${PORT}`;
});
