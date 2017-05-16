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
var SignupApi = (function () {
    function SignupApi(http, configuration) {
        this.http = http;
        this.configuration = new configuration_1.Configuration();
        this.defaultHeaders = new http_1.Headers();
        if (configuration) {
            this.configuration = configuration;
            this.defaultHeaders = new http_1.Headers({ 'Authorization': this.configuration.apiKey });
        }
    }
    SignupApi.prototype.signupDirectoryDirectoryIdInteractivePost = function (sbClientId, directoryId, randomState, sbClientSecret, extraHttpRequestParams) {
        return this.signupDirectoryDirectoryIdInteractivePostWithHttpInfo(sbClientId, directoryId, randomState, sbClientSecret, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    SignupApi.prototype.signupDirectoryDirectoryIdPost = function (sbClientId, directoryId, signupRequest, sbClientSecret, invite, returnCredentials, extraHttpRequestParams) {
        return this.signupDirectoryDirectoryIdPostWithHttpInfo(sbClientId, directoryId, signupRequest, sbClientSecret, invite, returnCredentials, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    SignupApi.prototype.signupDirectoryDirectoryIdTokenPost = function (sbClientId, directoryId, randomState, sbClientSecret, extraHttpRequestParams) {
        return this.signupDirectoryDirectoryIdTokenPostWithHttpInfo(sbClientId, directoryId, randomState, sbClientSecret, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    SignupApi.prototype.signupOrganizationOrganizationIdDirectoryDirectoryIdPost = function (sbClientId, organizationId, directoryId, signupRequest, sbClientSecret, invite, returnCredentials, extraHttpRequestParams) {
        return this.signupOrganizationOrganizationIdDirectoryDirectoryIdPostWithHttpInfo(sbClientId, organizationId, directoryId, signupRequest, sbClientSecret, invite, returnCredentials, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    SignupApi.prototype.signupOrganizationOrganizationIdPost = function (sbClientId, organizationId, signupRequest, sbClientSecret, invite, returnCredentials, extraHttpRequestParams) {
        return this.signupOrganizationOrganizationIdPostWithHttpInfo(sbClientId, organizationId, signupRequest, sbClientSecret, invite, returnCredentials, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    SignupApi.prototype.signupOrganizationOrganizationIdProviderProviderIdPost = function (organizationId, directoryId, sbClientId, sbClientSecret, invite, returnCredentials, signupRequest, extraHttpRequestParams) {
        return this.signupOrganizationOrganizationIdProviderProviderIdPostWithHttpInfo(organizationId, directoryId, sbClientId, sbClientSecret, invite, returnCredentials, signupRequest, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    SignupApi.prototype.signupPost = function (sbClientId, profile, sbClientSecret, invite, returnCredentials, extraHttpRequestParams) {
        return this.signupPostWithHttpInfo(sbClientId, profile, sbClientSecret, invite, returnCredentials, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    SignupApi.prototype.signupProviderProviderIdPost = function (sbClientId, providerId, signupRequest, sbClientSecret, invite, returnCredentials, extraHttpRequestParams) {
        return this.signupProviderProviderIdPostWithHttpInfo(sbClientId, providerId, signupRequest, sbClientSecret, invite, returnCredentials, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    SignupApi.prototype.signupDirectoryDirectoryIdInteractivePostWithHttpInfo = function (sbClientId, directoryId, randomState, sbClientSecret, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup/directory/${directoryId}/interactive'
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupDirectoryDirectoryIdInteractivePost.');
        }
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling signupDirectoryDirectoryIdInteractivePost.');
        }
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling signupDirectoryDirectoryIdInteractivePost.');
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
    SignupApi.prototype.signupDirectoryDirectoryIdPostWithHttpInfo = function (sbClientId, directoryId, signupRequest, sbClientSecret, invite, returnCredentials, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup/directory/${directoryId}'
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupDirectoryDirectoryIdPost.');
        }
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling signupDirectoryDirectoryIdPost.');
        }
        if (signupRequest === null || signupRequest === undefined) {
            throw new Error('Required parameter signupRequest was null or undefined when calling signupDirectoryDirectoryIdPost.');
        }
        if (invite !== undefined) {
            queryParameters.set('invite', invite);
        }
        if (returnCredentials !== undefined) {
            queryParameters.set('returnCredentials', returnCredentials);
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
            body: signupRequest == null ? '' : JSON.stringify(signupRequest),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    SignupApi.prototype.signupDirectoryDirectoryIdTokenPostWithHttpInfo = function (sbClientId, directoryId, randomState, sbClientSecret, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup/directory/${directoryId}/token'
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupDirectoryDirectoryIdTokenPost.');
        }
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling signupDirectoryDirectoryIdTokenPost.');
        }
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling signupDirectoryDirectoryIdTokenPost.');
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
    SignupApi.prototype.signupOrganizationOrganizationIdDirectoryDirectoryIdPostWithHttpInfo = function (sbClientId, organizationId, directoryId, signupRequest, sbClientSecret, invite, returnCredentials, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup/organization/${organizationId}/directory/${directoryId}'
            .replace('${' + 'organizationId' + '}', String(organizationId))
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupOrganizationOrganizationIdDirectoryDirectoryIdPost.');
        }
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling signupOrganizationOrganizationIdDirectoryDirectoryIdPost.');
        }
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling signupOrganizationOrganizationIdDirectoryDirectoryIdPost.');
        }
        if (signupRequest === null || signupRequest === undefined) {
            throw new Error('Required parameter signupRequest was null or undefined when calling signupOrganizationOrganizationIdDirectoryDirectoryIdPost.');
        }
        if (invite !== undefined) {
            queryParameters.set('invite', invite);
        }
        if (returnCredentials !== undefined) {
            queryParameters.set('returnCredentials', returnCredentials);
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
            body: signupRequest == null ? '' : JSON.stringify(signupRequest),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    SignupApi.prototype.signupOrganizationOrganizationIdPostWithHttpInfo = function (sbClientId, organizationId, signupRequest, sbClientSecret, invite, returnCredentials, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup/organization/${organizationId}'
            .replace('${' + 'organizationId' + '}', String(organizationId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupOrganizationOrganizationIdPost.');
        }
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling signupOrganizationOrganizationIdPost.');
        }
        if (signupRequest === null || signupRequest === undefined) {
            throw new Error('Required parameter signupRequest was null or undefined when calling signupOrganizationOrganizationIdPost.');
        }
        if (invite !== undefined) {
            queryParameters.set('invite', invite);
        }
        if (returnCredentials !== undefined) {
            queryParameters.set('returnCredentials', returnCredentials);
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
            body: signupRequest == null ? '' : JSON.stringify(signupRequest),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    SignupApi.prototype.signupOrganizationOrganizationIdProviderProviderIdPostWithHttpInfo = function (organizationId, directoryId, sbClientId, sbClientSecret, invite, returnCredentials, signupRequest, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup/organization/${organizationId}/provider/${providerId}'
            .replace('${' + 'organizationId' + '}', String(organizationId))
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling signupOrganizationOrganizationIdProviderProviderIdPost.');
        }
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling signupOrganizationOrganizationIdProviderProviderIdPost.');
        }
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupOrganizationOrganizationIdProviderProviderIdPost.');
        }
        if (invite !== undefined) {
            queryParameters.set('invite', invite);
        }
        if (returnCredentials !== undefined) {
            queryParameters.set('returnCredentials', returnCredentials);
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
            body: signupRequest == null ? '' : JSON.stringify(signupRequest),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    SignupApi.prototype.signupPostWithHttpInfo = function (sbClientId, profile, sbClientSecret, invite, returnCredentials, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupPost.');
        }
        if (profile === null || profile === undefined) {
            throw new Error('Required parameter profile was null or undefined when calling signupPost.');
        }
        if (invite !== undefined) {
            queryParameters.set('invite', invite);
        }
        if (returnCredentials !== undefined) {
            queryParameters.set('returnCredentials', returnCredentials);
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
            body: profile == null ? '' : JSON.stringify(profile),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    SignupApi.prototype.signupProviderProviderIdPostWithHttpInfo = function (sbClientId, providerId, signupRequest, sbClientSecret, invite, returnCredentials, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup/provider/${providerId}'
            .replace('${' + 'providerId' + '}', String(providerId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupProviderProviderIdPost.');
        }
        if (providerId === null || providerId === undefined) {
            throw new Error('Required parameter providerId was null or undefined when calling signupProviderProviderIdPost.');
        }
        if (signupRequest === null || signupRequest === undefined) {
            throw new Error('Required parameter signupRequest was null or undefined when calling signupProviderProviderIdPost.');
        }
        if (invite !== undefined) {
            queryParameters.set('invite', invite);
        }
        if (returnCredentials !== undefined) {
            queryParameters.set('returnCredentials', returnCredentials);
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
            body: signupRequest == null ? '' : JSON.stringify(signupRequest),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return SignupApi;
}());
SignupApi = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [http_1.Http, configuration_1.Configuration])
], SignupApi);
exports.SignupApi = SignupApi;
//# sourceMappingURL=SignupApi.js.map