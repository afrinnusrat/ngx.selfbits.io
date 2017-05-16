import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class RolesApi {
    protected http: Http;
    configuration: Configuration;
    defaultHeaders: Headers;
    constructor(http: Http, configuration: Configuration);
    rolesBulkPost(roles?: models.NewRoleArray, extraHttpRequestParams?: any): Observable<models.RoleArray>;
    rolesDelete(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    rolesGet(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.RolePage>;
    rolesPost(role?: models.NewRole, extraHttpRequestParams?: any): Observable<models.Role>;
    rolesPut(filter: string, roleBulkUpdate: models.RoleBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    rolesRoleIdDelete(roleId: string, extraHttpRequestParams?: any): Observable<{}>;
    rolesRoleIdGet(roleId: string, extraHttpRequestParams?: any): Observable<models.Role>;
    rolesRoleIdPut(roleId: string, updatedRole: models.RoleUpdate, extraHttpRequestParams?: any): Observable<models.Role>;
    rolesBulkPostWithHttpInfo(roles?: models.NewRoleArray, extraHttpRequestParams?: any): Observable<Response>;
    rolesDeleteWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    rolesGetWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    rolesPostWithHttpInfo(role?: models.NewRole, extraHttpRequestParams?: any): Observable<Response>;
    rolesPutWithHttpInfo(filter: string, roleBulkUpdate: models.RoleBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
    rolesRoleIdDeleteWithHttpInfo(roleId: string, extraHttpRequestParams?: any): Observable<Response>;
    rolesRoleIdGetWithHttpInfo(roleId: string, extraHttpRequestParams?: any): Observable<Response>;
    rolesRoleIdPutWithHttpInfo(roleId: string, updatedRole: models.RoleUpdate, extraHttpRequestParams?: any): Observable<Response>;
}
