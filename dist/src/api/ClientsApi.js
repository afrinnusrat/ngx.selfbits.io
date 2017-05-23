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
var ClientsApi = (function () {
    function ClientsApi(http, configuration) {
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
     * Create multiple new clients
     * @param clients Multiple clients
     */
    ClientsApi.prototype.clientsBulkPost = function (clients, extraHttpRequestParams) {
        return this.clientsBulkPostWithHttpInfo(clients, extraHttpRequestParams)
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
     * delete existing client
     * @param clientId The client identifier
     */
    ClientsApi.prototype.clientsClientIdDelete = function (clientId, extraHttpRequestParams) {
        return this.clientsClientIdDeleteWithHttpInfo(clientId, extraHttpRequestParams)
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
     * Get one existing client
     * @param clientId The client identifier
     */
    ClientsApi.prototype.clientsClientIdGet = function (clientId, extraHttpRequestParams) {
        return this.clientsClientIdGetWithHttpInfo(clientId, extraHttpRequestParams)
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
     * update existing client
     * @param clientId The user identifier
     * @param updatedClient updated client
     */
    ClientsApi.prototype.clientsClientIdPut = function (clientId, updatedClient, extraHttpRequestParams) {
        return this.clientsClientIdPutWithHttpInfo(clientId, updatedClient, extraHttpRequestParams)
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
     * Bulk delete existing clients
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    ClientsApi.prototype.clientsDelete = function (filter, extraHttpRequestParams) {
        return this.clientsDeleteWithHttpInfo(filter, extraHttpRequestParams)
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
     * Returns clients
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    ClientsApi.prototype.clientsGet = function (pageSize, pageNumber, filter, sort, select, extraHttpRequestParams) {
        return this.clientsGetWithHttpInfo(pageSize, pageNumber, filter, sort, select, extraHttpRequestParams)
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
     * Create new client
     * @param client Your new client
     */
    ClientsApi.prototype.clientsPost = function (client, extraHttpRequestParams) {
        return this.clientsPostWithHttpInfo(client, extraHttpRequestParams)
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
     * Bulk update existing clients
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param clientBulkUpdate Use filter to find the clients and do a bulk update
     */
    ClientsApi.prototype.clientsPut = function (filter, clientBulkUpdate, extraHttpRequestParams) {
        return this.clientsPutWithHttpInfo(filter, clientBulkUpdate, extraHttpRequestParams)
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
     * Create multiple new clients
     * @param clients Multiple clients
     */
    ClientsApi.prototype.clientsBulkPostWithHttpInfo = function (clients, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/clients/bulk';
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
        headers.set('Content-Type', 'application/json');
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: clients == null ? '' : JSON.stringify(clients),
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
     * delete existing client
     * @param clientId The client identifier
     */
    ClientsApi.prototype.clientsClientIdDeleteWithHttpInfo = function (clientId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/clients/${clientId}'
            .replace('${' + 'clientId' + '}', String(clientId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new Error('Required parameter clientId was null or undefined when calling clientsClientIdDelete.');
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
     * Get one existing client
     * @param clientId The client identifier
     */
    ClientsApi.prototype.clientsClientIdGetWithHttpInfo = function (clientId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/clients/${clientId}'
            .replace('${' + 'clientId' + '}', String(clientId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new Error('Required parameter clientId was null or undefined when calling clientsClientIdGet.');
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
     * update existing client
     * @param clientId The user identifier
     * @param updatedClient updated client
     */
    ClientsApi.prototype.clientsClientIdPutWithHttpInfo = function (clientId, updatedClient, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/clients/${clientId}'
            .replace('${' + 'clientId' + '}', String(clientId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new Error('Required parameter clientId was null or undefined when calling clientsClientIdPut.');
        }
        // verify required parameter 'updatedClient' is not null or undefined
        if (updatedClient === null || updatedClient === undefined) {
            throw new Error('Required parameter updatedClient was null or undefined when calling clientsClientIdPut.');
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
            method: http_2.RequestMethod.Put,
            headers: headers,
            body: updatedClient == null ? '' : JSON.stringify(updatedClient),
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
     * Bulk delete existing clients
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    ClientsApi.prototype.clientsDeleteWithHttpInfo = function (filter, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/clients';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'filter' is not null or undefined
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling clientsDelete.');
        }
        if (filter !== undefined) {
            queryParameters.set('filter', filter);
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
     * Returns clients
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    ClientsApi.prototype.clientsGetWithHttpInfo = function (pageSize, pageNumber, filter, sort, select, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/clients';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (pageSize !== undefined) {
            queryParameters.set('pageSize', pageSize);
        }
        if (pageNumber !== undefined) {
            queryParameters.set('pageNumber', pageNumber);
        }
        if (filter !== undefined) {
            queryParameters.set('filter', filter);
        }
        if (sort !== undefined) {
            queryParameters.set('sort', sort);
        }
        if (select !== undefined) {
            queryParameters.set('select', select);
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
     * Create new client
     * @param client Your new client
     */
    ClientsApi.prototype.clientsPostWithHttpInfo = function (client, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/clients';
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
        headers.set('Content-Type', 'application/json');
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: client == null ? '' : JSON.stringify(client),
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
     * Bulk update existing clients
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param clientBulkUpdate Use filter to find the clients and do a bulk update
     */
    ClientsApi.prototype.clientsPutWithHttpInfo = function (filter, clientBulkUpdate, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/clients';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'filter' is not null or undefined
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling clientsPut.');
        }
        // verify required parameter 'clientBulkUpdate' is not null or undefined
        if (clientBulkUpdate === null || clientBulkUpdate === undefined) {
            throw new Error('Required parameter clientBulkUpdate was null or undefined when calling clientsPut.');
        }
        if (filter !== undefined) {
            queryParameters.set('filter', filter);
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
            method: http_2.RequestMethod.Put,
            headers: headers,
            body: clientBulkUpdate == null ? '' : JSON.stringify(clientBulkUpdate),
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return ClientsApi;
}());
ClientsApi.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
ClientsApi.ctorParameters = function () { return [
    { type: http_1.Http, },
    { type: configuration_1.Configuration, decorators: [{ type: core_1.Optional },] },
]; };
exports.ClientsApi = ClientsApi;
//# sourceMappingURL=ClientsApi.js.map