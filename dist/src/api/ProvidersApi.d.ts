import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class ProvidersApi {
    protected http: Http;
    configuration: Configuration;
    defaultHeaders: Headers;
    constructor(http: Http, configuration: Configuration);
    providersBulkPost(providers?: models.NewProviderArray, extraHttpRequestParams?: any): Observable<models.ProviderArray>;
    providersDelete(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    providersGet(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.ProviderPage>;
    providersPost(provider?: models.NewProvider, extraHttpRequestParams?: any): Observable<models.Provider>;
    providersProviderIdDelete(providerId: string, extraHttpRequestParams?: any): Observable<{}>;
    providersProviderIdGet(providerId: string, extraHttpRequestParams?: any): Observable<models.Provider>;
    providersProviderIdPut(providerId: string, updatedProvider: models.ProviderUpdate, extraHttpRequestParams?: any): Observable<models.Provider>;
    providersPut(filter: string, providerBulkUpdate: models.ProviderBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    providersBulkPostWithHttpInfo(providers?: models.NewProviderArray, extraHttpRequestParams?: any): Observable<Response>;
    providersDeleteWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    providersGetWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    providersPostWithHttpInfo(provider?: models.NewProvider, extraHttpRequestParams?: any): Observable<Response>;
    providersProviderIdDeleteWithHttpInfo(providerId: string, extraHttpRequestParams?: any): Observable<Response>;
    providersProviderIdGetWithHttpInfo(providerId: string, extraHttpRequestParams?: any): Observable<Response>;
    providersProviderIdPutWithHttpInfo(providerId: string, updatedProvider: models.ProviderUpdate, extraHttpRequestParams?: any): Observable<Response>;
    providersPutWithHttpInfo(filter: string, providerBulkUpdate: models.ProviderBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
}
