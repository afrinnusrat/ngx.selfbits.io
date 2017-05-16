import * as models from './models';
export interface NewFileResponse {
    file?: models.File;
    fileId?: string;
    putFileUrl?: string;
    postVerifyUploadUrl?: string;
}
