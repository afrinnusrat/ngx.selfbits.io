# ActionsApi

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

All URIs are relative to *https://<your-tenant>.apps.selfbits.io/api/v2/<your-tenant>/apps/<your-app>*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actionsActionIdDelete**](ActionsApi.md#actionsActionIdDelete) | **RequestMethod.Delete** /actions/${actionId} | 
[**actionsActionIdExecPost**](ActionsApi.md#actionsActionIdExecPost) | **RequestMethod.Post** /actions/${actionId}/exec | 
[**actionsActionIdGet**](ActionsApi.md#actionsActionIdGet) | **RequestMethod.Get** /actions/${actionId} | 
[**actionsActionIdPut**](ActionsApi.md#actionsActionIdPut) | **RequestMethod.Put** /actions/${actionId} | 
[**actionsBulkPost**](ActionsApi.md#actionsBulkPost) | **RequestMethod.Post** /actions/bulk | 
[**actionsDelete**](ActionsApi.md#actionsDelete) | **RequestMethod.Delete** /actions | 
[**actionsGet**](ActionsApi.md#actionsGet) | **RequestMethod.Get** /actions | 
[**actionsPost**](ActionsApi.md#actionsPost) | **RequestMethod.Post** /actions | 
[**actionsPut**](ActionsApi.md#actionsPut) | **RequestMethod.Put** /actions | 


<a name="actionsActionIdDelete"></a>
# **actionsActionIdDelete**
> actionsActionIdDelete(actionId)



delete existing action

### Example
```typescript
import { ActionsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: ActionsApi
  ) { }

  ngOnInit() {
    this.apiInstance.actionsActionIdDelete(actionId: string ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **actionId** | **string**| The action identifier | 

### Return type

null (empty response body)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="actionsActionIdExecPost"></a>
# **actionsActionIdExecPost**
> models.ActionExecutionResponse actionsActionIdExecPost(actionIdopts)



Execute action. If the action code throws errors, they are caught and information is provided in the payload with status code 200.

### Example
```typescript
import { ActionsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: ActionsApi
  ) { }

  ngOnInit() {
    this.apiInstance.actionsActionIdExecPost(actionId: string payload?: models.ActionExecutionRequestPayload ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **actionId** | **string**| The action identifier | 
 **payload** | [**models.ActionExecutionRequestPayload**](ActionExecutionRequestPayload.md)| Execution payload | [optional] 

### Return type

[**models.ActionExecutionResponse**](models.ActionExecutionResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="actionsActionIdGet"></a>
# **actionsActionIdGet**
> models.Action actionsActionIdGet(actionId)



Get one existing action

### Example
```typescript
import { ActionsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: ActionsApi
  ) { }

  ngOnInit() {
    this.apiInstance.actionsActionIdGet(actionId: string ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **actionId** | **string**| The action identifier | 

### Return type

[**models.Action**](models.Action.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="actionsActionIdPut"></a>
# **actionsActionIdPut**
> models.Action actionsActionIdPut(actionIdupdatedAction)



update existing action

### Example
```typescript
import { ActionsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: ActionsApi
  ) { }

  ngOnInit() {
    this.apiInstance.actionsActionIdPut(actionId: string updatedAction: models.ActionUpdate ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **actionId** | **string**| The user identifier | 
 **updatedAction** | [**models.ActionUpdate**](ActionUpdate.md)| updated action | 

### Return type

[**models.Action**](models.Action.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="actionsBulkPost"></a>
# **actionsBulkPost**
> models.ActionArray actionsBulkPost(opts)



Create multiple new actions

### Example
```typescript
import { ActionsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: ActionsApi
  ) { }

  ngOnInit() {
    this.apiInstance.actionsBulkPost(actions?: models.NewActionArray ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **actions** | [**models.NewActionArray**](NewActionArray.md)| Multiple actions | [optional] 

### Return type

[**models.ActionArray**](models.ActionArray.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="actionsDelete"></a>
# **actionsDelete**
> models.BulkDeleteResponse actionsDelete(filter)



Bulk delete existing actions

### Example
```typescript
import { ActionsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: ActionsApi
  ) { }

  ngOnInit() {
    this.apiInstance.actionsDelete(filter: string ).subscribe(
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

<a name="actionsGet"></a>
# **actionsGet**
> models.ActionPage actionsGet(opts)



Returns actions

### Example
```typescript
import { ActionsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: ActionsApi
  ) { }

  ngOnInit() {
    this.apiInstance.actionsGet(pageSize?: number pageNumber?: number filter?: string sort?: string select?: string ).subscribe(
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

[**models.ActionPage**](models.ActionPage.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="actionsPost"></a>
# **actionsPost**
> models.Action actionsPost(opts)



Create new action

### Example
```typescript
import { ActionsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: ActionsApi
  ) { }

  ngOnInit() {
    this.apiInstance.actionsPost(action?: models.NewAction ).subscribe(
      data => console.log(res),
      err => console.log(err)
    )
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **action** | [**models.NewAction**](NewAction.md)| Your new action | [optional] 

### Return type

[**models.Action**](models.Action.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="actionsPut"></a>
# **actionsPut**
> models.BulkUpdateResponse actionsPut(filteractionBulkUpdate)



Bulk update existing actions

### Example
```typescript
import { ActionsApi } from 'ngx.selfbits.io';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  constructor(
    private apiInstance: ActionsApi
  ) { }

  ngOnInit() {
    this.apiInstance.actionsPut(filter: string actionBulkUpdate: models.ActionBulkUpdate ).subscribe(
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
 **actionBulkUpdate** | [**models.ActionBulkUpdate**](ActionBulkUpdate.md)| Use filter to find the actions and do a bulk update | 

### Return type

[**models.BulkUpdateResponse**](models.BulkUpdateResponse.md)

### Authorization

[ConsumerSecurity](../README.md#ConsumerSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

