const path = require('path');
const express = require('express');
const app = express();
const productos = require('./routes/productos');
const connectToDb = require('./database/connect');

//base de datos//
connectToDb()
//mongoose.connect ('mongodb://localhost:27017/prueba')
//.then(e => console.log('conectado al db'))
//.catch(e => console.log(e));

/* Configuraciones */ 
app.use(express.static(path.resolve(__dirname, '.no./public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

/* Rutas */
app.use('/productos', productos);

// Handle error//
// let productos = [{
//     id: 1,
//     name: 'Hoodie',
//     price: 120,
//     description: 'Black oversize Hoodie',
//     category: 'Premium',
// },
// {
//     id: 2,
//     name: 'T-shirt',
//     price: 90,
//     description: 'Black and white shirt',
//     category: 'Estandar',
// },
// {
//     id: 3,
//     name: 'Socks',
//     price: 30,
//     description: 'White socks',
//     category: 'Estandar',
// }
// ]

// app.get('/', function (req, res) {
//     let premium = productos.filter(productos => productos.category == 'Premium');
//     res.json(productos)
// });
// app.get('/api/productos', function (req, res) {
//     res.json(productos)
// });
// app.get('/api/productos/:id', function (req, res) {
//     let id = req.params.id;
//     let producto = productos.find(producto => producto.id == id);
//     res.json(producto);
// });


// app.get('/bienvenidos', (req, res) => {
//     res.send('Bienvenidos')
// });
app.use(function(req, res, next) {
    return res.status(404).json({
    status: 404,
    error: 'Resourse not found',
    message: 'error en el recurso solicitado',
  })
});


app.listen(3000,() => console.log('Servidor escuchando el puerto 3000'));