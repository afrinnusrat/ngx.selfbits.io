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
    MongoModelsApi.prototype.mModelsBulkPostWithHttpInfo = function (mongoModels, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/models/bulk';
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
            body: mongoModels == null ? '' : JSON.stringify(mongoModels),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    MongoModelsApi.prototype.mModelsDeleteWithHttpInfo = function (filter, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/models';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling mModelsDelete.');
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
    MongoModelsApi.prototype.mModelsGetWithHttpInfo = function (pageSize, pageNumber, filter, sort, select, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/models';
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
    MongoModelsApi.prototype.mModelsMongoModelIdDeleteWithHttpInfo = function (mongoModelId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/models/${mongoModelId}'
            .replace('${' + 'mongoModelId' + '}', String(mongoModelId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (mongoModelId === null || mongoModelId === undefined) {
            throw new Error('Required parameter mongoModelId was null or undefined when calling mModelsMongoModelIdDelete.');
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
    MongoModelsApi.prototype.mModelsMongoModelIdGetWithHttpInfo = function (mongoModelId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/models/${mongoModelId}'
            .replace('${' + 'mongoModelId' + '}', String(mongoModelId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (mongoModelId === null || mongoModelId === undefined) {
            throw new Error('Required parameter mongoModelId was null or undefined when calling mModelsMongoModelIdGet.');
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
    MongoModelsApi.prototype.mModelsMongoModelIdPutWithHttpInfo = function (mongoModelId, updatedMongoModel, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/models/${mongoModelId}'
            .replace('${' + 'mongoModelId' + '}', String(mongoModelId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (mongoModelId === null || mongoModelId === undefined) {
            throw new Error('Required parameter mongoModelId was null or undefined when calling mModelsMongoModelIdPut.');
        }
        if (updatedMongoModel === null || updatedMongoModel === undefined) {
            throw new Error('Required parameter updatedMongoModel was null or undefined when calling mModelsMongoModelIdPut.');
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
            body: updatedMongoModel == null ? '' : JSON.stringify(updatedMongoModel),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    MongoModelsApi.prototype.mModelsPostWithHttpInfo = function (mongoModel, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/models';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (mongoModel === null || mongoModel === undefined) {
            throw new Error('Required parameter mongoModel was null or undefined when calling mModelsPost.');
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
            body: mongoModel == null ? '' : JSON.stringify(mongoModel),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    MongoModelsApi.prototype.mModelsPutWithHttpInfo = function (filter, mongoModelBulkUpdate, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/models';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling mModelsPut.');
        }
        if (mongoModelBulkUpdate === null || mongoModelBulkUpdate === undefined) {
            throw new Error('Required parameter mongoModelBulkUpdate was null or undefined when calling mModelsPut.');
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
            body: mongoModelBulkUpdate == null ? '' : JSON.stringify(mongoModelBulkUpdate),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    MongoModelsApi.prototype.mModelsValidatePostWithHttpInfo = function (mongoModel, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/models/validate';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (mongoModel === null || mongoModel === undefined) {
            throw new Error('Required parameter mongoModel was null or undefined when calling mModelsValidatePost.');
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
            body: mongoModel == null ? '' : JSON.stringify(mongoModel),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return MongoModelsApi;
}());
MongoModelsApi = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [http_1.Http, configuration_1.Configuration])
], MongoModelsApi);
exports.MongoModelsApi = MongoModelsApi;
//# sourceMappingURL=MongoModelsApi.js.map