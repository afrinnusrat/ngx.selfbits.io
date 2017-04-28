# ProvidersApi

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
[**providersBulkPost**](ProvidersApi.md#providersBulkPost) | **RequestMethod.Post** /providers/bulk | 
[**providersDelete**](ProvidersApi.md#providersDelete) | **RequestMethod.Delete** /providers | 
[**providersGet**](ProvidersApi.md#providersGet) | **RequestMethod.Get** /providers | 
[**providersPost**](ProvidersApi.md#providersPost) | **RequestMethod.Post** /providers | 
[**providersProviderIdDelete**](ProvidersApi.md#providersProviderIdDelete) | **RequestMethod.Delete** /providers/${providerId} | 
[**providersProviderIdGet**](ProvidersApi.md#providersProviderIdGet) | **RequestMethod.Get** /providers/${providerId} | 
[**providersProviderIdPut**](ProvidersApi.md#providersProviderIdPut) | **RequestMethod.Put** /providers/${providerId} | 
[**providersPut**](ProvidersApi.md#providersPut) | **RequestMethod.Put** /providers | 


<a name="providersBulkPost"></a>
# **providersBulkPost**
> models.ProviderArray providersBulkPost(opts)



Create multiple new providers

### Example
```typescript
import { ProvidersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: ProvidersApi
  ) { }

  ngOnInit() {
    this.apiInstance.providersBulkPost(providers?: models.NewProviderArray ).subscribe(
      data => console.log(res),
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

<a name="providersDelete"></a>
# **providersDelete**
> models.BulkDeleteResponse providersDelete(filter)



Bulk delete existing providers

### Example
```typescript
import { ProvidersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: ProvidersApi
  ) { }

  ngOnInit() {
    this.apiInstance.providersDelete(filter: string ).subscribe(
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

<a name="providersGet"></a>
# **providersGet**
> models.ProviderPage providersGet(opts)



Returns providers

### Example
```typescript
import { ProvidersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: ProvidersApi
  ) { }

  ngOnInit() {
    this.apiInstance.providersGet(pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
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

<a name="providersPost"></a>
# **providersPost**
> models.Provider providersPost(opts)



Create new provider

### Example
```typescript
import { ProvidersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: ProvidersApi
  ) { }

  ngOnInit() {
    this.apiInstance.providersPost(provider?: models.NewProvider ).subscribe(
      data => console.log(res),
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

<a name="providersProviderIdDelete"></a>
# **providersProviderIdDelete**
> providersProviderIdDelete(providerId)



delete existing provider

### Example
```typescript
import { ProvidersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: ProvidersApi
  ) { }

  ngOnInit() {
    this.apiInstance.providersProviderIdDelete(providerId: string ).subscribe(
      data => console.log(res),
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

<a name="providersProviderIdGet"></a>
# **providersProviderIdGet**
> models.Provider providersProviderIdGet(providerId)



Get one existing provider

### Example
```typescript
import { ProvidersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: ProvidersApi
  ) { }

  ngOnInit() {
    this.apiInstance.providersProviderIdGet(providerId: string ).subscribe(
      data => console.log(res),
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

<a name="providersProviderIdPut"></a>
# **providersProviderIdPut**
> models.Provider providersProviderIdPut(providerIdupdatedProvider)



update existing provider

### Example
```typescript
import { ProvidersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: ProvidersApi
  ) { }

  ngOnInit() {
    this.apiInstance.providersProviderIdPut(providerId: string updatedProvider: models.ProviderUpdate ).subscribe(
      data => console.log(res),
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

<a name="providersPut"></a>
# **providersPut**
> models.BulkUpdateResponse providersPut(filterproviderBulkUpdate)



Bulk update existing users

### Example
```typescript
import { ProvidersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: ProvidersApi
  ) { }

  ngOnInit() {
    this.apiInstance.providersPut(filter: string providerBulkUpdate: models.ProviderBulkUpdate ).subscribe(
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
 **providerBulkUpdate** | [**models.ProviderBulkUpdate**](ProviderBulkUpdate.md)| Use filter to find the providers and do a bulk update | 

### Return type

[**models.BulkUpdateResponse**](models.BulkUpdateResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

