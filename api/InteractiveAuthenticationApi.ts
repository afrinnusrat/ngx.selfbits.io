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
export class InteractiveAuthenticationApi {
    public configuration: Configuration = new Configuration();
    public defaultHeaders: Headers = new Headers();

    constructor(protected http: Http, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
            this.defaultHeaders = new Headers({'Authorization': this.configuration.apiKey});
        }
    }

    /**
     * Interactive user authentication with external provider
     * Interactive user authentication with external authentication providers for a specific directory. If the authentication is successful, the client is redirected to /auth/provider/[providerId]/callback.
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     * @param sbClientSecret Your application client secret
     * @param invite Optional invite code
     */
    public authDirectoryDirectoryIdGet(sbClientId: string, directoryId: string, randomState: string, sbClientSecret?: string, invite?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.authDirectoryDirectoryIdGetWithHttpInfo(sbClientId, directoryId, randomState, sbClientSecret, invite, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Interactive user authentication using specific organization and directory
     * Interactive user authentication with external authentication provider. If the authentication is successful, the client is redirected to /auth/provider/[providerId]/callback.
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     * @param sbClientSecret Your application client secret
     * @param invite Optional invite code
     */
    public authOrganizationOrganizationIdDirectoryDirectoryIdGet(sbClientId: string, directoryId: string, randomState: string, sbClientSecret?: string, invite?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.authOrganizationOrganizationIdDirectoryDirectoryIdGetWithHttpInfo(sbClientId, directoryId, randomState, sbClientSecret, invite, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Interactive user authentication using specific organization and a specific provider
     * Interactive user authentication with external authentication provider. If the authentication is successful, the client is redirected to /auth/provider/[providerId]/callback.
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     * @param sbClientSecret Your application client secret
     * @param invite Optional invite code
     */
    public authOrganizationOrganizationIdProviderProviderIdGet(sbClientId: string, directoryId: string, randomState: string, sbClientSecret?: string, invite?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.authOrganizationOrganizationIdProviderProviderIdGetWithHttpInfo(sbClientId, directoryId, randomState, sbClientSecret, invite, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Interactive user authentication with external provider
     * Interactive user authentication with external authentication provider. If the authentication is successful, the client is redirected to /auth/provider/[providerId]/callback.
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     * @param sbClientSecret Your application client secret
     * @param invite Optional invite code
     */
    public authProviderProviderIdGet(sbClientId: string, directoryId: string, randomState: string, sbClientSecret?: string, invite?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.authProviderProviderIdGetWithHttpInfo(sbClientId, directoryId, randomState, sbClientSecret, invite, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Interactive user authentication with external provider
     * Interactive user authentication with external authentication providers for a specific directory. If the authentication is successful, the client is redirected to /auth/provider/[providerId]/callback.
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     * @param sbClientSecret Your application client secret
     * @param invite Optional invite code
     */
    public authDirectoryDirectoryIdGetWithHttpInfo(sbClientId: string, directoryId: string, randomState: string, sbClientSecret?: string, invite?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/auth/directory/${directoryId}'
                    .replace('${' + 'directoryId' + '}', String(directoryId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sbClientId' is not null or undefined
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling authDirectoryDirectoryIdGet.');
        }
        // verify required parameter 'directoryId' is not null or undefined
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling authDirectoryDirectoryIdGet.');
        }
        // verify required parameter 'randomState' is not null or undefined
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling authDirectoryDirectoryIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', <any>sbClientId);
        }

        if (sbClientSecret !== undefined) {
            queryParameters.set('sb-client-secret', <any>sbClientSecret);
        }

        if (randomState !== undefined) {
            queryParameters.set('randomState', <any>randomState);
        }

        if (invite !== undefined) {
            queryParameters.set('invite', <any>invite);
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
     * Interactive user authentication using specific organization and directory
     * Interactive user authentication with external authentication provider. If the authentication is successful, the client is redirected to /auth/provider/[providerId]/callback.
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     * @param sbClientSecret Your application client secret
     * @param invite Optional invite code
     */
    public authOrganizationOrganizationIdDirectoryDirectoryIdGetWithHttpInfo(sbClientId: string, directoryId: string, randomState: string, sbClientSecret?: string, invite?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/auth/organization/${organizationId}/directory/${directoryId}'
                    .replace('${' + 'directoryId' + '}', String(directoryId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sbClientId' is not null or undefined
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling authOrganizationOrganizationIdDirectoryDirectoryIdGet.');
        }
        // verify required parameter 'directoryId' is not null or undefined
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling authOrganizationOrganizationIdDirectoryDirectoryIdGet.');
        }
        // verify required parameter 'randomState' is not null or undefined
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling authOrganizationOrganizationIdDirectoryDirectoryIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', <any>sbClientId);
        }

        if (sbClientSecret !== undefined) {
            queryParameters.set('sb-client-secret', <any>sbClientSecret);
        }

        if (randomState !== undefined) {
            queryParameters.set('randomState', <any>randomState);
        }

        if (invite !== undefined) {
            queryParameters.set('invite', <any>invite);
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
     * Interactive user authentication using specific organization and a specific provider
     * Interactive user authentication with external authentication provider. If the authentication is successful, the client is redirected to /auth/provider/[providerId]/callback.
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     * @param sbClientSecret Your application client secret
     * @param invite Optional invite code
     */
    public authOrganizationOrganizationIdProviderProviderIdGetWithHttpInfo(sbClientId: string, directoryId: string, randomState: string, sbClientSecret?: string, invite?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/auth/organization/${organizationId}/provider/${providerId}'
                    .replace('${' + 'directoryId' + '}', String(directoryId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sbClientId' is not null or undefined
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling authOrganizationOrganizationIdProviderProviderIdGet.');
        }
        // verify required parameter 'directoryId' is not null or undefined
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling authOrganizationOrganizationIdProviderProviderIdGet.');
        }
        // verify required parameter 'randomState' is not null or undefined
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling authOrganizationOrganizationIdProviderProviderIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', <any>sbClientId);
        }

        if (sbClientSecret !== undefined) {
            queryParameters.set('sb-client-secret', <any>sbClientSecret);
        }

        if (randomState !== undefined) {
            queryParameters.set('randomState', <any>randomState);
        }

        if (invite !== undefined) {
            queryParameters.set('invite', <any>invite);
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
     * Interactive user authentication with external provider
     * Interactive user authentication with external authentication provider. If the authentication is successful, the client is redirected to /auth/provider/[providerId]/callback.
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     * @param sbClientSecret Your application client secret
     * @param invite Optional invite code
     */
    public authProviderProviderIdGetWithHttpInfo(sbClientId: string, directoryId: string, randomState: string, sbClientSecret?: string, invite?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/auth/provider/${providerId}'
                    .replace('${' + 'directoryId' + '}', String(directoryId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sbClientId' is not null or undefined
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling authProviderProviderIdGet.');
        }
        // verify required parameter 'directoryId' is not null or undefined
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling authProviderProviderIdGet.');
        }
        // verify required parameter 'randomState' is not null or undefined
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling authProviderProviderIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', <any>sbClientId);
        }

        if (sbClientSecret !== undefined) {
            queryParameters.set('sb-client-secret', <any>sbClientSecret);
        }

        if (randomState !== undefined) {
            queryParameters.set('randomState', <any>randomState);
        }

        if (invite !== undefined) {
            queryParameters.set('invite', <any>invite);
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
