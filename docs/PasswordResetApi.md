# PasswordResetApi

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
[**passwordResetPost**](PasswordResetApi.md#passwordResetPost) | **RequestMethod.Post** /password/reset | password reset
[**triggerPasswordReset**](PasswordResetApi.md#triggerPasswordReset) | **RequestMethod.Post** /password/reset/trigger | trigger password reset by email


<a name="passwordResetPost"></a>
# **passwordResetPost**
> models.ResetPasswordResponse passwordResetPost(resetPasswordRequest)

password reset

reset the password of a user

### Example
```typescript
import { PasswordResetApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: PasswordResetApi
  ) { }

  ngOnInit() {
    this.apiInstance.passwordResetPost(resetPasswordRequest: models.ResetPasswordRequest ).subscribe(
      data => console.log(res),
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

<a name="triggerPasswordReset"></a>
# **triggerPasswordReset**
> models.SendPasswordResetEmailResponse triggerPasswordReset(sendPasswordResetEmailRequest)

trigger password reset by email

request an email to reset a password of a user

### Example
```typescript
import { PasswordResetApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: PasswordResetApi
  ) { }

  ngOnInit() {
    this.apiInstance.triggerPasswordReset(sendPasswordResetEmailRequest: models.SendPasswordResetEmailRequest ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendPasswordResetEmailRequest** | [**models.SendPasswordResetEmailRequest**](SendPasswordResetEmailRequest.md)| accountId (email or username) of your user | 

### Return type

[**models.SendPasswordResetEmailResponse**](models.SendPasswordResetEmailResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

