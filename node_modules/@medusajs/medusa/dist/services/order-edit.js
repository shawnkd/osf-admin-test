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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var medusa_core_utils_1 = require("medusa-core-utils");
var models_1 = require("../models");
var interfaces_1 = require("../interfaces");
var OrderEditService = /** @class */ (function (_super) {
    __extends(OrderEditService, _super);
    function OrderEditService(_a) {
        var manager = _a.manager, orderEditRepository = _a.orderEditRepository, orderService = _a.orderService;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.manager_ = manager;
        _this.orderEditRepository_ = orderEditRepository;
        _this.orderService_ = orderService;
        return _this;
    }
    OrderEditService.prototype.retrieve = function (orderEditId, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var orderEditRepository, _a, relations, query, orderEdit;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        orderEditRepository = this.manager_.getCustomRepository(this.orderEditRepository_);
                        _a = (0, utils_1.buildQuery)({ id: orderEditId }, config), relations = _a.relations, query = __rest(_a, ["relations"]);
                        return [4 /*yield*/, orderEditRepository.findOneWithRelations(relations, query)];
                    case 1:
                        orderEdit = _b.sent();
                        if (!orderEdit) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Order edit with id ".concat(orderEditId, " was not found"));
                        }
                        return [2 /*return*/, orderEdit];
                }
            });
        });
    };
    OrderEditService.prototype.computeLineItems = function (orderEditId) {
        return __awaiter(this, void 0, void 0, function () {
            var orderEdit, originalItems, removedItems, items, updatedItems, orderEditUpdatedChangesMap;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.retrieve(orderEditId, {
                            select: ["id", "order_id", "changes", "order"],
                            relations: [
                                "changes",
                                "changes.line_item",
                                "changes.original_line_item",
                                "order",
                                "order.items",
                            ],
                        })];
                    case 1:
                        orderEdit = _a.sent();
                        originalItems = orderEdit.order.items;
                        removedItems = [];
                        items = [];
                        updatedItems = orderEdit.changes
                            .map(function (itemChange) {
                            if (itemChange.type === models_1.OrderEditItemChangeType.ITEM_ADD) {
                                items.push(itemChange.line_item);
                                return;
                            }
                            if (itemChange.type === models_1.OrderEditItemChangeType.ITEM_REMOVE) {
                                removedItems.push(__assign(__assign({}, itemChange.original_line_item), { id: itemChange.original_line_item_id }));
                                return;
                            }
                            return [itemChange.original_line_item_id, itemChange];
                        })
                            .filter(function (change) { return !!change; });
                        orderEditUpdatedChangesMap = new Map(updatedItems);
                        originalItems.map(function (item) {
                            var itemChange = orderEditUpdatedChangesMap.get(item.id);
                            if (itemChange) {
                                items.push(__assign(__assign({}, itemChange.line_item), { id: itemChange.original_line_item_id }));
                            }
                        });
                        return [2 /*return*/, { items: items, removedItems: removedItems }];
                }
            });
        });
    };
    return OrderEditService;
}(interfaces_1.TransactionBaseService));
exports.default = OrderEditService;
//# sourceMappingURL=order-edit.js.map