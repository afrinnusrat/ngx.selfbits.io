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
    mModelsMongoModelIdDataBulkPost(mongoModelId: string, mongoDataItems: models.NewMongoDataArray, extraHttpRequestParams?: any): Observable<models.MongoDataArray>;
    mModelsMongoModelIdDataDelete(mongoModelId: string, filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    mModelsMongoModelIdDataGet(mongoModelId: string, pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.MongoDataPage>;
    mModelsMongoModelIdDataIdDelete(mongoModelId: string, id: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    mModelsMongoModelIdDataIdGet(mongoModelId: string, id: string, extraHttpRequestParams?: any): Observable<models.MongoData>;
    mModelsMongoModelIdDataIdPut(mongoModelId: string, id: string, updatedMongoData: models.MongoDataUpdate, extraHttpRequestParams?: any): Observable<models.MongoData>;
    mModelsMongoModelIdDataPost(mongoModelId: string, mongoDataItem: models.NewMongoData, extraHttpRequestParams?: any): Observable<models.MongoData>;
    mModelsMongoModelIdDataPut(mongoModelId: string, filter: string, mongoDataBulkUpdate: models.MongoDataBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    mModelsMongoModelIdDataBulkPostWithHttpInfo(mongoModelId: string, mongoDataItems: models.NewMongoDataArray, extraHttpRequestParams?: any): Observable<Response>;
    mModelsMongoModelIdDataDeleteWithHttpInfo(mongoModelId: string, filter: string, extraHttpRequestParams?: any): Observable<Response>;
    mModelsMongoModelIdDataGetWithHttpInfo(mongoModelId: string, pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    mModelsMongoModelIdDataIdDeleteWithHttpInfo(mongoModelId: string, id: string, extraHttpRequestParams?: any): Observable<Response>;
    mModelsMongoModelIdDataIdGetWithHttpInfo(mongoModelId: string, id: string, extraHttpRequestParams?: any): Observable<Response>;
    mModelsMongoModelIdDataIdPutWithHttpInfo(mongoModelId: string, id: string, updatedMongoData: models.MongoDataUpdate, extraHttpRequestParams?: any): Observable<Response>;
    mModelsMongoModelIdDataPostWithHttpInfo(mongoModelId: string, mongoDataItem: models.NewMongoData, extraHttpRequestParams?: any): Observable<Response>;
    mModelsMongoModelIdDataPutWithHttpInfo(mongoModelId: string, filter: string, mongoDataBulkUpdate: models.MongoDataBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
}
