import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Configuration } from '../configuration';
export declare class InteractiveViewsApi {
    protected http: Http;
    configuration: Configuration;
    defaultHeaders: Headers;
    sbClientId: string;
    sbClientSecret: string;
    constructor(http: Http, configuration: Configuration);
    /**
     * Interactive user authentication with external provider
     * Interactive user authentication with external authentication providers for a specific directory. If the authentication is successful, the client is redirected to /auth/provider/[providerId]/callback.
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     * @param invite Optional invite code
     */
    openAuthViewByDirectory(sbClientId: string, directoryId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Interactive user authentication using specific organization and directory
     * Interactive user authentication with external authentication provider. If the authentication is successful, the client is redirected to /auth/provider/[providerId]/callback.
     * @param sbClientId Your application client id
     * @param organizationId the target organization
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     * @param invite Optional invite code
     */
    openAuthViewByOrganizationAndDirectory(sbClientId: string, organizationId: string, directoryId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Interactive user authentication using specific organization and a specific provider
     * Interactive user authentication with external authentication provider. If the authentication is successful, the client is redirected to /auth/provider/[providerId]/callback.
     * @param sbClientId Your application client id
     * @param organizationId the target organization
     * @param providerId the target provider
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     * @param invite Optional invite code
     */
    openAuthViewByOrganizationAndProvider(sbClientId: string, organizationId: string, providerId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Interactive user authentication with external provider
     * Interactive user authentication with external authentication provider. If the authentication is successful, the client is redirected to /auth/provider/[providerId]/callback.
     * @param sbClientId Your application client id
     * @param providerId the provider of the new user
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     * @param invite Optional invite code
     */
    openAuthViewByProvider(sbClientId: string, providerId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Verify email
     * Verify email
     * @param email Email you want to verifiy
     * @param code Code that was generated for the email verification
     */
    openEmailVerificationViewByEmailAndCode(email: string, code: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Interactive user login with default directory
     * Interactive user login with default directory
     * @param sbClientId Your application client id
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     */
    openLoginView(sbClientId: string, randomState?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Interactive user login with specific directory
     * Interactive user login with specific directory
     * @param sbClientId Your application client id
     * @param directoryId the directory where the user wants to log in
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     */
    openLoginViewByDirectory(sbClientId: string, directoryId: string, randomState: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Interactive user login with default organization and its default directory
     * Interactive user login with specific organization
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     */
    openLoginViewByOrganization(sbClientId: string, organizationId: string, randomState?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Interactive user login with specific organization and a specific directory
     * Interactive user login with specific organization and a specific directory
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     */
    openLoginViewByOrganizationAndDirectory(sbClientId: string, organizationId: string, directoryId: string, randomState?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Interactive user login with specific organization and specific provider
     * Interactive user login with specific organization and specific provider
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param providerId the provider of the user directory
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     */
    openLoginViewByOrganizationAndProvider(sbClientId: string, organizationId: string, providerId: string, randomState?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Reset password callback view
     * Reset password callback view
     * @param error Password reset error message
     */
    openPasswordResetCallbackView(error: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Reset password view
     * Reset password view
     * @param email Target email of a password reset
     * @param code Code that was generated for the password reset process
     */
    openPasswordResetView(email: string, code: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Interactive user signup with default organization and its default directory
     * Interactive user signup with default organization and its default directory
     * @param sbClientId Your application client id
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    openSignupView(sbClientId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Interactive user signup with a specific directory
     * Interactive user signup with default directory
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    openSignupViewByDirectory(sbClientId: string, directoryId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Interactive user signup with specified organization and its default directory
     * Interactive user signup with specified organization and its default directory
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    openSignupViewByOrganization(sbClientId: string, organizationId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Interactive user signup with specific organization and a specific directory
     * Interactive user signup with specific organization and a specific directory
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    openSignupViewByOrganizationAndDirectory(sbClientId: string, organizationId: string, directoryId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Interactive user signup with specific organization and specific provider
     * Interactive user signup with specific organization and specific provider
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param providerId the provider of the user directory
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    openSignupViewByOrganizationAndProvider(sbClientId: string, organizationId: string, providerId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Interactive user signup with default organization and a directory depending on specified provider
     * Interactive user signup with default organization and a directory depending on specified provider
     * @param sbClientId Your application client id
     * @param providerId the provider of the user directory
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    openSignupViewByProvider(sbClientId: string, providerId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * Interactive user authentication with external provider
     * Interactive user authentication with external authentication providers for a specific directory. If the authentication is successful, the client is redirected to /auth/provider/[providerId]/callback.
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     * @param invite Optional invite code
     */
    openAuthViewByDirectoryWithHttpInfo(sbClientId: string, directoryId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Interactive user authentication using specific organization and directory
     * Interactive user authentication with external authentication provider. If the authentication is successful, the client is redirected to /auth/provider/[providerId]/callback.
     * @param sbClientId Your application client id
     * @param organizationId the target organization
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     * @param invite Optional invite code
     */
    openAuthViewByOrganizationAndDirectoryWithHttpInfo(sbClientId: string, organizationId: string, directoryId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Interactive user authentication using specific organization and a specific provider
     * Interactive user authentication with external authentication provider. If the authentication is successful, the client is redirected to /auth/provider/[providerId]/callback.
     * @param sbClientId Your application client id
     * @param organizationId the target organization
     * @param providerId the target provider
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     * @param invite Optional invite code
     */
    openAuthViewByOrganizationAndProviderWithHttpInfo(sbClientId: string, organizationId: string, providerId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Interactive user authentication with external provider
     * Interactive user authentication with external authentication provider. If the authentication is successful, the client is redirected to /auth/provider/[providerId]/callback.
     * @param sbClientId Your application client id
     * @param providerId the provider of the new user
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     * @param invite Optional invite code
     */
    openAuthViewByProviderWithHttpInfo(sbClientId: string, providerId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Verify email
     * Verify email
     * @param email Email you want to verifiy
     * @param code Code that was generated for the email verification
     */
    openEmailVerificationViewByEmailAndCodeWithHttpInfo(email: string, code: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Interactive user login with default directory
     * Interactive user login with default directory
     * @param sbClientId Your application client id
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     */
    openLoginViewWithHttpInfo(sbClientId: string, randomState?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Interactive user login with specific directory
     * Interactive user login with specific directory
     * @param sbClientId Your application client id
     * @param directoryId the directory where the user wants to log in
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     */
    openLoginViewByDirectoryWithHttpInfo(sbClientId: string, directoryId: string, randomState: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Interactive user login with default organization and its default directory
     * Interactive user login with specific organization
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     */
    openLoginViewByOrganizationWithHttpInfo(sbClientId: string, organizationId: string, randomState?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Interactive user login with specific organization and a specific directory
     * Interactive user login with specific organization and a specific directory
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     */
    openLoginViewByOrganizationAndDirectoryWithHttpInfo(sbClientId: string, organizationId: string, directoryId: string, randomState?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Interactive user login with specific organization and specific provider
     * Interactive user login with specific organization and specific provider
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param providerId the provider of the user directory
     * @param randomState Random string to identifiy the account after the successful interactive authentication
     */
    openLoginViewByOrganizationAndProviderWithHttpInfo(sbClientId: string, organizationId: string, providerId: string, randomState?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Reset password callback view
     * Reset password callback view
     * @param error Password reset error message
     */
    openPasswordResetCallbackViewWithHttpInfo(error: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Reset password view
     * Reset password view
     * @param email Target email of a password reset
     * @param code Code that was generated for the password reset process
     */
    openPasswordResetViewWithHttpInfo(email: string, code: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Interactive user signup with default organization and its default directory
     * Interactive user signup with default organization and its default directory
     * @param sbClientId Your application client id
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    openSignupViewWithHttpInfo(sbClientId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Interactive user signup with a specific directory
     * Interactive user signup with default directory
     * @param sbClientId Your application client id
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    openSignupViewByDirectoryWithHttpInfo(sbClientId: string, directoryId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Interactive user signup with specified organization and its default directory
     * Interactive user signup with specified organization and its default directory
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    openSignupViewByOrganizationWithHttpInfo(sbClientId: string, organizationId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Interactive user signup with specific organization and a specific directory
     * Interactive user signup with specific organization and a specific directory
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param directoryId the directory of the new user
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    openSignupViewByOrganizationAndDirectoryWithHttpInfo(sbClientId: string, organizationId: string, directoryId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Interactive user signup with specific organization and specific provider
     * Interactive user signup with specific organization and specific provider
     * @param sbClientId Your application client id
     * @param organizationId the organization of the new user
     * @param providerId the provider of the user directory
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    openSignupViewByOrganizationAndProviderWithHttpInfo(sbClientId: string, organizationId: string, providerId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Interactive user signup with default organization and a directory depending on specified provider
     * Interactive user signup with default organization and a directory depending on specified provider
     * @param sbClientId Your application client id
     * @param providerId the provider of the user directory
     * @param randomState Random string to identifiy the account after the successful interactive signup
     * @param invite Optional invite code
     */
    openSignupViewByProviderWithHttpInfo(sbClientId: string, providerId: string, randomState: string, invite?: string, extraHttpRequestParams?: any): Observable<Response>;
}
