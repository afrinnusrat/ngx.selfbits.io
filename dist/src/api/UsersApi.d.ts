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
    /**
     *
     * Create multiple new users
     * @param users Multiple users
     */
    usersBulkPost(users: models.NewUserArray, extraHttpRequestParams?: any): Observable<models.UserArray>;
    /**
     *
     * Bulk delete existing users
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    usersDelete(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     *
     * Returns users
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;john doe\&quot;, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1, \&quot;name\&quot; : 1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    usersGet(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.UserPage>;
    /**
     *
     * Create new user
     * @param user Your new user
     */
    usersPost(user: models.NewUser, extraHttpRequestParams?: any): Observable<models.User>;
    /**
     *
     * Bulk update existing users
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param userBulkUpdate Use filter to find the users and do a bulk update
     */
    usersPut(filter: string, userBulkUpdate: models.UserBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    /**
     *
     * delete existing user
     * @param userId The user identifier
     */
    usersUserIdDelete(userId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * Get one existing users
     * @param userId The user identifier
     */
    usersUserIdGet(userId: string, extraHttpRequestParams?: any): Observable<models.User>;
    /**
     *
     * update existing user
     * @param userId The user identifier
     * @param updatedUser updated user
     */
    usersUserIdPut(userId: string, updatedUser: models.UserUpdate, extraHttpRequestParams?: any): Observable<models.User>;
    /**
     *
     * Create multiple new users
     * @param users Multiple users
     */
    usersBulkPostWithHttpInfo(users: models.NewUserArray, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Bulk delete existing users
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    usersDeleteWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Returns users
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;john doe\&quot;, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1, \&quot;name\&quot; : 1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    usersGetWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Create new user
     * @param user Your new user
     */
    usersPostWithHttpInfo(user: models.NewUser, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Bulk update existing users
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param userBulkUpdate Use filter to find the users and do a bulk update
     */
    usersPutWithHttpInfo(filter: string, userBulkUpdate: models.UserBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * delete existing user
     * @param userId The user identifier
     */
    usersUserIdDeleteWithHttpInfo(userId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Get one existing users
     * @param userId The user identifier
     */
    usersUserIdGetWithHttpInfo(userId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * update existing user
     * @param userId The user identifier
     * @param updatedUser updated user
     */
    usersUserIdPutWithHttpInfo(userId: string, updatedUser: models.UserUpdate, extraHttpRequestParams?: any): Observable<Response>;
}
