# InteractiveAuthenticationApi

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
[**authDirectoryDirectoryIdGet**](InteractiveAuthenticationApi.md#authDirectoryDirectoryIdGet) | **RequestMethod.Get** /auth/directory/${directoryId} | Interactive user authentication with external provider
[**authOrganizationOrganizationIdDirectoryDirectoryIdGet**](InteractiveAuthenticationApi.md#authOrganizationOrganizationIdDirectoryDirectoryIdGet) | **RequestMethod.Get** /auth/organization/${organizationId}/directory/${directoryId} | Interactive user authentication using specific organization and directory
[**authOrganizationOrganizationIdProviderProviderIdGet**](InteractiveAuthenticationApi.md#authOrganizationOrganizationIdProviderProviderIdGet) | **RequestMethod.Get** /auth/organization/${organizationId}/provider/${providerId} | Interactive user authentication using specific organization and a specific provider
[**authProviderProviderIdGet**](InteractiveAuthenticationApi.md#authProviderProviderIdGet) | **RequestMethod.Get** /auth/provider/${providerId} | Interactive user authentication with external provider


<a name="authDirectoryDirectoryIdGet"></a>
# **authDirectoryDirectoryIdGet**
> authDirectoryDirectoryIdGet(sbClientIddirectoryIdrandomStateopts)

Interactive user authentication with external provider

Interactive user authentication with external authentication providers for a specific directory. If the authentication is successful, the client is redirected to /auth/provider/[providerId]/callback.

### Example
```typescript
import { InteractiveAuthenticationApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveAuthenticationApi
  ) { }

  ngOnInit() {
    this.apiInstance.authDirectoryDirectoryIdGet(sbClientId: string directoryId: string randomState: string sbClientSecret?: string invite?: string ).subscribe(
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
 **directoryId** | **string**| the directory of the new user | 
 **randomState** | **string**| Random string to identifiy the account after the successful interactive authentication | 
 **sbClientSecret** | **string**| Your application client secret | [optional] 
 **invite** | **string**| Optional invite code | [optional] 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

<a name="authOrganizationOrganizationIdDirectoryDirectoryIdGet"></a>
# **authOrganizationOrganizationIdDirectoryDirectoryIdGet**
> authOrganizationOrganizationIdDirectoryDirectoryIdGet(sbClientIddirectoryIdrandomStateopts)

Interactive user authentication using specific organization and directory

Interactive user authentication with external authentication provider. If the authentication is successful, the client is redirected to /auth/provider/[providerId]/callback.

### Example
```typescript
import { InteractiveAuthenticationApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveAuthenticationApi
  ) { }

  ngOnInit() {
    this.apiInstance.authOrganizationOrganizationIdDirectoryDirectoryIdGet(sbClientId: string directoryId: string randomState: string sbClientSecret?: string invite?: string ).subscribe(
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
 **directoryId** | **string**| the directory of the new user | 
 **randomState** | **string**| Random string to identifiy the account after the successful interactive authentication | 
 **sbClientSecret** | **string**| Your application client secret | [optional] 
 **invite** | **string**| Optional invite code | [optional] 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

<a name="authOrganizationOrganizationIdProviderProviderIdGet"></a>
# **authOrganizationOrganizationIdProviderProviderIdGet**
> authOrganizationOrganizationIdProviderProviderIdGet(sbClientIddirectoryIdrandomStateopts)

Interactive user authentication using specific organization and a specific provider

Interactive user authentication with external authentication provider. If the authentication is successful, the client is redirected to /auth/provider/[providerId]/callback.

### Example
```typescript
import { InteractiveAuthenticationApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveAuthenticationApi
  ) { }

  ngOnInit() {
    this.apiInstance.authOrganizationOrganizationIdProviderProviderIdGet(sbClientId: string directoryId: string randomState: string sbClientSecret?: string invite?: string ).subscribe(
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
 **directoryId** | **string**| the directory of the new user | 
 **randomState** | **string**| Random string to identifiy the account after the successful interactive authentication | 
 **sbClientSecret** | **string**| Your application client secret | [optional] 
 **invite** | **string**| Optional invite code | [optional] 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

<a name="authProviderProviderIdGet"></a>
# **authProviderProviderIdGet**
> authProviderProviderIdGet(sbClientIddirectoryIdrandomStateopts)

Interactive user authentication with external provider

Interactive user authentication with external authentication provider. If the authentication is successful, the client is redirected to /auth/provider/[providerId]/callback.

### Example
```typescript
import { InteractiveAuthenticationApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveAuthenticationApi
  ) { }

  ngOnInit() {
    this.apiInstance.authProviderProviderIdGet(sbClientId: string directoryId: string randomState: string sbClientSecret?: string invite?: string ).subscribe(
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
 **directoryId** | **string**| the directory of the new user | 
 **randomState** | **string**| Random string to identifiy the account after the successful interactive authentication | 
 **sbClientSecret** | **string**| Your application client secret | [optional] 
 **invite** | **string**| Optional invite code | [optional] 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

