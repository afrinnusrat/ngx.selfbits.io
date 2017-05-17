import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class MongoDatabasesApi {
    protected http: Http;
    configuration: Configuration;
    defaultHeaders: Headers;
    constructor(http: Http, configuration: Configuration);
    /**
     *
     * Create multiple new mongo_databases
     * @param mongoDatabases Multiple mongo_databases
     */
    mDbBulkPost(mongoDatabases?: models.NewMongoDatabaseArray, extraHttpRequestParams?: any): Observable<models.MongoDatabaseArray>;
    /**
     *
     * Bulk delete existing mongo_databases
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    mDbDelete(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     *
     * Returns mongo_databases
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;somename\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    mDbGet(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.MongoDatabasePage>;
    /**
     *
     * delete existing mongo_database
     * @param mongoDatabaseId The mongo_database identifier
     */
    mDbMongoDatabaseIdDelete(mongoDatabaseId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * Get one existing mongo_database
     * @param mongoDatabaseId The mongo_database identifier
     */
    mDbMongoDatabaseIdGet(mongoDatabaseId: string, extraHttpRequestParams?: any): Observable<models.MongoDatabase>;
    /**
     *
     * update existing mongo_database
     * @param mongoDatabaseId The mongo database identifier
     * @param updatedMongoDatabase updated mongo_database
     */
    mDbMongoDatabaseIdPut(mongoDatabaseId: string, updatedMongoDatabase: models.MongoDatabaseUpdate, extraHttpRequestParams?: any): Observable<models.MongoDatabase>;
    /**
     *
     * Test connection. If the connection attempt fails, information is provided in the payload with status code 200.
     * @param mongoDatabaseId The mongo_database identifier
     */
    mDbMongoDatabaseIdTestPost(mongoDatabaseId: string, extraHttpRequestParams?: any): Observable<models.MongoDatabaseTestResponse>;
    /**
     *
     * Create new mongo_database
     * @param mongoDatabase Your new mongo_database
     */
    mDbPost(mongoDatabase?: models.NewMongoDatabase, extraHttpRequestParams?: any): Observable<models.MongoDatabase>;
    /**
     *
     * Bulk update existing mongo_databases
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param mongoDatabaseBulkUpdate Use filter to find the mongo_databases and do a bulk update
     */
    mDbPut(filter: string, mongoDatabaseBulkUpdate: models.MongoDatabaseBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    /**
     *
     * Create multiple new mongo_databases
     * @param mongoDatabases Multiple mongo_databases
     */
    mDbBulkPostWithHttpInfo(mongoDatabases?: models.NewMongoDatabaseArray, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Bulk delete existing mongo_databases
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    mDbDeleteWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Returns mongo_databases
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;somename\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    mDbGetWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * delete existing mongo_database
     * @param mongoDatabaseId The mongo_database identifier
     */
    mDbMongoDatabaseIdDeleteWithHttpInfo(mongoDatabaseId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Get one existing mongo_database
     * @param mongoDatabaseId The mongo_database identifier
     */
    mDbMongoDatabaseIdGetWithHttpInfo(mongoDatabaseId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * update existing mongo_database
     * @param mongoDatabaseId The mongo database identifier
     * @param updatedMongoDatabase updated mongo_database
     */
    mDbMongoDatabaseIdPutWithHttpInfo(mongoDatabaseId: string, updatedMongoDatabase: models.MongoDatabaseUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Test connection. If the connection attempt fails, information is provided in the payload with status code 200.
     * @param mongoDatabaseId The mongo_database identifier
     */
    mDbMongoDatabaseIdTestPostWithHttpInfo(mongoDatabaseId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Create new mongo_database
     * @param mongoDatabase Your new mongo_database
     */
    mDbPostWithHttpInfo(mongoDatabase?: models.NewMongoDatabase, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Bulk update existing mongo_databases
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param mongoDatabaseBulkUpdate Use filter to find the mongo_databases and do a bulk update
     */
    mDbPutWithHttpInfo(filter: string, mongoDatabaseBulkUpdate: models.MongoDatabaseBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
}
