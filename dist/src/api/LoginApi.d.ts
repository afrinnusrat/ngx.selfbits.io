import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class LoginApi {
    protected http: Http;
    configuration: Configuration;
    defaultHeaders: Headers;
    constructor(http: Http, configuration: Configuration);
    loginDirectoryDirectoryIdPost(sbClientId: string, directoryId: string, sbClientSecret?: string, userLoginRequest?: models.UserLoginRequest, extraHttpRequestParams?: any): Observable<models.UserLoginResponse>;
    loginDirectoryDirectoryIdTokenPost(sbClientId: string, directoryId: string, randomState: string, sbClientSecret?: string, extraHttpRequestParams?: any): Observable<models.UserLoginResponse>;
    loginOrganizationOrganizationIdPost(sbClientId: string, organizationId: string, sbClientSecret?: string, userLoginRequest?: models.UserLoginRequest, extraHttpRequestParams?: any): Observable<models.UserLoginResponse>;
    loginOrganizationOrganizationIdProviderProviderIdPost(sbClientId: string, organizationId: string, providerId: string, sbClientSecret?: string, userLoginRequest?: models.UserLoginRequest, extraHttpRequestParams?: any): Observable<models.UserLoginResponse>;
    loginPost(sbClientId: string, userLoginRequest: models.UserLoginRequest, sbClientSecret?: string, extraHttpRequestParams?: any): Observable<models.UserLoginResponse>;
    loginDirectoryDirectoryIdPostWithHttpInfo(sbClientId: string, directoryId: string, sbClientSecret?: string, userLoginRequest?: models.UserLoginRequest, extraHttpRequestParams?: any): Observable<Response>;
    loginDirectoryDirectoryIdTokenPostWithHttpInfo(sbClientId: string, directoryId: string, randomState: string, sbClientSecret?: string, extraHttpRequestParams?: any): Observable<Response>;
    loginOrganizationOrganizationIdPostWithHttpInfo(sbClientId: string, organizationId: string, sbClientSecret?: string, userLoginRequest?: models.UserLoginRequest, extraHttpRequestParams?: any): Observable<Response>;
    loginOrganizationOrganizationIdProviderProviderIdPostWithHttpInfo(sbClientId: string, organizationId: string, providerId: string, sbClientSecret?: string, userLoginRequest?: models.UserLoginRequest, extraHttpRequestParams?: any): Observable<Response>;
    loginPostWithHttpInfo(sbClientId: string, userLoginRequest: models.UserLoginRequest, sbClientSecret?: string, extraHttpRequestParams?: any): Observable<Response>;
}
