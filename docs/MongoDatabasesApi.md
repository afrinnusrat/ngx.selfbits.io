# MongoDatabasesApi

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
[**mDbBulkPost**](MongoDatabasesApi.md#mDbBulkPost) | **RequestMethod.Post** /m/db/bulk | 
[**mDbDelete**](MongoDatabasesApi.md#mDbDelete) | **RequestMethod.Delete** /m/db | 
[**mDbGet**](MongoDatabasesApi.md#mDbGet) | **RequestMethod.Get** /m/db | 
[**mDbMongoDatabaseIdDelete**](MongoDatabasesApi.md#mDbMongoDatabaseIdDelete) | **RequestMethod.Delete** /m/db/${mongoDatabaseId} | 
[**mDbMongoDatabaseIdGet**](MongoDatabasesApi.md#mDbMongoDatabaseIdGet) | **RequestMethod.Get** /m/db/${mongoDatabaseId} | 
[**mDbMongoDatabaseIdPut**](MongoDatabasesApi.md#mDbMongoDatabaseIdPut) | **RequestMethod.Put** /m/db/${mongoDatabaseId} | 
[**mDbMongoDatabaseIdTestPost**](MongoDatabasesApi.md#mDbMongoDatabaseIdTestPost) | **RequestMethod.Post** /m/db/${mongoDatabaseId}/test | 
[**mDbPost**](MongoDatabasesApi.md#mDbPost) | **RequestMethod.Post** /m/db | 
[**mDbPut**](MongoDatabasesApi.md#mDbPut) | **RequestMethod.Put** /m/db | 


<a name="mDbBulkPost"></a>
# **mDbBulkPost**
> models.MongoDatabaseArray mDbBulkPost(opts)



Create multiple new mongo_databases

### Example
```typescript
import { MongoDatabasesApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongoDatabasesApi
  ) { }

  ngOnInit() {
    this.apiInstance.mDbBulkPost(mongoDatabases?: models.NewMongoDatabaseArray ).subscribe(
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

<a name="mDbDelete"></a>
# **mDbDelete**
> models.BulkDeleteResponse mDbDelete(filter)



Bulk delete existing mongo_databases

### Example
```typescript
import { MongoDatabasesApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongoDatabasesApi
  ) { }

  ngOnInit() {
    this.apiInstance.mDbDelete(filter: string ).subscribe(
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

<a name="mDbGet"></a>
# **mDbGet**
> models.MongoDatabasePage mDbGet(opts)



Returns mongo_databases

### Example
```typescript
import { MongoDatabasesApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongoDatabasesApi
  ) { }

  ngOnInit() {
    this.apiInstance.mDbGet(pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
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

<a name="mDbMongoDatabaseIdDelete"></a>
# **mDbMongoDatabaseIdDelete**
> mDbMongoDatabaseIdDelete(mongoDatabaseId)



delete existing mongo_database

### Example
```typescript
import { MongoDatabasesApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongoDatabasesApi
  ) { }

  ngOnInit() {
    this.apiInstance.mDbMongoDatabaseIdDelete(mongoDatabaseId: string ).subscribe(
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

<a name="mDbMongoDatabaseIdGet"></a>
# **mDbMongoDatabaseIdGet**
> models.MongoDatabase mDbMongoDatabaseIdGet(mongoDatabaseId)



Get one existing mongo_database

### Example
```typescript
import { MongoDatabasesApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongoDatabasesApi
  ) { }

  ngOnInit() {
    this.apiInstance.mDbMongoDatabaseIdGet(mongoDatabaseId: string ).subscribe(
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

<a name="mDbMongoDatabaseIdPut"></a>
# **mDbMongoDatabaseIdPut**
> models.MongoDatabase mDbMongoDatabaseIdPut(mongoDatabaseIdupdatedMongoDatabase)



update existing mongo_database

### Example
```typescript
import { MongoDatabasesApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongoDatabasesApi
  ) { }

  ngOnInit() {
    this.apiInstance.mDbMongoDatabaseIdPut(mongoDatabaseId: string updatedMongoDatabase: models.MongoDatabaseUpdate ).subscribe(
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

<a name="mDbMongoDatabaseIdTestPost"></a>
# **mDbMongoDatabaseIdTestPost**
> models.MongoDatabaseTestResponse mDbMongoDatabaseIdTestPost(mongoDatabaseId)



Test connection. If the connection attempt fails, information is provided in the payload with status code 200.

### Example
```typescript
import { MongoDatabasesApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongoDatabasesApi
  ) { }

  ngOnInit() {
    this.apiInstance.mDbMongoDatabaseIdTestPost(mongoDatabaseId: string ).subscribe(
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

<a name="mDbPost"></a>
# **mDbPost**
> models.MongoDatabase mDbPost(opts)



Create new mongo_database

### Example
```typescript
import { MongoDatabasesApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongoDatabasesApi
  ) { }

  ngOnInit() {
    this.apiInstance.mDbPost(mongoDatabase?: models.NewMongoDatabase ).subscribe(
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

<a name="mDbPut"></a>
# **mDbPut**
> models.BulkUpdateResponse mDbPut(filtermongoDatabaseBulkUpdate)



Bulk update existing mongo_databases

### Example
```typescript
import { MongoDatabasesApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: MongoDatabasesApi
  ) { }

  ngOnInit() {
    this.apiInstance.mDbPut(filter: string mongoDatabaseBulkUpdate: models.MongoDatabaseBulkUpdate ).subscribe(
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

