import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { NewFile } from '../model/NewFile';
import { FilesApi } from '../api/FilesApi';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap'

@Injectable()
export class FileService {

	constructor(private filesApi: FilesApi, private http: Http) { }

	uploadPrivate(fileMetadata: NewFile, file: File): Observable<any> {
		var headers = new Headers();
		headers.append('Content-Type', file.type ? file.type : 'application/octet-stream');


		let filemetaId;
		return this.filesApi.createPrivate({ filePath: fileMetadata.filePath, customData: fileMetadata.customData })
			.mergeMap(res => {
				filemetaId = res.fileId;
				return this.http.put(res.putFileUrl, file, {
					headers: headers
				})
			})
			.mergeMap(res => {
				return this.filesApi.verifyUpload(filemetaId, { etag: res.headers.get('etag') })
			});
	}

	uploadPublic(fileMetadata: NewFile, file: File): Observable<any> {
		var headers = new Headers();
		headers.append('Content-Type', file.type ? file.type : 'application/octet-stream');


		let filemetaId;
		return this.filesApi.createPublic({ filePath: fileMetadata.filePath, customData: fileMetadata.customData })
			.mergeMap(res => {
				filemetaId = res.fileId;
				return this.http.put(res.putFileUrl, file, {
					headers: headers
				})
			})
			.mergeMap(res => {
				return this.filesApi.verifyUpload(filemetaId, { etag: res.headers.get('etag') })
			});
	}

}
