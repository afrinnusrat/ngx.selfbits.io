import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class UsersApi {
    protected http: Http;
    configuration: Configuration;
    defaultHeaders: Headers;
    constructor(http: Http, configuration: Configuration);
    usersBulkPost(users: models.NewUserArray, extraHttpRequestParams?: any): Observable<models.UserArray>;
    usersDelete(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    usersGet(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.UserPage>;
    usersPost(user: models.NewUser, extraHttpRequestParams?: any): Observable<models.User>;
    usersPut(filter: string, userBulkUpdate: models.UserBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    usersUserIdDelete(userId: string, extraHttpRequestParams?: any): Observable<{}>;
    usersUserIdGet(userId: string, extraHttpRequestParams?: any): Observable<models.User>;
    usersUserIdPut(userId: string, updatedUser: models.UserUpdate, extraHttpRequestParams?: any): Observable<models.User>;
    usersBulkPostWithHttpInfo(users: models.NewUserArray, extraHttpRequestParams?: any): Observable<Response>;
    usersDeleteWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    usersGetWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    usersPostWithHttpInfo(user: models.NewUser, extraHttpRequestParams?: any): Observable<Response>;
    usersPutWithHttpInfo(filter: string, userBulkUpdate: models.UserBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
    usersUserIdDeleteWithHttpInfo(userId: string, extraHttpRequestParams?: any): Observable<Response>;
    usersUserIdGetWithHttpInfo(userId: string, extraHttpRequestParams?: any): Observable<Response>;
    usersUserIdPutWithHttpInfo(userId: string, updatedUser: models.UserUpdate, extraHttpRequestParams?: any): Observable<Response>;
}
