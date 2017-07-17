# AuthApi

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
[**login**](AuthApi.md#login) | **RequestMethod.Post** /login | User login with default organization and directory
[**loginByDirectory**](AuthApi.md#loginByDirectory) | **RequestMethod.Post** /login/directory/${directoryId} | User login with a specific organization and login provider
[**loginByDirectoryAndToken**](AuthApi.md#loginByDirectoryAndToken) | **RequestMethod.Post** /login/directory/${directoryId}/token | Social directory login with token
[**loginByOrganization**](AuthApi.md#loginByOrganization) | **RequestMethod.Post** /login/organization/${organizationId} | User login with a specific organization and the default directory
[**loginByOrganizationAndProvider**](AuthApi.md#loginByOrganizationAndProvider) | **RequestMethod.Post** /login/organization/${organizationId}/provider/${providerId} | User login with a specific organization and login provider
[**resetPasswordRequest**](AuthApi.md#resetPasswordRequest) | **RequestMethod.Post** /password/reset | password reset
[**resetPasswordTriggerByEmail**](AuthApi.md#resetPasswordTriggerByEmail) | **RequestMethod.Post** /password/reset/trigger | trigger password reset by email
[**signup**](AuthApi.md#signup) | **RequestMethod.Post** /signup | Signup with default organization and its default directory
[**signupByDirectory**](AuthApi.md#signupByDirectory) | **RequestMethod.Post** /signup/directory/${directoryId} | Signup with specific directory
[**signupByDirectoryAndToken**](AuthApi.md#signupByDirectoryAndToken) | **RequestMethod.Post** /signup/directory/${directoryId}/token | Signup with social directory using a token
[**signupByDirectoryInteractive**](AuthApi.md#signupByDirectoryInteractive) | **RequestMethod.Post** /signup/directory/${directoryId}/interactive | 
[**signupByOrganization**](AuthApi.md#signupByOrganization) | **RequestMethod.Post** /signup/organization/${organizationId} | Signup with specific organization and its default directory
[**signupByOrganizationAndDirectory**](AuthApi.md#signupByOrganizationAndDirectory) | **RequestMethod.Post** /signup/organization/${organizationId}/directory/${directoryId} | Signup with specific organization and a specific directory
[**signupByOrganizationAndProvider**](AuthApi.md#signupByOrganizationAndProvider) | **RequestMethod.Post** /signup/organization/${organizationId}/provider/${providerId} | Signup with specific organization and directory that belongs to a specific provider
[**signupByProvider**](AuthApi.md#signupByProvider) | **RequestMethod.Post** /signup/provider/${providerId} | Signup with default organization and a directory depending on the specified provider


<a name="login"></a>
# **login**
> models.UserLoginResponse login(sbClientIduserLoginRequestopts)

User login with default organization and directory

User login with default organization and directory

### Example
```typescript
import { AuthApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: AuthApi
  ) { }

  ngOnInit() {
    this.apiInstance.login(sbClientId: string userLoginRequest: models.UserLoginRequest sbClientSecret?: string ).subscribe(
      data => console.log(data),
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

<a name="loginByDirectory"></a>
# **loginByDirectory**
> models.UserLoginResponse loginByDirectory(sbClientIddirectoryIdopts)

User login with a specific organization and login provider

User login with specific directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username | password | 

### Example
```typescript
import { AuthApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: AuthApi
  ) { }

  ngOnInit() {
    this.apiInstance.loginByDirectory(sbClientId: string directoryId: string sbClientSecret?: string userLoginRequest?: models.UserLoginRequest ).subscribe(
      data => console.log(data),
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

<a name="loginByDirectoryAndToken"></a>
# **loginByDirectoryAndToken**
> models.UserLoginResponse loginByDirectoryAndToken(sbClientIddirectoryIdrandomStateopts)

Social directory login with token

User login with social directory and serverside oauth flow. The attributes that are used as credentials to login the user depend on the directory type. 

### Example
```typescript
import { AuthApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: AuthApi
  ) { }

  ngOnInit() {
    this.apiInstance.loginByDirectoryAndToken(sbClientId: string directoryId: string randomState: string sbClientSecret?: string ).subscribe(
      data => console.log(data),
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

<a name="loginByOrganization"></a>
# **loginByOrganization**
> models.UserLoginResponse loginByOrganization(sbClientIdorganizationIdopts)

User login with a specific organization and the default directory

User login with a specific organization and the default directory

### Example
```typescript
import { AuthApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: AuthApi
  ) { }

  ngOnInit() {
    this.apiInstance.loginByOrganization(sbClientId: string organizationId: string sbClientSecret?: string userLoginRequest?: models.UserLoginRequest ).subscribe(
      data => console.log(data),
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

<a name="loginByOrganizationAndProvider"></a>
# **loginByOrganizationAndProvider**
> models.UserLoginResponse loginByOrganizationAndProvider(sbClientIdorganizationIdproviderIdopts)

User login with a specific organization and login provider

User login with a specific organization and login provider

### Example
```typescript
import { AuthApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: AuthApi
  ) { }

  ngOnInit() {
    this.apiInstance.loginByOrganizationAndProvider(sbClientId: string organizationId: string providerId: string sbClientSecret?: string userLoginRequest?: models.UserLoginRequest ).subscribe(
      data => console.log(data),
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

<a name="resetPasswordRequest"></a>
# **resetPasswordRequest**
> models.ResetPasswordResponse resetPasswordRequest(resetPasswordRequest)

password reset

reset the password of a user

### Example
```typescript
import { AuthApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: AuthApi
  ) { }

  ngOnInit() {
    this.apiInstance.resetPasswordRequest(resetPasswordRequest: models.ResetPasswordRequest ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resetPasswordRequest** | [**models.ResetPasswordRequest**](ResetPasswordRequest.md)| The password reset request | 

### Return type

[**models.ResetPasswordResponse**](models.ResetPasswordResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="resetPasswordTriggerByEmail"></a>
# **resetPasswordTriggerByEmail**
> models.SendPasswordResetEmailResponse resetPasswordTriggerByEmail(sendPasswordResetEmailRequest)

trigger password reset by email

request an email to reset a password of a user

### Example
```typescript
import { AuthApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: AuthApi
  ) { }

  ngOnInit() {
    this.apiInstance.resetPasswordTriggerByEmail(sendPasswordResetEmailRequest: models.SendPasswordResetEmailRequest ).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendPasswordResetEmailRequest** | [**models.SendPasswordResetEmailRequest**](SendPasswordResetEmailRequest.md)| verified email address of the user | 

### Return type

[**models.SendPasswordResetEmailResponse**](models.SendPasswordResetEmailResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="signup"></a>
# **signup**
> models.UserSignupResponse signup(sbClientIdprofileopts)

Signup with default organization and its default directory

Signup with default organization and its default directory

### Example
```typescript
import { AuthApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: AuthApi
  ) { }

  ngOnInit() {
    this.apiInstance.signup(sbClientId: string profile: models.UserSignupRequest sbClientSecret?: string invite?: string returnCredentials?: boolean ).subscribe(
      data => console.log(data),
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

<a name="signupByDirectory"></a>
# **signupByDirectory**
> models.UserSignupResponse signupByDirectory(sbClientIddirectoryIdsignupRequestopts)

Signup with specific directory

User signup with specific directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password | 

### Example
```typescript
import { AuthApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: AuthApi
  ) { }

  ngOnInit() {
    this.apiInstance.signupByDirectory(sbClientId: string directoryId: string signupRequest: models.UserSignupRequest sbClientSecret?: string invite?: string returnCredentials?: boolean ).subscribe(
      data => console.log(data),
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

<a name="signupByDirectoryAndToken"></a>
# **signupByDirectoryAndToken**
> models.UserSignupResponse signupByDirectoryAndToken(sbClientIddirectoryIdrandomStateopts)

Signup with social directory using a token

User signup with social directory and serverside oauth flow. The attributes that are used as credentials to signup the user depend on the directory type: 

### Example
```typescript
import { AuthApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: AuthApi
  ) { }

  ngOnInit() {
    this.apiInstance.signupByDirectoryAndToken(sbClientId: string directoryId: string randomState: string sbClientSecret?: string ).subscribe(
      data => console.log(data),
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

<a name="signupByDirectoryInteractive"></a>
# **signupByDirectoryInteractive**
> models.UserSignupResponse signupByDirectoryInteractive(sbClientIddirectoryIdrandomStateopts)



Interactive POST endpoint for a user signup with email/pw or username/pw directory. The attributes that are used as credentials to signup the user depend on the directory type 

### Example
```typescript
import { AuthApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: AuthApi
  ) { }

  ngOnInit() {
    this.apiInstance.signupByDirectoryInteractive(sbClientId: string directoryId: string randomState: string sbClientSecret?: string ).subscribe(
      data => console.log(data),
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

<a name="signupByOrganization"></a>
# **signupByOrganization**
> models.UserSignupResponse signupByOrganization(sbClientIdorganizationIdsignupRequestopts)

Signup with specific organization and its default directory

User signup with specific organization and its default directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password | 

### Example
```typescript
import { AuthApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: AuthApi
  ) { }

  ngOnInit() {
    this.apiInstance.signupByOrganization(sbClientId: string organizationId: string signupRequest: models.UserSignupRequest sbClientSecret?: string invite?: string returnCredentials?: boolean ).subscribe(
      data => console.log(data),
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

<a name="signupByOrganizationAndDirectory"></a>
# **signupByOrganizationAndDirectory**
> models.UserSignupResponse signupByOrganizationAndDirectory(sbClientIdorganizationIddirectoryIdsignupRequestopts)

Signup with specific organization and a specific directory

User signup with specific organization and a specific directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password | 

### Example
```typescript
import { AuthApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: AuthApi
  ) { }

  ngOnInit() {
    this.apiInstance.signupByOrganizationAndDirectory(sbClientId: string organizationId: string directoryId: string signupRequest: models.UserSignupRequest sbClientSecret?: string invite?: string returnCredentials?: boolean ).subscribe(
      data => console.log(data),
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

<a name="signupByOrganizationAndProvider"></a>
# **signupByOrganizationAndProvider**
> models.UserSignupResponse signupByOrganizationAndProvider(sbClientIdorganizationIdproviderIdopts)

Signup with specific organization and directory that belongs to a specific provider

User signup with specific organization and a directory that belongs to a specific provider. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password | 

### Example
```typescript
import { AuthApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: AuthApi
  ) { }

  ngOnInit() {
    this.apiInstance.signupByOrganizationAndProvider(sbClientId: string organizationId: string providerId: string sbClientSecret?: string invite?: string returnCredentials?: boolean signupRequest?: models.UserSignupRequest ).subscribe(
      data => console.log(data),
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
 **providerId** | **string**| the target provider | 
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

<a name="signupByProvider"></a>
# **signupByProvider**
> models.UserSignupResponse signupByProvider(sbClientIdproviderIdsignupRequestopts)

Signup with default organization and a directory depending on the specified provider

User signup with the default organization and a directory that belongs to the specific provider. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password | 

### Example
```typescript
import { AuthApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: AuthApi
  ) { }

  ngOnInit() {
    this.apiInstance.signupByProvider(sbClientId: string providerId: string signupRequest: models.UserSignupRequest sbClientSecret?: string invite?: string returnCredentials?: boolean ).subscribe(
      data => console.log(data),
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

