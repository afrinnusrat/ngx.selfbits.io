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
    /**
     *
     * Interactive POST endpoint for a user signup with email/pw or username/pw directory. The attributes that are used as credentials to signup the user depend on the directory type:
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param randomState random state that was provided in the interactive oauth flow
     * @param sbClientSecret Your application client secret
     */
    signupDirectoryDirectoryIdInteractivePost(sbClientId: string, directoryId: string, randomState: string, sbClientSecret?: string, extraHttpRequestParams?: any): Observable<models.UserSignupResponse>;
    /**
     * Signup with specific directory
     * User signup with specific directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password |
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param signupRequest User signup request
     * @param sbClientSecret Your application client secret
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     */
    signupDirectoryDirectoryIdPost(sbClientId: string, directoryId: string, signupRequest: models.UserSignupRequest, sbClientSecret?: string, invite?: string, returnCredentials?: boolean, extraHttpRequestParams?: any): Observable<models.UserSignupResponse>;
    /**
     *
     * User signup with social directory and serverside oauth flow. The attributes that are used as credentials to signup the user depend on the directory type:
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param randomState random state that was provided in the interactive oauth flow
     * @param sbClientSecret Your application client secret
     */
    signupDirectoryDirectoryIdTokenPost(sbClientId: string, directoryId: string, randomState: string, sbClientSecret?: string, extraHttpRequestParams?: any): Observable<models.UserSignupResponse>;
    /**
     * Signup with specific organization and a specific directory
     * User signup with specific organization and a specific directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password |
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param directoryId the directory of the new user
     * @param signupRequest User signup request
     * @param sbClientSecret Your application client secret
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     */
    signupOrganizationOrganizationIdDirectoryDirectoryIdPost(sbClientId: string, organizationId: string, directoryId: string, signupRequest: models.UserSignupRequest, sbClientSecret?: string, invite?: string, returnCredentials?: boolean, extraHttpRequestParams?: any): Observable<models.UserSignupResponse>;
    /**
     * Signup with specific organization and its default directory
     * User signup with specific organization and its default directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password |
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param signupRequest User signup request
     * @param sbClientSecret Your application client secret
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     */
    signupOrganizationOrganizationIdPost(sbClientId: string, organizationId: string, signupRequest: models.UserSignupRequest, sbClientSecret?: string, invite?: string, returnCredentials?: boolean, extraHttpRequestParams?: any): Observable<models.UserSignupResponse>;
    /**
     * Signup with specific organization and directory that belongs to a specific provider
     * User signup with specific organization and a directory that belongs to a specific provider. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password |
     * @param organizationId the organization of the new user
     * @param directoryId the directory of the new user
     * @param sbClientId Your application client id
     * @param sbClientSecret Your application client secret
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     * @param signupRequest User signup request
     */
    signupOrganizationOrganizationIdProviderProviderIdPost(organizationId: string, directoryId: string, sbClientId: string, sbClientSecret?: string, invite?: string, returnCredentials?: boolean, signupRequest?: models.UserSignupRequest, extraHttpRequestParams?: any): Observable<models.UserSignupResponse>;
    /**
     * Signup with default organization and its default directory
     * User signup with default directory
     * @param sbClientId Your application client id
     * @param profile New user&#39;s profile
     * @param sbClientSecret Your application client secret
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     */
    signupPost(sbClientId: string, profile: models.UserSignupRequest, sbClientSecret?: string, invite?: string, returnCredentials?: boolean, extraHttpRequestParams?: any): Observable<models.UserSignupResponse>;
    /**
     * Signup with default organization and a directory depending on the specified provider
     * User signup with the default organization and a directory that belongs to the specific provider. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password |
     * @param sbClientId Your application client id
     * @param providerId the provider of a directory of the new user
     * @param signupRequest User signup request
     * @param sbClientSecret Your application client secret
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     */
    signupProviderProviderIdPost(sbClientId: string, providerId: string, signupRequest: models.UserSignupRequest, sbClientSecret?: string, invite?: string, returnCredentials?: boolean, extraHttpRequestParams?: any): Observable<models.UserSignupResponse>;
    /**
     *
     * Interactive POST endpoint for a user signup with email/pw or username/pw directory. The attributes that are used as credentials to signup the user depend on the directory type:
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param randomState random state that was provided in the interactive oauth flow
     * @param sbClientSecret Your application client secret
     */
    signupDirectoryDirectoryIdInteractivePostWithHttpInfo(sbClientId: string, directoryId: string, randomState: string, sbClientSecret?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Signup with specific directory
     * User signup with specific directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password |
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param signupRequest User signup request
     * @param sbClientSecret Your application client secret
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     */
    signupDirectoryDirectoryIdPostWithHttpInfo(sbClientId: string, directoryId: string, signupRequest: models.UserSignupRequest, sbClientSecret?: string, invite?: string, returnCredentials?: boolean, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * User signup with social directory and serverside oauth flow. The attributes that are used as credentials to signup the user depend on the directory type:
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param randomState random state that was provided in the interactive oauth flow
     * @param sbClientSecret Your application client secret
     */
    signupDirectoryDirectoryIdTokenPostWithHttpInfo(sbClientId: string, directoryId: string, randomState: string, sbClientSecret?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Signup with specific organization and a specific directory
     * User signup with specific organization and a specific directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password |
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param directoryId the directory of the new user
     * @param signupRequest User signup request
     * @param sbClientSecret Your application client secret
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     */
    signupOrganizationOrganizationIdDirectoryDirectoryIdPostWithHttpInfo(sbClientId: string, organizationId: string, directoryId: string, signupRequest: models.UserSignupRequest, sbClientSecret?: string, invite?: string, returnCredentials?: boolean, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Signup with specific organization and its default directory
     * User signup with specific organization and its default directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password |
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param signupRequest User signup request
     * @param sbClientSecret Your application client secret
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     */
    signupOrganizationOrganizationIdPostWithHttpInfo(sbClientId: string, organizationId: string, signupRequest: models.UserSignupRequest, sbClientSecret?: string, invite?: string, returnCredentials?: boolean, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Signup with specific organization and directory that belongs to a specific provider
     * User signup with specific organization and a directory that belongs to a specific provider. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password |
     * @param organizationId the organization of the new user
     * @param directoryId the directory of the new user
     * @param sbClientId Your application client id
     * @param sbClientSecret Your application client secret
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     * @param signupRequest User signup request
     */
    signupOrganizationOrganizationIdProviderProviderIdPostWithHttpInfo(organizationId: string, directoryId: string, sbClientId: string, sbClientSecret?: string, invite?: string, returnCredentials?: boolean, signupRequest?: models.UserSignupRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Signup with default organization and its default directory
     * User signup with default directory
     * @param sbClientId Your application client id
     * @param profile New user&#39;s profile
     * @param sbClientSecret Your application client secret
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     */
    signupPostWithHttpInfo(sbClientId: string, profile: models.UserSignupRequest, sbClientSecret?: string, invite?: string, returnCredentials?: boolean, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Signup with default organization and a directory depending on the specified provider
     * User signup with the default organization and a directory that belongs to the specific provider. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password |
     * @param sbClientId Your application client id
     * @param providerId the provider of a directory of the new user
     * @param signupRequest User signup request
     * @param sbClientSecret Your application client secret
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     */
    signupProviderProviderIdPostWithHttpInfo(sbClientId: string, providerId: string, signupRequest: models.UserSignupRequest, sbClientSecret?: string, invite?: string, returnCredentials?: boolean, extraHttpRequestParams?: any): Observable<Response>;
}
