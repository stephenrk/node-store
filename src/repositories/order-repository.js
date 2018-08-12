'use strict';

const mongoose = require('mongoose');
const Order = mongoose.model('Order');

// populate serve para popular a propriedade informada
// o segundo parâmetro serve pra informar quais campos deve trazer (evita trazer informações desnecessárias)
// Listar Pedidos
exports.get = async() => {
    const res = await Order.find({}, 'number status')
        .populate('customer', 'name')
        .populate('items.product', 'title');
    return res;
};

// Criar Pedido
exports.create = async(data) => {
    var order = new Order(data);
    await order.save();
};
