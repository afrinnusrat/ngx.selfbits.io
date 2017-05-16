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
var FilesApi = (function () {
    function FilesApi(http, configuration) {
        this.http = http;
        this.configuration = new configuration_1.Configuration();
        this.defaultHeaders = new http_1.Headers();
        if (configuration) {
            this.configuration = configuration;
            this.defaultHeaders = new http_1.Headers({ 'Authorization': this.configuration.apiKey });
        }
    }
    FilesApi.prototype.browse = function (filePath, extraHttpRequestParams) {
        return this.browseWithHttpInfo(filePath, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    FilesApi.prototype.browse_1 = function (filePath, extraHttpRequestParams) {
        return this.browse_1WithHttpInfo(filePath, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    FilesApi.prototype.createPrivate = function (file, extraHttpRequestParams) {
        return this.createPrivateWithHttpInfo(file, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    FilesApi.prototype.createPublic = function (file, extraHttpRequestParams) {
        return this.createPublicWithHttpInfo(file, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    FilesApi.prototype.deleteOne = function (fileId, extraHttpRequestParams) {
        return this.deleteOneWithHttpInfo(fileId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    FilesApi.prototype.query = function (pageSize, pageNumber, filter, sort, select, extraHttpRequestParams) {
        return this.queryWithHttpInfo(pageSize, pageNumber, filter, sort, select, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    FilesApi.prototype.readOne = function (fileId, filePath, extraHttpRequestParams) {
        return this.readOneWithHttpInfo(fileId, filePath, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    FilesApi.prototype.updateOne = function (fileId, updatedFile, extraHttpRequestParams) {
        return this.updateOneWithHttpInfo(fileId, updatedFile, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    FilesApi.prototype.verifyUpload = function (fileId, etagObject, extraHttpRequestParams) {
        return this.verifyUploadWithHttpInfo(fileId, etagObject, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    FilesApi.prototype.browseWithHttpInfo = function (filePath, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/files/browse/public';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (filePath === null || filePath === undefined) {
            throw new Error('Required parameter filePath was null or undefined when calling browse.');
        }
        if (filePath !== undefined) {
            queryParameters.set('filePath', filePath);
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
    FilesApi.prototype.browse_1WithHttpInfo = function (filePath, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/files/browse/private';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (filePath === null || filePath === undefined) {
            throw new Error('Required parameter filePath was null or undefined when calling browse_1.');
        }
        if (filePath !== undefined) {
            queryParameters.set('filePath', filePath);
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
    FilesApi.prototype.createPrivateWithHttpInfo = function (file, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/files/private';
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
            body: file == null ? '' : JSON.stringify(file),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    FilesApi.prototype.createPublicWithHttpInfo = function (file, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/files/public';
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
            body: file == null ? '' : JSON.stringify(file),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    FilesApi.prototype.deleteOneWithHttpInfo = function (fileId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/files/${fileId}'
            .replace('${' + 'fileId' + '}', String(fileId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (fileId === null || fileId === undefined) {
            throw new Error('Required parameter fileId was null or undefined when calling deleteOne.');
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
    FilesApi.prototype.queryWithHttpInfo = function (pageSize, pageNumber, filter, sort, select, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/files';
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
    FilesApi.prototype.readOneWithHttpInfo = function (fileId, filePath, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/files/file';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (fileId !== undefined) {
            queryParameters.set('fileId', fileId);
        }
        if (filePath !== undefined) {
            queryParameters.set('filePath', filePath);
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
    FilesApi.prototype.updateOneWithHttpInfo = function (fileId, updatedFile, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/files/${fileId}'
            .replace('${' + 'fileId' + '}', String(fileId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (fileId === null || fileId === undefined) {
            throw new Error('Required parameter fileId was null or undefined when calling updateOne.');
        }
        if (updatedFile === null || updatedFile === undefined) {
            throw new Error('Required parameter updatedFile was null or undefined when calling updateOne.');
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
            body: updatedFile == null ? '' : JSON.stringify(updatedFile),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    FilesApi.prototype.verifyUploadWithHttpInfo = function (fileId, etagObject, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/files/${fileId}/verify'
            .replace('${' + 'fileId' + '}', String(fileId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (fileId === null || fileId === undefined) {
            throw new Error('Required parameter fileId was null or undefined when calling verifyUpload.');
        }
        if (etagObject === null || etagObject === undefined) {
            throw new Error('Required parameter etagObject was null or undefined when calling verifyUpload.');
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
            body: etagObject == null ? '' : JSON.stringify(etagObject),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return FilesApi;
}());
FilesApi = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [http_1.Http, configuration_1.Configuration])
], FilesApi);
exports.FilesApi = FilesApi;
//# sourceMappingURL=FilesApi.js.map