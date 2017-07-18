import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class CoreAdminApi {
    protected http: Http;
    configuration: Configuration;
    defaultHeaders: Headers;
    sbClientId: string;
    sbClientSecret: string;
    constructor(http: Http, configuration: Configuration);
    /**
     * Execute a REST request to a deployed REST API
     * Execute a REST request to a deployed REST API
     * @param stage The stage identifier
     * @param resource The resource path
     */
    _delete(stage: string, resource: string, extraHttpRequestParams?: any): Observable<models.RestEndpointExecutionResponse>;
    /**
     * Create multiple new actions
     * Create multiple new actions
     * @param actions Multiple actions
     */
    actionsCreateMany(actions?: models.NewActionArray, extraHttpRequestParams?: any): Observable<models.ActionArray>;
    /**
     * Create new action
     * Create new action
     * @param action Your new action
     */
    actionsCreateOne(action?: models.NewAction, extraHttpRequestParams?: any): Observable<models.Action>;
    /**
     * Bulk delete existing actions
     * Bulk delete existing actions
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    actionsDeleteMany(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     * delete existing action
     * delete existing action
     * @param actionId The action identifier
     */
    actionsDeleteOne(actionId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Execute action.
     * Execute action. If the action code throws errors, they are caught and information is provided in the payload with status code 200.
     * @param actionId The action identifier
     * @param payload Execution payload
     */
    actionsExecuteOne(actionId: string, payload?: models.ActionExecutionRequestPayload, extraHttpRequestParams?: any): Observable<models.ActionExecutionResponse>;
    /**
     * Returns actions
     * Returns actions
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    actionsQuery(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.ActionPage>;
    /**
     * Get one existing action
     * Get one existing action
     * @param actionId The action identifier
     */
    actionsReadOne(actionId: string, extraHttpRequestParams?: any): Observable<models.Action>;
    /**
     * Bulk update existing actions
     * Bulk update existing actions
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param actionBulkUpdate Use filter to find the actions and do a bulk update
     */
    actionsUpdateMany(filter: string, actionBulkUpdate: models.ActionBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    /**
     * update existing action
     * update existing action
     * @param actionId The user identifier
     * @param updatedAction updated action
     */
    actionsUpdateOne(actionId: string, updatedAction: models.ActionUpdate, extraHttpRequestParams?: any): Observable<models.Action>;
    /**
     * change user password globally
     * change user password globally
     * @param userId The user identifier or me
     * @param adminChangePasswordRequest change password request
     */
    changeUserPasswordAllOrganizations(userId: string, adminChangePasswordRequest: models.AdminChangePasswordRequest, extraHttpRequestParams?: any): Observable<models.AdminChangePasswordResponse>;
    /**
     * change user password for one organization
     * change user password for one organization
     * @param userId The user identifier or me
     * @param organizationId The user identifier or me
     * @param adminChangePasswordRequest change password request
     */
    changeUserPasswordByOrganization(userId: string, organizationId: string, adminChangePasswordRequest: models.AdminChangePasswordRequest, extraHttpRequestParams?: any): Observable<models.AdminChangePasswordResponse>;
    /**
     * Create multiple new clients
     * Create multiple new clients
     * @param clients Multiple clients
     */
    clientsCreateMany(clients?: models.NewClientArray, extraHttpRequestParams?: any): Observable<models.ClientArray>;
    /**
     * Create new client
     * Create new client
     * @param client Your new client
     */
    clientsCreateOne(client?: models.NewClient, extraHttpRequestParams?: any): Observable<models.Client>;
    /**
     * Bulk delete existing clients
     * Bulk delete existing clients
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    clientsDeleteMany(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     * delete existing client
     * delete existing client
     * @param clientId The client identifier
     */
    clientsDeleteOne(clientId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Returns clients
     * Returns clients
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    clientsQuery(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.ClientPage>;
    /**
     * Get one existing client
     * Get one existing client
     * @param clientId The client identifier
     */
    clientsReadOne(clientId: string, extraHttpRequestParams?: any): Observable<models.Client>;
    /**
     * Bulk update existing clients
     * Bulk update existing clients
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param clientBulkUpdate Use filter to find the clients and do a bulk update
     */
    clientsUpdateMany(filter: string, clientBulkUpdate: models.ClientBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    /**
     * update existing client
     * update existing client
     * @param clientId The user identifier
     * @param updatedClient updated client
     */
    clientsUpdateOne(clientId: string, updatedClient: models.ClientUpdate, extraHttpRequestParams?: any): Observable<models.Client>;
    /**
     * Bulk delete existing consumers
     * Bulk delete existing consumers
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    consumersDeleteMany(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     * delete existing consumer
     * delete existing consumer
     * @param consumerId The consumer identifier
     */
    consumersDeleteOne(consumerId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Returns consumers
     * Returns consumers
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    consumersQuery(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.ConsumerPage>;
    /**
     * Get one existing consumer
     * Get one existing consumer
     * @param consumerId The consumer identifier
     */
    consumersReadOne(consumerId: string, extraHttpRequestParams?: any): Observable<models.Consumer>;
    /**
     * Bulk update existing consumers
     * Bulk update existing consumers
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param consumerBulkUpdate Use filter to find the consumers and do a bulk update
     */
    consumersUpdateMany(filter: string, consumerBulkUpdate: models.ConsumerBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    /**
     * update existing consumer
     * update existing consumer
     * @param consumerId The user identifier
     * @param updatedConsumer updated consumer
     */
    consumersUpdateOne(consumerId: string, updatedConsumer: models.ConsumerUpdate, extraHttpRequestParams?: any): Observable<models.Consumer>;
    /**
     * Bulk delete existing devices
     * Bulk delete existing devices
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    devicesDeleteMany(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     * delete existing device
     * delete existing device
     * @param deviceId The device identifier
     */
    devicesDeleteOne(deviceId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Returns devices
     * Returns devices
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    devicesQuery(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.DevicePage>;
    /**
     * Get one existing device
     * Get one existing device
     * @param deviceId The device identifier
     */
    devicesReadOne(deviceId: string, extraHttpRequestParams?: any): Observable<models.Device>;
    /**
     * Create multiple new directories
     * Create multiple new directories
     * @param directories Multiple directories
     */
    directoriesCreateMany(directories?: models.NewDirectoryArray, extraHttpRequestParams?: any): Observable<models.DirectoryArray>;
    /**
     * Create new directory
     * Create new directory
     * @param directory Your new directory
     */
    directoriesCreateOne(directory?: models.NewDirectory, extraHttpRequestParams?: any): Observable<models.Directory>;
    /**
     * Bulk delete existing directories
     * Bulk delete existing directories
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    directoriesDeleteMany(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     * delete existing directory
     * delete existing directory
     * @param directoryId The directory identifier
     */
    directoriesDeleteOne(directoryId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Returns directories
     * Returns directories
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    directoriesQuery(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.DirectoryPage>;
    /**
     * Get one existing directory
     * Get one existing directory
     * @param directoryId The directory identifier
     */
    directoriesReadOne(directoryId: string, extraHttpRequestParams?: any): Observable<models.Directory>;
    /**
     * Bulk update existing users
     * Bulk update existing users
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param directoryBulkUpdate Use filter to find the directories and do a bulk update
     */
    directoriesUpdateMany(filter: string, directoryBulkUpdate: models.DirectoryBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    /**
     * update existing directory
     * update existing directory
     * @param directoryId The user identifier
     * @param updatedDirectory updated directory
     */
    directoriesUpdateOne(directoryId: string, updatedDirectory: models.DirectoryUpdate, extraHttpRequestParams?: any): Observable<models.Directory>;
    /**
     * Create multiple new endpoints
     * Create multiple new endpoints
     * @param endpoints Multiple endpoints
     */
    endpointsCreateMany(endpoints?: models.NewEndpointArray, extraHttpRequestParams?: any): Observable<models.EndpointArray>;
    /**
     * Create new endpoint
     * Create new endpoint
     * @param endpoint Your new endpoint
     */
    endpointsCreateOne(endpoint?: models.NewEndpoint, extraHttpRequestParams?: any): Observable<models.Endpoint>;
    /**
     * Bulk delete existing endpoints
     * Bulk delete existing endpoints
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    endpointsDeleteMany(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     * delete existing endpoint
     * delete existing endpoint
     * @param endpointId The endpoint identifier
     */
    endpointsDeleteOne(endpointId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Deploy endpoint to stage
     * Deploy endpoint to stage
     * @param endpointId The endpoint identifier
     * @param stage The stage identifier
     */
    endpointsDeployOneToStage(endpointId: string, stage: string, extraHttpRequestParams?: any): Observable<models.RestEndpoint>;
    /**
     * Returns endpoints
     * Returns endpoints
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    endpointsQuery(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.EndpointPage>;
    /**
     * Get one existing endpoint
     * Get one existing endpoint
     * @param endpointId The endpoint identifier
     */
    endpointsReadOne(endpointId: string, extraHttpRequestParams?: any): Observable<models.Endpoint>;
    /**
     * Bulk update existing users
     * Bulk update existing users
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param endpointBulkUpdate Use filter to find the endpoints and do a bulk update
     */
    endpointsUpdateMany(filter: string, endpointBulkUpdate: models.EndpointBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    /**
     * update existing endpoint
     * update existing endpoint
     * @param endpointId The user identifier
     * @param updatedEndpoint updated endpoint
     */
    endpointsUpdateOne(endpointId: string, updatedEndpoint: models.EndpointUpdate, extraHttpRequestParams?: any): Observable<models.Endpoint>;
    /**
     * Execute a REST request to a deployed REST API
     * Execute a REST request to a deployed REST API
     * @param stage The stage identifier
     * @param resource The resource path
     */
    get(stage: string, resource: string, extraHttpRequestParams?: any): Observable<models.RestEndpointExecutionResponse>;
    /**
     * Bulk delete existing invites
     * Bulk delete existing invites
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    invitesDeleteMany(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     * delete existing invite
     * delete existing invite
     * @param inviteId The invite identifier
     */
    invitesDeleteOne(inviteId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Returns invites
     * Returns invites
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    invitesQuery(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.OrganizationInvitePage>;
    /**
     * Get one existing invite
     * Get one existing invite
     * @param inviteId The invite identifier
     */
    invitesReadOne(inviteId: string, extraHttpRequestParams?: any): Observable<models.OrganizationInvite>;
    /**
     * Create new mailServer
     * Create new mailServer
     * @param mailServer Your new mailServer
     */
    mailserversCreateOne(mailServer?: models.NewMailServer, extraHttpRequestParams?: any): Observable<models.MailServer>;
    /**
     * Bulk delete existing mailservers
     * Bulk delete existing mailservers
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    mailserversDeleteMany(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     * delete existing mailServer
     * delete existing mailServer
     * @param mailServerId The mailServer identifier
     */
    mailserversDeleteOne(mailServerId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Disable the push service.
     * Disable the push service.
     * @param mailServerId The mailServer identifier
     */
    mailserversDisableOne(mailServerId: string, extraHttpRequestParams?: any): Observable<models.MailServer>;
    /**
     * Enable the push service.
     * Enable the push service.
     * @param mailServerId The mailServer identifier
     */
    mailserversEnableOne(mailServerId: string, extraHttpRequestParams?: any): Observable<models.MailServer>;
    /**
     * Returns mail servers
     * Returns mail servers
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    mailserversQuery(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.MailServerPage>;
    /**
     * Get one existing mailServer
     * Get one existing mailServer
     * @param mailServerId The mailServer identifier
     */
    mailserversReadOne(mailServerId: string, extraHttpRequestParams?: any): Observable<models.MailServer>;
    /**
     * update existing mailServer
     * update existing mailServer
     * @param mailServerId The user identifier
     * @param updatedMailServer updated mailServer
     */
    mailserversUpdateOne(mailServerId: string, updatedMailServer: models.MailServerUpdate, extraHttpRequestParams?: any): Observable<models.MailServer>;
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
     * Execute a REST request to a deployed REST API
     * Execute a REST request to a deployed REST API
     * @param stage The stage identifier
     * @param resource The resource path
     * @param payload Execution payload
     */
    post(stage: string, resource: string, payload?: models.RestEndpointExecutionRequestPayload, extraHttpRequestParams?: any): Observable<models.RestEndpointExecutionResponse>;
    /**
     * Create multiple new providers
     * Create multiple new providers
     * @param providers Multiple providers
     */
    providersCreateMany(providers?: models.NewProviderArray, extraHttpRequestParams?: any): Observable<models.ProviderArray>;
    /**
     * Create new provider
     * Create new provider
     * @param provider Your new provider
     */
    providersCreateOne(provider?: models.NewProvider, extraHttpRequestParams?: any): Observable<models.Provider>;
    /**
     * Bulk delete existing providers
     * Bulk delete existing providers
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    providersDeleteMany(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     * delete existing provider
     * delete existing provider
     * @param providerId The provider identifier
     */
    providersDeleteOne(providerId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Returns providers
     * Returns providers
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    providersQuery(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.ProviderPage>;
    /**
     * Get one existing provider
     * Get one existing provider
     * @param providerId The provider identifier
     */
    providersReadOne(providerId: string, extraHttpRequestParams?: any): Observable<models.Provider>;
    /**
     * Bulk update existing providers
     * Bulk update existing providers
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param providerBulkUpdate Use filter to find the providers and do a bulk update
     */
    providersUpdateMany(filter: string, providerBulkUpdate: models.ProviderBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    /**
     * update existing provider
     * update existing provider
     * @param providerId The user identifier
     * @param updatedProvider updated provider
     */
    providersUpdateOne(providerId: string, updatedProvider: models.ProviderUpdate, extraHttpRequestParams?: any): Observable<models.Provider>;
    /**
     * Create new pushService
     * Create new pushService
     * @param pushService Your new pushService
     */
    pushservicesCreateOne(pushService?: models.NewPushService, extraHttpRequestParams?: any): Observable<models.PushService>;
    /**
     * Bulk delete existing pushservices
     * Bulk delete existing pushservices
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    pushservicesDeleteMany(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     * delete existing pushService
     * delete existing pushService
     * @param pushServiceId The pushService identifier
     */
    pushservicesDeleteOne(pushServiceId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Disable the push service.
     * Disable the push service.
     * @param pushServiceId The pushService identifier
     */
    pushservicesDisableOne(pushServiceId: string, extraHttpRequestParams?: any): Observable<models.PushService>;
    /**
     * Enable the push service.
     * Enable the push service.
     * @param pushServiceId The pushService identifier
     */
    pushservicesEnableOne(pushServiceId: string, extraHttpRequestParams?: any): Observable<models.PushService>;
    /**
     * Returns pushservices
     * Returns pushservices
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    pushservicesQuery(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.PushServicePage>;
    /**
     * Get one existing pushService
     * Get one existing pushService
     * @param pushServiceId The pushService identifier
     */
    pushservicesReadOne(pushServiceId: string, extraHttpRequestParams?: any): Observable<models.PushService>;
    /**
     * update existing pushService
     * update existing pushService
     * @param pushServiceId The user identifier
     * @param updatedPushService updated pushService
     */
    pushservicesUpdateOne(pushServiceId: string, updatedPushService: models.PushServiceUpdate, extraHttpRequestParams?: any): Observable<models.PushService>;
    /**
     * Execute a REST request to a deployed REST API
     * Execute a REST request to a deployed REST API
     * @param stage The stage identifier
     * @param resource The resource path
     * @param payload Execution payload
     */
    put(stage: string, resource: string, payload?: models.RestEndpointExecutionRequestPayload, extraHttpRequestParams?: any): Observable<models.RestEndpointExecutionResponse>;
    /**
     * Create multiple new roles
     * Create multiple new roles
     * @param roles Multiple roles
     */
    rolesCreateMany(roles?: models.NewRoleArray, extraHttpRequestParams?: any): Observable<models.RoleArray>;
    /**
     * Create new role
     * Create new role
     * @param role Your new role
     */
    rolesCreateOne(role?: models.NewRole, extraHttpRequestParams?: any): Observable<models.Role>;
    /**
     * Bulk delete existing roles
     * Bulk delete existing roles
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    rolesDeleteMany(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     * delete existing role
     * delete existing role
     * @param roleId The role identifier
     */
    rolesDeleteOne(roleId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Returns roles
     * Returns roles
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    rolesQuery(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.RolePage>;
    /**
     * Get one existing role
     * Get one existing role
     * @param roleId The role identifier
     */
    rolesReadOne(roleId: string, extraHttpRequestParams?: any): Observable<models.Role>;
    /**
     * Bulk update existing roles
     * Bulk update existing roles
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param roleBulkUpdate Use filter to find the roles and do a bulk update
     */
    rolesUpdateMany(filter: string, roleBulkUpdate: models.RoleBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    /**
     * update existing role
     * update existing role
     * @param roleId The user identifier
     * @param updatedRole updated role
     */
    rolesUpdateOne(roleId: string, updatedRole: models.RoleUpdate, extraHttpRequestParams?: any): Observable<models.Role>;
    /**
     * Create new smsService
     * Create new smsService
     * @param smsService Your new smsService
     */
    smsServiceCreateOne(smsService?: models.NewSmsService, extraHttpRequestParams?: any): Observable<models.SmsService>;
    /**
     * Bulk delete existing sms
     * Bulk delete existing sms
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    smsServiceDeleteMany(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     * delete existing smsService
     * delete existing smsService
     * @param smsServiceId The smsService identifier
     */
    smsServiceDeleteOne(smsServiceId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Disable the sms service.
     * Disable the sms service.
     * @param smsServiceId The smsService identifier
     */
    smsServiceDisableOne(smsServiceId: string, extraHttpRequestParams?: any): Observable<models.SmsService>;
    /**
     * Enable the sms service.
     * Enable the sms service.
     * @param smsServiceId The smsService identifier
     */
    smsServiceEnableOne(smsServiceId: string, extraHttpRequestParams?: any): Observable<models.SmsService>;
    /**
     * Returns sms services
     * Returns sms services
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    smsServiceQuery(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.SmsServicePage>;
    /**
     * Get one existing smsService
     * Get one existing smsService
     * @param smsServiceId The smsService identifier
     */
    smsServiceReadOne(smsServiceId: string, extraHttpRequestParams?: any): Observable<models.SmsService>;
    /**
     * update existing smsService
     * update existing smsService
     * @param smsServiceId The user identifier
     * @param updatedSmsService updated smsService
     */
    smsServiceUpdateOne(smsServiceId: string, updatedSmsService: models.SmsServiceUpdate, extraHttpRequestParams?: any): Observable<models.SmsService>;
    /**
     * delete existing user
     * delete existing user
     * @param userId The user identifier or me
     */
    usersDeleteOne(userId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Query existing users
     * Query existing users
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;john doe\&quot;, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1, \&quot;name\&quot; : 1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    usersQuery(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.UserPage>;
    /**
     * Get one existing users
     * Get one existing users
     * @param userId The user identifier
     */
    usersReadOne(userId: string, extraHttpRequestParams?: any): Observable<models.User>;
    /**
     * update existing user
     * update existing user
     * @param userId The user identifier
     * @param updatedUser updated user
     */
    usersUpdateOne(userId: string, updatedUser: models.UserUpdate, extraHttpRequestParams?: any): Observable<models.User>;
    /**
     * Execute a REST request to a deployed REST API
     * Execute a REST request to a deployed REST API
     * @param stage The stage identifier
     * @param resource The resource path
     */
    _deleteWithHttpInfo(stage: string, resource: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create multiple new actions
     * Create multiple new actions
     * @param actions Multiple actions
     */
    actionsCreateManyWithHttpInfo(actions?: models.NewActionArray, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create new action
     * Create new action
     * @param action Your new action
     */
    actionsCreateOneWithHttpInfo(action?: models.NewAction, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Bulk delete existing actions
     * Bulk delete existing actions
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    actionsDeleteManyWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * delete existing action
     * delete existing action
     * @param actionId The action identifier
     */
    actionsDeleteOneWithHttpInfo(actionId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Execute action.
     * Execute action. If the action code throws errors, they are caught and information is provided in the payload with status code 200.
     * @param actionId The action identifier
     * @param payload Execution payload
     */
    actionsExecuteOneWithHttpInfo(actionId: string, payload?: models.ActionExecutionRequestPayload, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Returns actions
     * Returns actions
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    actionsQueryWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get one existing action
     * Get one existing action
     * @param actionId The action identifier
     */
    actionsReadOneWithHttpInfo(actionId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Bulk update existing actions
     * Bulk update existing actions
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param actionBulkUpdate Use filter to find the actions and do a bulk update
     */
    actionsUpdateManyWithHttpInfo(filter: string, actionBulkUpdate: models.ActionBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * update existing action
     * update existing action
     * @param actionId The user identifier
     * @param updatedAction updated action
     */
    actionsUpdateOneWithHttpInfo(actionId: string, updatedAction: models.ActionUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * change user password globally
     * change user password globally
     * @param userId The user identifier or me
     * @param adminChangePasswordRequest change password request
     */
    changeUserPasswordAllOrganizationsWithHttpInfo(userId: string, adminChangePasswordRequest: models.AdminChangePasswordRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * change user password for one organization
     * change user password for one organization
     * @param userId The user identifier or me
     * @param organizationId The user identifier or me
     * @param adminChangePasswordRequest change password request
     */
    changeUserPasswordByOrganizationWithHttpInfo(userId: string, organizationId: string, adminChangePasswordRequest: models.AdminChangePasswordRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create multiple new clients
     * Create multiple new clients
     * @param clients Multiple clients
     */
    clientsCreateManyWithHttpInfo(clients?: models.NewClientArray, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create new client
     * Create new client
     * @param client Your new client
     */
    clientsCreateOneWithHttpInfo(client?: models.NewClient, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Bulk delete existing clients
     * Bulk delete existing clients
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    clientsDeleteManyWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * delete existing client
     * delete existing client
     * @param clientId The client identifier
     */
    clientsDeleteOneWithHttpInfo(clientId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Returns clients
     * Returns clients
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    clientsQueryWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get one existing client
     * Get one existing client
     * @param clientId The client identifier
     */
    clientsReadOneWithHttpInfo(clientId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Bulk update existing clients
     * Bulk update existing clients
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param clientBulkUpdate Use filter to find the clients and do a bulk update
     */
    clientsUpdateManyWithHttpInfo(filter: string, clientBulkUpdate: models.ClientBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * update existing client
     * update existing client
     * @param clientId The user identifier
     * @param updatedClient updated client
     */
    clientsUpdateOneWithHttpInfo(clientId: string, updatedClient: models.ClientUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Bulk delete existing consumers
     * Bulk delete existing consumers
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    consumersDeleteManyWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * delete existing consumer
     * delete existing consumer
     * @param consumerId The consumer identifier
     */
    consumersDeleteOneWithHttpInfo(consumerId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Returns consumers
     * Returns consumers
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    consumersQueryWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get one existing consumer
     * Get one existing consumer
     * @param consumerId The consumer identifier
     */
    consumersReadOneWithHttpInfo(consumerId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Bulk update existing consumers
     * Bulk update existing consumers
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param consumerBulkUpdate Use filter to find the consumers and do a bulk update
     */
    consumersUpdateManyWithHttpInfo(filter: string, consumerBulkUpdate: models.ConsumerBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * update existing consumer
     * update existing consumer
     * @param consumerId The user identifier
     * @param updatedConsumer updated consumer
     */
    consumersUpdateOneWithHttpInfo(consumerId: string, updatedConsumer: models.ConsumerUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Bulk delete existing devices
     * Bulk delete existing devices
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    devicesDeleteManyWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * delete existing device
     * delete existing device
     * @param deviceId The device identifier
     */
    devicesDeleteOneWithHttpInfo(deviceId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Returns devices
     * Returns devices
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    devicesQueryWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get one existing device
     * Get one existing device
     * @param deviceId The device identifier
     */
    devicesReadOneWithHttpInfo(deviceId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create multiple new directories
     * Create multiple new directories
     * @param directories Multiple directories
     */
    directoriesCreateManyWithHttpInfo(directories?: models.NewDirectoryArray, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create new directory
     * Create new directory
     * @param directory Your new directory
     */
    directoriesCreateOneWithHttpInfo(directory?: models.NewDirectory, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Bulk delete existing directories
     * Bulk delete existing directories
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    directoriesDeleteManyWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * delete existing directory
     * delete existing directory
     * @param directoryId The directory identifier
     */
    directoriesDeleteOneWithHttpInfo(directoryId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Returns directories
     * Returns directories
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    directoriesQueryWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get one existing directory
     * Get one existing directory
     * @param directoryId The directory identifier
     */
    directoriesReadOneWithHttpInfo(directoryId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Bulk update existing users
     * Bulk update existing users
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param directoryBulkUpdate Use filter to find the directories and do a bulk update
     */
    directoriesUpdateManyWithHttpInfo(filter: string, directoryBulkUpdate: models.DirectoryBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * update existing directory
     * update existing directory
     * @param directoryId The user identifier
     * @param updatedDirectory updated directory
     */
    directoriesUpdateOneWithHttpInfo(directoryId: string, updatedDirectory: models.DirectoryUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create multiple new endpoints
     * Create multiple new endpoints
     * @param endpoints Multiple endpoints
     */
    endpointsCreateManyWithHttpInfo(endpoints?: models.NewEndpointArray, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create new endpoint
     * Create new endpoint
     * @param endpoint Your new endpoint
     */
    endpointsCreateOneWithHttpInfo(endpoint?: models.NewEndpoint, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Bulk delete existing endpoints
     * Bulk delete existing endpoints
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    endpointsDeleteManyWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * delete existing endpoint
     * delete existing endpoint
     * @param endpointId The endpoint identifier
     */
    endpointsDeleteOneWithHttpInfo(endpointId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Deploy endpoint to stage
     * Deploy endpoint to stage
     * @param endpointId The endpoint identifier
     * @param stage The stage identifier
     */
    endpointsDeployOneToStageWithHttpInfo(endpointId: string, stage: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Returns endpoints
     * Returns endpoints
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    endpointsQueryWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get one existing endpoint
     * Get one existing endpoint
     * @param endpointId The endpoint identifier
     */
    endpointsReadOneWithHttpInfo(endpointId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Bulk update existing users
     * Bulk update existing users
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param endpointBulkUpdate Use filter to find the endpoints and do a bulk update
     */
    endpointsUpdateManyWithHttpInfo(filter: string, endpointBulkUpdate: models.EndpointBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * update existing endpoint
     * update existing endpoint
     * @param endpointId The user identifier
     * @param updatedEndpoint updated endpoint
     */
    endpointsUpdateOneWithHttpInfo(endpointId: string, updatedEndpoint: models.EndpointUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Execute a REST request to a deployed REST API
     * Execute a REST request to a deployed REST API
     * @param stage The stage identifier
     * @param resource The resource path
     */
    getWithHttpInfo(stage: string, resource: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Bulk delete existing invites
     * Bulk delete existing invites
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    invitesDeleteManyWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * delete existing invite
     * delete existing invite
     * @param inviteId The invite identifier
     */
    invitesDeleteOneWithHttpInfo(inviteId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Returns invites
     * Returns invites
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    invitesQueryWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get one existing invite
     * Get one existing invite
     * @param inviteId The invite identifier
     */
    invitesReadOneWithHttpInfo(inviteId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create new mailServer
     * Create new mailServer
     * @param mailServer Your new mailServer
     */
    mailserversCreateOneWithHttpInfo(mailServer?: models.NewMailServer, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Bulk delete existing mailservers
     * Bulk delete existing mailservers
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    mailserversDeleteManyWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * delete existing mailServer
     * delete existing mailServer
     * @param mailServerId The mailServer identifier
     */
    mailserversDeleteOneWithHttpInfo(mailServerId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Disable the push service.
     * Disable the push service.
     * @param mailServerId The mailServer identifier
     */
    mailserversDisableOneWithHttpInfo(mailServerId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Enable the push service.
     * Enable the push service.
     * @param mailServerId The mailServer identifier
     */
    mailserversEnableOneWithHttpInfo(mailServerId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Returns mail servers
     * Returns mail servers
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    mailserversQueryWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get one existing mailServer
     * Get one existing mailServer
     * @param mailServerId The mailServer identifier
     */
    mailserversReadOneWithHttpInfo(mailServerId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * update existing mailServer
     * update existing mailServer
     * @param mailServerId The user identifier
     * @param updatedMailServer updated mailServer
     */
    mailserversUpdateOneWithHttpInfo(mailServerId: string, updatedMailServer: models.MailServerUpdate, extraHttpRequestParams?: any): Observable<Response>;
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
     * Execute a REST request to a deployed REST API
     * Execute a REST request to a deployed REST API
     * @param stage The stage identifier
     * @param resource The resource path
     * @param payload Execution payload
     */
    postWithHttpInfo(stage: string, resource: string, payload?: models.RestEndpointExecutionRequestPayload, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create multiple new providers
     * Create multiple new providers
     * @param providers Multiple providers
     */
    providersCreateManyWithHttpInfo(providers?: models.NewProviderArray, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create new provider
     * Create new provider
     * @param provider Your new provider
     */
    providersCreateOneWithHttpInfo(provider?: models.NewProvider, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Bulk delete existing providers
     * Bulk delete existing providers
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    providersDeleteManyWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * delete existing provider
     * delete existing provider
     * @param providerId The provider identifier
     */
    providersDeleteOneWithHttpInfo(providerId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Returns providers
     * Returns providers
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    providersQueryWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get one existing provider
     * Get one existing provider
     * @param providerId The provider identifier
     */
    providersReadOneWithHttpInfo(providerId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Bulk update existing providers
     * Bulk update existing providers
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param providerBulkUpdate Use filter to find the providers and do a bulk update
     */
    providersUpdateManyWithHttpInfo(filter: string, providerBulkUpdate: models.ProviderBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * update existing provider
     * update existing provider
     * @param providerId The user identifier
     * @param updatedProvider updated provider
     */
    providersUpdateOneWithHttpInfo(providerId: string, updatedProvider: models.ProviderUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create new pushService
     * Create new pushService
     * @param pushService Your new pushService
     */
    pushservicesCreateOneWithHttpInfo(pushService?: models.NewPushService, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Bulk delete existing pushservices
     * Bulk delete existing pushservices
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    pushservicesDeleteManyWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * delete existing pushService
     * delete existing pushService
     * @param pushServiceId The pushService identifier
     */
    pushservicesDeleteOneWithHttpInfo(pushServiceId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Disable the push service.
     * Disable the push service.
     * @param pushServiceId The pushService identifier
     */
    pushservicesDisableOneWithHttpInfo(pushServiceId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Enable the push service.
     * Enable the push service.
     * @param pushServiceId The pushService identifier
     */
    pushservicesEnableOneWithHttpInfo(pushServiceId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Returns pushservices
     * Returns pushservices
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    pushservicesQueryWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get one existing pushService
     * Get one existing pushService
     * @param pushServiceId The pushService identifier
     */
    pushservicesReadOneWithHttpInfo(pushServiceId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * update existing pushService
     * update existing pushService
     * @param pushServiceId The user identifier
     * @param updatedPushService updated pushService
     */
    pushservicesUpdateOneWithHttpInfo(pushServiceId: string, updatedPushService: models.PushServiceUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Execute a REST request to a deployed REST API
     * Execute a REST request to a deployed REST API
     * @param stage The stage identifier
     * @param resource The resource path
     * @param payload Execution payload
     */
    putWithHttpInfo(stage: string, resource: string, payload?: models.RestEndpointExecutionRequestPayload, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create multiple new roles
     * Create multiple new roles
     * @param roles Multiple roles
     */
    rolesCreateManyWithHttpInfo(roles?: models.NewRoleArray, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create new role
     * Create new role
     * @param role Your new role
     */
    rolesCreateOneWithHttpInfo(role?: models.NewRole, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Bulk delete existing roles
     * Bulk delete existing roles
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    rolesDeleteManyWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * delete existing role
     * delete existing role
     * @param roleId The role identifier
     */
    rolesDeleteOneWithHttpInfo(roleId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Returns roles
     * Returns roles
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    rolesQueryWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get one existing role
     * Get one existing role
     * @param roleId The role identifier
     */
    rolesReadOneWithHttpInfo(roleId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Bulk update existing roles
     * Bulk update existing roles
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param roleBulkUpdate Use filter to find the roles and do a bulk update
     */
    rolesUpdateManyWithHttpInfo(filter: string, roleBulkUpdate: models.RoleBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * update existing role
     * update existing role
     * @param roleId The user identifier
     * @param updatedRole updated role
     */
    rolesUpdateOneWithHttpInfo(roleId: string, updatedRole: models.RoleUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create new smsService
     * Create new smsService
     * @param smsService Your new smsService
     */
    smsServiceCreateOneWithHttpInfo(smsService?: models.NewSmsService, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Bulk delete existing sms
     * Bulk delete existing sms
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    smsServiceDeleteManyWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * delete existing smsService
     * delete existing smsService
     * @param smsServiceId The smsService identifier
     */
    smsServiceDeleteOneWithHttpInfo(smsServiceId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Disable the sms service.
     * Disable the sms service.
     * @param smsServiceId The smsService identifier
     */
    smsServiceDisableOneWithHttpInfo(smsServiceId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Enable the sms service.
     * Enable the sms service.
     * @param smsServiceId The smsService identifier
     */
    smsServiceEnableOneWithHttpInfo(smsServiceId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Returns sms services
     * Returns sms services
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    smsServiceQueryWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get one existing smsService
     * Get one existing smsService
     * @param smsServiceId The smsService identifier
     */
    smsServiceReadOneWithHttpInfo(smsServiceId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * update existing smsService
     * update existing smsService
     * @param smsServiceId The user identifier
     * @param updatedSmsService updated smsService
     */
    smsServiceUpdateOneWithHttpInfo(smsServiceId: string, updatedSmsService: models.SmsServiceUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * delete existing user
     * delete existing user
     * @param userId The user identifier or me
     */
    usersDeleteOneWithHttpInfo(userId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Query existing users
     * Query existing users
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;john doe\&quot;, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1, \&quot;name\&quot; : 1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    usersQueryWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get one existing users
     * Get one existing users
     * @param userId The user identifier
     */
    usersReadOneWithHttpInfo(userId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * update existing user
     * update existing user
     * @param userId The user identifier
     * @param updatedUser updated user
     */
    usersUpdateOneWithHttpInfo(userId: string, updatedUser: models.UserUpdate, extraHttpRequestParams?: any): Observable<Response>;
}
