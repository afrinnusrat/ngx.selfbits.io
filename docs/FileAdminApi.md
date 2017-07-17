# FileAdminApi

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
[**browsePrivateFilesByPath**](FileAdminApi.md#browsePrivateFilesByPath) | **RequestMethod.Get** /files/browse/private | browse file path
[**browsePublicFilesByPath**](FileAdminApi.md#browsePublicFilesByPath) | **RequestMethod.Get** /files/browse/public | browse file path
[**createPrivate**](FileAdminApi.md#createPrivate) | **RequestMethod.Post** /files/private | initialize private file upload
[**createPublic**](FileAdminApi.md#createPublic) | **RequestMethod.Post** /files/public | initialize public file upload
[**deleteOne**](FileAdminApi.md#deleteOne) | **RequestMethod.Delete** /files/${fileId} | delete existing file
[**query**](FileAdminApi.md#query) | **RequestMethod.Get** /files | query files
[**readOne**](FileAdminApi.md#readOne) | **RequestMethod.Get** /files/file | Read existing file by id or by filePath
[**updateOne**](FileAdminApi.md#updateOne) | **RequestMethod.Put** /files/${fileId} | Update customData of an existing file
[**verifyUpload**](FileAdminApi.md#verifyUpload) | **RequestMethod.Post** /files/${fileId}/verify | verify the successful file upload


<a name="browsePrivateFilesByPath"></a>
# **browsePrivateFilesByPath**
> models.FileBrowserDocs browsePrivateFilesByPath

browse file path

browse file folder structure

### Example
```typescript
import { FileAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: FileAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.browsePrivateFilesByPath(filePath: string).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filePath** | **string**| The path to the folder you want to browse (f.e. private/myfolder/) | [default to private/]

### Return type

[**models.FileBrowserDocs**](models.FileBrowserDocs.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="browsePublicFilesByPath"></a>
# **browsePublicFilesByPath**
> models.FileBrowserDocs browsePublicFilesByPath

browse file path

browse file folder structure

### Example
```typescript
import { FileAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: FileAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.browsePublicFilesByPath(filePath: string).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filePath** | **string**| The path to the folder you want to browse (f.e. public/myfolder/) | [default to public/]

### Return type

[**models.FileBrowserDocs**](models.FileBrowserDocs.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createPrivate"></a>
# **createPrivate**
> models.NewFileResponse createPrivate

initialize private file upload

Initialize new private file upload

### Example
```typescript
import { FileAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: FileAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.createPrivate(file?: models.NewFile).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | [**models.NewFile**](NewFile.md)| Your new file | [optional] 

### Return type

[**models.NewFileResponse**](models.NewFileResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createPublic"></a>
# **createPublic**
> models.NewFileResponse createPublic

initialize public file upload

Initialize new public file upload

### Example
```typescript
import { FileAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: FileAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.createPublic(file?: models.NewFile).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | [**models.NewFile**](NewFile.md)| Your new file | [optional] 

### Return type

[**models.NewFileResponse**](models.NewFileResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteOne"></a>
# **deleteOne**
> deleteOne

delete existing file

delete existing file

### Example
```typescript
import { FileAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: FileAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.deleteOne(fileId: string).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | **string**| The file identifier | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="query"></a>
# **query**
> models.FilePage query

query files

Query files and receive paginated result set

### Example
```typescript
import { FileAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: FileAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.query(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string).subscribe(
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
 **filter** | **string**| Sequelize filter object like {\&quot;isPublic\&quot;: \&quot;true\&quot;} | [optional] 
 **sort** | **string**| Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 } | [optional] 
 **select** | **string**| Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 } | [optional] 

### Return type

[**models.FilePage**](models.FilePage.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readOne"></a>
# **readOne**
> models.File readOne

Read existing file by id or by filePath

Get the metadata of an existing file by id or by filePath

### Example
```typescript
import { FileAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: FileAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.readOne(fileId?: string, filePath?: string).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | **string**| The file identifier | [optional] 
 **filePath** | **string**| The filePath | [optional] 

### Return type

[**models.File**](models.File.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateOne"></a>
# **updateOne**
> models.File updateOne

Update customData of an existing file

Update customData of an existing file

### Example
```typescript
import { FileAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: FileAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.updateOne(fileId: string, updatedFile: models.FileUpdate).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | **string**| The user identifier | 
 **updatedFile** | [**models.FileUpdate**](FileUpdate.md)| updated file | 

### Return type

[**models.File**](models.File.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="verifyUpload"></a>
# **verifyUpload**
> models.File verifyUpload

verify the successful file upload

verify the successful file upload using the ETag header value

### Example
```typescript
import { FileAdminApi } from '';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: FileAdminApi
  ) { }

  ngOnInit() {
    this.apiInstance.verifyUpload(fileId: string, etagObject: models.FileVerificationRequest).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | **string**| The target file you want to verify | 
 **etagObject** | [**models.FileVerificationRequest**](FileVerificationRequest.md)| The etag response header of the successful file upload | 

### Return type

[**models.File**](models.File.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

