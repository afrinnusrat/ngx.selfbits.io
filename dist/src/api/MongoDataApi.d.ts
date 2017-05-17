import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class MongoDataApi {
    protected http: Http;
    configuration: Configuration;
    defaultHeaders: Headers;
    constructor(http: Http, configuration: Configuration);
    /**
     *
     * Create multiple new data items
     * @param mongoModelId The mongo_model identifier
     * @param mongoDataItems Multiple data items
     */
    mModelsMongoModelIdDataBulkPost(mongoModelId: string, mongoDataItems: models.NewMongoDataArray, extraHttpRequestParams?: any): Observable<models.MongoDataArray>;
    /**
     *
     * Bulk delete existing mongo_models
     * @param mongoModelId The mongo_model identifier
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    mModelsMongoModelIdDataDelete(mongoModelId: string, filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     *
     * Returns data items paginated
     * @param mongoModelId The mongo_model identifier
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;somename\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    mModelsMongoModelIdDataGet(mongoModelId: string, pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.MongoDataPage>;
    /**
     *
     * delete existing mongo_model
     * @param mongoModelId The mongo_model identifier
     * @param id The data item identifier
     */
    mModelsMongoModelIdDataIdDelete(mongoModelId: string, id: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     *
     * Get one existing data item
     * @param mongoModelId The mongo_model identifier
     * @param id The data item identifier
     */
    mModelsMongoModelIdDataIdGet(mongoModelId: string, id: string, extraHttpRequestParams?: any): Observable<models.MongoData>;
    /**
     *
     * update existing data item
     * @param mongoModelId The mongo_model identifier
     * @param id The data item identifier
     * @param updatedMongoData updated mongo_data
     */
    mModelsMongoModelIdDataIdPut(mongoModelId: string, id: string, updatedMongoData: models.MongoDataUpdate, extraHttpRequestParams?: any): Observable<models.MongoData>;
    /**
     *
     * Create new data document
     * @param mongoModelId The mongo_model identifier
     * @param mongoDataItem new data item
     */
    mModelsMongoModelIdDataPost(mongoModelId: string, mongoDataItem: models.NewMongoData, extraHttpRequestParams?: any): Observable<models.MongoData>;
    /**
     *
     * Bulk update existing data items
     * @param mongoModelId The mongo_model identifier
     * @param filter Mongoose filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param mongoDataBulkUpdate Use filter to find the data items and do a bulk update
     */
    mModelsMongoModelIdDataPut(mongoModelId: string, filter: string, mongoDataBulkUpdate: models.MongoDataBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    /**
     *
     * Create multiple new data items
     * @param mongoModelId The mongo_model identifier
     * @param mongoDataItems Multiple data items
     */
    mModelsMongoModelIdDataBulkPostWithHttpInfo(mongoModelId: string, mongoDataItems: models.NewMongoDataArray, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Bulk delete existing mongo_models
     * @param mongoModelId The mongo_model identifier
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    mModelsMongoModelIdDataDeleteWithHttpInfo(mongoModelId: string, filter: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Returns data items paginated
     * @param mongoModelId The mongo_model identifier
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;somename\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    mModelsMongoModelIdDataGetWithHttpInfo(mongoModelId: string, pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * delete existing mongo_model
     * @param mongoModelId The mongo_model identifier
     * @param id The data item identifier
     */
    mModelsMongoModelIdDataIdDeleteWithHttpInfo(mongoModelId: string, id: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Get one existing data item
     * @param mongoModelId The mongo_model identifier
     * @param id The data item identifier
     */
    mModelsMongoModelIdDataIdGetWithHttpInfo(mongoModelId: string, id: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * update existing data item
     * @param mongoModelId The mongo_model identifier
     * @param id The data item identifier
     * @param updatedMongoData updated mongo_data
     */
    mModelsMongoModelIdDataIdPutWithHttpInfo(mongoModelId: string, id: string, updatedMongoData: models.MongoDataUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Create new data document
     * @param mongoModelId The mongo_model identifier
     * @param mongoDataItem new data item
     */
    mModelsMongoModelIdDataPostWithHttpInfo(mongoModelId: string, mongoDataItem: models.NewMongoData, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Bulk update existing data items
     * @param mongoModelId The mongo_model identifier
     * @param filter Mongoose filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param mongoDataBulkUpdate Use filter to find the data items and do a bulk update
     */
    mModelsMongoModelIdDataPutWithHttpInfo(mongoModelId: string, filter: string, mongoDataBulkUpdate: models.MongoDataBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
}
