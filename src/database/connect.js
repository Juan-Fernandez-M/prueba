const mongoose = require('mongoose')

module.exports = async () => {
     try{ 
      await mongoose.connect('mongodb://localhost:27017/prueba');
        console.log('conectado a la db');
      } catch (error) {
         console.log(error);
        }

   }