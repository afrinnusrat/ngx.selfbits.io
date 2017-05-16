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

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class LoginApi {
    public configuration: Configuration = new Configuration();
    public defaultHeaders: Headers = new Headers();

    constructor(protected http: Http, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
            this.defaultHeaders = new Headers({'Authorization': this.configuration.apiKey});
        }
    }

    /**
     * 
     * User login with specific directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username | password | 
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param sbClientSecret Your application client secret
     * @param userLoginRequest User login request
     */
    public loginDirectoryDirectoryIdPost(sbClientId: string, directoryId: string, sbClientSecret?: string, userLoginRequest?: models.UserLoginRequest, extraHttpRequestParams?: any): Observable<models.UserLoginResponse> {
        return this.loginDirectoryDirectoryIdPostWithHttpInfo(sbClientId, directoryId, sbClientSecret, userLoginRequest, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * 
     * User login with social directory and serverside oauth flow. The attributes that are used as credentials to login the user depend on the directory type: 
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param randomState random state that was provided in the interactive oauth flow
     * @param sbClientSecret Your application client secret
     */
    public loginDirectoryDirectoryIdTokenPost(sbClientId: string, directoryId: string, randomState: string, sbClientSecret?: string, extraHttpRequestParams?: any): Observable<models.UserLoginResponse> {
        return this.loginDirectoryDirectoryIdTokenPostWithHttpInfo(sbClientId, directoryId, randomState, sbClientSecret, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * 
     * User login with a specific organization
     * @param sbClientId Your application client id
     * @param organizationId the organization id of the login user
     * @param sbClientSecret Your application client secret
     * @param userLoginRequest User login request
     */
    public loginOrganizationOrganizationIdPost(sbClientId: string, organizationId: string, sbClientSecret?: string, userLoginRequest?: models.UserLoginRequest, extraHttpRequestParams?: any): Observable<models.UserLoginResponse> {
        return this.loginOrganizationOrganizationIdPostWithHttpInfo(sbClientId, organizationId, sbClientSecret, userLoginRequest, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * 
     * User login with a specific organization
     * @param sbClientId Your application client id
     * @param organizationId the organization id of the login user
     * @param providerId the provider id of the target directory
     * @param sbClientSecret Your application client secret
     * @param userLoginRequest User login request
     */
    public loginOrganizationOrganizationIdProviderProviderIdPost(sbClientId: string, organizationId: string, providerId: string, sbClientSecret?: string, userLoginRequest?: models.UserLoginRequest, extraHttpRequestParams?: any): Observable<models.UserLoginResponse> {
        return this.loginOrganizationOrganizationIdProviderProviderIdPostWithHttpInfo(sbClientId, organizationId, providerId, sbClientSecret, userLoginRequest, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * 
     * User login with default directory
     * @param sbClientId Your application client id
     * @param userLoginRequest User login request credentials
     * @param sbClientSecret Your application client secret
     */
    public loginPost(sbClientId: string, userLoginRequest: models.UserLoginRequest, sbClientSecret?: string, extraHttpRequestParams?: any): Observable<models.UserLoginResponse> {
        return this.loginPostWithHttpInfo(sbClientId, userLoginRequest, sbClientSecret, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * 
     * User login with specific directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username | password | 
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param sbClientSecret Your application client secret
     * @param userLoginRequest User login request
     */
    public loginDirectoryDirectoryIdPostWithHttpInfo(sbClientId: string, directoryId: string, sbClientSecret?: string, userLoginRequest?: models.UserLoginRequest, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/login/directory/${directoryId}'
                    .replace('${' + 'directoryId' + '}', String(directoryId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sbClientId' is not null or undefined
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling loginDirectoryDirectoryIdPost.');
        }
        // verify required parameter 'directoryId' is not null or undefined
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling loginDirectoryDirectoryIdPost.');
        }
        headers.set('sb-client-id', String(sbClientId));

        headers.set('sb-client-secret', String(sbClientSecret));

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (ConsumerSecurity) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: userLoginRequest == null ? '' : JSON.stringify(userLoginRequest), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * User login with social directory and serverside oauth flow. The attributes that are used as credentials to login the user depend on the directory type: 
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param randomState random state that was provided in the interactive oauth flow
     * @param sbClientSecret Your application client secret
     */
    public loginDirectoryDirectoryIdTokenPostWithHttpInfo(sbClientId: string, directoryId: string, randomState: string, sbClientSecret?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/login/directory/${directoryId}/token'
                    .replace('${' + 'directoryId' + '}', String(directoryId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sbClientId' is not null or undefined
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling loginDirectoryDirectoryIdTokenPost.');
        }
        // verify required parameter 'directoryId' is not null or undefined
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling loginDirectoryDirectoryIdTokenPost.');
        }
        // verify required parameter 'randomState' is not null or undefined
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling loginDirectoryDirectoryIdTokenPost.');
        }
        if (randomState !== undefined) {
            queryParameters.set('randomState', <any>randomState);
        }

        headers.set('sb-client-id', String(sbClientId));

        headers.set('sb-client-secret', String(sbClientSecret));

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (ConsumerSecurity) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * User login with a specific organization
     * @param sbClientId Your application client id
     * @param organizationId the organization id of the login user
     * @param sbClientSecret Your application client secret
     * @param userLoginRequest User login request
     */
    public loginOrganizationOrganizationIdPostWithHttpInfo(sbClientId: string, organizationId: string, sbClientSecret?: string, userLoginRequest?: models.UserLoginRequest, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/login/organization/${organizationId}'
                    .replace('${' + 'organizationId' + '}', String(organizationId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sbClientId' is not null or undefined
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling loginOrganizationOrganizationIdPost.');
        }
        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling loginOrganizationOrganizationIdPost.');
        }
        headers.set('sb-client-id', String(sbClientId));

        headers.set('sb-client-secret', String(sbClientSecret));

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (ConsumerSecurity) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: userLoginRequest == null ? '' : JSON.stringify(userLoginRequest), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * User login with a specific organization
     * @param sbClientId Your application client id
     * @param organizationId the organization id of the login user
     * @param providerId the provider id of the target directory
     * @param sbClientSecret Your application client secret
     * @param userLoginRequest User login request
     */
    public loginOrganizationOrganizationIdProviderProviderIdPostWithHttpInfo(sbClientId: string, organizationId: string, providerId: string, sbClientSecret?: string, userLoginRequest?: models.UserLoginRequest, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/login/organization/${organizationId}/provider/${providerId}'
                    .replace('${' + 'organizationId' + '}', String(organizationId))
                    .replace('${' + 'providerId' + '}', String(providerId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sbClientId' is not null or undefined
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling loginOrganizationOrganizationIdProviderProviderIdPost.');
        }
        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling loginOrganizationOrganizationIdProviderProviderIdPost.');
        }
        // verify required parameter 'providerId' is not null or undefined
        if (providerId === null || providerId === undefined) {
            throw new Error('Required parameter providerId was null or undefined when calling loginOrganizationOrganizationIdProviderProviderIdPost.');
        }
        headers.set('sb-client-id', String(sbClientId));

        headers.set('sb-client-secret', String(sbClientSecret));

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (ConsumerSecurity) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: userLoginRequest == null ? '' : JSON.stringify(userLoginRequest), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * User login with default directory
     * @param sbClientId Your application client id
     * @param userLoginRequest User login request credentials
     * @param sbClientSecret Your application client secret
     */
    public loginPostWithHttpInfo(sbClientId: string, userLoginRequest: models.UserLoginRequest, sbClientSecret?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/login';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sbClientId' is not null or undefined
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling loginPost.');
        }
        // verify required parameter 'userLoginRequest' is not null or undefined
        if (userLoginRequest === null || userLoginRequest === undefined) {
            throw new Error('Required parameter userLoginRequest was null or undefined when calling loginPost.');
        }
        headers.set('sb-client-id', String(sbClientId));

        headers.set('sb-client-secret', String(sbClientSecret));

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (ConsumerSecurity) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: userLoginRequest == null ? '' : JSON.stringify(userLoginRequest), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}