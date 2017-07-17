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

All URIs are relative to *https://YOUR-TENANT.apps.selfbits.io/api/v2/YOUR-TENANT/apps/YOUR-APPLICATION*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tenantsPost**](TenantsApi.md#tenantsPost) | **RequestMethod.Post** /tenants | 
[**tenantsTenantIdDelete**](TenantsApi.md#tenantsTenantIdDelete) | **RequestMethod.Delete** /tenants/${tenantId} | 


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
      data => console.log(data),
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
      data => console.log(data),
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

