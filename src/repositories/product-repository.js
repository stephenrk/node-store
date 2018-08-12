'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

/// propriedade dentro do find serve p/ adicionar filtro, neste caso, busca os produtos ativos
/// o segundo parâmetro serve p/ informar quais campos deve trazer
// Listar Produtos
exports.get = async() => {
    const res = await Product.find({ 
        active: true 
    }, 'title slug price');
    return res;
};

// Listar Produtos por Slug
exports.getBySlug = async(slug) => {
    const res = await Product.findOne({ 
        slug: slug,
        active: true
    }, 'title description slug price tags');
    return res;
};

// Listar Produtos por Id
exports.getById = async(id) => {
    const res = await Product
        .findById(id);
    return res;
};

// Listar Produtos por Tag
exports.getByTag = async(tag) => {
    const res = await Product.find({
        tags: tag,
        active: true
    }, 'title description slug price tags');
    return res;
};

// Criar Produto
exports.create = async(data) => {
    var product = new Product(data);
    await product.save();
};

// Alterar Produto
exports.update = async(id, data) => {
    await Product.findByIdAndUpdate(id, {
        $set: {
            title: data.title,
            description: data.description,
            slug: data.slug,
            price: data.price
        }
    });
};

// Remover Produto
exports.delete = async(id) => {
    await Product.findByIdAndRemove(id);
};
