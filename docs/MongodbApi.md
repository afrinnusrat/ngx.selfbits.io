# MongodbApi

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
[**createManyByModel**](MongodbApi.md#createManyByModel) | **RequestMethod.Post** /m/models/${mongoModelId}/data/bulk | Create multiple new data items
[**createOneByModel**](MongodbApi.md#createOneByModel) | **RequestMethod.Post** /m/models/${mongoModelId}/data | Create new data item
[**deleteManyByModel**](MongodbApi.md#deleteManyByModel) | **RequestMethod.Delete** /m/models/${mongoModelId}/data | Bulk delete existing data items
[**deleteOneByModel**](MongodbApi.md#deleteOneByModel) | **RequestMethod.Delete** /m/models/${mongoModelId}/data/${id} | delete existing data item
[**queryByModel**](MongodbApi.md#queryByModel) | **RequestMethod.Get** /m/models/${mongoModelId}/data | Returns data items paginated
[**readOneByModel**](MongodbApi.md#readOneByModel) | **RequestMethod.Get** /m/models/${mongoModelId}/data/${id} | Get one existing data item
[**updateManyByModel**](MongodbApi.md#updateManyByModel) | **RequestMethod.Put** /m/models/${mongoModelId}/data | Bulk update existing data items
[**updateOneByModel**](MongodbApi.md#updateOneByModel) | **RequestMethod.Put** /m/models/${mongoModelId}/data/${id} | update existing data item


<a name="createManyByModel"></a>
# **createManyByModel**
> models.MongoDataArray createManyByModel(mongoModelIdmongoDataItems)

Create multiple new data items

Create multiple new data items

### Example
```typescript
import { MongodbApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongodbApi
  ) { }

  ngOnInit() {
    this.apiInstance.createManyByModel(mongoModelId: string mongoDataItems: models.NewMongoDataArray ).subscribe(
      data => console.log(data),
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

<a name="createOneByModel"></a>
# **createOneByModel**
> models.MongoData createOneByModel(mongoModelIdmongoDataItem)

Create new data item

Create new data item

### Example
```typescript
import { MongodbApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongodbApi
  ) { }

  ngOnInit() {
    this.apiInstance.createOneByModel(mongoModelId: string mongoDataItem: models.NewMongoData ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mongoModelId** | **string**| The model identifier | 
 **mongoDataItem** | [**models.NewMongoData**](NewMongoData.md)| new data item | 

### Return type

[**models.MongoData**](models.MongoData.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteManyByModel"></a>
# **deleteManyByModel**
> models.BulkDeleteResponse deleteManyByModel(mongoModelIdfilter)

Bulk delete existing data items

Bulk delete existing data items

### Example
```typescript
import { MongodbApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongodbApi
  ) { }

  ngOnInit() {
    this.apiInstance.deleteManyByModel(mongoModelId: string filter: string ).subscribe(
      data => console.log(data),
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

<a name="deleteOneByModel"></a>
# **deleteOneByModel**
> models.BulkDeleteResponse deleteOneByModel(mongoModelIdid)

delete existing data item

delete existing data item

### Example
```typescript
import { MongodbApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongodbApi
  ) { }

  ngOnInit() {
    this.apiInstance.deleteOneByModel(mongoModelId: string id: string ).subscribe(
      data => console.log(data),
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

<a name="queryByModel"></a>
# **queryByModel**
> models.MongoDataPage queryByModel(mongoModelIdopts)

Returns data items paginated

Returns data items paginated

### Example
```typescript
import { MongodbApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongodbApi
  ) { }

  ngOnInit() {
    this.apiInstance.queryByModel(mongoModelId: string pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
      data => console.log(data),
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

<a name="readOneByModel"></a>
# **readOneByModel**
> models.MongoData readOneByModel(mongoModelIdid)

Get one existing data item

Get one existing data item

### Example
```typescript
import { MongodbApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongodbApi
  ) { }

  ngOnInit() {
    this.apiInstance.readOneByModel(mongoModelId: string id: string ).subscribe(
      data => console.log(data),
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

<a name="updateManyByModel"></a>
# **updateManyByModel**
> models.BulkUpdateResponse updateManyByModel(mongoModelIdfiltermongoDataBulkUpdate)

Bulk update existing data items

Bulk update existing data items

### Example
```typescript
import { MongodbApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongodbApi
  ) { }

  ngOnInit() {
    this.apiInstance.updateManyByModel(mongoModelId: string filter: string mongoDataBulkUpdate: models.MongoDataBulkUpdate ).subscribe(
      data => console.log(data),
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

<a name="updateOneByModel"></a>
# **updateOneByModel**
> models.MongoData updateOneByModel(mongoModelIdidupdatedMongoData)

update existing data item

update existing data item

### Example
```typescript
import { MongodbApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongodbApi
  ) { }

  ngOnInit() {
    this.apiInstance.updateOneByModel(mongoModelId: string id: string updatedMongoData: models.MongoDataUpdate ).subscribe(
      data => console.log(data),
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

