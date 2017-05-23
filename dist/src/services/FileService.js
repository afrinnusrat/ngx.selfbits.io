"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var FilesApi_1 = require("../api/FilesApi");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/operator/mergeMap");
var FileService = (function () {
    function FileService(filesApi, http) {
        this.filesApi = filesApi;
        this.http = http;
    }
    FileService.prototype.uploadPrivate = function (fileMetadata, file) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', file.type ? file.type : 'application/octet-stream');
        var filemetaId;
        return this.filesApi.createPrivate({ filePath: fileMetadata.filePath, customData: fileMetadata.customData })
            .mergeMap(function (res) {
            filemetaId = res.fileId;
            return _this.http.put(res.putFileUrl, file, {
                headers: headers
            });
        })
            .mergeMap(function (res) {
            return _this.filesApi.verifyUpload(filemetaId, { etag: res.headers.get('etag') });
        });
    };
    FileService.prototype.uploadPublic = function (fileMetadata, file) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', file.type ? file.type : 'application/octet-stream');
        var filemetaId;
        return this.filesApi.createPublic({ filePath: fileMetadata.filePath, customData: fileMetadata.customData })
            .mergeMap(function (res) {
            filemetaId = res.fileId;
            return _this.http.put(res.putFileUrl, file, {
                headers: headers
            });
        })
            .mergeMap(function (res) {
            return _this.filesApi.verifyUpload(filemetaId, { etag: res.headers.get('etag') });
        });
    };
    return FileService;
}());
FileService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
FileService.ctorParameters = function () { return [
    { type: FilesApi_1.FilesApi, },
    { type: http_1.Http, },
]; };
exports.FileService = FileService;
//# sourceMappingURL=FileService.js.map