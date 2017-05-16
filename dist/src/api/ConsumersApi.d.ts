import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class ConsumersApi {
    protected http: Http;
    configuration: Configuration;
    defaultHeaders: Headers;
    constructor(http: Http, configuration: Configuration);
    consumersBulkPost(consumers?: models.NewConsumerArray, extraHttpRequestParams?: any): Observable<models.ConsumerArray>;
    consumersConsumerIdDelete(consumerId: string, extraHttpRequestParams?: any): Observable<{}>;
    consumersConsumerIdGet(consumerId: string, extraHttpRequestParams?: any): Observable<models.Consumer>;
    consumersConsumerIdPut(consumerId: string, updatedConsumer: models.ConsumerUpdate, extraHttpRequestParams?: any): Observable<models.Consumer>;
    consumersDelete(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    consumersGet(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.ConsumerPage>;
    consumersPost(consumer?: models.NewConsumer, extraHttpRequestParams?: any): Observable<models.Consumer>;
    consumersPut(filter: string, consumerBulkUpdate: models.ConsumerBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    consumersBulkPostWithHttpInfo(consumers?: models.NewConsumerArray, extraHttpRequestParams?: any): Observable<Response>;
    consumersConsumerIdDeleteWithHttpInfo(consumerId: string, extraHttpRequestParams?: any): Observable<Response>;
    consumersConsumerIdGetWithHttpInfo(consumerId: string, extraHttpRequestParams?: any): Observable<Response>;
    consumersConsumerIdPutWithHttpInfo(consumerId: string, updatedConsumer: models.ConsumerUpdate, extraHttpRequestParams?: any): Observable<Response>;
    consumersDeleteWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    consumersGetWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    consumersPostWithHttpInfo(consumer?: models.NewConsumer, extraHttpRequestParams?: any): Observable<Response>;
    consumersPutWithHttpInfo(filter: string, consumerBulkUpdate: models.ConsumerBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
}
