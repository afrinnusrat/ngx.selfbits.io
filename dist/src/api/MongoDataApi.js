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
var MongoDataApi = (function () {
    function MongoDataApi(http, configuration) {
        this.http = http;
        this.configuration = new configuration_1.Configuration();
        this.defaultHeaders = new http_1.Headers();
        if (configuration) {
            this.configuration = configuration;
            this.defaultHeaders = new http_1.Headers({ 'Authorization': this.configuration.apiKey });
        }
    }
    MongoDataApi.prototype.mModelsMongoModelIdDataBulkPost = function (mongoModelId, mongoDataItems, extraHttpRequestParams) {
        return this.mModelsMongoModelIdDataBulkPostWithHttpInfo(mongoModelId, mongoDataItems, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MongoDataApi.prototype.mModelsMongoModelIdDataDelete = function (mongoModelId, filter, extraHttpRequestParams) {
        return this.mModelsMongoModelIdDataDeleteWithHttpInfo(mongoModelId, filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MongoDataApi.prototype.mModelsMongoModelIdDataGet = function (mongoModelId, pageSize, pageNumber, filter, sort, select, extraHttpRequestParams) {
        return this.mModelsMongoModelIdDataGetWithHttpInfo(mongoModelId, pageSize, pageNumber, filter, sort, select, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MongoDataApi.prototype.mModelsMongoModelIdDataIdDelete = function (mongoModelId, id, extraHttpRequestParams) {
        return this.mModelsMongoModelIdDataIdDeleteWithHttpInfo(mongoModelId, id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MongoDataApi.prototype.mModelsMongoModelIdDataIdGet = function (mongoModelId, id, extraHttpRequestParams) {
        return this.mModelsMongoModelIdDataIdGetWithHttpInfo(mongoModelId, id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MongoDataApi.prototype.mModelsMongoModelIdDataIdPut = function (mongoModelId, id, updatedMongoData, extraHttpRequestParams) {
        return this.mModelsMongoModelIdDataIdPutWithHttpInfo(mongoModelId, id, updatedMongoData, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MongoDataApi.prototype.mModelsMongoModelIdDataPost = function (mongoModelId, mongoDataItem, extraHttpRequestParams) {
        return this.mModelsMongoModelIdDataPostWithHttpInfo(mongoModelId, mongoDataItem, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MongoDataApi.prototype.mModelsMongoModelIdDataPut = function (mongoModelId, filter, mongoDataBulkUpdate, extraHttpRequestParams) {
        return this.mModelsMongoModelIdDataPutWithHttpInfo(mongoModelId, filter, mongoDataBulkUpdate, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MongoDataApi.prototype.mModelsMongoModelIdDataBulkPostWithHttpInfo = function (mongoModelId, mongoDataItems, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/models/${mongoModelId}/data/bulk'
            .replace('${' + 'mongoModelId' + '}', String(mongoModelId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (mongoModelId === null || mongoModelId === undefined) {
            throw new Error('Required parameter mongoModelId was null or undefined when calling mModelsMongoModelIdDataBulkPost.');
        }
        if (mongoDataItems === null || mongoDataItems === undefined) {
            throw new Error('Required parameter mongoDataItems was null or undefined when calling mModelsMongoModelIdDataBulkPost.');
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
            body: mongoDataItems == null ? '' : JSON.stringify(mongoDataItems),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    MongoDataApi.prototype.mModelsMongoModelIdDataDeleteWithHttpInfo = function (mongoModelId, filter, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/models/${mongoModelId}/data'
            .replace('${' + 'mongoModelId' + '}', String(mongoModelId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (mongoModelId === null || mongoModelId === undefined) {
            throw new Error('Required parameter mongoModelId was null or undefined when calling mModelsMongoModelIdDataDelete.');
        }
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling mModelsMongoModelIdDataDelete.');
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
    MongoDataApi.prototype.mModelsMongoModelIdDataGetWithHttpInfo = function (mongoModelId, pageSize, pageNumber, filter, sort, select, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/models/${mongoModelId}/data'
            .replace('${' + 'mongoModelId' + '}', String(mongoModelId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (mongoModelId === null || mongoModelId === undefined) {
            throw new Error('Required parameter mongoModelId was null or undefined when calling mModelsMongoModelIdDataGet.');
        }
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
    MongoDataApi.prototype.mModelsMongoModelIdDataIdDeleteWithHttpInfo = function (mongoModelId, id, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/models/${mongoModelId}/data/${id}'
            .replace('${' + 'mongoModelId' + '}', String(mongoModelId))
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (mongoModelId === null || mongoModelId === undefined) {
            throw new Error('Required parameter mongoModelId was null or undefined when calling mModelsMongoModelIdDataIdDelete.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling mModelsMongoModelIdDataIdDelete.');
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
    MongoDataApi.prototype.mModelsMongoModelIdDataIdGetWithHttpInfo = function (mongoModelId, id, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/models/${mongoModelId}/data/${id}'
            .replace('${' + 'mongoModelId' + '}', String(mongoModelId))
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (mongoModelId === null || mongoModelId === undefined) {
            throw new Error('Required parameter mongoModelId was null or undefined when calling mModelsMongoModelIdDataIdGet.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling mModelsMongoModelIdDataIdGet.');
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
    MongoDataApi.prototype.mModelsMongoModelIdDataIdPutWithHttpInfo = function (mongoModelId, id, updatedMongoData, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/models/${mongoModelId}/data/${id}'
            .replace('${' + 'mongoModelId' + '}', String(mongoModelId))
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (mongoModelId === null || mongoModelId === undefined) {
            throw new Error('Required parameter mongoModelId was null or undefined when calling mModelsMongoModelIdDataIdPut.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling mModelsMongoModelIdDataIdPut.');
        }
        if (updatedMongoData === null || updatedMongoData === undefined) {
            throw new Error('Required parameter updatedMongoData was null or undefined when calling mModelsMongoModelIdDataIdPut.');
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
            body: updatedMongoData == null ? '' : JSON.stringify(updatedMongoData),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    MongoDataApi.prototype.mModelsMongoModelIdDataPostWithHttpInfo = function (mongoModelId, mongoDataItem, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/models/${mongoModelId}/data'
            .replace('${' + 'mongoModelId' + '}', String(mongoModelId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (mongoModelId === null || mongoModelId === undefined) {
            throw new Error('Required parameter mongoModelId was null or undefined when calling mModelsMongoModelIdDataPost.');
        }
        if (mongoDataItem === null || mongoDataItem === undefined) {
            throw new Error('Required parameter mongoDataItem was null or undefined when calling mModelsMongoModelIdDataPost.');
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
            body: mongoDataItem == null ? '' : JSON.stringify(mongoDataItem),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    MongoDataApi.prototype.mModelsMongoModelIdDataPutWithHttpInfo = function (mongoModelId, filter, mongoDataBulkUpdate, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/models/${mongoModelId}/data'
            .replace('${' + 'mongoModelId' + '}', String(mongoModelId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (mongoModelId === null || mongoModelId === undefined) {
            throw new Error('Required parameter mongoModelId was null or undefined when calling mModelsMongoModelIdDataPut.');
        }
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling mModelsMongoModelIdDataPut.');
        }
        if (mongoDataBulkUpdate === null || mongoDataBulkUpdate === undefined) {
            throw new Error('Required parameter mongoDataBulkUpdate was null or undefined when calling mModelsMongoModelIdDataPut.');
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
            body: mongoDataBulkUpdate == null ? '' : JSON.stringify(mongoDataBulkUpdate),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return MongoDataApi;
}());
MongoDataApi = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [http_1.Http, configuration_1.Configuration])
], MongoDataApi);
exports.MongoDataApi = MongoDataApi;
//# sourceMappingURL=MongoDataApi.js.map