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
var LoginApi = (function () {
    function LoginApi(http, configuration) {
        this.http = http;
        this.configuration = new configuration_1.Configuration();
        this.defaultHeaders = new http_1.Headers();
        if (configuration) {
            this.configuration = configuration;
            this.defaultHeaders = new http_1.Headers({ 'Authorization': this.configuration.apiKey });
        }
    }
    LoginApi.prototype.loginDirectoryDirectoryIdPost = function (sbClientId, directoryId, sbClientSecret, userLoginRequest, extraHttpRequestParams) {
        return this.loginDirectoryDirectoryIdPostWithHttpInfo(sbClientId, directoryId, sbClientSecret, userLoginRequest, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    LoginApi.prototype.loginDirectoryDirectoryIdTokenPost = function (sbClientId, directoryId, randomState, sbClientSecret, extraHttpRequestParams) {
        return this.loginDirectoryDirectoryIdTokenPostWithHttpInfo(sbClientId, directoryId, randomState, sbClientSecret, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    LoginApi.prototype.loginOrganizationOrganizationIdPost = function (sbClientId, organizationId, sbClientSecret, userLoginRequest, extraHttpRequestParams) {
        return this.loginOrganizationOrganizationIdPostWithHttpInfo(sbClientId, organizationId, sbClientSecret, userLoginRequest, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    LoginApi.prototype.loginOrganizationOrganizationIdProviderProviderIdPost = function (sbClientId, organizationId, providerId, sbClientSecret, userLoginRequest, extraHttpRequestParams) {
        return this.loginOrganizationOrganizationIdProviderProviderIdPostWithHttpInfo(sbClientId, organizationId, providerId, sbClientSecret, userLoginRequest, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    LoginApi.prototype.loginPost = function (sbClientId, userLoginRequest, sbClientSecret, extraHttpRequestParams) {
        return this.loginPostWithHttpInfo(sbClientId, userLoginRequest, sbClientSecret, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    LoginApi.prototype.loginDirectoryDirectoryIdPostWithHttpInfo = function (sbClientId, directoryId, sbClientSecret, userLoginRequest, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/login/directory/${directoryId}'
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling loginDirectoryDirectoryIdPost.');
        }
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling loginDirectoryDirectoryIdPost.');
        }
        headers.set('sb-client-id', String(sbClientId));
        headers.set('sb-client-secret', String(sbClientSecret));
        var consumes = [];
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
            body: userLoginRequest == null ? '' : JSON.stringify(userLoginRequest),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    LoginApi.prototype.loginDirectoryDirectoryIdTokenPostWithHttpInfo = function (sbClientId, directoryId, randomState, sbClientSecret, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/login/directory/${directoryId}/token'
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling loginDirectoryDirectoryIdTokenPost.');
        }
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling loginDirectoryDirectoryIdTokenPost.');
        }
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling loginDirectoryDirectoryIdTokenPost.');
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        headers.set('sb-client-id', String(sbClientId));
        headers.set('sb-client-secret', String(sbClientSecret));
        var consumes = [];
        var produces = [
            'application/json'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    LoginApi.prototype.loginOrganizationOrganizationIdPostWithHttpInfo = function (sbClientId, organizationId, sbClientSecret, userLoginRequest, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/login/organization/${organizationId}'
            .replace('${' + 'organizationId' + '}', String(organizationId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling loginOrganizationOrganizationIdPost.');
        }
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling loginOrganizationOrganizationIdPost.');
        }
        headers.set('sb-client-id', String(sbClientId));
        headers.set('sb-client-secret', String(sbClientSecret));
        var consumes = [];
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
            body: userLoginRequest == null ? '' : JSON.stringify(userLoginRequest),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    LoginApi.prototype.loginOrganizationOrganizationIdProviderProviderIdPostWithHttpInfo = function (sbClientId, organizationId, providerId, sbClientSecret, userLoginRequest, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/login/organization/${organizationId}/provider/${providerId}'
            .replace('${' + 'organizationId' + '}', String(organizationId))
            .replace('${' + 'providerId' + '}', String(providerId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling loginOrganizationOrganizationIdProviderProviderIdPost.');
        }
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling loginOrganizationOrganizationIdProviderProviderIdPost.');
        }
        if (providerId === null || providerId === undefined) {
            throw new Error('Required parameter providerId was null or undefined when calling loginOrganizationOrganizationIdProviderProviderIdPost.');
        }
        headers.set('sb-client-id', String(sbClientId));
        headers.set('sb-client-secret', String(sbClientSecret));
        var consumes = [];
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
            body: userLoginRequest == null ? '' : JSON.stringify(userLoginRequest),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    LoginApi.prototype.loginPostWithHttpInfo = function (sbClientId, userLoginRequest, sbClientSecret, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/login';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling loginPost.');
        }
        if (userLoginRequest === null || userLoginRequest === undefined) {
            throw new Error('Required parameter userLoginRequest was null or undefined when calling loginPost.');
        }
        headers.set('sb-client-id', String(sbClientId));
        headers.set('sb-client-secret', String(sbClientSecret));
        var consumes = [];
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
            body: userLoginRequest == null ? '' : JSON.stringify(userLoginRequest),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return LoginApi;
}());
LoginApi = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [http_1.Http, configuration_1.Configuration])
], LoginApi);
exports.LoginApi = LoginApi;
//# sourceMappingURL=LoginApi.js.map