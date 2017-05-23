"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var configuration_1 = require("../configuration");
var ConfigService = (function () {
    function ConfigService(configuration) {
        this.configuration = configuration;
        if (localStorage.getItem('authorization')) {
            var auth = JSON.parse(localStorage.getItem('authorization'));
            configuration.apiKey = 'bearer ' + (auth ? auth['token'] : '');
        }
    }
    ConfigService.prototype.setAuthorization = function (authorizationObject) {
        localStorage.setItem('authorization', JSON.stringify(authorizationObject));
        this.configuration.apiKey = 'bearer ' + authorizationObject.token;
    };
    ConfigService.prototype.getAuthorization = function () {
        if (localStorage.getItem('authorization')) {
            return JSON.parse(localStorage.getItem('authorization'));
        }
        else {
            return;
        }
    };
    ConfigService.prototype.setBasePath = function (basePath) {
        this.configuration.basePath = basePath;
    };
    ConfigService.prototype.setDefaultBasePath = function () {
        this.configuration.basePath = 'https://selfbits.apps.selfbits.io/api/v2/selfbits/apps/scp';
    };
    ConfigService.prototype.getBearerToken = function () {
        if (localStorage.getItem('authorization')) {
            var authorization = JSON.parse(localStorage.getItem('authorization'));
            return 'bearer ' + authorization.token;
        }
        else {
            return;
        }
    };
    ConfigService.prototype.getUserId = function () {
        if (localStorage.getItem('authorization')) {
            return JSON.parse(localStorage.getItem('authorization')).userId;
        }
        else {
            return;
        }
    };
    ConfigService.prototype.getOrganizationId = function () {
        if (localStorage.getItem('authorization')) {
            return JSON.parse(localStorage.getItem('authorization')).organizationId;
        }
        else {
            return;
        }
    };
    ConfigService.prototype.getExpires = function () {
        if (localStorage.getItem('authorization')) {
            return JSON.parse(localStorage.getItem('authorization')).expires;
        }
        else {
            return;
        }
    };
    return ConfigService;
}());
ConfigService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
ConfigService.ctorParameters = function () { return [
    { type: configuration_1.Configuration, },
]; };
exports.ConfigService = ConfigService;
//# sourceMappingURL=ConfigService.js.map