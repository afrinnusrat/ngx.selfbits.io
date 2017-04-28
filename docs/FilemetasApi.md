# FilemetasApi

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
[**filemetasFilemetaIdDelete**](FilemetasApi.md#filemetasFilemetaIdDelete) | **RequestMethod.Delete** /filemetas/${filemetaId} | 
[**filemetasFilemetaIdGet**](FilemetasApi.md#filemetasFilemetaIdGet) | **RequestMethod.Get** /filemetas/${filemetaId} | 
[**filemetasFilemetaIdPut**](FilemetasApi.md#filemetasFilemetaIdPut) | **RequestMethod.Put** /filemetas/${filemetaId} | 
[**filemetasFilemetaIdVerifyPost**](FilemetasApi.md#filemetasFilemetaIdVerifyPost) | **RequestMethod.Post** /filemetas/${filemetaId}/verify | 
[**filemetasGet**](FilemetasApi.md#filemetasGet) | **RequestMethod.Get** /filemetas | 
[**filemetasPost**](FilemetasApi.md#filemetasPost) | **RequestMethod.Post** /filemetas | 


<a name="filemetasFilemetaIdDelete"></a>
# **filemetasFilemetaIdDelete**
> filemetasFilemetaIdDelete(filemetaId)



delete existing filemeta

### Example
```typescript
import { FilemetasApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: FilemetasApi
  ) { }

  ngOnInit() {
    this.apiInstance.filemetasFilemetaIdDelete(filemetaId: string ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filemetaId** | **string**| The filemeta identifier | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="filemetasFilemetaIdGet"></a>
# **filemetasFilemetaIdGet**
> models.Filemeta filemetasFilemetaIdGet(filemetaId)



Get one existing filemeta

### Example
```typescript
import { FilemetasApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: FilemetasApi
  ) { }

  ngOnInit() {
    this.apiInstance.filemetasFilemetaIdGet(filemetaId: string ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filemetaId** | **string**| The filemeta identifier | 

### Return type

[**models.Filemeta**](models.Filemeta.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="filemetasFilemetaIdPut"></a>
# **filemetasFilemetaIdPut**
> models.Filemeta filemetasFilemetaIdPut(filemetaIdupdatedFilemeta)



update existing filemeta

### Example
```typescript
import { FilemetasApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: FilemetasApi
  ) { }

  ngOnInit() {
    this.apiInstance.filemetasFilemetaIdPut(filemetaId: string updatedFilemeta: models.FilemetaUpdate ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filemetaId** | **string**| The user identifier | 
 **updatedFilemeta** | [**models.FilemetaUpdate**](FilemetaUpdate.md)| updated filemeta | 

### Return type

[**models.Filemeta**](models.Filemeta.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="filemetasFilemetaIdVerifyPost"></a>
# **filemetasFilemetaIdVerifyPost**
> models.Filemeta filemetasFilemetaIdVerifyPost(filemetaIdetagObject)



Verify uploaded filemeta by the received ETag

### Example
```typescript
import { FilemetasApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: FilemetasApi
  ) { }

  ngOnInit() {
    this.apiInstance.filemetasFilemetaIdVerifyPost(filemetaId: string etagObject: models.FilemetaVerificationRequest ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filemetaId** | **string**| The target filemeta you want to verify | 
 **etagObject** | [**models.FilemetaVerificationRequest**](FilemetaVerificationRequest.md)| The etag response header of the successful file upload | 

### Return type

[**models.Filemeta**](models.Filemeta.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="filemetasGet"></a>
# **filemetasGet**
> models.FilemetaPage filemetasGet(opts)



Returns filemetas

### Example
```typescript
import { FilemetasApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: FilemetasApi
  ) { }

  ngOnInit() {
    this.apiInstance.filemetasGet(pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
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
 **filter** | **string**| Sequelize filter object like {\&quot;isPublic\&quot;: \&quot;true\&quot;} | [optional] 
 **sort** | **string**| Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 } | [optional] 
 **select** | **string**| Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 } | [optional] 

### Return type

[**models.FilemetaPage**](models.FilemetaPage.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="filemetasPost"></a>
# **filemetasPost**
> models.NewFilemetaResponse filemetasPost(opts)



Create new filemeta

### Example
```typescript
import { FilemetasApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: FilemetasApi
  ) { }

  ngOnInit() {
    this.apiInstance.filemetasPost(filemeta?: models.NewFilemeta ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filemeta** | [**models.NewFilemeta**](NewFilemeta.md)| Your new filemeta | [optional] 

### Return type

[**models.NewFilemetaResponse**](models.NewFilemetaResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

