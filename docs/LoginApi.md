# LoginApi

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
[**loginDirectoryDirectoryIdPost**](LoginApi.md#loginDirectoryDirectoryIdPost) | **RequestMethod.Post** /login/directory/${directoryId} | 
[**loginDirectoryDirectoryIdTokenPost**](LoginApi.md#loginDirectoryDirectoryIdTokenPost) | **RequestMethod.Post** /login/directory/${directoryId}/token | 
[**loginOrganizationOrganizationIdPost**](LoginApi.md#loginOrganizationOrganizationIdPost) | **RequestMethod.Post** /login/organization/${organizationId} | 
[**loginOrganizationOrganizationIdProviderProviderIdPost**](LoginApi.md#loginOrganizationOrganizationIdProviderProviderIdPost) | **RequestMethod.Post** /login/organization/${organizationId}/provider/${providerId} | 
[**loginPost**](LoginApi.md#loginPost) | **RequestMethod.Post** /login | 


<a name="loginDirectoryDirectoryIdPost"></a>
# **loginDirectoryDirectoryIdPost**
> models.UserLoginResponse loginDirectoryDirectoryIdPost(sbClientIddirectoryIdopts)



User login with specific directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username | password | 

### Example
```typescript
import { LoginApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: LoginApi
  ) { }

  ngOnInit() {
    this.apiInstance.loginDirectoryDirectoryIdPost(sbClientId: string directoryId: string sbClientSecret?: string userLoginRequest?: models.UserLoginRequest ).subscribe(
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
 **sbClientSecret** | **string**| Your application client secret | [optional] 
 **userLoginRequest** | [**models.UserLoginRequest**](UserLoginRequest.md)| User login request | [optional] 

### Return type

[**models.UserLoginResponse**](models.UserLoginResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="loginDirectoryDirectoryIdTokenPost"></a>
# **loginDirectoryDirectoryIdTokenPost**
> models.UserLoginResponse loginDirectoryDirectoryIdTokenPost(sbClientIddirectoryIdrandomStateopts)



User login with social directory and serverside oauth flow. The attributes that are used as credentials to login the user depend on the directory type: 

### Example
```typescript
import { LoginApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: LoginApi
  ) { }

  ngOnInit() {
    this.apiInstance.loginDirectoryDirectoryIdTokenPost(sbClientId: string directoryId: string randomState: string sbClientSecret?: string ).subscribe(
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
 **randomState** | **string**| random state that was provided in the interactive oauth flow | 
 **sbClientSecret** | **string**| Your application client secret | [optional] 

### Return type

[**models.UserLoginResponse**](models.UserLoginResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="loginOrganizationOrganizationIdPost"></a>
# **loginOrganizationOrganizationIdPost**
> models.UserLoginResponse loginOrganizationOrganizationIdPost(sbClientIdorganizationIdopts)



User login with a specific organization

### Example
```typescript
import { LoginApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: LoginApi
  ) { }

  ngOnInit() {
    this.apiInstance.loginOrganizationOrganizationIdPost(sbClientId: string organizationId: string sbClientSecret?: string userLoginRequest?: models.UserLoginRequest ).subscribe(
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
 **organizationId** | **string**| the organization id of the login user | 
 **sbClientSecret** | **string**| Your application client secret | [optional] 
 **userLoginRequest** | [**models.UserLoginRequest**](UserLoginRequest.md)| User login request | [optional] 

### Return type

[**models.UserLoginResponse**](models.UserLoginResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="loginOrganizationOrganizationIdProviderProviderIdPost"></a>
# **loginOrganizationOrganizationIdProviderProviderIdPost**
> models.UserLoginResponse loginOrganizationOrganizationIdProviderProviderIdPost(sbClientIdorganizationIdproviderIdopts)



User login with a specific organization

### Example
```typescript
import { LoginApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: LoginApi
  ) { }

  ngOnInit() {
    this.apiInstance.loginOrganizationOrganizationIdProviderProviderIdPost(sbClientId: string organizationId: string providerId: string sbClientSecret?: string userLoginRequest?: models.UserLoginRequest ).subscribe(
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
 **organizationId** | **string**| the organization id of the login user | 
 **providerId** | **string**| the provider id of the target directory | 
 **sbClientSecret** | **string**| Your application client secret | [optional] 
 **userLoginRequest** | [**models.UserLoginRequest**](UserLoginRequest.md)| User login request | [optional] 

### Return type

[**models.UserLoginResponse**](models.UserLoginResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="loginPost"></a>
# **loginPost**
> models.UserLoginResponse loginPost(sbClientIduserLoginRequestopts)



User login with default directory

### Example
```typescript
import { LoginApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: LoginApi
  ) { }

  ngOnInit() {
    this.apiInstance.loginPost(sbClientId: string userLoginRequest: models.UserLoginRequest sbClientSecret?: string ).subscribe(
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
 **userLoginRequest** | [**models.UserLoginRequest**](UserLoginRequest.md)| User login request credentials | 
 **sbClientSecret** | **string**| Your application client secret | [optional] 

### Return type

[**models.UserLoginResponse**](models.UserLoginResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

