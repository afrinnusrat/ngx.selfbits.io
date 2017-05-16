# EmailVerificationApi

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
[**emailsVerificationPost**](EmailVerificationApi.md#emailsVerificationPost) | **RequestMethod.Post** /emails/verification | 


<a name="emailsVerificationPost"></a>
# **emailsVerificationPost**
> models.SendVerificationEmailResponse emailsVerificationPost(sendVerificationEmailRequest)



Trigger email verification

### Example
```typescript
import { EmailVerificationApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: EmailVerificationApi
  ) { }

  ngOnInit() {
    this.apiInstance.emailsVerificationPost(sendVerificationEmailRequest: models.SendVerificationEmailRequest ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendVerificationEmailRequest** | [**models.SendVerificationEmailRequest**](SendVerificationEmailRequest.md)| Email you want to verifiy | 

### Return type

[**models.SendVerificationEmailResponse**](models.SendVerificationEmailResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

