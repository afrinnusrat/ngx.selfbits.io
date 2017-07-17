# UsersApi

```typescript
// ----- Initialization in app.module.ts -----
import { Selfbits, Configuration } from 'ngx.selfbits.io';
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
[**devicesCreateOneByUser**](UsersApi.md#devicesCreateOneByUser) | **RequestMethod.Post** /users/${userId}/devices | Create or update device based on submitted uuid
[**devicesDeleteOneByUser**](UsersApi.md#devicesDeleteOneByUser) | **RequestMethod.Delete** /users/${userId}/devices/${deviceId} | delete existing device
[**devicesQueryByUser**](UsersApi.md#devicesQueryByUser) | **RequestMethod.Get** /users/${userId}/devices | Return the devices of the user
[**devicesReadOneByUser**](UsersApi.md#devicesReadOneByUser) | **RequestMethod.Get** /users/${userId}/devices/${deviceId} | Get one existing device
[**devicesUpdateOneByUser**](UsersApi.md#devicesUpdateOneByUser) | **RequestMethod.Put** /users/${userId}/devices/${deviceId} | update existing device
[**invitesQueryByUser**](UsersApi.md#invitesQueryByUser) | **RequestMethod.Get** /users/${userId}/invites | Query user invites
[**invitesQueryOfCurrentUser**](UsersApi.md#invitesQueryOfCurrentUser) | **RequestMethod.Get** /users/me/invites | Query current user invites
[**invitesReadOneByUser**](UsersApi.md#invitesReadOneByUser) | **RequestMethod.Delete** /users/${userId}/invites/${inviteId} | Reject an organization invite
[**organizationsQueryByUser**](UsersApi.md#organizationsQueryByUser) | **RequestMethod.Get** /users/${userId}/organizations | Query user organizations
[**organizationsReadOneByUser**](UsersApi.md#organizationsReadOneByUser) | **RequestMethod.Get** /users/${userId}/organizations/${organizationId} | Get one organization of a user
[**pushendpointsCreateOneOfCurrentUser**](UsersApi.md#pushendpointsCreateOneOfCurrentUser) | **RequestMethod.Post** /users/me/pushendpoints | Create or update push endpoint based on submitted uuid
[**pushendpointsDeleteManyOfCurrentUser**](UsersApi.md#pushendpointsDeleteManyOfCurrentUser) | **RequestMethod.Delete** /users/me/pushendpoints | Bulk delete existing push endpoints
[**pushendpointsDeleteOneOfCurrentUserByUuid**](UsersApi.md#pushendpointsDeleteOneOfCurrentUserByUuid) | **RequestMethod.Delete** /users/me/devices/${uuid} | delete existing device
[**pushendpointsDisableOneOfCurrentUserByUuid**](UsersApi.md#pushendpointsDisableOneOfCurrentUserByUuid) | **RequestMethod.Post** /users/me/pushendpoints/${uuid}/disable | Disable receiving push notifications on the given endpoint
[**pushendpointsEnableOneOfCurrentUserByUuid**](UsersApi.md#pushendpointsEnableOneOfCurrentUserByUuid) | **RequestMethod.Post** /users/me/pushendpoints/${uuid}/enable | Enable receiving push notifications on the given endpoint
[**pushendpointsQueryOfCurrentUser**](UsersApi.md#pushendpointsQueryOfCurrentUser) | **RequestMethod.Get** /users/me/pushendpoints | Return the push endpoints of the user
[**pushendpointsReadOneOfCurrentUserByUuid**](UsersApi.md#pushendpointsReadOneOfCurrentUserByUuid) | **RequestMethod.Get** /users/me/pushendpoints/${uuid} | Get one existing device
[**sendEmailVerification**](UsersApi.md#sendEmailVerification) | **RequestMethod.Post** /users/me/email/verification | Trigger email verification for current user
[**sendEmailVerificationByUser**](UsersApi.md#sendEmailVerificationByUser) | **RequestMethod.Post** /users/${userId}/email/verification | Trigger email verification for a user
[**usersChangeMyPassword**](UsersApi.md#usersChangeMyPassword) | **RequestMethod.Post** /users/me/changepassword | change user password
[**usersQuery**](UsersApi.md#usersQuery) | **RequestMethod.Get** /users | Returns users
[**usersReadCurrent**](UsersApi.md#usersReadCurrent) | **RequestMethod.Get** /users/me | Get one existing users
[**usersReadOne**](UsersApi.md#usersReadOne) | **RequestMethod.Get** /users/${userId} | Get one user
[**usersRemoveCurrentFromAllOrganizations**](UsersApi.md#usersRemoveCurrentFromAllOrganizations) | **RequestMethod.Delete** /users/me | remove user from all organizations
[**usersRemoveOneFromAllOrganizations**](UsersApi.md#usersRemoveOneFromAllOrganizations) | **RequestMethod.Delete** /users/${userId} | remove user from all organizations
[**usersUpdateCurrent**](UsersApi.md#usersUpdateCurrent) | **RequestMethod.Put** /users/me | update current user
[**usersUpdateOne**](UsersApi.md#usersUpdateOne) | **RequestMethod.Put** /users/${userId} | update a user


<a name="devicesCreateOneByUser"></a>
# **devicesCreateOneByUser**
> models.Device devicesCreateOneByUser(userIdopts)

Create or update device based on submitted uuid

Create or update device based on submitted uuid

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
  ) { }

  ngOnInit() {
    this.apiInstance.devicesCreateOneByUser(userId: string device?: models.NewDevice ).subscribe(
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
 **device** | [**models.NewDevice**](NewDevice.md)| New or existing device | [optional] 

### Return type

[**models.Device**](models.Device.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="devicesDeleteOneByUser"></a>
# **devicesDeleteOneByUser**
> devicesDeleteOneByUser(userIddeviceId)

delete existing device

delete existing device

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
  ) { }

  ngOnInit() {
    this.apiInstance.devicesDeleteOneByUser(userId: string deviceId: string ).subscribe(
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
 **deviceId** | **string**| The device identifier | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="devicesQueryByUser"></a>
# **devicesQueryByUser**
> models.DevicePage devicesQueryByUser(userIdopts)

Return the devices of the user

Return the devices of the user

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
  ) { }

  ngOnInit() {
    this.apiInstance.devicesQueryByUser(userId: string pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
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

<a name="devicesReadOneByUser"></a>
# **devicesReadOneByUser**
> models.Device devicesReadOneByUser(userIddeviceId)

Get one existing device

Get one existing device

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
  ) { }

  ngOnInit() {
    this.apiInstance.devicesReadOneByUser(userId: string deviceId: string ).subscribe(
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
 **deviceId** | **string**| The device identifier | 

### Return type

[**models.Device**](models.Device.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="devicesUpdateOneByUser"></a>
# **devicesUpdateOneByUser**
> models.Device devicesUpdateOneByUser(userIddeviceIdupdatedDevice)

update existing device

update existing device

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
  ) { }

  ngOnInit() {
    this.apiInstance.devicesUpdateOneByUser(userId: string deviceId: string updatedDevice: models.DeviceUpdate ).subscribe(
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
 **deviceId** | **string**| The user identifier | 
 **updatedDevice** | [**models.DeviceUpdate**](DeviceUpdate.md)| updated device | 

### Return type

[**models.Device**](models.Device.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invitesQueryByUser"></a>
# **invitesQueryByUser**
> models.OrganizationInvitePage invitesQueryByUser(userIdopts)

Query user invites

Query user invites

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
  ) { }

  ngOnInit() {
    this.apiInstance.invitesQueryByUser(userId: string pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
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
 **pageSize** | **number**| Items per page | [optional] [default to 20]
 **pageNumber** | **number**| The page index (starting from 1) | [optional] [default to 1]
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: \&quot;john doe\&quot;, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}} | [optional] 
 **sort** | **string**| Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1, \&quot;name\&quot; : 1 } | [optional] 
 **select** | **string**| Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 } | [optional] 

### Return type

[**models.OrganizationInvitePage**](models.OrganizationInvitePage.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invitesQueryOfCurrentUser"></a>
# **invitesQueryOfCurrentUser**
> models.OrganizationInvitePage invitesQueryOfCurrentUser(opts)

Query current user invites

Query current user invites

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
  ) { }

  ngOnInit() {
    this.apiInstance.invitesQueryOfCurrentUser(pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
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
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: \&quot;john doe\&quot;, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}} | [optional] 
 **sort** | **string**| Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1, \&quot;name\&quot; : 1 } | [optional] 
 **select** | **string**| Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 } | [optional] 

### Return type

[**models.OrganizationInvitePage**](models.OrganizationInvitePage.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invitesReadOneByUser"></a>
# **invitesReadOneByUser**
> models.Organization invitesReadOneByUser(userIdinviteId)

Reject an organization invite

Reject an organization invite

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
  ) { }

  ngOnInit() {
    this.apiInstance.invitesReadOneByUser(userId: string inviteId: string ).subscribe(
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
 **inviteId** | **string**| The invite identifier | 

### Return type

[**models.Organization**](models.Organization.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="organizationsQueryByUser"></a>
# **organizationsQueryByUser**
> models.OrganizationPage organizationsQueryByUser(userId)

Query user organizations

Query user organizations

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
  ) { }

  ngOnInit() {
    this.apiInstance.organizationsQueryByUser(userId: string ).subscribe(
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

[**models.OrganizationPage**](models.OrganizationPage.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="organizationsReadOneByUser"></a>
# **organizationsReadOneByUser**
> models.Organization organizationsReadOneByUser(userIdorganizationId)

Get one organization of a user

Get one organization of a user

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
  ) { }

  ngOnInit() {
    this.apiInstance.organizationsReadOneByUser(userId: string organizationId: string ).subscribe(
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
 **organizationId** | **string**| The organization identifier | 

### Return type

[**models.Organization**](models.Organization.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="pushendpointsCreateOneOfCurrentUser"></a>
# **pushendpointsCreateOneOfCurrentUser**
> models.DevicePushEndpoint pushendpointsCreateOneOfCurrentUser(pushEndpoint)

Create or update push endpoint based on submitted uuid

Create or update push endpoint based on submitted uuid

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
  ) { }

  ngOnInit() {
    this.apiInstance.pushendpointsCreateOneOfCurrentUser(pushEndpoint: models.NewDevicePushEndpoint ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pushEndpoint** | [**models.NewDevicePushEndpoint**](NewDevicePushEndpoint.md)| device push endpoint | 

### Return type

[**models.DevicePushEndpoint**](models.DevicePushEndpoint.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="pushendpointsDeleteManyOfCurrentUser"></a>
# **pushendpointsDeleteManyOfCurrentUser**
> models.BulkDeleteResponse pushendpointsDeleteManyOfCurrentUser(filter)

Bulk delete existing push endpoints

Bulk delete existing push endpoints

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
  ) { }

  ngOnInit() {
    this.apiInstance.pushendpointsDeleteManyOfCurrentUser(filter: string ).subscribe(
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

<a name="pushendpointsDeleteOneOfCurrentUserByUuid"></a>
# **pushendpointsDeleteOneOfCurrentUserByUuid**
> pushendpointsDeleteOneOfCurrentUserByUuid(uuid)

delete existing device

delete existing device

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
  ) { }

  ngOnInit() {
    this.apiInstance.pushendpointsDeleteOneOfCurrentUserByUuid(uuid: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **string**| The device uuid | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="pushendpointsDisableOneOfCurrentUserByUuid"></a>
# **pushendpointsDisableOneOfCurrentUserByUuid**
> models.DevicePushEndpoint pushendpointsDisableOneOfCurrentUserByUuid(uuidpushEndpoint)

Disable receiving push notifications on the given endpoint

Disable receiving push notifications on the given endpoint

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
  ) { }

  ngOnInit() {
    this.apiInstance.pushendpointsDisableOneOfCurrentUserByUuid(uuid: string pushEndpoint: models.NewDevicePushEndpoint ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **string**| The device uuid | 
 **pushEndpoint** | [**models.NewDevicePushEndpoint**](NewDevicePushEndpoint.md)| device push endpoint | 

### Return type

[**models.DevicePushEndpoint**](models.DevicePushEndpoint.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="pushendpointsEnableOneOfCurrentUserByUuid"></a>
# **pushendpointsEnableOneOfCurrentUserByUuid**
> models.DevicePushEndpoint pushendpointsEnableOneOfCurrentUserByUuid(uuidpushEndpoint)

Enable receiving push notifications on the given endpoint

Enable receiving push notifications on the given endpoint

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
  ) { }

  ngOnInit() {
    this.apiInstance.pushendpointsEnableOneOfCurrentUserByUuid(uuid: string pushEndpoint: models.NewDevicePushEndpoint ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **string**| The device uuid | 
 **pushEndpoint** | [**models.NewDevicePushEndpoint**](NewDevicePushEndpoint.md)| device push endpoint | 

### Return type

[**models.DevicePushEndpoint**](models.DevicePushEndpoint.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="pushendpointsQueryOfCurrentUser"></a>
# **pushendpointsQueryOfCurrentUser**
> models.DevicePushEndpointPage pushendpointsQueryOfCurrentUser(opts)

Return the push endpoints of the user

Return the push endpoints of the user

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
  ) { }

  ngOnInit() {
    this.apiInstance.pushendpointsQueryOfCurrentUser(pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
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

[**models.DevicePushEndpointPage**](models.DevicePushEndpointPage.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="pushendpointsReadOneOfCurrentUserByUuid"></a>
# **pushendpointsReadOneOfCurrentUserByUuid**
> models.DevicePushEndpoint pushendpointsReadOneOfCurrentUserByUuid(uuid)

Get one existing device

Get one existing device

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
  ) { }

  ngOnInit() {
    this.apiInstance.pushendpointsReadOneOfCurrentUserByUuid(uuid: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **string**| The device uuid | 

### Return type

[**models.DevicePushEndpoint**](models.DevicePushEndpoint.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="sendEmailVerification"></a>
# **sendEmailVerification**
> models.SendVerificationEmailResponse sendEmailVerification(sendVerificationEmailRequest)

Trigger email verification for current user

Trigger email verification for current user

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
  ) { }

  ngOnInit() {
    this.apiInstance.sendEmailVerification(sendVerificationEmailRequest: models.SendVerificationEmailRequest ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendVerificationEmailRequest** | [**models.SendVerificationEmailRequest**](SendVerificationEmailRequest.md)| Email you want to verifiy | 

### Return type

[**models.SendVerificationEmailResponse**](models.SendVerificationEmailResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="sendEmailVerificationByUser"></a>
# **sendEmailVerificationByUser**
> models.SendVerificationEmailResponse sendEmailVerificationByUser(userIdsendVerificationEmailRequest)

Trigger email verification for a user

Trigger email verification for a user

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
  ) { }

  ngOnInit() {
    this.apiInstance.sendEmailVerificationByUser(userId: string sendVerificationEmailRequest: models.SendVerificationEmailRequest ).subscribe(
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
 **sendVerificationEmailRequest** | [**models.SendVerificationEmailRequest**](SendVerificationEmailRequest.md)| Email you want to verifiy | 

### Return type

[**models.SendVerificationEmailResponse**](models.SendVerificationEmailResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersChangeMyPassword"></a>
# **usersChangeMyPassword**
> models.ChangePasswordResponse usersChangeMyPassword(changePasswordRequest)

change user password

change user password

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
  ) { }

  ngOnInit() {
    this.apiInstance.usersChangeMyPassword(changePasswordRequest: models.ChangePasswordRequest ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **changePasswordRequest** | [**models.ChangePasswordRequest**](ChangePasswordRequest.md)| change password request | 

### Return type

[**models.ChangePasswordResponse**](models.ChangePasswordResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersQuery"></a>
# **usersQuery**
> models.UserPage usersQuery(opts)

Returns users

Returns users

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
  ) { }

  ngOnInit() {
    this.apiInstance.usersQuery(pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
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
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: \&quot;john doe\&quot;, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}} | [optional] 
 **sort** | **string**| Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1, \&quot;name\&quot; : 1 } | [optional] 
 **select** | **string**| Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 } | [optional] 

### Return type

[**models.UserPage**](models.UserPage.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersReadCurrent"></a>
# **usersReadCurrent**
> models.User usersReadCurrent()

Get one existing users

Get current user

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
  ) { }

  ngOnInit() {
    this.apiInstance.usersReadCurrent().subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**models.User**](models.User.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersReadOne"></a>
# **usersReadOne**
> models.User usersReadOne(userId)

Get one user

Get one user

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
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

<a name="usersRemoveCurrentFromAllOrganizations"></a>
# **usersRemoveCurrentFromAllOrganizations**
> usersRemoveCurrentFromAllOrganizations()

remove user from all organizations

remove user from all organizations

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
  ) { }

  ngOnInit() {
    this.apiInstance.usersRemoveCurrentFromAllOrganizations().subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersRemoveOneFromAllOrganizations"></a>
# **usersRemoveOneFromAllOrganizations**
> usersRemoveOneFromAllOrganizations(userId)

remove user from all organizations

remove user from all organizations

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
  ) { }

  ngOnInit() {
    this.apiInstance.usersRemoveOneFromAllOrganizations(userId: string ).subscribe(
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

<a name="usersUpdateCurrent"></a>
# **usersUpdateCurrent**
> models.User usersUpdateCurrent(updatedUser)

update current user

update current user

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
  ) { }

  ngOnInit() {
    this.apiInstance.usersUpdateCurrent(updatedUser: models.UserUpdate ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updatedUser** | [**models.UserUpdate**](UserUpdate.md)| updated user | 

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

update a user

update a user

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
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

