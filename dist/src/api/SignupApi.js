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
    /**
     *
     * Interactive POST endpoint for a user signup with email/pw or username/pw directory. The attributes that are used as credentials to signup the user depend on the directory type:
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param randomState random state that was provided in the interactive oauth flow
     * @param sbClientSecret Your application client secret
     */
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
    /**
     * Signup with specific directory
     * User signup with specific directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password |
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param signupRequest User signup request
     * @param sbClientSecret Your application client secret
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     */
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
    /**
     *
     * User signup with social directory and serverside oauth flow. The attributes that are used as credentials to signup the user depend on the directory type:
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param randomState random state that was provided in the interactive oauth flow
     * @param sbClientSecret Your application client secret
     */
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
    /**
     * Signup with specific organization and a specific directory
     * User signup with specific organization and a specific directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password |
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param directoryId the directory of the new user
     * @param signupRequest User signup request
     * @param sbClientSecret Your application client secret
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     */
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
    /**
     * Signup with specific organization and its default directory
     * User signup with specific organization and its default directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password |
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param signupRequest User signup request
     * @param sbClientSecret Your application client secret
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     */
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
    /**
     * Signup with specific organization and directory that belongs to a specific provider
     * User signup with specific organization and a directory that belongs to a specific provider. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password |
     * @param organizationId the organization of the new user
     * @param directoryId the directory of the new user
     * @param sbClientId Your application client id
     * @param sbClientSecret Your application client secret
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     * @param signupRequest User signup request
     */
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
    /**
     * Signup with default organization and its default directory
     * User signup with default directory
     * @param sbClientId Your application client id
     * @param profile New user&#39;s profile
     * @param sbClientSecret Your application client secret
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     */
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
    /**
     * Signup with default organization and a directory depending on the specified provider
     * User signup with the default organization and a directory that belongs to the specific provider. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password |
     * @param sbClientId Your application client id
     * @param providerId the provider of a directory of the new user
     * @param signupRequest User signup request
     * @param sbClientSecret Your application client secret
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     */
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
    /**
     *
     * Interactive POST endpoint for a user signup with email/pw or username/pw directory. The attributes that are used as credentials to signup the user depend on the directory type:
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param randomState random state that was provided in the interactive oauth flow
     * @param sbClientSecret Your application client secret
     */
    SignupApi.prototype.signupDirectoryDirectoryIdInteractivePostWithHttpInfo = function (sbClientId, directoryId, randomState, sbClientSecret, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup/directory/${directoryId}/interactive'
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sbClientId' is not null or undefined
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupDirectoryDirectoryIdInteractivePost.');
        }
        // verify required parameter 'directoryId' is not null or undefined
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling signupDirectoryDirectoryIdInteractivePost.');
        }
        // verify required parameter 'randomState' is not null or undefined
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling signupDirectoryDirectoryIdInteractivePost.');
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        headers.set('sb-client-id', String(sbClientId));
        headers.set('sb-client-secret', String(sbClientSecret));
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
            method: http_2.RequestMethod.Post,
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
     * Signup with specific directory
     * User signup with specific directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password |
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param signupRequest User signup request
     * @param sbClientSecret Your application client secret
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     */
    SignupApi.prototype.signupDirectoryDirectoryIdPostWithHttpInfo = function (sbClientId, directoryId, signupRequest, sbClientSecret, invite, returnCredentials, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup/directory/${directoryId}'
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sbClientId' is not null or undefined
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupDirectoryDirectoryIdPost.');
        }
        // verify required parameter 'directoryId' is not null or undefined
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling signupDirectoryDirectoryIdPost.');
        }
        // verify required parameter 'signupRequest' is not null or undefined
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
            body: signupRequest == null ? '' : JSON.stringify(signupRequest),
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
     * User signup with social directory and serverside oauth flow. The attributes that are used as credentials to signup the user depend on the directory type:
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param randomState random state that was provided in the interactive oauth flow
     * @param sbClientSecret Your application client secret
     */
    SignupApi.prototype.signupDirectoryDirectoryIdTokenPostWithHttpInfo = function (sbClientId, directoryId, randomState, sbClientSecret, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup/directory/${directoryId}/token'
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sbClientId' is not null or undefined
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupDirectoryDirectoryIdTokenPost.');
        }
        // verify required parameter 'directoryId' is not null or undefined
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling signupDirectoryDirectoryIdTokenPost.');
        }
        // verify required parameter 'randomState' is not null or undefined
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling signupDirectoryDirectoryIdTokenPost.');
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', randomState);
        }
        headers.set('sb-client-id', String(sbClientId));
        headers.set('sb-client-secret', String(sbClientSecret));
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
            method: http_2.RequestMethod.Post,
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
     * Signup with specific organization and a specific directory
     * User signup with specific organization and a specific directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password |
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param directoryId the directory of the new user
     * @param signupRequest User signup request
     * @param sbClientSecret Your application client secret
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     */
    SignupApi.prototype.signupOrganizationOrganizationIdDirectoryDirectoryIdPostWithHttpInfo = function (sbClientId, organizationId, directoryId, signupRequest, sbClientSecret, invite, returnCredentials, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup/organization/${organizationId}/directory/${directoryId}'
            .replace('${' + 'organizationId' + '}', String(organizationId))
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sbClientId' is not null or undefined
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupOrganizationOrganizationIdDirectoryDirectoryIdPost.');
        }
        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling signupOrganizationOrganizationIdDirectoryDirectoryIdPost.');
        }
        // verify required parameter 'directoryId' is not null or undefined
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling signupOrganizationOrganizationIdDirectoryDirectoryIdPost.');
        }
        // verify required parameter 'signupRequest' is not null or undefined
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
            body: signupRequest == null ? '' : JSON.stringify(signupRequest),
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Signup with specific organization and its default directory
     * User signup with specific organization and its default directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password |
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param signupRequest User signup request
     * @param sbClientSecret Your application client secret
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     */
    SignupApi.prototype.signupOrganizationOrganizationIdPostWithHttpInfo = function (sbClientId, organizationId, signupRequest, sbClientSecret, invite, returnCredentials, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup/organization/${organizationId}'
            .replace('${' + 'organizationId' + '}', String(organizationId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sbClientId' is not null or undefined
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupOrganizationOrganizationIdPost.');
        }
        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling signupOrganizationOrganizationIdPost.');
        }
        // verify required parameter 'signupRequest' is not null or undefined
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
            body: signupRequest == null ? '' : JSON.stringify(signupRequest),
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Signup with specific organization and directory that belongs to a specific provider
     * User signup with specific organization and a directory that belongs to a specific provider. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password |
     * @param organizationId the organization of the new user
     * @param directoryId the directory of the new user
     * @param sbClientId Your application client id
     * @param sbClientSecret Your application client secret
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     * @param signupRequest User signup request
     */
    SignupApi.prototype.signupOrganizationOrganizationIdProviderProviderIdPostWithHttpInfo = function (organizationId, directoryId, sbClientId, sbClientSecret, invite, returnCredentials, signupRequest, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup/organization/${organizationId}/provider/${providerId}'
            .replace('${' + 'organizationId' + '}', String(organizationId))
            .replace('${' + 'directoryId' + '}', String(directoryId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling signupOrganizationOrganizationIdProviderProviderIdPost.');
        }
        // verify required parameter 'directoryId' is not null or undefined
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling signupOrganizationOrganizationIdProviderProviderIdPost.');
        }
        // verify required parameter 'sbClientId' is not null or undefined
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
            body: signupRequest == null ? '' : JSON.stringify(signupRequest),
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Signup with default organization and its default directory
     * User signup with default directory
     * @param sbClientId Your application client id
     * @param profile New user&#39;s profile
     * @param sbClientSecret Your application client secret
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     */
    SignupApi.prototype.signupPostWithHttpInfo = function (sbClientId, profile, sbClientSecret, invite, returnCredentials, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sbClientId' is not null or undefined
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupPost.');
        }
        // verify required parameter 'profile' is not null or undefined
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
            body: profile == null ? '' : JSON.stringify(profile),
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * Signup with default organization and a directory depending on the specified provider
     * User signup with the default organization and a directory that belongs to the specific provider. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password |
     * @param sbClientId Your application client id
     * @param providerId the provider of a directory of the new user
     * @param signupRequest User signup request
     * @param sbClientSecret Your application client secret
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     */
    SignupApi.prototype.signupProviderProviderIdPostWithHttpInfo = function (sbClientId, providerId, signupRequest, sbClientSecret, invite, returnCredentials, extraHttpRequestParams) {
        var path = this.configuration.basePath + '/signup/provider/${providerId}'
            .replace('${' + 'providerId' + '}', String(providerId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sbClientId' is not null or undefined
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupProviderProviderIdPost.');
        }
        // verify required parameter 'providerId' is not null or undefined
        if (providerId === null || providerId === undefined) {
            throw new Error('Required parameter providerId was null or undefined when calling signupProviderProviderIdPost.');
        }
        // verify required parameter 'signupRequest' is not null or undefined
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
            body: signupRequest == null ? '' : JSON.stringify(signupRequest),
            search: queryParameters
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    return SignupApi;
}());
SignupApi.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
SignupApi.ctorParameters = function () { return [
    { type: http_1.Http, },
    { type: configuration_1.Configuration, decorators: [{ type: core_1.Optional },] },
]; };
exports.SignupApi = SignupApi;
//# sourceMappingURL=SignupApi.js.map