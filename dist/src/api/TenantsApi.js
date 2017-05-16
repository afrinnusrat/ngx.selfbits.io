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
var TenantsApi = (function () {
    function TenantsApi(http, configuration) {
        this.http = http;
        this.configuration = new configuration_1.Configuration();
        this.defaultHeaders = new http_1.Headers();
        if (configuration) {
            this.configuration = configuration;
            this.defaultHeaders = new http_1.Headers({ 'Authorization': this.configuration.apiKey });
        }
    }
    TenantsApi.prototype.tenantsGet = function (extraHttpRequestParams) {
        return this.tenantsGetWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    TenantsApi.prototype.tenantsPost = function (tenant, extraHttpRequestParams) {
        return this.tenantsPostWithHttpInfo(tenant, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    TenantsApi.prototype.tenantsTenantIdApplicationsApplicationIdDelete = function (tenantId, applicationId, extraHttpRequestParams) {
        return this.tenantsTenantIdApplicationsApplicationIdDeleteWithHttpInfo(tenantId, applicationId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    TenantsApi.prototype.tenantsTenantIdApplicationsGet = function (tenantId, extraHttpRequestParams) {
        return this.tenantsTenantIdApplicationsGetWithHttpInfo(tenantId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    TenantsApi.prototype.tenantsTenantIdApplicationsPost = function (tenantId, application, extraHttpRequestParams) {
        return this.tenantsTenantIdApplicationsPostWithHttpInfo(tenantId, application, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    TenantsApi.prototype.tenantsTenantIdDelete = function (tenantId, extraHttpRequestParams) {
        return this.tenantsTenantIdDeleteWithHttpInfo(tenantId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    TenantsApi.prototype.tenantsGetWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.configuration.basePath + '/tenants';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
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
    TenantsApi.prototype.tenantsPostWithHttpInfo = function (tenant, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/tenants';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (tenant === null || tenant === undefined) {
            throw new Error('Required parameter tenant was null or undefined when calling tenantsPost.');
        }
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
            body: tenant == null ? '' : JSON.stringify(tenant),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    TenantsApi.prototype.tenantsTenantIdApplicationsApplicationIdDeleteWithHttpInfo = function (tenantId, applicationId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/tenants/${tenantId}/applications/${applicationId}'
            .replace('${' + 'tenantId' + '}', String(tenantId))
            .replace('${' + 'applicationId' + '}', String(applicationId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (tenantId === null || tenantId === undefined) {
            throw new Error('Required parameter tenantId was null or undefined when calling tenantsTenantIdApplicationsApplicationIdDelete.');
        }
        if (applicationId === null || applicationId === undefined) {
            throw new Error('Required parameter applicationId was null or undefined when calling tenantsTenantIdApplicationsApplicationIdDelete.');
        }
        var consumes = [];
        var produces = [
            'application/json'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Delete,
            headers: headers,
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    TenantsApi.prototype.tenantsTenantIdApplicationsGetWithHttpInfo = function (tenantId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/tenants/${tenantId}/applications'
            .replace('${' + 'tenantId' + '}', String(tenantId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (tenantId === null || tenantId === undefined) {
            throw new Error('Required parameter tenantId was null or undefined when calling tenantsTenantIdApplicationsGet.');
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
    TenantsApi.prototype.tenantsTenantIdApplicationsPostWithHttpInfo = function (tenantId, application, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/tenants/${tenantId}/applications'
            .replace('${' + 'tenantId' + '}', String(tenantId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (tenantId === null || tenantId === undefined) {
            throw new Error('Required parameter tenantId was null or undefined when calling tenantsTenantIdApplicationsPost.');
        }
        if (application === null || application === undefined) {
            throw new Error('Required parameter application was null or undefined when calling tenantsTenantIdApplicationsPost.');
        }
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
            body: application == null ? '' : JSON.stringify(application),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    TenantsApi.prototype.tenantsTenantIdDeleteWithHttpInfo = function (tenantId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/tenants/${tenantId}'
            .replace('${' + 'tenantId' + '}', String(tenantId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (tenantId === null || tenantId === undefined) {
            throw new Error('Required parameter tenantId was null or undefined when calling tenantsTenantIdDelete.');
        }
        var consumes = [];
        var produces = [
            'application/json'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Delete,
            headers: headers,
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return TenantsApi;
}());
TenantsApi = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [http_1.Http, configuration_1.Configuration])
], TenantsApi);
exports.TenantsApi = TenantsApi;
//# sourceMappingURL=TenantsApi.js.map