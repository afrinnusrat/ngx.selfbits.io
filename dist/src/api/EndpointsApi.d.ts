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
    /**
     *
     * Create multiple new endpoints
     * @param endpoints Multiple endpoints
     */
    endpointsBulkPost(endpoints?: models.NewEndpointArray, extraHttpRequestParams?: any): Observable<models.EndpointArray>;
    /**
     *
     * Bulk delete existing endpoints
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    endpointsDelete(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     *
     * delete existing endpoint
     * @param endpointId The endpoint identifier
     */
    endpointsEndpointIdDelete(endpointId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * Get one existing endpoint
     * @param endpointId The endpoint identifier
     */
    endpointsEndpointIdGet(endpointId: string, extraHttpRequestParams?: any): Observable<models.Endpoint>;
    /**
     *
     * update existing endpoint
     * @param endpointId The user identifier
     * @param updatedEndpoint updated endpoint
     */
    endpointsEndpointIdPut(endpointId: string, updatedEndpoint: models.EndpointUpdate, extraHttpRequestParams?: any): Observable<models.Endpoint>;
    /**
     *
     * Returns endpoints
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    endpointsGet(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.EndpointPage>;
    /**
     *
     * Create new endpoint
     * @param endpoint Your new endpoint
     */
    endpointsPost(endpoint?: models.NewEndpoint, extraHttpRequestParams?: any): Observable<models.Endpoint>;
    /**
     *
     * Bulk update existing users
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param endpointBulkUpdate Use filter to find the endpoints and do a bulk update
     */
    endpointsPut(filter: string, endpointBulkUpdate: models.EndpointBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    /**
     *
     * Create multiple new endpoints
     * @param endpoints Multiple endpoints
     */
    endpointsBulkPostWithHttpInfo(endpoints?: models.NewEndpointArray, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Bulk delete existing endpoints
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    endpointsDeleteWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * delete existing endpoint
     * @param endpointId The endpoint identifier
     */
    endpointsEndpointIdDeleteWithHttpInfo(endpointId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Get one existing endpoint
     * @param endpointId The endpoint identifier
     */
    endpointsEndpointIdGetWithHttpInfo(endpointId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * update existing endpoint
     * @param endpointId The user identifier
     * @param updatedEndpoint updated endpoint
     */
    endpointsEndpointIdPutWithHttpInfo(endpointId: string, updatedEndpoint: models.EndpointUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Returns endpoints
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    endpointsGetWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Create new endpoint
     * @param endpoint Your new endpoint
     */
    endpointsPostWithHttpInfo(endpoint?: models.NewEndpoint, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Bulk update existing users
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param endpointBulkUpdate Use filter to find the endpoints and do a bulk update
     */
    endpointsPutWithHttpInfo(filter: string, endpointBulkUpdate: models.EndpointBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
}
