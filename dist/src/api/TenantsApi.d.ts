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
    tenantsGet(extraHttpRequestParams?: any): Observable<models.TenantCredentialArray>;
    tenantsPost(tenant: models.NewTenant, extraHttpRequestParams?: any): Observable<models.TenantCreateResponse>;
    tenantsTenantIdApplicationsApplicationIdDelete(tenantId: string, applicationId: string, extraHttpRequestParams?: any): Observable<{}>;
    tenantsTenantIdApplicationsGet(tenantId: string, extraHttpRequestParams?: any): Observable<models.ApplicationArray>;
    tenantsTenantIdApplicationsPost(tenantId: string, application: models.NewApplication, extraHttpRequestParams?: any): Observable<models.Application>;
    tenantsTenantIdDelete(tenantId: string, extraHttpRequestParams?: any): Observable<{}>;
    tenantsGetWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    tenantsPostWithHttpInfo(tenant: models.NewTenant, extraHttpRequestParams?: any): Observable<Response>;
    tenantsTenantIdApplicationsApplicationIdDeleteWithHttpInfo(tenantId: string, applicationId: string, extraHttpRequestParams?: any): Observable<Response>;
    tenantsTenantIdApplicationsGetWithHttpInfo(tenantId: string, extraHttpRequestParams?: any): Observable<Response>;
    tenantsTenantIdApplicationsPostWithHttpInfo(tenantId: string, application: models.NewApplication, extraHttpRequestParams?: any): Observable<Response>;
    tenantsTenantIdDeleteWithHttpInfo(tenantId: string, extraHttpRequestParams?: any): Observable<Response>;
}
