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
var MongoDatabasesApi = (function () {
    function MongoDatabasesApi(http, configuration) {
        this.http = http;
        this.configuration = new configuration_1.Configuration();
        this.defaultHeaders = new http_1.Headers();
        if (configuration) {
            this.configuration = configuration;
            this.defaultHeaders = new http_1.Headers({ 'Authorization': this.configuration.apiKey });
        }
    }
    MongoDatabasesApi.prototype.mDbBulkPost = function (mongoDatabases, extraHttpRequestParams) {
        return this.mDbBulkPostWithHttpInfo(mongoDatabases, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MongoDatabasesApi.prototype.mDbDelete = function (filter, extraHttpRequestParams) {
        return this.mDbDeleteWithHttpInfo(filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MongoDatabasesApi.prototype.mDbGet = function (pageSize, pageNumber, filter, sort, select, extraHttpRequestParams) {
        return this.mDbGetWithHttpInfo(pageSize, pageNumber, filter, sort, select, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MongoDatabasesApi.prototype.mDbMongoDatabaseIdDelete = function (mongoDatabaseId, extraHttpRequestParams) {
        return this.mDbMongoDatabaseIdDeleteWithHttpInfo(mongoDatabaseId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MongoDatabasesApi.prototype.mDbMongoDatabaseIdGet = function (mongoDatabaseId, extraHttpRequestParams) {
        return this.mDbMongoDatabaseIdGetWithHttpInfo(mongoDatabaseId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MongoDatabasesApi.prototype.mDbMongoDatabaseIdPut = function (mongoDatabaseId, updatedMongoDatabase, extraHttpRequestParams) {
        return this.mDbMongoDatabaseIdPutWithHttpInfo(mongoDatabaseId, updatedMongoDatabase, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MongoDatabasesApi.prototype.mDbMongoDatabaseIdTestPost = function (mongoDatabaseId, extraHttpRequestParams) {
        return this.mDbMongoDatabaseIdTestPostWithHttpInfo(mongoDatabaseId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MongoDatabasesApi.prototype.mDbPost = function (mongoDatabase, extraHttpRequestParams) {
        return this.mDbPostWithHttpInfo(mongoDatabase, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MongoDatabasesApi.prototype.mDbPut = function (filter, mongoDatabaseBulkUpdate, extraHttpRequestParams) {
        return this.mDbPutWithHttpInfo(filter, mongoDatabaseBulkUpdate, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    MongoDatabasesApi.prototype.mDbBulkPostWithHttpInfo = function (mongoDatabases, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/db/bulk';
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
            body: mongoDatabases == null ? '' : JSON.stringify(mongoDatabases),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    MongoDatabasesApi.prototype.mDbDeleteWithHttpInfo = function (filter, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/db';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling mDbDelete.');
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
    MongoDatabasesApi.prototype.mDbGetWithHttpInfo = function (pageSize, pageNumber, filter, sort, select, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/db';
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
    MongoDatabasesApi.prototype.mDbMongoDatabaseIdDeleteWithHttpInfo = function (mongoDatabaseId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/db/${mongoDatabaseId}'
            .replace('${' + 'mongoDatabaseId' + '}', String(mongoDatabaseId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (mongoDatabaseId === null || mongoDatabaseId === undefined) {
            throw new Error('Required parameter mongoDatabaseId was null or undefined when calling mDbMongoDatabaseIdDelete.');
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
    MongoDatabasesApi.prototype.mDbMongoDatabaseIdGetWithHttpInfo = function (mongoDatabaseId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/db/${mongoDatabaseId}'
            .replace('${' + 'mongoDatabaseId' + '}', String(mongoDatabaseId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (mongoDatabaseId === null || mongoDatabaseId === undefined) {
            throw new Error('Required parameter mongoDatabaseId was null or undefined when calling mDbMongoDatabaseIdGet.');
        }
        var consumes = [];
        var produces = [];
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
    MongoDatabasesApi.prototype.mDbMongoDatabaseIdPutWithHttpInfo = function (mongoDatabaseId, updatedMongoDatabase, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/db/${mongoDatabaseId}'
            .replace('${' + 'mongoDatabaseId' + '}', String(mongoDatabaseId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (mongoDatabaseId === null || mongoDatabaseId === undefined) {
            throw new Error('Required parameter mongoDatabaseId was null or undefined when calling mDbMongoDatabaseIdPut.');
        }
        if (updatedMongoDatabase === null || updatedMongoDatabase === undefined) {
            throw new Error('Required parameter updatedMongoDatabase was null or undefined when calling mDbMongoDatabaseIdPut.');
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
            body: updatedMongoDatabase == null ? '' : JSON.stringify(updatedMongoDatabase),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    MongoDatabasesApi.prototype.mDbMongoDatabaseIdTestPostWithHttpInfo = function (mongoDatabaseId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/db/${mongoDatabaseId}/test'
            .replace('${' + 'mongoDatabaseId' + '}', String(mongoDatabaseId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (mongoDatabaseId === null || mongoDatabaseId === undefined) {
            throw new Error('Required parameter mongoDatabaseId was null or undefined when calling mDbMongoDatabaseIdTestPost.');
        }
        var consumes = [];
        var produces = [
            'application/json'
        ];
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    MongoDatabasesApi.prototype.mDbPostWithHttpInfo = function (mongoDatabase, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/db';
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
            body: mongoDatabase == null ? '' : JSON.stringify(mongoDatabase),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    MongoDatabasesApi.prototype.mDbPutWithHttpInfo = function (filter, mongoDatabaseBulkUpdate, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/m/db';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling mDbPut.');
        }
        if (mongoDatabaseBulkUpdate === null || mongoDatabaseBulkUpdate === undefined) {
            throw new Error('Required parameter mongoDatabaseBulkUpdate was null or undefined when calling mDbPut.');
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
            body: mongoDatabaseBulkUpdate == null ? '' : JSON.stringify(mongoDatabaseBulkUpdate),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return MongoDatabasesApi;
}());
MongoDatabasesApi = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [http_1.Http, configuration_1.Configuration])
], MongoDatabasesApi);
exports.MongoDatabasesApi = MongoDatabasesApi;
//# sourceMappingURL=MongoDatabasesApi.js.map