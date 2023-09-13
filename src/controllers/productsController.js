//const path = require('path');//
//const fs = require ('fs');//
//const { stringify } = require('querystring');//

//const ruta = path.resolve(__dirname, '../data/products.json');//
//const jsonProducts = fs.readFileSync(ruta, {encoding: 'utf-8'})//
//et products = JSON.parse(jsonProducts)//

const Product = require('../database/models/Product');

console.log(Product.find({}));

const controller = {
    crear: async (req,res) => {
        
       try { 
        let product = {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            image: req.file.filename,
            color: ['negro', 'blanco', 'rojo']
        }
       const productDatabase = await Product.create()
       res.status(201).json(productDatabase);
    } catch (error) {
        if (error.errors.name){
            res.status(400).json({message: 'falta el campo name'})
        }
       res.status(500).json({message: 'internall server'})
    }
        
       // if (!req.body.name) {//
       //     return res.json({mgs: 'El campo name es requerido'})//
       // }//
       //  console.log(req, File);//
       // product.id = products.length + 1;//
       // product.name = req.body.name;//
       // product.price = req.body.price;//
       // product.description = req.body.description;//
       //product.image = req.file.filename;//
        
      //  products.push(product);

       // let productsJson = JSON.stringify(products, null, 4);

      //  fs.writeFileSync(ruta,productsJson, {encoding: 'utf-8'});

       

        //console.log(productsJson);//

        // console.log(product);//
        // res.json('crear producto');//
    },
    update: async (req,res) => {
        const products = await Product.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(products);
    },
    listar: async (req,res) => {
       const products = await Product.find({});
        res.status(200).json(products);
    },
    detalle: (req,res) => {
        res.json('detallar producto');
    }
}
module.exports = controller;
