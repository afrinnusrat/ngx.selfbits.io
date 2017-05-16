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
var InteractiveViewsApi = (function () {
    function InteractiveViewsApi(http, configuration) {
        this.http = http;
        this.configuration = new configuration_1.Configuration();
        this.defaultHeaders = new http_1.Headers();
        if (configuration) {
            this.configuration = configuration;
            this.defaultHeaders = new http_1.Headers({ 'Authorization': this.configuration.apiKey });
        }
    }
    InteractiveViewsApi.prototype.authDirectoryDirectoryIdGet = function (sbClientId, directoryId, randomState, sbClientSecret, invite, extraHttpRequestParams) {
        return this.authDirectoryDirectoryIdGetWithHttpInfo(sbClientId, directoryId, randomState, sbClientSecret, invite, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.authOrganizationOrganizationIdDirectoryDirectoryIdGet = function (sbClientId, directoryId, randomState, sbClientSecret, invite, extraHttpRequestParams) {
        return this.authOrganizationOrganizationIdDirectoryDirectoryIdGetWithHttpInfo(sbClientId, directoryId, randomState, sbClientSecret, invite, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.authOrganizationOrganizationIdProviderProviderIdGet = function (sbClientId, directoryId, randomState, sbClientSecret, invite, extraHttpRequestParams) {
        return this.authOrganizationOrganizationIdProviderProviderIdGetWithHttpInfo(sbClientId, directoryId, randomState, sbClientSecret, invite, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.authProviderProviderIdGet = function (sbClientId, directoryId, randomState, sbClientSecret, invite, extraHttpRequestParams) {
        return this.authProviderProviderIdGetWithHttpInfo(sbClientId, directoryId, randomState, sbClientSecret, invite, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.emailsVerifyGet = function (email, code, extraHttpRequestParams) {
        return this.emailsVerifyGetWithHttpInfo(email, code, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.loginDirectoryDirectoryIdGet = function (sbClientId, directoryId, randomState, randomState2, extraHttpRequestParams) {
        return this.loginDirectoryDirectoryIdGetWithHttpInfo(sbClientId, directoryId, randomState, randomState2, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.loginGet = function (sbClientId, randomState, extraHttpRequestParams) {
        return this.loginGetWithHttpInfo(sbClientId, randomState, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.loginOrganizationOrganizationIdDirectoryDirectoryIdGet = function (sbClientId, organizationId, directoryId, randomState, extraHttpRequestParams) {
        return this.loginOrganizationOrganizationIdDirectoryDirectoryIdGetWithHttpInfo(sbClientId, organizationId, directoryId, randomState, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.loginOrganizationOrganizationIdGet = function (sbClientId, organizationId, randomState, extraHttpRequestParams) {
        return this.loginOrganizationOrganizationIdGetWithHttpInfo(sbClientId, organizationId, randomState, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.loginOrganizationOrganizationIdProviderProviderIdGet = function (sbClientId, organizationId, providerId, randomState, extraHttpRequestParams) {
        return this.loginOrganizationOrganizationIdProviderProviderIdGetWithHttpInfo(sbClientId, organizationId, providerId, randomState, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.passwordResetCallbackGet = function (error, extraHttpRequestParams) {
        return this.passwordResetCallbackGetWithHttpInfo(error, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.passwordResetGet = function (accountId, code, extraHttpRequestParams) {
        return this.passwordResetGetWithHttpInfo(accountId, code, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.signupDirectoryDirectoryIdGet = function (sbClientId, directoryId, randomState, invite, extraHttpRequestParams) {
        return this.signupDirectoryDirectoryIdGetWithHttpInfo(sbClientId, directoryId, randomState, invite, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.signupGet = function (sbClientId, randomState, invite, extraHttpRequestParams) {
        return this.signupGetWithHttpInfo(sbClientId, randomState, invite, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.signupOrganizationOrganizationIdDirectoryDirectoryIdGet = function (sbClientId, organizationId, directoryId, randomState, invite, extraHttpRequestParams) {
        return this.signupOrganizationOrganizationIdDirectoryDirectoryIdGetWithHttpInfo(sbClientId, organizationId, directoryId, randomState, invite, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.signupOrganizationOrganizationIdGet = function (sbClientId, organizationId, randomState, invite, extraHttpRequestParams) {
        return this.signupOrganizationOrganizationIdGetWithHttpInfo(sbClientId, organizationId, randomState, invite, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.signupOrganizationOrganizationIdProviderProviderIdGet = function (sbClientId, organizationId, providerId, randomState, invite, extraHttpRequestParams) {
        return this.signupOrganizationOrganizationIdProviderProviderIdGetWithHttpInfo(sbClientId, organizationId, providerId, randomState, invite, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.signupProviderProviderIdGet = function (sbClientId, providerId, randomState, invite, extraHttpRequestParams) {
        return this.signupProviderProviderIdGetWithHttpInfo(sbClientId, providerId, randomState, invite, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.authDirectoryDirectoryIdGetWithHttpInfo = function (sbClientId, directoryId, randomState, sbClientSecret, invite, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/auth/directory/${directoryId}'
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling authDirectoryDirectoryIdGet.');
        }
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling authDirectoryDirectoryIdGet.');
        }
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling authDirectoryDirectoryIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', sbClientId);
        }
        if (sbClientSecret !== undefined) {
            queryParameters.set('sb-client-secret', sbClientSecret);
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        if (invite !== undefined) {
            queryParameters.set('invite', invite);
        }
        var consumes = [];
        var produces = [
            'text/html'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    InteractiveViewsApi.prototype.authOrganizationOrganizationIdDirectoryDirectoryIdGetWithHttpInfo = function (sbClientId, directoryId, randomState, sbClientSecret, invite, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/auth/organization/${organizationId}/directory/${directoryId}'
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling authOrganizationOrganizationIdDirectoryDirectoryIdGet.');
        }
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling authOrganizationOrganizationIdDirectoryDirectoryIdGet.');
        }
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling authOrganizationOrganizationIdDirectoryDirectoryIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', sbClientId);
        }
        if (sbClientSecret !== undefined) {
            queryParameters.set('sb-client-secret', sbClientSecret);
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        if (invite !== undefined) {
            queryParameters.set('invite', invite);
        }
        var consumes = [];
        var produces = [
            'text/html'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    InteractiveViewsApi.prototype.authOrganizationOrganizationIdProviderProviderIdGetWithHttpInfo = function (sbClientId, directoryId, randomState, sbClientSecret, invite, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/auth/organization/${organizationId}/provider/${providerId}'
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling authOrganizationOrganizationIdProviderProviderIdGet.');
        }
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling authOrganizationOrganizationIdProviderProviderIdGet.');
        }
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling authOrganizationOrganizationIdProviderProviderIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', sbClientId);
        }
        if (sbClientSecret !== undefined) {
            queryParameters.set('sb-client-secret', sbClientSecret);
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        if (invite !== undefined) {
            queryParameters.set('invite', invite);
        }
        var consumes = [];
        var produces = [
            'text/html'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    InteractiveViewsApi.prototype.authProviderProviderIdGetWithHttpInfo = function (sbClientId, directoryId, randomState, sbClientSecret, invite, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/auth/provider/${providerId}'
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling authProviderProviderIdGet.');
        }
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling authProviderProviderIdGet.');
        }
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling authProviderProviderIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', sbClientId);
        }
        if (sbClientSecret !== undefined) {
            queryParameters.set('sb-client-secret', sbClientSecret);
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        if (invite !== undefined) {
            queryParameters.set('invite', invite);
        }
        var consumes = [];
        var produces = [
            'text/html'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    InteractiveViewsApi.prototype.emailsVerifyGetWithHttpInfo = function (email, code, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/emails/verify';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (email === null || email === undefined) {
            throw new Error('Required parameter email was null or undefined when calling emailsVerifyGet.');
        }
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling emailsVerifyGet.');
        }
        if (email !== undefined) {
            queryParameters.set('email', email);
        }
        if (code !== undefined) {
            queryParameters.set('code', code);
        }
        var consumes = [];
        var produces = [
            'application/json'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    InteractiveViewsApi.prototype.loginDirectoryDirectoryIdGetWithHttpInfo = function (sbClientId, directoryId, randomState, randomState2, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/login/directory/${directoryId}'
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling loginDirectoryDirectoryIdGet.');
        }
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling loginDirectoryDirectoryIdGet.');
        }
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling loginDirectoryDirectoryIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', sbClientId);
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        if (randomState2 !== undefined) {
            queryParameters.set('randomState', randomState2);
        }
        var consumes = [];
        var produces = [
            'text/html'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    InteractiveViewsApi.prototype.loginGetWithHttpInfo = function (sbClientId, randomState, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/login';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling loginGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', sbClientId);
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        var consumes = [];
        var produces = [
            'text/html'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    InteractiveViewsApi.prototype.loginOrganizationOrganizationIdDirectoryDirectoryIdGetWithHttpInfo = function (sbClientId, organizationId, directoryId, randomState, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/login/organization/${organizationId}/directory/${directoryId}'
            .replace('${' + 'organizationId' + '}', String(organizationId))
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling loginOrganizationOrganizationIdDirectoryDirectoryIdGet.');
        }
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling loginOrganizationOrganizationIdDirectoryDirectoryIdGet.');
        }
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling loginOrganizationOrganizationIdDirectoryDirectoryIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', sbClientId);
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        var consumes = [];
        var produces = [
            'text/html'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    InteractiveViewsApi.prototype.loginOrganizationOrganizationIdGetWithHttpInfo = function (sbClientId, organizationId, randomState, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/login/organization/${organizationId}'
            .replace('${' + 'organizationId' + '}', String(organizationId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling loginOrganizationOrganizationIdGet.');
        }
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling loginOrganizationOrganizationIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', sbClientId);
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        var consumes = [];
        var produces = [
            'text/html'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    InteractiveViewsApi.prototype.loginOrganizationOrganizationIdProviderProviderIdGetWithHttpInfo = function (sbClientId, organizationId, providerId, randomState, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/login/organization/${organizationId}/provider/${providerId}'
            .replace('${' + 'organizationId' + '}', String(organizationId))
            .replace('${' + 'providerId' + '}', String(providerId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling loginOrganizationOrganizationIdProviderProviderIdGet.');
        }
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling loginOrganizationOrganizationIdProviderProviderIdGet.');
        }
        if (providerId === null || providerId === undefined) {
            throw new Error('Required parameter providerId was null or undefined when calling loginOrganizationOrganizationIdProviderProviderIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', sbClientId);
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        var consumes = [];
        var produces = [
            'text/html'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    InteractiveViewsApi.prototype.passwordResetCallbackGetWithHttpInfo = function (error, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/password/reset/callback';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (error === null || error === undefined) {
            throw new Error('Required parameter error was null or undefined when calling passwordResetCallbackGet.');
        }
        if (error !== undefined) {
            queryParameters.set('error', error);
        }
        var consumes = [];
        var produces = [
            'text/html'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    InteractiveViewsApi.prototype.passwordResetGetWithHttpInfo = function (accountId, code, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/password/reset';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling passwordResetGet.');
        }
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling passwordResetGet.');
        }
        if (accountId !== undefined) {
            queryParameters.set('accountId', accountId);
        }
        if (code !== undefined) {
            queryParameters.set('code', code);
        }
        var consumes = [];
        var produces = [
            'text/html'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    InteractiveViewsApi.prototype.signupDirectoryDirectoryIdGetWithHttpInfo = function (sbClientId, directoryId, randomState, invite, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup/directory/${directoryId}'
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupDirectoryDirectoryIdGet.');
        }
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling signupDirectoryDirectoryIdGet.');
        }
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling signupDirectoryDirectoryIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', sbClientId);
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        if (invite !== undefined) {
            queryParameters.set('invite', invite);
        }
        var consumes = [];
        var produces = [
            'text/html'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    InteractiveViewsApi.prototype.signupGetWithHttpInfo = function (sbClientId, randomState, invite, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupGet.');
        }
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling signupGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', sbClientId);
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        if (invite !== undefined) {
            queryParameters.set('invite', invite);
        }
        var consumes = [];
        var produces = [
            'text/html'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    InteractiveViewsApi.prototype.signupOrganizationOrganizationIdDirectoryDirectoryIdGetWithHttpInfo = function (sbClientId, organizationId, directoryId, randomState, invite, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup/organization/${organizationId}/directory/${directoryId}'
            .replace('${' + 'organizationId' + '}', String(organizationId))
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupOrganizationOrganizationIdDirectoryDirectoryIdGet.');
        }
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling signupOrganizationOrganizationIdDirectoryDirectoryIdGet.');
        }
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling signupOrganizationOrganizationIdDirectoryDirectoryIdGet.');
        }
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling signupOrganizationOrganizationIdDirectoryDirectoryIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', sbClientId);
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        if (invite !== undefined) {
            queryParameters.set('invite', invite);
        }
        var consumes = [];
        var produces = [
            'text/html'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    InteractiveViewsApi.prototype.signupOrganizationOrganizationIdGetWithHttpInfo = function (sbClientId, organizationId, randomState, invite, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup/organization/${organizationId}'
            .replace('${' + 'organizationId' + '}', String(organizationId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupOrganizationOrganizationIdGet.');
        }
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling signupOrganizationOrganizationIdGet.');
        }
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling signupOrganizationOrganizationIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', sbClientId);
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        if (invite !== undefined) {
            queryParameters.set('invite', invite);
        }
        var consumes = [];
        var produces = [
            'text/html'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    InteractiveViewsApi.prototype.signupOrganizationOrganizationIdProviderProviderIdGetWithHttpInfo = function (sbClientId, organizationId, providerId, randomState, invite, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup/organization/${organizationId}/provider/${providerId}'
            .replace('${' + 'organizationId' + '}', String(organizationId))
            .replace('${' + 'providerId' + '}', String(providerId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupOrganizationOrganizationIdProviderProviderIdGet.');
        }
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling signupOrganizationOrganizationIdProviderProviderIdGet.');
        }
        if (providerId === null || providerId === undefined) {
            throw new Error('Required parameter providerId was null or undefined when calling signupOrganizationOrganizationIdProviderProviderIdGet.');
        }
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling signupOrganizationOrganizationIdProviderProviderIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', sbClientId);
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        if (invite !== undefined) {
            queryParameters.set('invite', invite);
        }
        var consumes = [];
        var produces = [
            'text/html'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    InteractiveViewsApi.prototype.signupProviderProviderIdGetWithHttpInfo = function (sbClientId, providerId, randomState, invite, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup/provider/${providerId}'
            .replace('${' + 'providerId' + '}', String(providerId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupProviderProviderIdGet.');
        }
        if (providerId === null || providerId === undefined) {
            throw new Error('Required parameter providerId was null or undefined when calling signupProviderProviderIdGet.');
        }
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling signupProviderProviderIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', sbClientId);
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        if (invite !== undefined) {
            queryParameters.set('invite', invite);
        }
        var consumes = [];
        var produces = [
            'text/html'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return InteractiveViewsApi;
}());
InteractiveViewsApi = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [http_1.Http, configuration_1.Configuration])
], InteractiveViewsApi);
exports.InteractiveViewsApi = InteractiveViewsApi;
//# sourceMappingURL=InteractiveViewsApi.js.map