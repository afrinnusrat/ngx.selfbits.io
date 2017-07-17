# OrganizationsApi

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
[**applicationsCreateOneByOrganization**](OrganizationsApi.md#applicationsCreateOneByOrganization) | **RequestMethod.Post** /organizations/${organizationId}/applications | Create new application
[**applicationsDeleteOneByOrganization**](OrganizationsApi.md#applicationsDeleteOneByOrganization) | **RequestMethod.Delete** /organizations/${organizationId}/applications/${applicationId} | Delete existing SELFBITS CLOUD PLATFORM application
[**applicationsQueryByOrganization**](OrganizationsApi.md#applicationsQueryByOrganization) | **RequestMethod.Get** /organizations/${organizationId}/applications | Returns applications
[**applicationsReadOneByOrganization**](OrganizationsApi.md#applicationsReadOneByOrganization) | **RequestMethod.Get** /organizations/${organizationId}/applications/${applicationId} | Create new application
[**directoriesCreateOneByOrganization**](OrganizationsApi.md#directoriesCreateOneByOrganization) | **RequestMethod.Post** /organizations/${organizationId}/directories | Create new directory
[**directoriesDeleteManyByOrganization**](OrganizationsApi.md#directoriesDeleteManyByOrganization) | **RequestMethod.Delete** /organizations/${organizationId}/directories | Bulk delete existing directories
[**directoriesDeleteOneByOrganization**](OrganizationsApi.md#directoriesDeleteOneByOrganization) | **RequestMethod.Delete** /organizations/${organizationId}/directories/${directoryId} | delete existing directory
[**directoriesQueryByOrganization**](OrganizationsApi.md#directoriesQueryByOrganization) | **RequestMethod.Get** /organizations/${organizationId}/directories | Returns directories
[**directoriesReadOneByOrganization**](OrganizationsApi.md#directoriesReadOneByOrganization) | **RequestMethod.Get** /organizations/${organizationId}/directories/${directoryId} | Get one existing directory
[**directoriesUpdateManyByOrganization**](OrganizationsApi.md#directoriesUpdateManyByOrganization) | **RequestMethod.Put** /organizations/${organizationId}/directories | Bulk update existing users
[**directoriesUpdateOneByOrganization**](OrganizationsApi.md#directoriesUpdateOneByOrganization) | **RequestMethod.Put** /organizations/${organizationId}/directories/${directoryId} | update existing directory
[**invitesCreateOneByOrganization**](OrganizationsApi.md#invitesCreateOneByOrganization) | **RequestMethod.Post** /organizations/${organizationId}/invites | Create organization invite
[**invitesCreateOneByOrganizationAndUser**](OrganizationsApi.md#invitesCreateOneByOrganizationAndUser) | **RequestMethod.Post** /organizations/${organizationId}/users/${userId}/invites | Create organization invite
[**invitesDeleteManyByOrganization**](OrganizationsApi.md#invitesDeleteManyByOrganization) | **RequestMethod.Delete** /organizations/${organizationId}/invites | Bulk delete existing organization invites
[**invitesDeleteOneByOrganization**](OrganizationsApi.md#invitesDeleteOneByOrganization) | **RequestMethod.Delete** /organizations/${organizationId}/invites/${inviteId} | delete existing invite
[**invitesDeleteOneByOrganizationAndUser**](OrganizationsApi.md#invitesDeleteOneByOrganizationAndUser) | **RequestMethod.Delete** /organizations/${organizationId}/users/${userId}/invites/${inviteId} | delete existing invite
[**invitesQueryByOrganization**](OrganizationsApi.md#invitesQueryByOrganization) | **RequestMethod.Get** /organizations/${organizationId}/invites | Returns invites
[**invitesQueryByOrganizationAndUser**](OrganizationsApi.md#invitesQueryByOrganizationAndUser) | **RequestMethod.Get** /organizations/${organizationId}/users/${userId}/invites | Returns invites
[**invitesReadOneByOrganization**](OrganizationsApi.md#invitesReadOneByOrganization) | **RequestMethod.Get** /organizations/${organizationId}/invites/${inviteId} | Get one existing invite
[**organizationsCreateMany**](OrganizationsApi.md#organizationsCreateMany) | **RequestMethod.Post** /organizations/bulk | Create multiple new organizations
[**organizationsCreateOne**](OrganizationsApi.md#organizationsCreateOne) | **RequestMethod.Post** /organizations | Create new organization
[**organizationsDeleteMany**](OrganizationsApi.md#organizationsDeleteMany) | **RequestMethod.Delete** /organizations | Bulk delete existing organizations
[**organizationsDeleteOne**](OrganizationsApi.md#organizationsDeleteOne) | **RequestMethod.Delete** /organizations/${organizationId} | delete existing organization
[**organizationsQuery**](OrganizationsApi.md#organizationsQuery) | **RequestMethod.Get** /organizations | Returns organizations
[**organizationsReadOne**](OrganizationsApi.md#organizationsReadOne) | **RequestMethod.Get** /organizations/${organizationId} | Get one existing organization
[**organizationsUpdateMany**](OrganizationsApi.md#organizationsUpdateMany) | **RequestMethod.Put** /organizations | Bulk update existing organizations
[**organizationsUpdateOne**](OrganizationsApi.md#organizationsUpdateOne) | **RequestMethod.Put** /organizations/${organizationId} | update existing organization
[**usersQueryByOrganization**](OrganizationsApi.md#usersQueryByOrganization) | **RequestMethod.Get** /organizations/${organizationId}/users | Returns users that have signed up with a specific organization
[**usersReadOneByOrganization**](OrganizationsApi.md#usersReadOneByOrganization) | **RequestMethod.Get** /organizations/${organizationId}/users/${userId} | Returns a specific user that has signed up with a specific organization
[**usersRemoveFromOrganization**](OrganizationsApi.md#usersRemoveFromOrganization) | **RequestMethod.Delete** /organizations/${organizationId}/users/${userId} | Remove a specific user from an organization


<a name="applicationsCreateOneByOrganization"></a>
# **applicationsCreateOneByOrganization**
> models.Application applicationsCreateOneByOrganization(organizationIdapplication)

Create new application

Create new application

### Example
```typescript
import { OrganizationsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: OrganizationsApi
  ) { }

  ngOnInit() {
    this.apiInstance.applicationsCreateOneByOrganization(organizationId: string application: models.NewApplication ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **string**| Your Selfbits Organization ID | 
 **application** | [**models.NewApplication**](NewApplication.md)| Your new application | 

### Return type

[**models.Application**](models.Application.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="applicationsDeleteOneByOrganization"></a>
# **applicationsDeleteOneByOrganization**
> applicationsDeleteOneByOrganization(organizationIdapplicationId)

Delete existing SELFBITS CLOUD PLATFORM application

Delete existing SELFBITS CLOUD PLATFORM application

### Example
```typescript
import { OrganizationsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: OrganizationsApi
  ) { }

  ngOnInit() {
    this.apiInstance.applicationsDeleteOneByOrganization(organizationId: string applicationId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **string**| Your Selfbits Organization ID | 
 **applicationId** | **string**| The tenant application identifier | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="applicationsQueryByOrganization"></a>
# **applicationsQueryByOrganization**
> models.ApplicationPage applicationsQueryByOrganization(organizationIdopts)

Returns applications

Returns applications

### Example
```typescript
import { OrganizationsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: OrganizationsApi
  ) { }

  ngOnInit() {
    this.apiInstance.applicationsQueryByOrganization(organizationId: string pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **string**| The target organization | 
 **pageSize** | **number**| Items per page | [optional] [default to 20]
 **pageNumber** | **number**| The page index (starting from 1) | [optional] [default to 1]
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;} | [optional] 
 **sort** | **string**| Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 } | [optional] 
 **select** | **string**| Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 } | [optional] 

### Return type

[**models.ApplicationPage**](models.ApplicationPage.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="applicationsReadOneByOrganization"></a>
# **applicationsReadOneByOrganization**
> models.Application applicationsReadOneByOrganization(organizationIdapplicationId)

Create new application

Create new application

### Example
```typescript
import { OrganizationsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: OrganizationsApi
  ) { }

  ngOnInit() {
    this.apiInstance.applicationsReadOneByOrganization(organizationId: string applicationId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **string**| Your Selfbits Organization ID | 
 **applicationId** | **string**| The tenant application identifier | 

### Return type

[**models.Application**](models.Application.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="directoriesCreateOneByOrganization"></a>
# **directoriesCreateOneByOrganization**
> models.Directory directoriesCreateOneByOrganization(organizationIdopts)

Create new directory

Create new directory

### Example
```typescript
import { OrganizationsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: OrganizationsApi
  ) { }

  ngOnInit() {
    this.apiInstance.directoriesCreateOneByOrganization(organizationId: string directory?: models.NewDirectory ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **string**| The target organization | 
 **directory** | [**models.NewDirectory**](NewDirectory.md)| Your new directory | [optional] 

### Return type

[**models.Directory**](models.Directory.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="directoriesDeleteManyByOrganization"></a>
# **directoriesDeleteManyByOrganization**
> models.BulkDeleteResponse directoriesDeleteManyByOrganization(organizationIdfilter)

Bulk delete existing directories

Bulk delete existing directories

### Example
```typescript
import { OrganizationsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: OrganizationsApi
  ) { }

  ngOnInit() {
    this.apiInstance.directoriesDeleteManyByOrganization(organizationId: string filter: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **string**| The target organization | 
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}} | 

### Return type

[**models.BulkDeleteResponse**](models.BulkDeleteResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="directoriesDeleteOneByOrganization"></a>
# **directoriesDeleteOneByOrganization**
> directoriesDeleteOneByOrganization(organizationIddirectoryId)

delete existing directory

delete existing directory

### Example
```typescript
import { OrganizationsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: OrganizationsApi
  ) { }

  ngOnInit() {
    this.apiInstance.directoriesDeleteOneByOrganization(organizationId: string directoryId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **string**| The target organization | 
 **directoryId** | **string**| The directory identifier | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="directoriesQueryByOrganization"></a>
# **directoriesQueryByOrganization**
> models.DirectoryPage directoriesQueryByOrganization(organizationIdopts)

Returns directories

Returns directories

### Example
```typescript
import { OrganizationsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: OrganizationsApi
  ) { }

  ngOnInit() {
    this.apiInstance.directoriesQueryByOrganization(organizationId: string pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **string**| The target organization | 
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

<a name="directoriesReadOneByOrganization"></a>
# **directoriesReadOneByOrganization**
> models.Directory directoriesReadOneByOrganization(organizationIddirectoryId)

Get one existing directory

Get one existing directory

### Example
```typescript
import { OrganizationsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: OrganizationsApi
  ) { }

  ngOnInit() {
    this.apiInstance.directoriesReadOneByOrganization(organizationId: string directoryId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **string**| The target organization | 
 **directoryId** | **string**| The directory identifier | 

### Return type

[**models.Directory**](models.Directory.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="directoriesUpdateManyByOrganization"></a>
# **directoriesUpdateManyByOrganization**
> models.BulkUpdateResponse directoriesUpdateManyByOrganization(organizationIdfilterdirectoryBulkUpdate)

Bulk update existing users

Bulk update existing users

### Example
```typescript
import { OrganizationsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: OrganizationsApi
  ) { }

  ngOnInit() {
    this.apiInstance.directoriesUpdateManyByOrganization(organizationId: string filter: string directoryBulkUpdate: models.DirectoryBulkUpdate ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **string**| The target organization | 
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;} | 
 **directoryBulkUpdate** | [**models.DirectoryBulkUpdate**](DirectoryBulkUpdate.md)| Use filter to find the directories and do a bulk update | 

### Return type

[**models.BulkUpdateResponse**](models.BulkUpdateResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="directoriesUpdateOneByOrganization"></a>
# **directoriesUpdateOneByOrganization**
> models.Directory directoriesUpdateOneByOrganization(organizationIddirectoryIdupdatedDirectory)

update existing directory

update existing directory

### Example
```typescript
import { OrganizationsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: OrganizationsApi
  ) { }

  ngOnInit() {
    this.apiInstance.directoriesUpdateOneByOrganization(organizationId: string directoryId: string updatedDirectory: models.DirectoryUpdate ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **string**| The target organization | 
 **directoryId** | **string**| The user identifier | 
 **updatedDirectory** | [**models.DirectoryUpdate**](DirectoryUpdate.md)| updated directory | 

### Return type

[**models.Directory**](models.Directory.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invitesCreateOneByOrganization"></a>
# **invitesCreateOneByOrganization**
> models.OrganizationInvite invitesCreateOneByOrganization(organizationId)

Create organization invite

Create organization invite

### Example
```typescript
import { OrganizationsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: OrganizationsApi
  ) { }

  ngOnInit() {
    this.apiInstance.invitesCreateOneByOrganization(organizationId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **string**| The target organization of your invite | 

### Return type

[**models.OrganizationInvite**](models.OrganizationInvite.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invitesCreateOneByOrganizationAndUser"></a>
# **invitesCreateOneByOrganizationAndUser**
> models.OrganizationInvite invitesCreateOneByOrganizationAndUser(organizationIduserId)

Create organization invite

Create organization invite

### Example
```typescript
import { OrganizationsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: OrganizationsApi
  ) { }

  ngOnInit() {
    this.apiInstance.invitesCreateOneByOrganizationAndUser(organizationId: string userId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **string**| The target organization of your invite | 
 **userId** | **string**| The user identifier | 

### Return type

[**models.OrganizationInvite**](models.OrganizationInvite.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invitesDeleteManyByOrganization"></a>
# **invitesDeleteManyByOrganization**
> models.BulkDeleteResponse invitesDeleteManyByOrganization(organizationIdfilter)

Bulk delete existing organization invites

Bulk delete existing organization invites

### Example
```typescript
import { OrganizationsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: OrganizationsApi
  ) { }

  ngOnInit() {
    this.apiInstance.invitesDeleteManyByOrganization(organizationId: string filter: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **string**| The target organization of your invite | 
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}} | 

### Return type

[**models.BulkDeleteResponse**](models.BulkDeleteResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invitesDeleteOneByOrganization"></a>
# **invitesDeleteOneByOrganization**
> invitesDeleteOneByOrganization(organizationIdinviteId)

delete existing invite

delete existing invite

### Example
```typescript
import { OrganizationsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: OrganizationsApi
  ) { }

  ngOnInit() {
    this.apiInstance.invitesDeleteOneByOrganization(organizationId: string inviteId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **string**| The target organization of your invite | 
 **inviteId** | **string**| The invite identifier | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invitesDeleteOneByOrganizationAndUser"></a>
# **invitesDeleteOneByOrganizationAndUser**
> invitesDeleteOneByOrganizationAndUser(organizationIduserIdinviteId)

delete existing invite

delete existing invite

### Example
```typescript
import { OrganizationsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: OrganizationsApi
  ) { }

  ngOnInit() {
    this.apiInstance.invitesDeleteOneByOrganizationAndUser(organizationId: string userId: string inviteId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **string**| The target organization of your invite | 
 **userId** | **string**| The user identifier | 
 **inviteId** | **string**| The invite identifier | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invitesQueryByOrganization"></a>
# **invitesQueryByOrganization**
> models.OrganizationInvitePage invitesQueryByOrganization(organizationIdopts)

Returns invites

Returns invites

### Example
```typescript
import { OrganizationsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: OrganizationsApi
  ) { }

  ngOnInit() {
    this.apiInstance.invitesQueryByOrganization(organizationId: string pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **string**| The target organization of your invite | 
 **pageSize** | **number**| Items per page | [optional] [default to 20]
 **pageNumber** | **number**| The page index (starting from 1) | [optional] [default to 1]
 **filter** | **string**| Sequelize filter object like {\&quot;isPublic\&quot;: \&quot;true\&quot;} | [optional] 
 **sort** | **string**| Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 } | [optional] 
 **select** | **string**| Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 } | [optional] 

### Return type

[**models.OrganizationInvitePage**](models.OrganizationInvitePage.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invitesQueryByOrganizationAndUser"></a>
# **invitesQueryByOrganizationAndUser**
> models.OrganizationInvitePage invitesQueryByOrganizationAndUser(organizationIduserIdopts)

Returns invites

Returns invites

### Example
```typescript
import { OrganizationsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: OrganizationsApi
  ) { }

  ngOnInit() {
    this.apiInstance.invitesQueryByOrganizationAndUser(organizationId: string userId: string pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **string**| The target organization of your invite | 
 **userId** | **string**| The user identifier | 
 **pageSize** | **number**| Items per page | [optional] [default to 20]
 **pageNumber** | **number**| The page index (starting from 1) | [optional] [default to 1]
 **filter** | **string**| Sequelize filter object like {\&quot;isPublic\&quot;: \&quot;true\&quot;} | [optional] 
 **sort** | **string**| Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 } | [optional] 
 **select** | **string**| Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 } | [optional] 

### Return type

[**models.OrganizationInvitePage**](models.OrganizationInvitePage.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invitesReadOneByOrganization"></a>
# **invitesReadOneByOrganization**
> models.OrganizationInvite invitesReadOneByOrganization(organizationIdinviteId)

Get one existing invite

Get one existing invite

### Example
```typescript
import { OrganizationsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: OrganizationsApi
  ) { }

  ngOnInit() {
    this.apiInstance.invitesReadOneByOrganization(organizationId: string inviteId: string ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **string**| The target organization of your invite | 
 **inviteId** | **string**| The invite identifier | 

### Return type

[**models.OrganizationInvite**](models.OrganizationInvite.md)

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
import { OrganizationsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: OrganizationsApi
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
import { OrganizationsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: OrganizationsApi
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
import { OrganizationsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: OrganizationsApi
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
import { OrganizationsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: OrganizationsApi
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
import { OrganizationsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: OrganizationsApi
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
import { OrganizationsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: OrganizationsApi
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
import { OrganizationsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: OrganizationsApi
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
import { OrganizationsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: OrganizationsApi
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

<a name="usersQueryByOrganization"></a>
# **usersQueryByOrganization**
> models.UserPage usersQueryByOrganization(organizationIdopts)

Returns users that have signed up with a specific organization

Returns users that have signed up with a specific organization

### Example
```typescript
import { OrganizationsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: OrganizationsApi
  ) { }

  ngOnInit() {
    this.apiInstance.usersQueryByOrganization(organizationId: string pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
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

<a name="usersReadOneByOrganization"></a>
# **usersReadOneByOrganization**
> models.User usersReadOneByOrganization(organizationIduserId)

Returns a specific user that has signed up with a specific organization

Returns a specific user that has signed up with a specific organization

### Example
```typescript
import { OrganizationsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: OrganizationsApi
  ) { }

  ngOnInit() {
    this.apiInstance.usersReadOneByOrganization(organizationId: string userId: string ).subscribe(
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
 **userId** | **string**| The user identifier | 

### Return type

[**models.User**](models.User.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersRemoveFromOrganization"></a>
# **usersRemoveFromOrganization**
> usersRemoveFromOrganization(organizationIduserId)

Remove a specific user from an organization

Remove a specific user from an organization

### Example
```typescript
import { OrganizationsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: OrganizationsApi
  ) { }

  ngOnInit() {
    this.apiInstance.usersRemoveFromOrganization(organizationId: string userId: string ).subscribe(
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
 **userId** | **string**| The user identifier | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

