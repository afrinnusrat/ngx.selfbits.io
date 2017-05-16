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
    directoriesBulkPost(directories?: models.NewDirectoryArray, extraHttpRequestParams?: any): Observable<models.DirectoryArray>;
    directoriesDelete(filter: string, extraHttpRequestParams?: any): Observable<models.BulkDeleteResponse>;
    directoriesDirectoryIdDelete(directoryId: string, extraHttpRequestParams?: any): Observable<{}>;
    directoriesDirectoryIdGet(directoryId: string, extraHttpRequestParams?: any): Observable<models.Directory>;
    directoriesDirectoryIdPut(directoryId: string, updatedDirectory: models.DirectoryUpdate, extraHttpRequestParams?: any): Observable<models.Directory>;
    directoriesGet(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.DirectoryPage>;
    directoriesPost(directory?: models.NewDirectory, extraHttpRequestParams?: any): Observable<models.Directory>;
    directoriesPut(filter: string, directoryBulkUpdate: models.DirectoryBulkUpdate, extraHttpRequestParams?: any): Observable<models.BulkUpdateResponse>;
    directoriesBulkPostWithHttpInfo(directories?: models.NewDirectoryArray, extraHttpRequestParams?: any): Observable<Response>;
    directoriesDeleteWithHttpInfo(filter: string, extraHttpRequestParams?: any): Observable<Response>;
    directoriesDirectoryIdDeleteWithHttpInfo(directoryId: string, extraHttpRequestParams?: any): Observable<Response>;
    directoriesDirectoryIdGetWithHttpInfo(directoryId: string, extraHttpRequestParams?: any): Observable<Response>;
    directoriesDirectoryIdPutWithHttpInfo(directoryId: string, updatedDirectory: models.DirectoryUpdate, extraHttpRequestParams?: any): Observable<Response>;
    directoriesGetWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    directoriesPostWithHttpInfo(directory?: models.NewDirectory, extraHttpRequestParams?: any): Observable<Response>;
    directoriesPutWithHttpInfo(filter: string, directoryBulkUpdate: models.DirectoryBulkUpdate, extraHttpRequestParams?: any): Observable<Response>;
}
