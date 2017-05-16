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
export class PasswordResetApi {
    public configuration: Configuration = new Configuration();
    public defaultHeaders: Headers = new Headers();

    constructor(protected http: Http, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
            this.defaultHeaders = new Headers({'Authorization': this.configuration.apiKey});
        }
    }

    /**
     * password reset
     * reset the password of a user
     * @param resetPasswordRequest The password reset request
     */
    public passwordResetPost(resetPasswordRequest: models.ResetPasswordRequest, extraHttpRequestParams?: any): Observable<models.ResetPasswordResponse> {
        return this.passwordResetPostWithHttpInfo(resetPasswordRequest, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * trigger password reset by email
     * request an email to reset a password of a user
     * @param sendPasswordResetEmailRequest accountId (email or username) of your user
     */
    public triggerPasswordReset(sendPasswordResetEmailRequest: models.SendPasswordResetEmailRequest, extraHttpRequestParams?: any): Observable<models.SendPasswordResetEmailResponse> {
        return this.triggerPasswordResetWithHttpInfo(sendPasswordResetEmailRequest, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * password reset
     * reset the password of a user
     * @param resetPasswordRequest The password reset request
     */
    public passwordResetPostWithHttpInfo(resetPasswordRequest: models.ResetPasswordRequest, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/password/reset';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'resetPasswordRequest' is not null or undefined
        if (resetPasswordRequest === null || resetPasswordRequest === undefined) {
            throw new Error('Required parameter resetPasswordRequest was null or undefined when calling passwordResetPost.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
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
            body: resetPasswordRequest == null ? '' : JSON.stringify(resetPasswordRequest), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * trigger password reset by email
     * request an email to reset a password of a user
     * @param sendPasswordResetEmailRequest accountId (email or username) of your user
     */
    public triggerPasswordResetWithHttpInfo(sendPasswordResetEmailRequest: models.SendPasswordResetEmailRequest, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/password/reset/trigger';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sendPasswordResetEmailRequest' is not null or undefined
        if (sendPasswordResetEmailRequest === null || sendPasswordResetEmailRequest === undefined) {
            throw new Error('Required parameter sendPasswordResetEmailRequest was null or undefined when calling triggerPasswordReset.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
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
            body: sendPasswordResetEmailRequest == null ? '' : JSON.stringify(sendPasswordResetEmailRequest), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
