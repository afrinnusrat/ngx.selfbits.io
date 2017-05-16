"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
ConfigService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [configuration_1.Configuration])
], ConfigService);
exports.ConfigService = ConfigService;
//# sourceMappingURL=ConfigService.js.map