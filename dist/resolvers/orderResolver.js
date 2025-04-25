"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderResolver = void 0;
const order_controller_1 = require("../controllers/order.controller");
exports.orderResolver = {
    Query: {
        orders: () => __awaiter(void 0, void 0, void 0, function* () { return yield order_controller_1.orderController.getOrders(); }),
        getOrderById: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id }) { return yield order_controller_1.orderController.getOrderById(id); }),
    },
    Mutation: {
        addOrder: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { productId, customerId }) { return yield order_controller_1.orderController.createOrder(productId, customerId); }),
        editOrder: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id, productId, customerId }) { return yield order_controller_1.orderController.updateOrder(id, { productId, customerId }); }),
        removeOrder: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id }) { return (yield order_controller_1.orderController.deleteOrder(id)) != null; }),
    },
};
