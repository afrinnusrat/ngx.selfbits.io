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
    /**
     *
     * Create multiple new consumers
     * @param consumers Multiple consumers
     */
    consumersBulkPost(consumers?: models.NewConsumerArray, extraHttpRequestParams?: any): Observable<models.ConsumerArray>;
    /**
     *
     * delete existing consumer
     * @param consumerId The consumer identifier
     */
    consumersConsumerIdDelete(consumerId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * Get one existing consumer
     * @param consumerId The consumer identifier
     */
    consumersConsumerIdGet(consumerId: string, extraHttpRequestParams?: any): Observable<models.Consumer>;
    /**
     *
     * update existing consumer
     * @param consumerId The user identifier
     * @param updatedConsumer updated consumer
     */
    consumersConsumerIdPut(consumerId: string, updatedConsumer: models.ConsumerUpdate, extraHttpRequestParams?: any): Observable<models.Consumer>;
    /**
     *
     * Bulk delete existing consumers
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    consumersDelete(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     *
     * Returns consumers
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    consumersGet(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.ConsumerPage>;
    /**
     *
     * Create new consumer
     * @param consumer Your new consumer
     */
    consumersPost(consumer?: models.NewConsumer, extraHttpRequestParams?: any): Observable<models.Consumer>;
    /**
     *
     * Bulk update existing consumers
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param consumerBulkUpdate Use filter to find the consumers and do a bulk update
     */
    consumersPut(filter: string, consumerBulkUpdate: models.ConsumerBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    /**
     *
     * Create multiple new consumers
     * @param consumers Multiple consumers
     */
    consumersBulkPostWithHttpInfo(consumers?: models.NewConsumerArray, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * delete existing consumer
     * @param consumerId The consumer identifier
     */
    consumersConsumerIdDeleteWithHttpInfo(consumerId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Get one existing consumer
     * @param consumerId The consumer identifier
     */
    consumersConsumerIdGetWithHttpInfo(consumerId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * update existing consumer
     * @param consumerId The user identifier
     * @param updatedConsumer updated consumer
     */
    consumersConsumerIdPutWithHttpInfo(consumerId: string, updatedConsumer: models.ConsumerUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Bulk delete existing consumers
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    consumersDeleteWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Returns consumers
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    consumersGetWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Create new consumer
     * @param consumer Your new consumer
     */
    consumersPostWithHttpInfo(consumer?: models.NewConsumer, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Bulk update existing consumers
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param consumerBulkUpdate Use filter to find the consumers and do a bulk update
     */
    consumersPutWithHttpInfo(filter: string, consumerBulkUpdate: models.ConsumerBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
}
