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
var MongoModelsApi = (function () {
    function MongoModelsApi(http, configuration) {
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
     * Create multiple new mongo_models
     * @param mongoModels Multiple mongo_models
     */
    MongoModelsApi.prototype.mModelsBulkPost = function (mongoModels, extraHttpRequestParams) {
        return this.mModelsBulkPostWithHttpInfo(mongoModels, extraHttpRequestParams)
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
     * Bulk delete existing mongo_models
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    MongoModelsApi.prototype.mModelsDelete = function (filter, extraHttpRequestParams) {
        return this.mModelsDeleteWithHttpInfo(filter, extraHttpRequestParams)
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
     * Returns mongo_models
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;somename\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    MongoModelsApi.prototype.mModelsGet = function (pageSize, pageNumber, filter, sort, select, extraHttpRequestParams) {
        return this.mModelsGetWithHttpInfo(pageSize, pageNumber, filter, sort, select, extraHttpRequestParams)
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
     * delete existing mongo_model
     * @param mongoModelId The mongo_model identifier
     */
    MongoModelsApi.prototype.mModelsMongoModelIdDelete = function (mongoModelId, extraHttpRequestParams) {
        return this.mModelsMongoModelIdDeleteWithHttpInfo(mongoModelId, extraHttpRequestParams)
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
     * Get one existing mongo_model
     * @param mongoModelId The mongo_model identifier
     */
    MongoModelsApi.prototype.mModelsMongoModelIdGet = function (mongoModelId, extraHttpRequestParams) {
        return this.mModelsMongoModelIdGetWithHttpInfo(mongoModelId, extraHttpRequestParams)
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
     * update existing mongo_model
     * @param mongoModelId The mongo model identifier
     * @param updatedMongoModel updated mongo_model
     */
    MongoModelsApi.prototype.mModelsMongoModelIdPut = function (mongoModelId, updatedMongoModel, extraHttpRequestParams) {
        return this.mModelsMongoModelIdPutWithHttpInfo(mongoModelId, updatedMongoModel, extraHttpRequestParams)
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
     * Create new mongo_model
     * @param mongoModel Your new mongo_model
     */
    MongoModelsApi.prototype.mModelsPost = function (mongoModel, extraHttpRequestParams) {
        return this.mModelsPostWithHttpInfo(mongoModel, extraHttpRequestParams)
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
     * Bulk update existing mongo_models
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param mongoModelBulkUpdate Use filter to find the mongo_models and do a bulk update
     */
    MongoModelsApi.prototype.mModelsPut = function (filter, mongoModelBulkUpdate, extraHttpRequestParams) {
        return this.mModelsPutWithHttpInfo(filter, mongoModelBulkUpdate, extraHttpRequestParams)
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
     * Validate a mongo model definition. If the validation fails, information is provided in the payload with status code 200.
     * @param mongoModel The mongo_model
     */
    MongoModelsApi.prototype.mModelsValidatePost = function (mongoModel, extraHttpRequestParams) {
        return this.mModelsValidatePostWithHttpInfo(mongoModel, extraHttpRequestParams)
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
     * Create multiple new mongo_models
     * @param mongoModels Multiple mongo_models
     */
    MongoModelsApi.prototype.mModelsBulkPostWithHttpInfo = function (mongoModels, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/models/bulk';
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
            body: mongoModels == null ? '' : JSON.stringify(mongoModels),
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
     * Bulk delete existing mongo_models
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    MongoModelsApi.prototype.mModelsDeleteWithHttpInfo = function (filter, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/models';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'filter' is not null or undefined
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling mModelsDelete.');
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
     * Returns mongo_models
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;somename\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    MongoModelsApi.prototype.mModelsGetWithHttpInfo = function (pageSize, pageNumber, filter, sort, select, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/models';
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
     * delete existing mongo_model
     * @param mongoModelId The mongo_model identifier
     */
    MongoModelsApi.prototype.mModelsMongoModelIdDeleteWithHttpInfo = function (mongoModelId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/models/${mongoModelId}'
            .replace('${' + 'mongoModelId' + '}', String(mongoModelId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'mongoModelId' is not null or undefined
        if (mongoModelId === null || mongoModelId === undefined) {
            throw new Error('Required parameter mongoModelId was null or undefined when calling mModelsMongoModelIdDelete.');
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
     * Get one existing mongo_model
     * @param mongoModelId The mongo_model identifier
     */
    MongoModelsApi.prototype.mModelsMongoModelIdGetWithHttpInfo = function (mongoModelId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/models/${mongoModelId}'
            .replace('${' + 'mongoModelId' + '}', String(mongoModelId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'mongoModelId' is not null or undefined
        if (mongoModelId === null || mongoModelId === undefined) {
            throw new Error('Required parameter mongoModelId was null or undefined when calling mModelsMongoModelIdGet.');
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
     * update existing mongo_model
     * @param mongoModelId The mongo model identifier
     * @param updatedMongoModel updated mongo_model
     */
    MongoModelsApi.prototype.mModelsMongoModelIdPutWithHttpInfo = function (mongoModelId, updatedMongoModel, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/models/${mongoModelId}'
            .replace('${' + 'mongoModelId' + '}', String(mongoModelId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'mongoModelId' is not null or undefined
        if (mongoModelId === null || mongoModelId === undefined) {
            throw new Error('Required parameter mongoModelId was null or undefined when calling mModelsMongoModelIdPut.');
        }
        // verify required parameter 'updatedMongoModel' is not null or undefined
        if (updatedMongoModel === null || updatedMongoModel === undefined) {
            throw new Error('Required parameter updatedMongoModel was null or undefined when calling mModelsMongoModelIdPut.');
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
            body: updatedMongoModel == null ? '' : JSON.stringify(updatedMongoModel),
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
     * Create new mongo_model
     * @param mongoModel Your new mongo_model
     */
    MongoModelsApi.prototype.mModelsPostWithHttpInfo = function (mongoModel, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/models';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'mongoModel' is not null or undefined
        if (mongoModel === null || mongoModel === undefined) {
            throw new Error('Required parameter mongoModel was null or undefined when calling mModelsPost.');
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
            body: mongoModel == null ? '' : JSON.stringify(mongoModel),
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
     * Bulk update existing mongo_models
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param mongoModelBulkUpdate Use filter to find the mongo_models and do a bulk update
     */
    MongoModelsApi.prototype.mModelsPutWithHttpInfo = function (filter, mongoModelBulkUpdate, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/models';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'filter' is not null or undefined
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling mModelsPut.');
        }
        // verify required parameter 'mongoModelBulkUpdate' is not null or undefined
        if (mongoModelBulkUpdate === null || mongoModelBulkUpdate === undefined) {
            throw new Error('Required parameter mongoModelBulkUpdate was null or undefined when calling mModelsPut.');
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
            body: mongoModelBulkUpdate == null ? '' : JSON.stringify(mongoModelBulkUpdate),
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
     * Validate a mongo model definition. If the validation fails, information is provided in the payload with status code 200.
     * @param mongoModel The mongo_model
     */
    MongoModelsApi.prototype.mModelsValidatePostWithHttpInfo = function (mongoModel, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/models/validate';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'mongoModel' is not null or undefined
        if (mongoModel === null || mongoModel === undefined) {
            throw new Error('Required parameter mongoModel was null or undefined when calling mModelsValidatePost.');
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
            body: mongoModel == null ? '' : JSON.stringify(mongoModel),
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return MongoModelsApi;
}());
MongoModelsApi.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
MongoModelsApi.ctorParameters = function () { return [
    { type: http_1.Http, },
    { type: configuration_1.Configuration, decorators: [{ type: core_1.Optional },] },
]; };
exports.MongoModelsApi = MongoModelsApi;
//# sourceMappingURL=MongoModelsApi.js.map