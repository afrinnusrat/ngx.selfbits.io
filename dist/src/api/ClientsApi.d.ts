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
    clientsBulkPost(clients?: models.NewClientArray, extraHttpRequestParams?: any): Observable<models.ClientArray>;
    clientsClientIdDelete(clientId: string, extraHttpRequestParams?: any): Observable<{}>;
    clientsClientIdGet(clientId: string, extraHttpRequestParams?: any): Observable<models.Client>;
    clientsClientIdPut(clientId: string, updatedClient: models.ClientUpdate, extraHttpRequestParams?: any): Observable<models.Client>;
    clientsDelete(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    clientsGet(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.ClientPage>;
    clientsPost(client?: models.NewClient, extraHttpRequestParams?: any): Observable<models.Client>;
    clientsPut(filter: string, clientBulkUpdate: models.ClientBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    clientsBulkPostWithHttpInfo(clients?: models.NewClientArray, extraHttpRequestParams?: any): Observable<Response>;
    clientsClientIdDeleteWithHttpInfo(clientId: string, extraHttpRequestParams?: any): Observable<Response>;
    clientsClientIdGetWithHttpInfo(clientId: string, extraHttpRequestParams?: any): Observable<Response>;
    clientsClientIdPutWithHttpInfo(clientId: string, updatedClient: models.ClientUpdate, extraHttpRequestParams?: any): Observable<Response>;
    clientsDeleteWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    clientsGetWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    clientsPostWithHttpInfo(client?: models.NewClient, extraHttpRequestParams?: any): Observable<Response>;
    clientsPutWithHttpInfo(filter: string, clientBulkUpdate: models.ClientBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
}
