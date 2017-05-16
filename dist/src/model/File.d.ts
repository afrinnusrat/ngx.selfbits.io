export interface File {
    id?: string;
    filePath?: string;
    key?: string;
    etag?: boolean;
    verified?: boolean;
    isPublic?: boolean;
    meta?: boolean;
    tempDownloadUrl?: string;
    customData?: any;
}
