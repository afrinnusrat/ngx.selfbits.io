# EndpointsApi

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
[**endpointsBulkPost**](EndpointsApi.md#endpointsBulkPost) | **RequestMethod.Post** /endpoints/bulk | 
[**endpointsDelete**](EndpointsApi.md#endpointsDelete) | **RequestMethod.Delete** /endpoints | 
[**endpointsEndpointIdDelete**](EndpointsApi.md#endpointsEndpointIdDelete) | **RequestMethod.Delete** /endpoints/${endpointId} | 
[**endpointsEndpointIdGet**](EndpointsApi.md#endpointsEndpointIdGet) | **RequestMethod.Get** /endpoints/${endpointId} | 
[**endpointsEndpointIdPut**](EndpointsApi.md#endpointsEndpointIdPut) | **RequestMethod.Put** /endpoints/${endpointId} | 
[**endpointsGet**](EndpointsApi.md#endpointsGet) | **RequestMethod.Get** /endpoints | 
[**endpointsPost**](EndpointsApi.md#endpointsPost) | **RequestMethod.Post** /endpoints | 
[**endpointsPut**](EndpointsApi.md#endpointsPut) | **RequestMethod.Put** /endpoints | 


<a name="endpointsBulkPost"></a>
# **endpointsBulkPost**
> models.EndpointArray endpointsBulkPost(opts)



Create multiple new endpoints

### Example
```typescript
import { EndpointsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: EndpointsApi
  ) { }

  ngOnInit() {
    this.apiInstance.endpointsBulkPost(endpoints?: models.NewEndpointArray ).subscribe(
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

<a name="endpointsDelete"></a>
# **endpointsDelete**
> models.BulkDeleteResponse endpointsDelete(filter)



Bulk delete existing endpoints

### Example
```typescript
import { EndpointsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: EndpointsApi
  ) { }

  ngOnInit() {
    this.apiInstance.endpointsDelete(filter: string ).subscribe(
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

<a name="endpointsEndpointIdDelete"></a>
# **endpointsEndpointIdDelete**
> endpointsEndpointIdDelete(endpointId)



delete existing endpoint

### Example
```typescript
import { EndpointsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: EndpointsApi
  ) { }

  ngOnInit() {
    this.apiInstance.endpointsEndpointIdDelete(endpointId: string ).subscribe(
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

<a name="endpointsEndpointIdGet"></a>
# **endpointsEndpointIdGet**
> models.Endpoint endpointsEndpointIdGet(endpointId)



Get one existing endpoint

### Example
```typescript
import { EndpointsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: EndpointsApi
  ) { }

  ngOnInit() {
    this.apiInstance.endpointsEndpointIdGet(endpointId: string ).subscribe(
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

<a name="endpointsEndpointIdPut"></a>
# **endpointsEndpointIdPut**
> models.Endpoint endpointsEndpointIdPut(endpointIdupdatedEndpoint)



update existing endpoint

### Example
```typescript
import { EndpointsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: EndpointsApi
  ) { }

  ngOnInit() {
    this.apiInstance.endpointsEndpointIdPut(endpointId: string updatedEndpoint: models.EndpointUpdate ).subscribe(
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

<a name="endpointsGet"></a>
# **endpointsGet**
> models.EndpointPage endpointsGet(opts)



Returns endpoints

### Example
```typescript
import { EndpointsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: EndpointsApi
  ) { }

  ngOnInit() {
    this.apiInstance.endpointsGet(pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
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

<a name="endpointsPost"></a>
# **endpointsPost**
> models.Endpoint endpointsPost(opts)



Create new endpoint

### Example
```typescript
import { EndpointsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: EndpointsApi
  ) { }

  ngOnInit() {
    this.apiInstance.endpointsPost(endpoint?: models.NewEndpoint ).subscribe(
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

<a name="endpointsPut"></a>
# **endpointsPut**
> models.BulkUpdateResponse endpointsPut(filterendpointBulkUpdate)



Bulk update existing users

### Example
```typescript
import { EndpointsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: EndpointsApi
  ) { }

  ngOnInit() {
    this.apiInstance.endpointsPut(filter: string endpointBulkUpdate: models.EndpointBulkUpdate ).subscribe(
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

