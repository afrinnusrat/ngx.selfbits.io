# MongoDataApi

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
[**mModelsMongoModelIdDataBulkPost**](MongoDataApi.md#mModelsMongoModelIdDataBulkPost) | **RequestMethod.Post** /m/models/${mongoModelId}/data/bulk | 
[**mModelsMongoModelIdDataDelete**](MongoDataApi.md#mModelsMongoModelIdDataDelete) | **RequestMethod.Delete** /m/models/${mongoModelId}/data | 
[**mModelsMongoModelIdDataGet**](MongoDataApi.md#mModelsMongoModelIdDataGet) | **RequestMethod.Get** /m/models/${mongoModelId}/data | 
[**mModelsMongoModelIdDataIdDelete**](MongoDataApi.md#mModelsMongoModelIdDataIdDelete) | **RequestMethod.Delete** /m/models/${mongoModelId}/data/${id} | 
[**mModelsMongoModelIdDataIdGet**](MongoDataApi.md#mModelsMongoModelIdDataIdGet) | **RequestMethod.Get** /m/models/${mongoModelId}/data/${id} | 
[**mModelsMongoModelIdDataIdPut**](MongoDataApi.md#mModelsMongoModelIdDataIdPut) | **RequestMethod.Put** /m/models/${mongoModelId}/data/${id} | 
[**mModelsMongoModelIdDataPost**](MongoDataApi.md#mModelsMongoModelIdDataPost) | **RequestMethod.Post** /m/models/${mongoModelId}/data | 
[**mModelsMongoModelIdDataPut**](MongoDataApi.md#mModelsMongoModelIdDataPut) | **RequestMethod.Put** /m/models/${mongoModelId}/data | 


<a name="mModelsMongoModelIdDataBulkPost"></a>
# **mModelsMongoModelIdDataBulkPost**
> models.MongoDataArray mModelsMongoModelIdDataBulkPost(mongoModelIdmongoDataItems)



Create multiple new data items

### Example
```typescript
import { MongoDataApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongoDataApi
  ) { }

  ngOnInit() {
    this.apiInstance.mModelsMongoModelIdDataBulkPost(mongoModelId: string mongoDataItems: models.NewMongoDataArray ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mongoModelId** | **string**| The mongo_model identifier | 
 **mongoDataItems** | [**models.NewMongoDataArray**](NewMongoDataArray.md)| Multiple data items | 

### Return type

[**models.MongoDataArray**](models.MongoDataArray.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mModelsMongoModelIdDataDelete"></a>
# **mModelsMongoModelIdDataDelete**
> models.BulkDeleteResponse mModelsMongoModelIdDataDelete(mongoModelIdfilter)



Bulk delete existing mongo_models

### Example
```typescript
import { MongoDataApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongoDataApi
  ) { }

  ngOnInit() {
    this.apiInstance.mModelsMongoModelIdDataDelete(mongoModelId: string filter: string ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mongoModelId** | **string**| The mongo_model identifier | 
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}} | 

### Return type

[**models.BulkDeleteResponse**](models.BulkDeleteResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mModelsMongoModelIdDataGet"></a>
# **mModelsMongoModelIdDataGet**
> models.MongoDataPage mModelsMongoModelIdDataGet(mongoModelIdopts)



Returns data items paginated

### Example
```typescript
import { MongoDataApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongoDataApi
  ) { }

  ngOnInit() {
    this.apiInstance.mModelsMongoModelIdDataGet(mongoModelId: string pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mongoModelId** | **string**| The mongo_model identifier | 
 **pageSize** | **number**| Items per page | [optional] [default to 20]
 **pageNumber** | **number**| The page index (starting from 1) | [optional] [default to 1]
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: \&quot;somename\&quot;} | [optional] 
 **sort** | **string**| Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 } | [optional] 
 **select** | **string**| Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 } | [optional] 

### Return type

[**models.MongoDataPage**](models.MongoDataPage.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mModelsMongoModelIdDataIdDelete"></a>
# **mModelsMongoModelIdDataIdDelete**
> models.BulkDeleteResponse mModelsMongoModelIdDataIdDelete(mongoModelIdid)



delete existing mongo_model

### Example
```typescript
import { MongoDataApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongoDataApi
  ) { }

  ngOnInit() {
    this.apiInstance.mModelsMongoModelIdDataIdDelete(mongoModelId: string id: string ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mongoModelId** | **string**| The mongo_model identifier | 
 **id** | **string**| The data item identifier | 

### Return type

[**models.BulkDeleteResponse**](models.BulkDeleteResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mModelsMongoModelIdDataIdGet"></a>
# **mModelsMongoModelIdDataIdGet**
> models.MongoData mModelsMongoModelIdDataIdGet(mongoModelIdid)



Get one existing data item

### Example
```typescript
import { MongoDataApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongoDataApi
  ) { }

  ngOnInit() {
    this.apiInstance.mModelsMongoModelIdDataIdGet(mongoModelId: string id: string ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mongoModelId** | **string**| The mongo_model identifier | 
 **id** | **string**| The data item identifier | 

### Return type

[**models.MongoData**](models.MongoData.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mModelsMongoModelIdDataIdPut"></a>
# **mModelsMongoModelIdDataIdPut**
> models.MongoData mModelsMongoModelIdDataIdPut(mongoModelIdidupdatedMongoData)



update existing data item

### Example
```typescript
import { MongoDataApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongoDataApi
  ) { }

  ngOnInit() {
    this.apiInstance.mModelsMongoModelIdDataIdPut(mongoModelId: string id: string updatedMongoData: models.MongoDataUpdate ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mongoModelId** | **string**| The mongo_model identifier | 
 **id** | **string**| The data item identifier | 
 **updatedMongoData** | [**models.MongoDataUpdate**](MongoDataUpdate.md)| updated mongo_data | 

### Return type

[**models.MongoData**](models.MongoData.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mModelsMongoModelIdDataPost"></a>
# **mModelsMongoModelIdDataPost**
> models.MongoData mModelsMongoModelIdDataPost(mongoModelIdmongoDataItem)



Create new data document

### Example
```typescript
import { MongoDataApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongoDataApi
  ) { }

  ngOnInit() {
    this.apiInstance.mModelsMongoModelIdDataPost(mongoModelId: string mongoDataItem: models.NewMongoData ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mongoModelId** | **string**| The mongo_model identifier | 
 **mongoDataItem** | [**models.NewMongoData**](NewMongoData.md)| new data item | 

### Return type

[**models.MongoData**](models.MongoData.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mModelsMongoModelIdDataPut"></a>
# **mModelsMongoModelIdDataPut**
> models.BulkUpdateResponse mModelsMongoModelIdDataPut(mongoModelIdfiltermongoDataBulkUpdate)



Bulk update existing data items

### Example
```typescript
import { MongoDataApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongoDataApi
  ) { }

  ngOnInit() {
    this.apiInstance.mModelsMongoModelIdDataPut(mongoModelId: string filter: string mongoDataBulkUpdate: models.MongoDataBulkUpdate ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mongoModelId** | **string**| The mongo_model identifier | 
 **filter** | **string**| Mongoose filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;} | 
 **mongoDataBulkUpdate** | [**models.MongoDataBulkUpdate**](MongoDataBulkUpdate.md)| Use filter to find the data items and do a bulk update | 

### Return type

[**models.BulkUpdateResponse**](models.BulkUpdateResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

