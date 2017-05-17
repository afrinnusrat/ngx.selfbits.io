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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
require("rxjs/add/operator/map");
var configuration_1 = require("../configuration");
/* tslint:disable:no-unused-variable member-ordering */
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
    /**
     *
     * Create multiple new consumers
     * @param consumers Multiple consumers
     */
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
    /**
     *
     * delete existing consumer
     * @param consumerId The consumer identifier
     */
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
    /**
     *
     * Get one existing consumer
     * @param consumerId The consumer identifier
     */
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
    /**
     *
     * update existing consumer
     * @param consumerId The user identifier
     * @param updatedConsumer updated consumer
     */
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
    /**
     *
     * Bulk delete existing consumers
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
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
    /**
     *
     * Returns consumers
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
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
    /**
     *
     * Create new consumer
     * @param consumer Your new consumer
     */
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
    /**
     *
     * Bulk update existing consumers
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param consumerBulkUpdate Use filter to find the consumers and do a bulk update
     */
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
    /**
     *
     * Create multiple new consumers
     * @param consumers Multiple consumers
     */
    ConsumersApi.prototype.consumersBulkPostWithHttpInfo = function (consumers, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/consumers/bulk';
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
            body: consumers == null ? '' : JSON.stringify(consumers),
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
     * delete existing consumer
     * @param consumerId The consumer identifier
     */
    ConsumersApi.prototype.consumersConsumerIdDeleteWithHttpInfo = function (consumerId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/consumers/${consumerId}'
            .replace('${' + 'consumerId' + '}', String(consumerId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'consumerId' is not null or undefined
        if (consumerId === null || consumerId === undefined) {
            throw new Error('Required parameter consumerId was null or undefined when calling consumersConsumerIdDelete.');
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
     * Get one existing consumer
     * @param consumerId The consumer identifier
     */
    ConsumersApi.prototype.consumersConsumerIdGetWithHttpInfo = function (consumerId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/consumers/${consumerId}'
            .replace('${' + 'consumerId' + '}', String(consumerId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'consumerId' is not null or undefined
        if (consumerId === null || consumerId === undefined) {
            throw new Error('Required parameter consumerId was null or undefined when calling consumersConsumerIdGet.');
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
     * update existing consumer
     * @param consumerId The user identifier
     * @param updatedConsumer updated consumer
     */
    ConsumersApi.prototype.consumersConsumerIdPutWithHttpInfo = function (consumerId, updatedConsumer, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/consumers/${consumerId}'
            .replace('${' + 'consumerId' + '}', String(consumerId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'consumerId' is not null or undefined
        if (consumerId === null || consumerId === undefined) {
            throw new Error('Required parameter consumerId was null or undefined when calling consumersConsumerIdPut.');
        }
        // verify required parameter 'updatedConsumer' is not null or undefined
        if (updatedConsumer === null || updatedConsumer === undefined) {
            throw new Error('Required parameter updatedConsumer was null or undefined when calling consumersConsumerIdPut.');
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
            body: updatedConsumer == null ? '' : JSON.stringify(updatedConsumer),
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
     * Bulk delete existing consumers
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    ConsumersApi.prototype.consumersDeleteWithHttpInfo = function (filter, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/consumers';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'filter' is not null or undefined
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling consumersDelete.');
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
     * Returns consumers
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    ConsumersApi.prototype.consumersGetWithHttpInfo = function (pageSize, pageNumber, filter, sort, select, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/consumers';
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
     * Create new consumer
     * @param consumer Your new consumer
     */
    ConsumersApi.prototype.consumersPostWithHttpInfo = function (consumer, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/consumers';
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
            body: consumer == null ? '' : JSON.stringify(consumer),
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
     * Bulk update existing consumers
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param consumerBulkUpdate Use filter to find the consumers and do a bulk update
     */
    ConsumersApi.prototype.consumersPutWithHttpInfo = function (filter, consumerBulkUpdate, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/consumers';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'filter' is not null or undefined
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling consumersPut.');
        }
        // verify required parameter 'consumerBulkUpdate' is not null or undefined
        if (consumerBulkUpdate === null || consumerBulkUpdate === undefined) {
            throw new Error('Required parameter consumerBulkUpdate was null or undefined when calling consumersPut.');
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
            body: consumerBulkUpdate == null ? '' : JSON.stringify(consumerBulkUpdate),
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return ConsumersApi;
}());
ConsumersApi.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
ConsumersApi.ctorParameters = function () { return [
    { type: http_1.Http, },
    { type: configuration_1.Configuration, decorators: [{ type: core_1.Optional },] },
]; };
exports.ConsumersApi = ConsumersApi;
//# sourceMappingURL=ConsumersApi.js.map