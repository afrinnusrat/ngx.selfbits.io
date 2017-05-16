import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class EndpointsApi {
    protected http: Http;
    configuration: Configuration;
    defaultHeaders: Headers;
    constructor(http: Http, configuration: Configuration);
    endpointsBulkPost(endpoints?: models.NewEndpointArray, extraHttpRequestParams?: any): Observable<models.EndpointArray>;
    endpointsDelete(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    endpointsEndpointIdDelete(endpointId: string, extraHttpRequestParams?: any): Observable<{}>;
    endpointsEndpointIdGet(endpointId: string, extraHttpRequestParams?: any): Observable<models.Endpoint>;
    endpointsEndpointIdPut(endpointId: string, updatedEndpoint: models.EndpointUpdate, extraHttpRequestParams?: any): Observable<models.Endpoint>;
    endpointsGet(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.EndpointPage>;
    endpointsPost(endpoint?: models.NewEndpoint, extraHttpRequestParams?: any): Observable<models.Endpoint>;
    endpointsPut(filter: string, endpointBulkUpdate: models.EndpointBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    endpointsBulkPostWithHttpInfo(endpoints?: models.NewEndpointArray, extraHttpRequestParams?: any): Observable<Response>;
    endpointsDeleteWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    endpointsEndpointIdDeleteWithHttpInfo(endpointId: string, extraHttpRequestParams?: any): Observable<Response>;
    endpointsEndpointIdGetWithHttpInfo(endpointId: string, extraHttpRequestParams?: any): Observable<Response>;
    endpointsEndpointIdPutWithHttpInfo(endpointId: string, updatedEndpoint: models.EndpointUpdate, extraHttpRequestParams?: any): Observable<Response>;
    endpointsGetWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    endpointsPostWithHttpInfo(endpoint?: models.NewEndpoint, extraHttpRequestParams?: any): Observable<Response>;
    endpointsPutWithHttpInfo(filter: string, endpointBulkUpdate: models.EndpointBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
}
