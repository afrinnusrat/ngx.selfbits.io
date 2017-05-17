import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class TenantsApi {
    protected http: Http;
    configuration: Configuration;
    defaultHeaders: Headers;
    constructor(http: Http, configuration: Configuration);
    /**
     *
     * Returns tenants of the logged in user
     */
    tenantsGet(extraHttpRequestParams?: any): Observable<models.TenantCredentialArray>;
    /**
     *
     * Create new SELFBITS CLOUD PLATFORM tenant by a valid subdomain
     * @param tenant Your new tenant
     */
    tenantsPost(tenant: models.NewTenant, extraHttpRequestParams?: any): Observable<models.TenantCreateResponse>;
    /**
     *
     * Delete existing SELFBITS CLOUD PLATFORM application
     * @param tenantId The tenant identifier
     * @param applicationId The tenant application identifier
     */
    tenantsTenantIdApplicationsApplicationIdDelete(tenantId: string, applicationId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * Returns tenant applications
     * @param tenantId Your Selfbits Tenant
     */
    tenantsTenantIdApplicationsGet(tenantId: string, extraHttpRequestParams?: any): Observable<models.ApplicationArray>;
    /**
     *
     * Create new application
     * @param tenantId Your Selfbits Tenant ID
     * @param application Your new application
     */
    tenantsTenantIdApplicationsPost(tenantId: string, application: models.NewApplication, extraHttpRequestParams?: any): Observable<models.Application>;
    /**
     *
     * Delete existing SELFBITS CLOUD PLATFORM tenant
     * @param tenantId The tenant identifier
     */
    tenantsTenantIdDelete(tenantId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * Returns tenants of the logged in user
     */
    tenantsGetWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Create new SELFBITS CLOUD PLATFORM tenant by a valid subdomain
     * @param tenant Your new tenant
     */
    tenantsPostWithHttpInfo(tenant: models.NewTenant, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Delete existing SELFBITS CLOUD PLATFORM application
     * @param tenantId The tenant identifier
     * @param applicationId The tenant application identifier
     */
    tenantsTenantIdApplicationsApplicationIdDeleteWithHttpInfo(tenantId: string, applicationId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Returns tenant applications
     * @param tenantId Your Selfbits Tenant
     */
    tenantsTenantIdApplicationsGetWithHttpInfo(tenantId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Create new application
     * @param tenantId Your Selfbits Tenant ID
     * @param application Your new application
     */
    tenantsTenantIdApplicationsPostWithHttpInfo(tenantId: string, application: models.NewApplication, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Delete existing SELFBITS CLOUD PLATFORM tenant
     * @param tenantId The tenant identifier
     */
    tenantsTenantIdDeleteWithHttpInfo(tenantId: string, extraHttpRequestParams?: any): Observable<Response>;
}
