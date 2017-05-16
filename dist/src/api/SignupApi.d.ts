import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class SignupApi {
    protected http: Http;
    configuration: Configuration;
    defaultHeaders: Headers;
    constructor(http: Http, configuration: Configuration);
    signupDirectoryDirectoryIdInteractivePost(sbClientId: string, directoryId: string, randomState: string, sbClientSecret?: string, extraHttpRequestParams?: any): Observable<models.UserSignupResponse>;
    signupDirectoryDirectoryIdPost(sbClientId: string, directoryId: string, signupRequest: models.UserSignupRequest, sbClientSecret?: string, invite?: string, returnCredentials?: boolean, extraHttpRequestParams?: any): Observable<models.UserSignupResponse>;
    signupDirectoryDirectoryIdTokenPost(sbClientId: string, directoryId: string, randomState: string, sbClientSecret?: string, extraHttpRequestParams?: any): Observable<models.UserSignupResponse>;
    signupOrganizationOrganizationIdDirectoryDirectoryIdPost(sbClientId: string, organizationId: string, directoryId: string, signupRequest: models.UserSignupRequest, sbClientSecret?: string, invite?: string, returnCredentials?: boolean, extraHttpRequestParams?: any): Observable<models.UserSignupResponse>;
    signupOrganizationOrganizationIdPost(sbClientId: string, organizationId: string, signupRequest: models.UserSignupRequest, sbClientSecret?: string, invite?: string, returnCredentials?: boolean, extraHttpRequestParams?: any): Observable<models.UserSignupResponse>;
    signupOrganizationOrganizationIdProviderProviderIdPost(organizationId: string, directoryId: string, sbClientId: string, sbClientSecret?: string, invite?: string, returnCredentials?: boolean, signupRequest?: models.UserSignupRequest, extraHttpRequestParams?: any): Observable<models.UserSignupResponse>;
    signupPost(sbClientId: string, profile: models.UserSignupRequest, sbClientSecret?: string, invite?: string, returnCredentials?: boolean, extraHttpRequestParams?: any): Observable<models.UserSignupResponse>;
    signupProviderProviderIdPost(sbClientId: string, providerId: string, signupRequest: models.UserSignupRequest, sbClientSecret?: string, invite?: string, returnCredentials?: boolean, extraHttpRequestParams?: any): Observable<models.UserSignupResponse>;
    signupDirectoryDirectoryIdInteractivePostWithHttpInfo(sbClientId: string, directoryId: string, randomState: string, sbClientSecret?: string, extraHttpRequestParams?: any): Observable<Response>;
    signupDirectoryDirectoryIdPostWithHttpInfo(sbClientId: string, directoryId: string, signupRequest: models.UserSignupRequest, sbClientSecret?: string, invite?: string, returnCredentials?: boolean, extraHttpRequestParams?: any): Observable<Response>;
    signupDirectoryDirectoryIdTokenPostWithHttpInfo(sbClientId: string, directoryId: string, randomState: string, sbClientSecret?: string, extraHttpRequestParams?: any): Observable<Response>;
    signupOrganizationOrganizationIdDirectoryDirectoryIdPostWithHttpInfo(sbClientId: string, organizationId: string, directoryId: string, signupRequest: models.UserSignupRequest, sbClientSecret?: string, invite?: string, returnCredentials?: boolean, extraHttpRequestParams?: any): Observable<Response>;
    signupOrganizationOrganizationIdPostWithHttpInfo(sbClientId: string, organizationId: string, signupRequest: models.UserSignupRequest, sbClientSecret?: string, invite?: string, returnCredentials?: boolean, extraHttpRequestParams?: any): Observable<Response>;
    signupOrganizationOrganizationIdProviderProviderIdPostWithHttpInfo(organizationId: string, directoryId: string, sbClientId: string, sbClientSecret?: string, invite?: string, returnCredentials?: boolean, signupRequest?: models.UserSignupRequest, extraHttpRequestParams?: any): Observable<Response>;
    signupPostWithHttpInfo(sbClientId: string, profile: models.UserSignupRequest, sbClientSecret?: string, invite?: string, returnCredentials?: boolean, extraHttpRequestParams?: any): Observable<Response>;
    signupProviderProviderIdPostWithHttpInfo(sbClientId: string, providerId: string, signupRequest: models.UserSignupRequest, sbClientSecret?: string, invite?: string, returnCredentials?: boolean, extraHttpRequestParams?: any): Observable<Response>;
}
