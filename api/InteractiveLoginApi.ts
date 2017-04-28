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
export class InteractiveLoginApi {
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
     * Interactive user login with specific directory
     * @param sbClientId Your application client id
     * @param directoryId the directory where the user wants to log in
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     * @param randomState2 Random string to identifiy the account after the successful interactive authentication
     */
    public loginDirectoryDirectoryIdGet(sbClientId: string, directoryId: string, randomState: string, randomState2?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.loginDirectoryDirectoryIdGetWithHttpInfo(sbClientId, directoryId, randomState, randomState2, extraHttpRequestParams)
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
     * Interactive user login with default directory
     * @param sbClientId Your application client id
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     */
    public loginGet(sbClientId: string, randomState?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.loginGetWithHttpInfo(sbClientId, randomState, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Interactive user login with specific organization and a specific directory
     * Interactive user login with specific organization and a specific directory
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     */
    public loginOrganizationOrganizationIdDirectoryDirectoryIdGet(sbClientId: string, organizationId: string, directoryId: string, randomState?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.loginOrganizationOrganizationIdDirectoryDirectoryIdGetWithHttpInfo(sbClientId, organizationId, directoryId, randomState, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Interactive user login with default organization and its default directory
     * Interactive user login with specific organization
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     */
    public loginOrganizationOrganizationIdGet(sbClientId: string, organizationId: string, randomState?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.loginOrganizationOrganizationIdGetWithHttpInfo(sbClientId, organizationId, randomState, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Interactive user login with specific organization and specific provider
     * Interactive user login with specific organization and specific provider
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param providerId the provider of the user directory
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     */
    public loginOrganizationOrganizationIdProviderProviderIdGet(sbClientId: string, organizationId: string, providerId: string, randomState?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.loginOrganizationOrganizationIdProviderProviderIdGetWithHttpInfo(sbClientId, organizationId, providerId, randomState, extraHttpRequestParams)
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
     * Interactive user login with specific directory
     * @param sbClientId Your application client id
     * @param directoryId the directory where the user wants to log in
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     * @param randomState2 Random string to identifiy the account after the successful interactive authentication
     */
    public loginDirectoryDirectoryIdGetWithHttpInfo(sbClientId: string, directoryId: string, randomState: string, randomState2?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/login/directory/${directoryId}'
                    .replace('${' + 'directoryId' + '}', String(directoryId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sbClientId' is not null or undefined
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling loginDirectoryDirectoryIdGet.');
        }
        // verify required parameter 'directoryId' is not null or undefined
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling loginDirectoryDirectoryIdGet.');
        }
        // verify required parameter 'randomState' is not null or undefined
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling loginDirectoryDirectoryIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', <any>sbClientId);
        }

        if (randomState !== undefined) {
            queryParameters.set('randomState', <any>randomState);
        }

        if (randomState2 !== undefined) {
            queryParameters.set('randomState', <any>randomState2);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'text/html'
        ];

        // authentication (ConsumerSecurity) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
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
     * Interactive user login with default directory
     * @param sbClientId Your application client id
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     */
    public loginGetWithHttpInfo(sbClientId: string, randomState?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/login';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sbClientId' is not null or undefined
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling loginGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', <any>sbClientId);
        }

        if (randomState !== undefined) {
            queryParameters.set('randomState', <any>randomState);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'text/html'
        ];

        // authentication (ConsumerSecurity) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
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
     * Interactive user login with specific organization and a specific directory
     * Interactive user login with specific organization and a specific directory
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     */
    public loginOrganizationOrganizationIdDirectoryDirectoryIdGetWithHttpInfo(sbClientId: string, organizationId: string, directoryId: string, randomState?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/login/organization/${organizationId}/directory/${directoryId}'
                    .replace('${' + 'organizationId' + '}', String(organizationId))
                    .replace('${' + 'directoryId' + '}', String(directoryId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sbClientId' is not null or undefined
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling loginOrganizationOrganizationIdDirectoryDirectoryIdGet.');
        }
        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling loginOrganizationOrganizationIdDirectoryDirectoryIdGet.');
        }
        // verify required parameter 'directoryId' is not null or undefined
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling loginOrganizationOrganizationIdDirectoryDirectoryIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', <any>sbClientId);
        }

        if (randomState !== undefined) {
            queryParameters.set('randomState', <any>randomState);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'text/html'
        ];

        // authentication (ConsumerSecurity) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
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
     * Interactive user login with default organization and its default directory
     * Interactive user login with specific organization
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     */
    public loginOrganizationOrganizationIdGetWithHttpInfo(sbClientId: string, organizationId: string, randomState?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/login/organization/${organizationId}'
                    .replace('${' + 'organizationId' + '}', String(organizationId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sbClientId' is not null or undefined
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling loginOrganizationOrganizationIdGet.');
        }
        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling loginOrganizationOrganizationIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', <any>sbClientId);
        }

        if (randomState !== undefined) {
            queryParameters.set('randomState', <any>randomState);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'text/html'
        ];

        // authentication (ConsumerSecurity) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
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
     * Interactive user login with specific organization and specific provider
     * Interactive user login with specific organization and specific provider
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param providerId the provider of the user directory
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     */
    public loginOrganizationOrganizationIdProviderProviderIdGetWithHttpInfo(sbClientId: string, organizationId: string, providerId: string, randomState?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/login/organization/${organizationId}/provider/${providerId}'
                    .replace('${' + 'organizationId' + '}', String(organizationId))
                    .replace('${' + 'providerId' + '}', String(providerId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sbClientId' is not null or undefined
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling loginOrganizationOrganizationIdProviderProviderIdGet.');
        }
        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling loginOrganizationOrganizationIdProviderProviderIdGet.');
        }
        // verify required parameter 'providerId' is not null or undefined
        if (providerId === null || providerId === undefined) {
            throw new Error('Required parameter providerId was null or undefined when calling loginOrganizationOrganizationIdProviderProviderIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', <any>sbClientId);
        }

        if (randomState !== undefined) {
            queryParameters.set('randomState', <any>randomState);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'text/html'
        ];

        // authentication (ConsumerSecurity) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
