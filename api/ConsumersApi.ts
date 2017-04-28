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
export class ConsumersApi {
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
     * Create multiple new consumers
     * @param consumers Multiple consumers
     */
    public consumersBulkPost(consumers?: models.NewConsumerArray, extraHttpRequestParams?: any): Observable<models.ConsumerArray> {
        return this.consumersBulkPostWithHttpInfo(consumers, extraHttpRequestParams)
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
     * delete existing consumer
     * @param consumerId The consumer identifier
     */
    public consumersConsumerIdDelete(consumerId: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.consumersConsumerIdDeleteWithHttpInfo(consumerId, extraHttpRequestParams)
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
     * Get one existing consumer
     * @param consumerId The consumer identifier
     */
    public consumersConsumerIdGet(consumerId: string, extraHttpRequestParams?: any): Observable<models.Consumer> {
        return this.consumersConsumerIdGetWithHttpInfo(consumerId, extraHttpRequestParams)
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
     * update existing consumer
     * @param consumerId The user identifier
     * @param updatedConsumer updated consumer
     */
    public consumersConsumerIdPut(consumerId: string, updatedConsumer: models.ConsumerUpdate, extraHttpRequestParams?: any): Observable<models.Consumer> {
        return this.consumersConsumerIdPutWithHttpInfo(consumerId, updatedConsumer, extraHttpRequestParams)
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
     * Bulk delete existing consumers
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    public consumersDelete(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse> {
        return this.consumersDeleteWithHttpInfo(filter, extraHttpRequestParams)
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
     * Returns consumers
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    public consumersGet(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.ConsumerPage> {
        return this.consumersGetWithHttpInfo(pageSize, pageNumber, filter, sort, select, extraHttpRequestParams)
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
     * Create new consumer
     * @param consumer Your new consumer
     */
    public consumersPost(consumer?: models.NewConsumer, extraHttpRequestParams?: any): Observable<models.Consumer> {
        return this.consumersPostWithHttpInfo(consumer, extraHttpRequestParams)
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
     * Bulk update existing consumers
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param consumerBulkUpdate Use filter to find the consumers and do a bulk update
     */
    public consumersPut(filter: string, consumerBulkUpdate: models.ConsumerBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse> {
        return this.consumersPutWithHttpInfo(filter, consumerBulkUpdate, extraHttpRequestParams)
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
     * Create multiple new consumers
     * @param consumers Multiple consumers
     */
    public consumersBulkPostWithHttpInfo(consumers?: models.NewConsumerArray, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/consumers/bulk';

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
            body: consumers == null ? '' : JSON.stringify(consumers), // https://github.com/angular/angular/issues/10612
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
     * delete existing consumer
     * @param consumerId The consumer identifier
     */
    public consumersConsumerIdDeleteWithHttpInfo(consumerId: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/consumers/${consumerId}'
                    .replace('${' + 'consumerId' + '}', String(consumerId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'consumerId' is not null or undefined
        if (consumerId === null || consumerId === undefined) {
            throw new Error('Required parameter consumerId was null or undefined when calling consumersConsumerIdDelete.');
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
     * Get one existing consumer
     * @param consumerId The consumer identifier
     */
    public consumersConsumerIdGetWithHttpInfo(consumerId: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/consumers/${consumerId}'
                    .replace('${' + 'consumerId' + '}', String(consumerId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'consumerId' is not null or undefined
        if (consumerId === null || consumerId === undefined) {
            throw new Error('Required parameter consumerId was null or undefined when calling consumersConsumerIdGet.');
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
     * update existing consumer
     * @param consumerId The user identifier
     * @param updatedConsumer updated consumer
     */
    public consumersConsumerIdPutWithHttpInfo(consumerId: string, updatedConsumer: models.ConsumerUpdate, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/consumers/${consumerId}'
                    .replace('${' + 'consumerId' + '}', String(consumerId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'consumerId' is not null or undefined
        if (consumerId === null || consumerId === undefined) {
            throw new Error('Required parameter consumerId was null or undefined when calling consumersConsumerIdPut.');
        }
        // verify required parameter 'updatedConsumer' is not null or undefined
        if (updatedConsumer === null || updatedConsumer === undefined) {
            throw new Error('Required parameter updatedConsumer was null or undefined when calling consumersConsumerIdPut.');
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
            body: updatedConsumer == null ? '' : JSON.stringify(updatedConsumer), // https://github.com/angular/angular/issues/10612
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
     * Bulk delete existing consumers
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    public consumersDeleteWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/consumers';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'filter' is not null or undefined
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling consumersDelete.');
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
     * Returns consumers
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    public consumersGetWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/consumers';

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
     * Create new consumer
     * @param consumer Your new consumer
     */
    public consumersPostWithHttpInfo(consumer?: models.NewConsumer, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/consumers';

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
            body: consumer == null ? '' : JSON.stringify(consumer), // https://github.com/angular/angular/issues/10612
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
     * Bulk update existing consumers
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param consumerBulkUpdate Use filter to find the consumers and do a bulk update
     */
    public consumersPutWithHttpInfo(filter: string, consumerBulkUpdate: models.ConsumerBulkUpdate, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/consumers';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'filter' is not null or undefined
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling consumersPut.');
        }
        // verify required parameter 'consumerBulkUpdate' is not null or undefined
        if (consumerBulkUpdate === null || consumerBulkUpdate === undefined) {
            throw new Error('Required parameter consumerBulkUpdate was null or undefined when calling consumersPut.');
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
            body: consumerBulkUpdate == null ? '' : JSON.stringify(consumerBulkUpdate), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
