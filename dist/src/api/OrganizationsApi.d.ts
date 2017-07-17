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
    sbClientId: string;
    sbClientSecret: string;
    constructor(http: Http, configuration: Configuration);
    /**
     * Create new application
     * Create new application
     * @param organizationId Your Selfbits Organization ID
     * @param application Your new application
     */
    applicationsCreateOneByOrganization(organizationId: string, application: models.NewApplication, extraHttpRequestParams?: any): Observable<models.Application>;
    /**
     * Delete existing SELFBITS CLOUD PLATFORM application
     * Delete existing SELFBITS CLOUD PLATFORM application
     * @param organizationId Your Selfbits Organization ID
     * @param applicationId The tenant application identifier
     */
    applicationsDeleteOneByOrganization(organizationId: string, applicationId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Returns applications
     * Returns applications
     * @param organizationId The target organization
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    applicationsQueryByOrganization(organizationId: string, pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.ApplicationPage>;
    /**
     * Create new application
     * Create new application
     * @param organizationId Your Selfbits Organization ID
     * @param applicationId The tenant application identifier
     */
    applicationsReadOneByOrganization(organizationId: string, applicationId: string, extraHttpRequestParams?: any): Observable<models.Application>;
    /**
     * Create new directory
     * Create new directory
     * @param organizationId The target organization
     * @param directory Your new directory
     */
    directoriesCreateOneByOrganization(organizationId: string, directory?: models.NewDirectory, extraHttpRequestParams?: any): Observable<models.Directory>;
    /**
     * Bulk delete existing directories
     * Bulk delete existing directories
     * @param organizationId The target organization
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    directoriesDeleteManyByOrganization(organizationId: string, filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     * delete existing directory
     * delete existing directory
     * @param organizationId The target organization
     * @param directoryId The directory identifier
     */
    directoriesDeleteOneByOrganization(organizationId: string, directoryId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Returns directories
     * Returns directories
     * @param organizationId The target organization
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    directoriesQueryByOrganization(organizationId: string, pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.DirectoryPage>;
    /**
     * Get one existing directory
     * Get one existing directory
     * @param organizationId The target organization
     * @param directoryId The directory identifier
     */
    directoriesReadOneByOrganization(organizationId: string, directoryId: string, extraHttpRequestParams?: any): Observable<models.Directory>;
    /**
     * Bulk update existing users
     * Bulk update existing users
     * @param organizationId The target organization
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param directoryBulkUpdate Use filter to find the directories and do a bulk update
     */
    directoriesUpdateManyByOrganization(organizationId: string, filter: string, directoryBulkUpdate: models.DirectoryBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    /**
     * update existing directory
     * update existing directory
     * @param organizationId The target organization
     * @param directoryId The user identifier
     * @param updatedDirectory updated directory
     */
    directoriesUpdateOneByOrganization(organizationId: string, directoryId: string, updatedDirectory: models.DirectoryUpdate, extraHttpRequestParams?: any): Observable<models.Directory>;
    /**
     * Create organization invite
     * Create organization invite
     * @param organizationId The target organization of your invite
     */
    invitesCreateOneByOrganization(organizationId: string, extraHttpRequestParams?: any): Observable<models.OrganizationInvite>;
    /**
     * Create organization invite
     * Create organization invite
     * @param organizationId The target organization of your invite
     * @param userId The user identifier
     */
    invitesCreateOneByOrganizationAndUser(organizationId: string, userId: string, extraHttpRequestParams?: any): Observable<models.OrganizationInvite>;
    /**
     * Bulk delete existing organization invites
     * Bulk delete existing organization invites
     * @param organizationId The target organization of your invite
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    invitesDeleteManyByOrganization(organizationId: string, filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     * delete existing invite
     * delete existing invite
     * @param organizationId The target organization of your invite
     * @param inviteId The invite identifier
     */
    invitesDeleteOneByOrganization(organizationId: string, inviteId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * delete existing invite
     * delete existing invite
     * @param organizationId The target organization of your invite
     * @param userId The user identifier
     * @param inviteId The invite identifier
     */
    invitesDeleteOneByOrganizationAndUser(organizationId: string, userId: string, inviteId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Returns invites
     * Returns invites
     * @param organizationId The target organization of your invite
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;isPublic\&quot;: \&quot;true\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    invitesQueryByOrganization(organizationId: string, pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.OrganizationInvitePage>;
    /**
     * Returns invites
     * Returns invites
     * @param organizationId The target organization of your invite
     * @param userId The user identifier
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;isPublic\&quot;: \&quot;true\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    invitesQueryByOrganizationAndUser(organizationId: string, userId: string, pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.OrganizationInvitePage>;
    /**
     * Get one existing invite
     * Get one existing invite
     * @param organizationId The target organization of your invite
     * @param inviteId The invite identifier
     */
    invitesReadOneByOrganization(organizationId: string, inviteId: string, extraHttpRequestParams?: any): Observable<models.OrganizationInvite>;
    /**
     * Create multiple new organizations
     * Create multiple new organizations
     * @param organizations Multiple organizations
     */
    organizationsCreateMany(organizations?: models.NewOrganizationArray, extraHttpRequestParams?: any): Observable<models.OrganizationArray>;
    /**
     * Create new organization
     * Create new organization
     * @param organization Your new organization
     */
    organizationsCreateOne(organization?: models.NewOrganization, extraHttpRequestParams?: any): Observable<models.Organization>;
    /**
     * Bulk delete existing organizations
     * Bulk delete existing organizations
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    organizationsDeleteMany(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     * delete existing organization
     * delete existing organization
     * @param organizationId The organization identifier
     */
    organizationsDeleteOne(organizationId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Returns organizations
     * Returns organizations
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;isPublic\&quot;: \&quot;true\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     * @param _public Fixed filter for public organizations
     */
    organizationsQuery(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, _public?: boolean, extraHttpRequestParams?: any): Observable<models.OrganizationPage>;
    /**
     * Get one existing organization
     * Get one existing organization
     * @param organizationId The organization identifier
     */
    organizationsReadOne(organizationId: string, extraHttpRequestParams?: any): Observable<models.Organization>;
    /**
     * Bulk update existing organizations
     * Bulk update existing organizations
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param organizationBulkUpdate Use filter to find the organizations and do a bulk update
     */
    organizationsUpdateMany(filter: string, organizationBulkUpdate: models.OrganizationBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    /**
     * update existing organization
     * update existing organization
     * @param organizationId The user identifier
     * @param updatedOrganization updated organization
     */
    organizationsUpdateOne(organizationId: string, updatedOrganization: models.OrganizationUpdate, extraHttpRequestParams?: any): Observable<models.Organization>;
    /**
     * Returns users that have signed up with a specific organization
     * Returns users that have signed up with a specific organization
     * @param organizationId The organization identifier
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;john doe\&quot;, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1, \&quot;name\&quot; : 1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    usersQueryByOrganization(organizationId: string, pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.UserPage>;
    /**
     * Returns a specific user that has signed up with a specific organization
     * Returns a specific user that has signed up with a specific organization
     * @param organizationId The organization identifier
     * @param userId The user identifier
     */
    usersReadOneByOrganization(organizationId: string, userId: string, extraHttpRequestParams?: any): Observable<models.User>;
    /**
     * Remove a specific user from an organization
     * Remove a specific user from an organization
     * @param organizationId The organization identifier
     * @param userId The user identifier
     */
    usersRemoveFromOrganization(organizationId: string, userId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Create new application
     * Create new application
     * @param organizationId Your Selfbits Organization ID
     * @param application Your new application
     */
    applicationsCreateOneByOrganizationWithHttpInfo(organizationId: string, application: models.NewApplication, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Delete existing SELFBITS CLOUD PLATFORM application
     * Delete existing SELFBITS CLOUD PLATFORM application
     * @param organizationId Your Selfbits Organization ID
     * @param applicationId The tenant application identifier
     */
    applicationsDeleteOneByOrganizationWithHttpInfo(organizationId: string, applicationId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Returns applications
     * Returns applications
     * @param organizationId The target organization
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    applicationsQueryByOrganizationWithHttpInfo(organizationId: string, pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create new application
     * Create new application
     * @param organizationId Your Selfbits Organization ID
     * @param applicationId The tenant application identifier
     */
    applicationsReadOneByOrganizationWithHttpInfo(organizationId: string, applicationId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create new directory
     * Create new directory
     * @param organizationId The target organization
     * @param directory Your new directory
     */
    directoriesCreateOneByOrganizationWithHttpInfo(organizationId: string, directory?: models.NewDirectory, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Bulk delete existing directories
     * Bulk delete existing directories
     * @param organizationId The target organization
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    directoriesDeleteManyByOrganizationWithHttpInfo(organizationId: string, filter: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * delete existing directory
     * delete existing directory
     * @param organizationId The target organization
     * @param directoryId The directory identifier
     */
    directoriesDeleteOneByOrganizationWithHttpInfo(organizationId: string, directoryId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Returns directories
     * Returns directories
     * @param organizationId The target organization
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    directoriesQueryByOrganizationWithHttpInfo(organizationId: string, pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get one existing directory
     * Get one existing directory
     * @param organizationId The target organization
     * @param directoryId The directory identifier
     */
    directoriesReadOneByOrganizationWithHttpInfo(organizationId: string, directoryId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Bulk update existing users
     * Bulk update existing users
     * @param organizationId The target organization
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param directoryBulkUpdate Use filter to find the directories and do a bulk update
     */
    directoriesUpdateManyByOrganizationWithHttpInfo(organizationId: string, filter: string, directoryBulkUpdate: models.DirectoryBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * update existing directory
     * update existing directory
     * @param organizationId The target organization
     * @param directoryId The user identifier
     * @param updatedDirectory updated directory
     */
    directoriesUpdateOneByOrganizationWithHttpInfo(organizationId: string, directoryId: string, updatedDirectory: models.DirectoryUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create organization invite
     * Create organization invite
     * @param organizationId The target organization of your invite
     */
    invitesCreateOneByOrganizationWithHttpInfo(organizationId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create organization invite
     * Create organization invite
     * @param organizationId The target organization of your invite
     * @param userId The user identifier
     */
    invitesCreateOneByOrganizationAndUserWithHttpInfo(organizationId: string, userId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Bulk delete existing organization invites
     * Bulk delete existing organization invites
     * @param organizationId The target organization of your invite
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    invitesDeleteManyByOrganizationWithHttpInfo(organizationId: string, filter: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * delete existing invite
     * delete existing invite
     * @param organizationId The target organization of your invite
     * @param inviteId The invite identifier
     */
    invitesDeleteOneByOrganizationWithHttpInfo(organizationId: string, inviteId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * delete existing invite
     * delete existing invite
     * @param organizationId The target organization of your invite
     * @param userId The user identifier
     * @param inviteId The invite identifier
     */
    invitesDeleteOneByOrganizationAndUserWithHttpInfo(organizationId: string, userId: string, inviteId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Returns invites
     * Returns invites
     * @param organizationId The target organization of your invite
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;isPublic\&quot;: \&quot;true\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    invitesQueryByOrganizationWithHttpInfo(organizationId: string, pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Returns invites
     * Returns invites
     * @param organizationId The target organization of your invite
     * @param userId The user identifier
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;isPublic\&quot;: \&quot;true\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    invitesQueryByOrganizationAndUserWithHttpInfo(organizationId: string, userId: string, pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get one existing invite
     * Get one existing invite
     * @param organizationId The target organization of your invite
     * @param inviteId The invite identifier
     */
    invitesReadOneByOrganizationWithHttpInfo(organizationId: string, inviteId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create multiple new organizations
     * Create multiple new organizations
     * @param organizations Multiple organizations
     */
    organizationsCreateManyWithHttpInfo(organizations?: models.NewOrganizationArray, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create new organization
     * Create new organization
     * @param organization Your new organization
     */
    organizationsCreateOneWithHttpInfo(organization?: models.NewOrganization, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Bulk delete existing organizations
     * Bulk delete existing organizations
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    organizationsDeleteManyWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * delete existing organization
     * delete existing organization
     * @param organizationId The organization identifier
     */
    organizationsDeleteOneWithHttpInfo(organizationId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Returns organizations
     * Returns organizations
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;isPublic\&quot;: \&quot;true\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     * @param _public Fixed filter for public organizations
     */
    organizationsQueryWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, _public?: boolean, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get one existing organization
     * Get one existing organization
     * @param organizationId The organization identifier
     */
    organizationsReadOneWithHttpInfo(organizationId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Bulk update existing organizations
     * Bulk update existing organizations
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param organizationBulkUpdate Use filter to find the organizations and do a bulk update
     */
    organizationsUpdateManyWithHttpInfo(filter: string, organizationBulkUpdate: models.OrganizationBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * update existing organization
     * update existing organization
     * @param organizationId The user identifier
     * @param updatedOrganization updated organization
     */
    organizationsUpdateOneWithHttpInfo(organizationId: string, updatedOrganization: models.OrganizationUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Returns users that have signed up with a specific organization
     * Returns users that have signed up with a specific organization
     * @param organizationId The organization identifier
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;john doe\&quot;, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1, \&quot;name\&quot; : 1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    usersQueryByOrganizationWithHttpInfo(organizationId: string, pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Returns a specific user that has signed up with a specific organization
     * Returns a specific user that has signed up with a specific organization
     * @param organizationId The organization identifier
     * @param userId The user identifier
     */
    usersReadOneByOrganizationWithHttpInfo(organizationId: string, userId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Remove a specific user from an organization
     * Remove a specific user from an organization
     * @param organizationId The organization identifier
     * @param userId The user identifier
     */
    usersRemoveFromOrganizationWithHttpInfo(organizationId: string, userId: string, extraHttpRequestParams?: any): Observable<Response>;
}
