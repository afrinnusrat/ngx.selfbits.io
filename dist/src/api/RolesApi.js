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
//# sourceMappingURL=RolesApi.js.map