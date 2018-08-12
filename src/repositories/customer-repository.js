'use strict';

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

// Criar Cliente
exports.create = async(data) => {
    var customer = new Customer(data);
    await customer.save();
};
