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
var ConsumersApi = (function () {
    function ConsumersApi(http, configuration) {
        this.http = http;
        this.configuration = new configuration_1.Configuration();
        this.defaultHeaders = new http_1.Headers();
        if (configuration) {
            this.configuration = configuration;
            this.defaultHeaders = new http_1.Headers({ 'Authorization': this.configuration.apiKey });
        }
    }
    ConsumersApi.prototype.consumersBulkPost = function (consumers, extraHttpRequestParams) {
        return this.consumersBulkPostWithHttpInfo(consumers, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    ConsumersApi.prototype.consumersConsumerIdDelete = function (consumerId, extraHttpRequestParams) {
        return this.consumersConsumerIdDeleteWithHttpInfo(consumerId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    ConsumersApi.prototype.consumersConsumerIdGet = function (consumerId, extraHttpRequestParams) {
        return this.consumersConsumerIdGetWithHttpInfo(consumerId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    ConsumersApi.prototype.consumersConsumerIdPut = function (consumerId, updatedConsumer, extraHttpRequestParams) {
        return this.consumersConsumerIdPutWithHttpInfo(consumerId, updatedConsumer, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    ConsumersApi.prototype.consumersDelete = function (filter, extraHttpRequestParams) {
        return this.consumersDeleteWithHttpInfo(filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    ConsumersApi.prototype.consumersGet = function (pageSize, pageNumber, filter, sort, select, extraHttpRequestParams) {
        return this.consumersGetWithHttpInfo(pageSize, pageNumber, filter, sort, select, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    ConsumersApi.prototype.consumersPost = function (consumer, extraHttpRequestParams) {
        return this.consumersPostWithHttpInfo(consumer, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    ConsumersApi.prototype.consumersPut = function (filter, consumerBulkUpdate, extraHttpRequestParams) {
        return this.consumersPutWithHttpInfo(filter, consumerBulkUpdate, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    ConsumersApi.prototype.consumersBulkPostWithHttpInfo = function (consumers, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/consumers/bulk';
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
            body: consumers == null ? '' : JSON.stringify(consumers),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    ConsumersApi.prototype.consumersConsumerIdDeleteWithHttpInfo = function (consumerId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/consumers/${consumerId}'
            .replace('${' + 'consumerId' + '}', String(consumerId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (consumerId === null || consumerId === undefined) {
            throw new Error('Required parameter consumerId was null or undefined when calling consumersConsumerIdDelete.');
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
    ConsumersApi.prototype.consumersConsumerIdGetWithHttpInfo = function (consumerId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/consumers/${consumerId}'
            .replace('${' + 'consumerId' + '}', String(consumerId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (consumerId === null || consumerId === undefined) {
            throw new Error('Required parameter consumerId was null or undefined when calling consumersConsumerIdGet.');
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
    ConsumersApi.prototype.consumersConsumerIdPutWithHttpInfo = function (consumerId, updatedConsumer, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/consumers/${consumerId}'
            .replace('${' + 'consumerId' + '}', String(consumerId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (consumerId === null || consumerId === undefined) {
            throw new Error('Required parameter consumerId was null or undefined when calling consumersConsumerIdPut.');
        }
        if (updatedConsumer === null || updatedConsumer === undefined) {
            throw new Error('Required parameter updatedConsumer was null or undefined when calling consumersConsumerIdPut.');
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
            body: updatedConsumer == null ? '' : JSON.stringify(updatedConsumer),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    ConsumersApi.prototype.consumersDeleteWithHttpInfo = function (filter, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/consumers';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling consumersDelete.');
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
    ConsumersApi.prototype.consumersGetWithHttpInfo = function (pageSize, pageNumber, filter, sort, select, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/consumers';
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
    ConsumersApi.prototype.consumersPostWithHttpInfo = function (consumer, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/consumers';
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
            body: consumer == null ? '' : JSON.stringify(consumer),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    ConsumersApi.prototype.consumersPutWithHttpInfo = function (filter, consumerBulkUpdate, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/consumers';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling consumersPut.');
        }
        if (consumerBulkUpdate === null || consumerBulkUpdate === undefined) {
            throw new Error('Required parameter consumerBulkUpdate was null or undefined when calling consumersPut.');
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
            body: consumerBulkUpdate == null ? '' : JSON.stringify(consumerBulkUpdate),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return ConsumersApi;
}());
ConsumersApi = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [http_1.Http, configuration_1.Configuration])
], ConsumersApi);
exports.ConsumersApi = ConsumersApi;
//# sourceMappingURL=ConsumersApi.js.map