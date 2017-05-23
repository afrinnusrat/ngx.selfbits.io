"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var configuration_1 = require("./configuration");
var services_1 = require("./services/services");
var api_1 = require("./api/api");
var Selfbits = (function () {
    function Selfbits() {
    }
    Selfbits.forRoot = function (configuration) {
        return {
            ngModule: Selfbits,
            providers: [
                { provide: configuration_1.Configuration, useValue: configuration }
            ]
        };
    };
    return Selfbits;
}());
Selfbits.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [common_1.CommonModule, http_1.HttpModule],
                declarations: [],
                exports: [],
                providers: api_1.APIS.concat(services_1.SERVICES)
            },] },
];
/** @nocollapse */
Selfbits.ctorParameters = function () { return []; };
exports.Selfbits = Selfbits;
//# sourceMappingURL=api.module.js.map