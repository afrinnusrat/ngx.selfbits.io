import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class AuthApi {
    protected http: Http;
    configuration: Configuration;
    defaultHeaders: Headers;
    sbClientId: string;
    sbClientSecret: string;
    constructor(http: Http, configuration: Configuration);
    /**
     * User login with default organization and directory
     * User login with default organization and directory
     * @param userLoginRequest User login request credentials
     */
    login(userLoginRequest: models.UserLoginRequest, extraHttpRequestParams?: any): Observable<models.UserLoginResponse>;
    /**
     * User login with a specific organization and login provider
     * User login with specific directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username | password |
     * @param directoryId the directory of the new user
     * @param userLoginRequest User login request
     */
    loginByDirectory(directoryId: string, userLoginRequest?: models.UserLoginRequest, extraHttpRequestParams?: any): Observable<models.UserLoginResponse>;
    /**
     * Social directory login with token
     * User login with social directory and serverside oauth flow. The attributes that are used as credentials to login the user depend on the directory type.
     * @param directoryId the directory of the new user
     * @param randomState random state that was provided in the interactive oauth flow
     */
    loginByDirectoryAndToken(directoryId: string, randomState: string, extraHttpRequestParams?: any): Observable<models.UserLoginResponse>;
    /**
     * User login with a specific organization and the default directory
     * User login with a specific organization and the default directory
     * @param organizationId the organization id of the login user
     * @param userLoginRequest User login request
     */
    loginByOrganization(organizationId: string, userLoginRequest?: models.UserLoginRequest, extraHttpRequestParams?: any): Observable<models.UserLoginResponse>;
    /**
     * User login with a specific organization and login provider
     * User login with a specific organization and login provider
     * @param organizationId the organization id of the login user
     * @param providerId the provider id of the target directory
     * @param userLoginRequest User login request
     */
    loginByOrganizationAndProvider(organizationId: string, providerId: string, userLoginRequest?: models.UserLoginRequest, extraHttpRequestParams?: any): Observable<models.UserLoginResponse>;
    /**
     * password reset
     * reset the password of a user
     * @param resetPasswordRequest The password reset request
     */
    resetPasswordRequest(resetPasswordRequest: models.ResetPasswordRequest, extraHttpRequestParams?: any): Observable<models.ResetPasswordResponse>;
    /**
     * trigger password reset by email
     * request an email to reset a password of a user
     * @param sendPasswordResetEmailRequest verified email address of the user
     */
    resetPasswordTriggerByEmail(sendPasswordResetEmailRequest: models.SendPasswordResetEmailRequest, extraHttpRequestParams?: any): Observable<models.SendPasswordResetEmailResponse>;
    /**
     * Signup with default organization and its default directory
     * Signup with default organization and its default directory
     * @param profile New user&#39;s profile
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     */
    signup(profile: models.UserSignupRequest, invite?: string, returnCredentials?: boolean, extraHttpRequestParams?: any): Observable<models.UserSignupResponse>;
    /**
     * Signup with specific directory
     * User signup with specific directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password |
     * @param directoryId the directory of the new user
     * @param signupRequest User signup request
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     */
    signupByDirectory(directoryId: string, signupRequest: models.UserSignupRequest, invite?: string, returnCredentials?: boolean, extraHttpRequestParams?: any): Observable<models.UserSignupResponse>;
    /**
     * Signup with social directory using a token
     * User signup with social directory and serverside oauth flow. The attributes that are used as credentials to signup the user depend on the directory type:
     * @param directoryId the directory of the new user
     * @param randomState random state that was provided in the interactive oauth flow
     */
    signupByDirectoryAndToken(directoryId: string, randomState: string, extraHttpRequestParams?: any): Observable<models.UserSignupResponse>;
    /**
     *
     * Interactive POST endpoint for a user signup with email/pw or username/pw directory. The attributes that are used as credentials to signup the user depend on the directory type
     * @param directoryId the directory of the new user
     * @param randomState random state that was provided in the interactive oauth flow
     */
    signupByDirectoryInteractive(directoryId: string, randomState: string, extraHttpRequestParams?: any): Observable<models.UserSignupResponse>;
    /**
     * Signup with specific organization and its default directory
     * User signup with specific organization and its default directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password |
     * @param organizationId the organization of the new user
     * @param signupRequest User signup request
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     */
    signupByOrganization(organizationId: string, signupRequest: models.UserSignupRequest, invite?: string, returnCredentials?: boolean, extraHttpRequestParams?: any): Observable<models.UserSignupResponse>;
    /**
     * Signup with specific organization and a specific directory
     * User signup with specific organization and a specific directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password |
     * @param organizationId the organization of the new user
     * @param directoryId the directory of the new user
     * @param signupRequest User signup request
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     */
    signupByOrganizationAndDirectory(organizationId: string, directoryId: string, signupRequest: models.UserSignupRequest, invite?: string, returnCredentials?: boolean, extraHttpRequestParams?: any): Observable<models.UserSignupResponse>;
    /**
     * Signup with specific organization and directory that belongs to a specific provider
     * User signup with specific organization and a directory that belongs to a specific provider. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password |
     * @param organizationId the organization of the new user
     * @param providerId the target provider
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     * @param signupRequest User signup request
     */
    signupByOrganizationAndProvider(organizationId: string, providerId: string, invite?: string, returnCredentials?: boolean, signupRequest?: models.UserSignupRequest, extraHttpRequestParams?: any): Observable<models.UserSignupResponse>;
    /**
     * Signup with default organization and a directory depending on the specified provider
     * User signup with the default organization and a directory that belongs to the specific provider. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password |
     * @param providerId the provider of a directory of the new user
     * @param signupRequest User signup request
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     */
    signupByProvider(providerId: string, signupRequest: models.UserSignupRequest, invite?: string, returnCredentials?: boolean, extraHttpRequestParams?: any): Observable<models.UserSignupResponse>;
    /**
     * User login with default organization and directory
     * User login with default organization and directory
     * @param userLoginRequest User login request credentials
     */
    loginWithHttpInfo(userLoginRequest: models.UserLoginRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * User login with a specific organization and login provider
     * User login with specific directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username | password |
     * @param directoryId the directory of the new user
     * @param userLoginRequest User login request
     */
    loginByDirectoryWithHttpInfo(directoryId: string, userLoginRequest?: models.UserLoginRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Social directory login with token
     * User login with social directory and serverside oauth flow. The attributes that are used as credentials to login the user depend on the directory type.
     * @param directoryId the directory of the new user
     * @param randomState random state that was provided in the interactive oauth flow
     */
    loginByDirectoryAndTokenWithHttpInfo(directoryId: string, randomState: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * User login with a specific organization and the default directory
     * User login with a specific organization and the default directory
     * @param organizationId the organization id of the login user
     * @param userLoginRequest User login request
     */
    loginByOrganizationWithHttpInfo(organizationId: string, userLoginRequest?: models.UserLoginRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * User login with a specific organization and login provider
     * User login with a specific organization and login provider
     * @param organizationId the organization id of the login user
     * @param providerId the provider id of the target directory
     * @param userLoginRequest User login request
     */
    loginByOrganizationAndProviderWithHttpInfo(organizationId: string, providerId: string, userLoginRequest?: models.UserLoginRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * password reset
     * reset the password of a user
     * @param resetPasswordRequest The password reset request
     */
    resetPasswordRequestWithHttpInfo(resetPasswordRequest: models.ResetPasswordRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * trigger password reset by email
     * request an email to reset a password of a user
     * @param sendPasswordResetEmailRequest verified email address of the user
     */
    resetPasswordTriggerByEmailWithHttpInfo(sendPasswordResetEmailRequest: models.SendPasswordResetEmailRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Signup with default organization and its default directory
     * Signup with default organization and its default directory
     * @param profile New user&#39;s profile
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     */
    signupWithHttpInfo(profile: models.UserSignupRequest, invite?: string, returnCredentials?: boolean, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Signup with specific directory
     * User signup with specific directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password |
     * @param directoryId the directory of the new user
     * @param signupRequest User signup request
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     */
    signupByDirectoryWithHttpInfo(directoryId: string, signupRequest: models.UserSignupRequest, invite?: string, returnCredentials?: boolean, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Signup with social directory using a token
     * User signup with social directory and serverside oauth flow. The attributes that are used as credentials to signup the user depend on the directory type:
     * @param directoryId the directory of the new user
     * @param randomState random state that was provided in the interactive oauth flow
     */
    signupByDirectoryAndTokenWithHttpInfo(directoryId: string, randomState: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Interactive POST endpoint for a user signup with email/pw or username/pw directory. The attributes that are used as credentials to signup the user depend on the directory type
     * @param directoryId the directory of the new user
     * @param randomState random state that was provided in the interactive oauth flow
     */
    signupByDirectoryInteractiveWithHttpInfo(directoryId: string, randomState: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Signup with specific organization and its default directory
     * User signup with specific organization and its default directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password |
     * @param organizationId the organization of the new user
     * @param signupRequest User signup request
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     */
    signupByOrganizationWithHttpInfo(organizationId: string, signupRequest: models.UserSignupRequest, invite?: string, returnCredentials?: boolean, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Signup with specific organization and a specific directory
     * User signup with specific organization and a specific directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password |
     * @param organizationId the organization of the new user
     * @param directoryId the directory of the new user
     * @param signupRequest User signup request
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     */
    signupByOrganizationAndDirectoryWithHttpInfo(organizationId: string, directoryId: string, signupRequest: models.UserSignupRequest, invite?: string, returnCredentials?: boolean, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Signup with specific organization and directory that belongs to a specific provider
     * User signup with specific organization and a directory that belongs to a specific provider. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password |
     * @param organizationId the organization of the new user
     * @param providerId the target provider
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     * @param signupRequest User signup request
     */
    signupByOrganizationAndProviderWithHttpInfo(organizationId: string, providerId: string, invite?: string, returnCredentials?: boolean, signupRequest?: models.UserSignupRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Signup with default organization and a directory depending on the specified provider
     * User signup with the default organization and a directory that belongs to the specific provider. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password |
     * @param providerId the provider of a directory of the new user
     * @param signupRequest User signup request
     * @param invite Optional invite code
     * @param returnCredentials if true, return the credentials in the signup response
     */
    signupByProviderWithHttpInfo(providerId: string, signupRequest: models.UserSignupRequest, invite?: string, returnCredentials?: boolean, extraHttpRequestParams?: any): Observable<Response>;
}
