# JoinApi

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
[**joinOrganization**](JoinApi.md#joinOrganization) | **RequestMethod.Post** /join/organization/${organizationId} | Join a specific organization
[**joinOrganizationByDirectory**](JoinApi.md#joinOrganizationByDirectory) | **RequestMethod.Post** /join/organization/${organizationId}/directory/${directoryId} | Join with specific organization and a specific directory
[**joinOrganizationByProvider**](JoinApi.md#joinOrganizationByProvider) | **RequestMethod.Post** /join/organization/${organizationId}/provider/${providerId} | Signup with specific organization and directory that belongs to a specific provider


<a name="joinOrganization"></a>
# **joinOrganization**
> models.UserSignupResponse joinOrganization(organizationIdopts)

Join a specific organization

User join with specific organization. The login credentials will be copied from existing organization account credentials.

### Example
```typescript
import { JoinApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: JoinApi
  ) { }

  ngOnInit() {
    this.apiInstance.joinOrganization(organizationId: string invite?: string ).subscribe(
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
 **invite** | **string**| Optional invite code | [optional] 

### Return type

[**models.UserSignupResponse**](models.UserSignupResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="joinOrganizationByDirectory"></a>
# **joinOrganizationByDirectory**
> models.UserSignupResponse joinOrganizationByDirectory(organizationIddirectoryIduserSignupRequestopts)

Join with specific organization and a specific directory

User join with specific organization and a specific directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password | 

### Example
```typescript
import { JoinApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: JoinApi
  ) { }

  ngOnInit() {
    this.apiInstance.joinOrganizationByDirectory(organizationId: string directoryId: string userSignupRequest: models.UserSignupRequest invite?: string ).subscribe(
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
 **userSignupRequest** | [**models.UserSignupRequest**](UserSignupRequest.md)| User signup request | 
 **invite** | **string**| Optional invite code | [optional] 

### Return type

[**models.UserSignupResponse**](models.UserSignupResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="joinOrganizationByProvider"></a>
# **joinOrganizationByProvider**
> models.UserSignupResponse joinOrganizationByProvider(organizationIdproviderIduserSignupRequestopts)

Signup with specific organization and directory that belongs to a specific provider

User join with specific organization and a directory that belongs to a specific provider. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password | 

### Example
```typescript
import { JoinApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: JoinApi
  ) { }

  ngOnInit() {
    this.apiInstance.joinOrganizationByProvider(organizationId: string providerId: string userSignupRequest: models.UserSignupRequest invite?: string ).subscribe(
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
 **userSignupRequest** | [**models.UserSignupRequest**](UserSignupRequest.md)| User signup request | 
 **invite** | **string**| Optional invite code | [optional] 

### Return type

[**models.UserSignupResponse**](models.UserSignupResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

