"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@emotion/core");
var Solid = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (react_1.default.createElement("div", { css: core_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      font-size: 50px;\n      color: white;\n    "], ["\n      font-size: 50px;\n      color: white;\n    "]))) }, children));
};
exports.default = Solid;
var templateObject_1;
//# sourceMappingURL=Solid.js.map