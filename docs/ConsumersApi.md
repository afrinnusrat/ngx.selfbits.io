# ConsumersApi

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
[**consumersBulkPost**](ConsumersApi.md#consumersBulkPost) | **RequestMethod.Post** /consumers/bulk | 
[**consumersConsumerIdDelete**](ConsumersApi.md#consumersConsumerIdDelete) | **RequestMethod.Delete** /consumers/${consumerId} | 
[**consumersConsumerIdGet**](ConsumersApi.md#consumersConsumerIdGet) | **RequestMethod.Get** /consumers/${consumerId} | 
[**consumersConsumerIdPut**](ConsumersApi.md#consumersConsumerIdPut) | **RequestMethod.Put** /consumers/${consumerId} | 
[**consumersDelete**](ConsumersApi.md#consumersDelete) | **RequestMethod.Delete** /consumers | 
[**consumersGet**](ConsumersApi.md#consumersGet) | **RequestMethod.Get** /consumers | 
[**consumersPost**](ConsumersApi.md#consumersPost) | **RequestMethod.Post** /consumers | 
[**consumersPut**](ConsumersApi.md#consumersPut) | **RequestMethod.Put** /consumers | 


<a name="consumersBulkPost"></a>
# **consumersBulkPost**
> models.ConsumerArray consumersBulkPost(opts)



Create multiple new consumers

### Example
```typescript
import { ConsumersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: ConsumersApi
  ) { }

  ngOnInit() {
    this.apiInstance.consumersBulkPost(consumers?: models.NewConsumerArray ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consumers** | [**models.NewConsumerArray**](NewConsumerArray.md)| Multiple consumers | [optional] 

### Return type

[**models.ConsumerArray**](models.ConsumerArray.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="consumersConsumerIdDelete"></a>
# **consumersConsumerIdDelete**
> consumersConsumerIdDelete(consumerId)



delete existing consumer

### Example
```typescript
import { ConsumersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: ConsumersApi
  ) { }

  ngOnInit() {
    this.apiInstance.consumersConsumerIdDelete(consumerId: string ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consumerId** | **string**| The consumer identifier | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="consumersConsumerIdGet"></a>
# **consumersConsumerIdGet**
> models.Consumer consumersConsumerIdGet(consumerId)



Get one existing consumer

### Example
```typescript
import { ConsumersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: ConsumersApi
  ) { }

  ngOnInit() {
    this.apiInstance.consumersConsumerIdGet(consumerId: string ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consumerId** | **string**| The consumer identifier | 

### Return type

[**models.Consumer**](models.Consumer.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="consumersConsumerIdPut"></a>
# **consumersConsumerIdPut**
> models.Consumer consumersConsumerIdPut(consumerIdupdatedConsumer)



update existing consumer

### Example
```typescript
import { ConsumersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: ConsumersApi
  ) { }

  ngOnInit() {
    this.apiInstance.consumersConsumerIdPut(consumerId: string updatedConsumer: models.ConsumerUpdate ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consumerId** | **string**| The user identifier | 
 **updatedConsumer** | [**models.ConsumerUpdate**](ConsumerUpdate.md)| updated consumer | 

### Return type

[**models.Consumer**](models.Consumer.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="consumersDelete"></a>
# **consumersDelete**
> models.BulkDeleteResponse consumersDelete(filter)



Bulk delete existing consumers

### Example
```typescript
import { ConsumersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: ConsumersApi
  ) { }

  ngOnInit() {
    this.apiInstance.consumersDelete(filter: string ).subscribe(
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

<a name="consumersGet"></a>
# **consumersGet**
> models.ConsumerPage consumersGet(opts)



Returns consumers

### Example
```typescript
import { ConsumersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: ConsumersApi
  ) { }

  ngOnInit() {
    this.apiInstance.consumersGet(pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
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

[**models.ConsumerPage**](models.ConsumerPage.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="consumersPost"></a>
# **consumersPost**
> models.Consumer consumersPost(opts)



Create new consumer

### Example
```typescript
import { ConsumersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: ConsumersApi
  ) { }

  ngOnInit() {
    this.apiInstance.consumersPost(consumer?: models.NewConsumer ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consumer** | [**models.NewConsumer**](NewConsumer.md)| Your new consumer | [optional] 

### Return type

[**models.Consumer**](models.Consumer.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="consumersPut"></a>
# **consumersPut**
> models.BulkUpdateResponse consumersPut(filterconsumerBulkUpdate)



Bulk update existing consumers

### Example
```typescript
import { ConsumersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: ConsumersApi
  ) { }

  ngOnInit() {
    this.apiInstance.consumersPut(filter: string consumerBulkUpdate: models.ConsumerBulkUpdate ).subscribe(
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
 **consumerBulkUpdate** | [**models.ConsumerBulkUpdate**](ConsumerBulkUpdate.md)| Use filter to find the consumers and do a bulk update | 

### Return type

[**models.BulkUpdateResponse**](models.BulkUpdateResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

