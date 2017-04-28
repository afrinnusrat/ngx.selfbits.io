# UsersApi

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
[**usersBulkPost**](UsersApi.md#usersBulkPost) | **RequestMethod.Post** /users/bulk | 
[**usersDelete**](UsersApi.md#usersDelete) | **RequestMethod.Delete** /users | 
[**usersGet**](UsersApi.md#usersGet) | **RequestMethod.Get** /users | 
[**usersPost**](UsersApi.md#usersPost) | **RequestMethod.Post** /users | 
[**usersPut**](UsersApi.md#usersPut) | **RequestMethod.Put** /users | 
[**usersUserIdDelete**](UsersApi.md#usersUserIdDelete) | **RequestMethod.Delete** /users/${userId} | 
[**usersUserIdGet**](UsersApi.md#usersUserIdGet) | **RequestMethod.Get** /users/${userId} | 
[**usersUserIdPut**](UsersApi.md#usersUserIdPut) | **RequestMethod.Put** /users/${userId} | 


<a name="usersBulkPost"></a>
# **usersBulkPost**
> models.UserArray usersBulkPost(opts)



Create multiple new users

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
  ) { }

  ngOnInit() {
    this.apiInstance.usersBulkPost(users?: models.NewUserArray ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **users** | [**models.NewUserArray**](NewUserArray.md)| Multiple users | [optional] 

### Return type

[**models.UserArray**](models.UserArray.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersDelete"></a>
# **usersDelete**
> models.BulkDeleteResponse usersDelete(filter)



Bulk delete existing users

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
  ) { }

  ngOnInit() {
    this.apiInstance.usersDelete(filter: string ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}} | 

### Return type

[**models.BulkDeleteResponse**](models.BulkDeleteResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersGet"></a>
# **usersGet**
> models.UserPage usersGet(opts)



Returns users

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
  ) { }

  ngOnInit() {
    this.apiInstance.usersGet(pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **number**| Items per page | [optional] [default to 20]
 **pageNumber** | **number**| The page index (starting from 1) | [optional] [default to 1]
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: \&quot;john doe\&quot;, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}} | [optional] 
 **sort** | **string**| Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1, \&quot;name\&quot; : 1 } | [optional] 
 **select** | **string**| Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 } | [optional] 

### Return type

[**models.UserPage**](models.UserPage.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersPost"></a>
# **usersPost**
> models.User usersPost(opts)



Create new user

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
  ) { }

  ngOnInit() {
    this.apiInstance.usersPost(user?: models.NewUser ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**models.NewUser**](NewUser.md)| Your new user | [optional] 

### Return type

[**models.User**](models.User.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersPut"></a>
# **usersPut**
> models.BulkUpdateResponse usersPut(filteruserBulkUpdate)



Bulk update existing users

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
  ) { }

  ngOnInit() {
    this.apiInstance.usersPut(filter: string userBulkUpdate: models.UserBulkUpdate ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;} | 
 **userBulkUpdate** | [**models.UserBulkUpdate**](UserBulkUpdate.md)| Use filter to find the users and do a bulk update | 

### Return type

[**models.BulkUpdateResponse**](models.BulkUpdateResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersUserIdDelete"></a>
# **usersUserIdDelete**
> usersUserIdDelete(userId)



delete existing user

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
  ) { }

  ngOnInit() {
    this.apiInstance.usersUserIdDelete(userId: string ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string**| The user identifier | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersUserIdGet"></a>
# **usersUserIdGet**
> models.User usersUserIdGet(userId)



Get one existing users

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
  ) { }

  ngOnInit() {
    this.apiInstance.usersUserIdGet(userId: string ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string**| The user identifier | 

### Return type

[**models.User**](models.User.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersUserIdPut"></a>
# **usersUserIdPut**
> models.User usersUserIdPut(userIdupdatedUser)



update existing user

### Example
```typescript
import { UsersApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: UsersApi
  ) { }

  ngOnInit() {
    this.apiInstance.usersUserIdPut(userId: string updatedUser: models.UserUpdate ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **string**| The user identifier | 
 **updatedUser** | [**models.UserUpdate**](UserUpdate.md)| updated user | 

### Return type

[**models.User**](models.User.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

