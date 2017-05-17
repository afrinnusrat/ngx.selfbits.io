import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class EmailVerificationApi {
    protected http: Http;
    configuration: Configuration;
    defaultHeaders: Headers;
    constructor(http: Http, configuration: Configuration);
    /**
     *
     * Trigger email verification
     * @param sendVerificationEmailRequest Email you want to verifiy
     */
    emailsVerificationPost(sendVerificationEmailRequest: models.SendVerificationEmailRequest, extraHttpRequestParams?: any): Observable<models.SendVerificationEmailResponse>;
    /**
     *
     * Trigger email verification
     * @param sendVerificationEmailRequest Email you want to verifiy
     */
    emailsVerificationPostWithHttpInfo(sendVerificationEmailRequest: models.SendVerificationEmailRequest, extraHttpRequestParams?: any): Observable<Response>;
}