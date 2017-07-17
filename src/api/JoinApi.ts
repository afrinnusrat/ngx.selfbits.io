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
export class JoinApi {
    public configuration: Configuration = new Configuration();
    public defaultHeaders: Headers = new Headers();
	public sbClientId: string = null;
	public sbClientSecret: string = null;

    constructor(protected http: Http, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
			this.sbClientId = this.configuration.sbClientId;
			this.sbClientSecret = this.configuration.sbClientSecret;
            this.defaultHeaders = new Headers({'Authorization': this.configuration.apiKey});
        }
    }

    /**
     * Join a specific organization
     * User join with specific organization. The login credentials will be copied from existing organization account credentials.
     * @param organizationId the organization of the new user
     * @param invite Optional invite code
     */
    public joinOrganization(organizationId: string, invite?: string, extraHttpRequestParams?: any): Observable<models.UserSignupResponse> {
        return this.joinOrganizationWithHttpInfo(organizationId, invite, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Join with specific organization and a specific directory
     * User join with specific organization and a specific directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password | 
     * @param organizationId the organization of the new user
     * @param directoryId the directory of the new user
     * @param userSignupRequest User signup request
     * @param invite Optional invite code
     */
    public joinOrganizationByDirectory(organizationId: string, directoryId: string, userSignupRequest: models.UserSignupRequest, invite?: string, extraHttpRequestParams?: any): Observable<models.UserSignupResponse> {
        return this.joinOrganizationByDirectoryWithHttpInfo(organizationId, directoryId, userSignupRequest, invite, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Signup with specific organization and directory that belongs to a specific provider
     * User join with specific organization and a directory that belongs to a specific provider. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password | 
     * @param organizationId the organization of the new user
     * @param providerId the target provider
     * @param userSignupRequest User signup request
     * @param invite Optional invite code
     */
    public joinOrganizationByProvider(organizationId: string, providerId: string, userSignupRequest: models.UserSignupRequest, invite?: string, extraHttpRequestParams?: any): Observable<models.UserSignupResponse> {
        return this.joinOrganizationByProviderWithHttpInfo(organizationId, providerId, userSignupRequest, invite, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Join a specific organization
     * User join with specific organization. The login credentials will be copied from existing organization account credentials.
     * @param organizationId the organization of the new user
     * @param invite Optional invite code
     */
    public joinOrganizationWithHttpInfo(organizationId: string, invite?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/join/organization/${organizationId}'
                    .replace('${' + 'organizationId' + '}', String(organizationId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling joinOrganization.');
        }
        if (invite !== undefined) {
            queryParameters.set('invite', <any>invite);
        }

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
     * Join with specific organization and a specific directory
     * User join with specific organization and a specific directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password | 
     * @param organizationId the organization of the new user
     * @param directoryId the directory of the new user
     * @param userSignupRequest User signup request
     * @param invite Optional invite code
     */
    public joinOrganizationByDirectoryWithHttpInfo(organizationId: string, directoryId: string, userSignupRequest: models.UserSignupRequest, invite?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/join/organization/${organizationId}/directory/${directoryId}'
                    .replace('${' + 'organizationId' + '}', String(organizationId))
                    .replace('${' + 'directoryId' + '}', String(directoryId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling joinOrganizationByDirectory.');
        }
        // verify required parameter 'directoryId' is not null or undefined
        if (directoryId === null || directoryId === undefined) {
            throw new Error('Required parameter directoryId was null or undefined when calling joinOrganizationByDirectory.');
        }
        // verify required parameter 'userSignupRequest' is not null or undefined
        if (userSignupRequest === null || userSignupRequest === undefined) {
            throw new Error('Required parameter userSignupRequest was null or undefined when calling joinOrganizationByDirectory.');
        }
        if (invite !== undefined) {
            queryParameters.set('invite', <any>invite);
        }

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
            body: userSignupRequest == null ? '' : JSON.stringify(userSignupRequest), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Signup with specific organization and directory that belongs to a specific provider
     * User join with specific organization and a directory that belongs to a specific provider. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password | 
     * @param organizationId the organization of the new user
     * @param providerId the target provider
     * @param userSignupRequest User signup request
     * @param invite Optional invite code
     */
    public joinOrganizationByProviderWithHttpInfo(organizationId: string, providerId: string, userSignupRequest: models.UserSignupRequest, invite?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/join/organization/${organizationId}/provider/${providerId}'
                    .replace('${' + 'organizationId' + '}', String(organizationId))
                    .replace('${' + 'providerId' + '}', String(providerId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling joinOrganizationByProvider.');
        }
        // verify required parameter 'providerId' is not null or undefined
        if (providerId === null || providerId === undefined) {
            throw new Error('Required parameter providerId was null or undefined when calling joinOrganizationByProvider.');
        }
        // verify required parameter 'userSignupRequest' is not null or undefined
        if (userSignupRequest === null || userSignupRequest === undefined) {
            throw new Error('Required parameter userSignupRequest was null or undefined when calling joinOrganizationByProvider.');
        }
        if (invite !== undefined) {
            queryParameters.set('invite', <any>invite);
        }

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
            body: userSignupRequest == null ? '' : JSON.stringify(userSignupRequest), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
