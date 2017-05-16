# SignupApi

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
[**signupDirectoryDirectoryIdInteractivePost**](SignupApi.md#signupDirectoryDirectoryIdInteractivePost) | **RequestMethod.Post** /signup/directory/${directoryId}/interactive | 
[**signupDirectoryDirectoryIdPost**](SignupApi.md#signupDirectoryDirectoryIdPost) | **RequestMethod.Post** /signup/directory/${directoryId} | Signup with specific directory
[**signupDirectoryDirectoryIdTokenPost**](SignupApi.md#signupDirectoryDirectoryIdTokenPost) | **RequestMethod.Post** /signup/directory/${directoryId}/token | 
[**signupOrganizationOrganizationIdDirectoryDirectoryIdPost**](SignupApi.md#signupOrganizationOrganizationIdDirectoryDirectoryIdPost) | **RequestMethod.Post** /signup/organization/${organizationId}/directory/${directoryId} | Signup with specific organization and a specific directory
[**signupOrganizationOrganizationIdPost**](SignupApi.md#signupOrganizationOrganizationIdPost) | **RequestMethod.Post** /signup/organization/${organizationId} | Signup with specific organization and its default directory
[**signupOrganizationOrganizationIdProviderProviderIdPost**](SignupApi.md#signupOrganizationOrganizationIdProviderProviderIdPost) | **RequestMethod.Post** /signup/organization/${organizationId}/provider/${providerId} | Signup with specific organization and directory that belongs to a specific provider
[**signupPost**](SignupApi.md#signupPost) | **RequestMethod.Post** /signup | Signup with default organization and its default directory
[**signupProviderProviderIdPost**](SignupApi.md#signupProviderProviderIdPost) | **RequestMethod.Post** /signup/provider/${providerId} | Signup with default organization and a directory depending on the specified provider


<a name="signupDirectoryDirectoryIdInteractivePost"></a>
# **signupDirectoryDirectoryIdInteractivePost**
> models.UserSignupResponse signupDirectoryDirectoryIdInteractivePost(sbClientIddirectoryIdrandomStateopts)



Interactive POST endpoint for a user signup with email/pw or username/pw directory. The attributes that are used as credentials to signup the user depend on the directory type: 

### Example
```typescript
import { SignupApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: SignupApi
  ) { }

  ngOnInit() {
    this.apiInstance.signupDirectoryDirectoryIdInteractivePost(sbClientId: string directoryId: string randomState: string sbClientSecret?: string ).subscribe(
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

[**models.UserSignupResponse**](models.UserSignupResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="signupDirectoryDirectoryIdPost"></a>
# **signupDirectoryDirectoryIdPost**
> models.UserSignupResponse signupDirectoryDirectoryIdPost(sbClientIddirectoryIdsignupRequestopts)

Signup with specific directory

User signup with specific directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password | 

### Example
```typescript
import { SignupApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: SignupApi
  ) { }

  ngOnInit() {
    this.apiInstance.signupDirectoryDirectoryIdPost(sbClientId: string directoryId: string signupRequest: models.UserSignupRequest sbClientSecret?: string invite?: string returnCredentials?: boolean ).subscribe(
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
 **signupRequest** | [**models.UserSignupRequest**](UserSignupRequest.md)| User signup request | 
 **sbClientSecret** | **string**| Your application client secret | [optional] 
 **invite** | **string**| Optional invite code | [optional] 
 **returnCredentials** | **boolean**| if true, return the credentials in the signup response | [optional] 

### Return type

[**models.UserSignupResponse**](models.UserSignupResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="signupDirectoryDirectoryIdTokenPost"></a>
# **signupDirectoryDirectoryIdTokenPost**
> models.UserSignupResponse signupDirectoryDirectoryIdTokenPost(sbClientIddirectoryIdrandomStateopts)



User signup with social directory and serverside oauth flow. The attributes that are used as credentials to signup the user depend on the directory type: 

### Example
```typescript
import { SignupApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: SignupApi
  ) { }

  ngOnInit() {
    this.apiInstance.signupDirectoryDirectoryIdTokenPost(sbClientId: string directoryId: string randomState: string sbClientSecret?: string ).subscribe(
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

[**models.UserSignupResponse**](models.UserSignupResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="signupOrganizationOrganizationIdDirectoryDirectoryIdPost"></a>
# **signupOrganizationOrganizationIdDirectoryDirectoryIdPost**
> models.UserSignupResponse signupOrganizationOrganizationIdDirectoryDirectoryIdPost(sbClientIdorganizationIddirectoryIdsignupRequestopts)

Signup with specific organization and a specific directory

User signup with specific organization and a specific directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password | 

### Example
```typescript
import { SignupApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: SignupApi
  ) { }

  ngOnInit() {
    this.apiInstance.signupOrganizationOrganizationIdDirectoryDirectoryIdPost(sbClientId: string organizationId: string directoryId: string signupRequest: models.UserSignupRequest sbClientSecret?: string invite?: string returnCredentials?: boolean ).subscribe(
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
 **signupRequest** | [**models.UserSignupRequest**](UserSignupRequest.md)| User signup request | 
 **sbClientSecret** | **string**| Your application client secret | [optional] 
 **invite** | **string**| Optional invite code | [optional] 
 **returnCredentials** | **boolean**| if true, return the credentials in the signup response | [optional] 

### Return type

[**models.UserSignupResponse**](models.UserSignupResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="signupOrganizationOrganizationIdPost"></a>
# **signupOrganizationOrganizationIdPost**
> models.UserSignupResponse signupOrganizationOrganizationIdPost(sbClientIdorganizationIdsignupRequestopts)

Signup with specific organization and its default directory

User signup with specific organization and its default directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password | 

### Example
```typescript
import { SignupApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: SignupApi
  ) { }

  ngOnInit() {
    this.apiInstance.signupOrganizationOrganizationIdPost(sbClientId: string organizationId: string signupRequest: models.UserSignupRequest sbClientSecret?: string invite?: string returnCredentials?: boolean ).subscribe(
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
 **signupRequest** | [**models.UserSignupRequest**](UserSignupRequest.md)| User signup request | 
 **sbClientSecret** | **string**| Your application client secret | [optional] 
 **invite** | **string**| Optional invite code | [optional] 
 **returnCredentials** | **boolean**| if true, return the credentials in the signup response | [optional] 

### Return type

[**models.UserSignupResponse**](models.UserSignupResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="signupOrganizationOrganizationIdProviderProviderIdPost"></a>
# **signupOrganizationOrganizationIdProviderProviderIdPost**
> models.UserSignupResponse signupOrganizationOrganizationIdProviderProviderIdPost(organizationIddirectoryIdsbClientIdopts)

Signup with specific organization and directory that belongs to a specific provider

User signup with specific organization and a directory that belongs to a specific provider. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password | 

### Example
```typescript
import { SignupApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: SignupApi
  ) { }

  ngOnInit() {
    this.apiInstance.signupOrganizationOrganizationIdProviderProviderIdPost(organizationId: string directoryId: string sbClientId: string sbClientSecret?: string invite?: string returnCredentials?: boolean signupRequest?: models.UserSignupRequest ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **string**| the organization of the new user | 
 **directoryId** | **string**| the directory of the new user | 
 **sbClientId** | **string**| Your application client id | 
 **sbClientSecret** | **string**| Your application client secret | [optional] 
 **invite** | **string**| Optional invite code | [optional] 
 **returnCredentials** | **boolean**| if true, return the credentials in the signup response | [optional] 
 **signupRequest** | [**models.UserSignupRequest**](UserSignupRequest.md)| User signup request | [optional] 

### Return type

[**models.UserSignupResponse**](models.UserSignupResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="signupPost"></a>
# **signupPost**
> models.UserSignupResponse signupPost(sbClientIdprofileopts)

Signup with default organization and its default directory

User signup with default directory

### Example
```typescript
import { SignupApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: SignupApi
  ) { }

  ngOnInit() {
    this.apiInstance.signupPost(sbClientId: string profile: models.UserSignupRequest sbClientSecret?: string invite?: string returnCredentials?: boolean ).subscribe(
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
 **profile** | [**models.UserSignupRequest**](UserSignupRequest.md)| New user&#39;s profile | 
 **sbClientSecret** | **string**| Your application client secret | [optional] 
 **invite** | **string**| Optional invite code | [optional] 
 **returnCredentials** | **boolean**| if true, return the credentials in the signup response | [optional] 

### Return type

[**models.UserSignupResponse**](models.UserSignupResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="signupProviderProviderIdPost"></a>
# **signupProviderProviderIdPost**
> models.UserSignupResponse signupProviderProviderIdPost(sbClientIdproviderIdsignupRequestopts)

Signup with default organization and a directory depending on the specified provider

User signup with the default organization and a directory that belongs to the specific provider. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password | 

### Example
```typescript
import { SignupApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: SignupApi
  ) { }

  ngOnInit() {
    this.apiInstance.signupProviderProviderIdPost(sbClientId: string providerId: string signupRequest: models.UserSignupRequest sbClientSecret?: string invite?: string returnCredentials?: boolean ).subscribe(
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
 **providerId** | **string**| the provider of a directory of the new user | 
 **signupRequest** | [**models.UserSignupRequest**](UserSignupRequest.md)| User signup request | 
 **sbClientSecret** | **string**| Your application client secret | [optional] 
 **invite** | **string**| Optional invite code | [optional] 
 **returnCredentials** | **boolean**| if true, return the credentials in the signup response | [optional] 

### Return type

[**models.UserSignupResponse**](models.UserSignupResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

