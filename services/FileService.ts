import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Filemeta } from '../model/Filemeta';
import { FilemetasApi } from '../api/FilemetasApi';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap'

@Injectable()
export class FileService {

 constructor(private filemetasApi: FilemetasApi, private http: Http) { }

 get(): Observable<any> {
   return this.filemetasApi.filemetasGet();
 }

 upload(filePath, file): Observable<any> {
   var headers = new Headers();
   headers.append('Content-Type', file.type ? file.type : 'application/octet-stream');


   let filemetaId;
   return this.filemetasApi.filemetasPost({ filePath: filePath })
     .mergeMap(res => {
       filemetaId = res.fileId;
       return this.http.put(res.putFileUrl, file, {
         headers: headers
       })
     })
     .mergeMap(res => {
       return this.filemetasApi.filemetasFilemetaIdVerifyPost(filemetaId, { etag: res.headers.get('etag')})
     });
 }

 delete(fileId) {
   return this.filemetasApi.filemetasFilemetaIdDelete(fileId);
 }

}
