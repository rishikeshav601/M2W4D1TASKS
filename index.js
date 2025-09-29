const express = require("express");
const app = express();

const routes = require('./src/routers/routes');

app.use(express.json());

app.use('/', routes);

//tas,k10
app.use((req, res) => {
    res.status(404).json({ error: "Route not found." });
});


app.listen(3000, () => {
    console.log("server is running");
});

