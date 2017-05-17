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
    /**
     *
     * Create multiple new providers
     * @param providers Multiple providers
     */
    providersBulkPost(providers?: models.NewProviderArray, extraHttpRequestParams?: any): Observable<models.ProviderArray>;
    /**
     *
     * Bulk delete existing providers
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    providersDelete(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     *
     * Returns providers
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    providersGet(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.ProviderPage>;
    /**
     *
     * Create new provider
     * @param provider Your new provider
     */
    providersPost(provider?: models.NewProvider, extraHttpRequestParams?: any): Observable<models.Provider>;
    /**
     *
     * delete existing provider
     * @param providerId The provider identifier
     */
    providersProviderIdDelete(providerId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * Get one existing provider
     * @param providerId The provider identifier
     */
    providersProviderIdGet(providerId: string, extraHttpRequestParams?: any): Observable<models.Provider>;
    /**
     *
     * update existing provider
     * @param providerId The user identifier
     * @param updatedProvider updated provider
     */
    providersProviderIdPut(providerId: string, updatedProvider: models.ProviderUpdate, extraHttpRequestParams?: any): Observable<models.Provider>;
    /**
     *
     * Bulk update existing users
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param providerBulkUpdate Use filter to find the providers and do a bulk update
     */
    providersPut(filter: string, providerBulkUpdate: models.ProviderBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    /**
     *
     * Create multiple new providers
     * @param providers Multiple providers
     */
    providersBulkPostWithHttpInfo(providers?: models.NewProviderArray, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Bulk delete existing providers
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    providersDeleteWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Returns providers
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    providersGetWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Create new provider
     * @param provider Your new provider
     */
    providersPostWithHttpInfo(provider?: models.NewProvider, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * delete existing provider
     * @param providerId The provider identifier
     */
    providersProviderIdDeleteWithHttpInfo(providerId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Get one existing provider
     * @param providerId The provider identifier
     */
    providersProviderIdGetWithHttpInfo(providerId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * update existing provider
     * @param providerId The user identifier
     * @param updatedProvider updated provider
     */
    providersProviderIdPutWithHttpInfo(providerId: string, updatedProvider: models.ProviderUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Bulk update existing users
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param providerBulkUpdate Use filter to find the providers and do a bulk update
     */
    providersPutWithHttpInfo(filter: string, providerBulkUpdate: models.ProviderBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
}
