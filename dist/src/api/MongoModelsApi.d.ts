import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class MongoModelsApi {
    protected http: Http;
    configuration: Configuration;
    defaultHeaders: Headers;
    constructor(http: Http, configuration: Configuration);
    /**
     *
     * Create multiple new mongo_models
     * @param mongoModels Multiple mongo_models
     */
    mModelsBulkPost(mongoModels?: models.NewMongoModelArray, extraHttpRequestParams?: any): Observable<models.MongoModelArray>;
    /**
     *
     * Bulk delete existing mongo_models
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    mModelsDelete(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     *
     * Returns mongo_models
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;somename\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    mModelsGet(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.MongoModelPage>;
    /**
     *
     * delete existing mongo_model
     * @param mongoModelId The mongo_model identifier
     */
    mModelsMongoModelIdDelete(mongoModelId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * Get one existing mongo_model
     * @param mongoModelId The mongo_model identifier
     */
    mModelsMongoModelIdGet(mongoModelId: string, extraHttpRequestParams?: any): Observable<models.MongoModel>;
    /**
     *
     * update existing mongo_model
     * @param mongoModelId The mongo model identifier
     * @param updatedMongoModel updated mongo_model
     */
    mModelsMongoModelIdPut(mongoModelId: string, updatedMongoModel: models.MongoModelUpdate, extraHttpRequestParams?: any): Observable<models.MongoModel>;
    /**
     *
     * Create new mongo_model
     * @param mongoModel Your new mongo_model
     */
    mModelsPost(mongoModel: models.NewMongoModel, extraHttpRequestParams?: any): Observable<models.MongoModel>;
    /**
     *
     * Bulk update existing mongo_models
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param mongoModelBulkUpdate Use filter to find the mongo_models and do a bulk update
     */
    mModelsPut(filter: string, mongoModelBulkUpdate: models.MongoModelBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    /**
     *
     * Validate a mongo model definition. If the validation fails, information is provided in the payload with status code 200.
     * @param mongoModel The mongo_model
     */
    mModelsValidatePost(mongoModel: models.MongoModel, extraHttpRequestParams?: any): Observable<models.MongoModelValidationResponse>;
    /**
     *
     * Create multiple new mongo_models
     * @param mongoModels Multiple mongo_models
     */
    mModelsBulkPostWithHttpInfo(mongoModels?: models.NewMongoModelArray, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Bulk delete existing mongo_models
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    mModelsDeleteWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Returns mongo_models
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;somename\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    mModelsGetWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * delete existing mongo_model
     * @param mongoModelId The mongo_model identifier
     */
    mModelsMongoModelIdDeleteWithHttpInfo(mongoModelId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Get one existing mongo_model
     * @param mongoModelId The mongo_model identifier
     */
    mModelsMongoModelIdGetWithHttpInfo(mongoModelId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * update existing mongo_model
     * @param mongoModelId The mongo model identifier
     * @param updatedMongoModel updated mongo_model
     */
    mModelsMongoModelIdPutWithHttpInfo(mongoModelId: string, updatedMongoModel: models.MongoModelUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Create new mongo_model
     * @param mongoModel Your new mongo_model
     */
    mModelsPostWithHttpInfo(mongoModel: models.NewMongoModel, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Bulk update existing mongo_models
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param mongoModelBulkUpdate Use filter to find the mongo_models and do a bulk update
     */
    mModelsPutWithHttpInfo(filter: string, mongoModelBulkUpdate: models.MongoModelBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Validate a mongo model definition. If the validation fails, information is provided in the payload with status code 200.
     * @param mongoModel The mongo_model
     */
    mModelsValidatePostWithHttpInfo(mongoModel: models.MongoModel, extraHttpRequestParams?: any): Observable<Response>;
}
