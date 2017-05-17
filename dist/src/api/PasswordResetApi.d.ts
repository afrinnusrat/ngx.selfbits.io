import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class PasswordResetApi {
    protected http: Http;
    configuration: Configuration;
    defaultHeaders: Headers;
    constructor(http: Http, configuration: Configuration);
    /**
     * password reset
     * reset the password of a user
     * @param resetPasswordRequest The password reset request
     */
    passwordResetPost(resetPasswordRequest: models.ResetPasswordRequest, extraHttpRequestParams?: any): Observable<models.ResetPasswordResponse>;
    /**
     * trigger password reset by email
     * request an email to reset a password of a user
     * @param sendPasswordResetEmailRequest accountId (email or username) of your user
     */
    triggerPasswordReset(sendPasswordResetEmailRequest: models.SendPasswordResetEmailRequest, extraHttpRequestParams?: any): Observable<models.SendPasswordResetEmailResponse>;
    /**
     * password reset
     * reset the password of a user
     * @param resetPasswordRequest The password reset request
     */
    passwordResetPostWithHttpInfo(resetPasswordRequest: models.ResetPasswordRequest, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * trigger password reset by email
     * request an email to reset a password of a user
     * @param sendPasswordResetEmailRequest accountId (email or username) of your user
     */
    triggerPasswordResetWithHttpInfo(sendPasswordResetEmailRequest: models.SendPasswordResetEmailRequest, extraHttpRequestParams?: any): Observable<Response>;
}
