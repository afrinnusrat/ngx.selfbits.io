# MongodbAdminApi

```typescript
// ----- Initialization in app.module.ts -----
import { Selfbits, Configuration } from '';
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
[**dataCreateManyByModel**](MongodbAdminApi.md#dataCreateManyByModel) | **RequestMethod.Post** /m/models/${mongoModelId}/data/bulk | Create multiple new data items
[**dataCreateOneByModel**](MongodbAdminApi.md#dataCreateOneByModel) | **RequestMethod.Post** /m/models/${mongoModelId}/data | Create new data item
[**dataDeleteManyByModel**](MongodbAdminApi.md#dataDeleteManyByModel) | **RequestMethod.Delete** /m/models/${mongoModelId}/data | Bulk delete existing data items
[**dataDeleteOneByModel**](MongodbAdminApi.md#dataDeleteOneByModel) | **RequestMethod.Delete** /m/models/${mongoModelId}/data/${id} | delete existing data item
[**dataQueryByModel**](MongodbAdminApi.md#dataQueryByModel) | **RequestMethod.Get** /m/models/${mongoModelId}/data | Returns data items paginated
[**dataReadOneByModel**](MongodbAdminApi.md#dataReadOneByModel) | **RequestMethod.Get** /m/models/${mongoModelId}/data/${id} | Get one existing data item
[**dataUpdateManyByModel**](MongodbAdminApi.md#dataUpdateManyByModel) | **RequestMethod.Put** /m/models/${mongoModelId}/data | Bulk update existing data items
[**dataUpdateOneByModel**](MongodbAdminApi.md#dataUpdateOneByModel) | **RequestMethod.Put** /m/models/${mongoModelId}/data/${id} | update existing data item
[**mongoDatabasesCreateMany**](MongodbAdminApi.md#mongoDatabasesCreateMany) | **RequestMethod.Post** /m/db/bulk | Create multiple new mongo_databases
[**mongoDatabasesCreateOne**](MongodbAdminApi.md#mongoDatabasesCreateOne) | **RequestMethod.Post** /m/db | Create new mongo_database
[**mongoDatabasesDeleteMany**](MongodbAdminApi.md#mongoDatabasesDeleteMany) | **RequestMethod.Delete** /m/db | Bulk delete existing mongo_databases
[**mongoDatabasesDeleteOne**](MongodbAdminApi.md#mongoDatabasesDeleteOne) | **RequestMethod.Delete** /m/db/${mongoDatabaseId} | delete existing mongo_database
[**mongoDatabasesQuery**](MongodbAdminApi.md#mongoDatabasesQuery) | **RequestMethod.Get** /m/db | Returns mongo_databases
[**mongoDatabasesReadOne**](MongodbAdminApi.md#mongoDatabasesReadOne) | **RequestMethod.Get** /m/db/${mongoDatabaseId} | Get one existing mongo_database
[**mongoDatabasesTestOne**](MongodbAdminApi.md#mongoDatabasesTestOne) | **RequestMethod.Post** /m/db/${mongoDatabaseId}/test | Test connection. If the connection attempt fails, information is provided in the payload with status code 200.
[**mongoDatabasesUpdateMany**](MongodbAdminApi.md#mongoDatabasesUpdateMany) | **RequestMethod.Put** /m/db | Bulk update existing mongo_databases
[**mongoDatabasesUpdateOne**](MongodbAdminApi.md#mongoDatabasesUpdateOne) | **RequestMethod.Put** /m/db/${mongoDatabaseId} | update existing mongo_database
[**mongoModelsCreateMany**](MongodbAdminApi.md#mongoModelsCreateMany) | **RequestMethod.Post** /m/models/bulk | Create multiple new mongo_models
[**mongoModelsCreateOne**](MongodbAdminApi.md#mongoModelsCreateOne) | **RequestMethod.Post** /m/models | Create new mongo_model
[**mongoModelsDeleteMany**](MongodbAdminApi.md#mongoModelsDeleteMany) | **RequestMethod.Delete** /m/models | Bulk delete existing mongo_models
[**mongoModelsDeleteOne**](MongodbAdminApi.md#mongoModelsDeleteOne) | **RequestMethod.Delete** /m/models/${mongoModelId} | delete existing mongo_model
[**mongoModelsQuery**](MongodbAdminApi.md#mongoModelsQuery) | **RequestMethod.Get** /m/models | Returns mongo_models
[**mongoModelsReadOne**](MongodbAdminApi.md#mongoModelsReadOne) | **RequestMethod.Get** /m/models/${mongoModelId} | Get one existing mongo_model
[**mongoModelsUpdateMany**](MongodbAdminApi.md#mongoModelsUpdateMany) | **RequestMethod.Put** /m/models | Bulk update existing mongo_models
[**mongoModelsUpdateOne**](MongodbAdminApi.md#mongoModelsUpdateOne) | **RequestMethod.Put** /m/models/${mongoModelId} | update existing mongo_model
[**mongoModelsValidateByDefinition**](MongodbAdminApi.md#mongoModelsValidateByDefinition) | **RequestMethod.Post** /m/models/validate | Validate a mongo model definition. If the validation fails, information is provided in the payload with status code 200.


<a name="dataCreateManyByModel"></a>
# **dataCreateManyByModel**
> models.MongoDataArray dataCreateManyByModel

Create multiple new data items

Create multiple new data items

### Example
```typescript
import { MongodbAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongodbAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.dataCreateManyByModel(mongoModelId: string, mongoDataItems: models.NewMongoDataArray).subscribe(
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

<a name="dataCreateOneByModel"></a>
# **dataCreateOneByModel**
> models.MongoData dataCreateOneByModel

Create new data item

Create new data item

### Example
```typescript
import { MongodbAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongodbAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.dataCreateOneByModel(mongoModelId: string, mongoDataItem: models.NewMongoData).subscribe(
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
 **mongoDataItem** | [**models.NewMongoData**](NewMongoData.md)| new data item | 

### Return type

[**models.MongoData**](models.MongoData.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dataDeleteManyByModel"></a>
# **dataDeleteManyByModel**
> models.BulkDeleteResponse dataDeleteManyByModel

Bulk delete existing data items

Bulk delete existing data items

### Example
```typescript
import { MongodbAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongodbAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.dataDeleteManyByModel(mongoModelId: string, filter: string).subscribe(
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

<a name="dataDeleteOneByModel"></a>
# **dataDeleteOneByModel**
> models.BulkDeleteResponse dataDeleteOneByModel

delete existing data item

delete existing data item

### Example
```typescript
import { MongodbAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongodbAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.dataDeleteOneByModel(mongoModelId: string, id: string).subscribe(
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
 **id** | **string**| The data item identifier | 

### Return type

[**models.BulkDeleteResponse**](models.BulkDeleteResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dataQueryByModel"></a>
# **dataQueryByModel**
> models.MongoDataPage dataQueryByModel

Returns data items paginated

Returns data items paginated

### Example
```typescript
import { MongodbAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongodbAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.dataQueryByModel(mongoModelId: string, pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string).subscribe(
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

<a name="dataReadOneByModel"></a>
# **dataReadOneByModel**
> models.MongoData dataReadOneByModel

Get one existing data item

Get one existing data item

### Example
```typescript
import { MongodbAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongodbAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.dataReadOneByModel(mongoModelId: string, id: string).subscribe(
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

<a name="dataUpdateManyByModel"></a>
# **dataUpdateManyByModel**
> models.BulkUpdateResponse dataUpdateManyByModel

Bulk update existing data items

Bulk update existing data items

### Example
```typescript
import { MongodbAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongodbAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.dataUpdateManyByModel(mongoModelId: string, filter: string, mongoDataBulkUpdate: models.MongoDataBulkUpdate).subscribe(
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

<a name="dataUpdateOneByModel"></a>
# **dataUpdateOneByModel**
> models.MongoData dataUpdateOneByModel

update existing data item

update existing data item

### Example
```typescript
import { MongodbAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongodbAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.dataUpdateOneByModel(mongoModelId: string, id: string, updatedMongoData: models.MongoDataUpdate).subscribe(
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

<a name="mongoDatabasesCreateMany"></a>
# **mongoDatabasesCreateMany**
> models.MongoDatabaseArray mongoDatabasesCreateMany

Create multiple new mongo_databases

Create multiple new mongo_databases

### Example
```typescript
import { MongodbAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongodbAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.mongoDatabasesCreateMany(mongoDatabases?: models.NewMongoDatabaseArray).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mongoDatabases** | [**models.NewMongoDatabaseArray**](NewMongoDatabaseArray.md)| Multiple mongo_databases | [optional] 

### Return type

[**models.MongoDatabaseArray**](models.MongoDatabaseArray.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mongoDatabasesCreateOne"></a>
# **mongoDatabasesCreateOne**
> models.MongoDatabase mongoDatabasesCreateOne

Create new mongo_database

Create new mongo_database

### Example
```typescript
import { MongodbAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongodbAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.mongoDatabasesCreateOne(mongoDatabase?: models.NewMongoDatabase).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mongoDatabase** | [**models.NewMongoDatabase**](NewMongoDatabase.md)| Your new mongo_database | [optional] 

### Return type

[**models.MongoDatabase**](models.MongoDatabase.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mongoDatabasesDeleteMany"></a>
# **mongoDatabasesDeleteMany**
> models.BulkDeleteResponse mongoDatabasesDeleteMany

Bulk delete existing mongo_databases

Bulk delete existing mongo_databases

### Example
```typescript
import { MongodbAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongodbAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.mongoDatabasesDeleteMany(filter: string).subscribe(
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

<a name="mongoDatabasesDeleteOne"></a>
# **mongoDatabasesDeleteOne**
> mongoDatabasesDeleteOne

delete existing mongo_database

delete existing mongo_database

### Example
```typescript
import { MongodbAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongodbAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.mongoDatabasesDeleteOne(mongoDatabaseId: string).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mongoDatabaseId** | **string**| The mongo_database identifier | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mongoDatabasesQuery"></a>
# **mongoDatabasesQuery**
> models.MongoDatabasePage mongoDatabasesQuery

Returns mongo_databases

Returns mongo_databases

### Example
```typescript
import { MongodbAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongodbAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.mongoDatabasesQuery(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string).subscribe(
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
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: \&quot;somename\&quot;} | [optional] 
 **sort** | **string**| Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 } | [optional] 
 **select** | **string**| Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 } | [optional] 

### Return type

[**models.MongoDatabasePage**](models.MongoDatabasePage.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mongoDatabasesReadOne"></a>
# **mongoDatabasesReadOne**
> models.MongoDatabase mongoDatabasesReadOne

Get one existing mongo_database

Get one existing mongo_database

### Example
```typescript
import { MongodbAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongodbAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.mongoDatabasesReadOne(mongoDatabaseId: string).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mongoDatabaseId** | **string**| The mongo_database identifier | 

### Return type

[**models.MongoDatabase**](models.MongoDatabase.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="mongoDatabasesTestOne"></a>
# **mongoDatabasesTestOne**
> models.MongoDatabaseTestResponse mongoDatabasesTestOne

Test connection. If the connection attempt fails, information is provided in the payload with status code 200.

Test connection. If the connection attempt fails, information is provided in the payload with status code 200.

### Example
```typescript
import { MongodbAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongodbAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.mongoDatabasesTestOne(mongoDatabaseId: string).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mongoDatabaseId** | **string**| The mongo_database identifier | 

### Return type

[**models.MongoDatabaseTestResponse**](models.MongoDatabaseTestResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mongoDatabasesUpdateMany"></a>
# **mongoDatabasesUpdateMany**
> models.BulkUpdateResponse mongoDatabasesUpdateMany

Bulk update existing mongo_databases

Bulk update existing mongo_databases

### Example
```typescript
import { MongodbAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongodbAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.mongoDatabasesUpdateMany(filter: string, mongoDatabaseBulkUpdate: models.MongoDatabaseBulkUpdate).subscribe(
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
 **mongoDatabaseBulkUpdate** | [**models.MongoDatabaseBulkUpdate**](MongoDatabaseBulkUpdate.md)| Use filter to find the mongo_databases and do a bulk update | 

### Return type

[**models.BulkUpdateResponse**](models.BulkUpdateResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mongoDatabasesUpdateOne"></a>
# **mongoDatabasesUpdateOne**
> models.MongoDatabase mongoDatabasesUpdateOne

update existing mongo_database

update existing mongo_database

### Example
```typescript
import { MongodbAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongodbAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.mongoDatabasesUpdateOne(mongoDatabaseId: string, updatedMongoDatabase: models.MongoDatabaseUpdate).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mongoDatabaseId** | **string**| The mongo database identifier | 
 **updatedMongoDatabase** | [**models.MongoDatabaseUpdate**](MongoDatabaseUpdate.md)| updated mongo_database | 

### Return type

[**models.MongoDatabase**](models.MongoDatabase.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mongoModelsCreateMany"></a>
# **mongoModelsCreateMany**
> models.MongoModelArray mongoModelsCreateMany

Create multiple new mongo_models

Create multiple new mongo_models

### Example
```typescript
import { MongodbAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongodbAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.mongoModelsCreateMany(mongoModels?: models.NewMongoModelArray).subscribe(
      data => console.log(data),
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

<a name="mongoModelsCreateOne"></a>
# **mongoModelsCreateOne**
> models.MongoModel mongoModelsCreateOne

Create new mongo_model

Create new mongo_model

### Example
```typescript
import { MongodbAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongodbAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.mongoModelsCreateOne(mongoModel: models.NewMongoModel).subscribe(
      data => console.log(data),
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

<a name="mongoModelsDeleteMany"></a>
# **mongoModelsDeleteMany**
> models.BulkDeleteResponse mongoModelsDeleteMany

Bulk delete existing mongo_models

Bulk delete existing mongo_models

### Example
```typescript
import { MongodbAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongodbAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.mongoModelsDeleteMany(filter: string).subscribe(
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

<a name="mongoModelsDeleteOne"></a>
# **mongoModelsDeleteOne**
> mongoModelsDeleteOne

delete existing mongo_model

delete existing mongo_model

### Example
```typescript
import { MongodbAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongodbAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.mongoModelsDeleteOne(mongoModelId: string).subscribe(
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

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mongoModelsQuery"></a>
# **mongoModelsQuery**
> models.MongoModelPage mongoModelsQuery

Returns mongo_models

Returns mongo_models

### Example
```typescript
import { MongodbAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongodbAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.mongoModelsQuery(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string).subscribe(
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

<a name="mongoModelsReadOne"></a>
# **mongoModelsReadOne**
> models.MongoModel mongoModelsReadOne

Get one existing mongo_model

Get one existing mongo_model

### Example
```typescript
import { MongodbAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongodbAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.mongoModelsReadOne(mongoModelId: string).subscribe(
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

### Return type

[**models.MongoModel**](models.MongoModel.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mongoModelsUpdateMany"></a>
# **mongoModelsUpdateMany**
> models.BulkUpdateResponse mongoModelsUpdateMany

Bulk update existing mongo_models

Bulk update existing mongo_models

### Example
```typescript
import { MongodbAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongodbAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.mongoModelsUpdateMany(filter: string, mongoModelBulkUpdate: models.MongoModelBulkUpdate).subscribe(
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
 **mongoModelBulkUpdate** | [**models.MongoModelBulkUpdate**](MongoModelBulkUpdate.md)| Use filter to find the mongo_models and do a bulk update | 

### Return type

[**models.BulkUpdateResponse**](models.BulkUpdateResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mongoModelsUpdateOne"></a>
# **mongoModelsUpdateOne**
> models.MongoModel mongoModelsUpdateOne

update existing mongo_model

update existing mongo_model

### Example
```typescript
import { MongodbAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongodbAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.mongoModelsUpdateOne(mongoModelId: string, updatedMongoModel: models.MongoModelUpdate).subscribe(
      data => console.log(data),
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

<a name="mongoModelsValidateByDefinition"></a>
# **mongoModelsValidateByDefinition**
> models.MongoModelValidationResponse mongoModelsValidateByDefinition

Validate a mongo model definition. If the validation fails, information is provided in the payload with status code 200.

Validate a mongo model definition. If the validation fails, information is provided in the payload with status code 200.

### Example
```typescript
import { MongodbAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongodbAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.mongoModelsValidateByDefinition(mongoModel: models.MongoModel).subscribe(
      data => console.log(data),
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

