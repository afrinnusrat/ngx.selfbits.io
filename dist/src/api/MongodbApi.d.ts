import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class MongodbApi {
    protected http: Http;
    configuration: Configuration;
    defaultHeaders: Headers;
    sbClientId: string;
    sbClientSecret: string;
    constructor(http: Http, configuration: Configuration);
    /**
     * Create multiple new data items
     * Create multiple new data items
     * @param mongoModelId The mongo_model identifier
     * @param mongoDataItems Multiple data items
     */
    createManyByModel(mongoModelId: string, mongoDataItems: models.NewMongoDataArray, extraHttpRequestParams?: any): Observable<models.MongoDataArray>;
    /**
     * Create new data item
     * Create new data item
     * @param mongoModelId The model identifier
     * @param mongoDataItem new data item
     */
    createOneByModel(mongoModelId: string, mongoDataItem: models.NewMongoData, extraHttpRequestParams?: any): Observable<models.MongoData>;
    /**
     * Bulk delete existing data items
     * Bulk delete existing data items
     * @param mongoModelId The mongo_model identifier
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    deleteManyByModel(mongoModelId: string, filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     * delete existing data item
     * delete existing data item
     * @param mongoModelId The mongo_model identifier
     * @param id The data item identifier
     */
    deleteOneByModel(mongoModelId: string, id: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     * Returns data items paginated
     * Returns data items paginated
     * @param mongoModelId The mongo_model identifier
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;somename\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    queryByModel(mongoModelId: string, pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.MongoDataPage>;
    /**
     * Get one existing data item
     * Get one existing data item
     * @param mongoModelId The mongo_model identifier
     * @param id The data item identifier
     */
    readOneByModel(mongoModelId: string, id: string, extraHttpRequestParams?: any): Observable<models.MongoData>;
    /**
     * Bulk update existing data items
     * Bulk update existing data items
     * @param mongoModelId The mongo_model identifier
     * @param filter Mongoose filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param mongoDataBulkUpdate Use filter to find the data items and do a bulk update
     */
    updateManyByModel(mongoModelId: string, filter: string, mongoDataBulkUpdate: models.MongoDataBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    /**
     * update existing data item
     * update existing data item
     * @param mongoModelId The mongo_model identifier
     * @param id The data item identifier
     * @param updatedMongoData updated mongo_data
     */
    updateOneByModel(mongoModelId: string, id: string, updatedMongoData: models.MongoDataUpdate, extraHttpRequestParams?: any): Observable<models.MongoData>;
    /**
     * Create multiple new data items
     * Create multiple new data items
     * @param mongoModelId The mongo_model identifier
     * @param mongoDataItems Multiple data items
     */
    createManyByModelWithHttpInfo(mongoModelId: string, mongoDataItems: models.NewMongoDataArray, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create new data item
     * Create new data item
     * @param mongoModelId The model identifier
     * @param mongoDataItem new data item
     */
    createOneByModelWithHttpInfo(mongoModelId: string, mongoDataItem: models.NewMongoData, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Bulk delete existing data items
     * Bulk delete existing data items
     * @param mongoModelId The mongo_model identifier
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    deleteManyByModelWithHttpInfo(mongoModelId: string, filter: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * delete existing data item
     * delete existing data item
     * @param mongoModelId The mongo_model identifier
     * @param id The data item identifier
     */
    deleteOneByModelWithHttpInfo(mongoModelId: string, id: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Returns data items paginated
     * Returns data items paginated
     * @param mongoModelId The mongo_model identifier
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;somename\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    queryByModelWithHttpInfo(mongoModelId: string, pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get one existing data item
     * Get one existing data item
     * @param mongoModelId The mongo_model identifier
     * @param id The data item identifier
     */
    readOneByModelWithHttpInfo(mongoModelId: string, id: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Bulk update existing data items
     * Bulk update existing data items
     * @param mongoModelId The mongo_model identifier
     * @param filter Mongoose filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param mongoDataBulkUpdate Use filter to find the data items and do a bulk update
     */
    updateManyByModelWithHttpInfo(mongoModelId: string, filter: string, mongoDataBulkUpdate: models.MongoDataBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * update existing data item
     * update existing data item
     * @param mongoModelId The mongo_model identifier
     * @param id The data item identifier
     * @param updatedMongoData updated mongo_data
     */
    updateOneByModelWithHttpInfo(mongoModelId: string, id: string, updatedMongoData: models.MongoDataUpdate, extraHttpRequestParams?: any): Observable<Response>;
}
