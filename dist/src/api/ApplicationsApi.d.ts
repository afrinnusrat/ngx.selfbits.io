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
    rootGet(extraHttpRequestParams?: any): Observable<models.Application>;
    rootGetWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
}
