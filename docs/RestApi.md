# RestApi

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
[**_delete**](RestApi.md#_delete) | **RequestMethod.Delete** /rest/${stage}/${resource} | Execute a REST request to a deployed REST API
[**get**](RestApi.md#get) | **RequestMethod.Get** /rest/${stage}/${resource} | Execute a REST request to a deployed REST API
[**post**](RestApi.md#post) | **RequestMethod.Post** /rest/${stage}/${resource} | Execute a REST request to a deployed REST API
[**put**](RestApi.md#put) | **RequestMethod.Put** /rest/${stage}/${resource} | Execute a REST request to a deployed REST API


<a name="_delete"></a>
# **_delete**
> models.RestEndpointExecutionResponse _delete

Execute a REST request to a deployed REST API

Execute a REST request to a deployed REST API

### Example
```typescript
import { RestApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: RestApi
  ) { }

  ngOnInit() {
    this.apiInstance._delete(stage: string, resource: string).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stage** | **string**| The stage identifier | 
 **resource** | **string**| The resource path | 

### Return type

[**models.RestEndpointExecutionResponse**](models.RestEndpointExecutionResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="get"></a>
# **get**
> models.RestEndpointExecutionResponse get

Execute a REST request to a deployed REST API

Execute a REST request to a deployed REST API

### Example
```typescript
import { RestApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: RestApi
  ) { }

  ngOnInit() {
    this.apiInstance.get(stage: string, resource: string).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stage** | **string**| The stage identifier | 
 **resource** | **string**| The resource path | 

### Return type

[**models.RestEndpointExecutionResponse**](models.RestEndpointExecutionResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="post"></a>
# **post**
> models.RestEndpointExecutionResponse post

Execute a REST request to a deployed REST API

Execute a REST request to a deployed REST API

### Example
```typescript
import { RestApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: RestApi
  ) { }

  ngOnInit() {
    this.apiInstance.post(stage: string, resource: string, payload?: models.RestEndpointExecutionRequestPayload).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stage** | **string**| The stage identifier | 
 **resource** | **string**| The resource path | 
 **payload** | [**models.RestEndpointExecutionRequestPayload**](RestEndpointExecutionRequestPayload.md)| Execution payload | [optional] 

### Return type

[**models.RestEndpointExecutionResponse**](models.RestEndpointExecutionResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="put"></a>
# **put**
> models.RestEndpointExecutionResponse put

Execute a REST request to a deployed REST API

Execute a REST request to a deployed REST API

### Example
```typescript
import { RestApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: RestApi
  ) { }

  ngOnInit() {
    this.apiInstance.put(stage: string, resource: string, payload?: models.RestEndpointExecutionRequestPayload).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stage** | **string**| The stage identifier | 
 **resource** | **string**| The resource path | 
 **payload** | [**models.RestEndpointExecutionRequestPayload**](RestEndpointExecutionRequestPayload.md)| Execution payload | [optional] 

### Return type

[**models.RestEndpointExecutionResponse**](models.RestEndpointExecutionResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

