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
export class InteractiveSignupApi {
    public configuration: Configuration = new Configuration();
    public defaultHeaders: Headers = new Headers();

    constructor(protected http: Http, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
            this.defaultHeaders = new Headers({'Authorization': this.configuration.apiKey});
        }
    }

    /**
     * Interactive user signup with a specific directory
     * Interactive user signup with default directory
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    public signupDirectoryDirectoryIdGet(sbClientId: string, directoryId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.signupDirectoryDirectoryIdGetWithHttpInfo(sbClientId, directoryId, randomState, invite, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Interactive user signup with default organization and its default directory
     * Interactive user signup with default organization and its default directory
     * @param sbClientId Your application client id
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    public signupGet(sbClientId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.signupGetWithHttpInfo(sbClientId, randomState, invite, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Interactive user signup with specific organization and a specific directory
     * Interactive user signup with specific organization and a specific directory
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    public signupOrganizationOrganizationIdDirectoryDirectoryIdGet(sbClientId: string, organizationId: string, directoryId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.signupOrganizationOrganizationIdDirectoryDirectoryIdGetWithHttpInfo(sbClientId, organizationId, directoryId, randomState, invite, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Interactive user signup with specified organization and its default directory
     * Interactive user signup with specified organization and its default directory
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    public signupOrganizationOrganizationIdGet(sbClientId: string, organizationId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.signupOrganizationOrganizationIdGetWithHttpInfo(sbClientId, organizationId, randomState, invite, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Interactive user signup with specific organization and specific provider
     * Interactive user signup with specific organization and specific provider
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param providerId the provider of the user directory
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    public signupOrganizationOrganizationIdProviderProviderIdGet(sbClientId: string, organizationId: string, providerId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.signupOrganizationOrganizationIdProviderProviderIdGetWithHttpInfo(sbClientId, organizationId, providerId, randomState, invite, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Interactive user signup with default organization and a directory depending on specified provider
     * Interactive user signup with default organization and a directory depending on specified provider
     * @param sbClientId Your application client id
     * @param providerId the provider of the user directory
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    public signupProviderProviderIdGet(sbClientId: string, providerId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.signupProviderProviderIdGetWithHttpInfo(sbClientId, providerId, randomState, invite, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Interactive user signup with a specific directory
     * Interactive user signup with default directory
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    public signupDirectoryDirectoryIdGetWithHttpInfo(sbClientId: string, directoryId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/signup/directory/${directoryId}'
                    .replace('${' + 'directoryId' + '}', String(directoryId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sbClientId' is not null or undefined
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupDirectoryDirectoryIdGet.');
        }
        // verify required parameter 'directoryId' is not null or undefined
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling signupDirectoryDirectoryIdGet.');
        }
        // verify required parameter 'randomState' is not null or undefined
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling signupDirectoryDirectoryIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', <any>sbClientId);
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
     * Interactive user signup with default organization and its default directory
     * Interactive user signup with default organization and its default directory
     * @param sbClientId Your application client id
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    public signupGetWithHttpInfo(sbClientId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/signup';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sbClientId' is not null or undefined
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupGet.');
        }
        // verify required parameter 'randomState' is not null or undefined
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling signupGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', <any>sbClientId);
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
     * Interactive user signup with specific organization and a specific directory
     * Interactive user signup with specific organization and a specific directory
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    public signupOrganizationOrganizationIdDirectoryDirectoryIdGetWithHttpInfo(sbClientId: string, organizationId: string, directoryId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/signup/organization/${organizationId}/directory/${directoryId}'
                    .replace('${' + 'organizationId' + '}', String(organizationId))
                    .replace('${' + 'directoryId' + '}', String(directoryId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sbClientId' is not null or undefined
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupOrganizationOrganizationIdDirectoryDirectoryIdGet.');
        }
        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling signupOrganizationOrganizationIdDirectoryDirectoryIdGet.');
        }
        // verify required parameter 'directoryId' is not null or undefined
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling signupOrganizationOrganizationIdDirectoryDirectoryIdGet.');
        }
        // verify required parameter 'randomState' is not null or undefined
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling signupOrganizationOrganizationIdDirectoryDirectoryIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', <any>sbClientId);
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
     * Interactive user signup with specified organization and its default directory
     * Interactive user signup with specified organization and its default directory
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    public signupOrganizationOrganizationIdGetWithHttpInfo(sbClientId: string, organizationId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/signup/organization/${organizationId}'
                    .replace('${' + 'organizationId' + '}', String(organizationId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sbClientId' is not null or undefined
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupOrganizationOrganizationIdGet.');
        }
        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling signupOrganizationOrganizationIdGet.');
        }
        // verify required parameter 'randomState' is not null or undefined
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling signupOrganizationOrganizationIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', <any>sbClientId);
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
     * Interactive user signup with specific organization and specific provider
     * Interactive user signup with specific organization and specific provider
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param providerId the provider of the user directory
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    public signupOrganizationOrganizationIdProviderProviderIdGetWithHttpInfo(sbClientId: string, organizationId: string, providerId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/signup/organization/${organizationId}/provider/${providerId}'
                    .replace('${' + 'organizationId' + '}', String(organizationId))
                    .replace('${' + 'providerId' + '}', String(providerId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sbClientId' is not null or undefined
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupOrganizationOrganizationIdProviderProviderIdGet.');
        }
        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling signupOrganizationOrganizationIdProviderProviderIdGet.');
        }
        // verify required parameter 'providerId' is not null or undefined
        if (providerId === null || providerId === undefined) {
            throw new Error('Required parameter providerId was null or undefined when calling signupOrganizationOrganizationIdProviderProviderIdGet.');
        }
        // verify required parameter 'randomState' is not null or undefined
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling signupOrganizationOrganizationIdProviderProviderIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', <any>sbClientId);
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
     * Interactive user signup with default organization and a directory depending on specified provider
     * Interactive user signup with default organization and a directory depending on specified provider
     * @param sbClientId Your application client id
     * @param providerId the provider of the user directory
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    public signupProviderProviderIdGetWithHttpInfo(sbClientId: string, providerId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/signup/provider/${providerId}'
                    .replace('${' + 'providerId' + '}', String(providerId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sbClientId' is not null or undefined
        if (sbClientId === null || sbClientId === undefined) {
            throw new Error('Required parameter sbClientId was null or undefined when calling signupProviderProviderIdGet.');
        }
        // verify required parameter 'providerId' is not null or undefined
        if (providerId === null || providerId === undefined) {
            throw new Error('Required parameter providerId was null or undefined when calling signupProviderProviderIdGet.');
        }
        // verify required parameter 'randomState' is not null or undefined
        if (randomState === null || randomState === undefined) {
            throw new Error('Required parameter randomState was null or undefined when calling signupProviderProviderIdGet.');
        }
        if (sbClientId !== undefined) {
            queryParameters.set('sb-client-id', <any>sbClientId);
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
