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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
require("rxjs/add/operator/map");
var configuration_1 = require("../configuration");
var PasswordResetApi = (function () {
    function PasswordResetApi(http, configuration) {
        this.http = http;
        this.configuration = new configuration_1.Configuration();
        this.defaultHeaders = new http_1.Headers();
        if (configuration) {
            this.configuration = configuration;
            this.defaultHeaders = new http_1.Headers({ 'Authorization': this.configuration.apiKey });
        }
    }
    PasswordResetApi.prototype.passwordResetPost = function (resetPasswordRequest, extraHttpRequestParams) {
        return this.passwordResetPostWithHttpInfo(resetPasswordRequest, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    PasswordResetApi.prototype.triggerPasswordReset = function (sendPasswordResetEmailRequest, extraHttpRequestParams) {
        return this.triggerPasswordResetWithHttpInfo(sendPasswordResetEmailRequest, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    PasswordResetApi.prototype.passwordResetPostWithHttpInfo = function (resetPasswordRequest, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/password/reset';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (resetPasswordRequest === null || resetPasswordRequest === undefined) {
            throw new Error('Required parameter resetPasswordRequest was null or undefined when calling passwordResetPost.');
        }
        var consumes = [
            'application/json'
        ];
        var produces = [
            'application/json'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: resetPasswordRequest == null ? '' : JSON.stringify(resetPasswordRequest),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    PasswordResetApi.prototype.triggerPasswordResetWithHttpInfo = function (sendPasswordResetEmailRequest, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/password/reset/trigger';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sendPasswordResetEmailRequest === null || sendPasswordResetEmailRequest === undefined) {
            throw new Error('Required parameter sendPasswordResetEmailRequest was null or undefined when calling triggerPasswordReset.');
        }
        var consumes = [
            'application/json'
        ];
        var produces = [
            'application/json'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        headers.set('Content-Type', 'application/json');
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: sendPasswordResetEmailRequest == null ? '' : JSON.stringify(sendPasswordResetEmailRequest),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return PasswordResetApi;
}());
PasswordResetApi = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [http_1.Http, configuration_1.Configuration])
], PasswordResetApi);
exports.PasswordResetApi = PasswordResetApi;
//# sourceMappingURL=PasswordResetApi.js.map