import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class JoinApi {
    protected http: Http;
    configuration: Configuration;
    defaultHeaders: Headers;
    constructor(http: Http, configuration: Configuration);
    /**
     * Join a specific organization
     * User join with specific organization. The login credentials will be copied from existing organization account credentials.
     * @param organizationId the organization of the new user
     * @param invite Optional invite code
     */
    joinOrganization(organizationId: string, invite?: string, extraHttpRequestParams?: any): Observable<models.UserSignupResponse>;
    /**
     * Join with specific organization and a specific directory
     * User join with specific organization and a specific directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password |
     * @param organizationId the organization of the new user
     * @param directoryId the directory of the new user
     * @param userSignupRequest User signup request
     * @param invite Optional invite code
     */
    joinOrganizationByDirectory(organizationId: string, directoryId: string, userSignupRequest: models.UserSignupRequest, invite?: string, extraHttpRequestParams?: any): Observable<models.UserSignupResponse>;
    /**
     * Signup with specific organization and directory that belongs to a specific provider
     * User join with specific organization and a directory that belongs to a specific provider. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password |
     * @param organizationId the organization of the new user
     * @param directoryId the directory of the new user
     * @param userSignupRequest User signup request
     * @param invite Optional invite code
     */
    joinOrganizationByProvider(organizationId: string, directoryId: string, userSignupRequest: models.UserSignupRequest, invite?: string, extraHttpRequestParams?: any): Observable<models.UserSignupResponse>;
    /**
     * Join a specific organization
     * User join with specific organization. The login credentials will be copied from existing organization account credentials.
     * @param organizationId the organization of the new user
     * @param invite Optional invite code
     */
    joinOrganizationWithHttpInfo(organizationId: string, invite?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Join with specific organization and a specific directory
     * User join with specific organization and a specific directory. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password |
     * @param organizationId the organization of the new user
     * @param directoryId the directory of the new user
     * @param userSignupRequest User signup request
     * @param invite Optional invite code
     */
    joinOrganizationByDirectoryWithHttpInfo(organizationId: string, directoryId: string, userSignupRequest: models.UserSignupRequest, invite?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Signup with specific organization and directory that belongs to a specific provider
     * User join with specific organization and a directory that belongs to a specific provider. The attributes that are used as credentials to login the user depend on the directory type:  | directoryType | accountId | accountPassword | |----------|----------|----------| | sbcloud | email | password | | anonymouscloud | username (random if empty) | password (random if empty) | | ldap | username | password |
     * @param organizationId the organization of the new user
     * @param directoryId the directory of the new user
     * @param userSignupRequest User signup request
     * @param invite Optional invite code
     */
    joinOrganizationByProviderWithHttpInfo(organizationId: string, directoryId: string, userSignupRequest: models.UserSignupRequest, invite?: string, extraHttpRequestParams?: any): Observable<Response>;
}
