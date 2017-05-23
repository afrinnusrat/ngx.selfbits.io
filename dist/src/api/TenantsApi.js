/**
 * Selfbits API V2
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
require("rxjs/add/operator/map");
var configuration_1 = require("../configuration");
/* tslint:disable:no-unused-variable member-ordering */
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
    /**
     *
     * Returns tenants of the logged in user
     */
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
    /**
     *
     * Create new SELFBITS CLOUD PLATFORM tenant by a valid subdomain
     * @param tenant Your new tenant
     */
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
    /**
     *
     * Delete existing SELFBITS CLOUD PLATFORM application
     * @param tenantId The tenant identifier
     * @param applicationId The tenant application identifier
     */
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
    /**
     *
     * Returns tenant applications
     * @param tenantId Your Selfbits Tenant
     */
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
    /**
     *
     * Create new application
     * @param tenantId Your Selfbits Tenant ID
     * @param application Your new application
     */
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
    /**
     *
     * Delete existing SELFBITS CLOUD PLATFORM tenant
     * @param tenantId The tenant identifier
     */
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
    /**
     *
     * Returns tenants of the logged in user
     */
    TenantsApi.prototype.tenantsGetWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.configuration.basePath + '/tenants';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (ConsumerSecurity) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     * Create new SELFBITS CLOUD PLATFORM tenant by a valid subdomain
     * @param tenant Your new tenant
     */
    TenantsApi.prototype.tenantsPostWithHttpInfo = function (tenant, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/tenants';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'tenant' is not null or undefined
        if (tenant === null || tenant === undefined) {
            throw new Error('Required parameter tenant was null or undefined when calling tenantsPost.');
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (ConsumerSecurity) required
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
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     * Delete existing SELFBITS CLOUD PLATFORM application
     * @param tenantId The tenant identifier
     * @param applicationId The tenant application identifier
     */
    TenantsApi.prototype.tenantsTenantIdApplicationsApplicationIdDeleteWithHttpInfo = function (tenantId, applicationId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/tenants/${tenantId}/applications/${applicationId}'
            .replace('${' + 'tenantId' + '}', String(tenantId))
            .replace('${' + 'applicationId' + '}', String(applicationId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'tenantId' is not null or undefined
        if (tenantId === null || tenantId === undefined) {
            throw new Error('Required parameter tenantId was null or undefined when calling tenantsTenantIdApplicationsApplicationIdDelete.');
        }
        // verify required parameter 'applicationId' is not null or undefined
        if (applicationId === null || applicationId === undefined) {
            throw new Error('Required parameter applicationId was null or undefined when calling tenantsTenantIdApplicationsApplicationIdDelete.');
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (ConsumerSecurity) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Delete,
            headers: headers,
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     * Returns tenant applications
     * @param tenantId Your Selfbits Tenant
     */
    TenantsApi.prototype.tenantsTenantIdApplicationsGetWithHttpInfo = function (tenantId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/tenants/${tenantId}/applications'
            .replace('${' + 'tenantId' + '}', String(tenantId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'tenantId' is not null or undefined
        if (tenantId === null || tenantId === undefined) {
            throw new Error('Required parameter tenantId was null or undefined when calling tenantsTenantIdApplicationsGet.');
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (ConsumerSecurity) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     * Create new application
     * @param tenantId Your Selfbits Tenant ID
     * @param application Your new application
     */
    TenantsApi.prototype.tenantsTenantIdApplicationsPostWithHttpInfo = function (tenantId, application, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/tenants/${tenantId}/applications'
            .replace('${' + 'tenantId' + '}', String(tenantId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'tenantId' is not null or undefined
        if (tenantId === null || tenantId === undefined) {
            throw new Error('Required parameter tenantId was null or undefined when calling tenantsTenantIdApplicationsPost.');
        }
        // verify required parameter 'application' is not null or undefined
        if (application === null || application === undefined) {
            throw new Error('Required parameter application was null or undefined when calling tenantsTenantIdApplicationsPost.');
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (ConsumerSecurity) required
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
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     *
     * Delete existing SELFBITS CLOUD PLATFORM tenant
     * @param tenantId The tenant identifier
     */
    TenantsApi.prototype.tenantsTenantIdDeleteWithHttpInfo = function (tenantId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/tenants/${tenantId}'
            .replace('${' + 'tenantId' + '}', String(tenantId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'tenantId' is not null or undefined
        if (tenantId === null || tenantId === undefined) {
            throw new Error('Required parameter tenantId was null or undefined when calling tenantsTenantIdDelete.');
        }
        // to determine the Content-Type header
        var consumes = [];
        // to determine the Accept header
        var produces = [
            'application/json'
        ];
        // authentication (ConsumerSecurity) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Delete,
            headers: headers,
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return TenantsApi;
}());
TenantsApi.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
TenantsApi.ctorParameters = function () { return [
    { type: http_1.Http, },
    { type: configuration_1.Configuration, decorators: [{ type: core_1.Optional },] },
]; };
exports.TenantsApi = TenantsApi;
//# sourceMappingURL=TenantsApi.js.map