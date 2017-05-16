import { Http } from '@angular/http';
import { NewFile } from '../model/NewFile';
import { FilesApi } from '../api/FilesApi';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
export declare class FileService {
    private filesApi;
    private http;
    constructor(filesApi: FilesApi, http: Http);
    uploadPrivate(fileMetadata: NewFile, file: File): Observable<any>;
    uploadPublic(fileMetadata: NewFile, file: File): Observable<any>;
}
