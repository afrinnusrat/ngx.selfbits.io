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

All URIs are relative to *https://<your-tenant>.apps.selfbits.io/api/v2/<your-tenant>/apps/<your-app>*

Method | HTTP request | Description
------------- | ------------- | -------------
[**organizationsBulkPost**](OrganizationsApi.md#organizationsBulkPost) | **RequestMethod.Post** /organizations/bulk | 
[**organizationsDelete**](OrganizationsApi.md#organizationsDelete) | **RequestMethod.Delete** /organizations | 
[**organizationsGet**](OrganizationsApi.md#organizationsGet) | **RequestMethod.Get** /organizations | 
[**organizationsOrganizationIdDelete**](OrganizationsApi.md#organizationsOrganizationIdDelete) | **RequestMethod.Delete** /organizations/${organizationId} | 
[**organizationsOrganizationIdGet**](OrganizationsApi.md#organizationsOrganizationIdGet) | **RequestMethod.Get** /organizations/${organizationId} | 
[**organizationsOrganizationIdInvitesPost**](OrganizationsApi.md#organizationsOrganizationIdInvitesPost) | **RequestMethod.Post** /organizations/${organizationId}/invites | 
[**organizationsOrganizationIdPut**](OrganizationsApi.md#organizationsOrganizationIdPut) | **RequestMethod.Put** /organizations/${organizationId} | 
[**organizationsPost**](OrganizationsApi.md#organizationsPost) | **RequestMethod.Post** /organizations | 
[**organizationsPut**](OrganizationsApi.md#organizationsPut) | **RequestMethod.Put** /organizations | 


<a name="organizationsBulkPost"></a>
# **organizationsBulkPost**
> models.OrganizationArray organizationsBulkPost(opts)



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
    this.apiInstance.organizationsBulkPost(organizations?: models.NewOrganizationArray ).subscribe(
      data => console.log(res),
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

<a name="organizationsDelete"></a>
# **organizationsDelete**
> models.BulkDeleteResponse organizationsDelete(filter)



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
    this.apiInstance.organizationsDelete(filter: string ).subscribe(
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

<a name="organizationsGet"></a>
# **organizationsGet**
> models.OrganizationPage organizationsGet(opts)



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
    this.apiInstance.organizationsGet(pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
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

[**models.OrganizationPage**](models.OrganizationPage.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="organizationsOrganizationIdDelete"></a>
# **organizationsOrganizationIdDelete**
> organizationsOrganizationIdDelete(organizationId)



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
    this.apiInstance.organizationsOrganizationIdDelete(organizationId: string ).subscribe(
      data => console.log(res),
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

<a name="organizationsOrganizationIdGet"></a>
# **organizationsOrganizationIdGet**
> models.Organization organizationsOrganizationIdGet(organizationId)



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
    this.apiInstance.organizationsOrganizationIdGet(organizationId: string ).subscribe(
      data => console.log(res),
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

<a name="organizationsOrganizationIdInvitesPost"></a>
# **organizationsOrganizationIdInvitesPost**
> models.Organization organizationsOrganizationIdInvitesPost(organizationId)



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
    this.apiInstance.organizationsOrganizationIdInvitesPost(organizationId: string ).subscribe(
      data => console.log(res),
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

[**models.Organization**](models.Organization.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="organizationsOrganizationIdPut"></a>
# **organizationsOrganizationIdPut**
> models.Organization organizationsOrganizationIdPut(organizationIdupdatedOrganization)



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
    this.apiInstance.organizationsOrganizationIdPut(organizationId: string updatedOrganization: models.OrganizationUpdate ).subscribe(
      data => console.log(res),
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

<a name="organizationsPost"></a>
# **organizationsPost**
> models.Organization organizationsPost(opts)



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
    this.apiInstance.organizationsPost(organization?: models.NewOrganization ).subscribe(
      data => console.log(res),
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

<a name="organizationsPut"></a>
# **organizationsPut**
> models.BulkUpdateResponse organizationsPut(filterorganizationBulkUpdate)



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
    this.apiInstance.organizationsPut(filter: string organizationBulkUpdate: models.OrganizationBulkUpdate ).subscribe(
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
 **organizationBulkUpdate** | [**models.OrganizationBulkUpdate**](OrganizationBulkUpdate.md)| Use filter to find the organizations and do a bulk update | 

### Return type

[**models.BulkUpdateResponse**](models.BulkUpdateResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

