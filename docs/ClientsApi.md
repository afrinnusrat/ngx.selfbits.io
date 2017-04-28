# ClientsApi

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
[**clientsBulkPost**](ClientsApi.md#clientsBulkPost) | **RequestMethod.Post** /clients/bulk | 
[**clientsClientIdDelete**](ClientsApi.md#clientsClientIdDelete) | **RequestMethod.Delete** /clients/${clientId} | 
[**clientsClientIdGet**](ClientsApi.md#clientsClientIdGet) | **RequestMethod.Get** /clients/${clientId} | 
[**clientsClientIdPut**](ClientsApi.md#clientsClientIdPut) | **RequestMethod.Put** /clients/${clientId} | 
[**clientsDelete**](ClientsApi.md#clientsDelete) | **RequestMethod.Delete** /clients | 
[**clientsGet**](ClientsApi.md#clientsGet) | **RequestMethod.Get** /clients | 
[**clientsPost**](ClientsApi.md#clientsPost) | **RequestMethod.Post** /clients | 
[**clientsPut**](ClientsApi.md#clientsPut) | **RequestMethod.Put** /clients | 


<a name="clientsBulkPost"></a>
# **clientsBulkPost**
> models.ClientArray clientsBulkPost(opts)



Create multiple new clients

### Example
```typescript
import { ClientsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: ClientsApi
  ) { }

  ngOnInit() {
    this.apiInstance.clientsBulkPost(clients?: models.NewClientArray ).subscribe(
      data => console.log(res),
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

<a name="clientsClientIdDelete"></a>
# **clientsClientIdDelete**
> clientsClientIdDelete(clientId)



delete existing client

### Example
```typescript
import { ClientsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: ClientsApi
  ) { }

  ngOnInit() {
    this.apiInstance.clientsClientIdDelete(clientId: string ).subscribe(
      data => console.log(res),
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

<a name="clientsClientIdGet"></a>
# **clientsClientIdGet**
> models.Client clientsClientIdGet(clientId)



Get one existing client

### Example
```typescript
import { ClientsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: ClientsApi
  ) { }

  ngOnInit() {
    this.apiInstance.clientsClientIdGet(clientId: string ).subscribe(
      data => console.log(res),
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

<a name="clientsClientIdPut"></a>
# **clientsClientIdPut**
> models.Client clientsClientIdPut(clientIdupdatedClient)



update existing client

### Example
```typescript
import { ClientsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: ClientsApi
  ) { }

  ngOnInit() {
    this.apiInstance.clientsClientIdPut(clientId: string updatedClient: models.ClientUpdate ).subscribe(
      data => console.log(res),
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

<a name="clientsDelete"></a>
# **clientsDelete**
> models.BulkDeleteResponse clientsDelete(filter)



Bulk delete existing clients

### Example
```typescript
import { ClientsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: ClientsApi
  ) { }

  ngOnInit() {
    this.apiInstance.clientsDelete(filter: string ).subscribe(
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

<a name="clientsGet"></a>
# **clientsGet**
> models.ClientPage clientsGet(opts)



Returns clients

### Example
```typescript
import { ClientsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: ClientsApi
  ) { }

  ngOnInit() {
    this.apiInstance.clientsGet(pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
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

<a name="clientsPost"></a>
# **clientsPost**
> models.Client clientsPost(opts)



Create new client

### Example
```typescript
import { ClientsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: ClientsApi
  ) { }

  ngOnInit() {
    this.apiInstance.clientsPost(client?: models.NewClient ).subscribe(
      data => console.log(res),
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

<a name="clientsPut"></a>
# **clientsPut**
> models.BulkUpdateResponse clientsPut(filterclientBulkUpdate)



Bulk update existing clients

### Example
```typescript
import { ClientsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: ClientsApi
  ) { }

  ngOnInit() {
    this.apiInstance.clientsPut(filter: string clientBulkUpdate: models.ClientBulkUpdate ).subscribe(
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
 **clientBulkUpdate** | [**models.ClientBulkUpdate**](ClientBulkUpdate.md)| Use filter to find the clients and do a bulk update | 

### Return type

[**models.BulkUpdateResponse**](models.BulkUpdateResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

