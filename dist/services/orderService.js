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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderService = void 0;
const customer_model_1 = __importDefault(require("../models/customer.model"));
const order_model_1 = __importDefault(require("../models/order.model"));
const product_model_1 = __importDefault(require("../models/product.model"));
exports.orderService = {
    getAllOrders: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield order_model_1.default.find().populate("productId").populate("customerId");
    }),
    createOrder: (productId, customerId) => __awaiter(void 0, void 0, void 0, function* () {
        const productExists = yield product_model_1.default.findById(productId);
        const customerExists = yield customer_model_1.default.findById(customerId);
        if (!productExists || !customerExists) {
            throw new Error("Invalid product or customer ID");
        }
        const order = new order_model_1.default({ productId, customerId });
        return yield order.save();
    }),
    getOrderById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield order_model_1.default.findById(id).populate("productId").populate("customerId");
    }),
    updateOrder: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
        return yield order_model_1.default.findByIdAndUpdate(id, data, { new: true })
            .populate("productId")
            .populate("customerId");
    }),
    deleteOrder: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield order_model_1.default.findByIdAndDelete(id);
    }),
};
