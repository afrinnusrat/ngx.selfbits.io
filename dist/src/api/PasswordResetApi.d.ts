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
    passwordResetPost(resetPasswordRequest: models.ResetPasswordRequest, extraHttpRequestParams?: any): Observable<models.ResetPasswordResponse>;
    triggerPasswordReset(sendPasswordResetEmailRequest: models.SendPasswordResetEmailRequest, extraHttpRequestParams?: any): Observable<models.SendPasswordResetEmailResponse>;
    passwordResetPostWithHttpInfo(resetPasswordRequest: models.ResetPasswordRequest, extraHttpRequestParams?: any): Observable<Response>;
    triggerPasswordResetWithHttpInfo(sendPasswordResetEmailRequest: models.SendPasswordResetEmailRequest, extraHttpRequestParams?: any): Observable<Response>;
}
