const express = require("express");
const app = express();
const PORT = 3000;

const items = [
    { id: 1, nombre: "Taza de Harry Potter", precio: 300 },
    { id: 2, nombre: "FIFA 23 PS5", precio: 1000 },
    { id: 3, nombre: "Figura Goku Super Saiyan", precio: 100 },
    { id: 4, nombre: "Zelda Breath of the Wild", precio: 200 },
    { id: 5, nombre: "Skin Valorant", precio: 120 },
    { id: 6, nombre: "Taza de Star Wars", precio: 220 },
];
app.use(express.json());

app.get("/", (req, res) => {
    res.send({ Description: "Productos", items });
});

// Crear endpoint para poder crear un producto nuevo

app.post("/", (req, res) => {
    const newItem = {
        id: items.length + 1,
        nombre: req.body.nombre,
        precio: req.body.precio,
    };
    items.push(newItem);
    res.status(201).send(items);
});

// Crear endpoint para poder actualizar un producto

app.put("/id/:id", (req, res) => {
    const found = items.some((item) => item.id == req.params.id);

    if (found) {
        items.forEach((item) => {
            if (item.id == req.params.id) {
                item.nombre = req.body.nombre || member.nombre;
                item.precio = req.body.precio || item.precio;
            }
        });
        res.send(items);
    } else {
        res.status(404).send(`Poduct with id ${req.params.id} not found`);
    }
});

// Crear endpoint para poder eliminar un producto

app.delete("/id/:id", (req, res) => {
    const found = items.some((item) => item.id == req.params.id);

    if (found) {
        const itemsFilter = items.filter((item) => item.id != req.params.id);
        res.send(itemsFilter);
        res.send(items);
    } else {
        res.status(404).send(`product with id ${req.params.id} not found`);
    }
});
// Crear filtro por precio de producto

app.get("/productos/precio/:precio", (req, res) => {
    const found = items.some((item) => item.precio == req.params.precio);
    if (found) {
        items.forEach((item) => {
            if (item.precio == req.params.precio) {
                res.status(200).send(item);
            }
        });
    } else {
        res.status(404).send(
            `product with price ${req.params.precio} not found`,
        );
    }
});

// Crear filtro que muestre los productos con un precio entre 50 y 250.
app.get("/productos/preciomax-min", (req, res) => {
    const max = 250;
    const min = 50;

    const filteredItems = items.filter(
        (item) => item.precio >= min && item.precio <= max,
    );

    if (filteredItems.length > 0) {
        res.status(200).send(filteredItems);
    } else {
        res.status(404).send("Products  not found");
    }
});

// Crear un filtro que cuando busque en postman por parámetro el id de un producto me devuelva ese producto

app.get("/productos/id/:id", (req, res) => {
    const found = items.some((item) => item.id == req.params.id);
    if (found) {
        items.forEach((item) => {
            if (item.id == req.params.id) {
                res.status(200).send(item);
            }
        });
    } else {
        res.status(404).send("id dont exist");
    }
});

// Crear un filtro que cuando busque en postman por parámetro el nombre de un producto me devuelva ese producto  --> inicialmente use un filter pero tenia que escribir el nombre exacto, asi que pense en usar el includes
app.get("/productos/nombre/:nombre", (req, res) => {
    const found = items.some((item) => item.nombre.includes(req.params.nombre));

    if (found) {
        const filteredItems = items.filter((item) =>
            item.nombre.includes(req.params.nombre),
        );
        res.status(200).send(filteredItems);
    } else {
        res.status(404).send("Product with the given name does not exist");
    }
});

app.listen(PORT, () => {
    console.log("Servidor levantado en el puerto " + PORT);
});
