'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

// As rotas não devem se repetir, ou seja, não pode ter um GET para /:slug e /:id, isto 
// causaria conflito
router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.get('/admin/:id', controller.getById);
router.get('/tags/:tag', controller.getByTag);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;