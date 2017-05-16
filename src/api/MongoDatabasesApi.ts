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
export class MongoDatabasesApi {
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
     * Create multiple new mongo_databases
     * @param mongoDatabases Multiple mongo_databases
     */
    public mDbBulkPost(mongoDatabases?: models.NewMongoDatabaseArray, extraHttpRequestParams?: any): Observable<models.MongoDatabaseArray> {
        return this.mDbBulkPostWithHttpInfo(mongoDatabases, extraHttpRequestParams)
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
     * Bulk delete existing mongo_databases
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    public mDbDelete(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse> {
        return this.mDbDeleteWithHttpInfo(filter, extraHttpRequestParams)
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
     * Returns mongo_databases
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;somename\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    public mDbGet(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.MongoDatabasePage> {
        return this.mDbGetWithHttpInfo(pageSize, pageNumber, filter, sort, select, extraHttpRequestParams)
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
     * delete existing mongo_database
     * @param mongoDatabaseId The mongo_database identifier
     */
    public mDbMongoDatabaseIdDelete(mongoDatabaseId: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.mDbMongoDatabaseIdDeleteWithHttpInfo(mongoDatabaseId, extraHttpRequestParams)
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
     * Get one existing mongo_database
     * @param mongoDatabaseId The mongo_database identifier
     */
    public mDbMongoDatabaseIdGet(mongoDatabaseId: string, extraHttpRequestParams?: any): Observable<models.MongoDatabase> {
        return this.mDbMongoDatabaseIdGetWithHttpInfo(mongoDatabaseId, extraHttpRequestParams)
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
     * update existing mongo_database
     * @param mongoDatabaseId The mongo database identifier
     * @param updatedMongoDatabase updated mongo_database
     */
    public mDbMongoDatabaseIdPut(mongoDatabaseId: string, updatedMongoDatabase: models.MongoDatabaseUpdate, extraHttpRequestParams?: any): Observable<models.MongoDatabase> {
        return this.mDbMongoDatabaseIdPutWithHttpInfo(mongoDatabaseId, updatedMongoDatabase, extraHttpRequestParams)
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
     * Test connection. If the connection attempt fails, information is provided in the payload with status code 200.
     * @param mongoDatabaseId The mongo_database identifier
     */
    public mDbMongoDatabaseIdTestPost(mongoDatabaseId: string, extraHttpRequestParams?: any): Observable<models.MongoDatabaseTestResponse> {
        return this.mDbMongoDatabaseIdTestPostWithHttpInfo(mongoDatabaseId, extraHttpRequestParams)
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
     * Create new mongo_database
     * @param mongoDatabase Your new mongo_database
     */
    public mDbPost(mongoDatabase?: models.NewMongoDatabase, extraHttpRequestParams?: any): Observable<models.MongoDatabase> {
        return this.mDbPostWithHttpInfo(mongoDatabase, extraHttpRequestParams)
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
     * Bulk update existing mongo_databases
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param mongoDatabaseBulkUpdate Use filter to find the mongo_databases and do a bulk update
     */
    public mDbPut(filter: string, mongoDatabaseBulkUpdate: models.MongoDatabaseBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse> {
        return this.mDbPutWithHttpInfo(filter, mongoDatabaseBulkUpdate, extraHttpRequestParams)
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
     * Create multiple new mongo_databases
     * @param mongoDatabases Multiple mongo_databases
     */
    public mDbBulkPostWithHttpInfo(mongoDatabases?: models.NewMongoDatabaseArray, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/m/db/bulk';

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
            body: mongoDatabases == null ? '' : JSON.stringify(mongoDatabases), // https://github.com/angular/angular/issues/10612
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
     * Bulk delete existing mongo_databases
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    public mDbDeleteWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/m/db';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'filter' is not null or undefined
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling mDbDelete.');
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
     * Returns mongo_databases
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;somename\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    public mDbGetWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/m/db';

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
     * delete existing mongo_database
     * @param mongoDatabaseId The mongo_database identifier
     */
    public mDbMongoDatabaseIdDeleteWithHttpInfo(mongoDatabaseId: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/m/db/${mongoDatabaseId}'
                    .replace('${' + 'mongoDatabaseId' + '}', String(mongoDatabaseId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'mongoDatabaseId' is not null or undefined
        if (mongoDatabaseId === null || mongoDatabaseId === undefined) {
            throw new Error('Required parameter mongoDatabaseId was null or undefined when calling mDbMongoDatabaseIdDelete.');
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
     * Get one existing mongo_database
     * @param mongoDatabaseId The mongo_database identifier
     */
    public mDbMongoDatabaseIdGetWithHttpInfo(mongoDatabaseId: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/m/db/${mongoDatabaseId}'
                    .replace('${' + 'mongoDatabaseId' + '}', String(mongoDatabaseId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'mongoDatabaseId' is not null or undefined
        if (mongoDatabaseId === null || mongoDatabaseId === undefined) {
            throw new Error('Required parameter mongoDatabaseId was null or undefined when calling mDbMongoDatabaseIdGet.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
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
     * update existing mongo_database
     * @param mongoDatabaseId The mongo database identifier
     * @param updatedMongoDatabase updated mongo_database
     */
    public mDbMongoDatabaseIdPutWithHttpInfo(mongoDatabaseId: string, updatedMongoDatabase: models.MongoDatabaseUpdate, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/m/db/${mongoDatabaseId}'
                    .replace('${' + 'mongoDatabaseId' + '}', String(mongoDatabaseId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'mongoDatabaseId' is not null or undefined
        if (mongoDatabaseId === null || mongoDatabaseId === undefined) {
            throw new Error('Required parameter mongoDatabaseId was null or undefined when calling mDbMongoDatabaseIdPut.');
        }
        // verify required parameter 'updatedMongoDatabase' is not null or undefined
        if (updatedMongoDatabase === null || updatedMongoDatabase === undefined) {
            throw new Error('Required parameter updatedMongoDatabase was null or undefined when calling mDbMongoDatabaseIdPut.');
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
            body: updatedMongoDatabase == null ? '' : JSON.stringify(updatedMongoDatabase), // https://github.com/angular/angular/issues/10612
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
     * Test connection. If the connection attempt fails, information is provided in the payload with status code 200.
     * @param mongoDatabaseId The mongo_database identifier
     */
    public mDbMongoDatabaseIdTestPostWithHttpInfo(mongoDatabaseId: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/m/db/${mongoDatabaseId}/test'
                    .replace('${' + 'mongoDatabaseId' + '}', String(mongoDatabaseId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'mongoDatabaseId' is not null or undefined
        if (mongoDatabaseId === null || mongoDatabaseId === undefined) {
            throw new Error('Required parameter mongoDatabaseId was null or undefined when calling mDbMongoDatabaseIdTestPost.');
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
     * 
     * Create new mongo_database
     * @param mongoDatabase Your new mongo_database
     */
    public mDbPostWithHttpInfo(mongoDatabase?: models.NewMongoDatabase, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/m/db';

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
            body: mongoDatabase == null ? '' : JSON.stringify(mongoDatabase), // https://github.com/angular/angular/issues/10612
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
     * Bulk update existing mongo_databases
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param mongoDatabaseBulkUpdate Use filter to find the mongo_databases and do a bulk update
     */
    public mDbPutWithHttpInfo(filter: string, mongoDatabaseBulkUpdate: models.MongoDatabaseBulkUpdate, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.configuration.basePath + '/m/db';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'filter' is not null or undefined
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling mDbPut.');
        }
        // verify required parameter 'mongoDatabaseBulkUpdate' is not null or undefined
        if (mongoDatabaseBulkUpdate === null || mongoDatabaseBulkUpdate === undefined) {
            throw new Error('Required parameter mongoDatabaseBulkUpdate was null or undefined when calling mDbPut.');
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
            body: mongoDatabaseBulkUpdate == null ? '' : JSON.stringify(mongoDatabaseBulkUpdate), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}