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
[**openAuthViewByDirectory**](InteractiveViewsApi.md#openAuthViewByDirectory) | **RequestMethod.Get** /auth/directory/${directoryId} | Interactive user authentication with external provider
[**openAuthViewByOrganizationAndDirectory**](InteractiveViewsApi.md#openAuthViewByOrganizationAndDirectory) | **RequestMethod.Get** /auth/organization/${organizationId}/directory/${directoryId} | Interactive user authentication using specific organization and directory
[**openAuthViewByOrganizationAndProvider**](InteractiveViewsApi.md#openAuthViewByOrganizationAndProvider) | **RequestMethod.Get** /auth/organization/${organizationId}/provider/${providerId} | Interactive user authentication using specific organization and a specific provider
[**openAuthViewByProvider**](InteractiveViewsApi.md#openAuthViewByProvider) | **RequestMethod.Get** /auth/provider/${providerId} | Interactive user authentication with external provider
[**openEmailVerificationViewByEmailAndCode**](InteractiveViewsApi.md#openEmailVerificationViewByEmailAndCode) | **RequestMethod.Get** /emails/verify | Verify email
[**openLoginView**](InteractiveViewsApi.md#openLoginView) | **RequestMethod.Get** /login | Interactive user login with default directory
[**openLoginViewByDirectory**](InteractiveViewsApi.md#openLoginViewByDirectory) | **RequestMethod.Get** /login/directory/${directoryId} | Interactive user login with specific directory
[**openLoginViewByOrganization**](InteractiveViewsApi.md#openLoginViewByOrganization) | **RequestMethod.Get** /login/organization/${organizationId} | Interactive user login with default organization and its default directory
[**openLoginViewByOrganizationAndDirectory**](InteractiveViewsApi.md#openLoginViewByOrganizationAndDirectory) | **RequestMethod.Get** /login/organization/${organizationId}/directory/${directoryId} | Interactive user login with specific organization and a specific directory
[**openLoginViewByOrganizationAndProvider**](InteractiveViewsApi.md#openLoginViewByOrganizationAndProvider) | **RequestMethod.Get** /login/organization/${organizationId}/provider/${providerId} | Interactive user login with specific organization and specific provider
[**openPasswordResetCallbackView**](InteractiveViewsApi.md#openPasswordResetCallbackView) | **RequestMethod.Get** /password/reset/callback | Reset password callback view
[**openPasswordResetView**](InteractiveViewsApi.md#openPasswordResetView) | **RequestMethod.Get** /password/reset | Reset password view
[**openSignupView**](InteractiveViewsApi.md#openSignupView) | **RequestMethod.Get** /signup | Interactive user signup with default organization and its default directory
[**openSignupViewByDirectory**](InteractiveViewsApi.md#openSignupViewByDirectory) | **RequestMethod.Get** /signup/directory/${directoryId} | Interactive user signup with a specific directory
[**openSignupViewByOrganization**](InteractiveViewsApi.md#openSignupViewByOrganization) | **RequestMethod.Get** /signup/organization/${organizationId} | Interactive user signup with specified organization and its default directory
[**openSignupViewByOrganizationAndDirectory**](InteractiveViewsApi.md#openSignupViewByOrganizationAndDirectory) | **RequestMethod.Get** /signup/organization/${organizationId}/directory/${directoryId} | Interactive user signup with specific organization and a specific directory
[**openSignupViewByOrganizationAndProvider**](InteractiveViewsApi.md#openSignupViewByOrganizationAndProvider) | **RequestMethod.Get** /signup/organization/${organizationId}/provider/${providerId} | Interactive user signup with specific organization and specific provider
[**openSignupViewByProvider**](InteractiveViewsApi.md#openSignupViewByProvider) | **RequestMethod.Get** /signup/provider/${providerId} | Interactive user signup with default organization and a directory depending on specified provider


<a name="openAuthViewByDirectory"></a>
# **openAuthViewByDirectory**
> openAuthViewByDirectory

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
    this.apiInstance.openAuthViewByDirectory(sbClientId: string, directoryId: string, randomState: string, invite?: string).subscribe(
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
 **randomState** | **string**| Random string to identifiy the account after the successful interactive authentication | 
 **invite** | **string**| Optional invite code | [optional] 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

<a name="openAuthViewByOrganizationAndDirectory"></a>
# **openAuthViewByOrganizationAndDirectory**
> openAuthViewByOrganizationAndDirectory

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
    this.apiInstance.openAuthViewByOrganizationAndDirectory(sbClientId: string, organizationId: string, directoryId: string, randomState: string, invite?: string).subscribe(
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
 **organizationId** | **string**| the target organization | 
 **directoryId** | **string**| the directory of the new user | 
 **randomState** | **string**| Random string to identifiy the account after the successful interactive authentication | 
 **invite** | **string**| Optional invite code | [optional] 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

<a name="openAuthViewByOrganizationAndProvider"></a>
# **openAuthViewByOrganizationAndProvider**
> openAuthViewByOrganizationAndProvider

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
    this.apiInstance.openAuthViewByOrganizationAndProvider(sbClientId: string, organizationId: string, providerId: string, randomState: string, invite?: string).subscribe(
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
 **organizationId** | **string**| the target organization | 
 **providerId** | **string**| the target provider | 
 **randomState** | **string**| Random string to identifiy the account after the successful interactive authentication | 
 **invite** | **string**| Optional invite code | [optional] 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

<a name="openAuthViewByProvider"></a>
# **openAuthViewByProvider**
> openAuthViewByProvider

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
    this.apiInstance.openAuthViewByProvider(sbClientId: string, providerId: string, randomState: string, invite?: string).subscribe(
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
 **providerId** | **string**| the provider of the new user | 
 **randomState** | **string**| Random string to identifiy the account after the successful interactive authentication | 
 **invite** | **string**| Optional invite code | [optional] 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

<a name="openEmailVerificationViewByEmailAndCode"></a>
# **openEmailVerificationViewByEmailAndCode**
> openEmailVerificationViewByEmailAndCode

Verify email

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
    this.apiInstance.openEmailVerificationViewByEmailAndCode(email: string, code: string).subscribe(
      data => console.log(data),
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

<a name="openLoginView"></a>
# **openLoginView**
> openLoginView

Interactive user login with default directory

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
    this.apiInstance.openLoginView(sbClientId: string, randomState?: string).subscribe(
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
 **randomState** | **string**| Random string to identifiy the account after the successful interactive authentication | [optional] 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

<a name="openLoginViewByDirectory"></a>
# **openLoginViewByDirectory**
> openLoginViewByDirectory

Interactive user login with specific directory

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
    this.apiInstance.openLoginViewByDirectory(sbClientId: string, directoryId: string, randomState: string).subscribe(
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
 **directoryId** | **string**| the directory where the user wants to log in | 
 **randomState** | **string**| Random string to identifiy the account after the successful interactive authentication | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

<a name="openLoginViewByOrganization"></a>
# **openLoginViewByOrganization**
> openLoginViewByOrganization

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
    this.apiInstance.openLoginViewByOrganization(sbClientId: string, organizationId: string, randomState?: string).subscribe(
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
 **randomState** | **string**| Random string to identifiy the account after the successful interactive authentication | [optional] 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

<a name="openLoginViewByOrganizationAndDirectory"></a>
# **openLoginViewByOrganizationAndDirectory**
> openLoginViewByOrganizationAndDirectory

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
    this.apiInstance.openLoginViewByOrganizationAndDirectory(sbClientId: string, organizationId: string, directoryId: string, randomState?: string).subscribe(
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
 **randomState** | **string**| Random string to identifiy the account after the successful interactive authentication | [optional] 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

<a name="openLoginViewByOrganizationAndProvider"></a>
# **openLoginViewByOrganizationAndProvider**
> openLoginViewByOrganizationAndProvider

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
    this.apiInstance.openLoginViewByOrganizationAndProvider(sbClientId: string, organizationId: string, providerId: string, randomState?: string).subscribe(
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
 **providerId** | **string**| the provider of the user directory | 
 **randomState** | **string**| Random string to identifiy the account after the successful interactive authentication | [optional] 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

<a name="openPasswordResetCallbackView"></a>
# **openPasswordResetCallbackView**
> openPasswordResetCallbackView

Reset password callback view

Reset password callback view

### Example
```typescript
import { InteractiveViewsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveViewsApi
  ) { }

  ngOnInit() {
    this.apiInstance.openPasswordResetCallbackView(error: string).subscribe(
      data => console.log(data),
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

<a name="openPasswordResetView"></a>
# **openPasswordResetView**
> openPasswordResetView

Reset password view

Reset password view

### Example
```typescript
import { InteractiveViewsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: InteractiveViewsApi
  ) { }

  ngOnInit() {
    this.apiInstance.openPasswordResetView(email: string, code: string).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **string**| Target email of a password reset | 
 **code** | **string**| Code that was generated for the password reset process | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

<a name="openSignupView"></a>
# **openSignupView**
> openSignupView

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
    this.apiInstance.openSignupView(sbClientId: string, randomState: string, invite?: string).subscribe(
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
 **randomState** | **string**| Random string to identifiy the account after the successful interactive signup | 
 **invite** | **string**| Optional invite code | [optional] 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

<a name="openSignupViewByDirectory"></a>
# **openSignupViewByDirectory**
> openSignupViewByDirectory

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
    this.apiInstance.openSignupViewByDirectory(sbClientId: string, directoryId: string, randomState: string, invite?: string).subscribe(
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
 **randomState** | **string**| Random string to identifiy the account after the successful interactive signup | 
 **invite** | **string**| Optional invite code | [optional] 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

<a name="openSignupViewByOrganization"></a>
# **openSignupViewByOrganization**
> openSignupViewByOrganization

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
    this.apiInstance.openSignupViewByOrganization(sbClientId: string, organizationId: string, randomState: string, invite?: string).subscribe(
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
 **randomState** | **string**| Random string to identifiy the account after the successful interactive signup | 
 **invite** | **string**| Optional invite code | [optional] 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

<a name="openSignupViewByOrganizationAndDirectory"></a>
# **openSignupViewByOrganizationAndDirectory**
> openSignupViewByOrganizationAndDirectory

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
    this.apiInstance.openSignupViewByOrganizationAndDirectory(sbClientId: string, organizationId: string, directoryId: string, randomState: string, invite?: string).subscribe(
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
 **randomState** | **string**| Random string to identifiy the account after the successful interactive signup | 
 **invite** | **string**| Optional invite code | [optional] 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

<a name="openSignupViewByOrganizationAndProvider"></a>
# **openSignupViewByOrganizationAndProvider**
> openSignupViewByOrganizationAndProvider

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
    this.apiInstance.openSignupViewByOrganizationAndProvider(sbClientId: string, organizationId: string, providerId: string, randomState: string, invite?: string).subscribe(
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

<a name="openSignupViewByProvider"></a>
# **openSignupViewByProvider**
> openSignupViewByProvider

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
    this.apiInstance.openSignupViewByProvider(sbClientId: string, providerId: string, randomState: string, invite?: string).subscribe(
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

