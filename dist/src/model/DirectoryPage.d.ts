import * as models from './models';
export interface DirectoryPage {
    docs?: Array<models.Directory>;
    total?: number;
    limit?: number;
    page?: number;
    pages?: number;
}
