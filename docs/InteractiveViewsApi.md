# InteractiveViewsApi

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
[**authDirectoryDirectoryIdGet**](InteractiveViewsApi.md#authDirectoryDirectoryIdGet) | **RequestMethod.Get** /auth/directory/${directoryId} | Interactive user authentication with external provider
[**authOrganizationOrganizationIdDirectoryDirectoryIdGet**](InteractiveViewsApi.md#authOrganizationOrganizationIdDirectoryDirectoryIdGet) | **RequestMethod.Get** /auth/organization/${organizationId}/directory/${directoryId} | Interactive user authentication using specific organization and directory
[**authOrganizationOrganizationIdProviderProviderIdGet**](InteractiveViewsApi.md#authOrganizationOrganizationIdProviderProviderIdGet) | **RequestMethod.Get** /auth/organization/${organizationId}/provider/${providerId} | Interactive user authentication using specific organization and a specific provider
[**authProviderProviderIdGet**](InteractiveViewsApi.md#authProviderProviderIdGet) | **RequestMethod.Get** /auth/provider/${providerId} | Interactive user authentication with external provider
[**emailsVerifyGet**](InteractiveViewsApi.md#emailsVerifyGet) | **RequestMethod.Get** /emails/verify | 
[**loginDirectoryDirectoryIdGet**](InteractiveViewsApi.md#loginDirectoryDirectoryIdGet) | **RequestMethod.Get** /login/directory/${directoryId} | 
[**loginGet**](InteractiveViewsApi.md#loginGet) | **RequestMethod.Get** /login | 
[**loginOrganizationOrganizationIdDirectoryDirectoryIdGet**](InteractiveViewsApi.md#loginOrganizationOrganizationIdDirectoryDirectoryIdGet) | **RequestMethod.Get** /login/organization/${organizationId}/directory/${directoryId} | Interactive user login with specific organization and a specific directory
[**loginOrganizationOrganizationIdGet**](InteractiveViewsApi.md#loginOrganizationOrganizationIdGet) | **RequestMethod.Get** /login/organization/${organizationId} | Interactive user login with default organization and its default directory
[**loginOrganizationOrganizationIdProviderProviderIdGet**](InteractiveViewsApi.md#loginOrganizationOrganizationIdProviderProviderIdGet) | **RequestMethod.Get** /login/organization/${organizationId}/provider/${providerId} | Interactive user login with specific organization and specific provider
[**passwordResetCallbackGet**](InteractiveViewsApi.md#passwordResetCallbackGet) | **RequestMethod.Get** /password/reset/callback | 
[**passwordResetGet**](InteractiveViewsApi.md#passwordResetGet) | **RequestMethod.Get** /password/reset | 
[**signupDirectoryDirectoryIdGet**](InteractiveViewsApi.md#signupDirectoryDirectoryIdGet) | **RequestMethod.Get** /signup/directory/${directoryId} | Interactive user signup with a specific directory
[**signupGet**](InteractiveViewsApi.md#signupGet) | **RequestMethod.Get** /signup | Interactive user signup with default organization and its default directory
[**signupOrganizationOrganizationIdDirectoryDirectoryIdGet**](InteractiveViewsApi.md#signupOrganizationOrganizationIdDirectoryDirectoryIdGet) | **RequestMethod.Get** /signup/organization/${organizationId}/directory/${directoryId} | Interactive user signup with specific organization and a specific directory
[**signupOrganizationOrganizationIdGet**](InteractiveViewsApi.md#signupOrganizationOrganizationIdGet) | **RequestMethod.Get** /signup/organization/${organizationId} | Interactive user signup with specified organization and its default directory
[**signupOrganizationOrganizationIdProviderProviderIdGet**](InteractiveViewsApi.md#signupOrganizationOrganizationIdProviderProviderIdGet) | **RequestMethod.Get** /signup/organization/${organizationId}/provider/${providerId} | Interactive user signup with specific organization and specific provider
[**signupProviderProviderIdGet**](InteractiveViewsApi.md#signupProviderProviderIdGet) | **RequestMethod.Get** /signup/provider/${providerId} | Interactive user signup with default organization and a directory depending on specified provider


<a name="authDirectoryDirectoryIdGet"></a>
# **authDirectoryDirectoryIdGet**
> authDirectoryDirectoryIdGet(sbClientIddirectoryIdrandomStateopts)

Interactive user authentication with external provider

Interactive user authentication with external authentication providers for a specific directory. If the authentication is successful, the client is redirected to /auth/provider/[providerId]/callback.

### Example
```typescript
import { InteractiveViewsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveViewsApi
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
import { InteractiveViewsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveViewsApi
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
import { InteractiveViewsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveViewsApi
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
import { InteractiveViewsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveViewsApi
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

<a name="emailsVerifyGet"></a>
# **emailsVerifyGet**
> emailsVerifyGet(emailcode)



Verify email

### Example
```typescript
import { InteractiveViewsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveViewsApi
  ) { }

  ngOnInit() {
    this.apiInstance.emailsVerifyGet(email: string code: string ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **string**| Email you want to verifiy | 
 **code** | **string**| Code that was generated for the email verification | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="loginDirectoryDirectoryIdGet"></a>
# **loginDirectoryDirectoryIdGet**
> loginDirectoryDirectoryIdGet(sbClientIddirectoryIdrandomStateopts)



Interactive user login with specific directory

### Example
```typescript
import { InteractiveViewsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveViewsApi
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
import { InteractiveViewsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveViewsApi
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
import { InteractiveViewsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveViewsApi
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
import { InteractiveViewsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveViewsApi
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
import { InteractiveViewsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveViewsApi
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

<a name="passwordResetCallbackGet"></a>
# **passwordResetCallbackGet**
> passwordResetCallbackGet(error)



Reset password callback

### Example
```typescript
import { InteractiveViewsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveViewsApi
  ) { }

  ngOnInit() {
    this.apiInstance.passwordResetCallbackGet(error: string ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **error** | **string**| Password reset error message | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

<a name="passwordResetGet"></a>
# **passwordResetGet**
> passwordResetGet(accountIdcode)



Reset password

### Example
```typescript
import { InteractiveViewsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveViewsApi
  ) { }

  ngOnInit() {
    this.apiInstance.passwordResetGet(accountId: string code: string ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **string**| Target accountId of a password reset | 
 **code** | **string**| Code that was generated for the password reset process | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

<a name="signupDirectoryDirectoryIdGet"></a>
# **signupDirectoryDirectoryIdGet**
> signupDirectoryDirectoryIdGet(sbClientIddirectoryIdrandomStateopts)

Interactive user signup with a specific directory

Interactive user signup with default directory

### Example
```typescript
import { InteractiveViewsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveViewsApi
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
import { InteractiveViewsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveViewsApi
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
import { InteractiveViewsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveViewsApi
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
import { InteractiveViewsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveViewsApi
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
import { InteractiveViewsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveViewsApi
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
import { InteractiveViewsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveViewsApi
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

