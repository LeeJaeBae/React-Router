"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Router_1 = __importDefault(require("./Router"));
var RoutesComponent_1 = require("./RoutesComponent");
var DefaultRouter_1 = __importDefault(require("./DefaultRouter"));
var Header_1 = __importDefault(require("./Header"));
var Routes = /** @class */ (function () {
    function Routes(routerSetting) {
        if (routerSetting === 'hash') {
            Routes.Router = function () {
                return (react_1.default.createElement(react_router_dom_1.HashRouter, null,
                    react_1.default.createElement(Router_1.default, null)));
            };
        }
        else {
            Routes.Router = function () {
                return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                    react_1.default.createElement(Router_1.default, null)));
            };
        }
    }
    Routes.Router = function () { return react_1.default.createElement(DefaultRouter_1.default, null); };
    Routes.Header = function () { return react_1.default.createElement(Header_1.default, null); };
    Routes.Components = [];
    Routes.add = function (Component, path, name, exact) {
        if (exact === void 0) { exact = false; }
        var component = new RoutesComponent_1.RoutesComponent(Component, path, name, exact);
        var flag = true;
        Routes.Components.map(function (v) {
            if (flag) {
                flag = v.name !== name;
            }
            else {
                console.log('[Error] each router has to take other names');
            }
        });
        if (flag) {
            Routes.Components.push(component);
        }
    };
    // tslint:disable-next-line:ban-types
    Routes.render = function (target) {
        target.map(function (v) {
            v();
        });
    };
    return Routes;
}());
exports.default = Routes;
//# sourceMappingURL=Routes.js.map