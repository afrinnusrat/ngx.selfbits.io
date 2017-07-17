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
    sbClientId: string;
    sbClientSecret: string;
    constructor(http: Http, configuration: Configuration);
    /**
     *
     * Create new SELFBITS CLOUD PLATFORM tenant by a valid subdomain
     * @param tenant Your new tenant
     */
    tenantsPost(tenant: models.NewTenant, extraHttpRequestParams?: any): Observable<models.TenantCreateResponse>;
    /**
     *
     * Delete existing SELFBITS CLOUD PLATFORM tenant
     * @param tenantId The tenant identifier
     */
    tenantsTenantIdDelete(tenantId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * Create new SELFBITS CLOUD PLATFORM tenant by a valid subdomain
     * @param tenant Your new tenant
     */
    tenantsPostWithHttpInfo(tenant: models.NewTenant, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Delete existing SELFBITS CLOUD PLATFORM tenant
     * @param tenantId The tenant identifier
     */
    tenantsTenantIdDeleteWithHttpInfo(tenantId: string, extraHttpRequestParams?: any): Observable<Response>;
}
