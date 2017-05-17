import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class ClientsApi {
    protected http: Http;
    configuration: Configuration;
    defaultHeaders: Headers;
    constructor(http: Http, configuration: Configuration);
    /**
     *
     * Create multiple new clients
     * @param clients Multiple clients
     */
    clientsBulkPost(clients?: models.NewClientArray, extraHttpRequestParams?: any): Observable<models.ClientArray>;
    /**
     *
     * delete existing client
     * @param clientId The client identifier
     */
    clientsClientIdDelete(clientId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * Get one existing client
     * @param clientId The client identifier
     */
    clientsClientIdGet(clientId: string, extraHttpRequestParams?: any): Observable<models.Client>;
    /**
     *
     * update existing client
     * @param clientId The user identifier
     * @param updatedClient updated client
     */
    clientsClientIdPut(clientId: string, updatedClient: models.ClientUpdate, extraHttpRequestParams?: any): Observable<models.Client>;
    /**
     *
     * Bulk delete existing clients
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    clientsDelete(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     *
     * Returns clients
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    clientsGet(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.ClientPage>;
    /**
     *
     * Create new client
     * @param client Your new client
     */
    clientsPost(client?: models.NewClient, extraHttpRequestParams?: any): Observable<models.Client>;
    /**
     *
     * Bulk update existing clients
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param clientBulkUpdate Use filter to find the clients and do a bulk update
     */
    clientsPut(filter: string, clientBulkUpdate: models.ClientBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    /**
     *
     * Create multiple new clients
     * @param clients Multiple clients
     */
    clientsBulkPostWithHttpInfo(clients?: models.NewClientArray, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * delete existing client
     * @param clientId The client identifier
     */
    clientsClientIdDeleteWithHttpInfo(clientId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Get one existing client
     * @param clientId The client identifier
     */
    clientsClientIdGetWithHttpInfo(clientId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * update existing client
     * @param clientId The user identifier
     * @param updatedClient updated client
     */
    clientsClientIdPutWithHttpInfo(clientId: string, updatedClient: models.ClientUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Bulk delete existing clients
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    clientsDeleteWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Returns clients
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    clientsGetWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Create new client
     * @param client Your new client
     */
    clientsPostWithHttpInfo(client?: models.NewClient, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Bulk update existing clients
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param clientBulkUpdate Use filter to find the clients and do a bulk update
     */
    clientsPutWithHttpInfo(filter: string, clientBulkUpdate: models.ClientBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
}
