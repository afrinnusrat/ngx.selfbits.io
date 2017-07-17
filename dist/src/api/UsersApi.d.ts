import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class UsersApi {
    protected http: Http;
    configuration: Configuration;
    defaultHeaders: Headers;
    sbClientId: string;
    sbClientSecret: string;
    constructor(http: Http, configuration: Configuration);
    /**
     * Create or update device based on submitted uuid
     * Create or update device based on submitted uuid
     * @param userId The user identifier or me
     * @param device New or existing device
     */
    devicesCreateOneByUser(userId: string, device?: models.NewDevice, extraHttpRequestParams?: any): Observable<models.Device>;
    /**
     * delete existing device
     * delete existing device
     * @param userId The user identifier or me
     * @param deviceId The device identifier
     */
    devicesDeleteOneByUser(userId: string, deviceId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Return the devices of the user
     * Return the devices of the user
     * @param userId The user identifier or me
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    devicesQueryByUser(userId: string, pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.DevicePage>;
    /**
     * Get one existing device
     * Get one existing device
     * @param userId The user identifier or me
     * @param deviceId The device identifier
     */
    devicesReadOneByUser(userId: string, deviceId: string, extraHttpRequestParams?: any): Observable<models.Device>;
    /**
     * update existing device
     * update existing device
     * @param userId The user identifier or me
     * @param deviceId The user identifier
     * @param updatedDevice updated device
     */
    devicesUpdateOneByUser(userId: string, deviceId: string, updatedDevice: models.DeviceUpdate, extraHttpRequestParams?: any): Observable<models.Device>;
    /**
     * Query user invites
     * Query user invites
     * @param userId The user identifier
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;john doe\&quot;, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1, \&quot;name\&quot; : 1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    invitesQueryByUser(userId: string, pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.OrganizationInvitePage>;
    /**
     * Query current user invites
     * Query current user invites
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;john doe\&quot;, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1, \&quot;name\&quot; : 1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    invitesQueryOfCurrentUser(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.OrganizationInvitePage>;
    /**
     * Reject an organization invite
     * Reject an organization invite
     * @param userId The user identifier
     * @param inviteId The invite identifier
     */
    invitesReadOneByUser(userId: string, inviteId: string, extraHttpRequestParams?: any): Observable<models.Organization>;
    /**
     * Query user organizations
     * Query user organizations
     * @param userId The user identifier
     */
    organizationsQueryByUser(userId: string, extraHttpRequestParams?: any): Observable<models.OrganizationPage>;
    /**
     * Get one organization of a user
     * Get one organization of a user
     * @param userId The user identifier
     * @param organizationId The organization identifier
     */
    organizationsReadOneByUser(userId: string, organizationId: string, extraHttpRequestParams?: any): Observable<models.Organization>;
    /**
     * Create or update push endpoint based on submitted uuid
     * Create or update push endpoint based on submitted uuid
     * @param pushEndpoint device push endpoint
     */
    pushendpointsCreateOneOfCurrentUser(pushEndpoint: models.NewDevicePushEndpoint, extraHttpRequestParams?: any): Observable<models.DevicePushEndpoint>;
    /**
     * Bulk delete existing push endpoints
     * Bulk delete existing push endpoints
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    pushendpointsDeleteManyOfCurrentUser(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     * delete existing device
     * delete existing device
     * @param uuid The device uuid
     */
    pushendpointsDeleteOneOfCurrentUserByUuid(uuid: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Disable receiving push notifications on the given endpoint
     * Disable receiving push notifications on the given endpoint
     * @param uuid The device uuid
     * @param pushEndpoint device push endpoint
     */
    pushendpointsDisableOneOfCurrentUserByUuid(uuid: string, pushEndpoint: models.NewDevicePushEndpoint, extraHttpRequestParams?: any): Observable<models.DevicePushEndpoint>;
    /**
     * Enable receiving push notifications on the given endpoint
     * Enable receiving push notifications on the given endpoint
     * @param uuid The device uuid
     * @param pushEndpoint device push endpoint
     */
    pushendpointsEnableOneOfCurrentUserByUuid(uuid: string, pushEndpoint: models.NewDevicePushEndpoint, extraHttpRequestParams?: any): Observable<models.DevicePushEndpoint>;
    /**
     * Return the push endpoints of the user
     * Return the push endpoints of the user
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    pushendpointsQueryOfCurrentUser(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.DevicePushEndpointPage>;
    /**
     * Get one existing device
     * Get one existing device
     * @param uuid The device uuid
     */
    pushendpointsReadOneOfCurrentUserByUuid(uuid: string, extraHttpRequestParams?: any): Observable<models.DevicePushEndpoint>;
    /**
     * Trigger email verification for current user
     * Trigger email verification for current user
     * @param sendVerificationEmailRequest Email you want to verifiy
     */
    sendEmailVerification(sendVerificationEmailRequest: models.SendVerificationEmailRequest, extraHttpRequestParams?: any): Observable<models.SendVerificationEmailResponse>;
    /**
     * Trigger email verification for a user
     * Trigger email verification for a user
     * @param userId The user identifier or me
     * @param sendVerificationEmailRequest Email you want to verifiy
     */
    sendEmailVerificationByUser(userId: string, sendVerificationEmailRequest: models.SendVerificationEmailRequest, extraHttpRequestParams?: any): Observable<models.SendVerificationEmailResponse>;
    /**
     * change user password
     * change user password
     * @param changePasswordRequest change password request
     */
    usersChangeMyPassword(changePasswordRequest: models.ChangePasswordRequest, extraHttpRequestParams?: any): Observable<models.ChangePasswordResponse>;
    /**
     * Returns users
     * Returns users
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;john doe\&quot;, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1, \&quot;name\&quot; : 1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    usersQuery(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.UserPage>;
    /**
     * Get one existing users
     * Get current user
     */
    usersReadCurrent(extraHttpRequestParams?: any): Observable<models.User>;
    /**
     * Get one user
     * Get one user
     * @param userId The user identifier
     */
    usersReadOne(userId: string, extraHttpRequestParams?: any): Observable<models.User>;
    /**
     * remove user from all organizations
     * remove user from all organizations
     */
    usersRemoveCurrentFromAllOrganizations(extraHttpRequestParams?: any): Observable<{}>;
    /**
     * remove user from all organizations
     * remove user from all organizations
     * @param userId The user identifier or me
     */
    usersRemoveOneFromAllOrganizations(userId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * update current user
     * update current user
     * @param updatedUser updated user
     */
    usersUpdateCurrent(updatedUser: models.UserUpdate, extraHttpRequestParams?: any): Observable<models.User>;
    /**
     * update a user
     * update a user
     * @param userId The user identifier
     * @param updatedUser updated user
     */
    usersUpdateOne(userId: string, updatedUser: models.UserUpdate, extraHttpRequestParams?: any): Observable<models.User>;
    /**
     * Create or update device based on submitted uuid
     * Create or update device based on submitted uuid
     * @param userId The user identifier or me
     * @param device New or existing device
     */
    devicesCreateOneByUserWithHttpInfo(userId: string, device?: models.NewDevice, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * delete existing device
     * delete existing device
     * @param userId The user identifier or me
     * @param deviceId The device identifier
     */
    devicesDeleteOneByUserWithHttpInfo(userId: string, deviceId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Return the devices of the user
     * Return the devices of the user
     * @param userId The user identifier or me
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    devicesQueryByUserWithHttpInfo(userId: string, pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get one existing device
     * Get one existing device
     * @param userId The user identifier or me
     * @param deviceId The device identifier
     */
    devicesReadOneByUserWithHttpInfo(userId: string, deviceId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * update existing device
     * update existing device
     * @param userId The user identifier or me
     * @param deviceId The user identifier
     * @param updatedDevice updated device
     */
    devicesUpdateOneByUserWithHttpInfo(userId: string, deviceId: string, updatedDevice: models.DeviceUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Query user invites
     * Query user invites
     * @param userId The user identifier
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;john doe\&quot;, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1, \&quot;name\&quot; : 1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    invitesQueryByUserWithHttpInfo(userId: string, pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Query current user invites
     * Query current user invites
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;john doe\&quot;, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1, \&quot;name\&quot; : 1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    invitesQueryOfCurrentUserWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Reject an organization invite
     * Reject an organization invite
     * @param userId The user identifier
     * @param inviteId The invite identifier
     */
    invitesReadOneByUserWithHttpInfo(userId: string, inviteId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Query user organizations
     * Query user organizations
     * @param userId The user identifier
     */
    organizationsQueryByUserWithHttpInfo(userId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get one organization of a user
     * Get one organization of a user
     * @param userId The user identifier
     * @param organizationId The organization identifier
     */
    organizationsReadOneByUserWithHttpInfo(userId: string, organizationId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create or update push endpoint based on submitted uuid
     * Create or update push endpoint based on submitted uuid
     * @param pushEndpoint device push endpoint
     */
    pushendpointsCreateOneOfCurrentUserWithHttpInfo(pushEndpoint: models.NewDevicePushEndpoint, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Bulk delete existing push endpoints
     * Bulk delete existing push endpoints
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    pushendpointsDeleteManyOfCurrentUserWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * delete existing device
     * delete existing device
     * @param uuid The device uuid
     */
    pushendpointsDeleteOneOfCurrentUserByUuidWithHttpInfo(uuid: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Disable receiving push notifications on the given endpoint
     * Disable receiving push notifications on the given endpoint
     * @param uuid The device uuid
     * @param pushEndpoint device push endpoint
     */
    pushendpointsDisableOneOfCurrentUserByUuidWithHttpInfo(uuid: string, pushEndpoint: models.NewDevicePushEndpoint, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Enable receiving push notifications on the given endpoint
     * Enable receiving push notifications on the given endpoint
     * @param uuid The device uuid
     * @param pushEndpoint device push endpoint
     */
    pushendpointsEnableOneOfCurrentUserByUuidWithHttpInfo(uuid: string, pushEndpoint: models.NewDevicePushEndpoint, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Return the push endpoints of the user
     * Return the push endpoints of the user
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    pushendpointsQueryOfCurrentUserWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get one existing device
     * Get one existing device
     * @param uuid The device uuid
     */
    pushendpointsReadOneOfCurrentUserByUuidWithHttpInfo(uuid: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Trigger email verification for current user
     * Trigger email verification for current user
     * @param sendVerificationEmailRequest Email you want to verifiy
     */
    sendEmailVerificationWithHttpInfo(sendVerificationEmailRequest: models.SendVerificationEmailRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Trigger email verification for a user
     * Trigger email verification for a user
     * @param userId The user identifier or me
     * @param sendVerificationEmailRequest Email you want to verifiy
     */
    sendEmailVerificationByUserWithHttpInfo(userId: string, sendVerificationEmailRequest: models.SendVerificationEmailRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * change user password
     * change user password
     * @param changePasswordRequest change password request
     */
    usersChangeMyPasswordWithHttpInfo(changePasswordRequest: models.ChangePasswordRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Returns users
     * Returns users
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;john doe\&quot;, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1, \&quot;name\&quot; : 1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    usersQueryWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get one existing users
     * Get current user
     */
    usersReadCurrentWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get one user
     * Get one user
     * @param userId The user identifier
     */
    usersReadOneWithHttpInfo(userId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * remove user from all organizations
     * remove user from all organizations
     */
    usersRemoveCurrentFromAllOrganizationsWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * remove user from all organizations
     * remove user from all organizations
     * @param userId The user identifier or me
     */
    usersRemoveOneFromAllOrganizationsWithHttpInfo(userId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * update current user
     * update current user
     * @param updatedUser updated user
     */
    usersUpdateCurrentWithHttpInfo(updatedUser: models.UserUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * update a user
     * update a user
     * @param userId The user identifier
     * @param updatedUser updated user
     */
    usersUpdateOneWithHttpInfo(userId: string, updatedUser: models.UserUpdate, extraHttpRequestParams?: any): Observable<Response>;
}
