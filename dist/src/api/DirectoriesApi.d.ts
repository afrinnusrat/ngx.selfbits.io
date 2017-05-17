import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class DirectoriesApi {
    protected http: Http;
    configuration: Configuration;
    defaultHeaders: Headers;
    constructor(http: Http, configuration: Configuration);
    /**
     *
     * Create multiple new directories
     * @param directories Multiple directories
     */
    directoriesBulkPost(directories?: models.NewDirectoryArray, extraHttpRequestParams?: any): Observable<models.DirectoryArray>;
    /**
     *
     * Bulk delete existing directories
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    directoriesDelete(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    /**
     *
     * delete existing directory
     * @param directoryId The directory identifier
     */
    directoriesDirectoryIdDelete(directoryId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     * Get one existing directory
     * @param directoryId The directory identifier
     */
    directoriesDirectoryIdGet(directoryId: string, extraHttpRequestParams?: any): Observable<models.Directory>;
    /**
     *
     * update existing directory
     * @param directoryId The user identifier
     * @param updatedDirectory updated directory
     */
    directoriesDirectoryIdPut(directoryId: string, updatedDirectory: models.DirectoryUpdate, extraHttpRequestParams?: any): Observable<models.Directory>;
    /**
     *
     * Returns directories
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    directoriesGet(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.DirectoryPage>;
    /**
     *
     * Create new directory
     * @param directory Your new directory
     */
    directoriesPost(directory?: models.NewDirectory, extraHttpRequestParams?: any): Observable<models.Directory>;
    /**
     *
     * Bulk update existing users
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param directoryBulkUpdate Use filter to find the directories and do a bulk update
     */
    directoriesPut(filter: string, directoryBulkUpdate: models.DirectoryBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    /**
     *
     * Create multiple new directories
     * @param directories Multiple directories
     */
    directoriesBulkPostWithHttpInfo(directories?: models.NewDirectoryArray, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Bulk delete existing directories
     * @param filter Sequelize filter object like {\&quot;name\&quot;: { \&quot;$like\&quot; : \&quot;app%\&quot;}, \&quot;customData\&quot;: { \&quot;$contains\&quot;: {\&quot;key2\&quot; : \&quot;val2\&quot;}}}
     */
    directoriesDeleteWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * delete existing directory
     * @param directoryId The directory identifier
     */
    directoriesDirectoryIdDeleteWithHttpInfo(directoryId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Get one existing directory
     * @param directoryId The directory identifier
     */
    directoriesDirectoryIdGetWithHttpInfo(directoryId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * update existing directory
     * @param directoryId The user identifier
     * @param updatedDirectory updated directory
     */
    directoriesDirectoryIdPutWithHttpInfo(directoryId: string, updatedDirectory: models.DirectoryUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Returns directories
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;sbcloud\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    directoriesGetWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Create new directory
     * @param directory Your new directory
     */
    directoriesPostWithHttpInfo(directory?: models.NewDirectory, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     * Bulk update existing users
     * @param filter Sequelize filter object like {\&quot;name\&quot;: \&quot;xyz\&quot;}
     * @param directoryBulkUpdate Use filter to find the directories and do a bulk update
     */
    directoriesPutWithHttpInfo(filter: string, directoryBulkUpdate: models.DirectoryBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
}
