# InteractiveLoginApi

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
[**loginDirectoryDirectoryIdGet**](InteractiveLoginApi.md#loginDirectoryDirectoryIdGet) | **RequestMethod.Get** /login/directory/${directoryId} | 
[**loginGet**](InteractiveLoginApi.md#loginGet) | **RequestMethod.Get** /login | 
[**loginOrganizationOrganizationIdDirectoryDirectoryIdGet**](InteractiveLoginApi.md#loginOrganizationOrganizationIdDirectoryDirectoryIdGet) | **RequestMethod.Get** /login/organization/${organizationId}/directory/${directoryId} | Interactive user login with specific organization and a specific directory
[**loginOrganizationOrganizationIdGet**](InteractiveLoginApi.md#loginOrganizationOrganizationIdGet) | **RequestMethod.Get** /login/organization/${organizationId} | Interactive user login with default organization and its default directory
[**loginOrganizationOrganizationIdProviderProviderIdGet**](InteractiveLoginApi.md#loginOrganizationOrganizationIdProviderProviderIdGet) | **RequestMethod.Get** /login/organization/${organizationId}/provider/${providerId} | Interactive user login with specific organization and specific provider


<a name="loginDirectoryDirectoryIdGet"></a>
# **loginDirectoryDirectoryIdGet**
> loginDirectoryDirectoryIdGet(sbClientIddirectoryIdrandomStateopts)



Interactive user login with specific directory

### Example
```typescript
import { InteractiveLoginApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveLoginApi
  ) { }

  ngOnInit() {
    this.apiInstance.loginDirectoryDirectoryIdGet(sbClientId: string directoryId: string randomState: string randomState2?: string ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sbClientId** | **string**| Your application client id | 
 **directoryId** | **string**| the directory where the user wants to log in | 
 **randomState** | **string**| Random string to identifiy the account after the successful interactive authentication | 
 **randomState2** | **string**| Random string to identifiy the account after the successful interactive authentication | [optional] 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

<a name="loginGet"></a>
# **loginGet**
> loginGet(sbClientIdopts)



Interactive user login with default directory

### Example
```typescript
import { InteractiveLoginApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveLoginApi
  ) { }

  ngOnInit() {
    this.apiInstance.loginGet(sbClientId: string randomState?: string ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sbClientId** | **string**| Your application client id | 
 **randomState** | **string**| Random string to identifiy the account after the successful interactive authentication | [optional] 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

<a name="loginOrganizationOrganizationIdDirectoryDirectoryIdGet"></a>
# **loginOrganizationOrganizationIdDirectoryDirectoryIdGet**
> loginOrganizationOrganizationIdDirectoryDirectoryIdGet(sbClientIdorganizationIddirectoryIdopts)

Interactive user login with specific organization and a specific directory

Interactive user login with specific organization and a specific directory

### Example
```typescript
import { InteractiveLoginApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveLoginApi
  ) { }

  ngOnInit() {
    this.apiInstance.loginOrganizationOrganizationIdDirectoryDirectoryIdGet(sbClientId: string organizationId: string directoryId: string randomState?: string ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sbClientId** | **string**| Your application client id | 
 **organizationId** | **string**| the organization of the new user | 
 **directoryId** | **string**| the directory of the new user | 
 **randomState** | **string**| Random string to identifiy the account after the successful interactive authentication | [optional] 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

<a name="loginOrganizationOrganizationIdGet"></a>
# **loginOrganizationOrganizationIdGet**
> loginOrganizationOrganizationIdGet(sbClientIdorganizationIdopts)

Interactive user login with default organization and its default directory

Interactive user login with specific organization

### Example
```typescript
import { InteractiveLoginApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveLoginApi
  ) { }

  ngOnInit() {
    this.apiInstance.loginOrganizationOrganizationIdGet(sbClientId: string organizationId: string randomState?: string ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sbClientId** | **string**| Your application client id | 
 **organizationId** | **string**| the organization of the new user | 
 **randomState** | **string**| Random string to identifiy the account after the successful interactive authentication | [optional] 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

<a name="loginOrganizationOrganizationIdProviderProviderIdGet"></a>
# **loginOrganizationOrganizationIdProviderProviderIdGet**
> loginOrganizationOrganizationIdProviderProviderIdGet(sbClientIdorganizationIdproviderIdopts)

Interactive user login with specific organization and specific provider

Interactive user login with specific organization and specific provider

### Example
```typescript
import { InteractiveLoginApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveLoginApi
  ) { }

  ngOnInit() {
    this.apiInstance.loginOrganizationOrganizationIdProviderProviderIdGet(sbClientId: string organizationId: string providerId: string randomState?: string ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sbClientId** | **string**| Your application client id | 
 **organizationId** | **string**| the organization of the new user | 
 **providerId** | **string**| the provider of the user directory | 
 **randomState** | **string**| Random string to identifiy the account after the successful interactive authentication | [optional] 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

