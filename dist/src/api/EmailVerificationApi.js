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
    /**
     *
     * Trigger email verification
     * @param sendVerificationEmailRequest Email you want to verifiy
     */
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
    /**
     *
     * Trigger email verification
     * @param sendVerificationEmailRequest Email you want to verifiy
     */
    EmailVerificationApi.prototype.emailsVerificationPostWithHttpInfo = function (sendVerificationEmailRequest, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/emails/verification';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sendVerificationEmailRequest' is not null or undefined
        if (sendVerificationEmailRequest === null || sendVerificationEmailRequest === undefined) {
            throw new Error('Required parameter sendVerificationEmailRequest was null or undefined when calling emailsVerificationPost.');
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
            body: sendVerificationEmailRequest == null ? '' : JSON.stringify(sendVerificationEmailRequest),
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return EmailVerificationApi;
}());
EmailVerificationApi.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
EmailVerificationApi.ctorParameters = function () { return [
    { type: http_1.Http, },
    { type: configuration_1.Configuration, decorators: [{ type: core_1.Optional },] },
]; };
exports.EmailVerificationApi = EmailVerificationApi;
//# sourceMappingURL=EmailVerificationApi.js.map