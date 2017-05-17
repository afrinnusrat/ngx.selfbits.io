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
    /**
     *
     * Create multiple new roles
     * @param roles Multiple roles
     */
    rolesBulkPost(roles?: models.NewRoleArray, extraHttpRequestParams?: any): Observable<models.RoleArray>;
    /**
     *
     * Bulk delete existing roles
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    rolesDelete(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     *
     * Returns roles
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    rolesGet(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.RolePage>;
    /**
     *
     * Create new role
     * @param role Your new role
     */
    rolesPost(role?: models.NewRole, extraHttpRequestParams?: any): Observable<models.Role>;
    /**
     *
     * Bulk update existing roles
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param roleBulkUpdate Use filter to find the roles and do a bulk update
     */
    rolesPut(filter: string, roleBulkUpdate: models.RoleBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    /**
     *
     * delete existing role
     * @param roleId The role identifier
     */
    rolesRoleIdDelete(roleId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * Get one existing role
     * @param roleId The role identifier
     */
    rolesRoleIdGet(roleId: string, extraHttpRequestParams?: any): Observable<models.Role>;
    /**
     *
     * update existing role
     * @param roleId The user identifier
     * @param updatedRole updated role
     */
    rolesRoleIdPut(roleId: string, updatedRole: models.RoleUpdate, extraHttpRequestParams?: any): Observable<models.Role>;
    /**
     *
     * Create multiple new roles
     * @param roles Multiple roles
     */
    rolesBulkPostWithHttpInfo(roles?: models.NewRoleArray, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Bulk delete existing roles
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    rolesDeleteWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Returns roles
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    rolesGetWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Create new role
     * @param role Your new role
     */
    rolesPostWithHttpInfo(role?: models.NewRole, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Bulk update existing roles
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param roleBulkUpdate Use filter to find the roles and do a bulk update
     */
    rolesPutWithHttpInfo(filter: string, roleBulkUpdate: models.RoleBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * delete existing role
     * @param roleId The role identifier
     */
    rolesRoleIdDeleteWithHttpInfo(roleId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Get one existing role
     * @param roleId The role identifier
     */
    rolesRoleIdGetWithHttpInfo(roleId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * update existing role
     * @param roleId The user identifier
     * @param updatedRole updated role
     */
    rolesRoleIdPutWithHttpInfo(roleId: string, updatedRole: models.RoleUpdate, extraHttpRequestParams?: any): Observable<Response>;
}
