"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProducts = void 0;
var tslib_1 = require("tslib");
var toolkit_1 = require("@reduxjs/toolkit");
exports.fetchProducts = (0, toolkit_1.createAsyncThunk)('products/fetchProducts', function (_, thunkAPI) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var response, data, error_1, errorMessage;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch('https://fakestoreapi.com/products')];
            case 1:
                response = _a.sent();
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                return [2 /*return*/, data];
            case 3:
                error_1 = _a.sent();
                errorMessage = error_1 instanceof Error ? error_1.message : 'An unknown error occurred';
                return [2 /*return*/, thunkAPI.rejectWithValue(errorMessage)];
            case 4: return [2 /*return*/];
        }
    });
}); });
