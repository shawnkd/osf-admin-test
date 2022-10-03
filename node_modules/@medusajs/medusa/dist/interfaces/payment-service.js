"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPaymentService = exports.AbstractPaymentService = void 0;
var transaction_base_service_1 = require("./transaction-base-service");
var medusa_interfaces_1 = require("medusa-interfaces");
var AbstractPaymentService = /** @class */ (function (_super) {
    __extends(AbstractPaymentService, _super);
    function AbstractPaymentService(container, config) {
        return _super.call(this, container, config) || this;
    }
    AbstractPaymentService.prototype.getIdentifier = function () {
        if (!this.constructor.identifier) {
            throw new Error('Missing static property "identifier".');
        }
        return this.constructor.identifier;
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    AbstractPaymentService.prototype.retrieveSavedMethods = function (customer) {
        return Promise.resolve([]);
    };
    return AbstractPaymentService;
}(transaction_base_service_1.TransactionBaseService));
exports.AbstractPaymentService = AbstractPaymentService;
function isPaymentService(obj) {
    return obj instanceof AbstractPaymentService || obj instanceof medusa_interfaces_1.PaymentService;
}
exports.isPaymentService = isPaymentService;
//# sourceMappingURL=payment-service.js.map