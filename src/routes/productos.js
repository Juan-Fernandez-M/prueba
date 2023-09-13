const path = require('path');
const express = require('express');
const multer = require ('multer');
const router = express.Router();
let controller = require('../controllers/productsController')


const storageProducts = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '../../public/images'));
    },
    filename: (req, file, cb) => {
    
        cb(null, `image-${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storageProducts});

router.get('/listar', controller.listar);
router.post('/crear',upload.single('images'), controller.crear);
router.get('/detallar', controller.detalle);


module.exports = router;