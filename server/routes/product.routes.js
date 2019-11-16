const express = require('express');
const router = express.Router();
const product = require('./../controllers/product');

router.get('/', product.allProd)
    .get('/:id', product.getOneByIdProd)
    .post('/', product.createProd)
    .put('/:id', product.updateProd)
    .delete('/:id', product.deleteProd)

module.exports = router;
