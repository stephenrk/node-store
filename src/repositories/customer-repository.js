'use strict';

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

// Criar Cliente
exports.create = async (data) => {
    var customer = new Customer(data);
    await customer.save();
};

// Autentica o Cliente
exports.authenticate = async (data) => {
    const res = await Customer.findOne({
        email: data.email,
        password: data.password
    });
    return res;
};