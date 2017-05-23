import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Configuration } from '../configuration';
export declare class InteractiveViewsApi {
    protected http: Http;
    configuration: Configuration;
    defaultHeaders: Headers;
    constructor(http: Http, configuration: Configuration);
    /**
     * Interactive user authentication with external provider
     * Interactive user authentication with external authentication providers for a specific directory. If the authentication is successful, the client is redirected to /auth/provider/[providerId]/callback.
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     * @param invite Optional invite code
     */
    authDirectoryDirectoryIdGet(sbClientId: string, directoryId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Interactive user authentication using specific organization and directory
     * Interactive user authentication with external authentication provider. If the authentication is successful, the client is redirected to /auth/provider/[providerId]/callback.
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     * @param invite Optional invite code
     */
    authOrganizationOrganizationIdDirectoryDirectoryIdGet(sbClientId: string, directoryId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Interactive user authentication using specific organization and a specific provider
     * Interactive user authentication with external authentication provider. If the authentication is successful, the client is redirected to /auth/provider/[providerId]/callback.
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     * @param invite Optional invite code
     */
    authOrganizationOrganizationIdProviderProviderIdGet(sbClientId: string, directoryId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Interactive user authentication with external provider
     * Interactive user authentication with external authentication provider. If the authentication is successful, the client is redirected to /auth/provider/[providerId]/callback.
     * @param sbClientId Your application client id
     * @param providerId the provider of the new user
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     * @param invite Optional invite code
     */
    authProviderProviderIdGet(sbClientId: string, providerId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * Verify email
     * @param email Email you want to verifiy
     * @param code Code that was generated for the email verification
     */
    emailsVerifyGet(email: string, code: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * Interactive user login with specific directory
     * @param sbClientId Your application client id
     * @param directoryId the directory where the user wants to log in
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     * @param randomState2 Random string to identifiy the account after the successful interactive authentication
     */
    loginDirectoryDirectoryIdGet(sbClientId: string, directoryId: string, randomState: string, randomState2?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * Interactive user login with default directory
     * @param sbClientId Your application client id
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     */
    loginGet(sbClientId: string, randomState?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Interactive user login with specific organization and a specific directory
     * Interactive user login with specific organization and a specific directory
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     */
    loginOrganizationOrganizationIdDirectoryDirectoryIdGet(sbClientId: string, organizationId: string, directoryId: string, randomState?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Interactive user login with default organization and its default directory
     * Interactive user login with specific organization
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     */
    loginOrganizationOrganizationIdGet(sbClientId: string, organizationId: string, randomState?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Interactive user login with specific organization and specific provider
     * Interactive user login with specific organization and specific provider
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param providerId the provider of the user directory
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     */
    loginOrganizationOrganizationIdProviderProviderIdGet(sbClientId: string, organizationId: string, providerId: string, randomState?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * Reset password callback
     * @param error Password reset error message
     */
    passwordResetCallbackGet(error: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * Reset password
     * @param email Target email of a password reset
     * @param code Code that was generated for the password reset process
     */
    passwordResetGet(email: string, code: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Interactive user signup with a specific directory
     * Interactive user signup with default directory
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    signupDirectoryDirectoryIdGet(sbClientId: string, directoryId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Interactive user signup with default organization and its default directory
     * Interactive user signup with default organization and its default directory
     * @param sbClientId Your application client id
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    signupGet(sbClientId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Interactive user signup with specific organization and a specific directory
     * Interactive user signup with specific organization and a specific directory
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    signupOrganizationOrganizationIdDirectoryDirectoryIdGet(sbClientId: string, organizationId: string, directoryId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Interactive user signup with specified organization and its default directory
     * Interactive user signup with specified organization and its default directory
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    signupOrganizationOrganizationIdGet(sbClientId: string, organizationId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Interactive user signup with specific organization and specific provider
     * Interactive user signup with specific organization and specific provider
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param providerId the provider of the user directory
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    signupOrganizationOrganizationIdProviderProviderIdGet(sbClientId: string, organizationId: string, providerId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Interactive user signup with default organization and a directory depending on specified provider
     * Interactive user signup with default organization and a directory depending on specified provider
     * @param sbClientId Your application client id
     * @param providerId the provider of the user directory
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    signupProviderProviderIdGet(sbClientId: string, providerId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Interactive user authentication with external provider
     * Interactive user authentication with external authentication providers for a specific directory. If the authentication is successful, the client is redirected to /auth/provider/[providerId]/callback.
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     * @param invite Optional invite code
     */
    authDirectoryDirectoryIdGetWithHttpInfo(sbClientId: string, directoryId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Interactive user authentication using specific organization and directory
     * Interactive user authentication with external authentication provider. If the authentication is successful, the client is redirected to /auth/provider/[providerId]/callback.
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     * @param invite Optional invite code
     */
    authOrganizationOrganizationIdDirectoryDirectoryIdGetWithHttpInfo(sbClientId: string, directoryId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Interactive user authentication using specific organization and a specific provider
     * Interactive user authentication with external authentication provider. If the authentication is successful, the client is redirected to /auth/provider/[providerId]/callback.
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     * @param invite Optional invite code
     */
    authOrganizationOrganizationIdProviderProviderIdGetWithHttpInfo(sbClientId: string, directoryId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Interactive user authentication with external provider
     * Interactive user authentication with external authentication provider. If the authentication is successful, the client is redirected to /auth/provider/[providerId]/callback.
     * @param sbClientId Your application client id
     * @param providerId the provider of the new user
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     * @param invite Optional invite code
     */
    authProviderProviderIdGetWithHttpInfo(sbClientId: string, providerId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Verify email
     * @param email Email you want to verifiy
     * @param code Code that was generated for the email verification
     */
    emailsVerifyGetWithHttpInfo(email: string, code: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Interactive user login with specific directory
     * @param sbClientId Your application client id
     * @param directoryId the directory where the user wants to log in
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     * @param randomState2 Random string to identifiy the account after the successful interactive authentication
     */
    loginDirectoryDirectoryIdGetWithHttpInfo(sbClientId: string, directoryId: string, randomState: string, randomState2?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Interactive user login with default directory
     * @param sbClientId Your application client id
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     */
    loginGetWithHttpInfo(sbClientId: string, randomState?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Interactive user login with specific organization and a specific directory
     * Interactive user login with specific organization and a specific directory
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     */
    loginOrganizationOrganizationIdDirectoryDirectoryIdGetWithHttpInfo(sbClientId: string, organizationId: string, directoryId: string, randomState?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Interactive user login with default organization and its default directory
     * Interactive user login with specific organization
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     */
    loginOrganizationOrganizationIdGetWithHttpInfo(sbClientId: string, organizationId: string, randomState?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Interactive user login with specific organization and specific provider
     * Interactive user login with specific organization and specific provider
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param providerId the provider of the user directory
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     */
    loginOrganizationOrganizationIdProviderProviderIdGetWithHttpInfo(sbClientId: string, organizationId: string, providerId: string, randomState?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Reset password callback
     * @param error Password reset error message
     */
    passwordResetCallbackGetWithHttpInfo(error: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Reset password
     * @param email Target email of a password reset
     * @param code Code that was generated for the password reset process
     */
    passwordResetGetWithHttpInfo(email: string, code: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Interactive user signup with a specific directory
     * Interactive user signup with default directory
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    signupDirectoryDirectoryIdGetWithHttpInfo(sbClientId: string, directoryId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Interactive user signup with default organization and its default directory
     * Interactive user signup with default organization and its default directory
     * @param sbClientId Your application client id
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    signupGetWithHttpInfo(sbClientId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Interactive user signup with specific organization and a specific directory
     * Interactive user signup with specific organization and a specific directory
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    signupOrganizationOrganizationIdDirectoryDirectoryIdGetWithHttpInfo(sbClientId: string, organizationId: string, directoryId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Interactive user signup with specified organization and its default directory
     * Interactive user signup with specified organization and its default directory
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    signupOrganizationOrganizationIdGetWithHttpInfo(sbClientId: string, organizationId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Interactive user signup with specific organization and specific provider
     * Interactive user signup with specific organization and specific provider
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param providerId the provider of the user directory
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    signupOrganizationOrganizationIdProviderProviderIdGetWithHttpInfo(sbClientId: string, organizationId: string, providerId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Interactive user signup with default organization and a directory depending on specified provider
     * Interactive user signup with default organization and a directory depending on specified provider
     * @param sbClientId Your application client id
     * @param providerId the provider of the user directory
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    signupProviderProviderIdGetWithHttpInfo(sbClientId: string, providerId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<Response>;
}
