(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/http"), require("@angular/core"), require("rxjs/add/operator/map"), require("@angular/common"), require("rxjs/add/operator/catch"), require("rxjs/add/operator/mergeMap"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/http", "@angular/core", "rxjs/add/operator/map", "@angular/common", "rxjs/add/operator/catch", "rxjs/add/operator/mergeMap"], factory);
	else if(typeof exports === 'object')
		exports["ngx.selfbits.io"] = factory(require("@angular/http"), require("@angular/core"), require("rxjs/add/operator/map"), require("@angular/common"), require("rxjs/add/operator/catch"), require("rxjs/add/operator/mergeMap"));
	else
		root["ngx.selfbits.io"] = factory(root["@angular/http"], root["@angular/core"], root["rxjs/add/operator/map"], root["@angular/common"], root["rxjs/add/operator/catch"], root["rxjs/add/operator/mergeMap"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_35__, __WEBPACK_EXTERNAL_MODULE_36__, __WEBPACK_EXTERNAL_MODULE_37__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Configuration = (function () {
    function Configuration(configurationParameters) {
        if (configurationParameters === void 0) { configurationParameters = {}; }
        this.tenant = configurationParameters.tenant;
        this.application = configurationParameters.application;
        this.sbClientId = configurationParameters.sbClientId;
        this.sbClientSecret = configurationParameters.sbClientSecret;
        this.useDeveloperAuth = configurationParameters.useDeveloperAuth;
        this.basePath = "https://" + this.tenant + ".apps.selfbits.io/api/v2/" + this.tenant + "/" + (this.useDeveloperAuth ? "admin" : "apps") + "/" + this.application;
        this.apiKey = configurationParameters.apiKey;
        this.apiKeyPrefix = configurationParameters.apiKeyPrefix || "bearer ";
        if (!this.apiKeyPrefix.endsWith(" ")) {
            this.apiKeyPrefix = this.apiKeyPrefix + " ";
        }
    }
    return Configuration;
}());
exports.Configuration = Configuration;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var http_1 = __webpack_require__(0);
var http_2 = __webpack_require__(0);
__webpack_require__(3);
var configuration_1 = __webpack_require__(1);
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


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(7));
var ActionsApi_1 = __webpack_require__(7);
__export(__webpack_require__(8));
var ApplicationsApi_1 = __webpack_require__(8);
__export(__webpack_require__(9));
var ClientsApi_1 = __webpack_require__(9);
__export(__webpack_require__(10));
var ConsumersApi_1 = __webpack_require__(10);
__export(__webpack_require__(11));
var DirectoriesApi_1 = __webpack_require__(11);
__export(__webpack_require__(12));
var EmailVerificationApi_1 = __webpack_require__(12);
__export(__webpack_require__(13));
var EndpointsApi_1 = __webpack_require__(13);
__export(__webpack_require__(4));
var FilesApi_1 = __webpack_require__(4);
__export(__webpack_require__(14));
var InteractiveViewsApi_1 = __webpack_require__(14);
__export(__webpack_require__(15));
var InvitesApi_1 = __webpack_require__(15);
__export(__webpack_require__(16));
var LoginApi_1 = __webpack_require__(16);
__export(__webpack_require__(17));
var MongoDataApi_1 = __webpack_require__(17);
__export(__webpack_require__(18));
var MongoDatabasesApi_1 = __webpack_require__(18);
__export(__webpack_require__(19));
var MongoModelsApi_1 = __webpack_require__(19);
__export(__webpack_require__(20));
var OrganizationsApi_1 = __webpack_require__(20);
__export(__webpack_require__(21));
var PasswordResetApi_1 = __webpack_require__(21);
__export(__webpack_require__(22));
var ProvidersApi_1 = __webpack_require__(22);
__export(__webpack_require__(23));
var RolesApi_1 = __webpack_require__(23);
__export(__webpack_require__(24));
var SignupApi_1 = __webpack_require__(24);
__export(__webpack_require__(25));
var TenantsApi_1 = __webpack_require__(25);
__export(__webpack_require__(26));
var UsersApi_1 = __webpack_require__(26);
exports.APIS = [ActionsApi_1.ActionsApi, ApplicationsApi_1.ApplicationsApi, ClientsApi_1.ClientsApi, ConsumersApi_1.ConsumersApi, DirectoriesApi_1.DirectoriesApi, EmailVerificationApi_1.EmailVerificationApi, EndpointsApi_1.EndpointsApi, FilesApi_1.FilesApi, InteractiveViewsApi_1.InteractiveViewsApi, InvitesApi_1.InvitesApi, LoginApi_1.LoginApi, MongoDataApi_1.MongoDataApi, MongoDatabasesApi_1.MongoDatabasesApi, MongoModelsApi_1.MongoModelsApi, OrganizationsApi_1.OrganizationsApi, PasswordResetApi_1.PasswordResetApi, ProvidersApi_1.ProvidersApi, RolesApi_1.RolesApi, SignupApi_1.SignupApi, TenantsApi_1.TenantsApi, UsersApi_1.UsersApi];


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ConfigService_1 = __webpack_require__(33);
var FileService_1 = __webpack_require__(34);
exports.SERVICES = [
    ConfigService_1.ConfigService,
    FileService_1.FileService
];


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var http_1 = __webpack_require__(0);
var http_2 = __webpack_require__(0);
__webpack_require__(3);
var configuration_1 = __webpack_require__(1);
var ActionsApi = (function () {
    function ActionsApi(http, configuration) {
        this.http = http;
        this.configuration = new configuration_1.Configuration();
        this.defaultHeaders = new http_1.Headers();
        if (configuration) {
            this.configuration = configuration;
            this.defaultHeaders = new http_1.Headers({ 'Authorization': this.configuration.apiKey });
        }
    }
    ActionsApi.prototype.actionsActionIdDelete = function (actionId, extraHttpRequestParams) {
        return this.actionsActionIdDeleteWithHttpInfo(actionId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    ActionsApi.prototype.actionsActionIdExecPost = function (actionId, payload, extraHttpRequestParams) {
        return this.actionsActionIdExecPostWithHttpInfo(actionId, payload, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    ActionsApi.prototype.actionsActionIdGet = function (actionId, extraHttpRequestParams) {
        return this.actionsActionIdGetWithHttpInfo(actionId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    ActionsApi.prototype.actionsActionIdPut = function (actionId, updatedAction, extraHttpRequestParams) {
        return this.actionsActionIdPutWithHttpInfo(actionId, updatedAction, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    ActionsApi.prototype.actionsBulkPost = function (actions, extraHttpRequestParams) {
        return this.actionsBulkPostWithHttpInfo(actions, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    ActionsApi.prototype.actionsDelete = function (filter, extraHttpRequestParams) {
        return this.actionsDeleteWithHttpInfo(filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    ActionsApi.prototype.actionsGet = function (pageSize, pageNumber, filter, sort, select, extraHttpRequestParams) {
        return this.actionsGetWithHttpInfo(pageSize, pageNumber, filter, sort, select, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    ActionsApi.prototype.actionsPost = function (action, extraHttpRequestParams) {
        return this.actionsPostWithHttpInfo(action, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    ActionsApi.prototype.actionsPut = function (filter, actionBulkUpdate, extraHttpRequestParams) {
        return this.actionsPutWithHttpInfo(filter, actionBulkUpdate, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    ActionsApi.prototype.actionsActionIdDeleteWithHttpInfo = function (actionId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/actions/${actionId}'
            .replace('${' + 'actionId' + '}', String(actionId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (actionId === null || actionId === undefined) {
            throw new Error('Required parameter actionId was null or undefined when calling actionsActionIdDelete.');
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
    ActionsApi.prototype.actionsActionIdExecPostWithHttpInfo = function (actionId, payload, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/actions/${actionId}/exec'
            .replace('${' + 'actionId' + '}', String(actionId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (actionId === null || actionId === undefined) {
            throw new Error('Required parameter actionId was null or undefined when calling actionsActionIdExecPost.');
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
            body: payload == null ? '' : JSON.stringify(payload),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    ActionsApi.prototype.actionsActionIdGetWithHttpInfo = function (actionId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/actions/${actionId}'
            .replace('${' + 'actionId' + '}', String(actionId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (actionId === null || actionId === undefined) {
            throw new Error('Required parameter actionId was null or undefined when calling actionsActionIdGet.');
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
    ActionsApi.prototype.actionsActionIdPutWithHttpInfo = function (actionId, updatedAction, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/actions/${actionId}'
            .replace('${' + 'actionId' + '}', String(actionId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (actionId === null || actionId === undefined) {
            throw new Error('Required parameter actionId was null or undefined when calling actionsActionIdPut.');
        }
        if (updatedAction === null || updatedAction === undefined) {
            throw new Error('Required parameter updatedAction was null or undefined when calling actionsActionIdPut.');
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
            body: updatedAction == null ? '' : JSON.stringify(updatedAction),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    ActionsApi.prototype.actionsBulkPostWithHttpInfo = function (actions, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/actions/bulk';
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
            body: actions == null ? '' : JSON.stringify(actions),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    ActionsApi.prototype.actionsDeleteWithHttpInfo = function (filter, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/actions';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling actionsDelete.');
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
    ActionsApi.prototype.actionsGetWithHttpInfo = function (pageSize, pageNumber, filter, sort, select, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/actions';
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
    ActionsApi.prototype.actionsPostWithHttpInfo = function (action, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/actions';
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
            body: action == null ? '' : JSON.stringify(action),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    ActionsApi.prototype.actionsPutWithHttpInfo = function (filter, actionBulkUpdate, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/actions';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling actionsPut.');
        }
        if (actionBulkUpdate === null || actionBulkUpdate === undefined) {
            throw new Error('Required parameter actionBulkUpdate was null or undefined when calling actionsPut.');
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
            body: actionBulkUpdate == null ? '' : JSON.stringify(actionBulkUpdate),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return ActionsApi;
}());
ActionsApi = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [http_1.Http, configuration_1.Configuration])
], ActionsApi);
exports.ActionsApi = ActionsApi;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var http_1 = __webpack_require__(0);
var http_2 = __webpack_require__(0);
__webpack_require__(3);
var configuration_1 = __webpack_require__(1);
var ApplicationsApi = (function () {
    function ApplicationsApi(http, configuration) {
        this.http = http;
        this.configuration = new configuration_1.Configuration();
        this.defaultHeaders = new http_1.Headers();
        if (configuration) {
            this.configuration = configuration;
            this.defaultHeaders = new http_1.Headers({ 'Authorization': this.configuration.apiKey });
        }
    }
    ApplicationsApi.prototype.rootGet = function (extraHttpRequestParams) {
        return this.rootGetWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    ApplicationsApi.prototype.rootGetWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.configuration.basePath + '/';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
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
    return ApplicationsApi;
}());
ApplicationsApi = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [http_1.Http, configuration_1.Configuration])
], ApplicationsApi);
exports.ApplicationsApi = ApplicationsApi;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var http_1 = __webpack_require__(0);
var http_2 = __webpack_require__(0);
__webpack_require__(3);
var configuration_1 = __webpack_require__(1);
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


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var http_1 = __webpack_require__(0);
var http_2 = __webpack_require__(0);
__webpack_require__(3);
var configuration_1 = __webpack_require__(1);
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


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var http_1 = __webpack_require__(0);
var http_2 = __webpack_require__(0);
__webpack_require__(3);
var configuration_1 = __webpack_require__(1);
var DirectoriesApi = (function () {
    function DirectoriesApi(http, configuration) {
        this.http = http;
        this.configuration = new configuration_1.Configuration();
        this.defaultHeaders = new http_1.Headers();
        if (configuration) {
            this.configuration = configuration;
            this.defaultHeaders = new http_1.Headers({ 'Authorization': this.configuration.apiKey });
        }
    }
    DirectoriesApi.prototype.directoriesBulkPost = function (directories, extraHttpRequestParams) {
        return this.directoriesBulkPostWithHttpInfo(directories, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    DirectoriesApi.prototype.directoriesDelete = function (filter, extraHttpRequestParams) {
        return this.directoriesDeleteWithHttpInfo(filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    DirectoriesApi.prototype.directoriesDirectoryIdDelete = function (directoryId, extraHttpRequestParams) {
        return this.directoriesDirectoryIdDeleteWithHttpInfo(directoryId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    DirectoriesApi.prototype.directoriesDirectoryIdGet = function (directoryId, extraHttpRequestParams) {
        return this.directoriesDirectoryIdGetWithHttpInfo(directoryId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    DirectoriesApi.prototype.directoriesDirectoryIdPut = function (directoryId, updatedDirectory, extraHttpRequestParams) {
        return this.directoriesDirectoryIdPutWithHttpInfo(directoryId, updatedDirectory, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    DirectoriesApi.prototype.directoriesGet = function (pageSize, pageNumber, filter, sort, select, extraHttpRequestParams) {
        return this.directoriesGetWithHttpInfo(pageSize, pageNumber, filter, sort, select, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    DirectoriesApi.prototype.directoriesPost = function (directory, extraHttpRequestParams) {
        return this.directoriesPostWithHttpInfo(directory, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    DirectoriesApi.prototype.directoriesPut = function (filter, directoryBulkUpdate, extraHttpRequestParams) {
        return this.directoriesPutWithHttpInfo(filter, directoryBulkUpdate, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    DirectoriesApi.prototype.directoriesBulkPostWithHttpInfo = function (directories, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/directories/bulk';
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
            body: directories == null ? '' : JSON.stringify(directories),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    DirectoriesApi.prototype.directoriesDeleteWithHttpInfo = function (filter, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/directories';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling directoriesDelete.');
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
    DirectoriesApi.prototype.directoriesDirectoryIdDeleteWithHttpInfo = function (directoryId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/directories/${directoryId}'
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling directoriesDirectoryIdDelete.');
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
    DirectoriesApi.prototype.directoriesDirectoryIdGetWithHttpInfo = function (directoryId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/directories/${directoryId}'
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling directoriesDirectoryIdGet.');
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
    DirectoriesApi.prototype.directoriesDirectoryIdPutWithHttpInfo = function (directoryId, updatedDirectory, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/directories/${directoryId}'
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling directoriesDirectoryIdPut.');
        }
        if (updatedDirectory === null || updatedDirectory === undefined) {
            throw new Error('Required parameter updatedDirectory was null or undefined when calling directoriesDirectoryIdPut.');
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
            body: updatedDirectory == null ? '' : JSON.stringify(updatedDirectory),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    DirectoriesApi.prototype.directoriesGetWithHttpInfo = function (pageSize, pageNumber, filter, sort, select, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/directories';
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
    DirectoriesApi.prototype.directoriesPostWithHttpInfo = function (directory, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/directories';
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
            body: directory == null ? '' : JSON.stringify(directory),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    DirectoriesApi.prototype.directoriesPutWithHttpInfo = function (filter, directoryBulkUpdate, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/directories';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling directoriesPut.');
        }
        if (directoryBulkUpdate === null || directoryBulkUpdate === undefined) {
            throw new Error('Required parameter directoryBulkUpdate was null or undefined when calling directoriesPut.');
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
            body: directoryBulkUpdate == null ? '' : JSON.stringify(directoryBulkUpdate),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return DirectoriesApi;
}());
DirectoriesApi = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [http_1.Http, configuration_1.Configuration])
], DirectoriesApi);
exports.DirectoriesApi = DirectoriesApi;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var http_1 = __webpack_require__(0);
var http_2 = __webpack_require__(0);
__webpack_require__(3);
var configuration_1 = __webpack_require__(1);
var EmailVerificationApi = (function () {
    function EmailVerificationApi(http, configuration) {
        this.http = http;
        this.configuration = new configuration_1.Configuration();
        this.defaultHeaders = new http_1.Headers();
        if (configuration) {
            this.configuration = configuration;
            this.defaultHeaders = new http_1.Headers({ 'Authorization': this.configuration.apiKey });
        }
    }
    EmailVerificationApi.prototype.emailsVerificationPost = function (sendVerificationEmailRequest, extraHttpRequestParams) {
        return this.emailsVerificationPostWithHttpInfo(sendVerificationEmailRequest, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    EmailVerificationApi.prototype.emailsVerificationPostWithHttpInfo = function (sendVerificationEmailRequest, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/emails/verification';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sendVerificationEmailRequest === null || sendVerificationEmailRequest === undefined) {
            throw new Error('Required parameter sendVerificationEmailRequest was null or undefined when calling emailsVerificationPost.');
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
            body: sendVerificationEmailRequest == null ? '' : JSON.stringify(sendVerificationEmailRequest),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return EmailVerificationApi;
}());
EmailVerificationApi = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [http_1.Http, configuration_1.Configuration])
], EmailVerificationApi);
exports.EmailVerificationApi = EmailVerificationApi;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var http_1 = __webpack_require__(0);
var http_2 = __webpack_require__(0);
__webpack_require__(3);
var configuration_1 = __webpack_require__(1);
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


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var http_1 = __webpack_require__(0);
var http_2 = __webpack_require__(0);
__webpack_require__(3);
var configuration_1 = __webpack_require__(1);
var InteractiveViewsApi = (function () {
    function InteractiveViewsApi(http, configuration) {
        this.http = http;
        this.configuration = new configuration_1.Configuration();
        this.defaultHeaders = new http_1.Headers();
        if (configuration) {
            this.configuration = configuration;
            this.defaultHeaders = new http_1.Headers({ 'Authorization': this.configuration.apiKey });
        }
    }
    InteractiveViewsApi.prototype.authDirectoryDirectoryIdGet = function (sbClientId, directoryId, randomState, sbClientSecret, invite, extraHttpRequestParams) {
        return this.authDirectoryDirectoryIdGetWithHttpInfo(sbClientId, directoryId, randomState, sbClientSecret, invite, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.authOrganizationOrganizationIdDirectoryDirectoryIdGet = function (sbClientId, directoryId, randomState, sbClientSecret, invite, extraHttpRequestParams) {
        return this.authOrganizationOrganizationIdDirectoryDirectoryIdGetWithHttpInfo(sbClientId, directoryId, randomState, sbClientSecret, invite, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.authOrganizationOrganizationIdProviderProviderIdGet = function (sbClientId, directoryId, randomState, sbClientSecret, invite, extraHttpRequestParams) {
        return this.authOrganizationOrganizationIdProviderProviderIdGetWithHttpInfo(sbClientId, directoryId, randomState, sbClientSecret, invite, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.authProviderProviderIdGet = function (sbClientId, directoryId, randomState, sbClientSecret, invite, extraHttpRequestParams) {
        return this.authProviderProviderIdGetWithHttpInfo(sbClientId, directoryId, randomState, sbClientSecret, invite, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.emailsVerifyGet = function (email, code, extraHttpRequestParams) {
        return this.emailsVerifyGetWithHttpInfo(email, code, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.loginDirectoryDirectoryIdGet = function (sbClientId, directoryId, randomState, randomState2, extraHttpRequestParams) {
        return this.loginDirectoryDirectoryIdGetWithHttpInfo(sbClientId, directoryId, randomState, randomState2, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.loginGet = function (sbClientId, randomState, extraHttpRequestParams) {
        return this.loginGetWithHttpInfo(sbClientId, randomState, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.loginOrganizationOrganizationIdDirectoryDirectoryIdGet = function (sbClientId, organizationId, directoryId, randomState, extraHttpRequestParams) {
        return this.loginOrganizationOrganizationIdDirectoryDirectoryIdGetWithHttpInfo(sbClientId, organizationId, directoryId, randomState, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.loginOrganizationOrganizationIdGet = function (sbClientId, organizationId, randomState, extraHttpRequestParams) {
        return this.loginOrganizationOrganizationIdGetWithHttpInfo(sbClientId, organizationId, randomState, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.loginOrganizationOrganizationIdProviderProviderIdGet = function (sbClientId, organizationId, providerId, randomState, extraHttpRequestParams) {
        return this.loginOrganizationOrganizationIdProviderProviderIdGetWithHttpInfo(sbClientId, organizationId, providerId, randomState, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.passwordResetCallbackGet = function (error, extraHttpRequestParams) {
        return this.passwordResetCallbackGetWithHttpInfo(error, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.passwordResetGet = function (accountId, code, extraHttpRequestParams) {
        return this.passwordResetGetWithHttpInfo(accountId, code, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.signupDirectoryDirectoryIdGet = function (sbClientId, directoryId, randomState, invite, extraHttpRequestParams) {
        return this.signupDirectoryDirectoryIdGetWithHttpInfo(sbClientId, directoryId, randomState, invite, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.signupGet = function (sbClientId, randomState, invite, extraHttpRequestParams) {
        return this.signupGetWithHttpInfo(sbClientId, randomState, invite, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.signupOrganizationOrganizationIdDirectoryDirectoryIdGet = function (sbClientId, organizationId, directoryId, randomState, invite, extraHttpRequestParams) {
        return this.signupOrganizationOrganizationIdDirectoryDirectoryIdGetWithHttpInfo(sbClientId, organizationId, directoryId, randomState, invite, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.signupOrganizationOrganizationIdGet = function (sbClientId, organizationId, randomState, invite, extraHttpRequestParams) {
        return this.signupOrganizationOrganizationIdGetWithHttpInfo(sbClientId, organizationId, randomState, invite, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.signupOrganizationOrganizationIdProviderProviderIdGet = function (sbClientId, organizationId, providerId, randomState, invite, extraHttpRequestParams) {
        return this.signupOrganizationOrganizationIdProviderProviderIdGetWithHttpInfo(sbClientId, organizationId, providerId, randomState, invite, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.signupProviderProviderIdGet = function (sbClientId, providerId, randomState, invite, extraHttpRequestParams) {
        return this.signupProviderProviderIdGetWithHttpInfo(sbClientId, providerId, randomState, invite, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InteractiveViewsApi.prototype.authDirectoryDirectoryIdGetWithHttpInfo = function (sbClientId, directoryId, randomState, sbClientSecret, invite, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/auth/directory/${directoryId}'
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling authDirectoryDirectoryIdGet.');
        }
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling authDirectoryDirectoryIdGet.');
        }
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling authDirectoryDirectoryIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', sbClientId);
        }
        if (sbClientSecret !== undefined) {
            queryParameters.set('sb-client-secret', sbClientSecret);
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        if (invite !== undefined) {
            queryParameters.set('invite', invite);
        }
        var consumes = [];
        var produces = [
            'text/html'
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
    InteractiveViewsApi.prototype.authOrganizationOrganizationIdDirectoryDirectoryIdGetWithHttpInfo = function (sbClientId, directoryId, randomState, sbClientSecret, invite, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/auth/organization/${organizationId}/directory/${directoryId}'
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling authOrganizationOrganizationIdDirectoryDirectoryIdGet.');
        }
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling authOrganizationOrganizationIdDirectoryDirectoryIdGet.');
        }
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling authOrganizationOrganizationIdDirectoryDirectoryIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', sbClientId);
        }
        if (sbClientSecret !== undefined) {
            queryParameters.set('sb-client-secret', sbClientSecret);
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        if (invite !== undefined) {
            queryParameters.set('invite', invite);
        }
        var consumes = [];
        var produces = [
            'text/html'
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
    InteractiveViewsApi.prototype.authOrganizationOrganizationIdProviderProviderIdGetWithHttpInfo = function (sbClientId, directoryId, randomState, sbClientSecret, invite, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/auth/organization/${organizationId}/provider/${providerId}'
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling authOrganizationOrganizationIdProviderProviderIdGet.');
        }
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling authOrganizationOrganizationIdProviderProviderIdGet.');
        }
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling authOrganizationOrganizationIdProviderProviderIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', sbClientId);
        }
        if (sbClientSecret !== undefined) {
            queryParameters.set('sb-client-secret', sbClientSecret);
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        if (invite !== undefined) {
            queryParameters.set('invite', invite);
        }
        var consumes = [];
        var produces = [
            'text/html'
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
    InteractiveViewsApi.prototype.authProviderProviderIdGetWithHttpInfo = function (sbClientId, directoryId, randomState, sbClientSecret, invite, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/auth/provider/${providerId}'
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling authProviderProviderIdGet.');
        }
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling authProviderProviderIdGet.');
        }
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling authProviderProviderIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', sbClientId);
        }
        if (sbClientSecret !== undefined) {
            queryParameters.set('sb-client-secret', sbClientSecret);
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        if (invite !== undefined) {
            queryParameters.set('invite', invite);
        }
        var consumes = [];
        var produces = [
            'text/html'
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
    InteractiveViewsApi.prototype.emailsVerifyGetWithHttpInfo = function (email, code, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/emails/verify';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (email === null || email === undefined) {
            throw new Error('Required parameter email was null or undefined when calling emailsVerifyGet.');
        }
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling emailsVerifyGet.');
        }
        if (email !== undefined) {
            queryParameters.set('email', email);
        }
        if (code !== undefined) {
            queryParameters.set('code', code);
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
    InteractiveViewsApi.prototype.loginDirectoryDirectoryIdGetWithHttpInfo = function (sbClientId, directoryId, randomState, randomState2, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/login/directory/${directoryId}'
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling loginDirectoryDirectoryIdGet.');
        }
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling loginDirectoryDirectoryIdGet.');
        }
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling loginDirectoryDirectoryIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', sbClientId);
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        if (randomState2 !== undefined) {
            queryParameters.set('randomState', randomState2);
        }
        var consumes = [];
        var produces = [
            'text/html'
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
    InteractiveViewsApi.prototype.loginGetWithHttpInfo = function (sbClientId, randomState, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/login';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling loginGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', sbClientId);
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        var consumes = [];
        var produces = [
            'text/html'
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
    InteractiveViewsApi.prototype.loginOrganizationOrganizationIdDirectoryDirectoryIdGetWithHttpInfo = function (sbClientId, organizationId, directoryId, randomState, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/login/organization/${organizationId}/directory/${directoryId}'
            .replace('${' + 'organizationId' + '}', String(organizationId))
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling loginOrganizationOrganizationIdDirectoryDirectoryIdGet.');
        }
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling loginOrganizationOrganizationIdDirectoryDirectoryIdGet.');
        }
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling loginOrganizationOrganizationIdDirectoryDirectoryIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', sbClientId);
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        var consumes = [];
        var produces = [
            'text/html'
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
    InteractiveViewsApi.prototype.loginOrganizationOrganizationIdGetWithHttpInfo = function (sbClientId, organizationId, randomState, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/login/organization/${organizationId}'
            .replace('${' + 'organizationId' + '}', String(organizationId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling loginOrganizationOrganizationIdGet.');
        }
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling loginOrganizationOrganizationIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', sbClientId);
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        var consumes = [];
        var produces = [
            'text/html'
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
    InteractiveViewsApi.prototype.loginOrganizationOrganizationIdProviderProviderIdGetWithHttpInfo = function (sbClientId, organizationId, providerId, randomState, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/login/organization/${organizationId}/provider/${providerId}'
            .replace('${' + 'organizationId' + '}', String(organizationId))
            .replace('${' + 'providerId' + '}', String(providerId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling loginOrganizationOrganizationIdProviderProviderIdGet.');
        }
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling loginOrganizationOrganizationIdProviderProviderIdGet.');
        }
        if (providerId === null || providerId === undefined) {
            throw new Error('Required parameter providerId was null or undefined when calling loginOrganizationOrganizationIdProviderProviderIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', sbClientId);
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        var consumes = [];
        var produces = [
            'text/html'
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
    InteractiveViewsApi.prototype.passwordResetCallbackGetWithHttpInfo = function (error, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/password/reset/callback';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (error === null || error === undefined) {
            throw new Error('Required parameter error was null or undefined when calling passwordResetCallbackGet.');
        }
        if (error !== undefined) {
            queryParameters.set('error', error);
        }
        var consumes = [];
        var produces = [
            'text/html'
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
    InteractiveViewsApi.prototype.passwordResetGetWithHttpInfo = function (accountId, code, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/password/reset';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling passwordResetGet.');
        }
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling passwordResetGet.');
        }
        if (accountId !== undefined) {
            queryParameters.set('accountId', accountId);
        }
        if (code !== undefined) {
            queryParameters.set('code', code);
        }
        var consumes = [];
        var produces = [
            'text/html'
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
    InteractiveViewsApi.prototype.signupDirectoryDirectoryIdGetWithHttpInfo = function (sbClientId, directoryId, randomState, invite, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup/directory/${directoryId}'
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupDirectoryDirectoryIdGet.');
        }
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling signupDirectoryDirectoryIdGet.');
        }
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling signupDirectoryDirectoryIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', sbClientId);
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        if (invite !== undefined) {
            queryParameters.set('invite', invite);
        }
        var consumes = [];
        var produces = [
            'text/html'
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
    InteractiveViewsApi.prototype.signupGetWithHttpInfo = function (sbClientId, randomState, invite, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupGet.');
        }
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling signupGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', sbClientId);
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        if (invite !== undefined) {
            queryParameters.set('invite', invite);
        }
        var consumes = [];
        var produces = [
            'text/html'
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
    InteractiveViewsApi.prototype.signupOrganizationOrganizationIdDirectoryDirectoryIdGetWithHttpInfo = function (sbClientId, organizationId, directoryId, randomState, invite, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup/organization/${organizationId}/directory/${directoryId}'
            .replace('${' + 'organizationId' + '}', String(organizationId))
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupOrganizationOrganizationIdDirectoryDirectoryIdGet.');
        }
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling signupOrganizationOrganizationIdDirectoryDirectoryIdGet.');
        }
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling signupOrganizationOrganizationIdDirectoryDirectoryIdGet.');
        }
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling signupOrganizationOrganizationIdDirectoryDirectoryIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', sbClientId);
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        if (invite !== undefined) {
            queryParameters.set('invite', invite);
        }
        var consumes = [];
        var produces = [
            'text/html'
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
    InteractiveViewsApi.prototype.signupOrganizationOrganizationIdGetWithHttpInfo = function (sbClientId, organizationId, randomState, invite, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup/organization/${organizationId}'
            .replace('${' + 'organizationId' + '}', String(organizationId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupOrganizationOrganizationIdGet.');
        }
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling signupOrganizationOrganizationIdGet.');
        }
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling signupOrganizationOrganizationIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', sbClientId);
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        if (invite !== undefined) {
            queryParameters.set('invite', invite);
        }
        var consumes = [];
        var produces = [
            'text/html'
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
    InteractiveViewsApi.prototype.signupOrganizationOrganizationIdProviderProviderIdGetWithHttpInfo = function (sbClientId, organizationId, providerId, randomState, invite, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup/organization/${organizationId}/provider/${providerId}'
            .replace('${' + 'organizationId' + '}', String(organizationId))
            .replace('${' + 'providerId' + '}', String(providerId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupOrganizationOrganizationIdProviderProviderIdGet.');
        }
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling signupOrganizationOrganizationIdProviderProviderIdGet.');
        }
        if (providerId === null || providerId === undefined) {
            throw new Error('Required parameter providerId was null or undefined when calling signupOrganizationOrganizationIdProviderProviderIdGet.');
        }
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling signupOrganizationOrganizationIdProviderProviderIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', sbClientId);
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        if (invite !== undefined) {
            queryParameters.set('invite', invite);
        }
        var consumes = [];
        var produces = [
            'text/html'
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
    InteractiveViewsApi.prototype.signupProviderProviderIdGetWithHttpInfo = function (sbClientId, providerId, randomState, invite, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup/provider/${providerId}'
            .replace('${' + 'providerId' + '}', String(providerId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupProviderProviderIdGet.');
        }
        if (providerId === null || providerId === undefined) {
            throw new Error('Required parameter providerId was null or undefined when calling signupProviderProviderIdGet.');
        }
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling signupProviderProviderIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', sbClientId);
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        if (invite !== undefined) {
            queryParameters.set('invite', invite);
        }
        var consumes = [];
        var produces = [
            'text/html'
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
    return InteractiveViewsApi;
}());
InteractiveViewsApi = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [http_1.Http, configuration_1.Configuration])
], InteractiveViewsApi);
exports.InteractiveViewsApi = InteractiveViewsApi;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var http_1 = __webpack_require__(0);
var http_2 = __webpack_require__(0);
__webpack_require__(3);
var configuration_1 = __webpack_require__(1);
var InvitesApi = (function () {
    function InvitesApi(http, configuration) {
        this.http = http;
        this.configuration = new configuration_1.Configuration();
        this.defaultHeaders = new http_1.Headers();
        if (configuration) {
            this.configuration = configuration;
            this.defaultHeaders = new http_1.Headers({ 'Authorization': this.configuration.apiKey });
        }
    }
    InvitesApi.prototype.invitesBulkPost = function (invites, extraHttpRequestParams) {
        return this.invitesBulkPostWithHttpInfo(invites, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InvitesApi.prototype.invitesDelete = function (filter, extraHttpRequestParams) {
        return this.invitesDeleteWithHttpInfo(filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InvitesApi.prototype.invitesGet = function (pageSize, pageNumber, filter, sort, select, extraHttpRequestParams) {
        return this.invitesGetWithHttpInfo(pageSize, pageNumber, filter, sort, select, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InvitesApi.prototype.invitesInviteIdDelete = function (inviteId, extraHttpRequestParams) {
        return this.invitesInviteIdDeleteWithHttpInfo(inviteId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InvitesApi.prototype.invitesInviteIdGet = function (inviteId, extraHttpRequestParams) {
        return this.invitesInviteIdGetWithHttpInfo(inviteId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InvitesApi.prototype.invitesInviteIdPut = function (inviteId, updatedInvite, extraHttpRequestParams) {
        return this.invitesInviteIdPutWithHttpInfo(inviteId, updatedInvite, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InvitesApi.prototype.invitesPost = function (invite, extraHttpRequestParams) {
        return this.invitesPostWithHttpInfo(invite, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InvitesApi.prototype.invitesPut = function (filter, inviteBulkUpdate, extraHttpRequestParams) {
        return this.invitesPutWithHttpInfo(filter, inviteBulkUpdate, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    InvitesApi.prototype.invitesBulkPostWithHttpInfo = function (invites, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/invites/bulk';
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
            body: invites == null ? '' : JSON.stringify(invites),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    InvitesApi.prototype.invitesDeleteWithHttpInfo = function (filter, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/invites';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling invitesDelete.');
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
    InvitesApi.prototype.invitesGetWithHttpInfo = function (pageSize, pageNumber, filter, sort, select, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/invites';
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
    InvitesApi.prototype.invitesInviteIdDeleteWithHttpInfo = function (inviteId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/invites/${inviteId}'
            .replace('${' + 'inviteId' + '}', String(inviteId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (inviteId === null || inviteId === undefined) {
            throw new Error('Required parameter inviteId was null or undefined when calling invitesInviteIdDelete.');
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
    InvitesApi.prototype.invitesInviteIdGetWithHttpInfo = function (inviteId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/invites/${inviteId}'
            .replace('${' + 'inviteId' + '}', String(inviteId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (inviteId === null || inviteId === undefined) {
            throw new Error('Required parameter inviteId was null or undefined when calling invitesInviteIdGet.');
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
    InvitesApi.prototype.invitesInviteIdPutWithHttpInfo = function (inviteId, updatedInvite, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/invites/${inviteId}'
            .replace('${' + 'inviteId' + '}', String(inviteId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (inviteId === null || inviteId === undefined) {
            throw new Error('Required parameter inviteId was null or undefined when calling invitesInviteIdPut.');
        }
        if (updatedInvite === null || updatedInvite === undefined) {
            throw new Error('Required parameter updatedInvite was null or undefined when calling invitesInviteIdPut.');
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
            body: updatedInvite == null ? '' : JSON.stringify(updatedInvite),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    InvitesApi.prototype.invitesPostWithHttpInfo = function (invite, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/invites';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (invite === null || invite === undefined) {
            throw new Error('Required parameter invite was null or undefined when calling invitesPost.');
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
            body: invite == null ? '' : JSON.stringify(invite),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    InvitesApi.prototype.invitesPutWithHttpInfo = function (filter, inviteBulkUpdate, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/invites';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling invitesPut.');
        }
        if (inviteBulkUpdate === null || inviteBulkUpdate === undefined) {
            throw new Error('Required parameter inviteBulkUpdate was null or undefined when calling invitesPut.');
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
            body: inviteBulkUpdate == null ? '' : JSON.stringify(inviteBulkUpdate),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return InvitesApi;
}());
InvitesApi = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [http_1.Http, configuration_1.Configuration])
], InvitesApi);
exports.InvitesApi = InvitesApi;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var http_1 = __webpack_require__(0);
var http_2 = __webpack_require__(0);
__webpack_require__(3);
var configuration_1 = __webpack_require__(1);
var LoginApi = (function () {
    function LoginApi(http, configuration) {
        this.http = http;
        this.configuration = new configuration_1.Configuration();
        this.defaultHeaders = new http_1.Headers();
        if (configuration) {
            this.configuration = configuration;
            this.defaultHeaders = new http_1.Headers({ 'Authorization': this.configuration.apiKey });
        }
    }
    LoginApi.prototype.loginDirectoryDirectoryIdPost = function (sbClientId, directoryId, sbClientSecret, userLoginRequest, extraHttpRequestParams) {
        return this.loginDirectoryDirectoryIdPostWithHttpInfo(sbClientId, directoryId, sbClientSecret, userLoginRequest, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    LoginApi.prototype.loginDirectoryDirectoryIdTokenPost = function (sbClientId, directoryId, randomState, sbClientSecret, extraHttpRequestParams) {
        return this.loginDirectoryDirectoryIdTokenPostWithHttpInfo(sbClientId, directoryId, randomState, sbClientSecret, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    LoginApi.prototype.loginOrganizationOrganizationIdPost = function (sbClientId, organizationId, sbClientSecret, userLoginRequest, extraHttpRequestParams) {
        return this.loginOrganizationOrganizationIdPostWithHttpInfo(sbClientId, organizationId, sbClientSecret, userLoginRequest, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    LoginApi.prototype.loginOrganizationOrganizationIdProviderProviderIdPost = function (sbClientId, organizationId, providerId, sbClientSecret, userLoginRequest, extraHttpRequestParams) {
        return this.loginOrganizationOrganizationIdProviderProviderIdPostWithHttpInfo(sbClientId, organizationId, providerId, sbClientSecret, userLoginRequest, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    LoginApi.prototype.loginPost = function (sbClientId, userLoginRequest, sbClientSecret, extraHttpRequestParams) {
        return this.loginPostWithHttpInfo(sbClientId, userLoginRequest, sbClientSecret, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    LoginApi.prototype.loginDirectoryDirectoryIdPostWithHttpInfo = function (sbClientId, directoryId, sbClientSecret, userLoginRequest, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/login/directory/${directoryId}'
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling loginDirectoryDirectoryIdPost.');
        }
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling loginDirectoryDirectoryIdPost.');
        }
        headers.set('sb-client-id', String(sbClientId));
        headers.set('sb-client-secret', String(sbClientSecret));
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
            body: userLoginRequest == null ? '' : JSON.stringify(userLoginRequest),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    LoginApi.prototype.loginDirectoryDirectoryIdTokenPostWithHttpInfo = function (sbClientId, directoryId, randomState, sbClientSecret, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/login/directory/${directoryId}/token'
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling loginDirectoryDirectoryIdTokenPost.');
        }
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling loginDirectoryDirectoryIdTokenPost.');
        }
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling loginDirectoryDirectoryIdTokenPost.');
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        headers.set('sb-client-id', String(sbClientId));
        headers.set('sb-client-secret', String(sbClientSecret));
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
    LoginApi.prototype.loginOrganizationOrganizationIdPostWithHttpInfo = function (sbClientId, organizationId, sbClientSecret, userLoginRequest, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/login/organization/${organizationId}'
            .replace('${' + 'organizationId' + '}', String(organizationId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling loginOrganizationOrganizationIdPost.');
        }
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling loginOrganizationOrganizationIdPost.');
        }
        headers.set('sb-client-id', String(sbClientId));
        headers.set('sb-client-secret', String(sbClientSecret));
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
            body: userLoginRequest == null ? '' : JSON.stringify(userLoginRequest),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    LoginApi.prototype.loginOrganizationOrganizationIdProviderProviderIdPostWithHttpInfo = function (sbClientId, organizationId, providerId, sbClientSecret, userLoginRequest, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/login/organization/${organizationId}/provider/${providerId}'
            .replace('${' + 'organizationId' + '}', String(organizationId))
            .replace('${' + 'providerId' + '}', String(providerId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling loginOrganizationOrganizationIdProviderProviderIdPost.');
        }
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling loginOrganizationOrganizationIdProviderProviderIdPost.');
        }
        if (providerId === null || providerId === undefined) {
            throw new Error('Required parameter providerId was null or undefined when calling loginOrganizationOrganizationIdProviderProviderIdPost.');
        }
        headers.set('sb-client-id', String(sbClientId));
        headers.set('sb-client-secret', String(sbClientSecret));
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
            body: userLoginRequest == null ? '' : JSON.stringify(userLoginRequest),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    LoginApi.prototype.loginPostWithHttpInfo = function (sbClientId, userLoginRequest, sbClientSecret, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/login';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling loginPost.');
        }
        if (userLoginRequest === null || userLoginRequest === undefined) {
            throw new Error('Required parameter userLoginRequest was null or undefined when calling loginPost.');
        }
        headers.set('sb-client-id', String(sbClientId));
        headers.set('sb-client-secret', String(sbClientSecret));
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
            body: userLoginRequest == null ? '' : JSON.stringify(userLoginRequest),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return LoginApi;
}());
LoginApi = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [http_1.Http, configuration_1.Configuration])
], LoginApi);
exports.LoginApi = LoginApi;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var http_1 = __webpack_require__(0);
var http_2 = __webpack_require__(0);
__webpack_require__(3);
var configuration_1 = __webpack_require__(1);
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


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var http_1 = __webpack_require__(0);
var http_2 = __webpack_require__(0);
__webpack_require__(3);
var configuration_1 = __webpack_require__(1);
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


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var http_1 = __webpack_require__(0);
var http_2 = __webpack_require__(0);
__webpack_require__(3);
var configuration_1 = __webpack_require__(1);
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


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var http_1 = __webpack_require__(0);
var http_2 = __webpack_require__(0);
__webpack_require__(3);
var configuration_1 = __webpack_require__(1);
var OrganizationsApi = (function () {
    function OrganizationsApi(http, configuration) {
        this.http = http;
        this.configuration = new configuration_1.Configuration();
        this.defaultHeaders = new http_1.Headers();
        if (configuration) {
            this.configuration = configuration;
            this.defaultHeaders = new http_1.Headers({ 'Authorization': this.configuration.apiKey });
        }
    }
    OrganizationsApi.prototype.organizationsBulkPost = function (organizations, extraHttpRequestParams) {
        return this.organizationsBulkPostWithHttpInfo(organizations, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    OrganizationsApi.prototype.organizationsDelete = function (filter, extraHttpRequestParams) {
        return this.organizationsDeleteWithHttpInfo(filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    OrganizationsApi.prototype.organizationsGet = function (pageSize, pageNumber, filter, sort, select, _public, extraHttpRequestParams) {
        return this.organizationsGetWithHttpInfo(pageSize, pageNumber, filter, sort, select, _public, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    OrganizationsApi.prototype.organizationsOrganizationIdDelete = function (organizationId, extraHttpRequestParams) {
        return this.organizationsOrganizationIdDeleteWithHttpInfo(organizationId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    OrganizationsApi.prototype.organizationsOrganizationIdGet = function (organizationId, extraHttpRequestParams) {
        return this.organizationsOrganizationIdGetWithHttpInfo(organizationId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    OrganizationsApi.prototype.organizationsOrganizationIdInvitesPost = function (organizationId, extraHttpRequestParams) {
        return this.organizationsOrganizationIdInvitesPostWithHttpInfo(organizationId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    OrganizationsApi.prototype.organizationsOrganizationIdPut = function (organizationId, updatedOrganization, extraHttpRequestParams) {
        return this.organizationsOrganizationIdPutWithHttpInfo(organizationId, updatedOrganization, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    OrganizationsApi.prototype.organizationsPost = function (organization, extraHttpRequestParams) {
        return this.organizationsPostWithHttpInfo(organization, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    OrganizationsApi.prototype.organizationsPut = function (filter, organizationBulkUpdate, extraHttpRequestParams) {
        return this.organizationsPutWithHttpInfo(filter, organizationBulkUpdate, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    OrganizationsApi.prototype.organizationsBulkPostWithHttpInfo = function (organizations, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/organizations/bulk';
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
            body: organizations == null ? '' : JSON.stringify(organizations),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    OrganizationsApi.prototype.organizationsDeleteWithHttpInfo = function (filter, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/organizations';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling organizationsDelete.');
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
    OrganizationsApi.prototype.organizationsGetWithHttpInfo = function (pageSize, pageNumber, filter, sort, select, _public, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/organizations';
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
        if (_public !== undefined) {
            queryParameters.set('public', _public);
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
    OrganizationsApi.prototype.organizationsOrganizationIdDeleteWithHttpInfo = function (organizationId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/organizations/${organizationId}'
            .replace('${' + 'organizationId' + '}', String(organizationId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling organizationsOrganizationIdDelete.');
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
    OrganizationsApi.prototype.organizationsOrganizationIdGetWithHttpInfo = function (organizationId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/organizations/${organizationId}'
            .replace('${' + 'organizationId' + '}', String(organizationId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling organizationsOrganizationIdGet.');
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
    OrganizationsApi.prototype.organizationsOrganizationIdInvitesPostWithHttpInfo = function (organizationId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/organizations/${organizationId}/invites'
            .replace('${' + 'organizationId' + '}', String(organizationId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling organizationsOrganizationIdInvitesPost.');
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
    OrganizationsApi.prototype.organizationsOrganizationIdPutWithHttpInfo = function (organizationId, updatedOrganization, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/organizations/${organizationId}'
            .replace('${' + 'organizationId' + '}', String(organizationId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling organizationsOrganizationIdPut.');
        }
        if (updatedOrganization === null || updatedOrganization === undefined) {
            throw new Error('Required parameter updatedOrganization was null or undefined when calling organizationsOrganizationIdPut.');
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
            body: updatedOrganization == null ? '' : JSON.stringify(updatedOrganization),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    OrganizationsApi.prototype.organizationsPostWithHttpInfo = function (organization, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/organizations';
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
            body: organization == null ? '' : JSON.stringify(organization),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    OrganizationsApi.prototype.organizationsPutWithHttpInfo = function (filter, organizationBulkUpdate, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/organizations';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling organizationsPut.');
        }
        if (organizationBulkUpdate === null || organizationBulkUpdate === undefined) {
            throw new Error('Required parameter organizationBulkUpdate was null or undefined when calling organizationsPut.');
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
            body: organizationBulkUpdate == null ? '' : JSON.stringify(organizationBulkUpdate),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return OrganizationsApi;
}());
OrganizationsApi = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [http_1.Http, configuration_1.Configuration])
], OrganizationsApi);
exports.OrganizationsApi = OrganizationsApi;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var http_1 = __webpack_require__(0);
var http_2 = __webpack_require__(0);
__webpack_require__(3);
var configuration_1 = __webpack_require__(1);
var PasswordResetApi = (function () {
    function PasswordResetApi(http, configuration) {
        this.http = http;
        this.configuration = new configuration_1.Configuration();
        this.defaultHeaders = new http_1.Headers();
        if (configuration) {
            this.configuration = configuration;
            this.defaultHeaders = new http_1.Headers({ 'Authorization': this.configuration.apiKey });
        }
    }
    PasswordResetApi.prototype.passwordResetPost = function (resetPasswordRequest, extraHttpRequestParams) {
        return this.passwordResetPostWithHttpInfo(resetPasswordRequest, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    PasswordResetApi.prototype.triggerPasswordReset = function (sendPasswordResetEmailRequest, extraHttpRequestParams) {
        return this.triggerPasswordResetWithHttpInfo(sendPasswordResetEmailRequest, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    PasswordResetApi.prototype.passwordResetPostWithHttpInfo = function (resetPasswordRequest, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/password/reset';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (resetPasswordRequest === null || resetPasswordRequest === undefined) {
            throw new Error('Required parameter resetPasswordRequest was null or undefined when calling passwordResetPost.');
        }
        var consumes = [
            'application/json'
        ];
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
            body: resetPasswordRequest == null ? '' : JSON.stringify(resetPasswordRequest),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    PasswordResetApi.prototype.triggerPasswordResetWithHttpInfo = function (sendPasswordResetEmailRequest, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/password/reset/trigger';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sendPasswordResetEmailRequest === null || sendPasswordResetEmailRequest === undefined) {
            throw new Error('Required parameter sendPasswordResetEmailRequest was null or undefined when calling triggerPasswordReset.');
        }
        var consumes = [
            'application/json'
        ];
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
            body: sendPasswordResetEmailRequest == null ? '' : JSON.stringify(sendPasswordResetEmailRequest),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return PasswordResetApi;
}());
PasswordResetApi = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [http_1.Http, configuration_1.Configuration])
], PasswordResetApi);
exports.PasswordResetApi = PasswordResetApi;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var http_1 = __webpack_require__(0);
var http_2 = __webpack_require__(0);
__webpack_require__(3);
var configuration_1 = __webpack_require__(1);
var ProvidersApi = (function () {
    function ProvidersApi(http, configuration) {
        this.http = http;
        this.configuration = new configuration_1.Configuration();
        this.defaultHeaders = new http_1.Headers();
        if (configuration) {
            this.configuration = configuration;
            this.defaultHeaders = new http_1.Headers({ 'Authorization': this.configuration.apiKey });
        }
    }
    ProvidersApi.prototype.providersBulkPost = function (providers, extraHttpRequestParams) {
        return this.providersBulkPostWithHttpInfo(providers, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    ProvidersApi.prototype.providersDelete = function (filter, extraHttpRequestParams) {
        return this.providersDeleteWithHttpInfo(filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    ProvidersApi.prototype.providersGet = function (pageSize, pageNumber, filter, sort, select, extraHttpRequestParams) {
        return this.providersGetWithHttpInfo(pageSize, pageNumber, filter, sort, select, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    ProvidersApi.prototype.providersPost = function (provider, extraHttpRequestParams) {
        return this.providersPostWithHttpInfo(provider, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    ProvidersApi.prototype.providersProviderIdDelete = function (providerId, extraHttpRequestParams) {
        return this.providersProviderIdDeleteWithHttpInfo(providerId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    ProvidersApi.prototype.providersProviderIdGet = function (providerId, extraHttpRequestParams) {
        return this.providersProviderIdGetWithHttpInfo(providerId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    ProvidersApi.prototype.providersProviderIdPut = function (providerId, updatedProvider, extraHttpRequestParams) {
        return this.providersProviderIdPutWithHttpInfo(providerId, updatedProvider, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    ProvidersApi.prototype.providersPut = function (filter, providerBulkUpdate, extraHttpRequestParams) {
        return this.providersPutWithHttpInfo(filter, providerBulkUpdate, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    ProvidersApi.prototype.providersBulkPostWithHttpInfo = function (providers, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/providers/bulk';
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
            body: providers == null ? '' : JSON.stringify(providers),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    ProvidersApi.prototype.providersDeleteWithHttpInfo = function (filter, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/providers';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling providersDelete.');
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
    ProvidersApi.prototype.providersGetWithHttpInfo = function (pageSize, pageNumber, filter, sort, select, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/providers';
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
    ProvidersApi.prototype.providersPostWithHttpInfo = function (provider, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/providers';
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
            body: provider == null ? '' : JSON.stringify(provider),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    ProvidersApi.prototype.providersProviderIdDeleteWithHttpInfo = function (providerId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/providers/${providerId}'
            .replace('${' + 'providerId' + '}', String(providerId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (providerId === null || providerId === undefined) {
            throw new Error('Required parameter providerId was null or undefined when calling providersProviderIdDelete.');
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
    ProvidersApi.prototype.providersProviderIdGetWithHttpInfo = function (providerId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/providers/${providerId}'
            .replace('${' + 'providerId' + '}', String(providerId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (providerId === null || providerId === undefined) {
            throw new Error('Required parameter providerId was null or undefined when calling providersProviderIdGet.');
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
    ProvidersApi.prototype.providersProviderIdPutWithHttpInfo = function (providerId, updatedProvider, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/providers/${providerId}'
            .replace('${' + 'providerId' + '}', String(providerId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (providerId === null || providerId === undefined) {
            throw new Error('Required parameter providerId was null or undefined when calling providersProviderIdPut.');
        }
        if (updatedProvider === null || updatedProvider === undefined) {
            throw new Error('Required parameter updatedProvider was null or undefined when calling providersProviderIdPut.');
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
            body: updatedProvider == null ? '' : JSON.stringify(updatedProvider),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    ProvidersApi.prototype.providersPutWithHttpInfo = function (filter, providerBulkUpdate, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/providers';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling providersPut.');
        }
        if (providerBulkUpdate === null || providerBulkUpdate === undefined) {
            throw new Error('Required parameter providerBulkUpdate was null or undefined when calling providersPut.');
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
            body: providerBulkUpdate == null ? '' : JSON.stringify(providerBulkUpdate),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return ProvidersApi;
}());
ProvidersApi = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [http_1.Http, configuration_1.Configuration])
], ProvidersApi);
exports.ProvidersApi = ProvidersApi;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var http_1 = __webpack_require__(0);
var http_2 = __webpack_require__(0);
__webpack_require__(3);
var configuration_1 = __webpack_require__(1);
var RolesApi = (function () {
    function RolesApi(http, configuration) {
        this.http = http;
        this.configuration = new configuration_1.Configuration();
        this.defaultHeaders = new http_1.Headers();
        if (configuration) {
            this.configuration = configuration;
            this.defaultHeaders = new http_1.Headers({ 'Authorization': this.configuration.apiKey });
        }
    }
    RolesApi.prototype.rolesBulkPost = function (roles, extraHttpRequestParams) {
        return this.rolesBulkPostWithHttpInfo(roles, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    RolesApi.prototype.rolesDelete = function (filter, extraHttpRequestParams) {
        return this.rolesDeleteWithHttpInfo(filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    RolesApi.prototype.rolesGet = function (pageSize, pageNumber, filter, sort, select, extraHttpRequestParams) {
        return this.rolesGetWithHttpInfo(pageSize, pageNumber, filter, sort, select, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    RolesApi.prototype.rolesPost = function (role, extraHttpRequestParams) {
        return this.rolesPostWithHttpInfo(role, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    RolesApi.prototype.rolesPut = function (filter, roleBulkUpdate, extraHttpRequestParams) {
        return this.rolesPutWithHttpInfo(filter, roleBulkUpdate, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    RolesApi.prototype.rolesRoleIdDelete = function (roleId, extraHttpRequestParams) {
        return this.rolesRoleIdDeleteWithHttpInfo(roleId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    RolesApi.prototype.rolesRoleIdGet = function (roleId, extraHttpRequestParams) {
        return this.rolesRoleIdGetWithHttpInfo(roleId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    RolesApi.prototype.rolesRoleIdPut = function (roleId, updatedRole, extraHttpRequestParams) {
        return this.rolesRoleIdPutWithHttpInfo(roleId, updatedRole, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    RolesApi.prototype.rolesBulkPostWithHttpInfo = function (roles, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/roles/bulk';
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
            body: roles == null ? '' : JSON.stringify(roles),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    RolesApi.prototype.rolesDeleteWithHttpInfo = function (filter, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/roles';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling rolesDelete.');
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
    RolesApi.prototype.rolesGetWithHttpInfo = function (pageSize, pageNumber, filter, sort, select, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/roles';
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
    RolesApi.prototype.rolesPostWithHttpInfo = function (role, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/roles';
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
            body: role == null ? '' : JSON.stringify(role),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    RolesApi.prototype.rolesPutWithHttpInfo = function (filter, roleBulkUpdate, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/roles';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling rolesPut.');
        }
        if (roleBulkUpdate === null || roleBulkUpdate === undefined) {
            throw new Error('Required parameter roleBulkUpdate was null or undefined when calling rolesPut.');
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
            body: roleBulkUpdate == null ? '' : JSON.stringify(roleBulkUpdate),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    RolesApi.prototype.rolesRoleIdDeleteWithHttpInfo = function (roleId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/roles/${roleId}'
            .replace('${' + 'roleId' + '}', String(roleId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (roleId === null || roleId === undefined) {
            throw new Error('Required parameter roleId was null or undefined when calling rolesRoleIdDelete.');
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
    RolesApi.prototype.rolesRoleIdGetWithHttpInfo = function (roleId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/roles/${roleId}'
            .replace('${' + 'roleId' + '}', String(roleId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (roleId === null || roleId === undefined) {
            throw new Error('Required parameter roleId was null or undefined when calling rolesRoleIdGet.');
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
    RolesApi.prototype.rolesRoleIdPutWithHttpInfo = function (roleId, updatedRole, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/roles/${roleId}'
            .replace('${' + 'roleId' + '}', String(roleId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (roleId === null || roleId === undefined) {
            throw new Error('Required parameter roleId was null or undefined when calling rolesRoleIdPut.');
        }
        if (updatedRole === null || updatedRole === undefined) {
            throw new Error('Required parameter updatedRole was null or undefined when calling rolesRoleIdPut.');
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
            body: updatedRole == null ? '' : JSON.stringify(updatedRole),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return RolesApi;
}());
RolesApi = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [http_1.Http, configuration_1.Configuration])
], RolesApi);
exports.RolesApi = RolesApi;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var http_1 = __webpack_require__(0);
var http_2 = __webpack_require__(0);
__webpack_require__(3);
var configuration_1 = __webpack_require__(1);
var SignupApi = (function () {
    function SignupApi(http, configuration) {
        this.http = http;
        this.configuration = new configuration_1.Configuration();
        this.defaultHeaders = new http_1.Headers();
        if (configuration) {
            this.configuration = configuration;
            this.defaultHeaders = new http_1.Headers({ 'Authorization': this.configuration.apiKey });
        }
    }
    SignupApi.prototype.signupDirectoryDirectoryIdInteractivePost = function (sbClientId, directoryId, randomState, sbClientSecret, extraHttpRequestParams) {
        return this.signupDirectoryDirectoryIdInteractivePostWithHttpInfo(sbClientId, directoryId, randomState, sbClientSecret, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    SignupApi.prototype.signupDirectoryDirectoryIdPost = function (sbClientId, directoryId, signupRequest, sbClientSecret, invite, returnCredentials, extraHttpRequestParams) {
        return this.signupDirectoryDirectoryIdPostWithHttpInfo(sbClientId, directoryId, signupRequest, sbClientSecret, invite, returnCredentials, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    SignupApi.prototype.signupDirectoryDirectoryIdTokenPost = function (sbClientId, directoryId, randomState, sbClientSecret, extraHttpRequestParams) {
        return this.signupDirectoryDirectoryIdTokenPostWithHttpInfo(sbClientId, directoryId, randomState, sbClientSecret, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    SignupApi.prototype.signupOrganizationOrganizationIdDirectoryDirectoryIdPost = function (sbClientId, organizationId, directoryId, signupRequest, sbClientSecret, invite, returnCredentials, extraHttpRequestParams) {
        return this.signupOrganizationOrganizationIdDirectoryDirectoryIdPostWithHttpInfo(sbClientId, organizationId, directoryId, signupRequest, sbClientSecret, invite, returnCredentials, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    SignupApi.prototype.signupOrganizationOrganizationIdPost = function (sbClientId, organizationId, signupRequest, sbClientSecret, invite, returnCredentials, extraHttpRequestParams) {
        return this.signupOrganizationOrganizationIdPostWithHttpInfo(sbClientId, organizationId, signupRequest, sbClientSecret, invite, returnCredentials, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    SignupApi.prototype.signupOrganizationOrganizationIdProviderProviderIdPost = function (organizationId, directoryId, sbClientId, sbClientSecret, invite, returnCredentials, signupRequest, extraHttpRequestParams) {
        return this.signupOrganizationOrganizationIdProviderProviderIdPostWithHttpInfo(organizationId, directoryId, sbClientId, sbClientSecret, invite, returnCredentials, signupRequest, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    SignupApi.prototype.signupPost = function (sbClientId, profile, sbClientSecret, invite, returnCredentials, extraHttpRequestParams) {
        return this.signupPostWithHttpInfo(sbClientId, profile, sbClientSecret, invite, returnCredentials, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    SignupApi.prototype.signupProviderProviderIdPost = function (sbClientId, providerId, signupRequest, sbClientSecret, invite, returnCredentials, extraHttpRequestParams) {
        return this.signupProviderProviderIdPostWithHttpInfo(sbClientId, providerId, signupRequest, sbClientSecret, invite, returnCredentials, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    SignupApi.prototype.signupDirectoryDirectoryIdInteractivePostWithHttpInfo = function (sbClientId, directoryId, randomState, sbClientSecret, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup/directory/${directoryId}/interactive'
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupDirectoryDirectoryIdInteractivePost.');
        }
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling signupDirectoryDirectoryIdInteractivePost.');
        }
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling signupDirectoryDirectoryIdInteractivePost.');
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        headers.set('sb-client-id', String(sbClientId));
        headers.set('sb-client-secret', String(sbClientSecret));
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
    SignupApi.prototype.signupDirectoryDirectoryIdPostWithHttpInfo = function (sbClientId, directoryId, signupRequest, sbClientSecret, invite, returnCredentials, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup/directory/${directoryId}'
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupDirectoryDirectoryIdPost.');
        }
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling signupDirectoryDirectoryIdPost.');
        }
        if (signupRequest === null || signupRequest === undefined) {
            throw new Error('Required parameter signupRequest was null or undefined when calling signupDirectoryDirectoryIdPost.');
        }
        if (invite !== undefined) {
            queryParameters.set('invite', invite);
        }
        if (returnCredentials !== undefined) {
            queryParameters.set('returnCredentials', returnCredentials);
        }
        headers.set('sb-client-id', String(sbClientId));
        headers.set('sb-client-secret', String(sbClientSecret));
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
            body: signupRequest == null ? '' : JSON.stringify(signupRequest),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    SignupApi.prototype.signupDirectoryDirectoryIdTokenPostWithHttpInfo = function (sbClientId, directoryId, randomState, sbClientSecret, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup/directory/${directoryId}/token'
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupDirectoryDirectoryIdTokenPost.');
        }
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling signupDirectoryDirectoryIdTokenPost.');
        }
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling signupDirectoryDirectoryIdTokenPost.');
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        headers.set('sb-client-id', String(sbClientId));
        headers.set('sb-client-secret', String(sbClientSecret));
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
    SignupApi.prototype.signupOrganizationOrganizationIdDirectoryDirectoryIdPostWithHttpInfo = function (sbClientId, organizationId, directoryId, signupRequest, sbClientSecret, invite, returnCredentials, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup/organization/${organizationId}/directory/${directoryId}'
            .replace('${' + 'organizationId' + '}', String(organizationId))
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupOrganizationOrganizationIdDirectoryDirectoryIdPost.');
        }
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling signupOrganizationOrganizationIdDirectoryDirectoryIdPost.');
        }
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling signupOrganizationOrganizationIdDirectoryDirectoryIdPost.');
        }
        if (signupRequest === null || signupRequest === undefined) {
            throw new Error('Required parameter signupRequest was null or undefined when calling signupOrganizationOrganizationIdDirectoryDirectoryIdPost.');
        }
        if (invite !== undefined) {
            queryParameters.set('invite', invite);
        }
        if (returnCredentials !== undefined) {
            queryParameters.set('returnCredentials', returnCredentials);
        }
        headers.set('sb-client-id', String(sbClientId));
        headers.set('sb-client-secret', String(sbClientSecret));
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
            body: signupRequest == null ? '' : JSON.stringify(signupRequest),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    SignupApi.prototype.signupOrganizationOrganizationIdPostWithHttpInfo = function (sbClientId, organizationId, signupRequest, sbClientSecret, invite, returnCredentials, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup/organization/${organizationId}'
            .replace('${' + 'organizationId' + '}', String(organizationId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupOrganizationOrganizationIdPost.');
        }
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling signupOrganizationOrganizationIdPost.');
        }
        if (signupRequest === null || signupRequest === undefined) {
            throw new Error('Required parameter signupRequest was null or undefined when calling signupOrganizationOrganizationIdPost.');
        }
        if (invite !== undefined) {
            queryParameters.set('invite', invite);
        }
        if (returnCredentials !== undefined) {
            queryParameters.set('returnCredentials', returnCredentials);
        }
        headers.set('sb-client-id', String(sbClientId));
        headers.set('sb-client-secret', String(sbClientSecret));
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
            body: signupRequest == null ? '' : JSON.stringify(signupRequest),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    SignupApi.prototype.signupOrganizationOrganizationIdProviderProviderIdPostWithHttpInfo = function (organizationId, directoryId, sbClientId, sbClientSecret, invite, returnCredentials, signupRequest, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup/organization/${organizationId}/provider/${providerId}'
            .replace('${' + 'organizationId' + '}', String(organizationId))
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling signupOrganizationOrganizationIdProviderProviderIdPost.');
        }
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling signupOrganizationOrganizationIdProviderProviderIdPost.');
        }
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupOrganizationOrganizationIdProviderProviderIdPost.');
        }
        if (invite !== undefined) {
            queryParameters.set('invite', invite);
        }
        if (returnCredentials !== undefined) {
            queryParameters.set('returnCredentials', returnCredentials);
        }
        headers.set('sb-client-id', String(sbClientId));
        headers.set('sb-client-secret', String(sbClientSecret));
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
            body: signupRequest == null ? '' : JSON.stringify(signupRequest),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    SignupApi.prototype.signupPostWithHttpInfo = function (sbClientId, profile, sbClientSecret, invite, returnCredentials, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupPost.');
        }
        if (profile === null || profile === undefined) {
            throw new Error('Required parameter profile was null or undefined when calling signupPost.');
        }
        if (invite !== undefined) {
            queryParameters.set('invite', invite);
        }
        if (returnCredentials !== undefined) {
            queryParameters.set('returnCredentials', returnCredentials);
        }
        headers.set('sb-client-id', String(sbClientId));
        headers.set('sb-client-secret', String(sbClientSecret));
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
            body: profile == null ? '' : JSON.stringify(profile),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    SignupApi.prototype.signupProviderProviderIdPostWithHttpInfo = function (sbClientId, providerId, signupRequest, sbClientSecret, invite, returnCredentials, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup/provider/${providerId}'
            .replace('${' + 'providerId' + '}', String(providerId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupProviderProviderIdPost.');
        }
        if (providerId === null || providerId === undefined) {
            throw new Error('Required parameter providerId was null or undefined when calling signupProviderProviderIdPost.');
        }
        if (signupRequest === null || signupRequest === undefined) {
            throw new Error('Required parameter signupRequest was null or undefined when calling signupProviderProviderIdPost.');
        }
        if (invite !== undefined) {
            queryParameters.set('invite', invite);
        }
        if (returnCredentials !== undefined) {
            queryParameters.set('returnCredentials', returnCredentials);
        }
        headers.set('sb-client-id', String(sbClientId));
        headers.set('sb-client-secret', String(sbClientSecret));
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
            body: signupRequest == null ? '' : JSON.stringify(signupRequest),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return SignupApi;
}());
SignupApi = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [http_1.Http, configuration_1.Configuration])
], SignupApi);
exports.SignupApi = SignupApi;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var http_1 = __webpack_require__(0);
var http_2 = __webpack_require__(0);
__webpack_require__(3);
var configuration_1 = __webpack_require__(1);
var TenantsApi = (function () {
    function TenantsApi(http, configuration) {
        this.http = http;
        this.configuration = new configuration_1.Configuration();
        this.defaultHeaders = new http_1.Headers();
        if (configuration) {
            this.configuration = configuration;
            this.defaultHeaders = new http_1.Headers({ 'Authorization': this.configuration.apiKey });
        }
    }
    TenantsApi.prototype.tenantsGet = function (extraHttpRequestParams) {
        return this.tenantsGetWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    TenantsApi.prototype.tenantsPost = function (tenant, extraHttpRequestParams) {
        return this.tenantsPostWithHttpInfo(tenant, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    TenantsApi.prototype.tenantsTenantIdApplicationsApplicationIdDelete = function (tenantId, applicationId, extraHttpRequestParams) {
        return this.tenantsTenantIdApplicationsApplicationIdDeleteWithHttpInfo(tenantId, applicationId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    TenantsApi.prototype.tenantsTenantIdApplicationsGet = function (tenantId, extraHttpRequestParams) {
        return this.tenantsTenantIdApplicationsGetWithHttpInfo(tenantId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    TenantsApi.prototype.tenantsTenantIdApplicationsPost = function (tenantId, application, extraHttpRequestParams) {
        return this.tenantsTenantIdApplicationsPostWithHttpInfo(tenantId, application, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    TenantsApi.prototype.tenantsTenantIdDelete = function (tenantId, extraHttpRequestParams) {
        return this.tenantsTenantIdDeleteWithHttpInfo(tenantId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    TenantsApi.prototype.tenantsGetWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.configuration.basePath + '/tenants';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
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
    TenantsApi.prototype.tenantsPostWithHttpInfo = function (tenant, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/tenants';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (tenant === null || tenant === undefined) {
            throw new Error('Required parameter tenant was null or undefined when calling tenantsPost.');
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
            body: tenant == null ? '' : JSON.stringify(tenant),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    TenantsApi.prototype.tenantsTenantIdApplicationsApplicationIdDeleteWithHttpInfo = function (tenantId, applicationId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/tenants/${tenantId}/applications/${applicationId}'
            .replace('${' + 'tenantId' + '}', String(tenantId))
            .replace('${' + 'applicationId' + '}', String(applicationId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (tenantId === null || tenantId === undefined) {
            throw new Error('Required parameter tenantId was null or undefined when calling tenantsTenantIdApplicationsApplicationIdDelete.');
        }
        if (applicationId === null || applicationId === undefined) {
            throw new Error('Required parameter applicationId was null or undefined when calling tenantsTenantIdApplicationsApplicationIdDelete.');
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
    TenantsApi.prototype.tenantsTenantIdApplicationsGetWithHttpInfo = function (tenantId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/tenants/${tenantId}/applications'
            .replace('${' + 'tenantId' + '}', String(tenantId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (tenantId === null || tenantId === undefined) {
            throw new Error('Required parameter tenantId was null or undefined when calling tenantsTenantIdApplicationsGet.');
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
    TenantsApi.prototype.tenantsTenantIdApplicationsPostWithHttpInfo = function (tenantId, application, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/tenants/${tenantId}/applications'
            .replace('${' + 'tenantId' + '}', String(tenantId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (tenantId === null || tenantId === undefined) {
            throw new Error('Required parameter tenantId was null or undefined when calling tenantsTenantIdApplicationsPost.');
        }
        if (application === null || application === undefined) {
            throw new Error('Required parameter application was null or undefined when calling tenantsTenantIdApplicationsPost.');
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
            body: application == null ? '' : JSON.stringify(application),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    TenantsApi.prototype.tenantsTenantIdDeleteWithHttpInfo = function (tenantId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/tenants/${tenantId}'
            .replace('${' + 'tenantId' + '}', String(tenantId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (tenantId === null || tenantId === undefined) {
            throw new Error('Required parameter tenantId was null or undefined when calling tenantsTenantIdDelete.');
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
    return TenantsApi;
}());
TenantsApi = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [http_1.Http, configuration_1.Configuration])
], TenantsApi);
exports.TenantsApi = TenantsApi;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var http_1 = __webpack_require__(0);
var http_2 = __webpack_require__(0);
__webpack_require__(3);
var configuration_1 = __webpack_require__(1);
var UsersApi = (function () {
    function UsersApi(http, configuration) {
        this.http = http;
        this.configuration = new configuration_1.Configuration();
        this.defaultHeaders = new http_1.Headers();
        if (configuration) {
            this.configuration = configuration;
            this.defaultHeaders = new http_1.Headers({ 'Authorization': this.configuration.apiKey });
        }
    }
    UsersApi.prototype.usersBulkPost = function (users, extraHttpRequestParams) {
        return this.usersBulkPostWithHttpInfo(users, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    UsersApi.prototype.usersDelete = function (filter, extraHttpRequestParams) {
        return this.usersDeleteWithHttpInfo(filter, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    UsersApi.prototype.usersGet = function (pageSize, pageNumber, filter, sort, select, extraHttpRequestParams) {
        return this.usersGetWithHttpInfo(pageSize, pageNumber, filter, sort, select, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    UsersApi.prototype.usersPost = function (user, extraHttpRequestParams) {
        return this.usersPostWithHttpInfo(user, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    UsersApi.prototype.usersPut = function (filter, userBulkUpdate, extraHttpRequestParams) {
        return this.usersPutWithHttpInfo(filter, userBulkUpdate, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    UsersApi.prototype.usersUserIdDelete = function (userId, extraHttpRequestParams) {
        return this.usersUserIdDeleteWithHttpInfo(userId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    UsersApi.prototype.usersUserIdGet = function (userId, extraHttpRequestParams) {
        return this.usersUserIdGetWithHttpInfo(userId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    UsersApi.prototype.usersUserIdPut = function (userId, updatedUser, extraHttpRequestParams) {
        return this.usersUserIdPutWithHttpInfo(userId, updatedUser, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    UsersApi.prototype.usersBulkPostWithHttpInfo = function (users, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/users/bulk';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (users === null || users === undefined) {
            throw new Error('Required parameter users was null or undefined when calling usersBulkPost.');
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
            body: users == null ? '' : JSON.stringify(users),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    UsersApi.prototype.usersDeleteWithHttpInfo = function (filter, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/users';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling usersDelete.');
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
    UsersApi.prototype.usersGetWithHttpInfo = function (pageSize, pageNumber, filter, sort, select, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/users';
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
    UsersApi.prototype.usersPostWithHttpInfo = function (user, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/users';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (user === null || user === undefined) {
            throw new Error('Required parameter user was null or undefined when calling usersPost.');
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
            body: user == null ? '' : JSON.stringify(user),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    UsersApi.prototype.usersPutWithHttpInfo = function (filter, userBulkUpdate, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/users';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling usersPut.');
        }
        if (userBulkUpdate === null || userBulkUpdate === undefined) {
            throw new Error('Required parameter userBulkUpdate was null or undefined when calling usersPut.');
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
            body: userBulkUpdate == null ? '' : JSON.stringify(userBulkUpdate),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    UsersApi.prototype.usersUserIdDeleteWithHttpInfo = function (userId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/users/${userId}'
            .replace('${' + 'userId' + '}', String(userId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling usersUserIdDelete.');
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
    UsersApi.prototype.usersUserIdGetWithHttpInfo = function (userId, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/users/${userId}'
            .replace('${' + 'userId' + '}', String(userId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling usersUserIdGet.');
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
    UsersApi.prototype.usersUserIdPutWithHttpInfo = function (userId, updatedUser, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/users/${userId}'
            .replace('${' + 'userId' + '}', String(userId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling usersUserIdPut.');
        }
        if (updatedUser === null || updatedUser === undefined) {
            throw new Error('Required parameter updatedUser was null or undefined when calling usersUserIdPut.');
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
            body: updatedUser == null ? '' : JSON.stringify(updatedUser),
            search: queryParameters
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return UsersApi;
}());
UsersApi = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [http_1.Http, configuration_1.Configuration])
], UsersApi);
exports.UsersApi = UsersApi;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(2);
var common_1 = __webpack_require__(35);
var http_1 = __webpack_require__(0);
var configuration_1 = __webpack_require__(1);
var services_1 = __webpack_require__(6);
var api_1 = __webpack_require__(5);
var Selfbits = Selfbits_1 = (function () {
    function Selfbits() {
    }
    Selfbits.forRoot = function (configuration) {
        return {
            ngModule: Selfbits_1,
            providers: [
                { provide: configuration_1.Configuration, useValue: configuration }
            ]
        };
    };
    return Selfbits;
}());
Selfbits = Selfbits_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, http_1.HttpModule],
        declarations: [],
        exports: [],
        providers: api_1.APIS.concat(services_1.SERVICES)
    })
], Selfbits);
exports.Selfbits = Selfbits;
var Selfbits_1;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(31));
__export(__webpack_require__(32));


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(5));
__export(__webpack_require__(28));
__export(__webpack_require__(29));
__export(__webpack_require__(1));
__export(__webpack_require__(27));
__export(__webpack_require__(6));


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Endpoint;
(function (Endpoint) {
    var MethodEnum;
    (function (MethodEnum) {
        MethodEnum[MethodEnum["GET"] = 'GET'] = "GET";
        MethodEnum[MethodEnum["POST"] = 'POST'] = "POST";
        MethodEnum[MethodEnum["PUT"] = 'PUT'] = "PUT";
        MethodEnum[MethodEnum["DELETE"] = 'DELETE'] = "DELETE";
    })(MethodEnum = Endpoint.MethodEnum || (Endpoint.MethodEnum = {}));
})(Endpoint = exports.Endpoint || (exports.Endpoint = {}));


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NewEndpoint;
(function (NewEndpoint) {
    var MethodEnum;
    (function (MethodEnum) {
        MethodEnum[MethodEnum["GET"] = 'GET'] = "GET";
        MethodEnum[MethodEnum["POST"] = 'POST'] = "POST";
        MethodEnum[MethodEnum["PUT"] = 'PUT'] = "PUT";
        MethodEnum[MethodEnum["DELETE"] = 'DELETE'] = "DELETE";
    })(MethodEnum = NewEndpoint.MethodEnum || (NewEndpoint.MethodEnum = {}));
})(NewEndpoint = exports.NewEndpoint || (exports.NewEndpoint = {}));


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var configuration_1 = __webpack_require__(1);
var ConfigService = (function () {
    function ConfigService(configuration) {
        this.configuration = configuration;
        if (localStorage.getItem('authorization')) {
            var auth = JSON.parse(localStorage.getItem('authorization'));
            configuration.apiKey = 'bearer ' + (auth ? auth['token'] : '');
        }
    }
    ConfigService.prototype.setAuthorization = function (authorizationObject) {
        localStorage.setItem('authorization', JSON.stringify(authorizationObject));
        this.configuration.apiKey = 'bearer ' + authorizationObject.token;
    };
    ConfigService.prototype.getAuthorization = function () {
        if (localStorage.getItem('authorization')) {
            return JSON.parse(localStorage.getItem('authorization'));
        }
        else {
            return;
        }
    };
    ConfigService.prototype.setBasePath = function (basePath) {
        this.configuration.basePath = basePath;
    };
    ConfigService.prototype.setDefaultBasePath = function () {
        this.configuration.basePath = 'https://selfbits.apps.selfbits.io/api/v2/selfbits/apps/scp';
    };
    ConfigService.prototype.getBearerToken = function () {
        if (localStorage.getItem('authorization')) {
            var authorization = JSON.parse(localStorage.getItem('authorization'));
            return 'bearer ' + authorization.token;
        }
        else {
            return;
        }
    };
    ConfigService.prototype.getUserId = function () {
        if (localStorage.getItem('authorization')) {
            return JSON.parse(localStorage.getItem('authorization')).userId;
        }
        else {
            return;
        }
    };
    ConfigService.prototype.getOrganizationId = function () {
        if (localStorage.getItem('authorization')) {
            return JSON.parse(localStorage.getItem('authorization')).organizationId;
        }
        else {
            return;
        }
    };
    ConfigService.prototype.getExpires = function () {
        if (localStorage.getItem('authorization')) {
            return JSON.parse(localStorage.getItem('authorization')).expires;
        }
        else {
            return;
        }
    };
    return ConfigService;
}());
ConfigService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [configuration_1.Configuration])
], ConfigService);
exports.ConfigService = ConfigService;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var http_1 = __webpack_require__(0);
var FilesApi_1 = __webpack_require__(4);
__webpack_require__(36);
__webpack_require__(3);
__webpack_require__(37);
var FileService = (function () {
    function FileService(filesApi, http) {
        this.filesApi = filesApi;
        this.http = http;
    }
    FileService.prototype.uploadPrivate = function (fileMetadata, file) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', file.type ? file.type : 'application/octet-stream');
        var filemetaId;
        return this.filesApi.createPrivate({ filePath: fileMetadata.filePath, customData: fileMetadata.customData })
            .mergeMap(function (res) {
            filemetaId = res.fileId;
            return _this.http.put(res.putFileUrl, file, {
                headers: headers
            });
        })
            .mergeMap(function (res) {
            return _this.filesApi.verifyUpload(filemetaId, { etag: res.headers.get('etag') });
        });
    };
    FileService.prototype.uploadPublic = function (fileMetadata, file) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', file.type ? file.type : 'application/octet-stream');
        var filemetaId;
        return this.filesApi.createPublic({ filePath: fileMetadata.filePath, customData: fileMetadata.customData })
            .mergeMap(function (res) {
            filemetaId = res.fileId;
            return _this.http.put(res.putFileUrl, file, {
                headers: headers
            });
        })
            .mergeMap(function (res) {
            return _this.filesApi.verifyUpload(filemetaId, { etag: res.headers.get('etag') });
        });
    };
    return FileService;
}());
FileService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [FilesApi_1.FilesApi, http_1.Http])
], FileService);
exports.FileService = FileService;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_35__;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ })
/******/ ]);
});