## ngx.selfbits.io

Read the docs at [https://ngx.selfbits.io](https://ngx.selfbits.io)

[![license](banner.png)]()

## Documentation for API Endpoints

All URIs are relative to *https://YOUR-TENANT.apps.selfbits.io/api/v2/YOUR-TENANT/apps/YOUR-APPLICATION*


Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AuthApi* | [**login**](docs/AuthApi.md#login) | **RequestMethod.Post** /login | User login with default organization and directory
*AuthApi* | [**loginByDirectory**](docs/AuthApi.md#loginByDirectory) | **RequestMethod.Post** /login/directory/${directoryId} | User login with a specific organization and login provider
*AuthApi* | [**loginByDirectoryAndToken**](docs/AuthApi.md#loginByDirectoryAndToken) | **RequestMethod.Post** /login/directory/${directoryId}/token | Social directory login with token
*AuthApi* | [**loginByOrganization**](docs/AuthApi.md#loginByOrganization) | **RequestMethod.Post** /login/organization/${organizationId} | User login with a specific organization and the default directory
*AuthApi* | [**loginByOrganizationAndProvider**](docs/AuthApi.md#loginByOrganizationAndProvider) | **RequestMethod.Post** /login/organization/${organizationId}/provider/${providerId} | User login with a specific organization and login provider
*AuthApi* | [**resetPasswordRequest**](docs/AuthApi.md#resetPasswordRequest) | **RequestMethod.Post** /password/reset | password reset
*AuthApi* | [**resetPasswordTriggerByEmail**](docs/AuthApi.md#resetPasswordTriggerByEmail) | **RequestMethod.Post** /password/reset/trigger | trigger password reset by email
*AuthApi* | [**signup**](docs/AuthApi.md#signup) | **RequestMethod.Post** /signup | Signup with default organization and its default directory
*AuthApi* | [**signupByDirectory**](docs/AuthApi.md#signupByDirectory) | **RequestMethod.Post** /signup/directory/${directoryId} | Signup with specific directory
*AuthApi* | [**signupByDirectoryAndToken**](docs/AuthApi.md#signupByDirectoryAndToken) | **RequestMethod.Post** /signup/directory/${directoryId}/token | Signup with social directory using a token
*AuthApi* | [**signupByDirectoryInteractive**](docs/AuthApi.md#signupByDirectoryInteractive) | **RequestMethod.Post** /signup/directory/${directoryId}/interactive | 
*AuthApi* | [**signupByOrganization**](docs/AuthApi.md#signupByOrganization) | **RequestMethod.Post** /signup/organization/${organizationId} | Signup with specific organization and its default directory
*AuthApi* | [**signupByOrganizationAndDirectory**](docs/AuthApi.md#signupByOrganizationAndDirectory) | **RequestMethod.Post** /signup/organization/${organizationId}/directory/${directoryId} | Signup with specific organization and a specific directory
*AuthApi* | [**signupByOrganizationAndProvider**](docs/AuthApi.md#signupByOrganizationAndProvider) | **RequestMethod.Post** /signup/organization/${organizationId}/provider/${providerId} | Signup with specific organization and directory that belongs to a specific provider
*AuthApi* | [**signupByProvider**](docs/AuthApi.md#signupByProvider) | **RequestMethod.Post** /signup/provider/${providerId} | Signup with default organization and a directory depending on the specified provider




Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*FilesApi* | [**browsePrivateByPath**](docs/FilesApi.md#browsePrivateByPath) | **RequestMethod.Get** /files/browse/private | browse file path
*FilesApi* | [**browsePublicByPath**](docs/FilesApi.md#browsePublicByPath) | **RequestMethod.Get** /files/browse/public | browse file path
*FilesApi* | [**createPrivate**](docs/FilesApi.md#createPrivate) | **RequestMethod.Post** /files/private | initialize private file upload
*FilesApi* | [**createPrivateOrganizationFile**](docs/FilesApi.md#createPrivateOrganizationFile) | **RequestMethod.Post** /organization/${organizationId}/files/private | initialize private file upload
*FilesApi* | [**createPublic**](docs/FilesApi.md#createPublic) | **RequestMethod.Post** /files/public | initialize public file upload
*FilesApi* | [**createPublicOrganizationFile**](docs/FilesApi.md#createPublicOrganizationFile) | **RequestMethod.Post** /organization/${organizationId}/files/public | initialize public file upload
*FilesApi* | [**deleteOne**](docs/FilesApi.md#deleteOne) | **RequestMethod.Delete** /files/${fileId} | delete existing file
*FilesApi* | [**query**](docs/FilesApi.md#query) | **RequestMethod.Get** /files | query files
*FilesApi* | [**readOne**](docs/FilesApi.md#readOne) | **RequestMethod.Get** /files/file | Read existing file by id or by filePath
*FilesApi* | [**updateOne**](docs/FilesApi.md#updateOne) | **RequestMethod.Put** /files/${fileId} | Update customData of an existing file
*FilesApi* | [**verifyUpload**](docs/FilesApi.md#verifyUpload) | **RequestMethod.Post** /files/${fileId}/verify | verify the successful file upload
*FilesApi* | [**verifyUploadOfOrganizationFile**](docs/FilesApi.md#verifyUploadOfOrganizationFile) | **RequestMethod.Post** /organization/${organizationId}/files/${fileId}/verify | verify the successful file upload




Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*InteractiveViewsApi* | [**openAuthViewByDirectory**](docs/InteractiveViewsApi.md#openAuthViewByDirectory) | **RequestMethod.Get** /auth/directory/${directoryId} | Interactive user authentication with external provider
*InteractiveViewsApi* | [**openAuthViewByOrganizationAndDirectory**](docs/InteractiveViewsApi.md#openAuthViewByOrganizationAndDirectory) | **RequestMethod.Get** /auth/organization/${organizationId}/directory/${directoryId} | Interactive user authentication using specific organization and directory
*InteractiveViewsApi* | [**openAuthViewByOrganizationAndProvider**](docs/InteractiveViewsApi.md#openAuthViewByOrganizationAndProvider) | **RequestMethod.Get** /auth/organization/${organizationId}/provider/${providerId} | Interactive user authentication using specific organization and a specific provider
*InteractiveViewsApi* | [**openAuthViewByProvider**](docs/InteractiveViewsApi.md#openAuthViewByProvider) | **RequestMethod.Get** /auth/provider/${providerId} | Interactive user authentication with external provider
*InteractiveViewsApi* | [**openEmailVerificationViewByEmailAndCode**](docs/InteractiveViewsApi.md#openEmailVerificationViewByEmailAndCode) | **RequestMethod.Get** /emails/verify | Verify email
*InteractiveViewsApi* | [**openLoginView**](docs/InteractiveViewsApi.md#openLoginView) | **RequestMethod.Get** /login | Interactive user login with default directory
*InteractiveViewsApi* | [**openLoginViewByDirectory**](docs/InteractiveViewsApi.md#openLoginViewByDirectory) | **RequestMethod.Get** /login/directory/${directoryId} | Interactive user login with specific directory
*InteractiveViewsApi* | [**openLoginViewByOrganization**](docs/InteractiveViewsApi.md#openLoginViewByOrganization) | **RequestMethod.Get** /login/organization/${organizationId} | Interactive user login with default organization and its default directory
*InteractiveViewsApi* | [**openLoginViewByOrganizationAndDirectory**](docs/InteractiveViewsApi.md#openLoginViewByOrganizationAndDirectory) | **RequestMethod.Get** /login/organization/${organizationId}/directory/${directoryId} | Interactive user login with specific organization and a specific directory
*InteractiveViewsApi* | [**openLoginViewByOrganizationAndProvider**](docs/InteractiveViewsApi.md#openLoginViewByOrganizationAndProvider) | **RequestMethod.Get** /login/organization/${organizationId}/provider/${providerId} | Interactive user login with specific organization and specific provider
*InteractiveViewsApi* | [**openPasswordResetCallbackView**](docs/InteractiveViewsApi.md#openPasswordResetCallbackView) | **RequestMethod.Get** /password/reset/callback | Reset password callback view
*InteractiveViewsApi* | [**openPasswordResetView**](docs/InteractiveViewsApi.md#openPasswordResetView) | **RequestMethod.Get** /password/reset | Reset password view
*InteractiveViewsApi* | [**openSignupView**](docs/InteractiveViewsApi.md#openSignupView) | **RequestMethod.Get** /signup | Interactive user signup with default organization and its default directory
*InteractiveViewsApi* | [**openSignupViewByDirectory**](docs/InteractiveViewsApi.md#openSignupViewByDirectory) | **RequestMethod.Get** /signup/directory/${directoryId} | Interactive user signup with a specific directory
*InteractiveViewsApi* | [**openSignupViewByOrganization**](docs/InteractiveViewsApi.md#openSignupViewByOrganization) | **RequestMethod.Get** /signup/organization/${organizationId} | Interactive user signup with specified organization and its default directory
*InteractiveViewsApi* | [**openSignupViewByOrganizationAndDirectory**](docs/InteractiveViewsApi.md#openSignupViewByOrganizationAndDirectory) | **RequestMethod.Get** /signup/organization/${organizationId}/directory/${directoryId} | Interactive user signup with specific organization and a specific directory
*InteractiveViewsApi* | [**openSignupViewByOrganizationAndProvider**](docs/InteractiveViewsApi.md#openSignupViewByOrganizationAndProvider) | **RequestMethod.Get** /signup/organization/${organizationId}/provider/${providerId} | Interactive user signup with specific organization and specific provider
*InteractiveViewsApi* | [**openSignupViewByProvider**](docs/InteractiveViewsApi.md#openSignupViewByProvider) | **RequestMethod.Get** /signup/provider/${providerId} | Interactive user signup with default organization and a directory depending on specified provider




Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*JoinApi* | [**joinOrganization**](docs/JoinApi.md#joinOrganization) | **RequestMethod.Post** /join/organization/${organizationId} | Join a specific organization
*JoinApi* | [**joinOrganizationByDirectory**](docs/JoinApi.md#joinOrganizationByDirectory) | **RequestMethod.Post** /join/organization/${organizationId}/directory/${directoryId} | Join with specific organization and a specific directory
*JoinApi* | [**joinOrganizationByProvider**](docs/JoinApi.md#joinOrganizationByProvider) | **RequestMethod.Post** /join/organization/${organizationId}/provider/${providerId} | Signup with specific organization and directory that belongs to a specific provider




Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*MongodbApi* | [**createManyByModel**](docs/MongodbApi.md#createManyByModel) | **RequestMethod.Post** /m/models/${mongoModelId}/data/bulk | Create multiple new data items
*MongodbApi* | [**createOneByModel**](docs/MongodbApi.md#createOneByModel) | **RequestMethod.Post** /m/models/${mongoModelId}/data | Create new data item
*MongodbApi* | [**deleteManyByModel**](docs/MongodbApi.md#deleteManyByModel) | **RequestMethod.Delete** /m/models/${mongoModelId}/data | Bulk delete existing data items
*MongodbApi* | [**deleteOneByModel**](docs/MongodbApi.md#deleteOneByModel) | **RequestMethod.Delete** /m/models/${mongoModelId}/data/${id} | delete existing data item
*MongodbApi* | [**queryByModel**](docs/MongodbApi.md#queryByModel) | **RequestMethod.Get** /m/models/${mongoModelId}/data | Returns data items paginated
*MongodbApi* | [**readOneByModel**](docs/MongodbApi.md#readOneByModel) | **RequestMethod.Get** /m/models/${mongoModelId}/data/${id} | Get one existing data item
*MongodbApi* | [**updateManyByModel**](docs/MongodbApi.md#updateManyByModel) | **RequestMethod.Put** /m/models/${mongoModelId}/data | Bulk update existing data items
*MongodbApi* | [**updateOneByModel**](docs/MongodbApi.md#updateOneByModel) | **RequestMethod.Put** /m/models/${mongoModelId}/data/${id} | update existing data item




Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*OrganizationsApi* | [**applicationsCreateOneByOrganization**](docs/OrganizationsApi.md#applicationsCreateOneByOrganization) | **RequestMethod.Post** /organizations/${organizationId}/applications | Create new application
*OrganizationsApi* | [**applicationsDeleteOneByOrganization**](docs/OrganizationsApi.md#applicationsDeleteOneByOrganization) | **RequestMethod.Delete** /organizations/${organizationId}/applications/${applicationId} | Delete existing SELFBITS CLOUD PLATFORM application
*OrganizationsApi* | [**applicationsQueryByOrganization**](docs/OrganizationsApi.md#applicationsQueryByOrganization) | **RequestMethod.Get** /organizations/${organizationId}/applications | Returns applications
*OrganizationsApi* | [**applicationsReadOneByOrganization**](docs/OrganizationsApi.md#applicationsReadOneByOrganization) | **RequestMethod.Get** /organizations/${organizationId}/applications/${applicationId} | Create new application
*OrganizationsApi* | [**directoriesCreateOneByOrganization**](docs/OrganizationsApi.md#directoriesCreateOneByOrganization) | **RequestMethod.Post** /organizations/${organizationId}/directories | Create new directory
*OrganizationsApi* | [**directoriesDeleteManyByOrganization**](docs/OrganizationsApi.md#directoriesDeleteManyByOrganization) | **RequestMethod.Delete** /organizations/${organizationId}/directories | Bulk delete existing directories
*OrganizationsApi* | [**directoriesDeleteOneByOrganization**](docs/OrganizationsApi.md#directoriesDeleteOneByOrganization) | **RequestMethod.Delete** /organizations/${organizationId}/directories/${directoryId} | delete existing directory
*OrganizationsApi* | [**directoriesQueryByOrganization**](docs/OrganizationsApi.md#directoriesQueryByOrganization) | **RequestMethod.Get** /organizations/${organizationId}/directories | Returns directories
*OrganizationsApi* | [**directoriesReadOneByOrganization**](docs/OrganizationsApi.md#directoriesReadOneByOrganization) | **RequestMethod.Get** /organizations/${organizationId}/directories/${directoryId} | Get one existing directory
*OrganizationsApi* | [**directoriesUpdateManyByOrganization**](docs/OrganizationsApi.md#directoriesUpdateManyByOrganization) | **RequestMethod.Put** /organizations/${organizationId}/directories | Bulk update existing users
*OrganizationsApi* | [**directoriesUpdateOneByOrganization**](docs/OrganizationsApi.md#directoriesUpdateOneByOrganization) | **RequestMethod.Put** /organizations/${organizationId}/directories/${directoryId} | update existing directory
*OrganizationsApi* | [**invitesCreateOneByOrganization**](docs/OrganizationsApi.md#invitesCreateOneByOrganization) | **RequestMethod.Post** /organizations/${organizationId}/invites | Create organization invite
*OrganizationsApi* | [**invitesCreateOneByOrganizationAndUser**](docs/OrganizationsApi.md#invitesCreateOneByOrganizationAndUser) | **RequestMethod.Post** /organizations/${organizationId}/users/${userId}/invites | Create organization invite
*OrganizationsApi* | [**invitesDeleteManyByOrganization**](docs/OrganizationsApi.md#invitesDeleteManyByOrganization) | **RequestMethod.Delete** /organizations/${organizationId}/invites | Bulk delete existing organization invites
*OrganizationsApi* | [**invitesDeleteOneByOrganization**](docs/OrganizationsApi.md#invitesDeleteOneByOrganization) | **RequestMethod.Delete** /organizations/${organizationId}/invites/${inviteId} | delete existing invite
*OrganizationsApi* | [**invitesDeleteOneByOrganizationAndUser**](docs/OrganizationsApi.md#invitesDeleteOneByOrganizationAndUser) | **RequestMethod.Delete** /organizations/${organizationId}/users/${userId}/invites/${inviteId} | delete existing invite
*OrganizationsApi* | [**invitesQueryByOrganization**](docs/OrganizationsApi.md#invitesQueryByOrganization) | **RequestMethod.Get** /organizations/${organizationId}/invites | Returns invites
*OrganizationsApi* | [**invitesQueryByOrganizationAndUser**](docs/OrganizationsApi.md#invitesQueryByOrganizationAndUser) | **RequestMethod.Get** /organizations/${organizationId}/users/${userId}/invites | Returns invites
*OrganizationsApi* | [**invitesReadOneByOrganization**](docs/OrganizationsApi.md#invitesReadOneByOrganization) | **RequestMethod.Get** /organizations/${organizationId}/invites/${inviteId} | Get one existing invite
*OrganizationsApi* | [**organizationsCreateMany**](docs/OrganizationsApi.md#organizationsCreateMany) | **RequestMethod.Post** /organizations/bulk | Create multiple new organizations
*OrganizationsApi* | [**organizationsCreateOne**](docs/OrganizationsApi.md#organizationsCreateOne) | **RequestMethod.Post** /organizations | Create new organization
*OrganizationsApi* | [**organizationsDeleteMany**](docs/OrganizationsApi.md#organizationsDeleteMany) | **RequestMethod.Delete** /organizations | Bulk delete existing organizations
*OrganizationsApi* | [**organizationsDeleteOne**](docs/OrganizationsApi.md#organizationsDeleteOne) | **RequestMethod.Delete** /organizations/${organizationId} | delete existing organization
*OrganizationsApi* | [**organizationsQuery**](docs/OrganizationsApi.md#organizationsQuery) | **RequestMethod.Get** /organizations | Returns organizations
*OrganizationsApi* | [**organizationsReadOne**](docs/OrganizationsApi.md#organizationsReadOne) | **RequestMethod.Get** /organizations/${organizationId} | Get one existing organization
*OrganizationsApi* | [**organizationsUpdateMany**](docs/OrganizationsApi.md#organizationsUpdateMany) | **RequestMethod.Put** /organizations | Bulk update existing organizations
*OrganizationsApi* | [**organizationsUpdateOne**](docs/OrganizationsApi.md#organizationsUpdateOne) | **RequestMethod.Put** /organizations/${organizationId} | update existing organization
*OrganizationsApi* | [**usersQueryByOrganization**](docs/OrganizationsApi.md#usersQueryByOrganization) | **RequestMethod.Get** /organizations/${organizationId}/users | Returns users that have signed up with a specific organization
*OrganizationsApi* | [**usersReadOneByOrganization**](docs/OrganizationsApi.md#usersReadOneByOrganization) | **RequestMethod.Get** /organizations/${organizationId}/users/${userId} | Returns a specific user that has signed up with a specific organization
*OrganizationsApi* | [**usersRemoveFromOrganization**](docs/OrganizationsApi.md#usersRemoveFromOrganization) | **RequestMethod.Delete** /organizations/${organizationId}/users/${userId} | Remove a specific user from an organization




Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*RestApi* | [**_delete**](docs/RestApi.md#_delete) | **RequestMethod.Delete** /rest/${stage}/${resource} | Execute a REST request to a deployed REST API
*RestApi* | [**get**](docs/RestApi.md#get) | **RequestMethod.Get** /rest/${stage}/${resource} | Execute a REST request to a deployed REST API
*RestApi* | [**post**](docs/RestApi.md#post) | **RequestMethod.Post** /rest/${stage}/${resource} | Execute a REST request to a deployed REST API
*RestApi* | [**put**](docs/RestApi.md#put) | **RequestMethod.Put** /rest/${stage}/${resource} | Execute a REST request to a deployed REST API




Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*TenantsApi* | [**tenantsPost**](docs/TenantsApi.md#tenantsPost) | **RequestMethod.Post** /tenants | 
*TenantsApi* | [**tenantsTenantIdDelete**](docs/TenantsApi.md#tenantsTenantIdDelete) | **RequestMethod.Delete** /tenants/${tenantId} | 




Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*UsersApi* | [**devicesCreateOneByUser**](docs/UsersApi.md#devicesCreateOneByUser) | **RequestMethod.Post** /users/${userId}/devices | Create or update device based on submitted uuid
*UsersApi* | [**devicesDeleteOneByUser**](docs/UsersApi.md#devicesDeleteOneByUser) | **RequestMethod.Delete** /users/${userId}/devices/${deviceId} | delete existing device
*UsersApi* | [**devicesQueryByUser**](docs/UsersApi.md#devicesQueryByUser) | **RequestMethod.Get** /users/${userId}/devices | Return the devices of the user
*UsersApi* | [**devicesReadOneByUser**](docs/UsersApi.md#devicesReadOneByUser) | **RequestMethod.Get** /users/${userId}/devices/${deviceId} | Get one existing device
*UsersApi* | [**devicesUpdateOneByUser**](docs/UsersApi.md#devicesUpdateOneByUser) | **RequestMethod.Put** /users/${userId}/devices/${deviceId} | update existing device
*UsersApi* | [**invitesQueryByUser**](docs/UsersApi.md#invitesQueryByUser) | **RequestMethod.Get** /users/${userId}/invites | Query user invites
*UsersApi* | [**invitesQueryOfCurrentUser**](docs/UsersApi.md#invitesQueryOfCurrentUser) | **RequestMethod.Get** /users/me/invites | Query current user invites
*UsersApi* | [**invitesReadOneByUser**](docs/UsersApi.md#invitesReadOneByUser) | **RequestMethod.Delete** /users/${userId}/invites/${inviteId} | Reject an organization invite
*UsersApi* | [**organizationsQueryByUser**](docs/UsersApi.md#organizationsQueryByUser) | **RequestMethod.Get** /users/${userId}/organizations | Query user organizations
*UsersApi* | [**organizationsReadOneByUser**](docs/UsersApi.md#organizationsReadOneByUser) | **RequestMethod.Get** /users/${userId}/organizations/${organizationId} | Get one organization of a user
*UsersApi* | [**pushendpointsCreateOneOfCurrentUser**](docs/UsersApi.md#pushendpointsCreateOneOfCurrentUser) | **RequestMethod.Post** /users/me/pushendpoints | Create or update push endpoint based on submitted uuid
*UsersApi* | [**pushendpointsDeleteManyOfCurrentUser**](docs/UsersApi.md#pushendpointsDeleteManyOfCurrentUser) | **RequestMethod.Delete** /users/me/pushendpoints | Bulk delete existing push endpoints
*UsersApi* | [**pushendpointsDeleteOneOfCurrentUserByUuid**](docs/UsersApi.md#pushendpointsDeleteOneOfCurrentUserByUuid) | **RequestMethod.Delete** /users/me/devices/${uuid} | delete existing device
*UsersApi* | [**pushendpointsDisableOneOfCurrentUserByUuid**](docs/UsersApi.md#pushendpointsDisableOneOfCurrentUserByUuid) | **RequestMethod.Post** /users/me/pushendpoints/${uuid}/disable | Disable receiving push notifications on the given endpoint
*UsersApi* | [**pushendpointsEnableOneOfCurrentUserByUuid**](docs/UsersApi.md#pushendpointsEnableOneOfCurrentUserByUuid) | **RequestMethod.Post** /users/me/pushendpoints/${uuid}/enable | Enable receiving push notifications on the given endpoint
*UsersApi* | [**pushendpointsQueryOfCurrentUser**](docs/UsersApi.md#pushendpointsQueryOfCurrentUser) | **RequestMethod.Get** /users/me/pushendpoints | Return the push endpoints of the user
*UsersApi* | [**pushendpointsReadOneOfCurrentUserByUuid**](docs/UsersApi.md#pushendpointsReadOneOfCurrentUserByUuid) | **RequestMethod.Get** /users/me/pushendpoints/${uuid} | Get one existing device
*UsersApi* | [**sendEmailVerification**](docs/UsersApi.md#sendEmailVerification) | **RequestMethod.Post** /users/me/email/verification | Trigger email verification for current user
*UsersApi* | [**sendEmailVerificationByUser**](docs/UsersApi.md#sendEmailVerificationByUser) | **RequestMethod.Post** /users/${userId}/email/verification | Trigger email verification for a user
*UsersApi* | [**usersChangeMyPassword**](docs/UsersApi.md#usersChangeMyPassword) | **RequestMethod.Post** /users/me/changepassword | change user password
*UsersApi* | [**usersQuery**](docs/UsersApi.md#usersQuery) | **RequestMethod.Get** /users | Returns users
*UsersApi* | [**usersReadCurrent**](docs/UsersApi.md#usersReadCurrent) | **RequestMethod.Get** /users/me | Get one existing users
*UsersApi* | [**usersReadOne**](docs/UsersApi.md#usersReadOne) | **RequestMethod.Get** /users/${userId} | Get one user
*UsersApi* | [**usersRemoveCurrentFromAllOrganizations**](docs/UsersApi.md#usersRemoveCurrentFromAllOrganizations) | **RequestMethod.Delete** /users/me | remove user from all organizations
*UsersApi* | [**usersRemoveOneFromAllOrganizations**](docs/UsersApi.md#usersRemoveOneFromAllOrganizations) | **RequestMethod.Delete** /users/${userId} | remove user from all organizations
*UsersApi* | [**usersUpdateCurrent**](docs/UsersApi.md#usersUpdateCurrent) | **RequestMethod.Put** /users/me | update current user
*UsersApi* | [**usersUpdateOne**](docs/UsersApi.md#usersUpdateOne) | **RequestMethod.Put** /users/${userId} | update a user





## Documentation for Models

 - [Action](docs/Action.md)
 - [ActionArray](docs/ActionArray.md)
 - [ActionBulkUpdate](docs/ActionBulkUpdate.md)
 - [ActionExecutionRequestPayload](docs/ActionExecutionRequestPayload.md)
 - [ActionExecutionResponse](docs/ActionExecutionResponse.md)
 - [ActionPage](docs/ActionPage.md)
 - [ActionUpdate](docs/ActionUpdate.md)
 - [Application](docs/Application.md)
 - [ApplicationArray](docs/ApplicationArray.md)
 - [ApplicationBulkUpdate](docs/ApplicationBulkUpdate.md)
 - [ApplicationPage](docs/ApplicationPage.md)
 - [ApplicationUpdate](docs/ApplicationUpdate.md)
 - [AuthorizationResponse](docs/AuthorizationResponse.md)
 - [BulkDeleteResponse](docs/BulkDeleteResponse.md)
 - [BulkUpdateResponse](docs/BulkUpdateResponse.md)
 - [ChangePasswordRequest](docs/ChangePasswordRequest.md)
 - [ChangePasswordResponse](docs/ChangePasswordResponse.md)
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
 - [LoginCredentials](docs/LoginCredentials.md)
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
 - [NewTenant](docs/NewTenant.md)
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
 - [ResetPasswordRequest](docs/ResetPasswordRequest.md)
 - [ResetPasswordResponse](docs/ResetPasswordResponse.md)
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
 - [SendPasswordResetEmailRequest](docs/SendPasswordResetEmailRequest.md)
 - [SendPasswordResetEmailResponse](docs/SendPasswordResetEmailResponse.md)
 - [SendVerificationEmailRequest](docs/SendVerificationEmailRequest.md)
 - [SendVerificationEmailResponse](docs/SendVerificationEmailResponse.md)
 - [SmsService](docs/SmsService.md)
 - [SmsServiceArray](docs/SmsServiceArray.md)
 - [SmsServicePage](docs/SmsServicePage.md)
 - [SmsServiceUpdate](docs/SmsServiceUpdate.md)
 - [Template](docs/Template.md)
 - [TemplateArray](docs/TemplateArray.md)
 - [TemplateBulkUpdate](docs/TemplateBulkUpdate.md)
 - [TemplatePage](docs/TemplatePage.md)
 - [TemplateUpdate](docs/TemplateUpdate.md)
 - [Tenant](docs/Tenant.md)
 - [TenantCreateResponse](docs/TenantCreateResponse.md)
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
 - [UserLoginRequest](docs/UserLoginRequest.md)
 - [UserLoginResponse](docs/UserLoginResponse.md)
 - [UserOrganizationListResponse](docs/UserOrganizationListResponse.md)
 - [UserPage](docs/UserPage.md)
 - [UserSignupRequest](docs/UserSignupRequest.md)
 - [UserSignupResponse](docs/UserSignupResponse.md)
 - [UserUpdate](docs/UserUpdate.md)
