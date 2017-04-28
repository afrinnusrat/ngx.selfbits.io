# TenantsApi

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
[**tenantsGet**](TenantsApi.md#tenantsGet) | **RequestMethod.Get** /tenants | 
[**tenantsPost**](TenantsApi.md#tenantsPost) | **RequestMethod.Post** /tenants | 
[**tenantsTenantIdApplicationsApplicationIdDelete**](TenantsApi.md#tenantsTenantIdApplicationsApplicationIdDelete) | **RequestMethod.Delete** /tenants/${tenantId}/applications/${applicationId} | 
[**tenantsTenantIdApplicationsGet**](TenantsApi.md#tenantsTenantIdApplicationsGet) | **RequestMethod.Get** /tenants/${tenantId}/applications | 
[**tenantsTenantIdApplicationsPost**](TenantsApi.md#tenantsTenantIdApplicationsPost) | **RequestMethod.Post** /tenants/${tenantId}/applications | 
[**tenantsTenantIdDelete**](TenantsApi.md#tenantsTenantIdDelete) | **RequestMethod.Delete** /tenants/${tenantId} | 


<a name="tenantsGet"></a>
# **tenantsGet**
> models.TenantCredentialArray tenantsGet()



Returns tenants of the logged in user

### Example
```typescript
import { TenantsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: TenantsApi
  ) { }

  ngOnInit() {
    this.apiInstance.tenantsGet().subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**models.TenantCredentialArray**](models.TenantCredentialArray.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tenantsPost"></a>
# **tenantsPost**
> models.TenantCreateResponse tenantsPost(tenant)



Create new SELFBITS CLOUD PLATFORM tenant by a valid subdomain

### Example
```typescript
import { TenantsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: TenantsApi
  ) { }

  ngOnInit() {
    this.apiInstance.tenantsPost(tenant: models.NewTenant ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant** | [**models.NewTenant**](NewTenant.md)| Your new tenant | 

### Return type

[**models.TenantCreateResponse**](models.TenantCreateResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tenantsTenantIdApplicationsApplicationIdDelete"></a>
# **tenantsTenantIdApplicationsApplicationIdDelete**
> tenantsTenantIdApplicationsApplicationIdDelete(tenantIdapplicationId)



Delete existing SELFBITS CLOUD PLATFORM application

### Example
```typescript
import { TenantsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: TenantsApi
  ) { }

  ngOnInit() {
    this.apiInstance.tenantsTenantIdApplicationsApplicationIdDelete(tenantId: string applicationId: string ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **string**| The tenant identifier | 
 **applicationId** | **string**| The tenant application identifier | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tenantsTenantIdApplicationsGet"></a>
# **tenantsTenantIdApplicationsGet**
> models.ApplicationArray tenantsTenantIdApplicationsGet(tenantId)



Returns tenant applications

### Example
```typescript
import { TenantsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: TenantsApi
  ) { }

  ngOnInit() {
    this.apiInstance.tenantsTenantIdApplicationsGet(tenantId: string ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **string**| Your Selfbits Tenant | 

### Return type

[**models.ApplicationArray**](models.ApplicationArray.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tenantsTenantIdApplicationsPost"></a>
# **tenantsTenantIdApplicationsPost**
> models.Application tenantsTenantIdApplicationsPost(tenantIdapplication)



Create new application

### Example
```typescript
import { TenantsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: TenantsApi
  ) { }

  ngOnInit() {
    this.apiInstance.tenantsTenantIdApplicationsPost(tenantId: string application: models.NewApplication ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **string**| Your Selfbits Tenant ID | 
 **application** | [**models.NewApplication**](NewApplication.md)| Your new application | 

### Return type

[**models.Application**](models.Application.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tenantsTenantIdDelete"></a>
# **tenantsTenantIdDelete**
> tenantsTenantIdDelete(tenantId)



Delete existing SELFBITS CLOUD PLATFORM tenant

### Example
```typescript
import { TenantsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: TenantsApi
  ) { }

  ngOnInit() {
    this.apiInstance.tenantsTenantIdDelete(tenantId: string ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **string**| The tenant identifier | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

