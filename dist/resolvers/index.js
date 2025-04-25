"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const productResolver_1 = require("./productResolver");
const customerResolver_1 = require("./customerResolver");
const orderResolver_1 = require("./orderResolver");
exports.resolvers = {
    Query: Object.assign(Object.assign(Object.assign({}, productResolver_1.productResolver.Query), customerResolver_1.customerResolver.Query), orderResolver_1.orderResolver.Query),
    Mutation: Object.assign(Object.assign(Object.assign({}, productResolver_1.productResolver.Mutation), customerResolver_1.customerResolver.Mutation), orderResolver_1.orderResolver.Mutation),
};
