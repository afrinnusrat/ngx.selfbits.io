import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class MongodbAdminApi {
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
    dataCreateManyByModel(mongoModelId: string, mongoDataItems: models.NewMongoDataArray, extraHttpRequestParams?: any): Observable<models.MongoDataArray>;
    /**
     * Create new data item
     * Create new data item
     * @param mongoModelId The mongo_model identifier
     * @param mongoDataItem new data item
     */
    dataCreateOneByModel(mongoModelId: string, mongoDataItem: models.NewMongoData, extraHttpRequestParams?: any): Observable<models.MongoData>;
    /**
     * Bulk delete existing data items
     * Bulk delete existing data items
     * @param mongoModelId The mongo_model identifier
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    dataDeleteManyByModel(mongoModelId: string, filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     * delete existing data item
     * delete existing data item
     * @param mongoModelId The model identifier
     * @param id The data item identifier
     */
    dataDeleteOneByModel(mongoModelId: string, id: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
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
    dataQueryByModel(mongoModelId: string, pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.MongoDataPage>;
    /**
     * Get one existing data item
     * Get one existing data item
     * @param mongoModelId The mongo_model identifier
     * @param id The data item identifier
     */
    dataReadOneByModel(mongoModelId: string, id: string, extraHttpRequestParams?: any): Observable<models.MongoData>;
    /**
     * Bulk update existing data items
     * Bulk update existing data items
     * @param mongoModelId The mongo_model identifier
     * @param filter Mongoose filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param mongoDataBulkUpdate Use filter to find the data items and do a bulk update
     */
    dataUpdateManyByModel(mongoModelId: string, filter: string, mongoDataBulkUpdate: models.MongoDataBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    /**
     * update existing data item
     * update existing data item
     * @param mongoModelId The mongo_model identifier
     * @param id The data item identifier
     * @param updatedMongoData updated mongo_data
     */
    dataUpdateOneByModel(mongoModelId: string, id: string, updatedMongoData: models.MongoDataUpdate, extraHttpRequestParams?: any): Observable<models.MongoData>;
    /**
     * Create multiple new mongo_databases
     * Create multiple new mongo_databases
     * @param mongoDatabases Multiple mongo_databases
     */
    mongoDatabasesCreateMany(mongoDatabases?: models.NewMongoDatabaseArray, extraHttpRequestParams?: any): Observable<models.MongoDatabaseArray>;
    /**
     * Create new mongo_database
     * Create new mongo_database
     * @param mongoDatabase Your new mongo_database
     */
    mongoDatabasesCreateOne(mongoDatabase?: models.NewMongoDatabase, extraHttpRequestParams?: any): Observable<models.MongoDatabase>;
    /**
     * Bulk delete existing mongo_databases
     * Bulk delete existing mongo_databases
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    mongoDatabasesDeleteMany(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     * delete existing mongo_database
     * delete existing mongo_database
     * @param mongoDatabaseId The mongo_database identifier
     */
    mongoDatabasesDeleteOne(mongoDatabaseId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Returns mongo_databases
     * Returns mongo_databases
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;somename\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    mongoDatabasesQuery(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.MongoDatabasePage>;
    /**
     * Get one existing mongo_database
     * Get one existing mongo_database
     * @param mongoDatabaseId The mongo_database identifier
     */
    mongoDatabasesReadOne(mongoDatabaseId: string, extraHttpRequestParams?: any): Observable<models.MongoDatabase>;
    /**
     * Test connection. If the connection attempt fails, information is provided in the payload with status code 200.
     * Test connection. If the connection attempt fails, information is provided in the payload with status code 200.
     * @param mongoDatabaseId The mongo_database identifier
     */
    mongoDatabasesTestOne(mongoDatabaseId: string, extraHttpRequestParams?: any): Observable<models.MongoDatabaseTestResponse>;
    /**
     * Bulk update existing mongo_databases
     * Bulk update existing mongo_databases
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param mongoDatabaseBulkUpdate Use filter to find the mongo_databases and do a bulk update
     */
    mongoDatabasesUpdateMany(filter: string, mongoDatabaseBulkUpdate: models.MongoDatabaseBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    /**
     * update existing mongo_database
     * update existing mongo_database
     * @param mongoDatabaseId The mongo database identifier
     * @param updatedMongoDatabase updated mongo_database
     */
    mongoDatabasesUpdateOne(mongoDatabaseId: string, updatedMongoDatabase: models.MongoDatabaseUpdate, extraHttpRequestParams?: any): Observable<models.MongoDatabase>;
    /**
     * Create multiple new mongo_models
     * Create multiple new mongo_models
     * @param mongoModels Multiple mongo_models
     */
    mongoModelsCreateMany(mongoModels?: models.NewMongoModelArray, extraHttpRequestParams?: any): Observable<models.MongoModelArray>;
    /**
     * Create new mongo_model
     * Create new mongo_model
     * @param mongoModel Your new mongo_model
     */
    mongoModelsCreateOne(mongoModel: models.NewMongoModel, extraHttpRequestParams?: any): Observable<models.MongoModel>;
    /**
     * Bulk delete existing mongo_models
     * Bulk delete existing mongo_models
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    mongoModelsDeleteMany(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     * delete existing mongo_model
     * delete existing mongo_model
     * @param mongoModelId The mongo_model identifier
     */
    mongoModelsDeleteOne(mongoModelId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Returns mongo_models
     * Returns mongo_models
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;somename\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    mongoModelsQuery(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.MongoModelPage>;
    /**
     * Get one existing mongo_model
     * Get one existing mongo_model
     * @param mongoModelId The mongo_model identifier
     */
    mongoModelsReadOne(mongoModelId: string, extraHttpRequestParams?: any): Observable<models.MongoModel>;
    /**
     * Bulk update existing mongo_models
     * Bulk update existing mongo_models
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param mongoModelBulkUpdate Use filter to find the mongo_models and do a bulk update
     */
    mongoModelsUpdateMany(filter: string, mongoModelBulkUpdate: models.MongoModelBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    /**
     * update existing mongo_model
     * update existing mongo_model
     * @param mongoModelId The mongo model identifier
     * @param updatedMongoModel updated mongo_model
     */
    mongoModelsUpdateOne(mongoModelId: string, updatedMongoModel: models.MongoModelUpdate, extraHttpRequestParams?: any): Observable<models.MongoModel>;
    /**
     * Validate a mongo model definition. If the validation fails, information is provided in the payload with status code 200.
     * Validate a mongo model definition. If the validation fails, information is provided in the payload with status code 200.
     * @param mongoModel The mongo_model
     */
    mongoModelsValidateByDefinition(mongoModel: models.MongoModel, extraHttpRequestParams?: any): Observable<models.MongoModelValidationResponse>;
    /**
     * Create multiple new data items
     * Create multiple new data items
     * @param mongoModelId The mongo_model identifier
     * @param mongoDataItems Multiple data items
     */
    dataCreateManyByModelWithHttpInfo(mongoModelId: string, mongoDataItems: models.NewMongoDataArray, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create new data item
     * Create new data item
     * @param mongoModelId The mongo_model identifier
     * @param mongoDataItem new data item
     */
    dataCreateOneByModelWithHttpInfo(mongoModelId: string, mongoDataItem: models.NewMongoData, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Bulk delete existing data items
     * Bulk delete existing data items
     * @param mongoModelId The mongo_model identifier
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    dataDeleteManyByModelWithHttpInfo(mongoModelId: string, filter: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * delete existing data item
     * delete existing data item
     * @param mongoModelId The model identifier
     * @param id The data item identifier
     */
    dataDeleteOneByModelWithHttpInfo(mongoModelId: string, id: string, extraHttpRequestParams?: any): Observable<Response>;
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
    dataQueryByModelWithHttpInfo(mongoModelId: string, pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get one existing data item
     * Get one existing data item
     * @param mongoModelId The mongo_model identifier
     * @param id The data item identifier
     */
    dataReadOneByModelWithHttpInfo(mongoModelId: string, id: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Bulk update existing data items
     * Bulk update existing data items
     * @param mongoModelId The mongo_model identifier
     * @param filter Mongoose filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param mongoDataBulkUpdate Use filter to find the data items and do a bulk update
     */
    dataUpdateManyByModelWithHttpInfo(mongoModelId: string, filter: string, mongoDataBulkUpdate: models.MongoDataBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * update existing data item
     * update existing data item
     * @param mongoModelId The mongo_model identifier
     * @param id The data item identifier
     * @param updatedMongoData updated mongo_data
     */
    dataUpdateOneByModelWithHttpInfo(mongoModelId: string, id: string, updatedMongoData: models.MongoDataUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create multiple new mongo_databases
     * Create multiple new mongo_databases
     * @param mongoDatabases Multiple mongo_databases
     */
    mongoDatabasesCreateManyWithHttpInfo(mongoDatabases?: models.NewMongoDatabaseArray, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create new mongo_database
     * Create new mongo_database
     * @param mongoDatabase Your new mongo_database
     */
    mongoDatabasesCreateOneWithHttpInfo(mongoDatabase?: models.NewMongoDatabase, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Bulk delete existing mongo_databases
     * Bulk delete existing mongo_databases
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    mongoDatabasesDeleteManyWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * delete existing mongo_database
     * delete existing mongo_database
     * @param mongoDatabaseId The mongo_database identifier
     */
    mongoDatabasesDeleteOneWithHttpInfo(mongoDatabaseId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Returns mongo_databases
     * Returns mongo_databases
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;somename\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    mongoDatabasesQueryWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get one existing mongo_database
     * Get one existing mongo_database
     * @param mongoDatabaseId The mongo_database identifier
     */
    mongoDatabasesReadOneWithHttpInfo(mongoDatabaseId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Test connection. If the connection attempt fails, information is provided in the payload with status code 200.
     * Test connection. If the connection attempt fails, information is provided in the payload with status code 200.
     * @param mongoDatabaseId The mongo_database identifier
     */
    mongoDatabasesTestOneWithHttpInfo(mongoDatabaseId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Bulk update existing mongo_databases
     * Bulk update existing mongo_databases
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param mongoDatabaseBulkUpdate Use filter to find the mongo_databases and do a bulk update
     */
    mongoDatabasesUpdateManyWithHttpInfo(filter: string, mongoDatabaseBulkUpdate: models.MongoDatabaseBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * update existing mongo_database
     * update existing mongo_database
     * @param mongoDatabaseId The mongo database identifier
     * @param updatedMongoDatabase updated mongo_database
     */
    mongoDatabasesUpdateOneWithHttpInfo(mongoDatabaseId: string, updatedMongoDatabase: models.MongoDatabaseUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create multiple new mongo_models
     * Create multiple new mongo_models
     * @param mongoModels Multiple mongo_models
     */
    mongoModelsCreateManyWithHttpInfo(mongoModels?: models.NewMongoModelArray, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create new mongo_model
     * Create new mongo_model
     * @param mongoModel Your new mongo_model
     */
    mongoModelsCreateOneWithHttpInfo(mongoModel: models.NewMongoModel, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Bulk delete existing mongo_models
     * Bulk delete existing mongo_models
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    mongoModelsDeleteManyWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * delete existing mongo_model
     * delete existing mongo_model
     * @param mongoModelId The mongo_model identifier
     */
    mongoModelsDeleteOneWithHttpInfo(mongoModelId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Returns mongo_models
     * Returns mongo_models
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;somename\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    mongoModelsQueryWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get one existing mongo_model
     * Get one existing mongo_model
     * @param mongoModelId The mongo_model identifier
     */
    mongoModelsReadOneWithHttpInfo(mongoModelId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Bulk update existing mongo_models
     * Bulk update existing mongo_models
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param mongoModelBulkUpdate Use filter to find the mongo_models and do a bulk update
     */
    mongoModelsUpdateManyWithHttpInfo(filter: string, mongoModelBulkUpdate: models.MongoModelBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * update existing mongo_model
     * update existing mongo_model
     * @param mongoModelId The mongo model identifier
     * @param updatedMongoModel updated mongo_model
     */
    mongoModelsUpdateOneWithHttpInfo(mongoModelId: string, updatedMongoModel: models.MongoModelUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Validate a mongo model definition. If the validation fails, information is provided in the payload with status code 200.
     * Validate a mongo model definition. If the validation fails, information is provided in the payload with status code 200.
     * @param mongoModel The mongo_model
     */
    mongoModelsValidateByDefinitionWithHttpInfo(mongoModel: models.MongoModel, extraHttpRequestParams?: any): Observable<Response>;
}
