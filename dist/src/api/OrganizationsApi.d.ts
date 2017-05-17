import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class OrganizationsApi {
    protected http: Http;
    configuration: Configuration;
    defaultHeaders: Headers;
    constructor(http: Http, configuration: Configuration);
    /**
     *
     * Create multiple new organizations
     * @param organizations Multiple organizations
     */
    organizationsBulkPost(organizations?: models.NewOrganizationArray, extraHttpRequestParams?: any): Observable<models.OrganizationArray>;
    /**
     *
     * Bulk delete existing organizations
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    organizationsDelete(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     *
     * Returns organizations
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;isPublic\&quot;: \&quot;true\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     * @param _public Fixed filter for public organizations
     */
    organizationsGet(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, _public?: boolean, extraHttpRequestParams?: any): Observable<models.OrganizationPage>;
    /**
     *
     * delete existing organization
     * @param organizationId The organization identifier
     */
    organizationsOrganizationIdDelete(organizationId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * Get one existing organization
     * @param organizationId The organization identifier
     */
    organizationsOrganizationIdGet(organizationId: string, extraHttpRequestParams?: any): Observable<models.Organization>;
    /**
     *
     * Create organization invite
     * @param organizationId The target organization of your invite
     */
    organizationsOrganizationIdInvitesPost(organizationId: string, extraHttpRequestParams?: any): Observable<models.Organization>;
    /**
     *
     * update existing organization
     * @param organizationId The user identifier
     * @param updatedOrganization updated organization
     */
    organizationsOrganizationIdPut(organizationId: string, updatedOrganization: models.OrganizationUpdate, extraHttpRequestParams?: any): Observable<models.Organization>;
    /**
     *
     * Create new organization
     * @param organization Your new organization
     */
    organizationsPost(organization?: models.NewOrganization, extraHttpRequestParams?: any): Observable<models.Organization>;
    /**
     *
     * Bulk update existing users
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param organizationBulkUpdate Use filter to find the organizations and do a bulk update
     */
    organizationsPut(filter: string, organizationBulkUpdate: models.OrganizationBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    /**
     *
     * Create multiple new organizations
     * @param organizations Multiple organizations
     */
    organizationsBulkPostWithHttpInfo(organizations?: models.NewOrganizationArray, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Bulk delete existing organizations
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    organizationsDeleteWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Returns organizations
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;isPublic\&quot;: \&quot;true\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     * @param _public Fixed filter for public organizations
     */
    organizationsGetWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, _public?: boolean, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * delete existing organization
     * @param organizationId The organization identifier
     */
    organizationsOrganizationIdDeleteWithHttpInfo(organizationId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Get one existing organization
     * @param organizationId The organization identifier
     */
    organizationsOrganizationIdGetWithHttpInfo(organizationId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Create organization invite
     * @param organizationId The target organization of your invite
     */
    organizationsOrganizationIdInvitesPostWithHttpInfo(organizationId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * update existing organization
     * @param organizationId The user identifier
     * @param updatedOrganization updated organization
     */
    organizationsOrganizationIdPutWithHttpInfo(organizationId: string, updatedOrganization: models.OrganizationUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Create new organization
     * @param organization Your new organization
     */
    organizationsPostWithHttpInfo(organization?: models.NewOrganization, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Bulk update existing users
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param organizationBulkUpdate Use filter to find the organizations and do a bulk update
     */
    organizationsPutWithHttpInfo(filter: string, organizationBulkUpdate: models.OrganizationBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
}
