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
> models.UserLoginResponse login

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
    this.apiInstance.login(userLoginRequest: models.UserLoginRequest).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userLoginRequest** | [**models.UserLoginRequest**](UserLoginRequest.md)| User login request credentials | 

### Return type

[**models.UserLoginResponse**](models.UserLoginResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="loginByDirectory"></a>
# **loginByDirectory**
> models.UserLoginResponse loginByDirectory

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
    this.apiInstance.loginByDirectory(directoryId: string, userLoginRequest?: models.UserLoginRequest).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directoryId** | **string**| the directory of the new user | 
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
> models.UserLoginResponse loginByDirectoryAndToken

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
    this.apiInstance.loginByDirectoryAndToken(directoryId: string, randomState: string).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directoryId** | **string**| the directory of the new user | 
 **randomState** | **string**| random state that was provided in the interactive oauth flow | 

### Return type

[**models.UserLoginResponse**](models.UserLoginResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="loginByOrganization"></a>
# **loginByOrganization**
> models.UserLoginResponse loginByOrganization

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
    this.apiInstance.loginByOrganization(organizationId: string, userLoginRequest?: models.UserLoginRequest).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **string**| the organization id of the login user | 
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
> models.UserLoginResponse loginByOrganizationAndProvider

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
    this.apiInstance.loginByOrganizationAndProvider(organizationId: string, providerId: string, userLoginRequest?: models.UserLoginRequest).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **string**| the organization id of the login user | 
 **providerId** | **string**| the provider id of the target directory | 
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
> models.ResetPasswordResponse resetPasswordRequest

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
    this.apiInstance.resetPasswordRequest(resetPasswordRequest: models.ResetPasswordRequest).subscribe(
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
> models.SendPasswordResetEmailResponse resetPasswordTriggerByEmail

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
    this.apiInstance.resetPasswordTriggerByEmail(sendPasswordResetEmailRequest: models.SendPasswordResetEmailRequest).subscribe(
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
> models.UserSignupResponse signup

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
    this.apiInstance.signup(profile: models.UserSignupRequest, invite?: string, returnCredentials?: boolean).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile** | [**models.UserSignupRequest**](UserSignupRequest.md)| New user&#39;s profile | 
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
> models.UserSignupResponse signupByDirectory

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
    this.apiInstance.signupByDirectory(directoryId: string, signupRequest: models.UserSignupRequest, invite?: string, returnCredentials?: boolean).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directoryId** | **string**| the directory of the new user | 
 **signupRequest** | [**models.UserSignupRequest**](UserSignupRequest.md)| User signup request | 
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
> models.UserSignupResponse signupByDirectoryAndToken

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
    this.apiInstance.signupByDirectoryAndToken(directoryId: string, randomState: string).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directoryId** | **string**| the directory of the new user | 
 **randomState** | **string**| random state that was provided in the interactive oauth flow | 

### Return type

[**models.UserSignupResponse**](models.UserSignupResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="signupByDirectoryInteractive"></a>
# **signupByDirectoryInteractive**
> models.UserSignupResponse signupByDirectoryInteractive



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
    this.apiInstance.signupByDirectoryInteractive(directoryId: string, randomState: string).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directoryId** | **string**| the directory of the new user | 
 **randomState** | **string**| random state that was provided in the interactive oauth flow | 

### Return type

[**models.UserSignupResponse**](models.UserSignupResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="signupByOrganization"></a>
# **signupByOrganization**
> models.UserSignupResponse signupByOrganization

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
    this.apiInstance.signupByOrganization(organizationId: string, signupRequest: models.UserSignupRequest, invite?: string, returnCredentials?: boolean).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **string**| the organization of the new user | 
 **signupRequest** | [**models.UserSignupRequest**](UserSignupRequest.md)| User signup request | 
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
> models.UserSignupResponse signupByOrganizationAndDirectory

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
    this.apiInstance.signupByOrganizationAndDirectory(organizationId: string, directoryId: string, signupRequest: models.UserSignupRequest, invite?: string, returnCredentials?: boolean).subscribe(
      data => console.log(data),
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
 **signupRequest** | [**models.UserSignupRequest**](UserSignupRequest.md)| User signup request | 
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
> models.UserSignupResponse signupByOrganizationAndProvider

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
    this.apiInstance.signupByOrganizationAndProvider(organizationId: string, providerId: string, invite?: string, returnCredentials?: boolean, signupRequest?: models.UserSignupRequest).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **string**| the organization of the new user | 
 **providerId** | **string**| the target provider | 
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
> models.UserSignupResponse signupByProvider

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
    this.apiInstance.signupByProvider(providerId: string, signupRequest: models.UserSignupRequest, invite?: string, returnCredentials?: boolean).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerId** | **string**| the provider of a directory of the new user | 
 **signupRequest** | [**models.UserSignupRequest**](UserSignupRequest.md)| User signup request | 
 **invite** | **string**| Optional invite code | [optional] 
 **returnCredentials** | **boolean**| if true, return the credentials in the signup response | [optional] 

### Return type

[**models.UserSignupResponse**](models.UserSignupResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

