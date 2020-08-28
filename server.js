const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
const port = process.env.port || 3000;

app.use(express.static(__dirname + '/public'));
// express hbs engine

// parciales......................
hbs.registerPartials(__dirname + '/views/partials');
//seteo de motor de plantillas...................
app.set('view engine', 'hbs');
/***************************************/
app.get('/', (req, res) => {
    res.render('home.hbs', {
        nombre: "Juan Perez"
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        nombre: "jUan peRez"
    });
});

app.listen(port, () => {
    console.log(`escuchando en el puerto ${port}`);
});