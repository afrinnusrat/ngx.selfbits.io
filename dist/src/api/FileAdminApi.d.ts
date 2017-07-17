import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class FileAdminApi {
    protected http: Http;
    configuration: Configuration;
    defaultHeaders: Headers;
    sbClientId: string;
    sbClientSecret: string;
    constructor(http: Http, configuration: Configuration);
    /**
     * browse file path
     * browse file folder structure
     * @param filePath The path to the folder you want to browse (f.e. private/myfolder/)
     */
    browsePrivateFilesByPath(filePath: string, extraHttpRequestParams?: any): Observable<models.FileBrowserDocs>;
    /**
     * browse file path
     * browse file folder structure
     * @param filePath The path to the folder you want to browse (f.e. public/myfolder/)
     */
    browsePublicFilesByPath(filePath: string, extraHttpRequestParams?: any): Observable<models.FileBrowserDocs>;
    /**
     * initialize private file upload
     * Initialize new private file upload
     * @param file Your new file
     */
    createPrivate(file?: models.NewFile, extraHttpRequestParams?: any): Observable<models.NewFileResponse>;
    /**
     * initialize public file upload
     * Initialize new public file upload
     * @param file Your new file
     */
    createPublic(file?: models.NewFile, extraHttpRequestParams?: any): Observable<models.NewFileResponse>;
    /**
     * delete existing file
     * delete existing file
     * @param fileId The file identifier
     */
    deleteOne(fileId: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     * query files
     * Query files and receive paginated result set
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;isPublic\&quot;: \&quot;true\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    query(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<models.FilePage>;
    /**
     * Read existing file by id or by filePath
     * Get the metadata of an existing file by id or by filePath
     * @param fileId The file identifier
     * @param filePath The filePath
     */
    readOne(fileId?: string, filePath?: string, extraHttpRequestParams?: any): Observable<models.File>;
    /**
     * Update customData of an existing file
     * Update customData of an existing file
     * @param fileId The user identifier
     * @param updatedFile updated file
     */
    updateOne(fileId: string, updatedFile: models.FileUpdate, extraHttpRequestParams?: any): Observable<models.File>;
    /**
     * verify the successful file upload
     * verify the successful file upload using the ETag header value
     * @param fileId The target file you want to verify
     * @param etagObject The etag response header of the successful file upload
     */
    verifyUpload(fileId: string, etagObject: models.FileVerificationRequest, extraHttpRequestParams?: any): Observable<models.File>;
    /**
     * browse file path
     * browse file folder structure
     * @param filePath The path to the folder you want to browse (f.e. private/myfolder/)
     */
    browsePrivateFilesByPathWithHttpInfo(filePath: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * browse file path
     * browse file folder structure
     * @param filePath The path to the folder you want to browse (f.e. public/myfolder/)
     */
    browsePublicFilesByPathWithHttpInfo(filePath: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * initialize private file upload
     * Initialize new private file upload
     * @param file Your new file
     */
    createPrivateWithHttpInfo(file?: models.NewFile, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * initialize public file upload
     * Initialize new public file upload
     * @param file Your new file
     */
    createPublicWithHttpInfo(file?: models.NewFile, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * delete existing file
     * delete existing file
     * @param fileId The file identifier
     */
    deleteOneWithHttpInfo(fileId: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * query files
     * Query files and receive paginated result set
     * @param pageSize Items per page
     * @param pageNumber The page index (starting from 1)
     * @param filter Sequelize filter object like {\&quot;isPublic\&quot;: \&quot;true\&quot;}
     * @param sort Sort object (1&#x3D;ascending, -1&#x3D;descending) like {\&quot;createdAt\&quot;: -1 }
     * @param select Select object (1&#x3D;include, -1&#x3D;exclude) like {\&quot;Id\&quot;: 1, \&quot;name\&quot;: 1 }
     */
    queryWithHttpInfo(pageSize?: number, pageNumber?: number, filter?: string, sort?: string, select?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Read existing file by id or by filePath
     * Get the metadata of an existing file by id or by filePath
     * @param fileId The file identifier
     * @param filePath The filePath
     */
    readOneWithHttpInfo(fileId?: string, filePath?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Update customData of an existing file
     * Update customData of an existing file
     * @param fileId The user identifier
     * @param updatedFile updated file
     */
    updateOneWithHttpInfo(fileId: string, updatedFile: models.FileUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * verify the successful file upload
     * verify the successful file upload using the ETag header value
     * @param fileId The target file you want to verify
     * @param etagObject The etag response header of the successful file upload
     */
    verifyUploadWithHttpInfo(fileId: string, etagObject: models.FileVerificationRequest, extraHttpRequestParams?: any): Observable<Response>;
}
