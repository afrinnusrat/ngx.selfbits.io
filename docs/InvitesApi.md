# InvitesApi

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
[**invitesBulkPost**](InvitesApi.md#invitesBulkPost) | **RequestMethod.Post** /invites/bulk | 
[**invitesDelete**](InvitesApi.md#invitesDelete) | **RequestMethod.Delete** /invites | 
[**invitesGet**](InvitesApi.md#invitesGet) | **RequestMethod.Get** /invites | 
[**invitesInviteIdDelete**](InvitesApi.md#invitesInviteIdDelete) | **RequestMethod.Delete** /invites/${inviteId} | 
[**invitesInviteIdGet**](InvitesApi.md#invitesInviteIdGet) | **RequestMethod.Get** /invites/${inviteId} | 
[**invitesInviteIdPut**](InvitesApi.md#invitesInviteIdPut) | **RequestMethod.Put** /invites/${inviteId} | 
[**invitesPost**](InvitesApi.md#invitesPost) | **RequestMethod.Post** /invites | 
[**invitesPut**](InvitesApi.md#invitesPut) | **RequestMethod.Put** /invites | 


<a name="invitesBulkPost"></a>
# **invitesBulkPost**
> models.InviteArray invitesBulkPost(opts)



Create multiple new invites

### Example
```typescript
import { InvitesApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InvitesApi
  ) { }

  ngOnInit() {
    this.apiInstance.invitesBulkPost(invites?: models.NewInviteArray ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invites** | [**models.NewInviteArray**](NewInviteArray.md)| Multiple invites | [optional] 

### Return type

[**models.InviteArray**](models.InviteArray.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invitesDelete"></a>
# **invitesDelete**
> models.BulkDeleteResponse invitesDelete(filter)



Bulk delete existing invites

### Example
```typescript
import { InvitesApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InvitesApi
  ) { }

  ngOnInit() {
    this.apiInstance.invitesDelete(filter: string ).subscribe(
      data => console.log(res),
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

<a name="invitesGet"></a>
# **invitesGet**
> models.InvitePage invitesGet(opts)



Returns invites

### Example
```typescript
import { InvitesApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InvitesApi
  ) { }

  ngOnInit() {
    this.apiInstance.invitesGet(pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
      data => console.log(res),
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

### Return type

[**models.InvitePage**](models.InvitePage.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invitesInviteIdDelete"></a>
# **invitesInviteIdDelete**
> invitesInviteIdDelete(inviteId)



delete existing invite

### Example
```typescript
import { InvitesApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InvitesApi
  ) { }

  ngOnInit() {
    this.apiInstance.invitesInviteIdDelete(inviteId: string ).subscribe(
      data => console.log(res),
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

<a name="invitesInviteIdGet"></a>
# **invitesInviteIdGet**
> models.Invite invitesInviteIdGet(inviteId)



Get one existing invite

### Example
```typescript
import { InvitesApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InvitesApi
  ) { }

  ngOnInit() {
    this.apiInstance.invitesInviteIdGet(inviteId: string ).subscribe(
      data => console.log(res),
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

[**models.Invite**](models.Invite.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invitesInviteIdPut"></a>
# **invitesInviteIdPut**
> models.Invite invitesInviteIdPut(inviteIdupdatedInvite)



update existing invite

### Example
```typescript
import { InvitesApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InvitesApi
  ) { }

  ngOnInit() {
    this.apiInstance.invitesInviteIdPut(inviteId: string updatedInvite: models.InviteUpdate ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inviteId** | **string**| The user identifier | 
 **updatedInvite** | [**models.InviteUpdate**](InviteUpdate.md)| updated invite | 

### Return type

[**models.Invite**](models.Invite.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invitesPost"></a>
# **invitesPost**
> models.Invite invitesPost(invite)



Create new invite

### Example
```typescript
import { InvitesApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InvitesApi
  ) { }

  ngOnInit() {
    this.apiInstance.invitesPost(invite: models.NewInvite ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invite** | [**models.NewInvite**](NewInvite.md)| Your new invite | 

### Return type

[**models.Invite**](models.Invite.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="invitesPut"></a>
# **invitesPut**
> models.BulkUpdateResponse invitesPut(filterinviteBulkUpdate)



Bulk update existing users

### Example
```typescript
import { InvitesApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InvitesApi
  ) { }

  ngOnInit() {
    this.apiInstance.invitesPut(filter: string inviteBulkUpdate: models.InviteBulkUpdate ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;} | 
 **inviteBulkUpdate** | [**models.InviteBulkUpdate**](InviteBulkUpdate.md)| Use filter to find the invites and do a bulk update | 

### Return type

[**models.BulkUpdateResponse**](models.BulkUpdateResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

