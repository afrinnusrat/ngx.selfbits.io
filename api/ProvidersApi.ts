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
export class ProvidersApi {
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
     * Create multiple new providers
     * @param providers Multiple providers
     */
    public providersBulkPost(providers?: models.NewProviderArray, extraHttpRequestParams?: any): Observable<models.ProviderArray> {
        return this.providersBulkPostWithHttpInfo(providers, extraHttpRequestParams)
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
     * Bulk delete existing providers
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    public providersDelete(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse> {
        return this.providersDeleteWithHttpInfo(filter, extraHttpRequestParams)
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
     * Returns providers
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    public providersGet(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.ProviderPage> {
        return this.providersGetWithHttpInfo(pageSize, pageNumber, filter, sort, select, extraHttpRequestParams)
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
     * Create new provider
     * @param provider Your new provider
     */
    public providersPost(provider?: models.NewProvider, extraHttpRequestParams?: any): Observable<models.Provider> {
        return this.providersPostWithHttpInfo(provider, extraHttpRequestParams)
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
     * delete existing provider
     * @param providerId The provider identifier
     */
    public providersProviderIdDelete(providerId: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.providersProviderIdDeleteWithHttpInfo(providerId, extraHttpRequestParams)
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
     * Get one existing provider
     * @param providerId The provider identifier
     */
    public providersProviderIdGet(providerId: string, extraHttpRequestParams?: any): Observable<models.Provider> {
        return this.providersProviderIdGetWithHttpInfo(providerId, extraHttpRequestParams)
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
     * update existing provider
     * @param providerId The user identifier
     * @param updatedProvider updated provider
     */
    public providersProviderIdPut(providerId: string, updatedProvider: models.ProviderUpdate, extraHttpRequestParams?: any): Observable<models.Provider> {
        return this.providersProviderIdPutWithHttpInfo(providerId, updatedProvider, extraHttpRequestParams)
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
     * @param providerBulkUpdate Use filter to find the providers and do a bulk update
     */
    public providersPut(filter: string, providerBulkUpdate: models.ProviderBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse> {
        return this.providersPutWithHttpInfo(filter, providerBulkUpdate, extraHttpRequestParams)
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
     * Create multiple new providers
     * @param providers Multiple providers
     */
    public providersBulkPostWithHttpInfo(providers?: models.NewProviderArray, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/providers/bulk';

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
            body: providers == null ? '' : JSON.stringify(providers), // https://github.com/angular/angular/issues/10612
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
     * Bulk delete existing providers
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    public providersDeleteWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/providers';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'filter' is not null or undefined
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling providersDelete.');
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
     * Returns providers
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    public providersGetWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/providers';

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
     * Create new provider
     * @param provider Your new provider
     */
    public providersPostWithHttpInfo(provider?: models.NewProvider, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/providers';

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
            body: provider == null ? '' : JSON.stringify(provider), // https://github.com/angular/angular/issues/10612
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
     * delete existing provider
     * @param providerId The provider identifier
     */
    public providersProviderIdDeleteWithHttpInfo(providerId: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/providers/${providerId}'
                    .replace('${' + 'providerId' + '}', String(providerId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'providerId' is not null or undefined
        if (providerId === null || providerId === undefined) {
            throw new Error('Required parameter providerId was null or undefined when calling providersProviderIdDelete.');
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
     * Get one existing provider
     * @param providerId The provider identifier
     */
    public providersProviderIdGetWithHttpInfo(providerId: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/providers/${providerId}'
                    .replace('${' + 'providerId' + '}', String(providerId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'providerId' is not null or undefined
        if (providerId === null || providerId === undefined) {
            throw new Error('Required parameter providerId was null or undefined when calling providersProviderIdGet.');
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
     * update existing provider
     * @param providerId The user identifier
     * @param updatedProvider updated provider
     */
    public providersProviderIdPutWithHttpInfo(providerId: string, updatedProvider: models.ProviderUpdate, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/providers/${providerId}'
                    .replace('${' + 'providerId' + '}', String(providerId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'providerId' is not null or undefined
        if (providerId === null || providerId === undefined) {
            throw new Error('Required parameter providerId was null or undefined when calling providersProviderIdPut.');
        }
        // verify required parameter 'updatedProvider' is not null or undefined
        if (updatedProvider === null || updatedProvider === undefined) {
            throw new Error('Required parameter updatedProvider was null or undefined when calling providersProviderIdPut.');
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
            body: updatedProvider == null ? '' : JSON.stringify(updatedProvider), // https://github.com/angular/angular/issues/10612
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
     * @param providerBulkUpdate Use filter to find the providers and do a bulk update
     */
    public providersPutWithHttpInfo(filter: string, providerBulkUpdate: models.ProviderBulkUpdate, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/providers';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'filter' is not null or undefined
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling providersPut.');
        }
        // verify required parameter 'providerBulkUpdate' is not null or undefined
        if (providerBulkUpdate === null || providerBulkUpdate === undefined) {
            throw new Error('Required parameter providerBulkUpdate was null or undefined when calling providersPut.');
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
            body: providerBulkUpdate == null ? '' : JSON.stringify(providerBulkUpdate), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
