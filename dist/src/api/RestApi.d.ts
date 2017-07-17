import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class RestApi {
    protected http: Http;
    configuration: Configuration;
    defaultHeaders: Headers;
    sbClientId: string;
    sbClientSecret: string;
    constructor(http: Http, configuration: Configuration);
    /**
     * Execute a REST request to a deployed REST API
     * Execute a REST request to a deployed REST API
     * @param stage The stage identifier
     * @param resource The resource path
     */
    _delete(stage: string, resource: string, extraHttpRequestParams?: any): Observable<models.RestEndpointExecutionResponse>;
    /**
     * Execute a REST request to a deployed REST API
     * Execute a REST request to a deployed REST API
     * @param stage The stage identifier
     * @param resource The resource path
     */
    get(stage: string, resource: string, extraHttpRequestParams?: any): Observable<models.RestEndpointExecutionResponse>;
    /**
     * Execute a REST request to a deployed REST API
     * Execute a REST request to a deployed REST API
     * @param stage The stage identifier
     * @param resource The resource path
     * @param payload Execution payload
     */
    post(stage: string, resource: string, payload?: models.RestEndpointExecutionRequestPayload, extraHttpRequestParams?: any): Observable<models.RestEndpointExecutionResponse>;
    /**
     * Execute a REST request to a deployed REST API
     * Execute a REST request to a deployed REST API
     * @param stage The stage identifier
     * @param resource The resource path
     * @param payload Execution payload
     */
    put(stage: string, resource: string, payload?: models.RestEndpointExecutionRequestPayload, extraHttpRequestParams?: any): Observable<models.RestEndpointExecutionResponse>;
    /**
     * Execute a REST request to a deployed REST API
     * Execute a REST request to a deployed REST API
     * @param stage The stage identifier
     * @param resource The resource path
     */
    _deleteWithHttpInfo(stage: string, resource: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Execute a REST request to a deployed REST API
     * Execute a REST request to a deployed REST API
     * @param stage The stage identifier
     * @param resource The resource path
     */
    getWithHttpInfo(stage: string, resource: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Execute a REST request to a deployed REST API
     * Execute a REST request to a deployed REST API
     * @param stage The stage identifier
     * @param resource The resource path
     * @param payload Execution payload
     */
    postWithHttpInfo(stage: string, resource: string, payload?: models.RestEndpointExecutionRequestPayload, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Execute a REST request to a deployed REST API
     * Execute a REST request to a deployed REST API
     * @param stage The stage identifier
     * @param resource The resource path
     * @param payload Execution payload
     */
    putWithHttpInfo(stage: string, resource: string, payload?: models.RestEndpointExecutionRequestPayload, extraHttpRequestParams?: any): Observable<Response>;
}
