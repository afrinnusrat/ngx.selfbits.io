# DirectoriesApi

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
[**directoriesBulkPost**](DirectoriesApi.md#directoriesBulkPost) | **RequestMethod.Post** /directories/bulk | 
[**directoriesDelete**](DirectoriesApi.md#directoriesDelete) | **RequestMethod.Delete** /directories | 
[**directoriesDirectoryIdDelete**](DirectoriesApi.md#directoriesDirectoryIdDelete) | **RequestMethod.Delete** /directories/${directoryId} | 
[**directoriesDirectoryIdGet**](DirectoriesApi.md#directoriesDirectoryIdGet) | **RequestMethod.Get** /directories/${directoryId} | 
[**directoriesDirectoryIdPut**](DirectoriesApi.md#directoriesDirectoryIdPut) | **RequestMethod.Put** /directories/${directoryId} | 
[**directoriesGet**](DirectoriesApi.md#directoriesGet) | **RequestMethod.Get** /directories | 
[**directoriesPost**](DirectoriesApi.md#directoriesPost) | **RequestMethod.Post** /directories | 
[**directoriesPut**](DirectoriesApi.md#directoriesPut) | **RequestMethod.Put** /directories | 


<a name="directoriesBulkPost"></a>
# **directoriesBulkPost**
> models.DirectoryArray directoriesBulkPost(opts)



Create multiple new directories

### Example
```typescript
import { DirectoriesApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: DirectoriesApi
  ) { }

  ngOnInit() {
    this.apiInstance.directoriesBulkPost(directories?: models.NewDirectoryArray ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directories** | [**models.NewDirectoryArray**](NewDirectoryArray.md)| Multiple directories | [optional] 

### Return type

[**models.DirectoryArray**](models.DirectoryArray.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="directoriesDelete"></a>
# **directoriesDelete**
> models.BulkDeleteResponse directoriesDelete(filter)



Bulk delete existing directories

### Example
```typescript
import { DirectoriesApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: DirectoriesApi
  ) { }

  ngOnInit() {
    this.apiInstance.directoriesDelete(filter: string ).subscribe(
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

<a name="directoriesDirectoryIdDelete"></a>
# **directoriesDirectoryIdDelete**
> directoriesDirectoryIdDelete(directoryId)



delete existing directory

### Example
```typescript
import { DirectoriesApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: DirectoriesApi
  ) { }

  ngOnInit() {
    this.apiInstance.directoriesDirectoryIdDelete(directoryId: string ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directoryId** | **string**| The directory identifier | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="directoriesDirectoryIdGet"></a>
# **directoriesDirectoryIdGet**
> models.Directory directoriesDirectoryIdGet(directoryId)



Get one existing directory

### Example
```typescript
import { DirectoriesApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: DirectoriesApi
  ) { }

  ngOnInit() {
    this.apiInstance.directoriesDirectoryIdGet(directoryId: string ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directoryId** | **string**| The directory identifier | 

### Return type

[**models.Directory**](models.Directory.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="directoriesDirectoryIdPut"></a>
# **directoriesDirectoryIdPut**
> models.Directory directoriesDirectoryIdPut(directoryIdupdatedDirectory)



update existing directory

### Example
```typescript
import { DirectoriesApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: DirectoriesApi
  ) { }

  ngOnInit() {
    this.apiInstance.directoriesDirectoryIdPut(directoryId: string updatedDirectory: models.DirectoryUpdate ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directoryId** | **string**| The user identifier | 
 **updatedDirectory** | [**models.DirectoryUpdate**](DirectoryUpdate.md)| updated directory | 

### Return type

[**models.Directory**](models.Directory.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="directoriesGet"></a>
# **directoriesGet**
> models.DirectoryPage directoriesGet(opts)



Returns directories

### Example
```typescript
import { DirectoriesApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: DirectoriesApi
  ) { }

  ngOnInit() {
    this.apiInstance.directoriesGet(pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
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

[**models.DirectoryPage**](models.DirectoryPage.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="directoriesPost"></a>
# **directoriesPost**
> models.Directory directoriesPost(opts)



Create new directory

### Example
```typescript
import { DirectoriesApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: DirectoriesApi
  ) { }

  ngOnInit() {
    this.apiInstance.directoriesPost(directory?: models.NewDirectory ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | [**models.NewDirectory**](NewDirectory.md)| Your new directory | [optional] 

### Return type

[**models.Directory**](models.Directory.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="directoriesPut"></a>
# **directoriesPut**
> models.BulkUpdateResponse directoriesPut(filterdirectoryBulkUpdate)



Bulk update existing users

### Example
```typescript
import { DirectoriesApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: DirectoriesApi
  ) { }

  ngOnInit() {
    this.apiInstance.directoriesPut(filter: string directoryBulkUpdate: models.DirectoryBulkUpdate ).subscribe(
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
 **directoryBulkUpdate** | [**models.DirectoryBulkUpdate**](DirectoryBulkUpdate.md)| Use filter to find the directories and do a bulk update | 

### Return type

[**models.BulkUpdateResponse**](models.BulkUpdateResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

