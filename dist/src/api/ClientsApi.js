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
    ClientsApi.prototype.clientsBulkPostWithHttpInfo = function (clients, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/clients/bulk';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
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
            body: clients == null ? '' : JSON.stringify(clients),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    ClientsApi.prototype.clientsClientIdDeleteWithHttpInfo = function (clientId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/clients/${clientId}'
            .replace('${' + 'clientId' + '}', String(clientId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (clientId === null || clientId === undefined) {
            throw new Error('Required parameter clientId was null or undefined when calling clientsClientIdDelete.');
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
    ClientsApi.prototype.clientsClientIdGetWithHttpInfo = function (clientId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/clients/${clientId}'
            .replace('${' + 'clientId' + '}', String(clientId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (clientId === null || clientId === undefined) {
            throw new Error('Required parameter clientId was null or undefined when calling clientsClientIdGet.');
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
    ClientsApi.prototype.clientsClientIdPutWithHttpInfo = function (clientId, updatedClient, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/clients/${clientId}'
            .replace('${' + 'clientId' + '}', String(clientId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (clientId === null || clientId === undefined) {
            throw new Error('Required parameter clientId was null or undefined when calling clientsClientIdPut.');
        }
        if (updatedClient === null || updatedClient === undefined) {
            throw new Error('Required parameter updatedClient was null or undefined when calling clientsClientIdPut.');
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
            method: http_2.RequestMethod.Put,
            headers: headers,
            body: updatedClient == null ? '' : JSON.stringify(updatedClient),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    ClientsApi.prototype.clientsDeleteWithHttpInfo = function (filter, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/clients';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling clientsDelete.');
        }
        if (filter !== undefined) {
            queryParameters.set('filter', filter);
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
    ClientsApi.prototype.clientsGetWithHttpInfo = function (pageSize, pageNumber, filter, sort, select, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/clients';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
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
    ClientsApi.prototype.clientsPostWithHttpInfo = function (client, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/clients';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
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
            body: client == null ? '' : JSON.stringify(client),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    ClientsApi.prototype.clientsPutWithHttpInfo = function (filter, clientBulkUpdate, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/clients';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling clientsPut.');
        }
        if (clientBulkUpdate === null || clientBulkUpdate === undefined) {
            throw new Error('Required parameter clientBulkUpdate was null or undefined when calling clientsPut.');
        }
        if (filter !== undefined) {
            queryParameters.set('filter', filter);
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
            method: http_2.RequestMethod.Put,
            headers: headers,
            body: clientBulkUpdate == null ? '' : JSON.stringify(clientBulkUpdate),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return ClientsApi;
}());
ClientsApi = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [http_1.Http, configuration_1.Configuration])
], ClientsApi);
exports.ClientsApi = ClientsApi;
//# sourceMappingURL=ClientsApi.js.map