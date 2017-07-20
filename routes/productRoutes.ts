const express = require('express');
const router = express.Router();
const product = require('../models/product');

/**
 * Get product list
 */
router.get('/', (req: any, res: any) => {
    product.get().then((response: any) => {
        res.send(response);
    });
});

/**
 * Get product by ID
 */
router.get('/:id', (req: any, res: any) => {
    res.send(product.getById(req.params.id));
});

/**
 * Create a product
 */
router.post('/create', (req: any, res: any) => {

    res.send(product.createProduct(req.body));
});

/**
 * Delete product
 */
router.delete('/:id', (req: any, res: any) => {
    res.send(product.deleteProduct(req.params.id))
});

module.exports = router;