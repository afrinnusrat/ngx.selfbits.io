# RolesApi

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
[**rolesBulkPost**](RolesApi.md#rolesBulkPost) | **RequestMethod.Post** /roles/bulk | 
[**rolesDelete**](RolesApi.md#rolesDelete) | **RequestMethod.Delete** /roles | 
[**rolesGet**](RolesApi.md#rolesGet) | **RequestMethod.Get** /roles | 
[**rolesPost**](RolesApi.md#rolesPost) | **RequestMethod.Post** /roles | 
[**rolesPut**](RolesApi.md#rolesPut) | **RequestMethod.Put** /roles | 
[**rolesRoleIdDelete**](RolesApi.md#rolesRoleIdDelete) | **RequestMethod.Delete** /roles/${roleId} | 
[**rolesRoleIdGet**](RolesApi.md#rolesRoleIdGet) | **RequestMethod.Get** /roles/${roleId} | 
[**rolesRoleIdPut**](RolesApi.md#rolesRoleIdPut) | **RequestMethod.Put** /roles/${roleId} | 


<a name="rolesBulkPost"></a>
# **rolesBulkPost**
> models.RoleArray rolesBulkPost(opts)



Create multiple new roles

### Example
```typescript
import { RolesApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: RolesApi
  ) { }

  ngOnInit() {
    this.apiInstance.rolesBulkPost(roles?: models.NewRoleArray ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roles** | [**models.NewRoleArray**](NewRoleArray.md)| Multiple roles | [optional] 

### Return type

[**models.RoleArray**](models.RoleArray.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="rolesDelete"></a>
# **rolesDelete**
> models.BulkDeleteResponse rolesDelete(filter)



Bulk delete existing roles

### Example
```typescript
import { RolesApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: RolesApi
  ) { }

  ngOnInit() {
    this.apiInstance.rolesDelete(filter: string ).subscribe(
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

<a name="rolesGet"></a>
# **rolesGet**
> models.RolePage rolesGet(opts)



Returns roles

### Example
```typescript
import { RolesApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: RolesApi
  ) { }

  ngOnInit() {
    this.apiInstance.rolesGet(pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
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
 **filter** | **string**| Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;} | [optional] 
 **sort** | **string**| Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 } | [optional] 
 **select** | **string**| Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 } | [optional] 

### Return type

[**models.RolePage**](models.RolePage.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="rolesPost"></a>
# **rolesPost**
> models.Role rolesPost(opts)



Create new role

### Example
```typescript
import { RolesApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: RolesApi
  ) { }

  ngOnInit() {
    this.apiInstance.rolesPost(role?: models.NewRole ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **role** | [**models.NewRole**](NewRole.md)| Your new role | [optional] 

### Return type

[**models.Role**](models.Role.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="rolesPut"></a>
# **rolesPut**
> models.BulkUpdateResponse rolesPut(filterroleBulkUpdate)



Bulk update existing roles

### Example
```typescript
import { RolesApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: RolesApi
  ) { }

  ngOnInit() {
    this.apiInstance.rolesPut(filter: string roleBulkUpdate: models.RoleBulkUpdate ).subscribe(
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
 **roleBulkUpdate** | [**models.RoleBulkUpdate**](RoleBulkUpdate.md)| Use filter to find the roles and do a bulk update | 

### Return type

[**models.BulkUpdateResponse**](models.BulkUpdateResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="rolesRoleIdDelete"></a>
# **rolesRoleIdDelete**
> rolesRoleIdDelete(roleId)



delete existing role

### Example
```typescript
import { RolesApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: RolesApi
  ) { }

  ngOnInit() {
    this.apiInstance.rolesRoleIdDelete(roleId: string ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleId** | **string**| The role identifier | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="rolesRoleIdGet"></a>
# **rolesRoleIdGet**
> models.Role rolesRoleIdGet(roleId)



Get one existing role

### Example
```typescript
import { RolesApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: RolesApi
  ) { }

  ngOnInit() {
    this.apiInstance.rolesRoleIdGet(roleId: string ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleId** | **string**| The role identifier | 

### Return type

[**models.Role**](models.Role.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="rolesRoleIdPut"></a>
# **rolesRoleIdPut**
> models.Role rolesRoleIdPut(roleIdupdatedRole)



update existing role

### Example
```typescript
import { RolesApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: RolesApi
  ) { }

  ngOnInit() {
    this.apiInstance.rolesRoleIdPut(roleId: string updatedRole: models.RoleUpdate ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleId** | **string**| The user identifier | 
 **updatedRole** | [**models.RoleUpdate**](RoleUpdate.md)| updated role | 

### Return type

[**models.Role**](models.Role.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

