# InteractiveSignupApi

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
[**signupDirectoryDirectoryIdGet**](InteractiveSignupApi.md#signupDirectoryDirectoryIdGet) | **RequestMethod.Get** /signup/directory/${directoryId} | Interactive user signup with a specific directory
[**signupGet**](InteractiveSignupApi.md#signupGet) | **RequestMethod.Get** /signup | Interactive user signup with default organization and its default directory
[**signupOrganizationOrganizationIdDirectoryDirectoryIdGet**](InteractiveSignupApi.md#signupOrganizationOrganizationIdDirectoryDirectoryIdGet) | **RequestMethod.Get** /signup/organization/${organizationId}/directory/${directoryId} | Interactive user signup with specific organization and a specific directory
[**signupOrganizationOrganizationIdGet**](InteractiveSignupApi.md#signupOrganizationOrganizationIdGet) | **RequestMethod.Get** /signup/organization/${organizationId} | Interactive user signup with specified organization and its default directory
[**signupOrganizationOrganizationIdProviderProviderIdGet**](InteractiveSignupApi.md#signupOrganizationOrganizationIdProviderProviderIdGet) | **RequestMethod.Get** /signup/organization/${organizationId}/provider/${providerId} | Interactive user signup with specific organization and specific provider
[**signupProviderProviderIdGet**](InteractiveSignupApi.md#signupProviderProviderIdGet) | **RequestMethod.Get** /signup/provider/${providerId} | Interactive user signup with default organization and a directory depending on specified provider


<a name="signupDirectoryDirectoryIdGet"></a>
# **signupDirectoryDirectoryIdGet**
> signupDirectoryDirectoryIdGet(sbClientIddirectoryIdrandomStateopts)

Interactive user signup with a specific directory

Interactive user signup with default directory

### Example
```typescript
import { InteractiveSignupApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveSignupApi
  ) { }

  ngOnInit() {
    this.apiInstance.signupDirectoryDirectoryIdGet(sbClientId: string directoryId: string randomState: string invite?: string ).subscribe(
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
 **randomState** | **string**| Random string to identifiy the account after the successful interactive signup | 
 **invite** | **string**| Optional invite code | [optional] 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

<a name="signupGet"></a>
# **signupGet**
> signupGet(sbClientIdrandomStateopts)

Interactive user signup with default organization and its default directory

Interactive user signup with default organization and its default directory

### Example
```typescript
import { InteractiveSignupApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveSignupApi
  ) { }

  ngOnInit() {
    this.apiInstance.signupGet(sbClientId: string randomState: string invite?: string ).subscribe(
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
 **randomState** | **string**| Random string to identifiy the account after the successful interactive signup | 
 **invite** | **string**| Optional invite code | [optional] 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

<a name="signupOrganizationOrganizationIdDirectoryDirectoryIdGet"></a>
# **signupOrganizationOrganizationIdDirectoryDirectoryIdGet**
> signupOrganizationOrganizationIdDirectoryDirectoryIdGet(sbClientIdorganizationIddirectoryIdrandomStateopts)

Interactive user signup with specific organization and a specific directory

Interactive user signup with specific organization and a specific directory

### Example
```typescript
import { InteractiveSignupApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveSignupApi
  ) { }

  ngOnInit() {
    this.apiInstance.signupOrganizationOrganizationIdDirectoryDirectoryIdGet(sbClientId: string organizationId: string directoryId: string randomState: string invite?: string ).subscribe(
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
 **randomState** | **string**| Random string to identifiy the account after the successful interactive signup | 
 **invite** | **string**| Optional invite code | [optional] 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

<a name="signupOrganizationOrganizationIdGet"></a>
# **signupOrganizationOrganizationIdGet**
> signupOrganizationOrganizationIdGet(sbClientIdorganizationIdrandomStateopts)

Interactive user signup with specified organization and its default directory

Interactive user signup with specified organization and its default directory

### Example
```typescript
import { InteractiveSignupApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveSignupApi
  ) { }

  ngOnInit() {
    this.apiInstance.signupOrganizationOrganizationIdGet(sbClientId: string organizationId: string randomState: string invite?: string ).subscribe(
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
 **randomState** | **string**| Random string to identifiy the account after the successful interactive signup | 
 **invite** | **string**| Optional invite code | [optional] 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

<a name="signupOrganizationOrganizationIdProviderProviderIdGet"></a>
# **signupOrganizationOrganizationIdProviderProviderIdGet**
> signupOrganizationOrganizationIdProviderProviderIdGet(sbClientIdorganizationIdproviderIdrandomStateopts)

Interactive user signup with specific organization and specific provider

Interactive user signup with specific organization and specific provider

### Example
```typescript
import { InteractiveSignupApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveSignupApi
  ) { }

  ngOnInit() {
    this.apiInstance.signupOrganizationOrganizationIdProviderProviderIdGet(sbClientId: string organizationId: string providerId: string randomState: string invite?: string ).subscribe(
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
 **randomState** | **string**| Random string to identifiy the account after the successful interactive signup | 
 **invite** | **string**| Optional invite code | [optional] 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

<a name="signupProviderProviderIdGet"></a>
# **signupProviderProviderIdGet**
> signupProviderProviderIdGet(sbClientIdproviderIdrandomStateopts)

Interactive user signup with default organization and a directory depending on specified provider

Interactive user signup with default organization and a directory depending on specified provider

### Example
```typescript
import { InteractiveSignupApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveSignupApi
  ) { }

  ngOnInit() {
    this.apiInstance.signupProviderProviderIdGet(sbClientId: string providerId: string randomState: string invite?: string ).subscribe(
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
 **providerId** | **string**| the provider of the user directory | 
 **randomState** | **string**| Random string to identifiy the account after the successful interactive signup | 
 **invite** | **string**| Optional invite code | [optional] 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

