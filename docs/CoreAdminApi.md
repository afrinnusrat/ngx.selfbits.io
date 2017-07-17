# CoreAdminApi

```typescript
// ----- Initialization in app.module.ts -----
import { Selfbits, Configuration } from '';
export const selfbitsConfiguration = ({
    tenant: 'YOUR-TENANT', 
    application: 'YOUR-APPLICATION',
    sbClientId: 'VALID-SB-CLIENT-ID',
    sbClientSecret: 'VALID-SB-CLIENT-SECRET',
    apiKeyPrefix: 'bearer ',
    apiKey: 'SOME-VALID-ACCESS-TOKEN',
    useDeveloperAuth: false
});

@NgModule({
	declarations: [ AppComponent ],	imports: [ /* YOUR IMPORTS */ Selfbits.forRoot(selfbitsConfiguration)	],
	providers: [/* YOUR PROVIDERS */],
	bootstrap: [AppComponent]
})
// ----- app.module.ts -----
```

All URIs are relative to *https://YOUR-TENANT.apps.selfbits.io/api/v2/YOUR-TENANT/apps/YOUR-APPLICATION*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actionsCreateMany**](CoreAdminApi.md#actionsCreateMany) | **RequestMethod.Post** /actions/bulk | Create multiple new actions
[**actionsCreateOne**](CoreAdminApi.md#actionsCreateOne) | **RequestMethod.Post** /actions | Create new action
[**actionsDeleteMany**](CoreAdminApi.md#actionsDeleteMany) | **RequestMethod.Delete** /actions | Bulk delete existing actions
[**actionsDeleteOne**](CoreAdminApi.md#actionsDeleteOne) | **RequestMethod.Delete** /actions/${actionId} | delete existing action
[**actionsExecuteOne**](CoreAdminApi.md#actionsExecuteOne) | **RequestMethod.Post** /actions/${actionId}/exec | Execute action.
[**actionsQuery**](CoreAdminApi.md#actionsQuery) | **RequestMethod.Get** /actions | Returns actions
[**actionsReadOne**](CoreAdminApi.md#actionsReadOne) | **RequestMethod.Get** /actions/${actionId} | Get one existing action
[**actionsUpdateMany**](CoreAdminApi.md#actionsUpdateMany) | **RequestMethod.Put** /actions | Bulk update existing actions
[**actionsUpdateOne**](CoreAdminApi.md#actionsUpdateOne) | **RequestMethod.Put** /actions/${actionId} | update existing action
[**changeUserPasswordAllOrganizations**](CoreAdminApi.md#changeUserPasswordAllOrganizations) | **RequestMethod.Post** /users/${userId}/changepassword | change user password globally
[**changeUserPasswordByOrganization**](CoreAdminApi.md#changeUserPasswordByOrganization) | **RequestMethod.Post** /users/${userId}/organization/${organizationId}/changepassword | change user password for one organization
[**clientsCreateMany**](CoreAdminApi.md#clientsCreateMany) | **RequestMethod.Post** /clients/bulk | Create multiple new clients
[**clientsCreateOne**](CoreAdminApi.md#clientsCreateOne) | **RequestMethod.Post** /clients | Create new client
[**clientsDeleteMany**](CoreAdminApi.md#clientsDeleteMany) | **RequestMethod.Delete** /clients | Bulk delete existing clients
[**clientsDeleteOne**](CoreAdminApi.md#clientsDeleteOne) | **RequestMethod.Delete** /clients/${clientId} | delete existing client
[**clientsQuery**](CoreAdminApi.md#clientsQuery) | **RequestMethod.Get** /clients | Returns clients
[**clientsReadOne**](CoreAdminApi.md#clientsReadOne) | **RequestMethod.Get** /clients/${clientId} | Get one existing client
[**clientsUpdateMany**](CoreAdminApi.md#clientsUpdateMany) | **RequestMethod.Put** /clients | Bulk update existing clients
[**clientsUpdateOne**](CoreAdminApi.md#clientsUpdateOne) | **RequestMethod.Put** /clients/${clientId} | update existing client
[**consumersDeleteMany**](CoreAdminApi.md#consumersDeleteMany) | **RequestMethod.Delete** /consumers | Bulk delete existing consumers
[**consumersDeleteOne**](CoreAdminApi.md#consumersDeleteOne) | **RequestMethod.Delete** /consumers/${consumerId} | delete existing consumer
[**consumersQuery**](CoreAdminApi.md#consumersQuery) | **RequestMethod.Get** /consumers | Returns consumers
[**consumersReadOne**](CoreAdminApi.md#consumersReadOne) | **RequestMethod.Get** /consumers/${consumerId} | Get one existing consumer
[**consumersUpdateMany**](CoreAdminApi.md#consumersUpdateMany) | **RequestMethod.Put** /consumers | Bulk update existing consumers
[**consumersUpdateOne**](CoreAdminApi.md#consumersUpdateOne) | **RequestMethod.Put** /consumers/${consumerId} | update existing consumer
[**devicesDeleteMany**](CoreAdminApi.md#devicesDeleteMany) | **RequestMethod.Delete** /devices | Bulk delete existing devices
[**devicesDeleteOne**](CoreAdminApi.md#devicesDeleteOne) | **RequestMethod.Delete** /devices/${deviceId} | delete existing device
[**devicesQuery**](CoreAdminApi.md#devicesQuery) | **RequestMethod.Get** /devices | Returns devices
[**devicesReadOne**](CoreAdminApi.md#devicesReadOne) | **RequestMethod.Get** /devices/${deviceId} | Get one existing device
[**directoriesCreateMany**](CoreAdminApi.md#directoriesCreateMany) | **RequestMethod.Post** /directories/bulk | Create multiple new directories
[**directoriesCreateOne**](CoreAdminApi.md#directoriesCreateOne) | **RequestMethod.Post** /directories | Create new directory
[**directoriesDeleteMany**](CoreAdminApi.md#directoriesDeleteMany) | **RequestMethod.Delete** /directories | Bulk delete existing directories
[**directoriesDeleteOne**](CoreAdminApi.md#directoriesDeleteOne) | **RequestMethod.Delete** /directories/${directoryId} | delete existing directory
[**directoriesQuery**](CoreAdminApi.md#directoriesQuery) | **RequestMethod.Get** /directories | Returns directories
[**directoriesReadOne**](CoreAdminApi.md#directoriesReadOne) | **RequestMethod.Get** /directories/${directoryId} | Get one existing directory
[**directoriesUpdateMany**](CoreAdminApi.md#directoriesUpdateMany) | **RequestMethod.Put** /directories | Bulk update existing users
[**directoriesUpdateOne**](CoreAdminApi.md#directoriesUpdateOne) | **RequestMethod.Put** /directories/${directoryId} | update existing directory
[**endpointsCreateMany**](CoreAdminApi.md#endpointsCreateMany) | **RequestMethod.Post** /endpoints/bulk | Create multiple new endpoints
[**endpointsCreateOne**](CoreAdminApi.md#endpointsCreateOne) | **RequestMethod.Post** /endpoints | Create new endpoint
[**endpointsDeleteMany**](CoreAdminApi.md#endpointsDeleteMany) | **RequestMethod.Delete** /endpoints | Bulk delete existing endpoints
[**endpointsDeleteOne**](CoreAdminApi.md#endpointsDeleteOne) | **RequestMethod.Delete** /endpoints/${endpointId} | delete existing endpoint
[**endpointsDeployOneToStage**](CoreAdminApi.md#endpointsDeployOneToStage) | **RequestMethod.Post** /endpoints/${endpointId}/deploy/${stage} | Deploy endpoint to stage
[**endpointsQuery**](CoreAdminApi.md#endpointsQuery) | **RequestMethod.Get** /endpoints | Returns endpoints
[**endpointsReadOne**](CoreAdminApi.md#endpointsReadOne) | **RequestMethod.Get** /endpoints/${endpointId} | Get one existing endpoint
[**endpointsUpdateMany**](CoreAdminApi.md#endpointsUpdateMany) | **RequestMethod.Put** /endpoints | Bulk update existing users
[**endpointsUpdateOne**](CoreAdminApi.md#endpointsUpdateOne) | **RequestMethod.Put** /endpoints/${endpointId} | update existing endpoint
[**invitesDeleteMany**](CoreAdminApi.md#invitesDeleteMany) | **RequestMethod.Delete** /invites | Bulk delete existing invites
[**invitesDeleteOne**](CoreAdminApi.md#invitesDeleteOne) | **RequestMethod.Delete** /invites/${inviteId} | delete existing invite
[**invitesQuery**](CoreAdminApi.md#invitesQuery) | **RequestMethod.Get** /invites | Returns invites
[**invitesReadOne**](CoreAdminApi.md#invitesReadOne) | **RequestMethod.Get** /invites/${inviteId} | Get one existing invite
[**mailserversCreateOne**](CoreAdminApi.md#mailserversCreateOne) | **RequestMethod.Post** /mailservers | Create new mailServer
[**mailserversDeleteMany**](CoreAdminApi.md#mailserversDeleteMany) | **RequestMethod.Delete** /mailservers | Bulk delete existing mailservers
[**mailserversDeleteOne**](CoreAdminApi.md#mailserversDeleteOne) | **RequestMethod.Delete** /mailservers/${mailServerId} | delete existing mailServer
[**mailserversDisableOne**](CoreAdminApi.md#mailserversDisableOne) | **RequestMethod.Post** /mailservers/${mailServerId}/disable | Disable the push service.
[**mailserversEnableOne**](CoreAdminApi.md#mailserversEnableOne) | **RequestMethod.Post** /mailservers/${mailServerId}/enable | Enable the push service.
[**mailserversQuery**](CoreAdminApi.md#mailserversQuery) | **RequestMethod.Get** /mailservers | Returns mail servers
[**mailserversReadOne**](CoreAdminApi.md#mailserversReadOne) | **RequestMethod.Get** /mailservers/${mailServerId} | Get one existing mailServer
[**mailserversUpdateOne**](CoreAdminApi.md#mailserversUpdateOne) | **RequestMethod.Put** /mailservers/${mailServerId} | update existing mailServer
[**organizationsCreateMany**](CoreAdminApi.md#organizationsCreateMany) | **RequestMethod.Post** /organizations/bulk | Create multiple new organizations
[**organizationsCreateOne**](CoreAdminApi.md#organizationsCreateOne) | **RequestMethod.Post** /organizations | Create new organization
[**organizationsDeleteMany**](CoreAdminApi.md#organizationsDeleteMany) | **RequestMethod.Delete** /organizations | Bulk delete existing organizations
[**organizationsDeleteOne**](CoreAdminApi.md#organizationsDeleteOne) | **RequestMethod.Delete** /organizations/${organizationId} | delete existing organization
[**organizationsQuery**](CoreAdminApi.md#organizationsQuery) | **RequestMethod.Get** /organizations | Returns organizations
[**organizationsReadOne**](CoreAdminApi.md#organizationsReadOne) | **RequestMethod.Get** /organizations/${organizationId} | Get one existing organization
[**organizationsUpdateMany**](CoreAdminApi.md#organizationsUpdateMany) | **RequestMethod.Put** /organizations | Bulk update existing organizations
[**organizationsUpdateOne**](CoreAdminApi.md#organizationsUpdateOne) | **RequestMethod.Put** /organizations/${organizationId} | update existing organization
[**providersCreateMany**](CoreAdminApi.md#providersCreateMany) | **RequestMethod.Post** /providers/bulk | Create multiple new providers
[**providersCreateOne**](CoreAdminApi.md#providersCreateOne) | **RequestMethod.Post** /providers | Create new provider
[**providersDeleteMany**](CoreAdminApi.md#providersDeleteMany) | **RequestMethod.Delete** /providers | Bulk delete existing providers
[**providersDeleteOne**](CoreAdminApi.md#providersDeleteOne) | **RequestMethod.Delete** /providers/${providerId} | delete existing provider
[**providersQuery**](CoreAdminApi.md#providersQuery) | **RequestMethod.Get** /providers | Returns providers
[**providersReadOne**](CoreAdminApi.md#providersReadOne) | **RequestMethod.Get** /providers/${providerId} | Get one existing provider
[**providersUpdateMany**](CoreAdminApi.md#providersUpdateMany) | **RequestMethod.Put** /providers | Bulk update existing providers
[**providersUpdateOne**](CoreAdminApi.md#providersUpdateOne) | **RequestMethod.Put** /providers/${providerId} | update existing provider
[**pushservicesCreateOne**](CoreAdminApi.md#pushservicesCreateOne) | **RequestMethod.Post** /pushservices | Create new pushService
[**pushservicesDeleteMany**](CoreAdminApi.md#pushservicesDeleteMany) | **RequestMethod.Delete** /pushservices | Bulk delete existing pushservices
[**pushservicesDeleteOne**](CoreAdminApi.md#pushservicesDeleteOne) | **RequestMethod.Delete** /pushservices/${pushServiceId} | delete existing pushService
[**pushservicesDisableOne**](CoreAdminApi.md#pushservicesDisableOne) | **RequestMethod.Post** /pushservices/${pushServiceId}/disable | Disable the push service.
[**pushservicesEnableOne**](CoreAdminApi.md#pushservicesEnableOne) | **RequestMethod.Post** /pushservices/${pushServiceId}/enable | Enable the push service.
[**pushservicesQuery**](CoreAdminApi.md#pushservicesQuery) | **RequestMethod.Get** /pushservices | Returns pushservices
[**pushservicesReadOne**](CoreAdminApi.md#pushservicesReadOne) | **RequestMethod.Get** /pushservices/${pushServiceId} | Get one existing pushService
[**pushservicesUpdateOne**](CoreAdminApi.md#pushservicesUpdateOne) | **RequestMethod.Put** /pushservices/${pushServiceId} | update existing pushService
[**rolesCreateMany**](CoreAdminApi.md#rolesCreateMany) | **RequestMethod.Post** /roles/bulk | Create multiple new roles
[**rolesCreateOne**](CoreAdminApi.md#rolesCreateOne) | **RequestMethod.Post** /roles | Create new role
[**rolesDeleteMany**](CoreAdminApi.md#rolesDeleteMany) | **RequestMethod.Delete** /roles | Bulk delete existing roles
[**rolesDeleteOne**](CoreAdminApi.md#rolesDeleteOne) | **RequestMethod.Delete** /roles/${roleId} | delete existing role
[**rolesQuery**](CoreAdminApi.md#rolesQuery) | **RequestMethod.Get** /roles | Returns roles
[**rolesReadOne**](CoreAdminApi.md#rolesReadOne) | **RequestMethod.Get** /roles/${roleId} | Get one existing role
[**rolesUpdateMany**](CoreAdminApi.md#rolesUpdateMany) | **RequestMethod.Put** /roles | Bulk update existing roles
[**rolesUpdateOne**](CoreAdminApi.md#rolesUpdateOne) | **RequestMethod.Put** /roles/${roleId} | update existing role
[**smsServiceCreateOne**](CoreAdminApi.md#smsServiceCreateOne) | **RequestMethod.Post** /sms | Create new smsService
[**smsServiceDeleteMany**](CoreAdminApi.md#smsServiceDeleteMany) | **RequestMethod.Delete** /sms | Bulk delete existing sms
[**smsServiceDeleteOne**](CoreAdminApi.md#smsServiceDeleteOne) | **RequestMethod.Delete** /sms/${smsServiceId} | delete existing smsService
[**smsServiceDisableOne**](CoreAdminApi.md#smsServiceDisableOne) | **RequestMethod.Post** /sms/${smsServiceId}/disable | Disable the sms service.
[**smsServiceEnableOne**](CoreAdminApi.md#smsServiceEnableOne) | **RequestMethod.Post** /sms/${smsServiceId}/enable | Enable the sms service.
[**smsServiceQuery**](CoreAdminApi.md#smsServiceQuery) | **RequestMethod.Get** /sms | Returns sms services
[**smsServiceReadOne**](CoreAdminApi.md#smsServiceReadOne) | **RequestMethod.Get** /sms/${smsServiceId} | Get one existing smsService
[**smsServiceUpdateOne**](CoreAdminApi.md#smsServiceUpdateOne) | **RequestMethod.Put** /sms/${smsServiceId} | update existing smsService
[**usersDeleteOne**](CoreAdminApi.md#usersDeleteOne) | **RequestMethod.Delete** /users/${userId} | delete existing user
[**usersReadOne**](CoreAdminApi.md#usersReadOne) | **RequestMethod.Get** /users/${userId} | Get one existing users
[**usersUpdateOne**](CoreAdminApi.md#usersUpdateOne) | **RequestMethod.Put** /users/${userId} | update existing user


<a name="actionsCreateMany"></a>
# **actionsCreateMany**
> models.ActionArray actionsCreateMany(opts)

Create multiple new actions

Create multiple new actions

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.actionsCreateMany(actions?: models.NewActionArray ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **actions** | [**models.NewActionArray**](NewActionArray.md)| Multiple actions | [optional] 

### Return type

[**models.ActionArray**](models.ActionArray.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="actionsCreateOne"></a>
# **actionsCreateOne**
> models.Action actionsCreateOne(opts)

Create new action

Create new action

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.actionsCreateOne(action?: models.NewAction ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **action** | [**models.NewAction**](NewAction.md)| Your new action | [optional] 

### Return type

[**models.Action**](models.Action.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="actionsDeleteMany"></a>
# **actionsDeleteMany**
> models.BulkDeleteResponse actionsDeleteMany(filter)

Bulk delete existing actions

Bulk delete existing actions

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.actionsDeleteMany(filter: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}} | 

### Return type

[**models.BulkDeleteResponse**](models.BulkDeleteResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="actionsDeleteOne"></a>
# **actionsDeleteOne**
> actionsDeleteOne(actionId)

delete existing action

delete existing action

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.actionsDeleteOne(actionId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **actionId** | **string**| The action identifier | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="actionsExecuteOne"></a>
# **actionsExecuteOne**
> models.ActionExecutionResponse actionsExecuteOne(actionIdopts)

Execute action.

Execute action. If the action code throws errors, they are caught and information is provided in the payload with status code 200.

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.actionsExecuteOne(actionId: string payload?: models.ActionExecutionRequestPayload ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **actionId** | **string**| The action identifier | 
 **payload** | [**models.ActionExecutionRequestPayload**](ActionExecutionRequestPayload.md)| Execution payload | [optional] 

### Return type

[**models.ActionExecutionResponse**](models.ActionExecutionResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="actionsQuery"></a>
# **actionsQuery**
> models.ActionPage actionsQuery(opts)

Returns actions

Returns actions

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.actionsQuery(pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **number**| Items per page | [optional] [default to 20]
 **pageNumber** | **number**| The page index (starting from 1) | [optional] [default to 1]
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;} | [optional] 
 **sort** | **string**| Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 } | [optional] 
 **select** | **string**| Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 } | [optional] 

### Return type

[**models.ActionPage**](models.ActionPage.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="actionsReadOne"></a>
# **actionsReadOne**
> models.Action actionsReadOne(actionId)

Get one existing action

Get one existing action

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.actionsReadOne(actionId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **actionId** | **string**| The action identifier | 

### Return type

[**models.Action**](models.Action.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="actionsUpdateMany"></a>
# **actionsUpdateMany**
> models.BulkUpdateResponse actionsUpdateMany(filteractionBulkUpdate)

Bulk update existing actions

Bulk update existing actions

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.actionsUpdateMany(filter: string actionBulkUpdate: models.ActionBulkUpdate ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;} | 
 **actionBulkUpdate** | [**models.ActionBulkUpdate**](ActionBulkUpdate.md)| Use filter to find the actions and do a bulk update | 

### Return type

[**models.BulkUpdateResponse**](models.BulkUpdateResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="actionsUpdateOne"></a>
# **actionsUpdateOne**
> models.Action actionsUpdateOne(actionIdupdatedAction)

update existing action

update existing action

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.actionsUpdateOne(actionId: string updatedAction: models.ActionUpdate ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **actionId** | **string**| The user identifier | 
 **updatedAction** | [**models.ActionUpdate**](ActionUpdate.md)| updated action | 

### Return type

[**models.Action**](models.Action.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="changeUserPasswordAllOrganizations"></a>
# **changeUserPasswordAllOrganizations**
> models.AdminChangePasswordResponse changeUserPasswordAllOrganizations(userIdadminChangePasswordRequest)

change user password globally

change user password globally

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.changeUserPasswordAllOrganizations(userId: string adminChangePasswordRequest: models.AdminChangePasswordRequest ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string**| The user identifier or me | 
 **adminChangePasswordRequest** | [**models.AdminChangePasswordRequest**](AdminChangePasswordRequest.md)| change password request | 

### Return type

[**models.AdminChangePasswordResponse**](models.AdminChangePasswordResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="changeUserPasswordByOrganization"></a>
# **changeUserPasswordByOrganization**
> models.AdminChangePasswordResponse changeUserPasswordByOrganization(userIdorganizationIdadminChangePasswordRequest)

change user password for one organization

change user password for one organization

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.changeUserPasswordByOrganization(userId: string organizationId: string adminChangePasswordRequest: models.AdminChangePasswordRequest ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string**| The user identifier or me | 
 **organizationId** | **string**| The user identifier or me | 
 **adminChangePasswordRequest** | [**models.AdminChangePasswordRequest**](AdminChangePasswordRequest.md)| change password request | 

### Return type

[**models.AdminChangePasswordResponse**](models.AdminChangePasswordResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientsCreateMany"></a>
# **clientsCreateMany**
> models.ClientArray clientsCreateMany(opts)

Create multiple new clients

Create multiple new clients

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.clientsCreateMany(clients?: models.NewClientArray ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clients** | [**models.NewClientArray**](NewClientArray.md)| Multiple clients | [optional] 

### Return type

[**models.ClientArray**](models.ClientArray.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientsCreateOne"></a>
# **clientsCreateOne**
> models.Client clientsCreateOne(opts)

Create new client

Create new client

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.clientsCreateOne(client?: models.NewClient ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | [**models.NewClient**](NewClient.md)| Your new client | [optional] 

### Return type

[**models.Client**](models.Client.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientsDeleteMany"></a>
# **clientsDeleteMany**
> models.BulkDeleteResponse clientsDeleteMany(filter)

Bulk delete existing clients

Bulk delete existing clients

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.clientsDeleteMany(filter: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}} | 

### Return type

[**models.BulkDeleteResponse**](models.BulkDeleteResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientsDeleteOne"></a>
# **clientsDeleteOne**
> clientsDeleteOne(clientId)

delete existing client

delete existing client

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.clientsDeleteOne(clientId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **string**| The client identifier | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientsQuery"></a>
# **clientsQuery**
> models.ClientPage clientsQuery(opts)

Returns clients

Returns clients

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.clientsQuery(pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **number**| Items per page | [optional] [default to 20]
 **pageNumber** | **number**| The page index (starting from 1) | [optional] [default to 1]
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;} | [optional] 
 **sort** | **string**| Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 } | [optional] 
 **select** | **string**| Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 } | [optional] 

### Return type

[**models.ClientPage**](models.ClientPage.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientsReadOne"></a>
# **clientsReadOne**
> models.Client clientsReadOne(clientId)

Get one existing client

Get one existing client

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.clientsReadOne(clientId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **string**| The client identifier | 

### Return type

[**models.Client**](models.Client.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientsUpdateMany"></a>
# **clientsUpdateMany**
> models.BulkUpdateResponse clientsUpdateMany(filterclientBulkUpdate)

Bulk update existing clients

Bulk update existing clients

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.clientsUpdateMany(filter: string clientBulkUpdate: models.ClientBulkUpdate ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;} | 
 **clientBulkUpdate** | [**models.ClientBulkUpdate**](ClientBulkUpdate.md)| Use filter to find the clients and do a bulk update | 

### Return type

[**models.BulkUpdateResponse**](models.BulkUpdateResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientsUpdateOne"></a>
# **clientsUpdateOne**
> models.Client clientsUpdateOne(clientIdupdatedClient)

update existing client

update existing client

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.clientsUpdateOne(clientId: string updatedClient: models.ClientUpdate ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **string**| The user identifier | 
 **updatedClient** | [**models.ClientUpdate**](ClientUpdate.md)| updated client | 

### Return type

[**models.Client**](models.Client.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="consumersDeleteMany"></a>
# **consumersDeleteMany**
> models.BulkDeleteResponse consumersDeleteMany(filter)

Bulk delete existing consumers

Bulk delete existing consumers

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.consumersDeleteMany(filter: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}} | 

### Return type

[**models.BulkDeleteResponse**](models.BulkDeleteResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="consumersDeleteOne"></a>
# **consumersDeleteOne**
> consumersDeleteOne(consumerId)

delete existing consumer

delete existing consumer

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.consumersDeleteOne(consumerId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consumerId** | **string**| The consumer identifier | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="consumersQuery"></a>
# **consumersQuery**
> models.ConsumerPage consumersQuery(opts)

Returns consumers

Returns consumers

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.consumersQuery(pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **number**| Items per page | [optional] [default to 20]
 **pageNumber** | **number**| The page index (starting from 1) | [optional] [default to 1]
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;} | [optional] 
 **sort** | **string**| Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 } | [optional] 
 **select** | **string**| Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 } | [optional] 

### Return type

[**models.ConsumerPage**](models.ConsumerPage.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="consumersReadOne"></a>
# **consumersReadOne**
> models.Consumer consumersReadOne(consumerId)

Get one existing consumer

Get one existing consumer

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.consumersReadOne(consumerId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consumerId** | **string**| The consumer identifier | 

### Return type

[**models.Consumer**](models.Consumer.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="consumersUpdateMany"></a>
# **consumersUpdateMany**
> models.BulkUpdateResponse consumersUpdateMany(filterconsumerBulkUpdate)

Bulk update existing consumers

Bulk update existing consumers

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.consumersUpdateMany(filter: string consumerBulkUpdate: models.ConsumerBulkUpdate ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;} | 
 **consumerBulkUpdate** | [**models.ConsumerBulkUpdate**](ConsumerBulkUpdate.md)| Use filter to find the consumers and do a bulk update | 

### Return type

[**models.BulkUpdateResponse**](models.BulkUpdateResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="consumersUpdateOne"></a>
# **consumersUpdateOne**
> models.Consumer consumersUpdateOne(consumerIdupdatedConsumer)

update existing consumer

update existing consumer

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.consumersUpdateOne(consumerId: string updatedConsumer: models.ConsumerUpdate ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consumerId** | **string**| The user identifier | 
 **updatedConsumer** | [**models.ConsumerUpdate**](ConsumerUpdate.md)| updated consumer | 

### Return type

[**models.Consumer**](models.Consumer.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="devicesDeleteMany"></a>
# **devicesDeleteMany**
> models.BulkDeleteResponse devicesDeleteMany(filter)

Bulk delete existing devices

Bulk delete existing devices

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.devicesDeleteMany(filter: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}} | 

### Return type

[**models.BulkDeleteResponse**](models.BulkDeleteResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="devicesDeleteOne"></a>
# **devicesDeleteOne**
> devicesDeleteOne(deviceId)

delete existing device

delete existing device

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.devicesDeleteOne(deviceId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **string**| The device identifier | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="devicesQuery"></a>
# **devicesQuery**
> models.DevicePage devicesQuery(opts)

Returns devices

Returns devices

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.devicesQuery(pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **number**| Items per page | [optional] [default to 20]
 **pageNumber** | **number**| The page index (starting from 1) | [optional] [default to 1]
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;} | [optional] 
 **sort** | **string**| Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 } | [optional] 
 **select** | **string**| Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 } | [optional] 

### Return type

[**models.DevicePage**](models.DevicePage.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="devicesReadOne"></a>
# **devicesReadOne**
> models.Device devicesReadOne(deviceId)

Get one existing device

Get one existing device

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.devicesReadOne(deviceId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **string**| The device identifier | 

### Return type

[**models.Device**](models.Device.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="directoriesCreateMany"></a>
# **directoriesCreateMany**
> models.DirectoryArray directoriesCreateMany(opts)

Create multiple new directories

Create multiple new directories

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.directoriesCreateMany(directories?: models.NewDirectoryArray ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directories** | [**models.NewDirectoryArray**](NewDirectoryArray.md)| Multiple directories | [optional] 

### Return type

[**models.DirectoryArray**](models.DirectoryArray.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="directoriesCreateOne"></a>
# **directoriesCreateOne**
> models.Directory directoriesCreateOne(opts)

Create new directory

Create new directory

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.directoriesCreateOne(directory?: models.NewDirectory ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | [**models.NewDirectory**](NewDirectory.md)| Your new directory | [optional] 

### Return type

[**models.Directory**](models.Directory.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="directoriesDeleteMany"></a>
# **directoriesDeleteMany**
> models.BulkDeleteResponse directoriesDeleteMany(filter)

Bulk delete existing directories

Bulk delete existing directories

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.directoriesDeleteMany(filter: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}} | 

### Return type

[**models.BulkDeleteResponse**](models.BulkDeleteResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="directoriesDeleteOne"></a>
# **directoriesDeleteOne**
> directoriesDeleteOne(directoryId)

delete existing directory

delete existing directory

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.directoriesDeleteOne(directoryId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directoryId** | **string**| The directory identifier | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="directoriesQuery"></a>
# **directoriesQuery**
> models.DirectoryPage directoriesQuery(opts)

Returns directories

Returns directories

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.directoriesQuery(pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **number**| Items per page | [optional] [default to 20]
 **pageNumber** | **number**| The page index (starting from 1) | [optional] [default to 1]
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;} | [optional] 
 **sort** | **string**| Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 } | [optional] 
 **select** | **string**| Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 } | [optional] 

### Return type

[**models.DirectoryPage**](models.DirectoryPage.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="directoriesReadOne"></a>
# **directoriesReadOne**
> models.Directory directoriesReadOne(directoryId)

Get one existing directory

Get one existing directory

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.directoriesReadOne(directoryId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directoryId** | **string**| The directory identifier | 

### Return type

[**models.Directory**](models.Directory.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="directoriesUpdateMany"></a>
# **directoriesUpdateMany**
> models.BulkUpdateResponse directoriesUpdateMany(filterdirectoryBulkUpdate)

Bulk update existing users

Bulk update existing users

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.directoriesUpdateMany(filter: string directoryBulkUpdate: models.DirectoryBulkUpdate ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;} | 
 **directoryBulkUpdate** | [**models.DirectoryBulkUpdate**](DirectoryBulkUpdate.md)| Use filter to find the directories and do a bulk update | 

### Return type

[**models.BulkUpdateResponse**](models.BulkUpdateResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="directoriesUpdateOne"></a>
# **directoriesUpdateOne**
> models.Directory directoriesUpdateOne(directoryIdupdatedDirectory)

update existing directory

update existing directory

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.directoriesUpdateOne(directoryId: string updatedDirectory: models.DirectoryUpdate ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directoryId** | **string**| The user identifier | 
 **updatedDirectory** | [**models.DirectoryUpdate**](DirectoryUpdate.md)| updated directory | 

### Return type

[**models.Directory**](models.Directory.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="endpointsCreateMany"></a>
# **endpointsCreateMany**
> models.EndpointArray endpointsCreateMany(opts)

Create multiple new endpoints

Create multiple new endpoints

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.endpointsCreateMany(endpoints?: models.NewEndpointArray ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoints** | [**models.NewEndpointArray**](NewEndpointArray.md)| Multiple endpoints | [optional] 

### Return type

[**models.EndpointArray**](models.EndpointArray.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="endpointsCreateOne"></a>
# **endpointsCreateOne**
> models.Endpoint endpointsCreateOne(opts)

Create new endpoint

Create new endpoint

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.endpointsCreateOne(endpoint?: models.NewEndpoint ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint** | [**models.NewEndpoint**](NewEndpoint.md)| Your new endpoint | [optional] 

### Return type

[**models.Endpoint**](models.Endpoint.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="endpointsDeleteMany"></a>
# **endpointsDeleteMany**
> models.BulkDeleteResponse endpointsDeleteMany(filter)

Bulk delete existing endpoints

Bulk delete existing endpoints

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.endpointsDeleteMany(filter: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}} | 

### Return type

[**models.BulkDeleteResponse**](models.BulkDeleteResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="endpointsDeleteOne"></a>
# **endpointsDeleteOne**
> endpointsDeleteOne(endpointId)

delete existing endpoint

delete existing endpoint

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.endpointsDeleteOne(endpointId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointId** | **string**| The endpoint identifier | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="endpointsDeployOneToStage"></a>
# **endpointsDeployOneToStage**
> models.RestEndpoint endpointsDeployOneToStage(endpointIdstage)

Deploy endpoint to stage

Deploy endpoint to stage

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.endpointsDeployOneToStage(endpointId: string stage: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointId** | **string**| The endpoint identifier | 
 **stage** | **string**| The stage identifier | 

### Return type

[**models.RestEndpoint**](models.RestEndpoint.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="endpointsQuery"></a>
# **endpointsQuery**
> models.EndpointPage endpointsQuery(opts)

Returns endpoints

Returns endpoints

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.endpointsQuery(pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **number**| Items per page | [optional] [default to 20]
 **pageNumber** | **number**| The page index (starting from 1) | [optional] [default to 1]
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;} | [optional] 
 **sort** | **string**| Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 } | [optional] 
 **select** | **string**| Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 } | [optional] 

### Return type

[**models.EndpointPage**](models.EndpointPage.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="endpointsReadOne"></a>
# **endpointsReadOne**
> models.Endpoint endpointsReadOne(endpointId)

Get one existing endpoint

Get one existing endpoint

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.endpointsReadOne(endpointId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointId** | **string**| The endpoint identifier | 

### Return type

[**models.Endpoint**](models.Endpoint.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="endpointsUpdateMany"></a>
# **endpointsUpdateMany**
> models.BulkUpdateResponse endpointsUpdateMany(filterendpointBulkUpdate)

Bulk update existing users

Bulk update existing users

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.endpointsUpdateMany(filter: string endpointBulkUpdate: models.EndpointBulkUpdate ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;} | 
 **endpointBulkUpdate** | [**models.EndpointBulkUpdate**](EndpointBulkUpdate.md)| Use filter to find the endpoints and do a bulk update | 

### Return type

[**models.BulkUpdateResponse**](models.BulkUpdateResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="endpointsUpdateOne"></a>
# **endpointsUpdateOne**
> models.Endpoint endpointsUpdateOne(endpointIdupdatedEndpoint)

update existing endpoint

update existing endpoint

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.endpointsUpdateOne(endpointId: string updatedEndpoint: models.EndpointUpdate ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointId** | **string**| The user identifier | 
 **updatedEndpoint** | [**models.EndpointUpdate**](EndpointUpdate.md)| updated endpoint | 

### Return type

[**models.Endpoint**](models.Endpoint.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invitesDeleteMany"></a>
# **invitesDeleteMany**
> models.BulkDeleteResponse invitesDeleteMany(filter)

Bulk delete existing invites

Bulk delete existing invites

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.invitesDeleteMany(filter: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}} | 

### Return type

[**models.BulkDeleteResponse**](models.BulkDeleteResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invitesDeleteOne"></a>
# **invitesDeleteOne**
> invitesDeleteOne(inviteId)

delete existing invite

delete existing invite

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.invitesDeleteOne(inviteId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inviteId** | **string**| The invite identifier | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invitesQuery"></a>
# **invitesQuery**
> models.OrganizationInvitePage invitesQuery(opts)

Returns invites

Returns invites

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.invitesQuery(pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **number**| Items per page | [optional] [default to 20]
 **pageNumber** | **number**| The page index (starting from 1) | [optional] [default to 1]
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;} | [optional] 
 **sort** | **string**| Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 } | [optional] 
 **select** | **string**| Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 } | [optional] 

### Return type

[**models.OrganizationInvitePage**](models.OrganizationInvitePage.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invitesReadOne"></a>
# **invitesReadOne**
> models.OrganizationInvite invitesReadOne(inviteId)

Get one existing invite

Get one existing invite

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.invitesReadOne(inviteId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inviteId** | **string**| The invite identifier | 

### Return type

[**models.OrganizationInvite**](models.OrganizationInvite.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mailserversCreateOne"></a>
# **mailserversCreateOne**
> models.MailServer mailserversCreateOne(opts)

Create new mailServer

Create new mailServer

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.mailserversCreateOne(mailServer?: models.NewMailServer ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mailServer** | [**models.NewMailServer**](NewMailServer.md)| Your new mailServer | [optional] 

### Return type

[**models.MailServer**](models.MailServer.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mailserversDeleteMany"></a>
# **mailserversDeleteMany**
> models.BulkDeleteResponse mailserversDeleteMany(filter)

Bulk delete existing mailservers

Bulk delete existing mailservers

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.mailserversDeleteMany(filter: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}} | 

### Return type

[**models.BulkDeleteResponse**](models.BulkDeleteResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mailserversDeleteOne"></a>
# **mailserversDeleteOne**
> mailserversDeleteOne(mailServerId)

delete existing mailServer

delete existing mailServer

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.mailserversDeleteOne(mailServerId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mailServerId** | **string**| The mailServer identifier | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mailserversDisableOne"></a>
# **mailserversDisableOne**
> models.MailServer mailserversDisableOne(mailServerId)

Disable the push service.

Disable the push service.

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.mailserversDisableOne(mailServerId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mailServerId** | **string**| The mailServer identifier | 

### Return type

[**models.MailServer**](models.MailServer.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mailserversEnableOne"></a>
# **mailserversEnableOne**
> models.MailServer mailserversEnableOne(mailServerId)

Enable the push service.

Enable the push service.

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.mailserversEnableOne(mailServerId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mailServerId** | **string**| The mailServer identifier | 

### Return type

[**models.MailServer**](models.MailServer.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mailserversQuery"></a>
# **mailserversQuery**
> models.MailServerPage mailserversQuery(opts)

Returns mail servers

Returns mail servers

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.mailserversQuery(pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **number**| Items per page | [optional] [default to 20]
 **pageNumber** | **number**| The page index (starting from 1) | [optional] [default to 1]
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;} | [optional] 
 **sort** | **string**| Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 } | [optional] 
 **select** | **string**| Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 } | [optional] 

### Return type

[**models.MailServerPage**](models.MailServerPage.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mailserversReadOne"></a>
# **mailserversReadOne**
> models.MailServer mailserversReadOne(mailServerId)

Get one existing mailServer

Get one existing mailServer

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.mailserversReadOne(mailServerId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mailServerId** | **string**| The mailServer identifier | 

### Return type

[**models.MailServer**](models.MailServer.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mailserversUpdateOne"></a>
# **mailserversUpdateOne**
> models.MailServer mailserversUpdateOne(mailServerIdupdatedMailServer)

update existing mailServer

update existing mailServer

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.mailserversUpdateOne(mailServerId: string updatedMailServer: models.MailServerUpdate ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mailServerId** | **string**| The user identifier | 
 **updatedMailServer** | [**models.MailServerUpdate**](MailServerUpdate.md)| updated mailServer | 

### Return type

[**models.MailServer**](models.MailServer.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="organizationsCreateMany"></a>
# **organizationsCreateMany**
> models.OrganizationArray organizationsCreateMany(opts)

Create multiple new organizations

Create multiple new organizations

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.organizationsCreateMany(organizations?: models.NewOrganizationArray ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizations** | [**models.NewOrganizationArray**](NewOrganizationArray.md)| Multiple organizations | [optional] 

### Return type

[**models.OrganizationArray**](models.OrganizationArray.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="organizationsCreateOne"></a>
# **organizationsCreateOne**
> models.Organization organizationsCreateOne(opts)

Create new organization

Create new organization

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.organizationsCreateOne(organization?: models.NewOrganization ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | [**models.NewOrganization**](NewOrganization.md)| Your new organization | [optional] 

### Return type

[**models.Organization**](models.Organization.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="organizationsDeleteMany"></a>
# **organizationsDeleteMany**
> models.BulkDeleteResponse organizationsDeleteMany(filter)

Bulk delete existing organizations

Bulk delete existing organizations

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.organizationsDeleteMany(filter: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}} | 

### Return type

[**models.BulkDeleteResponse**](models.BulkDeleteResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="organizationsDeleteOne"></a>
# **organizationsDeleteOne**
> organizationsDeleteOne(organizationId)

delete existing organization

delete existing organization

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.organizationsDeleteOne(organizationId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **string**| The organization identifier | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="organizationsQuery"></a>
# **organizationsQuery**
> models.OrganizationPage organizationsQuery(opts)

Returns organizations

Returns organizations

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.organizationsQuery(pageSize?: number pageNumber?: number filter?: string sort?: string select?: string _public?: boolean ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **number**| Items per page | [optional] [default to 20]
 **pageNumber** | **number**| The page index (starting from 1) | [optional] [default to 1]
 **filter** | **string**| Sequelize filter object like {\&quot;isPublic\&quot;: \&quot;true\&quot;} | [optional] 
 **sort** | **string**| Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 } | [optional] 
 **select** | **string**| Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 } | [optional] 
 **_public** | **boolean**| Fixed filter for public organizations | [optional] 

### Return type

[**models.OrganizationPage**](models.OrganizationPage.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="organizationsReadOne"></a>
# **organizationsReadOne**
> models.Organization organizationsReadOne(organizationId)

Get one existing organization

Get one existing organization

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.organizationsReadOne(organizationId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **string**| The organization identifier | 

### Return type

[**models.Organization**](models.Organization.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="organizationsUpdateMany"></a>
# **organizationsUpdateMany**
> models.BulkUpdateResponse organizationsUpdateMany(filterorganizationBulkUpdate)

Bulk update existing organizations

Bulk update existing organizations

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.organizationsUpdateMany(filter: string organizationBulkUpdate: models.OrganizationBulkUpdate ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;} | 
 **organizationBulkUpdate** | [**models.OrganizationBulkUpdate**](OrganizationBulkUpdate.md)| Use filter to find the organizations and do a bulk update | 

### Return type

[**models.BulkUpdateResponse**](models.BulkUpdateResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="organizationsUpdateOne"></a>
# **organizationsUpdateOne**
> models.Organization organizationsUpdateOne(organizationIdupdatedOrganization)

update existing organization

update existing organization

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.organizationsUpdateOne(organizationId: string updatedOrganization: models.OrganizationUpdate ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **string**| The user identifier | 
 **updatedOrganization** | [**models.OrganizationUpdate**](OrganizationUpdate.md)| updated organization | 

### Return type

[**models.Organization**](models.Organization.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="providersCreateMany"></a>
# **providersCreateMany**
> models.ProviderArray providersCreateMany(opts)

Create multiple new providers

Create multiple new providers

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.providersCreateMany(providers?: models.NewProviderArray ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providers** | [**models.NewProviderArray**](NewProviderArray.md)| Multiple providers | [optional] 

### Return type

[**models.ProviderArray**](models.ProviderArray.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="providersCreateOne"></a>
# **providersCreateOne**
> models.Provider providersCreateOne(opts)

Create new provider

Create new provider

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.providersCreateOne(provider?: models.NewProvider ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider** | [**models.NewProvider**](NewProvider.md)| Your new provider | [optional] 

### Return type

[**models.Provider**](models.Provider.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="providersDeleteMany"></a>
# **providersDeleteMany**
> models.BulkDeleteResponse providersDeleteMany(filter)

Bulk delete existing providers

Bulk delete existing providers

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.providersDeleteMany(filter: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}} | 

### Return type

[**models.BulkDeleteResponse**](models.BulkDeleteResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="providersDeleteOne"></a>
# **providersDeleteOne**
> providersDeleteOne(providerId)

delete existing provider

delete existing provider

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.providersDeleteOne(providerId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerId** | **string**| The provider identifier | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="providersQuery"></a>
# **providersQuery**
> models.ProviderPage providersQuery(opts)

Returns providers

Returns providers

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.providersQuery(pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **number**| Items per page | [optional] [default to 20]
 **pageNumber** | **number**| The page index (starting from 1) | [optional] [default to 1]
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;} | [optional] 
 **sort** | **string**| Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 } | [optional] 
 **select** | **string**| Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 } | [optional] 

### Return type

[**models.ProviderPage**](models.ProviderPage.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="providersReadOne"></a>
# **providersReadOne**
> models.Provider providersReadOne(providerId)

Get one existing provider

Get one existing provider

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.providersReadOne(providerId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerId** | **string**| The provider identifier | 

### Return type

[**models.Provider**](models.Provider.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="providersUpdateMany"></a>
# **providersUpdateMany**
> models.BulkUpdateResponse providersUpdateMany(filterproviderBulkUpdate)

Bulk update existing providers

Bulk update existing providers

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.providersUpdateMany(filter: string providerBulkUpdate: models.ProviderBulkUpdate ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;} | 
 **providerBulkUpdate** | [**models.ProviderBulkUpdate**](ProviderBulkUpdate.md)| Use filter to find the providers and do a bulk update | 

### Return type

[**models.BulkUpdateResponse**](models.BulkUpdateResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="providersUpdateOne"></a>
# **providersUpdateOne**
> models.Provider providersUpdateOne(providerIdupdatedProvider)

update existing provider

update existing provider

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.providersUpdateOne(providerId: string updatedProvider: models.ProviderUpdate ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerId** | **string**| The user identifier | 
 **updatedProvider** | [**models.ProviderUpdate**](ProviderUpdate.md)| updated provider | 

### Return type

[**models.Provider**](models.Provider.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="pushservicesCreateOne"></a>
# **pushservicesCreateOne**
> models.PushService pushservicesCreateOne(opts)

Create new pushService

Create new pushService

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.pushservicesCreateOne(pushService?: models.NewPushService ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pushService** | [**models.NewPushService**](NewPushService.md)| Your new pushService | [optional] 

### Return type

[**models.PushService**](models.PushService.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="pushservicesDeleteMany"></a>
# **pushservicesDeleteMany**
> models.BulkDeleteResponse pushservicesDeleteMany(filter)

Bulk delete existing pushservices

Bulk delete existing pushservices

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.pushservicesDeleteMany(filter: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}} | 

### Return type

[**models.BulkDeleteResponse**](models.BulkDeleteResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="pushservicesDeleteOne"></a>
# **pushservicesDeleteOne**
> pushservicesDeleteOne(pushServiceId)

delete existing pushService

delete existing pushService

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.pushservicesDeleteOne(pushServiceId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pushServiceId** | **string**| The pushService identifier | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="pushservicesDisableOne"></a>
# **pushservicesDisableOne**
> models.PushService pushservicesDisableOne(pushServiceId)

Disable the push service.

Disable the push service.

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.pushservicesDisableOne(pushServiceId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pushServiceId** | **string**| The pushService identifier | 

### Return type

[**models.PushService**](models.PushService.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="pushservicesEnableOne"></a>
# **pushservicesEnableOne**
> models.PushService pushservicesEnableOne(pushServiceId)

Enable the push service.

Enable the push service.

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.pushservicesEnableOne(pushServiceId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pushServiceId** | **string**| The pushService identifier | 

### Return type

[**models.PushService**](models.PushService.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="pushservicesQuery"></a>
# **pushservicesQuery**
> models.PushServicePage pushservicesQuery(opts)

Returns pushservices

Returns pushservices

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.pushservicesQuery(pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **number**| Items per page | [optional] [default to 20]
 **pageNumber** | **number**| The page index (starting from 1) | [optional] [default to 1]
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;} | [optional] 
 **sort** | **string**| Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 } | [optional] 
 **select** | **string**| Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 } | [optional] 

### Return type

[**models.PushServicePage**](models.PushServicePage.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="pushservicesReadOne"></a>
# **pushservicesReadOne**
> models.PushService pushservicesReadOne(pushServiceId)

Get one existing pushService

Get one existing pushService

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.pushservicesReadOne(pushServiceId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pushServiceId** | **string**| The pushService identifier | 

### Return type

[**models.PushService**](models.PushService.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="pushservicesUpdateOne"></a>
# **pushservicesUpdateOne**
> models.PushService pushservicesUpdateOne(pushServiceIdupdatedPushService)

update existing pushService

update existing pushService

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.pushservicesUpdateOne(pushServiceId: string updatedPushService: models.PushServiceUpdate ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pushServiceId** | **string**| The user identifier | 
 **updatedPushService** | [**models.PushServiceUpdate**](PushServiceUpdate.md)| updated pushService | 

### Return type

[**models.PushService**](models.PushService.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="rolesCreateMany"></a>
# **rolesCreateMany**
> models.RoleArray rolesCreateMany(opts)

Create multiple new roles

Create multiple new roles

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.rolesCreateMany(roles?: models.NewRoleArray ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roles** | [**models.NewRoleArray**](NewRoleArray.md)| Multiple roles | [optional] 

### Return type

[**models.RoleArray**](models.RoleArray.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="rolesCreateOne"></a>
# **rolesCreateOne**
> models.Role rolesCreateOne(opts)

Create new role

Create new role

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.rolesCreateOne(role?: models.NewRole ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **role** | [**models.NewRole**](NewRole.md)| Your new role | [optional] 

### Return type

[**models.Role**](models.Role.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="rolesDeleteMany"></a>
# **rolesDeleteMany**
> models.BulkDeleteResponse rolesDeleteMany(filter)

Bulk delete existing roles

Bulk delete existing roles

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.rolesDeleteMany(filter: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}} | 

### Return type

[**models.BulkDeleteResponse**](models.BulkDeleteResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="rolesDeleteOne"></a>
# **rolesDeleteOne**
> rolesDeleteOne(roleId)

delete existing role

delete existing role

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.rolesDeleteOne(roleId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleId** | **string**| The role identifier | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="rolesQuery"></a>
# **rolesQuery**
> models.RolePage rolesQuery(opts)

Returns roles

Returns roles

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.rolesQuery(pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **number**| Items per page | [optional] [default to 20]
 **pageNumber** | **number**| The page index (starting from 1) | [optional] [default to 1]
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;} | [optional] 
 **sort** | **string**| Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 } | [optional] 
 **select** | **string**| Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 } | [optional] 

### Return type

[**models.RolePage**](models.RolePage.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="rolesReadOne"></a>
# **rolesReadOne**
> models.Role rolesReadOne(roleId)

Get one existing role

Get one existing role

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.rolesReadOne(roleId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleId** | **string**| The role identifier | 

### Return type

[**models.Role**](models.Role.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="rolesUpdateMany"></a>
# **rolesUpdateMany**
> models.BulkUpdateResponse rolesUpdateMany(filterroleBulkUpdate)

Bulk update existing roles

Bulk update existing roles

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.rolesUpdateMany(filter: string roleBulkUpdate: models.RoleBulkUpdate ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;} | 
 **roleBulkUpdate** | [**models.RoleBulkUpdate**](RoleBulkUpdate.md)| Use filter to find the roles and do a bulk update | 

### Return type

[**models.BulkUpdateResponse**](models.BulkUpdateResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="rolesUpdateOne"></a>
# **rolesUpdateOne**
> models.Role rolesUpdateOne(roleIdupdatedRole)

update existing role

update existing role

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.rolesUpdateOne(roleId: string updatedRole: models.RoleUpdate ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleId** | **string**| The user identifier | 
 **updatedRole** | [**models.RoleUpdate**](RoleUpdate.md)| updated role | 

### Return type

[**models.Role**](models.Role.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="smsServiceCreateOne"></a>
# **smsServiceCreateOne**
> models.SmsService smsServiceCreateOne(opts)

Create new smsService

Create new smsService

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.smsServiceCreateOne(smsService?: models.NewSmsService ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smsService** | [**models.NewSmsService**](NewSmsService.md)| Your new smsService | [optional] 

### Return type

[**models.SmsService**](models.SmsService.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="smsServiceDeleteMany"></a>
# **smsServiceDeleteMany**
> models.BulkDeleteResponse smsServiceDeleteMany(filter)

Bulk delete existing sms

Bulk delete existing sms

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.smsServiceDeleteMany(filter: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}} | 

### Return type

[**models.BulkDeleteResponse**](models.BulkDeleteResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="smsServiceDeleteOne"></a>
# **smsServiceDeleteOne**
> smsServiceDeleteOne(smsServiceId)

delete existing smsService

delete existing smsService

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.smsServiceDeleteOne(smsServiceId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smsServiceId** | **string**| The smsService identifier | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="smsServiceDisableOne"></a>
# **smsServiceDisableOne**
> models.SmsService smsServiceDisableOne(smsServiceId)

Disable the sms service.

Disable the sms service.

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.smsServiceDisableOne(smsServiceId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smsServiceId** | **string**| The smsService identifier | 

### Return type

[**models.SmsService**](models.SmsService.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="smsServiceEnableOne"></a>
# **smsServiceEnableOne**
> models.SmsService smsServiceEnableOne(smsServiceId)

Enable the sms service.

Enable the sms service.

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.smsServiceEnableOne(smsServiceId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smsServiceId** | **string**| The smsService identifier | 

### Return type

[**models.SmsService**](models.SmsService.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="smsServiceQuery"></a>
# **smsServiceQuery**
> models.SmsServicePage smsServiceQuery(opts)

Returns sms services

Returns sms services

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.smsServiceQuery(pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **number**| Items per page | [optional] [default to 20]
 **pageNumber** | **number**| The page index (starting from 1) | [optional] [default to 1]
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;} | [optional] 
 **sort** | **string**| Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 } | [optional] 
 **select** | **string**| Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 } | [optional] 

### Return type

[**models.SmsServicePage**](models.SmsServicePage.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="smsServiceReadOne"></a>
# **smsServiceReadOne**
> models.SmsService smsServiceReadOne(smsServiceId)

Get one existing smsService

Get one existing smsService

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.smsServiceReadOne(smsServiceId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smsServiceId** | **string**| The smsService identifier | 

### Return type

[**models.SmsService**](models.SmsService.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="smsServiceUpdateOne"></a>
# **smsServiceUpdateOne**
> models.SmsService smsServiceUpdateOne(smsServiceIdupdatedSmsService)

update existing smsService

update existing smsService

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.smsServiceUpdateOne(smsServiceId: string updatedSmsService: models.SmsServiceUpdate ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smsServiceId** | **string**| The user identifier | 
 **updatedSmsService** | [**models.SmsServiceUpdate**](SmsServiceUpdate.md)| updated smsService | 

### Return type

[**models.SmsService**](models.SmsService.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersDeleteOne"></a>
# **usersDeleteOne**
> usersDeleteOne(userId)

delete existing user

delete existing user

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.usersDeleteOne(userId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string**| The user identifier or me | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersReadOne"></a>
# **usersReadOne**
> models.User usersReadOne(userId)

Get one existing users

Get one existing users

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.usersReadOne(userId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string**| The user identifier | 

### Return type

[**models.User**](models.User.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersUpdateOne"></a>
# **usersUpdateOne**
> models.User usersUpdateOne(userIdupdatedUser)

update existing user

update existing user

### Example
```typescript
import { CoreAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: CoreAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.usersUpdateOne(userId: string updatedUser: models.UserUpdate ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string**| The user identifier | 
 **updatedUser** | [**models.UserUpdate**](UserUpdate.md)| updated user | 

### Return type

[**models.User**](models.User.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

