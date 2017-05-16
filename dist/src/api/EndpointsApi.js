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
var EndpointsApi = (function () {
    function EndpointsApi(http, configuration) {
        this.http = http;
        this.configuration = new configuration_1.Configuration();
        this.defaultHeaders = new http_1.Headers();
        if (configuration) {
            this.configuration = configuration;
            this.defaultHeaders = new http_1.Headers({ 'Authorization': this.configuration.apiKey });
        }
    }
    EndpointsApi.prototype.endpointsBulkPost = function (endpoints, extraHttpRequestParams) {
        return this.endpointsBulkPostWithHttpInfo(endpoints, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    EndpointsApi.prototype.endpointsDelete = function (filter, extraHttpRequestParams) {
        return this.endpointsDeleteWithHttpInfo(filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    EndpointsApi.prototype.endpointsEndpointIdDelete = function (endpointId, extraHttpRequestParams) {
        return this.endpointsEndpointIdDeleteWithHttpInfo(endpointId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    EndpointsApi.prototype.endpointsEndpointIdGet = function (endpointId, extraHttpRequestParams) {
        return this.endpointsEndpointIdGetWithHttpInfo(endpointId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    EndpointsApi.prototype.endpointsEndpointIdPut = function (endpointId, updatedEndpoint, extraHttpRequestParams) {
        return this.endpointsEndpointIdPutWithHttpInfo(endpointId, updatedEndpoint, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    EndpointsApi.prototype.endpointsGet = function (pageSize, pageNumber, filter, sort, select, extraHttpRequestParams) {
        return this.endpointsGetWithHttpInfo(pageSize, pageNumber, filter, sort, select, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    EndpointsApi.prototype.endpointsPost = function (endpoint, extraHttpRequestParams) {
        return this.endpointsPostWithHttpInfo(endpoint, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    EndpointsApi.prototype.endpointsPut = function (filter, endpointBulkUpdate, extraHttpRequestParams) {
        return this.endpointsPutWithHttpInfo(filter, endpointBulkUpdate, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    EndpointsApi.prototype.endpointsBulkPostWithHttpInfo = function (endpoints, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/endpoints/bulk';
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
            body: endpoints == null ? '' : JSON.stringify(endpoints),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    EndpointsApi.prototype.endpointsDeleteWithHttpInfo = function (filter, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/endpoints';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling endpointsDelete.');
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
    EndpointsApi.prototype.endpointsEndpointIdDeleteWithHttpInfo = function (endpointId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/endpoints/${endpointId}'
            .replace('${' + 'endpointId' + '}', String(endpointId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (endpointId === null || endpointId === undefined) {
            throw new Error('Required parameter endpointId was null or undefined when calling endpointsEndpointIdDelete.');
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
    EndpointsApi.prototype.endpointsEndpointIdGetWithHttpInfo = function (endpointId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/endpoints/${endpointId}'
            .replace('${' + 'endpointId' + '}', String(endpointId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (endpointId === null || endpointId === undefined) {
            throw new Error('Required parameter endpointId was null or undefined when calling endpointsEndpointIdGet.');
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
    EndpointsApi.prototype.endpointsEndpointIdPutWithHttpInfo = function (endpointId, updatedEndpoint, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/endpoints/${endpointId}'
            .replace('${' + 'endpointId' + '}', String(endpointId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (endpointId === null || endpointId === undefined) {
            throw new Error('Required parameter endpointId was null or undefined when calling endpointsEndpointIdPut.');
        }
        if (updatedEndpoint === null || updatedEndpoint === undefined) {
            throw new Error('Required parameter updatedEndpoint was null or undefined when calling endpointsEndpointIdPut.');
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
            body: updatedEndpoint == null ? '' : JSON.stringify(updatedEndpoint),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    EndpointsApi.prototype.endpointsGetWithHttpInfo = function (pageSize, pageNumber, filter, sort, select, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/endpoints';
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
    EndpointsApi.prototype.endpointsPostWithHttpInfo = function (endpoint, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/endpoints';
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
            body: endpoint == null ? '' : JSON.stringify(endpoint),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    EndpointsApi.prototype.endpointsPutWithHttpInfo = function (filter, endpointBulkUpdate, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/endpoints';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling endpointsPut.');
        }
        if (endpointBulkUpdate === null || endpointBulkUpdate === undefined) {
            throw new Error('Required parameter endpointBulkUpdate was null or undefined when calling endpointsPut.');
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
            body: endpointBulkUpdate == null ? '' : JSON.stringify(endpointBulkUpdate),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return EndpointsApi;
}());
EndpointsApi = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [http_1.Http, configuration_1.Configuration])
], EndpointsApi);
exports.EndpointsApi = EndpointsApi;
//# sourceMappingURL=EndpointsApi.js.map