## 

Read the docs at [https://ngx.selfbits.io](https://ngx.selfbits.io)

[![license](banner.png)]()

## Documentation for API Endpoints

All URIs are relative to *https://YOUR-TENANT.apps.selfbits.io/api/v2/YOUR-TENANT/apps/YOUR-APPLICATION*


Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CoreAdminApi* | [**_delete**](docs/CoreAdminApi.md#_delete) | **RequestMethod.Delete** /rest/${stage}/${resource} | Execute a REST request to a deployed REST API
*CoreAdminApi* | [**actionsCreateMany**](docs/CoreAdminApi.md#actionsCreateMany) | **RequestMethod.Post** /actions/bulk | Create multiple new actions
*CoreAdminApi* | [**actionsCreateOne**](docs/CoreAdminApi.md#actionsCreateOne) | **RequestMethod.Post** /actions | Create new action
*CoreAdminApi* | [**actionsDeleteMany**](docs/CoreAdminApi.md#actionsDeleteMany) | **RequestMethod.Delete** /actions | Bulk delete existing actions
*CoreAdminApi* | [**actionsDeleteOne**](docs/CoreAdminApi.md#actionsDeleteOne) | **RequestMethod.Delete** /actions/${actionId} | delete existing action
*CoreAdminApi* | [**actionsExecuteOne**](docs/CoreAdminApi.md#actionsExecuteOne) | **RequestMethod.Post** /actions/${actionId}/exec | Execute action.
*CoreAdminApi* | [**actionsQuery**](docs/CoreAdminApi.md#actionsQuery) | **RequestMethod.Get** /actions | Returns actions
*CoreAdminApi* | [**actionsReadOne**](docs/CoreAdminApi.md#actionsReadOne) | **RequestMethod.Get** /actions/${actionId} | Get one existing action
*CoreAdminApi* | [**actionsUpdateMany**](docs/CoreAdminApi.md#actionsUpdateMany) | **RequestMethod.Put** /actions | Bulk update existing actions
*CoreAdminApi* | [**actionsUpdateOne**](docs/CoreAdminApi.md#actionsUpdateOne) | **RequestMethod.Put** /actions/${actionId} | update existing action
*CoreAdminApi* | [**changeUserPasswordAllOrganizations**](docs/CoreAdminApi.md#changeUserPasswordAllOrganizations) | **RequestMethod.Post** /users/${userId}/changepassword | change user password globally
*CoreAdminApi* | [**changeUserPasswordByOrganization**](docs/CoreAdminApi.md#changeUserPasswordByOrganization) | **RequestMethod.Post** /users/${userId}/organization/${organizationId}/changepassword | change user password for one organization
*CoreAdminApi* | [**clientsCreateMany**](docs/CoreAdminApi.md#clientsCreateMany) | **RequestMethod.Post** /clients/bulk | Create multiple new clients
*CoreAdminApi* | [**clientsCreateOne**](docs/CoreAdminApi.md#clientsCreateOne) | **RequestMethod.Post** /clients | Create new client
*CoreAdminApi* | [**clientsDeleteMany**](docs/CoreAdminApi.md#clientsDeleteMany) | **RequestMethod.Delete** /clients | Bulk delete existing clients
*CoreAdminApi* | [**clientsDeleteOne**](docs/CoreAdminApi.md#clientsDeleteOne) | **RequestMethod.Delete** /clients/${clientId} | delete existing client
*CoreAdminApi* | [**clientsQuery**](docs/CoreAdminApi.md#clientsQuery) | **RequestMethod.Get** /clients | Returns clients
*CoreAdminApi* | [**clientsReadOne**](docs/CoreAdminApi.md#clientsReadOne) | **RequestMethod.Get** /clients/${clientId} | Get one existing client
*CoreAdminApi* | [**clientsUpdateMany**](docs/CoreAdminApi.md#clientsUpdateMany) | **RequestMethod.Put** /clients | Bulk update existing clients
*CoreAdminApi* | [**clientsUpdateOne**](docs/CoreAdminApi.md#clientsUpdateOne) | **RequestMethod.Put** /clients/${clientId} | update existing client
*CoreAdminApi* | [**consumersDeleteMany**](docs/CoreAdminApi.md#consumersDeleteMany) | **RequestMethod.Delete** /consumers | Bulk delete existing consumers
*CoreAdminApi* | [**consumersDeleteOne**](docs/CoreAdminApi.md#consumersDeleteOne) | **RequestMethod.Delete** /consumers/${consumerId} | delete existing consumer
*CoreAdminApi* | [**consumersQuery**](docs/CoreAdminApi.md#consumersQuery) | **RequestMethod.Get** /consumers | Returns consumers
*CoreAdminApi* | [**consumersReadOne**](docs/CoreAdminApi.md#consumersReadOne) | **RequestMethod.Get** /consumers/${consumerId} | Get one existing consumer
*CoreAdminApi* | [**consumersUpdateMany**](docs/CoreAdminApi.md#consumersUpdateMany) | **RequestMethod.Put** /consumers | Bulk update existing consumers
*CoreAdminApi* | [**consumersUpdateOne**](docs/CoreAdminApi.md#consumersUpdateOne) | **RequestMethod.Put** /consumers/${consumerId} | update existing consumer
*CoreAdminApi* | [**devicesDeleteMany**](docs/CoreAdminApi.md#devicesDeleteMany) | **RequestMethod.Delete** /devices | Bulk delete existing devices
*CoreAdminApi* | [**devicesDeleteOne**](docs/CoreAdminApi.md#devicesDeleteOne) | **RequestMethod.Delete** /devices/${deviceId} | delete existing device
*CoreAdminApi* | [**devicesQuery**](docs/CoreAdminApi.md#devicesQuery) | **RequestMethod.Get** /devices | Returns devices
*CoreAdminApi* | [**devicesReadOne**](docs/CoreAdminApi.md#devicesReadOne) | **RequestMethod.Get** /devices/${deviceId} | Get one existing device
*CoreAdminApi* | [**directoriesCreateMany**](docs/CoreAdminApi.md#directoriesCreateMany) | **RequestMethod.Post** /directories/bulk | Create multiple new directories
*CoreAdminApi* | [**directoriesCreateOne**](docs/CoreAdminApi.md#directoriesCreateOne) | **RequestMethod.Post** /directories | Create new directory
*CoreAdminApi* | [**directoriesDeleteMany**](docs/CoreAdminApi.md#directoriesDeleteMany) | **RequestMethod.Delete** /directories | Bulk delete existing directories
*CoreAdminApi* | [**directoriesDeleteOne**](docs/CoreAdminApi.md#directoriesDeleteOne) | **RequestMethod.Delete** /directories/${directoryId} | delete existing directory
*CoreAdminApi* | [**directoriesQuery**](docs/CoreAdminApi.md#directoriesQuery) | **RequestMethod.Get** /directories | Returns directories
*CoreAdminApi* | [**directoriesReadOne**](docs/CoreAdminApi.md#directoriesReadOne) | **RequestMethod.Get** /directories/${directoryId} | Get one existing directory
*CoreAdminApi* | [**directoriesUpdateMany**](docs/CoreAdminApi.md#directoriesUpdateMany) | **RequestMethod.Put** /directories | Bulk update existing users
*CoreAdminApi* | [**directoriesUpdateOne**](docs/CoreAdminApi.md#directoriesUpdateOne) | **RequestMethod.Put** /directories/${directoryId} | update existing directory
*CoreAdminApi* | [**endpointsCreateMany**](docs/CoreAdminApi.md#endpointsCreateMany) | **RequestMethod.Post** /endpoints/bulk | Create multiple new endpoints
*CoreAdminApi* | [**endpointsCreateOne**](docs/CoreAdminApi.md#endpointsCreateOne) | **RequestMethod.Post** /endpoints | Create new endpoint
*CoreAdminApi* | [**endpointsDeleteMany**](docs/CoreAdminApi.md#endpointsDeleteMany) | **RequestMethod.Delete** /endpoints | Bulk delete existing endpoints
*CoreAdminApi* | [**endpointsDeleteOne**](docs/CoreAdminApi.md#endpointsDeleteOne) | **RequestMethod.Delete** /endpoints/${endpointId} | delete existing endpoint
*CoreAdminApi* | [**endpointsDeployOneToStage**](docs/CoreAdminApi.md#endpointsDeployOneToStage) | **RequestMethod.Post** /endpoints/${endpointId}/deploy/${stage} | Deploy endpoint to stage
*CoreAdminApi* | [**endpointsQuery**](docs/CoreAdminApi.md#endpointsQuery) | **RequestMethod.Get** /endpoints | Returns endpoints
*CoreAdminApi* | [**endpointsReadOne**](docs/CoreAdminApi.md#endpointsReadOne) | **RequestMethod.Get** /endpoints/${endpointId} | Get one existing endpoint
*CoreAdminApi* | [**endpointsUpdateMany**](docs/CoreAdminApi.md#endpointsUpdateMany) | **RequestMethod.Put** /endpoints | Bulk update existing users
*CoreAdminApi* | [**endpointsUpdateOne**](docs/CoreAdminApi.md#endpointsUpdateOne) | **RequestMethod.Put** /endpoints/${endpointId} | update existing endpoint
*CoreAdminApi* | [**get**](docs/CoreAdminApi.md#get) | **RequestMethod.Get** /rest/${stage}/${resource} | Execute a REST request to a deployed REST API
*CoreAdminApi* | [**invitesDeleteMany**](docs/CoreAdminApi.md#invitesDeleteMany) | **RequestMethod.Delete** /invites | Bulk delete existing invites
*CoreAdminApi* | [**invitesDeleteOne**](docs/CoreAdminApi.md#invitesDeleteOne) | **RequestMethod.Delete** /invites/${inviteId} | delete existing invite
*CoreAdminApi* | [**invitesQuery**](docs/CoreAdminApi.md#invitesQuery) | **RequestMethod.Get** /invites | Returns invites
*CoreAdminApi* | [**invitesReadOne**](docs/CoreAdminApi.md#invitesReadOne) | **RequestMethod.Get** /invites/${inviteId} | Get one existing invite
*CoreAdminApi* | [**mailserversCreateOne**](docs/CoreAdminApi.md#mailserversCreateOne) | **RequestMethod.Post** /mailservers | Create new mailServer
*CoreAdminApi* | [**mailserversDeleteMany**](docs/CoreAdminApi.md#mailserversDeleteMany) | **RequestMethod.Delete** /mailservers | Bulk delete existing mailservers
*CoreAdminApi* | [**mailserversDeleteOne**](docs/CoreAdminApi.md#mailserversDeleteOne) | **RequestMethod.Delete** /mailservers/${mailServerId} | delete existing mailServer
*CoreAdminApi* | [**mailserversDisableOne**](docs/CoreAdminApi.md#mailserversDisableOne) | **RequestMethod.Post** /mailservers/${mailServerId}/disable | Disable the push service.
*CoreAdminApi* | [**mailserversEnableOne**](docs/CoreAdminApi.md#mailserversEnableOne) | **RequestMethod.Post** /mailservers/${mailServerId}/enable | Enable the push service.
*CoreAdminApi* | [**mailserversQuery**](docs/CoreAdminApi.md#mailserversQuery) | **RequestMethod.Get** /mailservers | Returns mail servers
*CoreAdminApi* | [**mailserversReadOne**](docs/CoreAdminApi.md#mailserversReadOne) | **RequestMethod.Get** /mailservers/${mailServerId} | Get one existing mailServer
*CoreAdminApi* | [**mailserversUpdateOne**](docs/CoreAdminApi.md#mailserversUpdateOne) | **RequestMethod.Put** /mailservers/${mailServerId} | update existing mailServer
*CoreAdminApi* | [**organizationsCreateMany**](docs/CoreAdminApi.md#organizationsCreateMany) | **RequestMethod.Post** /organizations/bulk | Create multiple new organizations
*CoreAdminApi* | [**organizationsCreateOne**](docs/CoreAdminApi.md#organizationsCreateOne) | **RequestMethod.Post** /organizations | Create new organization
*CoreAdminApi* | [**organizationsDeleteMany**](docs/CoreAdminApi.md#organizationsDeleteMany) | **RequestMethod.Delete** /organizations | Bulk delete existing organizations
*CoreAdminApi* | [**organizationsDeleteOne**](docs/CoreAdminApi.md#organizationsDeleteOne) | **RequestMethod.Delete** /organizations/${organizationId} | delete existing organization
*CoreAdminApi* | [**organizationsQuery**](docs/CoreAdminApi.md#organizationsQuery) | **RequestMethod.Get** /organizations | Returns organizations
*CoreAdminApi* | [**organizationsReadOne**](docs/CoreAdminApi.md#organizationsReadOne) | **RequestMethod.Get** /organizations/${organizationId} | Get one existing organization
*CoreAdminApi* | [**organizationsUpdateMany**](docs/CoreAdminApi.md#organizationsUpdateMany) | **RequestMethod.Put** /organizations | Bulk update existing organizations
*CoreAdminApi* | [**organizationsUpdateOne**](docs/CoreAdminApi.md#organizationsUpdateOne) | **RequestMethod.Put** /organizations/${organizationId} | update existing organization
*CoreAdminApi* | [**post**](docs/CoreAdminApi.md#post) | **RequestMethod.Post** /rest/${stage}/${resource} | Execute a REST request to a deployed REST API
*CoreAdminApi* | [**providersCreateMany**](docs/CoreAdminApi.md#providersCreateMany) | **RequestMethod.Post** /providers/bulk | Create multiple new providers
*CoreAdminApi* | [**providersCreateOne**](docs/CoreAdminApi.md#providersCreateOne) | **RequestMethod.Post** /providers | Create new provider
*CoreAdminApi* | [**providersDeleteMany**](docs/CoreAdminApi.md#providersDeleteMany) | **RequestMethod.Delete** /providers | Bulk delete existing providers
*CoreAdminApi* | [**providersDeleteOne**](docs/CoreAdminApi.md#providersDeleteOne) | **RequestMethod.Delete** /providers/${providerId} | delete existing provider
*CoreAdminApi* | [**providersQuery**](docs/CoreAdminApi.md#providersQuery) | **RequestMethod.Get** /providers | Returns providers
*CoreAdminApi* | [**providersReadOne**](docs/CoreAdminApi.md#providersReadOne) | **RequestMethod.Get** /providers/${providerId} | Get one existing provider
*CoreAdminApi* | [**providersUpdateMany**](docs/CoreAdminApi.md#providersUpdateMany) | **RequestMethod.Put** /providers | Bulk update existing providers
*CoreAdminApi* | [**providersUpdateOne**](docs/CoreAdminApi.md#providersUpdateOne) | **RequestMethod.Put** /providers/${providerId} | update existing provider
*CoreAdminApi* | [**pushservicesCreateOne**](docs/CoreAdminApi.md#pushservicesCreateOne) | **RequestMethod.Post** /pushservices | Create new pushService
*CoreAdminApi* | [**pushservicesDeleteMany**](docs/CoreAdminApi.md#pushservicesDeleteMany) | **RequestMethod.Delete** /pushservices | Bulk delete existing pushservices
*CoreAdminApi* | [**pushservicesDeleteOne**](docs/CoreAdminApi.md#pushservicesDeleteOne) | **RequestMethod.Delete** /pushservices/${pushServiceId} | delete existing pushService
*CoreAdminApi* | [**pushservicesDisableOne**](docs/CoreAdminApi.md#pushservicesDisableOne) | **RequestMethod.Post** /pushservices/${pushServiceId}/disable | Disable the push service.
*CoreAdminApi* | [**pushservicesEnableOne**](docs/CoreAdminApi.md#pushservicesEnableOne) | **RequestMethod.Post** /pushservices/${pushServiceId}/enable | Enable the push service.
*CoreAdminApi* | [**pushservicesQuery**](docs/CoreAdminApi.md#pushservicesQuery) | **RequestMethod.Get** /pushservices | Returns pushservices
*CoreAdminApi* | [**pushservicesReadOne**](docs/CoreAdminApi.md#pushservicesReadOne) | **RequestMethod.Get** /pushservices/${pushServiceId} | Get one existing pushService
*CoreAdminApi* | [**pushservicesUpdateOne**](docs/CoreAdminApi.md#pushservicesUpdateOne) | **RequestMethod.Put** /pushservices/${pushServiceId} | update existing pushService
*CoreAdminApi* | [**put**](docs/CoreAdminApi.md#put) | **RequestMethod.Put** /rest/${stage}/${resource} | Execute a REST request to a deployed REST API
*CoreAdminApi* | [**rolesCreateMany**](docs/CoreAdminApi.md#rolesCreateMany) | **RequestMethod.Post** /roles/bulk | Create multiple new roles
*CoreAdminApi* | [**rolesCreateOne**](docs/CoreAdminApi.md#rolesCreateOne) | **RequestMethod.Post** /roles | Create new role
*CoreAdminApi* | [**rolesDeleteMany**](docs/CoreAdminApi.md#rolesDeleteMany) | **RequestMethod.Delete** /roles | Bulk delete existing roles
*CoreAdminApi* | [**rolesDeleteOne**](docs/CoreAdminApi.md#rolesDeleteOne) | **RequestMethod.Delete** /roles/${roleId} | delete existing role
*CoreAdminApi* | [**rolesQuery**](docs/CoreAdminApi.md#rolesQuery) | **RequestMethod.Get** /roles | Returns roles
*CoreAdminApi* | [**rolesReadOne**](docs/CoreAdminApi.md#rolesReadOne) | **RequestMethod.Get** /roles/${roleId} | Get one existing role
*CoreAdminApi* | [**rolesUpdateMany**](docs/CoreAdminApi.md#rolesUpdateMany) | **RequestMethod.Put** /roles | Bulk update existing roles
*CoreAdminApi* | [**rolesUpdateOne**](docs/CoreAdminApi.md#rolesUpdateOne) | **RequestMethod.Put** /roles/${roleId} | update existing role
*CoreAdminApi* | [**smsServiceCreateOne**](docs/CoreAdminApi.md#smsServiceCreateOne) | **RequestMethod.Post** /sms | Create new smsService
*CoreAdminApi* | [**smsServiceDeleteMany**](docs/CoreAdminApi.md#smsServiceDeleteMany) | **RequestMethod.Delete** /sms | Bulk delete existing sms
*CoreAdminApi* | [**smsServiceDeleteOne**](docs/CoreAdminApi.md#smsServiceDeleteOne) | **RequestMethod.Delete** /sms/${smsServiceId} | delete existing smsService
*CoreAdminApi* | [**smsServiceDisableOne**](docs/CoreAdminApi.md#smsServiceDisableOne) | **RequestMethod.Post** /sms/${smsServiceId}/disable | Disable the sms service.
*CoreAdminApi* | [**smsServiceEnableOne**](docs/CoreAdminApi.md#smsServiceEnableOne) | **RequestMethod.Post** /sms/${smsServiceId}/enable | Enable the sms service.
*CoreAdminApi* | [**smsServiceQuery**](docs/CoreAdminApi.md#smsServiceQuery) | **RequestMethod.Get** /sms | Returns sms services
*CoreAdminApi* | [**smsServiceReadOne**](docs/CoreAdminApi.md#smsServiceReadOne) | **RequestMethod.Get** /sms/${smsServiceId} | Get one existing smsService
*CoreAdminApi* | [**smsServiceUpdateOne**](docs/CoreAdminApi.md#smsServiceUpdateOne) | **RequestMethod.Put** /sms/${smsServiceId} | update existing smsService
*CoreAdminApi* | [**usersDeleteOne**](docs/CoreAdminApi.md#usersDeleteOne) | **RequestMethod.Delete** /users/${userId} | delete existing user
*CoreAdminApi* | [**usersQuery**](docs/CoreAdminApi.md#usersQuery) | **RequestMethod.Get** /users | Query existing users
*CoreAdminApi* | [**usersReadOne**](docs/CoreAdminApi.md#usersReadOne) | **RequestMethod.Get** /users/${userId} | Get one existing users
*CoreAdminApi* | [**usersUpdateOne**](docs/CoreAdminApi.md#usersUpdateOne) | **RequestMethod.Put** /users/${userId} | update existing user




Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*FileAdminApi* | [**browsePrivateFilesByPath**](docs/FileAdminApi.md#browsePrivateFilesByPath) | **RequestMethod.Get** /files/browse/private | browse file path
*FileAdminApi* | [**browsePublicFilesByPath**](docs/FileAdminApi.md#browsePublicFilesByPath) | **RequestMethod.Get** /files/browse/public | browse file path
*FileAdminApi* | [**createPrivate**](docs/FileAdminApi.md#createPrivate) | **RequestMethod.Post** /files/private | initialize private file upload
*FileAdminApi* | [**createPublic**](docs/FileAdminApi.md#createPublic) | **RequestMethod.Post** /files/public | initialize public file upload
*FileAdminApi* | [**deleteOne**](docs/FileAdminApi.md#deleteOne) | **RequestMethod.Delete** /files/${fileId} | delete existing file
*FileAdminApi* | [**query**](docs/FileAdminApi.md#query) | **RequestMethod.Get** /files | query files
*FileAdminApi* | [**readOne**](docs/FileAdminApi.md#readOne) | **RequestMethod.Get** /files/file | Read existing file by id or by filePath
*FileAdminApi* | [**updateOne**](docs/FileAdminApi.md#updateOne) | **RequestMethod.Put** /files/${fileId} | Update customData of an existing file
*FileAdminApi* | [**verifyUpload**](docs/FileAdminApi.md#verifyUpload) | **RequestMethod.Post** /files/${fileId}/verify | verify the successful file upload




Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*MongodbAdminApi* | [**dataCreateManyByModel**](docs/MongodbAdminApi.md#dataCreateManyByModel) | **RequestMethod.Post** /m/models/${mongoModelId}/data/bulk | Create multiple new data items
*MongodbAdminApi* | [**dataCreateOneByModel**](docs/MongodbAdminApi.md#dataCreateOneByModel) | **RequestMethod.Post** /m/models/${mongoModelId}/data | Create new data item
*MongodbAdminApi* | [**dataDeleteManyByModel**](docs/MongodbAdminApi.md#dataDeleteManyByModel) | **RequestMethod.Delete** /m/models/${mongoModelId}/data | Bulk delete existing data items
*MongodbAdminApi* | [**dataDeleteOneByModel**](docs/MongodbAdminApi.md#dataDeleteOneByModel) | **RequestMethod.Delete** /m/models/${mongoModelId}/data/${id} | delete existing data item
*MongodbAdminApi* | [**dataQueryByModel**](docs/MongodbAdminApi.md#dataQueryByModel) | **RequestMethod.Get** /m/models/${mongoModelId}/data | Returns data items paginated
*MongodbAdminApi* | [**dataReadOneByModel**](docs/MongodbAdminApi.md#dataReadOneByModel) | **RequestMethod.Get** /m/models/${mongoModelId}/data/${id} | Get one existing data item
*MongodbAdminApi* | [**dataUpdateManyByModel**](docs/MongodbAdminApi.md#dataUpdateManyByModel) | **RequestMethod.Put** /m/models/${mongoModelId}/data | Bulk update existing data items
*MongodbAdminApi* | [**dataUpdateOneByModel**](docs/MongodbAdminApi.md#dataUpdateOneByModel) | **RequestMethod.Put** /m/models/${mongoModelId}/data/${id} | update existing data item
*MongodbAdminApi* | [**mongoDatabasesCreateMany**](docs/MongodbAdminApi.md#mongoDatabasesCreateMany) | **RequestMethod.Post** /m/db/bulk | Create multiple new mongo_databases
*MongodbAdminApi* | [**mongoDatabasesCreateOne**](docs/MongodbAdminApi.md#mongoDatabasesCreateOne) | **RequestMethod.Post** /m/db | Create new mongo_database
*MongodbAdminApi* | [**mongoDatabasesDeleteMany**](docs/MongodbAdminApi.md#mongoDatabasesDeleteMany) | **RequestMethod.Delete** /m/db | Bulk delete existing mongo_databases
*MongodbAdminApi* | [**mongoDatabasesDeleteOne**](docs/MongodbAdminApi.md#mongoDatabasesDeleteOne) | **RequestMethod.Delete** /m/db/${mongoDatabaseId} | delete existing mongo_database
*MongodbAdminApi* | [**mongoDatabasesQuery**](docs/MongodbAdminApi.md#mongoDatabasesQuery) | **RequestMethod.Get** /m/db | Returns mongo_databases
*MongodbAdminApi* | [**mongoDatabasesReadOne**](docs/MongodbAdminApi.md#mongoDatabasesReadOne) | **RequestMethod.Get** /m/db/${mongoDatabaseId} | Get one existing mongo_database
*MongodbAdminApi* | [**mongoDatabasesTestOne**](docs/MongodbAdminApi.md#mongoDatabasesTestOne) | **RequestMethod.Post** /m/db/${mongoDatabaseId}/test | Test connection. If the connection attempt fails, information is provided in the payload with status code 200.
*MongodbAdminApi* | [**mongoDatabasesUpdateMany**](docs/MongodbAdminApi.md#mongoDatabasesUpdateMany) | **RequestMethod.Put** /m/db | Bulk update existing mongo_databases
*MongodbAdminApi* | [**mongoDatabasesUpdateOne**](docs/MongodbAdminApi.md#mongoDatabasesUpdateOne) | **RequestMethod.Put** /m/db/${mongoDatabaseId} | update existing mongo_database
*MongodbAdminApi* | [**mongoModelsCreateMany**](docs/MongodbAdminApi.md#mongoModelsCreateMany) | **RequestMethod.Post** /m/models/bulk | Create multiple new mongo_models
*MongodbAdminApi* | [**mongoModelsCreateOne**](docs/MongodbAdminApi.md#mongoModelsCreateOne) | **RequestMethod.Post** /m/models | Create new mongo_model
*MongodbAdminApi* | [**mongoModelsDeleteMany**](docs/MongodbAdminApi.md#mongoModelsDeleteMany) | **RequestMethod.Delete** /m/models | Bulk delete existing mongo_models
*MongodbAdminApi* | [**mongoModelsDeleteOne**](docs/MongodbAdminApi.md#mongoModelsDeleteOne) | **RequestMethod.Delete** /m/models/${mongoModelId} | delete existing mongo_model
*MongodbAdminApi* | [**mongoModelsQuery**](docs/MongodbAdminApi.md#mongoModelsQuery) | **RequestMethod.Get** /m/models | Returns mongo_models
*MongodbAdminApi* | [**mongoModelsReadOne**](docs/MongodbAdminApi.md#mongoModelsReadOne) | **RequestMethod.Get** /m/models/${mongoModelId} | Get one existing mongo_model
*MongodbAdminApi* | [**mongoModelsUpdateMany**](docs/MongodbAdminApi.md#mongoModelsUpdateMany) | **RequestMethod.Put** /m/models | Bulk update existing mongo_models
*MongodbAdminApi* | [**mongoModelsUpdateOne**](docs/MongodbAdminApi.md#mongoModelsUpdateOne) | **RequestMethod.Put** /m/models/${mongoModelId} | update existing mongo_model
*MongodbAdminApi* | [**mongoModelsValidateByDefinition**](docs/MongodbAdminApi.md#mongoModelsValidateByDefinition) | **RequestMethod.Post** /m/models/validate | Validate a mongo model definition. If the validation fails, information is provided in the payload with status code 200.





## Documentation for Models

 - [Action](docs/Action.md)
 - [ActionArray](docs/ActionArray.md)
 - [ActionBulkUpdate](docs/ActionBulkUpdate.md)
 - [ActionExecutionRequestPayload](docs/ActionExecutionRequestPayload.md)
 - [ActionExecutionResponse](docs/ActionExecutionResponse.md)
 - [ActionPage](docs/ActionPage.md)
 - [ActionUpdate](docs/ActionUpdate.md)
 - [AdminChangePasswordRequest](docs/AdminChangePasswordRequest.md)
 - [AdminChangePasswordResponse](docs/AdminChangePasswordResponse.md)
 - [Application](docs/Application.md)
 - [ApplicationArray](docs/ApplicationArray.md)
 - [ApplicationBulkUpdate](docs/ApplicationBulkUpdate.md)
 - [ApplicationPage](docs/ApplicationPage.md)
 - [ApplicationUpdate](docs/ApplicationUpdate.md)
 - [BulkDeleteResponse](docs/BulkDeleteResponse.md)
 - [BulkUpdateResponse](docs/BulkUpdateResponse.md)
 - [Client](docs/Client.md)
 - [ClientArray](docs/ClientArray.md)
 - [ClientBulkUpdate](docs/ClientBulkUpdate.md)
 - [ClientPage](docs/ClientPage.md)
 - [ClientUpdate](docs/ClientUpdate.md)
 - [Consumer](docs/Consumer.md)
 - [ConsumerArray](docs/ConsumerArray.md)
 - [ConsumerBulkUpdate](docs/ConsumerBulkUpdate.md)
 - [ConsumerPage](docs/ConsumerPage.md)
 - [ConsumerRole](docs/ConsumerRole.md)
 - [ConsumerRoleArray](docs/ConsumerRoleArray.md)
 - [ConsumerRoleBulkUpdate](docs/ConsumerRoleBulkUpdate.md)
 - [ConsumerRolePage](docs/ConsumerRolePage.md)
 - [ConsumerRoleUpdate](docs/ConsumerRoleUpdate.md)
 - [ConsumerUpdate](docs/ConsumerUpdate.md)
 - [Device](docs/Device.md)
 - [DeviceArray](docs/DeviceArray.md)
 - [DeviceBulkUpdate](docs/DeviceBulkUpdate.md)
 - [DevicePage](docs/DevicePage.md)
 - [DevicePushEndpoint](docs/DevicePushEndpoint.md)
 - [DevicePushEndpointPage](docs/DevicePushEndpointPage.md)
 - [DevicePushEndpointUpdate](docs/DevicePushEndpointUpdate.md)
 - [DeviceUpdate](docs/DeviceUpdate.md)
 - [Directory](docs/Directory.md)
 - [DirectoryArray](docs/DirectoryArray.md)
 - [DirectoryBulkUpdate](docs/DirectoryBulkUpdate.md)
 - [DirectoryPage](docs/DirectoryPage.md)
 - [DirectoryUpdate](docs/DirectoryUpdate.md)
 - [Endpoint](docs/Endpoint.md)
 - [EndpointArray](docs/EndpointArray.md)
 - [EndpointBulkUpdate](docs/EndpointBulkUpdate.md)
 - [EndpointPage](docs/EndpointPage.md)
 - [EndpointUpdate](docs/EndpointUpdate.md)
 - [File](docs/File.md)
 - [FileBrowserDoc](docs/FileBrowserDoc.md)
 - [FileBrowserDocs](docs/FileBrowserDocs.md)
 - [FilePage](docs/FilePage.md)
 - [FileUpdate](docs/FileUpdate.md)
 - [FileVerificationRequest](docs/FileVerificationRequest.md)
 - [LoginAttempt](docs/LoginAttempt.md)
 - [LoginAttemptPage](docs/LoginAttemptPage.md)
 - [MailServer](docs/MailServer.md)
 - [MailServerPage](docs/MailServerPage.md)
 - [MailServerUpdate](docs/MailServerUpdate.md)
 - [MongoData](docs/MongoData.md)
 - [MongoDataArray](docs/MongoDataArray.md)
 - [MongoDataBulkUpdate](docs/MongoDataBulkUpdate.md)
 - [MongoDataPage](docs/MongoDataPage.md)
 - [MongoDataUpdate](docs/MongoDataUpdate.md)
 - [MongoDatabase](docs/MongoDatabase.md)
 - [MongoDatabaseArray](docs/MongoDatabaseArray.md)
 - [MongoDatabaseBulkUpdate](docs/MongoDatabaseBulkUpdate.md)
 - [MongoDatabasePage](docs/MongoDatabasePage.md)
 - [MongoDatabaseTestResponse](docs/MongoDatabaseTestResponse.md)
 - [MongoDatabaseUpdate](docs/MongoDatabaseUpdate.md)
 - [MongoModel](docs/MongoModel.md)
 - [MongoModelArray](docs/MongoModelArray.md)
 - [MongoModelBulkUpdate](docs/MongoModelBulkUpdate.md)
 - [MongoModelPage](docs/MongoModelPage.md)
 - [MongoModelUpdate](docs/MongoModelUpdate.md)
 - [MongoModelValidationResponse](docs/MongoModelValidationResponse.md)
 - [NewAction](docs/NewAction.md)
 - [NewActionArray](docs/NewActionArray.md)
 - [NewApplication](docs/NewApplication.md)
 - [NewApplicationArray](docs/NewApplicationArray.md)
 - [NewClient](docs/NewClient.md)
 - [NewClientArray](docs/NewClientArray.md)
 - [NewConsumer](docs/NewConsumer.md)
 - [NewConsumerArray](docs/NewConsumerArray.md)
 - [NewConsumerRole](docs/NewConsumerRole.md)
 - [NewConsumerRoleArray](docs/NewConsumerRoleArray.md)
 - [NewDevice](docs/NewDevice.md)
 - [NewDeviceArray](docs/NewDeviceArray.md)
 - [NewDevicePushEndpoint](docs/NewDevicePushEndpoint.md)
 - [NewDirectory](docs/NewDirectory.md)
 - [NewDirectoryArray](docs/NewDirectoryArray.md)
 - [NewEndpoint](docs/NewEndpoint.md)
 - [NewEndpointArray](docs/NewEndpointArray.md)
 - [NewFile](docs/NewFile.md)
 - [NewFileResponse](docs/NewFileResponse.md)
 - [NewMailServer](docs/NewMailServer.md)
 - [NewMongoData](docs/NewMongoData.md)
 - [NewMongoDataArray](docs/NewMongoDataArray.md)
 - [NewMongoDatabase](docs/NewMongoDatabase.md)
 - [NewMongoDatabaseArray](docs/NewMongoDatabaseArray.md)
 - [NewMongoModel](docs/NewMongoModel.md)
 - [NewMongoModelArray](docs/NewMongoModelArray.md)
 - [NewOrganization](docs/NewOrganization.md)
 - [NewOrganizationArray](docs/NewOrganizationArray.md)
 - [NewOrganizationInvite](docs/NewOrganizationInvite.md)
 - [NewOrganizationInviteArray](docs/NewOrganizationInviteArray.md)
 - [NewPermission](docs/NewPermission.md)
 - [NewPermissionArray](docs/NewPermissionArray.md)
 - [NewProvider](docs/NewProvider.md)
 - [NewProviderArray](docs/NewProviderArray.md)
 - [NewPushService](docs/NewPushService.md)
 - [NewRole](docs/NewRole.md)
 - [NewRoleArray](docs/NewRoleArray.md)
 - [NewRolePermission](docs/NewRolePermission.md)
 - [NewRolePermissionArray](docs/NewRolePermissionArray.md)
 - [NewSmsService](docs/NewSmsService.md)
 - [NewSmsServiceArray](docs/NewSmsServiceArray.md)
 - [NewTemplate](docs/NewTemplate.md)
 - [NewTemplateArray](docs/NewTemplateArray.md)
 - [NewTopic](docs/NewTopic.md)
 - [NewTopicArray](docs/NewTopicArray.md)
 - [NewTopicSubscription](docs/NewTopicSubscription.md)
 - [NewTopicSubscriptionArray](docs/NewTopicSubscriptionArray.md)
 - [NewUser](docs/NewUser.md)
 - [NewUserArray](docs/NewUserArray.md)
 - [Organization](docs/Organization.md)
 - [OrganizationArray](docs/OrganizationArray.md)
 - [OrganizationBulkUpdate](docs/OrganizationBulkUpdate.md)
 - [OrganizationInvite](docs/OrganizationInvite.md)
 - [OrganizationInviteArray](docs/OrganizationInviteArray.md)
 - [OrganizationInvitePage](docs/OrganizationInvitePage.md)
 - [OrganizationPage](docs/OrganizationPage.md)
 - [OrganizationShort](docs/OrganizationShort.md)
 - [OrganizationUpdate](docs/OrganizationUpdate.md)
 - [Permission](docs/Permission.md)
 - [PermissionArray](docs/PermissionArray.md)
 - [PermissionBulkUpdate](docs/PermissionBulkUpdate.md)
 - [PermissionPage](docs/PermissionPage.md)
 - [PermissionUpdate](docs/PermissionUpdate.md)
 - [Provider](docs/Provider.md)
 - [ProviderArray](docs/ProviderArray.md)
 - [ProviderBulkUpdate](docs/ProviderBulkUpdate.md)
 - [ProviderPage](docs/ProviderPage.md)
 - [ProviderUpdate](docs/ProviderUpdate.md)
 - [PushService](docs/PushService.md)
 - [PushServicePage](docs/PushServicePage.md)
 - [PushServiceUpdate](docs/PushServiceUpdate.md)
 - [RestEndpoint](docs/RestEndpoint.md)
 - [RestEndpointExecutionRequestPayload](docs/RestEndpointExecutionRequestPayload.md)
 - [RestEndpointExecutionResponse](docs/RestEndpointExecutionResponse.md)
 - [RestEndpointPage](docs/RestEndpointPage.md)
 - [Role](docs/Role.md)
 - [RoleArray](docs/RoleArray.md)
 - [RoleBulkUpdate](docs/RoleBulkUpdate.md)
 - [RolePage](docs/RolePage.md)
 - [RolePermission](docs/RolePermission.md)
 - [RolePermissionArray](docs/RolePermissionArray.md)
 - [RolePermissionBulkUpdate](docs/RolePermissionBulkUpdate.md)
 - [RolePermissionPage](docs/RolePermissionPage.md)
 - [RolePermissionUpdate](docs/RolePermissionUpdate.md)
 - [RoleUpdate](docs/RoleUpdate.md)
 - [SmsService](docs/SmsService.md)
 - [SmsServiceArray](docs/SmsServiceArray.md)
 - [SmsServicePage](docs/SmsServicePage.md)
 - [SmsServiceUpdate](docs/SmsServiceUpdate.md)
 - [Template](docs/Template.md)
 - [TemplateArray](docs/TemplateArray.md)
 - [TemplateBulkUpdate](docs/TemplateBulkUpdate.md)
 - [TemplatePage](docs/TemplatePage.md)
 - [TemplateUpdate](docs/TemplateUpdate.md)
 - [Topic](docs/Topic.md)
 - [TopicArray](docs/TopicArray.md)
 - [TopicBulkUpdate](docs/TopicBulkUpdate.md)
 - [TopicPage](docs/TopicPage.md)
 - [TopicSubscription](docs/TopicSubscription.md)
 - [TopicSubscriptionArray](docs/TopicSubscriptionArray.md)
 - [TopicSubscriptionPage](docs/TopicSubscriptionPage.md)
 - [TopicSubscriptionUpdate](docs/TopicSubscriptionUpdate.md)
 - [TopicUpdate](docs/TopicUpdate.md)
 - [User](docs/User.md)
 - [UserArray](docs/UserArray.md)
 - [UserBulkUpdate](docs/UserBulkUpdate.md)
 - [UserPage](docs/UserPage.md)
 - [UserUpdate](docs/UserUpdate.md)
