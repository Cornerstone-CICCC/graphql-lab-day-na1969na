"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const productSchema_1 = require("./productSchema");
const customerSchema_1 = require("./customerSchema");
const orderSchema_1 = require("./orderSchema");
exports.typeDefs = [productSchema_1.productTypeDefs, customerSchema_1.customerTypeDefs, orderSchema_1.orderTypeDefs];
