import * as models from './models';
export interface RolePermissionPage {
    docs?: Array<models.RolePermission>;
    total?: number;
    limit?: number;
    page?: number;
    pages?: number;
}
