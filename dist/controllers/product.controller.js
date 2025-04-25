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
exports.productController = void 0;
const productService_1 = require("../services/productService");
exports.productController = {
    getProducts: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield productService_1.productService.getAllProducts();
    }),
    createProduct: (data) => __awaiter(void 0, void 0, void 0, function* () {
        return yield productService_1.productService.createProduct(data);
    }),
    getProductById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield productService_1.productService.getProductById(id);
    }),
    updateProduct: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
        return yield productService_1.productService.updateProduct(id, data);
    }),
    deleteProduct: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield productService_1.productService.deleteProduct(id);
    }),
};
