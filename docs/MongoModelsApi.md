# MongoModelsApi

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
[**mModelsBulkPost**](MongoModelsApi.md#mModelsBulkPost) | **RequestMethod.Post** /m/models/bulk | 
[**mModelsDelete**](MongoModelsApi.md#mModelsDelete) | **RequestMethod.Delete** /m/models | 
[**mModelsGet**](MongoModelsApi.md#mModelsGet) | **RequestMethod.Get** /m/models | 
[**mModelsMongoModelIdDelete**](MongoModelsApi.md#mModelsMongoModelIdDelete) | **RequestMethod.Delete** /m/models/${mongoModelId} | 
[**mModelsMongoModelIdGet**](MongoModelsApi.md#mModelsMongoModelIdGet) | **RequestMethod.Get** /m/models/${mongoModelId} | 
[**mModelsMongoModelIdPut**](MongoModelsApi.md#mModelsMongoModelIdPut) | **RequestMethod.Put** /m/models/${mongoModelId} | 
[**mModelsPost**](MongoModelsApi.md#mModelsPost) | **RequestMethod.Post** /m/models | 
[**mModelsPut**](MongoModelsApi.md#mModelsPut) | **RequestMethod.Put** /m/models | 
[**mModelsValidatePost**](MongoModelsApi.md#mModelsValidatePost) | **RequestMethod.Post** /m/models/validate | 


<a name="mModelsBulkPost"></a>
# **mModelsBulkPost**
> models.MongoModelArray mModelsBulkPost(opts)



Create multiple new mongo_models

### Example
```typescript
import { MongoModelsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongoModelsApi
  ) { }

  ngOnInit() {
    this.apiInstance.mModelsBulkPost(mongoModels?: models.NewMongoModelArray ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mongoModels** | [**models.NewMongoModelArray**](NewMongoModelArray.md)| Multiple mongo_models | [optional] 

### Return type

[**models.MongoModelArray**](models.MongoModelArray.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mModelsDelete"></a>
# **mModelsDelete**
> models.BulkDeleteResponse mModelsDelete(filter)



Bulk delete existing mongo_models

### Example
```typescript
import { MongoModelsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongoModelsApi
  ) { }

  ngOnInit() {
    this.apiInstance.mModelsDelete(filter: string ).subscribe(
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

<a name="mModelsGet"></a>
# **mModelsGet**
> models.MongoModelPage mModelsGet(opts)



Returns mongo_models

### Example
```typescript
import { MongoModelsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongoModelsApi
  ) { }

  ngOnInit() {
    this.apiInstance.mModelsGet(pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
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
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: \&quot;somename\&quot;} | [optional] 
 **sort** | **string**| Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 } | [optional] 
 **select** | **string**| Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 } | [optional] 

### Return type

[**models.MongoModelPage**](models.MongoModelPage.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mModelsMongoModelIdDelete"></a>
# **mModelsMongoModelIdDelete**
> mModelsMongoModelIdDelete(mongoModelId)



delete existing mongo_model

### Example
```typescript
import { MongoModelsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongoModelsApi
  ) { }

  ngOnInit() {
    this.apiInstance.mModelsMongoModelIdDelete(mongoModelId: string ).subscribe(
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

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mModelsMongoModelIdGet"></a>
# **mModelsMongoModelIdGet**
> models.MongoModel mModelsMongoModelIdGet(mongoModelId)



Get one existing mongo_model

### Example
```typescript
import { MongoModelsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongoModelsApi
  ) { }

  ngOnInit() {
    this.apiInstance.mModelsMongoModelIdGet(mongoModelId: string ).subscribe(
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

### Return type

[**models.MongoModel**](models.MongoModel.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mModelsMongoModelIdPut"></a>
# **mModelsMongoModelIdPut**
> models.MongoModel mModelsMongoModelIdPut(mongoModelIdupdatedMongoModel)



update existing mongo_model

### Example
```typescript
import { MongoModelsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongoModelsApi
  ) { }

  ngOnInit() {
    this.apiInstance.mModelsMongoModelIdPut(mongoModelId: string updatedMongoModel: models.MongoModelUpdate ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mongoModelId** | **string**| The mongo model identifier | 
 **updatedMongoModel** | [**models.MongoModelUpdate**](MongoModelUpdate.md)| updated mongo_model | 

### Return type

[**models.MongoModel**](models.MongoModel.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mModelsPost"></a>
# **mModelsPost**
> models.MongoModel mModelsPost(mongoModel)



Create new mongo_model

### Example
```typescript
import { MongoModelsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongoModelsApi
  ) { }

  ngOnInit() {
    this.apiInstance.mModelsPost(mongoModel: models.NewMongoModel ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mongoModel** | [**models.NewMongoModel**](NewMongoModel.md)| Your new mongo_model | 

### Return type

[**models.MongoModel**](models.MongoModel.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mModelsPut"></a>
# **mModelsPut**
> models.BulkUpdateResponse mModelsPut(filtermongoModelBulkUpdate)



Bulk update existing mongo_models

### Example
```typescript
import { MongoModelsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongoModelsApi
  ) { }

  ngOnInit() {
    this.apiInstance.mModelsPut(filter: string mongoModelBulkUpdate: models.MongoModelBulkUpdate ).subscribe(
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
 **mongoModelBulkUpdate** | [**models.MongoModelBulkUpdate**](MongoModelBulkUpdate.md)| Use filter to find the mongo_models and do a bulk update | 

### Return type

[**models.BulkUpdateResponse**](models.BulkUpdateResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mModelsValidatePost"></a>
# **mModelsValidatePost**
> models.MongoModelValidationResponse mModelsValidatePost(mongoModel)



Validate a mongo model definition. If the validation fails, information is provided in the payload with status code 200.

### Example
```typescript
import { MongoModelsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongoModelsApi
  ) { }

  ngOnInit() {
    this.apiInstance.mModelsValidatePost(mongoModel: models.MongoModel ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mongoModel** | [**models.MongoModel**](MongoModel.md)| The mongo_model | 

### Return type

[**models.MongoModelValidationResponse**](models.MongoModelValidationResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

