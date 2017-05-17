import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class ApplicationsApi {
    protected http: Http;
    configuration: Configuration;
    defaultHeaders: Headers;
    constructor(http: Http, configuration: Configuration);
    /**
     *
     * Returns current application
     */
    rootGet(extraHttpRequestParams?: any): Observable<models.Application>;
    /**
     *
     * Returns current application
     */
    rootGetWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
}
