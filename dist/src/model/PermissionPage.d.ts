import * as models from './models';
export interface PermissionPage {
    docs?: Array<models.Permission>;
    total?: number;
    limit?: number;
    page?: number;
    pages?: number;
}
