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
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class InvitesApi {
    protected basePath = 'https://selfbits.apps.selfbits.io/api/v2/selfbits/apps/scp';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * 
     * Create multiple new invites
     * @param invites Multiple invites
     */
    public invitesBulkPost(invites?: models.NewInviteArray, extraHttpRequestParams?: any): Observable<models.InviteArray> {
        return this.invitesBulkPostWithHttpInfo(invites, extraHttpRequestParams)
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
     * Bulk delete existing invites
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    public invitesDelete(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse> {
        return this.invitesDeleteWithHttpInfo(filter, extraHttpRequestParams)
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
     * Returns invites
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;isPublic\&quot;: \&quot;true\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    public invitesGet(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.InvitePage> {
        return this.invitesGetWithHttpInfo(pageSize, pageNumber, filter, sort, select, extraHttpRequestParams)
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
     * delete existing invite
     * @param inviteId The invite identifier
     */
    public invitesInviteIdDelete(inviteId: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.invitesInviteIdDeleteWithHttpInfo(inviteId, extraHttpRequestParams)
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
     * Get one existing invite
     * @param inviteId The invite identifier
     */
    public invitesInviteIdGet(inviteId: string, extraHttpRequestParams?: any): Observable<models.Invite> {
        return this.invitesInviteIdGetWithHttpInfo(inviteId, extraHttpRequestParams)
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
     * update existing invite
     * @param inviteId The user identifier
     * @param updatedInvite updated invite
     */
    public invitesInviteIdPut(inviteId: string, updatedInvite: models.InviteUpdate, extraHttpRequestParams?: any): Observable<models.Invite> {
        return this.invitesInviteIdPutWithHttpInfo(inviteId, updatedInvite, extraHttpRequestParams)
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
     * Create new invite
     * @param invite Your new invite
     */
    public invitesPost(invite: models.NewInvite, extraHttpRequestParams?: any): Observable<models.Invite> {
        return this.invitesPostWithHttpInfo(invite, extraHttpRequestParams)
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
     * Bulk update existing users
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param inviteBulkUpdate Use filter to find the invites and do a bulk update
     */
    public invitesPut(filter: string, inviteBulkUpdate: models.InviteBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse> {
        return this.invitesPutWithHttpInfo(filter, inviteBulkUpdate, extraHttpRequestParams)
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
     * Create multiple new invites
     * @param invites Multiple invites
     */
    public invitesBulkPostWithHttpInfo(invites?: models.NewInviteArray, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/invites/bulk';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
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
            body: invites == null ? '' : JSON.stringify(invites), // https://github.com/angular/angular/issues/10612
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
     * Bulk delete existing invites
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    public invitesDeleteWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/invites';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'filter' is not null or undefined
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling invitesDelete.');
        }
        if (filter !== undefined) {
            queryParameters.set('filter', <any>filter);
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
            method: RequestMethod.Delete,
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
     * Returns invites
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;isPublic\&quot;: \&quot;true\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    public invitesGetWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/invites';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (pageSize !== undefined) {
            queryParameters.set('pageSize', <any>pageSize);
        }

        if (pageNumber !== undefined) {
            queryParameters.set('pageNumber', <any>pageNumber);
        }

        if (filter !== undefined) {
            queryParameters.set('filter', <any>filter);
        }

        if (sort !== undefined) {
            queryParameters.set('sort', <any>sort);
        }

        if (select !== undefined) {
            queryParameters.set('select', <any>select);
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
     * delete existing invite
     * @param inviteId The invite identifier
     */
    public invitesInviteIdDeleteWithHttpInfo(inviteId: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/invites/${inviteId}'
                    .replace('${' + 'inviteId' + '}', String(inviteId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'inviteId' is not null or undefined
        if (inviteId === null || inviteId === undefined) {
            throw new Error('Required parameter inviteId was null or undefined when calling invitesInviteIdDelete.');
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
            method: RequestMethod.Delete,
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
     * Get one existing invite
     * @param inviteId The invite identifier
     */
    public invitesInviteIdGetWithHttpInfo(inviteId: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/invites/${inviteId}'
                    .replace('${' + 'inviteId' + '}', String(inviteId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'inviteId' is not null or undefined
        if (inviteId === null || inviteId === undefined) {
            throw new Error('Required parameter inviteId was null or undefined when calling invitesInviteIdGet.');
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
     * update existing invite
     * @param inviteId The user identifier
     * @param updatedInvite updated invite
     */
    public invitesInviteIdPutWithHttpInfo(inviteId: string, updatedInvite: models.InviteUpdate, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/invites/${inviteId}'
                    .replace('${' + 'inviteId' + '}', String(inviteId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'inviteId' is not null or undefined
        if (inviteId === null || inviteId === undefined) {
            throw new Error('Required parameter inviteId was null or undefined when calling invitesInviteIdPut.');
        }
        // verify required parameter 'updatedInvite' is not null or undefined
        if (updatedInvite === null || updatedInvite === undefined) {
            throw new Error('Required parameter updatedInvite was null or undefined when calling invitesInviteIdPut.');
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
            method: RequestMethod.Put,
            headers: headers,
            body: updatedInvite == null ? '' : JSON.stringify(updatedInvite), // https://github.com/angular/angular/issues/10612
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
     * Create new invite
     * @param invite Your new invite
     */
    public invitesPostWithHttpInfo(invite: models.NewInvite, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/invites';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'invite' is not null or undefined
        if (invite === null || invite === undefined) {
            throw new Error('Required parameter invite was null or undefined when calling invitesPost.');
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
            body: invite == null ? '' : JSON.stringify(invite), // https://github.com/angular/angular/issues/10612
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
     * Bulk update existing users
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param inviteBulkUpdate Use filter to find the invites and do a bulk update
     */
    public invitesPutWithHttpInfo(filter: string, inviteBulkUpdate: models.InviteBulkUpdate, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/invites';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'filter' is not null or undefined
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling invitesPut.');
        }
        // verify required parameter 'inviteBulkUpdate' is not null or undefined
        if (inviteBulkUpdate === null || inviteBulkUpdate === undefined) {
            throw new Error('Required parameter inviteBulkUpdate was null or undefined when calling invitesPut.');
        }
        if (filter !== undefined) {
            queryParameters.set('filter', <any>filter);
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
            method: RequestMethod.Put,
            headers: headers,
            body: inviteBulkUpdate == null ? '' : JSON.stringify(inviteBulkUpdate), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
