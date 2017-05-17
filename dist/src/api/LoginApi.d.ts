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
    /**
     *
     * User login with specific directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username | password |
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param sbClientSecret Your application client secret
     * @param userLoginRequest User login request
     */
    loginDirectoryDirectoryIdPost(sbClientId: string, directoryId: string, sbClientSecret?: string, userLoginRequest?: models.UserLoginRequest, extraHttpRequestParams?: any): Observable<models.UserLoginResponse>;
    /**
     *
     * User login with social directory and serverside oauth flow. The attributes that are used as credentials to login the user depend on the directory type:
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param randomState random state that was provided in the interactive oauth flow
     * @param sbClientSecret Your application client secret
     */
    loginDirectoryDirectoryIdTokenPost(sbClientId: string, directoryId: string, randomState: string, sbClientSecret?: string, extraHttpRequestParams?: any): Observable<models.UserLoginResponse>;
    /**
     *
     * User login with a specific organization
     * @param sbClientId Your application client id
     * @param organizationId the organization id of the login user
     * @param sbClientSecret Your application client secret
     * @param userLoginRequest User login request
     */
    loginOrganizationOrganizationIdPost(sbClientId: string, organizationId: string, sbClientSecret?: string, userLoginRequest?: models.UserLoginRequest, extraHttpRequestParams?: any): Observable<models.UserLoginResponse>;
    /**
     *
     * User login with a specific organization
     * @param sbClientId Your application client id
     * @param organizationId the organization id of the login user
     * @param providerId the provider id of the target directory
     * @param sbClientSecret Your application client secret
     * @param userLoginRequest User login request
     */
    loginOrganizationOrganizationIdProviderProviderIdPost(sbClientId: string, organizationId: string, providerId: string, sbClientSecret?: string, userLoginRequest?: models.UserLoginRequest, extraHttpRequestParams?: any): Observable<models.UserLoginResponse>;
    /**
     *
     * User login with default directory
     * @param sbClientId Your application client id
     * @param userLoginRequest User login request credentials
     * @param sbClientSecret Your application client secret
     */
    loginPost(sbClientId: string, userLoginRequest: models.UserLoginRequest, sbClientSecret?: string, extraHttpRequestParams?: any): Observable<models.UserLoginResponse>;
    /**
     *
     * User login with specific directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username | password |
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param sbClientSecret Your application client secret
     * @param userLoginRequest User login request
     */
    loginDirectoryDirectoryIdPostWithHttpInfo(sbClientId: string, directoryId: string, sbClientSecret?: string, userLoginRequest?: models.UserLoginRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * User login with social directory and serverside oauth flow. The attributes that are used as credentials to login the user depend on the directory type:
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param randomState random state that was provided in the interactive oauth flow
     * @param sbClientSecret Your application client secret
     */
    loginDirectoryDirectoryIdTokenPostWithHttpInfo(sbClientId: string, directoryId: string, randomState: string, sbClientSecret?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * User login with a specific organization
     * @param sbClientId Your application client id
     * @param organizationId the organization id of the login user
     * @param sbClientSecret Your application client secret
     * @param userLoginRequest User login request
     */
    loginOrganizationOrganizationIdPostWithHttpInfo(sbClientId: string, organizationId: string, sbClientSecret?: string, userLoginRequest?: models.UserLoginRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * User login with a specific organization
     * @param sbClientId Your application client id
     * @param organizationId the organization id of the login user
     * @param providerId the provider id of the target directory
     * @param sbClientSecret Your application client secret
     * @param userLoginRequest User login request
     */
    loginOrganizationOrganizationIdProviderProviderIdPostWithHttpInfo(sbClientId: string, organizationId: string, providerId: string, sbClientSecret?: string, userLoginRequest?: models.UserLoginRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * User login with default directory
     * @param sbClientId Your application client id
     * @param userLoginRequest User login request credentials
     * @param sbClientSecret Your application client secret
     */
    loginPostWithHttpInfo(sbClientId: string, userLoginRequest: models.UserLoginRequest, sbClientSecret?: string, extraHttpRequestParams?: any): Observable<Response>;
}
